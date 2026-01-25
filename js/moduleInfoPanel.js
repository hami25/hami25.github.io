/* =========================================================
   Zuständig für das Info-Panel (#module-info), das beim Hover/Fokus
   auf ein Modul Schnelldetails zeigt und optional „Mehr“ ausklappt.

   Content-Quelle:
   - window.MODULE_CONTENT[<moduleId>].quickHtml / longHtml

   Fallback:
   - <template class="module-quick"> / <template class="module-long">
     innerhalb des jeweiligen .module-Elements

   Öffnen:
    - Hover
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // 1) Panel-Elemente
  const panel = document.getElementById("module-info");
  const titleEl = document.getElementById("module-info-title");
  const subEl = document.getElementById("module-info-sub");
  const quickEl = document.getElementById("module-info-quick");
  const moreWrap = document.getElementById("module-info-more");
  const moreInner = document.getElementById("module-info-more-inner");
  const toggleBtn = document.getElementById("module-info-toggle");
  const closeBtn = document.getElementById("module-info-close");

  // Guard: wenn IDs fehlen -> nichts tun
  const required = [
    ["#module-info", panel],
    ["#module-info-title", titleEl],
    ["#module-info-sub", subEl],
    ["#module-info-quick", quickEl],
    ["#module-info-more", moreWrap],
    ["#module-info-more-inner", moreInner],
    ["#module-info-toggle", toggleBtn],
    ["#module-info-close", closeBtn],
  ];
  const missing = required.filter(([, el]) => !el).map(([sel]) => sel);
  if (missing.length) {
    console.error("moduleInfoPanel.js: Fehlende Elemente im HTML:", missing);
    return;
  }

  // 2) State / Settings
  const HOVER_DELAY_MS = 1000; // „erst wenn man länger drüber bleibt“
  let hoverTimer = null;
  let currentModule = null;



  const IS_TOUCH =
    (window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);


  // 3) Kleine Helper
  const getText = (el) => (el?.textContent || "").trim();

  function getModuleId(moduleEl) {
    // bevorzugt data-module, sonst aus href "#..." ziehen
    const fromData = (moduleEl.dataset.module || "").trim();
    if (fromData) return fromData;

    const href = moduleEl.getAttribute("href") || "";
    return href.startsWith("#") ? href.slice(1) : "";
  }

  function getContentFor(moduleEl) {
    const id = getModuleId(moduleEl);
    return window.MODULE_CONTENT && window.MODULE_CONTENT[id]
      ? window.MODULE_CONTENT[id]
      : null;
  }

  function getModuleTitle(moduleEl) {
    return getText(moduleEl.querySelector(".module-title")) || "Modul";
  }

  function getModuleCP(moduleEl) {
    // wird aktuell nur gelesen (keine Anzeige)
    return getText(moduleEl.querySelector(".module-cp"));
  }

  // 4) HTML Builder (Quick / Long)
  function buildQuickHTML(moduleEl) {
    const content = getContentFor(moduleEl);
    if (content?.quickHtml) return content.quickHtml;

    // Fallback
    const tplQuick = moduleEl.querySelector("template.module-quick");
    const quickHTML = tplQuick ? tplQuick.innerHTML.trim() : "";
    if (quickHTML) return `<div>${quickHTML}</div>`;

    return `<p style="margin:0;">Keine Schnelldetails hinterlegt.</p>`;
  }


  function buildLongHTML(moduleEl) {
    const content = getContentFor(moduleEl);
    if (typeof content?.longHtml === "string" && content.longHtml.trim()) return content.longHtml;

    const tplLong = moduleEl.querySelector("template.module-long");
    const longHTML = tplLong ? tplLong.innerHTML.trim() : "";
    if (longHTML) return longHTML;

    return `<p style="margin:0;">Keine ausführliche Modulbeschreibung hinterlegt.</p>`;
  }


  // 5) Panel Open / Close
  function openPanelFor(moduleEl, { scroll = true} = {}) {
    const same = currentModule === moduleEl;
    currentModule = moduleEl;

    // Headline
    const title = getModuleTitle(moduleEl);
    const cp = getModuleCP(moduleEl);
    titleEl.textContent = title;

    // Quick
    quickEl.innerHTML = buildQuickHTML(moduleEl);

    // Mobile/Touch: klarer CTA zum Quiz (statt Modul direkt zu öffnen)
    if (IS_TOUCH) {
      const moduleId = getModuleId(moduleEl);

      // Subline anpassen
      subEl.textContent = "Details ansehen oder Quiz starten";

      // Button anhängen (wird von moduleModal.js über [data-module] erkannt)
      quickEl.insertAdjacentHTML(
        "beforeend",
        `
          <div class="module-info-cta">
            <button type="button" class="module-info-start-quiz" data-module="${moduleId}">
              Quiz starten
            </button>
          </div>
        `
      );
    }

    // Long erstmal zu (nur resetten, wenn neues Modul – oder wenn du es immer zu willst: einfach ohne if)
    if (!same) {
      moreInner.innerHTML = "";
      moreWrap.hidden = true;
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = "Ausklappen";
    } else {
      // Wenn gleiches Modul erneut geöffnet wird: Long trotzdem zu (verhindert „komische“ Zustände)
      moreInner.innerHTML = "";
      moreWrap.hidden = true;
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = "Ausklappen";
    }

    // Panel anzeigen
    panel.hidden = false;
    panel.classList.add("is-open");

    // NUR bei echtem Tap scrollen (nicht beim Laden/Fokus/Hover)
    if (IS_TOUCH && scroll) {
      setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }




  function closePanel() {
    panel.classList.remove("is-open");
    panel.hidden = true;
    currentModule = null;
    // Reset „Mehr“-Bereich
    moreInner.innerHTML = "";
    moreWrap.hidden = true;
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.textContent = "Ausklappen";
  }


  function toggleMore() {

    if (!currentModule) return;

    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";

    if (expanded) {
      // einklappen
      moreWrap.hidden = true;
      moreInner.innerHTML = "";
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = "Ausklappen";
      return;
    }

    // ausklappen -> Long rein
    moreInner.innerHTML = buildLongHTML(currentModule);
    moreWrap.hidden = false;
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.textContent = "Einklappen";


  }


  // 6) Hover-Intent / Fokus an alle Module hängen
  const modules = document.querySelectorAll(".curriculum .module");
  if (!modules.length) {
    console.warn("moduleInfoPanel.js: Keine .curriculum .module gefunden.");
  }

  modules.forEach((m) => {
    // Desktop: Hover-Intent
    m.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => openPanelFor(m), HOVER_DELAY_MS);
    });

    m.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
    });

    // Keyboard: Fokus
    m.addEventListener("focus", () => openPanelFor(m));

    // Mobile/Touch: Tap -> Info Panel
    if (IS_TOUCH) {
      m.addEventListener("click", (e) => {
        // Wenn der Klick eigentlich im Info-Panel war -> Modul NICHT neu öffnen
        if (e.target.closest("#module-info")) return;

        // Nur reagieren, wenn wirklich die Modul-Kachel getroffen wurde
        // (falls du innerhalb der Kachel Kinder hast, bleibt closest(".module") gleich m)
        const hit = e.target.closest(".module");
        if (hit !== m) return;

        e.preventDefault();
        e.stopPropagation();
        openPanelFor(m);
      }, true); // <-- CAPTURE ist wichtig auf iOS
    }




  });

  // 7) Controls / ESC

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    toggleMore();
  }, true);

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closePanel();
  });


  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) closePanel();
  });

  console.log("moduleInfoPanel.js: aktiv ✅");
});
