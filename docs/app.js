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
  { id: "terapia-lenguaje", title: "Terapia de lenguaje y comunicación", description: "Cuadernillos, fichas y materiales organizados para apoyar lenguaje, lectoescritura, motricidad y fluidez.", audience: "Infancia y adolescencia", area: "Lenguaje, habla y comunicación", fileCount: 115, type: "Biblioteca de recursos", groups: ["infancia", "adolescencia", "materiales"], accent: "aqua", icon: "⌁", tag: "Biblioteca" },
  { id: "evaluacion-revision", title: "Tests y herramientas de evaluación", description: "Selección de instrumentos y materiales de evaluación detectados en el paquete, pendientes de validar antes de publicarse.", audience: "Uso profesional", area: "Evaluación y seguimiento", fileCount: 0, type: "Tests y evaluación", groups: ["tests"], accent: "blue", icon: "◉", tag: "Revisión pendiente" }
];

const GITHUB_REPOSITORY = "https://github.com/psidavidflores/paquete-intervencion";
const GITHUB_RESOURCE_BASE = `${GITHUB_REPOSITORY}/tree/main/recursos`;
const folderById = {
  atencion: "atencion",
  "autorregulacion-infantil": "control-enfado",
  "estimulacion-lenguaje": "estimulacion-lenguaje",
  "inteligencias-multiples": "inteligencias-multiples",
  "juegos-interactivos": "juegos-interactivos",
  "adulto-mayor": "adulto-mayor",
  autismo: "autismo",
  "super-educativo": "super-educativo",
  tdah: "tdha",
  "sindrome-down": "sindrome-down",
  "terapia-lenguaje": "terapia-lenguaje"
};

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
const folderLink = document.querySelector("#folder-link");
const fileEmptyTitle = document.querySelector("#file-empty-title");
const fileEmptyCopy = document.querySelector("#file-empty-copy");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[character]));
}

function githubFilePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function githubFileUrl(path) {
  return `${GITHUB_REPOSITORY}/blob/main/${githubFilePath(path)}`;
}

function githubRawUrl(path) {
  return `https://raw.githubusercontent.com/psidavidflores/paquete-intervencion/main/${githubFilePath(path)}`;
}

function resourceFolder(resource) {
  return folderById[resource.id] || "";
}

function resourcePage(resource) {
  const folder = resourceFolder(resource);
  return folder ? `${GITHUB_RESOURCE_BASE}/${folder}` : "";
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
      <div class="file-preview"><span class="file-icon">${fileIcon(extension)}</span><span class="file-type">${extension.toUpperCase()}</span></div>
      <div class="file-card-body">
        <h3 title="${name}">${name}</h3>
        <p class="file-location" title="${path}">${location}</p>
        <div class="file-card-actions">
          <a class="download-link" href="${escapeHtml(githubRawUrl(file.path))}" target="_blank" rel="noopener" download>Descargar</a>
          <a class="view-link" href="${escapeHtml(githubFileUrl(file.path))}" target="_blank" rel="noopener">Ver</a>
        </div>
      </div>
    </article>`;
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
  folderLink.href = resourcePage(resource) || "#";
  folderLink.classList.toggle("is-hidden", !resourcePage(resource));
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
