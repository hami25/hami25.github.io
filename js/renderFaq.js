// =========================================================
// Rendert das FAQ-Modal aus AllgemeinContent/faqContent.js
//
// Contract (HTML):
// - Container für Inhalt: #faq-list
// - Modal/Scroll-Container: #faq-modal .faq-modal-dialog (Fallback: Parent von #faq-list)
// - Optional wird eine Kategorienavigation erzeugt: #faq-modal .faq-catnav
// =========================================================

import { FAQ_SECTIONS } from "./AllgemeinContent/faqContent.js";

function escapeHtml(value) {
  // Defensive: null/undefined/number sicher behandeln
  const str = String(value ?? "");
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// CSS.escape ist nicht überall garantiert -> fallback
function cssEscapeSafe(value) {
  const s = String(value ?? "");
  if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(s);
  // Minimaler Fallback: ersetzt kritische Zeichen, reicht für IDs in diesem Projekt
  return s.replace(/[^a-zA-Z0-9\-_]/g, "\\$&");
}

function scrollSectionIntoView(targetEl, scrollContainer) {
  if (!targetEl || !scrollContainer) return;

  // Smooth scroll im Modal
  const containerRect = scrollContainer.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();
  const currentTop = scrollContainer.scrollTop;

  // kleiner Offset, damit die Überschrift nicht "klebt"
  const offset = 12;

  const delta = (targetRect.top - containerRect.top) - offset;
  scrollContainer.scrollTo({ top: currentTop + delta, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#faq-list");
  if (!list) return;

  // Defensive: Content muss ein Array sein
  if (!Array.isArray(FAQ_SECTIONS) || FAQ_SECTIONS.length === 0) return;

  // Scroll-Container
  const dialog =
    document.querySelector("#faq-modal .faq-modal-dialog") ||
    list.parentElement;

  // Wenn wir keinen Container finden, können wir zwar rendern,
  // aber nicht sauber scrollen -> trotzdem kein Crash.
  // (scrollSectionIntoView prüft dialog nochmals.)

  // ========= 1) Kategorie-Buttons oben einfügen =========
  let nav = document.querySelector("#faq-modal .faq-catnav");

  // parentElement kann theoretisch fehlen, daher Guard
  const insertPoint = list.parentElement;
  if (!insertPoint) return;

  if (!nav) {
    nav = document.createElement("div");
    nav.className = "faq-catnav";
    nav.setAttribute("role", "navigation");
    nav.setAttribute("aria-label", "FAQ-Kategorien");
    // Nav direkt über der Liste platzieren
    insertPoint.insertBefore(nav, list);
  }

  nav.innerHTML = FAQ_SECTIONS.map((s) => {
    const id = escapeHtml(s?.id);
    const title = escapeHtml(s?.title);
    return `<button class="faq-catbtn" type="button" data-faq-jump="${id}">${title}</button>`;
  }).join("");

  // ========= 2) Sections + Items rendern =========
  // Hinweis: Wir öffnen initial nur das erste <details> insgesamt.
  let firstItem = true;

  list.innerHTML = FAQ_SECTIONS.map((section) => {
    const secId = escapeHtml(section?.id || "");
    const title = escapeHtml(section?.title || "");
    const intro = section?.intro
      ? `<p class="faq-section-intro">${escapeHtml(section.intro)}</p>`
      : "";

    const items = Array.isArray(section?.items) ? section.items : [];

    const itemsHtml = items.map((item) => {
      const q = escapeHtml(item?.question);

      // answer ist ein Array von Absätzen (siehe Content-Contract)
      const ans = Array.isArray(item?.answer) ? item.answer : [];
      const paragraphs = ans.map((p) => `<p>${escapeHtml(p)}</p>`).join("");

      const cta = item?.cta
        ? `<p class="faq-acc-link">👉 <a href="${escapeHtml(item.cta.hash)}">${escapeHtml(
          item.cta.label
        )}</a></p>`
        : "";

      const openAttr = firstItem ? " open" : "";
      firstItem = false;

      return `
        <details class="faq-acc" role="listitem"${openAttr}>
          <summary>${q}</summary>
          <div class="faq-acc-body">
            ${paragraphs}
            ${cta}
          </div>
        </details>
      `;
    }).join("");

    // Section bekommt eine ID zum Hin-Springen
    return `
      <section class="faq-section" id="faq-section-${secId}" data-faq-section="${secId}" aria-label="${title}">
        <h3 class="faq-section-title">${title}</h3>
        ${intro}
        <div class="faq-section-list" role="list">
          ${itemsHtml}
        </div>
      </section>
    `;
  }).join("");

  // ========= 3) Click-Handler: Button -> Scroll zur Section =========
  nav.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-faq-jump]");
    if (!btn) return;

    const id = btn.getAttribute("data-faq-jump") || "";
    const target = document.querySelector(`#faq-section-${cssEscapeSafe(id)}`);
    if (!target) return;

    nav.querySelectorAll(".faq-catbtn.is-active").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    scrollSectionIntoView(target, dialog);
  });

  const firstBtn = nav.querySelector(".faq-catbtn");
  if (firstBtn) firstBtn.classList.add("is-active");
});
