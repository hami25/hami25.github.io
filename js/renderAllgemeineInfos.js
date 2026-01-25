// =========================================================
// Rendert den Tab "Allgemeine Infos" aus AllgemeinContent/allgemeineInfosContent.js
//
// Contract (HTML):
// - Ziel-Container: #info-content
// - (Optional) Dieser Renderer erzeugt intern Anchor-Links (quickNav) zu sections[].id
// =========================================================

import { INFO_CONTENT } from "./AllgemeinContent/allgemeineInfosContent.js";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeHashHref(href) {
  const s = String(href ?? "");
  if (s.startsWith("#")) return s;
  return `#${s}`;
}

function renderBulletsHtml(bullets) {
  if (!Array.isArray(bullets) || bullets.length === 0) return "";
  // bullets dürfen HTML enthalten (Content-Regel)
  return `<ul>${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`;
}

function renderHintHtml(hint) {
  if (!hint) return "";
  // hint darf HTML enthalten
  return `<p class="info-hint">${hint}</p>`;
}

// Visuelle Trennung zwischen Blöcken
function dividerHtml() {
  return `<hr class="info-divider" aria-hidden="true">`;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("info-content");
  if (!root) return;

  if (!INFO_CONTENT || typeof INFO_CONTENT !== "object") return;

  const title = INFO_CONTENT.title ?? "";
  const intro = INFO_CONTENT.intro ?? "";

  const quickCheck = INFO_CONTENT.quickCheck ?? null;
  const quickNav = INFO_CONTENT.quickNav ?? null;
  const sections = Array.isArray(INFO_CONTENT.sections) ? INFO_CONTENT.sections : [];
  const nextSteps = INFO_CONTENT.nextSteps ?? null;

  // Wir bauen die "Top-Blöcke" in einem Array, damit wir dazwischen Divider setzen können.
  const topBlocks = [];

  if (quickCheck) {
    topBlocks.push(`
      <section class="info-block info-quickcheck" aria-label="${escapeHtml(
      quickCheck.title ?? "Kurzcheck"
    )}">
        <h3>${escapeHtml(quickCheck.title ?? "")}</h3>
        ${renderBulletsHtml(quickCheck.bullets)}
        ${renderHintHtml(quickCheck.hint)}
      </section>
    `);
  }

  if (quickNav && Array.isArray(quickNav.links) && quickNav.links.length) {
    topBlocks.push(`
    <nav class="info-block info-quicknav" aria-label="${escapeHtml(
      quickNav.title ?? "Schnellnavigation"
    )}">
      <h3>${escapeHtml(quickNav.title ?? "")}</h3>
      <ul class="info-quicknav-list">
        ${quickNav.links
      .map((l) => {
        const href = normalizeHashHref(l?.href);
        const label = escapeHtml(l?.label ?? "");
        return `
              <li>
                <a class="info-quicknav-link" href="${escapeHtml(href)}">
                  ${label}
                </a>
              </li>
            `;
      })
      .join("")}
      </ul>
    </nav>
  `);
  }


  // Sections: jede Section ist ein Block – hier sollen auch Trennlinien dazwischen
  const sectionsHtml = sections.length
    ? `
      <div class="info-sections">
        ${sections
      .map((s, idx) => {
        const id = String(s?.id ?? "").trim();
        const secTitle = escapeHtml(s?.title ?? "");
        const bulletsHtml = renderBulletsHtml(s?.bullets);
        const hintHtml = renderHintHtml(s?.hint);

        const block = `
              <section class="info-block info-section" ${id ? `id="${escapeHtml(id)}"` : ""}>
                <h3>${secTitle}</h3>
                ${bulletsHtml}
                ${hintHtml}
              </section>
            `;

        // Divider zwischen Sections (aber nicht nach der letzten)
        return idx < sections.length - 1 ? `${block}${dividerHtml()}` : block;
      })
      .join("")}
      </div>
    `
    : "";

  // Next steps als eigener Block (mit Divider davor, wenn davor was existiert)
  const nextStepsHtml = nextSteps
    ? `
      <section class="info-block info-nextsteps" aria-label="${escapeHtml(
      nextSteps.title ?? "Nächste Schritte"
    )}">
        <h3>${escapeHtml(nextSteps.title ?? "")}</h3>
        ${renderBulletsHtml(nextSteps.bullets)}
        ${renderHintHtml(nextSteps.hint)}
      </section>
    `
    : "";

  // ---------- Render ----------
  root.innerHTML = `
    <div class="info-wrap">
      <h2 class="info-title">${escapeHtml(title)}</h2>

      ${intro ? `<div class="info-intro">${intro}</div>` : ""}

      ${
    topBlocks.length
      ? `
        <div class="info-top">
          ${topBlocks.join(dividerHtml())}
        </div>
      `
      : ""
  }

      ${topBlocks.length && sectionsHtml ? dividerHtml() : ""}
      ${sectionsHtml}

      ${(topBlocks.length || sectionsHtml) && nextStepsHtml ? dividerHtml() : ""}
      ${nextStepsHtml}
    </div>
  `;

  // Smooth scroll innerhalb des Containers für quickNav (nur wenn Ziel existiert)
  const navLinks = root.querySelectorAll(".info-quicknav-link[href^='#']");
  if (navLinks.length) {
    root.addEventListener("click", (e) => {
      const a = e.target.closest(".info-quicknav-link[href^='#']");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.slice(1);
      if (!targetId) return;

      const safeId = window.CSS && CSS.escape ? `#${CSS.escape(targetId)}` : `#${targetId}`;
      const target = root.querySelector(safeId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
