// =========================================================
// Verbindet bestimmte Hash-Links mit Modals (Career-Modal)

// Contract:
// - Links mit href "#career-modal" oder "#dein-beruf-finder-anker" öffnen das Career-Modal
// - FAQ-Modal wird dabei geschlossen (falls offen)
// =========================================================

document.addEventListener("click", (e) => {
  // Nur auf die beiden speziellen Hash-Links reagieren
  const link = e.target.closest(
    'a[href="#career-modal"], a[href="#dein-beruf-finder-anker"]'
  );
  if (!link) return;

  // DOM-Refs (erst jetzt holen, weil nur dann relevant)
  const careerModal = document.getElementById("career-modal");
  const faqModal = document.getElementById("faq-modal");

  // Nur „abfangen“, wenn wir das Modal wirklich öffnen können.
  // Sonst: normales Hash-Scrolling
  if (!careerModal) return;

  // Diese Hash-Links dienen als Modal-Trigger, nicht als Scroll-Anker.
  e.preventDefault();

  // FAQ schliessen (falls offen)
  if (faqModal) {
    faqModal.classList.remove("is-open");
    faqModal.setAttribute("aria-hidden", "true");
  }

  // Career-Modal öffnen
  careerModal.classList.add("is-open");
  careerModal.setAttribute("aria-hidden", "false");

  // Accessibility: Fokus ins Modal
  const closeBtn = careerModal.querySelector(
    "[data-career-close], .modal-close, button"
  );
  (closeBtn || careerModal).focus?.();
});


