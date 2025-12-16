document.addEventListener('DOMContentLoaded', function () {

  /**********************************************
   * 3) Modal + Quiz für „Diskrete Strukturen“
   **********************************************/
  (function () {
    const modal = document.getElementById("ds-modal");
    const dialog = modal ? modal.querySelector(".ds-modal-dialog") : null;

    if (!modal || !dialog) return;

    function openModal() {
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function closeModal() {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    const triggers = document.querySelectorAll(
      'a[data-modul="diskrete-strukturen"], a[href="#diskrete-strukturen"]'
    );
    triggers.forEach(el => {
      el.style.cursor = "pointer";
      el.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    document.addEventListener("click", function (e) {
      const t = e.target;
      if (t.matches("[data-ds-close]")) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });

    dialog.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    // --- Abschnitt 1: Erwartungs-Check ---
    const expBtn = document.getElementById("ds-check-exp");
    const expFeedback = document.getElementById("ds-exp-feedback");

    if (expBtn && expFeedback) {
      expBtn.addEventListener("click", function () {
        const selected = Array.from(document.querySelectorAll("input[name='ds-exp']:checked"))
          .map(el => el.value);

        expFeedback.className = "ds-feedback";

        const hasCore = selected.includes("logik") || selected.includes("rechnen");
        const hasOnlyWrong = !hasCore && (selected.includes("programmieren") || selected.includes("design"));

        if (selected.length === 0) {
          expFeedback.textContent = "Wähle mindestens eine Aussage aus, um dein Bild vom Modul zu prüfen.";
          expFeedback.classList.add("warn");
          return;
        }

        if (hasCore && !selected.includes("programmieren") && !selected.includes("design")) {
          expFeedback.textContent =
            "Sehr treffend! Diskrete Strukturen drehen sich genau um solche Themen: Logik, Mengen, Relationen, Graphen und abstraktes Rechnen.";
          expFeedback.classList.add("ok");
        } else if (hasCore) {
          expFeedback.textContent =
            "Du hast schon einige richtige Vorstellungen (Logik, Mengen, abstraktes Rechnen). Programmier- und Design-Aspekte stehen hier eher nicht im Mittelpunkt.";
          expFeedback.classList.add("ok");
        } else if (hasOnlyWrong) {
          expFeedback.textContent =
            "Dein Bild ist noch etwas daneben: In „Diskrete Strukturen“ geht es weniger um Programmieren oder Design, sondern mehr um mathematische Grundlagen für die Informatik.";
          expFeedback.classList.add("error");
        } else {
          expFeedback.textContent =
            "Es gibt noch Luft nach oben beim Bild vom Modul – schau dir gern die Themen logische Aussagen, Mengen, Relationen und Graphen genauer an.";
          expFeedback.classList.add("warn");
        }
      });
    }

    // --- Abschnitt 2: Mini-Quiz ---
    const quizBtn = document.getElementById("ds-check-quiz");
    const quizFeedback = document.getElementById("ds-quiz-feedback");
    const correct = { "ds-q1": "a", "ds-q2": "b", "ds-q3": "a" };

    if (quizBtn && quizFeedback) {
      quizBtn.addEventListener("click", function () {
        let score = 0;
        let answered = 0;

        Object.keys(correct).forEach(q => {
          const selected = document.querySelector(`input[name='${q}']:checked`);
          if (selected) {
            answered++;
            if (selected.value === correct[q]) score++;
          }
        });

        quizFeedback.className = "ds-feedback";

        if (answered < Object.keys(correct).length) {
          quizFeedback.textContent = "Bitte beantworte alle Fragen, bevor du auswertest.";
          quizFeedback.classList.add("warn");
          return;
        }

        if (score === 3) {
          quizFeedback.textContent =
            "Top! Du hast alle Antworten richtig – du hast schon ein gutes Gefühl für die Begriffe.";
          quizFeedback.classList.add("ok");
        } else if (score === 2) {
          quizFeedback.textContent =
            "Schon ganz gut – du hast 2 von 3 richtig. Die Themen sind gut machbar, wenn du dranbleibst.";
          quizFeedback.classList.add("ok");
        } else if (score === 1) {
          quizFeedback.textContent =
            "Du hast 1 von 3 richtig. Das ist kein Problem – das Modul ist genau dafür da, dir diese Grundlagen beizubringen.";
          quizFeedback.classList.add("warn");
        } else {
          quizFeedback.textContent =
            "Noch kein Treffer – aber keine Sorge: In „Diskrete Strukturen“ fängst du genau bei diesen Grundlagen an.";
          quizFeedback.classList.add("error");
        }
      });
    }

    // --- Abschnitt 3: Drag & Drop ---
    const dndItems = document.querySelectorAll(".ds-dnd-item");
    const dndDrops = document.querySelectorAll(".ds-drop");
    const dndBtn = document.getElementById("ds-check-dnd");
    const dndFeedback = document.getElementById("ds-dnd-feedback");
    let draggedItem = null;

    dndItems.forEach(item => {
      item.addEventListener("dragstart", function (e) {
        draggedItem = this;
        this.classList.add("dragging");
        e.dataTransfer.setData("text/plain", this.dataset.term || "");
      });
      item.addEventListener("dragend", function () {
        this.classList.remove("dragging");
        draggedItem = null;
      });
    });

    dndDrops.forEach(drop => {
      drop.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.classList.add("over");
      });

      drop.addEventListener("dragleave", function () {
        this.classList.remove("over");
      });

      drop.addEventListener("drop", function (e) {
        e.preventDefault();
        this.classList.remove("over");

        const term = e.dataTransfer.getData("text/plain");
        if (!term || !draggedItem) return;

        const slot = this.querySelector(".ds-drop-slot");
        slot.textContent = draggedItem.textContent.trim();
        slot.classList.add("filled");
        this.dataset.current = term;
      });
    });

    if (dndBtn && dndFeedback) {
      dndBtn.addEventListener("click", function () {
        let total = 0;
        let correctCount = 0;

        dndFeedback.className = "ds-feedback";

        dndDrops.forEach(drop => {
          total++;
          const accept = drop.dataset.accept;
          const current = drop.dataset.current || "";
          if (accept === current) correctCount++;
        });

        if (correctCount === 0) {
          dndFeedback.textContent =
            "Noch keine Zuordnung getroffen – probier einfach ein bisschen aus, auch ohne Vorwissen.";
          dndFeedback.classList.add("warn");
        } else if (correctCount < total) {
          dndFeedback.textContent =
            "Schon ein guter Anfang: " + correctCount + " von " + total +
            " Zuordnungen passen. Du bekommst ein Gefühl für die Begriffe!";
          dndFeedback.classList.add("ok");
        } else {
          dndFeedback.textContent =
            "Perfekt! Alle Zuordnungen sind richtig – sehr gutes Grundverständnis für die Begriffe.";
          dndFeedback.classList.add("ok");
        }
      });
    }
  })();

});
