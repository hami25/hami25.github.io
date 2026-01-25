// =========================================================
// Rendert die Fakten-Sidebar aus AllgemeinContent/sidebarContent.js
//
// Contract (HTML):
// - Sidebar-Container: .curriculum-facts.sidebar
// - Titel-Element: .cf-title
// - Items werden als .cf-item direkt nach dem Titel eingefügt
//
// Security / Content-Regel:
// - Sidebar-Content ist "Text-only". Wir escapen daher ALLE Werte (escapeHtml)
//   und setzen sie per insertAdjacentHTML ein.
// =========================================================

import { SIDEBAR_ITEMS } from "./AllgemeinContent/sidebarContent.js";

function escapeHtml(value) {
  // Defensive: auch numbers/null/undefined sauber behandeln
  const str = String(value ?? "");
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".curriculum-facts.sidebar");
  if (!aside) return;

  const title = aside.querySelector(".cf-title");
  if (!title) return;

  aside.querySelectorAll(".cf-item").forEach((n) => n.remove());

  // Defensive: wenn SIDEBAR_ITEMS fehlt oder leer ist, machen wir nichts.
  if (!Array.isArray(SIDEBAR_ITEMS) || SIDEBAR_ITEMS.length === 0) return;

  const html = SIDEBAR_ITEMS.map((item) => {
    // Defensive: item kann theoretisch mal unvollständig sein
    const icon = escapeHtml(item?.icon);
    const label = escapeHtml(item?.label);
    const value = escapeHtml(item?.value);

    return `
      <div class="cf-item">
        <span class="cf-icon" aria-hidden="true">${icon}</span>
        <div class="cf-text">
          <span class="cf-label">${label}</span>
          <span class="cf-value">${value}</span>
        </div>
      </div>
    `;
  }).join("");

  title.insertAdjacentHTML("afterend", html);
});
