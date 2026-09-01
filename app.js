const resourceData = [
  {
    id: "regulacion-infantil",
    title: "Caja de regulación emocional infantil",
    description: "Actividades visuales y sencillas para reconocer, nombrar y acompañar emociones en niños y niñas.",
    audience: "Infancia",
    area: "Regulación emocional",
    format: "PDF + imprimibles",
    type: "Material terapéutico",
    group: "materiales infancia",
    accent: "aqua",
    icon: "◌",
    tag: "Más elegido",
    includes: ["18 actividades guiadas", "Fichas imprimibles para sesión", "Orientaciones para cuidadores"],
    purchase: "individual"
  },
  {
    id: "ansiedad-adolescente",
    title: "Kit ansiedad para adolescentes",
    description: "Recursos para psicoeducación, identificación de señales y construcción de estrategias de afrontamiento.",
    audience: "Adolescencia",
    area: "Ansiedad",
    format: "PDF + fichas de trabajo",
    type: "Pack temático",
    group: "packs adolescencia",
    accent: "blue",
    icon: "≈",
    tag: "Pack",
    includes: ["Guía psicoeducativa", "Registros de pensamientos y preocupaciones", "Plan de afrontamiento"],
    purchase: "pack"
  },
  {
    id: "habilidades-parentales",
    title: "Herramientas para habilidades parentales",
    description: "Material para trabajar comunicación, límites, acompañamiento emocional y acuerdos familiares.",
    audience: "Familias y cuidadores",
    area: "Familia y vínculos",
    format: "Guía + actividades",
    type: "Material terapéutico",
    group: "materiales",
    accent: "pink",
    icon: "♡",
    tag: "Familias",
    includes: ["Mapas de comunicación", "Actividades para casa", "Fichas de acuerdos familiares"],
    purchase: "individual"
  },
  {
    id: "tdah-funciones-ejecutivas",
    title: "Pack TDAH y funciones ejecutivas",
    description: "Actividades para planificación, organización, atención y seguimiento de objetivos en población infantojuvenil.",
    audience: "Infancia y adolescencia",
    area: "TDAH y aprendizaje",
    format: "Pack descargable",
    type: "Pack temático",
    group: "packs infancia adolescencia",
    accent: "yellow",
    icon: "✦",
    tag: "Pack",
    includes: ["Tableros de planificación", "Actividades de atención", "Registros de hábitos y seguimiento"],
    purchase: "pack"
  },
  {
    id: "duelo-adolescente",
    title: "Acompañamiento del duelo en adolescentes",
    description: "Material sensible para facilitar expresión emocional, memoria, apoyo social y elaboración del proceso de duelo.",
    audience: "Adolescencia",
    area: "Duelo y adaptación",
    format: "Guía + fichas",
    type: "Material terapéutico",
    group: "materiales adolescencia",
    accent: "coral",
    icon: "⌁",
    tag: "Nuevo",
    includes: ["Psicoeducación del duelo", "Fichas de expresión", "Actividades de red de apoyo"],
    purchase: "individual"
  },
  {
    id: "evaluacion-inicial",
    title: "Batería de evaluación inicial",
    description: "Formularios y guías para organizar la primera entrevista, antecedentes, objetivos y consentimiento informado.",
    audience: "Infancia y adolescencia",
    area: "Evaluación inicial",
    format: "Formularios profesionales",
    type: "Tests y evaluación",
    group: "tests infancia adolescencia",
    accent: "blue",
    icon: "◎",
    tag: "Profesional",
    includes: ["Ficha de entrevista inicial", "Registro de antecedentes", "Plantilla de objetivos terapéuticos"],
    purchase: "tests"
  },
  {
    id: "memoria-adulto-mayor",
    title: "Actividades de memoria y bienestar",
    description: "Propuestas para estimular conversación, evocación, orientación y participación significativa en adulto mayor.",
    audience: "Adulto mayor",
    area: "Memoria y bienestar",
    format: "PDF + tarjetas",
    type: "Material terapéutico",
    group: "materiales adulto-mayor",
    accent: "yellow",
    icon: "✺",
    tag: "Adulto mayor",
    includes: ["Tarjetas de conversación", "Ejercicios de evocación", "Registro de preferencias y bienestar"],
    purchase: "individual"
  },
  {
    id: "regulacion-familias",
    title: "Pack regulación emocional y familias",
    description: "Un conjunto de materiales para trabajar emociones en sesión y facilitar la continuidad del acompañamiento en casa.",
    audience: "Infancia y familias",
    area: "Regulación emocional",
    format: "Pack descargable",
    type: "Pack temático",
    group: "packs infancia materiales",
    accent: "aqua",
    icon: "✧",
    tag: "Pack",
    includes: ["Actividades para sesión", "Material para casa", "Guía breve para cuidadores"],
    purchase: "pack"
  },
  {
    id: "tamizaje-emocional",
    title: "Herramientas de tamizaje emocional",
    description: "Instrumentos de apoyo para ordenar la exploración inicial y orientar la conversación clínica con criterio profesional.",
    audience: "Infancia y adolescencia",
    area: "Evaluación emocional",
    format: "Aplicación profesional",
    type: "Tests y evaluación",
    group: "tests",
    accent: "pink",
    icon: "◉",
    tag: "Evaluación",
    includes: ["Formulario de aplicación", "Hoja de resultados", "Guía de lectura orientativa"],
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
  return `
    <article class="resource-card accent-${escapeHtml(resource.accent)}">
      <div class="card-topline"><span class="card-tag">${escapeHtml(resource.tag)}</span><span class="card-format">${escapeHtml(resource.format)}</span></div>
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
