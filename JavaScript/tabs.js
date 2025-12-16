document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.querySelector(".wi-tabs-funky");
  if (!tabsContainer) return;
  
  const tabs = Array.from(tabsContainer.querySelectorAll(".wi-tab"));
  const indicator = tabsContainer.querySelector(".wi-tab-indicator");
  if (!indicator || tabs.length === 0) return;
  
  // FAQ-Modal
  const faqModal = document.getElementById("faq-modal");
  const faqCloseElements = faqModal
  ? faqModal.querySelectorAll("[data-faq-close]")
  : [];
  
  // Career-Modal
  const careerModal = document.getElementById("career-modal");
  const careerCloseElements = careerModal
  ? careerModal.querySelectorAll("[data-career-close]")
  : [];
  
  tabsContainer.classList.add("wi-tabs-enhanced");
  
  function moveIndicatorTo(tab) {
    const tabRect = tab.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();
    
    const width = tabRect.width;
    const offsetX = tabRect.left - containerRect.left;
    
    indicator.style.width = width + "px";
    indicator.style.transform = `translateX(${offsetX}px)`;
  }
  
  const activeTab = tabs.find(t => t.classList.contains("is-active")) || tabs[0];
  if (activeTab) {
    moveIndicatorTo(activeTab);
  }
  
  // Modal-Helfer
  function openFaqModal() {
    if (!faqModal) return;
    faqModal.classList.add("is-open");
    faqModal.setAttribute("aria-hidden", "false");
  }
  
  function closeFaqModal() {
    if (!faqModal) return;
    faqModal.classList.remove("is-open");
    faqModal.setAttribute("aria-hidden", "true");
  }
  
  function openCareerModal() {
    if (!careerModal) return;
    careerModal.classList.add("is-open");
    careerModal.setAttribute("aria-hidden", "false");
  }
  
  function closeCareerModal() {
    if (!careerModal) return;
    careerModal.classList.remove("is-open");
    careerModal.setAttribute("aria-hidden", "true");
  }
  
  // Klick-Handling Tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      moveIndicatorTo(tab);
      
      const targetId = tab.dataset.target;
      
      if (targetId === "faq-modal") {
        openFaqModal();
      }
      
      if (targetId === "career-modal") {
        openCareerModal();
      }
    });
  });
  
  // FAQ schließen
  faqCloseElements.forEach(el => {
    el.addEventListener("click", closeFaqModal);
  });
  
  // Career schließen
  careerCloseElements.forEach(el => {
    el.addEventListener("click", closeCareerModal);
  });
  
  // ESC schließt offene Modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (faqModal && faqModal.classList.contains("is-open")) {
        closeFaqModal();
      }
      if (careerModal && careerModal.classList.contains("is-open")) {
        closeCareerModal();
      }
    }
  });
  
  // beim Resize Indikator nachjustieren
  window.addEventListener("resize", () => {
    const currentActive = tabs.find(t => t.classList.contains("is-active")) || tabs[0];
    if (currentActive) moveIndicatorTo(currentActive);
  });
});


