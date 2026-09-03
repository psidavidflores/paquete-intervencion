"""Generate lightweight first-page previews for the public resource catalog."""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLICATION = ROOT / "publicacion-github-completa"
DOCS = PUBLICATION / "docs"
RESOURCE_ROOT = PUBLICATION / "recursos"
MANIFEST = DOCS / "resources.json"
PREVIEW_ROOT = DOCS / "previews"
POPPLER = Path(shutil.which("pdftoppm") or "C:/Users/DETPC/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/Library/bin/pdftoppm.exe")


def preview_id(path: str) -> str:
    return hashlib.sha256(path.encode("utf-8")).hexdigest()[:16]


def human_size(size: int) -> str:
    units = ("B", "KB", "MB", "GB")
    value = float(size)
    for unit in units:
        if value < 1024 or unit == units[-1]:
            return f"{value:.0f} {unit}" if unit == "B" else f"{value:.1f} {unit}"
        value /= 1024
    return f"{size} B"


def render_pdf(source: Path, destination: Path) -> bool:
    destination.parent.mkdir(parents=True, exist_ok=True)
    prefix = destination.with_suffix("")
    command = [
        str(POPPLER),
        "-f",
        "1",
        "-l",
        "1",
        "-singlefile",
        "-jpeg",
        "-jpegopt",
        "quality=78",
        "-scale-to",
        "900",
        str(source),
        str(prefix),
    ]
    result = subprocess.run(command, capture_output=True, text=True, check=False)
    return result.returncode == 0 and destination.exists()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true", help="Regenerate existing PDF previews")
    args = parser.parse_args()

    if not POPPLER.exists():
        raise SystemExit(f"No se encontró pdftoppm en {POPPLER}")

    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    rendered = 0
    failed: list[str] = []

    for files in manifest.values():
        for item in files:
            relative_path = item["path"]
            extension = item.get("extension", "").lower()
            source = PUBLICATION / Path(*relative_path.split("/"))
            if source.exists():
                item["size"] = human_size(source.stat().st_size)
            if extension != "pdf":
                item.pop("preview", None)
                continue

            destination = PREVIEW_ROOT / f"{preview_id(relative_path)}.jpg"
            if args.force or not destination.exists():
                if not render_pdf(source, destination):
                    item["preview"] = "previews/pdf-placeholder.svg"
                    failed.append(relative_path)
                    continue
                rendered += 1
            item["preview"] = f"previews/{destination.name}"

    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Miniaturas PDF disponibles: {sum(1 for files in manifest.values() for item in files if item.get('preview'))}")
    print(f"Miniaturas generadas en esta ejecución: {rendered}")
    if failed:
        print(f"PDF sin miniatura: {len(failed)}")
        for path in failed[:20]:
            print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
