// =========================================================
// Rendert den "Beruf-Finder" (Swipe/Buttons) basierend auf CAREERS.
//
// Contract (HTML):
// - Wrapper: .career-swipe  (Event-Delegation für Buttons)
// - Card:    #cs-card       (zeigt aktuellen Beruf)
// - Counter: #cs-counter    (z.B. "3 / 12")
// - Result:  #cs-result     (Ergebnisansicht, wird via .hidden getoggelt)
// - Actions: .cs-actions    (Buttons yes/maybe/dream/no)
// =========================================================

import { CAREERS } from "./AllgemeinContent/careerContent.js";

function shuffleArray(arr) {
  // Defensive: falls arr nicht Array ist -> leeres Array
  const input = Array.isArray(arr) ? arr : [];
  const a = [...input];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildCareerCard(c) {
  const tags = (c?.tags || [])
    .map((tag) => `<span class="cs-tag">${escapeHtml(tag)}</span>`)
    .join("");

  return `
    <div class="cs-pill">${escapeHtml(c?.vibe ?? "")}</div>
    <div class="cs-emoji">${escapeHtml(c?.emoji ?? "")}</div>
    <h3 class="cs-title">${escapeHtml(c?.title ?? "")}</h3>
    <p class="cs-desc">${escapeHtml(c?.desc ?? "")}</p>
    <div class="cs-tags">${tags}</div>
  `;
}

function buildResult({ liked, maybe, dream }) {
  const limit = 3; // "Top Matches" pro Kategorie

  function renderCareerLine(c) {
    const why = c?.why ? `<p class="cs-why">${escapeHtml(c.why)}</p>` : "";
    const modules =
      c?.modules && c.modules.length
        ? `<p class="cs-modules"><strong>Passende Module:</strong> ${c.modules
          .map(escapeHtml)
          .join(", ")}</p>`
        : "";

    return `
      <li class="cs-result-item">
        <div class="cs-result-head">${escapeHtml(c?.emoji ?? "")} <strong>${escapeHtml(
      c?.title ?? ""
    )}</strong></div>
        ${why}
        ${modules}
      </li>
    `;
  }

  function renderBlock(title, intro, list) {
    if (!list.length) return "";
    const top = list.slice(0, limit);

    return `
      <section class="cs-result-block">
        <h3>${escapeHtml(title)}</h3>
        ${intro ? `<p>${escapeHtml(intro)}</p>` : ""}
        <ul class="cs-result-list">
          ${top.map(renderCareerLine).join("")}
        </ul>
        ${
      list.length > limit
        ? `<p class="cs-note">(+${list.length - limit} weitere Auswahl(en) in dieser Kategorie)</p>`
        : ""
    }
      </section>
    `;
  }

  if (dream.length === 0 && liked.length === 0 && maybe.length === 0) {
    return `
      <h3>Dein Ergebnis</h3>
      <p>Du hast keinen Beruf markiert. 🤔</p>
      <p>Vielleicht magst du den Test noch einmal machen oder wir ergänzen weitere Berufe.</p>
    `;
  }

  let html = `<h2 class="cs-result-title">Dein Ergebnis 💡</h2>`;

  html += renderBlock("⭐ Deine Traumberufe (Top Matches)", "Das sind deine stärksten Favoriten:", dream);
  html += renderBlock("❤️ Gefällt dir (Top Matches)", "Diese Berufe fandest du interessant:", liked);
  html += renderBlock("🤔 Vielleicht (Top Matches)", "Diese Berufe könnten auch passen – vielleicht mal anschauen:", maybe);

  html += `
    <p class="cs-note">
      Tipp: Klick im Curriculum die genannten Module an, um ein Gefühl für die Inhalte zu bekommen.
    </p>
  `;

  html += `
    <div class="cs-restart-wrap">
      <button class="cs-btn cs-btn-restart" data-action="restart" type="button">
        🔄 Beruf-Finder neu starten
      </button>
    </div>
  `;

  return html;
}

function initCareerFinder() {
  const container = document.querySelector(".career-swipe");
  const cardEl = document.getElementById("cs-card");
  const counterEl = document.getElementById("cs-counter");
  const resultEl = document.getElementById("cs-result");
  const actionsEl = document.querySelector(".cs-actions");

  // Strukturelle Guards: ohne diese Elemente kann der Finder nicht arbeiten
  if (!container || !cardEl || !counterEl || !resultEl || !actionsEl) return;

  // Defensive: CAREERS muss ein Array sein
  if (!Array.isArray(CAREERS) || CAREERS.length === 0) {
    // Minimal: UI informativ lassen, ohne Fehler zu werfen
    cardEl.style.display = "none";
    actionsEl.style.display = "none";
    resultEl.hidden = false;
    resultEl.textContent = "Keine Berufe verfügbar. (CAREERS ist leer.)";
    return;
  }

  let currentIndex = 0;
  let shuffledCareers = shuffleArray(CAREERS);
  const liked = [];
  const maybe = [];
  const dream = [];

  // Struktureller Schutz gegen Doppel-Klicks während der Swipe-Animation
  let isBusy = false;

  function renderCard() {
    isBusy = false;
    resultEl.hidden = true;

    if (currentIndex >= shuffledCareers.length) {
      cardEl.style.display = "none";
      actionsEl.style.display = "none";
      resultEl.hidden = false;
      resultEl.innerHTML = buildResult({ liked, maybe, dream });
      return;
    }

    const c = shuffledCareers[currentIndex];
    counterEl.textContent = `${currentIndex + 1} / ${shuffledCareers.length}`;

    cardEl.classList.remove("swipe-out");
    cardEl.style.display = "block";
    actionsEl.style.display = "flex";
    cardEl.innerHTML = buildCareerCard(c);
  }

  function handleAction(action) {
    if (isBusy) return;
    isBusy = true;

    const current = shuffledCareers[currentIndex];
    if (!current) {
      isBusy = false;
      return;
    }

    // Strukturell: else-if verhindert Mehrfach-Push, falls action mal komisch ist
    if (action === "yes") liked.push(current);
    else if (action === "maybe") maybe.push(current);
    else if (action === "dream") dream.push(current);

    cardEl.classList.add("swipe-out");

    window.setTimeout(() => {
      currentIndex++;
      renderCard();
    }, 200);
  }

  function restartFinder() {
    currentIndex = 0;
    liked.length = 0;
    maybe.length = 0;
    dream.length = 0;

    shuffledCareers = shuffleArray(CAREERS);

    resultEl.hidden = true;
    cardEl.style.display = "block";
    actionsEl.style.display = "flex";

    renderCard();
  }

  // Event-Delegation für Buttons (auch Restart-Button im Ergebnis)
  container.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-action]");
    if (!btn) return;

    const action = btn.getAttribute("data-action");
    if (action === "restart") {
      restartFinder();
      return;
    }

    if (action === "no" || action === "maybe" || action === "yes" || action === "dream") {
      handleAction(action);
    }
  });

  renderCard();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCareerFinder);
} else {
  initCareerFinder();
}
