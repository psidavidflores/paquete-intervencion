const resourceData = [
  {
    id: "atencion",
    title: "Atención, concentración y grafomotricidad",
    description: "Actividades didácticas para fortalecer atención, concentración, coordinación visomotora y habilidades preacadémicas.",
    audience: "Infancia",
    area: "Atención y habilidades preacadémicas",
    format: "53 archivos identificados",
    fileCount: 53,
    type: "Área temática",
    group: "materiales infancia",
    accent: "aqua",
    icon: "⌁",
    tag: "Infancia",
    includes: ["Actividades de atención y concentración", "Material de grafomotricidad", "Cuentos y recursos adaptados"],
    purchase: "pack"
  },
  {
    id: "autorregulacion-infantil",
    title: "Control del enfado y autorregulación infantil",
    description: "Cuentos, fichas y ejercicios para acompañar impulsividad, rabietas, relajación y reconocimiento emocional.",
    audience: "Infancia",
    area: "Regulación emocional",
    format: "25 archivos identificados",
    fileCount: 25,
    type: "Área temática",
    group: "materiales infancia",
    accent: "pink",
    icon: "♡",
    tag: "Autorregulación",
    includes: ["Técnica de la tortuga", "Ejercicios de relajación", "Fichas para trabajar rabietas e impulsividad"],
    purchase: "pack"
  },
  {
    id: "estimulacion-lenguaje",
    title: "Estimulación del lenguaje",
    description: "Cuadernillos y actividades para apoyar el desarrollo del lenguaje oral, la conciencia fonológica y la comunicación.",
    audience: "Infancia",
    area: "Lenguaje y comunicación",
    format: "6 archivos identificados",
    fileCount: 6,
    type: "Área temática",
    group: "materiales infancia",
    accent: "blue",
    icon: "≈",
    tag: "Lenguaje",
    includes: ["Cuadernillos de lenguaje oral", "Actividades de habilidades fonológicas", "Material para distintos niveles"],
    purchase: "pack"
  },
  {
    id: "inteligencias-multiples",
    title: "Inteligencias múltiples y aprendizaje",
    description: "Biblioteca de consulta y actividades inspiradas en el desarrollo de distintas formas de aprender y expresarse.",
    audience: "Infancia y adolescencia",
    area: "Aprendizaje y desarrollo",
    format: "22 archivos identificados",
    fileCount: 22,
    type: "Biblioteca temática",
    group: "materiales infancia adolescencia",
    accent: "yellow",
    icon: "✦",
    tag: "Aprendizaje",
    includes: ["Actividades de inteligencias múltiples", "Recursos de aprendizaje cooperativo", "Material de consulta profesional"],
    purchase: "pack"
  },
  {
    id: "juegos-interactivos",
    title: "Juegos interactivos y material educativo",
    description: "Recursos visuales, juegos, cuentos y presentaciones para hacer más activa y significativa la intervención.",
    audience: "Infancia",
    area: "Juego, aprendizaje y participación",
    format: "368 archivos identificados",
    fileCount: 368,
    type: "Biblioteca de recursos",
    group: "materiales infancia",
    accent: "coral",
    icon: "✧",
    tag: "Más amplio",
    includes: ["Material para colorear", "Juegos interactivos educativos", "Cuentos en video"],
    purchase: "all"
  },
  {
    id: "adulto-mayor",
    title: "Estimulación cognitiva para adulto mayor",
    description: "Cuadernillos, ejercicios y recursos para memoria, participación, bienestar y acompañamiento de personas mayores.",
    audience: "Adulto mayor",
    area: "Memoria y bienestar",
    format: "15 archivos identificados",
    fileCount: 15,
    type: "Área temática",
    group: "materiales adulto-mayor",
    accent: "yellow",
    icon: "✺",
    tag: "Adulto mayor",
    includes: ["Ejercicios de estimulación cognitiva", "Actividades de memoria y conversación", "Material para acompañamiento familiar"],
    purchase: "pack"
  },
  {
    id: "autismo",
    title: "Autismo y habilidades para la vida diaria",
    description: "Guías, cuentos y actividades para apoyar comunicación, imitación, habilidades sociales y participación familiar.",
    audience: "Infancia y adolescencia",
    area: "Autismo y habilidades sociales",
    format: "40 archivos identificados",
    fileCount: 40,
    type: "Pack temático",
    group: "packs infancia adolescencia",
    accent: "aqua",
    icon: "◎",
    tag: "Pack",
    includes: ["Cuentos sociales y cuentos TEA", "Actividades de habilidades sociales", "Guías para familias y docentes"],
    purchase: "pack"
  },
  {
    id: "super-educativo",
    title: "Pack educativo: dislexia, discalculia y memoria",
    description: "Material de apoyo para lectoescritura, razonamiento matemático, memoria y estimulación cognitiva.",
    audience: "Infancia y adolescencia",
    area: "Aprendizaje y necesidades educativas",
    format: "81 archivos identificados",
    fileCount: 81,
    type: "Pack temático",
    group: "packs infancia adolescencia",
    accent: "blue",
    icon: "↗",
    tag: "Pack",
    includes: ["Actividades de dislexia", "Material de discalculia", "Ejercicios de memoria y razonamiento"],
    purchase: "pack"
  },
  {
    id: "tdah",
    title: "TDAH: atención y funciones ejecutivas",
    description: "Ejercicios y fichas para atención, memoria de trabajo, organización, razonamiento y autorregulación.",
    audience: "Infancia y adolescencia",
    area: "TDAH y funciones ejecutivas",
    format: "40 archivos identificados",
    fileCount: 40,
    type: "Pack temático",
    group: "packs infancia adolescencia",
    accent: "pink",
    icon: "✦",
    tag: "Pack",
    includes: ["Fichas de atención y memoria", "Actividades de razonamiento lógico", "Juegos Go/No-Go y planificación"],
    purchase: "pack"
  },
  {
    id: "sindrome-down",
    title: "Síndrome de Down y desarrollo de habilidades",
    description: "Material de apoyo para comunicación, lectoescritura, habilidades sociales y acompañamiento temprano.",
    audience: "Infancia y adolescencia",
    area: "Desarrollo y comunicación",
    format: "13 archivos identificados",
    fileCount: 13,
    type: "Área temática",
    group: "materiales infancia adolescencia",
    accent: "coral",
    icon: "◌",
    tag: "Desarrollo",
    includes: ["Material de lectoescritura", "Habilidades tempranas de comunicación", "Recursos para familias y educadores"],
    purchase: "pack"
  },
  {
    id: "terapia-lenguaje",
    title: "Terapia de lenguaje y comunicación",
    description: "Cuadernillos, fichas y materiales organizados para apoyar lenguaje, lectoescritura, motricidad y fluidez.",
    audience: "Infancia y adolescencia",
    area: "Lenguaje, habla y comunicación",
    format: "115 archivos identificados",
    fileCount: 115,
    type: "Biblioteca de recursos",
    group: "materiales infancia adolescencia",
    accent: "aqua",
    icon: "⌁",
    tag: "Biblioteca",
    includes: ["Cuadernillos y fichas de lenguaje", "Material de lectoescritura", "Recursos para habla y tartamudez"],
    purchase: "all"
  },
  {
    id: "evaluacion-revision",
    title: "Tests y herramientas de evaluación",
    description: "Selección de instrumentos y materiales de evaluación detectados en el paquete, pendientes de validar antes de publicarse.",
    audience: "Uso profesional",
    area: "Evaluación y seguimiento",
    format: "Selección en revisión",
    type: "Tests y evaluación",
    group: "tests",
    accent: "blue",
    icon: "◉",
    tag: "Revisión pendiente",
    includes: ["Identificación de instrumentos candidatos", "Revisión de licencia y autorización de uso", "Adaptación funcional para la plataforma"],
    purchase: "tests"
  }
];

const state = { filter: "all", query: "" };
const grid = document.querySelector("#resource-grid");
const emptyState = document.querySelector("#empty-state");
const count = document.querySelector("#result-count");
const search = document.querySelector("#resource-search");
const toast = document.querySelector("#toast");
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[character]));
}

function filteredResources() {
  const normalizedQuery = state.query.trim().toLowerCase();
  return resourceData.filter((resource) => {
    const matchesFilter = state.filter === "all" || resource.group.includes(state.filter);
    const haystack = [resource.title, resource.description, resource.audience, resource.area, resource.type, resource.format].join(" ").toLowerCase();
    return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
  });
}

function cardTemplate(resource) {
  const formatLabel = resource.fileCount ? `${resource.fileCount} archivos identificados` : resource.format;
  return `
    <article class="resource-card accent-${escapeHtml(resource.accent)}">
      <div class="card-topline"><span class="card-tag">${escapeHtml(resource.tag)}</span><span class="card-format">${escapeHtml(formatLabel)}</span></div>
      <div class="card-icon icon-${escapeHtml(resource.accent)}">${escapeHtml(resource.icon)}</div>
      <p class="card-type">${escapeHtml(resource.type)}</p>
      <h3>${escapeHtml(resource.title)}</h3>
      <p class="card-description">${escapeHtml(resource.description)}</p>
      <div class="card-meta"><span>${escapeHtml(resource.audience)}</span><span>${escapeHtml(resource.area)}</span></div>
      <div class="card-actions"><button class="card-link" type="button" data-preview="${escapeHtml(resource.id)}">Ver detalle <span aria-hidden="true">→</span></button><button class="card-buy" type="button" data-buy="${escapeHtml(resource.purchase)}" aria-label="Comprar ${escapeHtml(resource.title)}">＋</button></div>
    </article>`;
}

function renderResources() {
  const resources = filteredResources();
  grid.innerHTML = resources.map(cardTemplate).join("");
  count.textContent = resources.length;
  emptyState.classList.toggle("is-hidden", resources.length > 0);
  grid.classList.toggle("is-hidden", resources.length === 0);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

function openHotmart(key) {
  const url = window.SITE_CONFIG?.hotmartLinks?.[key];
  if (!url) {
    showToast("El enlace de Hotmart todavía está pendiente de configuración.");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

const modal = document.querySelector("#resource-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalType = document.querySelector("#modal-type");
const modalIcon = document.querySelector("#modal-icon");
const modalMeta = document.querySelector("#modal-meta");
const modalIncludes = document.querySelector("#modal-includes-list");
const modalBuy = document.querySelector("#modal-buy");
let modalResource = null;

function closeModal() {
  if (typeof modal.close === "function" && modal.open) modal.close();
  modal.classList.remove("is-open");
}

function openModal(resource) {
  modalResource = resource;
  modalTitle.textContent = resource.title;
  modalDescription.textContent = resource.description;
  modalType.textContent = resource.type;
  modalIcon.textContent = resource.icon;
  modalIcon.className = `modal-icon icon-${resource.accent}`;
  modalMeta.innerHTML = `<span>${escapeHtml(resource.audience)}</span><span>${escapeHtml(resource.area)}</span><span>${escapeHtml(resource.format)}</span>`;
  modalIncludes.innerHTML = resource.includes.map((item) => `<li><span>✓</span>${escapeHtml(item)}</li>`).join("");
  if (typeof modal.showModal === "function") modal.showModal();
  modal.classList.add("is-open");
}

document.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-preview]");
  if (previewButton) {
    const resource = resourceData.find((item) => item.id === previewButton.dataset.preview);
    if (resource) openModal(resource);
  }

  const buyButton = event.target.closest("[data-buy]");
  if (buyButton) openHotmart(buyButton.dataset.buy);

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("is-active", button === filterButton));
    renderResources();
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const filterJump = event.target.closest("[data-filter-jump]");
  if (filterJump) {
    const target = document.querySelector(`[data-filter="${filterJump.dataset.filterJump}"]`);
    if (target) target.click();
  }
});

search.addEventListener("input", () => { state.query = search.value; renderResources(); });
document.querySelector("#clear-search").addEventListener("click", () => {
  state.query = "";
  state.filter = "all";
  search.value = "";
  document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("is-active", button.dataset.filter === "all"));
  renderResources();
});
document.querySelector("#modal-close").addEventListener("click", closeModal);
document.querySelector("#modal-back").addEventListener("click", closeModal);
modalBuy.addEventListener("click", () => { if (modalResource) openHotmart(modalResource.purchase); });
modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });

const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.addEventListener("click", (event) => { if (event.target.closest("a")) mainNav.classList.remove("is-open"); });

const contactLink = document.querySelector("#contact-link");
if (window.SITE_CONFIG?.contactEmail) {
  contactLink.href = `mailto:${window.SITE_CONFIG.contactEmail}`;
} else {
  contactLink.addEventListener("click", (event) => { event.preventDefault(); showToast("El correo de soporte todavía está pendiente de configuración."); });
}
document.querySelector("#current-year").textContent = new Date().getFullYear();
renderResources();
