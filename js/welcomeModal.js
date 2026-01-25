document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("quiz-modal");
  const closeBtn = document.getElementById("quiz-modal-close");
  const startBtn = document.getElementById("quiz-modal-start");

  if (!modal) return;

  function openModal() {
    modal.classList.add("is-open");
    // optional: Scroll im Hintergrund sperren
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  // === Beim Laden IMMER öffnen ===
  openModal();

  // Schließen über X + Button
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (startBtn) startBtn.addEventListener("click", closeModal);

  // Klick auf den dunklen Hintergrund schließt (aber nicht Klick im Content)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC schließt
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
