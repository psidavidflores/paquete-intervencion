const resourceData = [
  { id: "atencion", title: "Atención, concentración y grafomotricidad", description: "Actividades didácticas para fortalecer atención, concentración, coordinación visomotora y habilidades preacadémicas.", audience: "Infancia", area: "Atención y habilidades preacadémicas", fileCount: 53, type: "Área temática", groups: ["infancia", "materiales"], accent: "aqua", icon: "⌁", tag: "Infancia" },
  { id: "autorregulacion-infantil", title: "Control del enfado y autorregulación infantil", description: "Cuentos, fichas y ejercicios para acompañar impulsividad, rabietas, relajación y reconocimiento emocional.", audience: "Infancia", area: "Regulación emocional", fileCount: 25, type: "Área temática", groups: ["infancia", "materiales"], accent: "pink", icon: "♡", tag: "Autorregulación" },
  { id: "estimulacion-lenguaje", title: "Estimulación del lenguaje", description: "Cuadernillos y actividades para apoyar el desarrollo del lenguaje oral, la conciencia fonológica y la comunicación.", audience: "Infancia", area: "Lenguaje y comunicación", fileCount: 6, type: "Área temática", groups: ["infancia", "materiales"], accent: "blue", icon: "≈", tag: "Lenguaje" },
  { id: "inteligencias-multiples", title: "Inteligencias múltiples y aprendizaje", description: "Biblioteca de consulta y actividades inspiradas en el desarrollo de distintas formas de aprender y expresarse.", audience: "Infancia y adolescencia", area: "Aprendizaje y desarrollo", fileCount: 22, type: "Biblioteca temática", groups: ["infancia", "adolescencia", "materiales"], accent: "yellow", icon: "✦", tag: "Aprendizaje" },
  { id: "juegos-interactivos", title: "Juegos interactivos y material educativo", description: "Recursos visuales, juegos, cuentos y presentaciones para hacer más activa y significativa la intervención.", audience: "Infancia", area: "Juego, aprendizaje y participación", fileCount: 368, type: "Biblioteca de recursos", groups: ["infancia", "materiales"], accent: "coral", icon: "✧", tag: "Más amplio" },
  { id: "adulto-mayor", title: "Estimulación cognitiva para adulto mayor", description: "Cuadernillos, ejercicios y recursos para memoria, participación, bienestar y acompañamiento de personas mayores.", audience: "Adulto mayor", area: "Memoria y bienestar", fileCount: 15, type: "Área temática", groups: ["adulto-mayor", "materiales"], accent: "yellow", icon: "✺", tag: "Adulto mayor" },
  { id: "autismo", title: "Autismo y habilidades para la vida diaria", description: "Guías, cuentos y actividades para apoyar comunicación, imitación, habilidades sociales y participación familiar.", audience: "Infancia y adolescencia", area: "Autismo y habilidades sociales", fileCount: 40, type: "Pack temático", groups: ["infancia", "adolescencia", "packs"], accent: "aqua", icon: "◎", tag: "Pack" },
  { id: "super-educativo", title: "Pack educativo: dislexia, discalculia y memoria", description: "Material de apoyo para lectoescritura, razonamiento matemático, memoria y estimulación cognitiva.", audience: "Infancia y adolescencia", area: "Aprendizaje y necesidades educativas", fileCount: 81, type: "Pack temático", groups: ["infancia", "adolescencia", "packs"], accent: "blue", icon: "↗", tag: "Pack" },
  { id: "tdah", title: "TDAH: atención y funciones ejecutivas", description: "Ejercicios y fichas para atención, memoria de trabajo, organización, razonamiento y autorregulación.", audience: "Infancia y adolescencia", area: "TDAH y funciones ejecutivas", fileCount: 40, type: "Pack temático", groups: ["infancia", "adolescencia", "packs"], accent: "pink", icon: "✦", tag: "Pack" },
  { id: "sindrome-down", title: "Síndrome de Down y desarrollo de habilidades", description: "Material de apoyo para comunicación, lectoescritura, habilidades sociales y acompañamiento temprano.", audience: "Infancia y adolescencia", area: "Desarrollo y comunicación", fileCount: 13, type: "Área temática", groups: ["infancia", "adolescencia", "materiales"], accent: "coral", icon: "◌", tag: "Desarrollo" },
  { id: "terapia-lenguaje", title: "Terapia de lenguaje y comunicación", description: "Cuadernillos, fichas y materiales organizados para apoyar lenguaje, lectoescritura, motricidad y fluidez.", audience: "Infancia y adolescencia", area: "Lenguaje, habla y comunicación", fileCount: 115, type: "Biblioteca de recursos", groups: ["infancia", "adolescencia", "materiales"], accent: "aqua", icon: "⌁", tag: "Biblioteca" }
];

const GITHUB_REPOSITORY = "https://github.com/psidavidflores/paquete-intervencion";

const state = { filter: "all", query: "" };
const embeddedManifest = window.__RESOURCE_MANIFEST__;
let resourceFiles = embeddedManifest && typeof embeddedManifest === "object" ? embeddedManifest : {};
let filesLoaded = Object.keys(resourceFiles).length > 0;
let currentResourceId = "";
const categoryView = document.querySelector("#catalog-view");
const filesView = document.querySelector("#files-view");
const resourceGrid = document.querySelector("#resource-grid");
const fileGrid = document.querySelector("#file-grid");
const emptyState = document.querySelector("#empty-state");
const fileEmpty = document.querySelector("#file-empty");
const resourceSearch = document.querySelector("#resource-search");
const fileSearch = document.querySelector("#file-search");
const categoryTotal = document.querySelector("#category-total");
const fileTotal = document.querySelector("#file-total");
const sidebarFileTotal = document.querySelector("#sidebar-file-total");
const filesTitle = document.querySelector("#files-title");
const filesTotal = document.querySelector("#files-total");
const sectionDownload = document.querySelector("#download-section");
const fileEmptyTitle = document.querySelector("#file-empty-title");
const fileEmptyCopy = document.querySelector("#file-empty-copy");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[character]));
}

function githubFilePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function githubRawUrl(path) {
  return `https://raw.githubusercontent.com/psidavidflores/paquete-intervencion/main/${githubFilePath(path)}`;
}

function encodedPath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function localResourceUrl(path) {
  const prefix = window.location.protocol === "file:" ? "../" : "";
  return `${prefix}${encodedPath(path)}`;
}

function previewUrl(file) {
  if (file.preview) return file.preview;
  if (["jpg", "jpeg", "png", "gif", "webp"].includes(file.extension)) return localResourceUrl(file.path);
  return "";
}

function previewMarkup(file, extension) {
  const preview = previewUrl(file);
  const typeClass = `type-${extension.replace(/[^a-z0-9]/g, "")}`;
  if (preview) {
    return `<div class="file-preview has-thumbnail"><img src="${escapeHtml(preview)}" alt="Vista previa de ${escapeHtml(file.name)}" loading="lazy" /><span class="file-type">${extension.toUpperCase()}</span></div>`;
  }
  return `<div class="file-preview file-preview-type ${typeClass}"><span class="file-icon">${fileIcon(extension)}</span><span class="file-type">${extension.toUpperCase()}</span></div>`;
}

function totalIndexedFiles() {
  return Object.values(resourceFiles).reduce((total, files) => total + files.length, 0);
}

function categoryCard(resource) {
  const label = resource.fileCount ? `${resource.fileCount} archivos` : "En revisión";
  return `
    <button class="category-card tone-${escapeHtml(resource.accent)}" type="button" data-open-resource="${escapeHtml(resource.id)}" aria-label="Abrir archivos de ${escapeHtml(resource.title)}">
      <span class="category-icon">${escapeHtml(resource.icon)}</span>
      <h2>${escapeHtml(resource.title)}</h2>
      <p>${escapeHtml(resource.description)}</p>
      <span class="category-meta"><span>▱</span><strong>${escapeHtml(label)}</strong></span>
    </button>`;
}

function filteredCategories() {
  const query = state.query.trim().toLowerCase();
  return resourceData.filter((resource) => {
    const matchesFilter = state.filter === "all" || resource.groups.includes(state.filter);
    const haystack = [resource.title, resource.description, resource.audience, resource.area, resource.type].join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function applyManifest(manifest) {
  resourceFiles = manifest && typeof manifest === "object" ? manifest : {};
  filesLoaded = true;
  resourceData.forEach((resource) => {
    if (Array.isArray(resourceFiles[resource.id])) resource.fileCount = resourceFiles[resource.id].length;
  });
  renderCategories();
  if (currentResourceId) renderFiles();
}

function renderCategories() {
  const resources = filteredCategories();
  resourceGrid.innerHTML = resources.map(categoryCard).join("");
  emptyState.classList.toggle("is-hidden", resources.length > 0);
  resourceGrid.classList.toggle("is-hidden", resources.length === 0);
  categoryTotal.textContent = resources.length;
  const indexedTotal = totalIndexedFiles() || resourceData.reduce((total, resource) => total + (resource.fileCount || 0), 0);
  fileTotal.textContent = indexedTotal;
  sidebarFileTotal.textContent = indexedTotal;
}

function fileIcon(extension) {
  if (["mp4", "mp3", "avi", "mov"].includes(extension)) return "▶";
  if (["ppt", "pptx", "pps", "ppsx"].includes(extension)) return "▤";
  if (["doc", "docx", "txt"].includes(extension)) return "▧";
  if (["jpg", "jpeg", "png", "gif"].includes(extension)) return "▥";
  return "PDF";
}

function fileCard(file) {
  const name = escapeHtml(file.name);
  const path = escapeHtml(file.path);
  const location = escapeHtml(file.path.split("/").slice(2).join("/") || "Archivo de la categoría");
  const extension = escapeHtml(file.extension || "archivo").toLowerCase();
  return `
    <article class="file-card">
      ${previewMarkup(file, extension)}
      <div class="file-card-body">
        <h3 title="${name}">${name}</h3>
        <p class="file-size">${escapeHtml(file.size || "Archivo digital")}</p>
        <p class="file-location" title="${path}">${location}</p>
        <div class="file-card-actions">
          <a class="download-link" href="${escapeHtml(localResourceUrl(file.path))}" download><span aria-hidden="true">⇩</span> Descargar</a>
        </div>
      </div>
    </article>`;
}

const CRC_TABLE = Array.from({ length: 256 }, (_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  return value >>> 0;
});
const SECTION_ARCHIVE_LIMIT = 300 * 1024 * 1024;
let toastTimer;

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 5500);
}

function fileByteSize(file) {
  if (Number.isFinite(file.bytes)) return file.bytes;
  const match = String(file.size || "").replace(",", ".").match(/([\d.]+)\s*(B|KB|MB|GB)/i);
  if (!match) return 0;
  const units = { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3 };
  return Number(match[1]) * (units[match[2].toUpperCase()] || 1);
}

function humanBytes(bytes) {
  if (bytes < 1024) return `${Math.round(bytes)} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

function zipPath(file) {
  return file.path.split("/").slice(2).join("/") || file.name;
}

function crc32(bytes) {
  let value = 0xffffffff;
  for (const byte of bytes) value = CRC_TABLE[(value ^ byte) & 0xff] ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}

function writeZip16(view, offset, value) { view.setUint16(offset, value, true); }
function writeZip32(view, offset, value) { view.setUint32(offset, value >>> 0, true); }

function createZip(entries) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  let centralSize = 0;

  for (const entry of entries) {
    const name = encoder.encode(entry.name);
    const checksum = crc32(entry.data);
    const local = new Uint8Array(30 + name.length);
    const localView = new DataView(local.buffer);
    writeZip32(localView, 0, 0x04034b50);
    writeZip16(localView, 4, 20);
    writeZip16(localView, 6, 0x0800);
    writeZip16(localView, 8, 0);
    writeZip32(localView, 14, checksum);
    writeZip32(localView, 18, entry.data.length);
    writeZip32(localView, 22, entry.data.length);
    writeZip16(localView, 26, name.length);
    local.set(name, 30);
    localParts.push(local, entry.data);

    const central = new Uint8Array(46 + name.length);
    const centralView = new DataView(central.buffer);
    writeZip32(centralView, 0, 0x02014b50);
    writeZip16(centralView, 4, 20);
    writeZip16(centralView, 6, 20);
    writeZip16(centralView, 8, 0x0800);
    writeZip16(centralView, 10, 0);
    writeZip32(centralView, 16, checksum);
    writeZip32(centralView, 20, entry.data.length);
    writeZip32(centralView, 24, entry.data.length);
    writeZip16(centralView, 28, name.length);
    writeZip32(centralView, 42, offset);
    central.set(name, 46);
    centralParts.push(central);
    centralSize += central.length;
    offset += local.length + entry.data.length;
  }

  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  writeZip32(endView, 0, 0x06054b50);
  writeZip16(endView, 8, entries.length);
  writeZip16(endView, 10, entries.length);
  writeZip32(endView, 12, centralSize);
  writeZip32(endView, 16, offset);
  return new Blob([...localParts, ...centralParts, end], { type: "application/zip" });
}

async function fetchResourceData(file) {
  const urls = [localResourceUrl(file.path), githubRawUrl(file.path)];
  const tried = new Set();
  for (const url of urls) {
    if (tried.has(url)) continue;
    tried.add(url);
    try {
      const response = await fetch(url);
      if (response.ok) return new Uint8Array(await response.arrayBuffer());
    } catch (error) {
      // Try the repository's raw file as a fallback for local previews.
    }
  }
  throw new Error(`No se pudo leer ${file.name}`);
}

function archiveName(title) {
  return `${title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase() || "seccion"}.zip`;
}

async function downloadSection() {
  const resourceId = currentResourceId;
  const resource = resourceData.find((item) => item.id === resourceId);
  const files = resourceFiles[resourceId] || [];
  if (!resource || !files.length) {
    showToast("Esta sección todavía no tiene archivos publicados.");
    return;
  }

  const estimatedSize = files.reduce((total, file) => total + fileByteSize(file), 0);
  if (estimatedSize > SECTION_ARCHIVE_LIMIT) {
    showToast(`Esta sección pesa aproximadamente ${humanBytes(estimatedSize)}. Por su tamaño, descarga los archivos individualmente.`);
    return;
  }

  sectionDownload.dataset.busy = "true";
  sectionDownload.disabled = true;
  sectionDownload.innerHTML = '<span aria-hidden="true">⌛</span> Preparando…';
  try {
    const entries = [];
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      sectionDownload.innerHTML = `<span aria-hidden="true">⌛</span> ${index + 1}/${files.length}`;
      entries.push({ name: zipPath(file), data: await fetchResourceData(file) });
    }
    const archive = createZip(entries);
    const objectUrl = URL.createObjectURL(archive);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = archiveName(resource.title);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
    showToast(`Se preparó la descarga de ${files.length} archivos.`);
  } catch (error) {
    showToast("No se pudo preparar la sección. Puedes descargar los archivos individualmente.");
  } finally {
    delete sectionDownload.dataset.busy;
    sectionDownload.disabled = !(resourceFiles[resourceId] || []).length;
    sectionDownload.innerHTML = '<span aria-hidden="true">⇩</span> Descargar sección';
  }
}

function renderFiles() {
  const resource = resourceData.find((item) => item.id === currentResourceId);
  if (!resource) return;
  const files = resourceFiles[currentResourceId] || [];
  const query = fileSearch.value.trim().toLowerCase();
  const visibleFiles = files.filter((file) => `${file.name} ${file.path}`.toLowerCase().includes(query));
  filesTotal.textContent = files.length
    ? `${visibleFiles.length} de ${files.length} archivos`
    : "Sin archivos publicados";
  sectionDownload.disabled = !files.length || sectionDownload.dataset.busy === "true";
  fileGrid.innerHTML = visibleFiles.map(fileCard).join("");
  fileGrid.classList.toggle("is-hidden", visibleFiles.length === 0);
  fileEmpty.classList.toggle("is-hidden", visibleFiles.length > 0);
  fileEmptyTitle.textContent = files.length && !visibleFiles.length ? "No encontramos ese archivo" : "No hay archivos publicados";
  fileEmptyCopy.textContent = files.length && !visibleFiles.length ? "Prueba con otro nombre o limpia la búsqueda." : "Esta categoría todavía está pendiente de incorporar.";
}

function setActiveNav(filter) {
  document.querySelectorAll("[data-nav-filter]").forEach((item) => item.classList.toggle("is-active", item.dataset.navFilter === filter));
}

function openResource(resourceId, updateUrl = true) {
  const resource = resourceData.find((item) => item.id === resourceId);
  if (!resource) return;
  currentResourceId = resource.id;
  categoryView.classList.add("is-hidden");
  filesView.classList.remove("is-hidden");
  filesTitle.textContent = resource.title;
  sectionDownload.disabled = true;
  fileSearch.value = "";
  fileGrid.classList.remove("is-hidden");
  fileEmpty.classList.add("is-hidden");
  fileGrid.innerHTML = filesLoaded ? "" : "<p class=\"file-list-loading\">Cargando archivos…</p>";
  if (filesLoaded) renderFiles();
  if (updateUrl) window.history.pushState({ resourceId }, "", `#${resourceId}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelector("#sidebar").classList.remove("is-open");
}

function showCategories(updateUrl = true) {
  currentResourceId = "";
  filesView.classList.add("is-hidden");
  categoryView.classList.remove("is-hidden");
  if (updateUrl) window.history.pushState({}, "", "#catalogo");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const resourceButton = event.target.closest("[data-open-resource]");
  if (resourceButton) openResource(resourceButton.dataset.openResource);
});

document.querySelectorAll("[data-nav-filter]").forEach((item) => item.addEventListener("click", () => {
  state.filter = item.dataset.navFilter;
  state.query = "";
  resourceSearch.value = "";
  setActiveNav(state.filter);
  renderCategories();
  showCategories();
}));

resourceSearch.addEventListener("input", () => { state.query = resourceSearch.value; renderCategories(); });
fileSearch.addEventListener("input", renderFiles);
sectionDownload.addEventListener("click", downloadSection);
document.querySelector("#back-to-catalog").addEventListener("click", () => showCategories());
window.addEventListener("popstate", () => {
  const resourceId = window.location.hash.slice(1);
  if (resourceData.some((resource) => resource.id === resourceId)) openResource(resourceId, false);
  else showCategories(false);
});

const mobileMenu = document.querySelector("#mobile-menu");
mobileMenu.addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");
  const isOpen = sidebar.classList.toggle("is-open");
  mobileMenu.setAttribute("aria-expanded", String(isOpen));
});

renderCategories();
fetch("resources.json", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error(`Manifest request failed: ${response.status}`);
    return response.json();
  })
  .then(applyManifest)
  .catch(() => {
    if (!filesLoaded) {
      filesLoaded = true;
      if (currentResourceId) renderFiles();
    }
  });

const initialResourceId = window.location.hash.slice(1);
if (resourceData.some((resource) => resource.id === initialResourceId)) openResource(initialResourceId, false);
