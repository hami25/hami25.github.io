// =========================================================
// Steuert die oberen Tabs + positioniert den Tab-Indikator.
//
// Contract:
// - Tabs Container: .wi-tabs-funky
// - Tabs: .wi-tab (optional: .is-active)
// - Indicator: .wi-tab-indicator
// - Jede Tab hat data-target="<modal-id>" (z.B. "faq-modal")
// - Modals werden über Klasse "is-open" + aria-hidden ein/ausgeblendet
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.querySelector(".wi-tabs-funky");
  if (!tabsContainer) return;

  const tabs = Array.from(tabsContainer.querySelectorAll(".wi-tab"));
  const indicator = tabsContainer.querySelector(".wi-tab-indicator");
  if (!indicator || tabs.length === 0) return;

  // Modals
  const faqModal = document.getElementById("faq-modal");
  const wiQuizModal = document.getElementById("wi-quiz-modal");
  const careerModal = document.getElementById("career-modal");
  const infoModal = document.getElementById("info-modal");

  // Close-Elemente
  const faqCloseElements = faqModal ? faqModal.querySelectorAll("[data-faq-close]") : [];
  const quizCloseElements = wiQuizModal ? wiQuizModal.querySelectorAll("[data-wi-quiz-close]") : [];
  const careerCloseElements = careerModal ? careerModal.querySelectorAll("[data-career-close]") : [];
  const infoCloseElements = infoModal ? infoModal.querySelectorAll("[data-info-close]") : [];

  tabsContainer.classList.add("wi-tabs-enhanced");

  // Indikator-Position:
  function moveIndicatorTo(tab) {
    const tabRect = tab.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();

    const containerStyle = getComputedStyle(tabsContainer);
    const indicatorStyle = getComputedStyle(indicator);

    const padLeft = parseFloat(containerStyle.paddingLeft) || 0;
    const indicatorMargin = parseFloat(indicatorStyle.marginLeft) || 0;

    const width = tabRect.width;
    const offsetX = (tabRect.left - containerRect.left) - padLeft + indicatorMargin - 2;

    indicator.style.width = width + "px";
    indicator.style.transform = `translateX(${offsetX}px)`;
  }

  const activeTab = tabs.find((t) => t.classList.contains("is-active")) || tabs[0];
  if (activeTab) moveIndicatorTo(activeTab);

  // Modal-Helfer (is-open + aria-hidden)
  function openModal(modalEl, closeSelector) {
    if (!modalEl) return;
    modalEl.classList.add("is-open");
    modalEl.setAttribute("aria-hidden", "false");

    // Fokus ins Modal
    if (!modalEl.hasAttribute("tabindex")) modalEl.setAttribute("tabindex", "-1");
    (modalEl.querySelector(closeSelector) || modalEl).focus?.();
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove("is-open");
    modalEl.setAttribute("aria-hidden", "true");
  }

  function closeAllModals() {
    closeModal(faqModal);
    closeModal(careerModal);
    closeModal(wiQuizModal);
    closeModal(infoModal);
  }

  // Klick-Handling Tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      moveIndicatorTo(tab);

      const targetId = tab.dataset.target;
      if (!targetId) return;

      closeAllModals();

      if (targetId === "faq-modal") {
        openModal(faqModal, "[data-faq-close]");
      } else if (targetId === "wi-quiz-modal") {
        openModal(wiQuizModal, "[data-wi-quiz-close]");

        // Mini-Quiz-Inhalt bei jedem Öffnen frisch rendern
        if (typeof window.renderMiniQuiz === "function") {
          window.renderMiniQuiz();
        }
      } else if (targetId === "career-modal") {
        openModal(careerModal, "[data-career-close]");
      } else if (targetId === "info-modal") {
        openModal(infoModal, "[data-info-close]");
      }
      // unbekanntes targetId -> absichtlich nichts
    });
  });

  // Close-Buttons
  faqCloseElements.forEach((el) => el.addEventListener("click", () => closeModal(faqModal)));
  quizCloseElements.forEach((el) => el.addEventListener("click", () => closeModal(wiQuizModal)));
  careerCloseElements.forEach((el) => el.addEventListener("click", () => closeModal(careerModal)));
  infoCloseElements.forEach((el) => el.addEventListener("click", () => closeModal(infoModal)));

  // ESC schließt offene Modals (strukturell: einfach alles zu)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });

  // beim Resize Indikator nachjustieren
  window.addEventListener("resize", () => {
    const currentActive = tabs.find((t) => t.classList.contains("is-active")) || tabs[0];
    if (currentActive) moveIndicatorTo(currentActive);
  });
});
