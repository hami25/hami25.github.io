/* =========================================================
moduleModal.js
 - Öffnet #ds-modal bei Klick auf [data-module]
 - Rendert "bank" (Fragenliste) oder "info" (Textsektionen)

  HTML Contract:
 - #ds-modal, #ds-modal-body, #ds-modal-title, #ds-intro
 - #ds-task-prev, #ds-task-next, #ds-task-progress

 Content Contract:
 - bank: { titel: string, fragen: BankQuestion[] }
 - info: { titel: string, sections: {title?, body?, bullets?}[] }
========================================================= */

(function () {

  // ---------------------------------------------------------------------------
  // Modul-Registry
  // - Die Keys Müssen exakt mit data-module="<key>" im HTML übereinstimmen
  // - contentVar muss als globale Variable (window[...]) existieren
  // ---------------------------------------------------------------------------

  const MODULE_DEFS = {

    // ===== Semester 1 =========================================================

    "diskrete-strukturen": {
      contentVar: "DS_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "einfuehrung-bwl": {
      contentVar: "BWL_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "einfuehrung-wi": {
      contentVar: "WI_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "oo-softwareentwicklung": {
      contentVar: "OO_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "einfuehrung-informatik": {
      contentVar: "INF_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    // ===== Semester 2 =========================================================

    "programmiermethoden": {
      contentVar: "PROGRAMMIERMETHODEN_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "datenbanken": {
      contentVar: "DATENBANKEN_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "geschaeftsprozessmanagement": {
      contentVar: "GESCHAEFTSPROZESSMANAGEMENT_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "betriebliches-rechnungswesen": {
      contentVar: "RECHNUNGSWESEN_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "wirtschaftsmathematik": {
      contentVar: "WIRTSCHAFTSMATHEMATIK_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    // ===== Semester 3 =========================================================

    "algorithmen-datenstrukturen": {
      contentVar: "ALGORITHMEN_DATENSTRUKTUREN_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "softwaretechnik": {
      contentVar: "SOFTWARETECHNIK_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "betriebliche-informationssysteme": {
      contentVar: "BETRIEBLICHE_INFORMATIONSSYSTEME_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "innovationsmanagement": {
      contentVar: "INNOVATIONSMANAGEMENT_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "statistik-wahrscheinlichkeit": {
      contentVar: "STATISTIK_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    // ===== Semester 4 =========================================================

    "webentwicklung": {
      contentVar: "WEBENTWICKLUNG_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "wahlmodul-wi": {
      contentVar: "WAHLMODUL_WI_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "business-intelligence": {
      contentVar: "BI_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "agiles-projektmanagement": {
      contentVar: "AGILES_PM_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },


    // ===== Semester 5 =========================================================

    "cybersecurity": {
      contentVar: "CYBERSECURITY_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "projekt-digitalisierung":{
      contentVar: "PROJEKT_DIGITALISIERUNG_MODAL_CONTENT",
      tasks: [{ type: "info" }]
    },

    "digitale-transformation": {
      contentVar: "DIGITALE_TRANSFORMATION_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "wissenschaftliches-arbeiten": {
      contentVar: "WISSENSCHAFTLICHES_ARBEITEN_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    "it-recht-datenschutz": {
      contentVar: "IT_RECHT_MODAL_CONTENT",
      tasks: [{ type: "bank" }]
    },

    // ===== Semester 6 =========================================================

    // ===== Semester 7 =========================================================

    "bachelor-thesis": {
      contentVar: "BACHELORARBEIT_MODAL_CONTENT",
      tasks: [{ type: "info" }]
    },

    "wahlmodul-internationalisierung": {
      contentVar: "INTERNATIONALISIERUNG_MODAL_CONTENT",
      tasks: [{ type: "info" }]
    },

    "portfolio-wi": {
      contentVar: "PORTFOLIO_WI_MODAL_CONTENT",
      tasks: [{ type: "info" }]
    },

  };

  // ---------------------------------------------------------------------------
  // DOM-Referenzen + interner Zustand
  // ---------------------------------------------------------------------------
  const modal = document.getElementById("ds-modal");
  if (!modal) return;

  const dialog = modal.querySelector(".ds-modal-dialog");
  const bodyEl = document.getElementById("ds-modal-body");
  const titleEl = document.getElementById("ds-modal-title");
  const introEl = document.getElementById("ds-intro");

  const prevBtn = document.getElementById("ds-task-prev");
  const nextBtn = document.getElementById("ds-task-next");
  const progressEl = document.getElementById("ds-task-progress");

  let currentModuleId = null;
  let currentTask = 1;

  // =========================================================
  //  Helpers
  // =========================================================

  function getContent(def) {
    const v = window[def.contentVar];
    return window[def.contentVar] ?? null
  }

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    currentModuleId = null;
    currentTask = 1;
    if (bodyEl) bodyEl.innerHTML = "";
    if (titleEl) titleEl.textContent = "";
    if (introEl) introEl.textContent = "";
  }

  function scrollTop() {
    if (dialog) dialog.scrollTop = 0;
  }

  function setProgress(n, total) {
    if (!progressEl) return;
    progressEl.className = "ds-feedback";
    progressEl.textContent = `Aufgabe ${n} / ${total}`;
  }

// Zeigt genau eine .ds-task an (Step-by-step)
  function showTask(n) {
    const tasks = Array.from(bodyEl.querySelectorAll(".ds-task"));
    const total = tasks.length;

    tasks.forEach((t) => {
      t.hidden = Number(t.dataset.task) !== n;
    });

    if (prevBtn) prevBtn.disabled = n === 1;
    if (nextBtn) nextBtn.textContent = n === total ? "Fertig" : "Weiter";

    setProgress(n, total);
    scrollTop();
  }



  // =========================================================
  //  Für MOBILE
  // =========================================================

  function enableTouchTapDnD(root) {
    const isTouch =
      (window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

    if (!isTouch) return;

    let selectedChip = null;

    // Chip antippen = auswählen
    root.querySelectorAll(".ds-chip, .s3-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        // nur auf Touch als „Auswahl“
        e.preventDefault();
        e.stopPropagation();

        // Toggle
        if (selectedChip === chip) {
          chip.classList.remove("is-selected");
          selectedChip = null;
          return;
        }

        root.querySelectorAll(".ds-chip.is-selected, .s3-chip.is-selected")
          .forEach(c => c.classList.remove("is-selected"));

        chip.classList.add("is-selected");
        selectedChip = chip;
      });
    });

    // Dropzone antippen = einfügen
    root.querySelectorAll(".ds-dropzone, .s3-dropzone, .ds-inline-dropzone").forEach(zone => {
      zone.addEventListener("click", (e) => {
        if (!selectedChip) return;

        e.preventDefault();
        e.stopPropagation();

        // === Fall A: simple s3-dropzone (dein mini-DragDrop) ===
        const s3qid = zone.getAttribute("data-dd-dropzone");
        if (s3qid) {
          const selected = root.querySelector(`[data-dd-selected="${s3qid}"]`);
          if (selected) selected.appendChild(selectedChip);
          selectedChip.classList.remove("is-selected");
          selectedChip = null;
          return;
        }

        // === Fall B: ds-dropzone (Zuordnung/Lückentext) ===
        const dropType = zone.getAttribute("data-drop-type");
        const val = selectedChip.getAttribute("data-value");
        if (!dropType || !val) return;

        // Wenn Zone schon gefüllt: alten Wert zurück
        const already = zone.dataset.filled;
        if (already) moveChipBackToPool(root, dropType, already);

        zone.dataset.filled = val;

        // Zone füllen (wie in deinem drop-handler)
        if (zone.classList.contains("ds-inline-dropzone")) {
          zone.innerHTML = `<span class="ds-dropzone-filled">${escapeHtml(val)}</span>
                          <button class="ds-mini-btn" type="button" data-clear>×</button>`;
        } else {
          zone.innerHTML = `<span class="ds-dropzone-filled">${escapeHtml(val)}</span>
                          <button class="ds-mini-btn" type="button" data-clear>×</button>`;
        }

        zone.querySelector("[data-clear]")?.addEventListener("click", () => {
          const v = zone.dataset.filled;
          zone.dataset.filled = "";
          if (zone.classList.contains("ds-inline-dropzone")) {
            const idx = Number(zone.dataset.blankIndex) + 1;
            zone.innerHTML = `<span class="ds-dropzone-placeholder">[${idx}]</span>`;
          } else {
            zone.innerHTML = `<span class="ds-dropzone-placeholder">Definition hier ablegen</span>`;
          }
          moveChipBackToPool(root, dropType, v);
        });

        // Chip aus Pool entfernen (damit nicht doppelt)
        removeChipFromPool(root, dropType, val);

        selectedChip.classList.remove("is-selected");
        selectedChip = null;
      });
    });
  }


  // =========================================================
  //  Ende Für MOBILE
  // =========================================================





  // ---------------------------------------------------------------------------
  // Renderer (HTML-Strings)
  // Hinweis: Das Rendering ist absichtlich string-basiert.
  // Die Event-Handler werden danach pro Step gebunden.
  // ---------------------------------------------------------------------------
  function renderTaskHTML(type) {

    switch (type) {

      case "bank":
        return `
    <section class="ds-section">
      <div class="ds-bank-step"></div>
    </section>
  `;

      case "info":
        return `
    <section class="ds-section">
      <div class="ds-info"></div>
    </section>
  `;

      default:
        return `<section class="ds-section"><p>Unbekannter Task-Typ: ${type}</p></section>`;
    }
  }

  function renderModule(moduleId) {
    const def = MODULE_DEFS[moduleId];
    if (!def) return;

    const content = getContent(def);

    if (!content) {
      console.error("Modal content not found for:", moduleId, def.contentVar);
      titleEl.textContent = "Inhalt fehlt";
      introEl.textContent = `Content-Variable "${def.contentVar}" wurde nicht gefunden.`;
      bodyEl.innerHTML = "";
      openModal();
      return;
    }

    currentModuleId = moduleId;
    currentTask = 1;

    const hasBank = Array.isArray(def.tasks) && def.tasks.some(t => t.type === "bank");
    const hasInfo = Array.isArray(def.tasks) && def.tasks.some(t => t.type === "info");


    // Titel/Intro setzen
    if (hasBank || hasInfo) {
      titleEl.textContent = content.titel || "";
      introEl.textContent = hasInfo
        ? "Orientierung & Ablauf – unabhängig vom konkreten Projekt."
        : "Kurzer Selbsttest – beantworte die Fragen Schritt für Schritt.";
    } else {
      titleEl.textContent = content[def.titleKey] || "";
      introEl.textContent = content[def.introKey] || "";
    }

    bodyEl.innerHTML = "";

    // BANK: pro Frage ein Step (.ds-task)
    if (hasBank) {
      const fragen = Array.isArray(content.fragen) ? content.fragen : [];

      fragen.forEach((q, idx) => {
        const wrap = document.createElement("div");
        wrap.className = "ds-task";
        wrap.dataset.task = String(idx + 1);
        if (idx !== 0) wrap.hidden = true;

        // Task-Hülle (enthält .ds-bank-step als Host für genau 1 Frage)
        wrap.innerHTML = renderTaskHTML("bank");
        bodyEl.appendChild(wrap);

        // Frage in diesen Step rendern + nur innerhalb dieses Steps binden
        const host = wrap.querySelector(".ds-bank-step");
        if (host) {
          host.innerHTML = renderSingleBankQuestion(q, idx, fragen.length);
          bindBankQuestionInteractions(wrap, q); // Check + DnD nur in diesem Step
        }
      });

    } else {
      // Info: tasks[] rendern
      def.tasks.forEach((t, idx) => {
        const wrap = document.createElement("div");
        wrap.className = "ds-task";
        wrap.dataset.task = String(idx + 1);
        if (idx !== 0) wrap.hidden = true;
        wrap.innerHTML = renderTaskHTML(t.type);
        bodyEl.appendChild(wrap);
      });

      if (hasInfo) {
        // Info steckt in Task 1 (weil tasks: [{type:"info"}])
        const firstTask = bodyEl.querySelector('.ds-task[data-task="1"]');
        if (firstTask) renderInfoSections(content, firstTask);
      } else {
        applyKeys(bodyEl, content);
        bindTaskLogic(def);
      }
    }

    showTask(1);
    openModal();
  }

  function renderSingleBankQuestion(q, idx, total) {
    const qid = `bankq-${idx}`;

    return `
    <div class="ds-question" data-qid="${qid}" data-qtype="${q.typ}">
      <p class="ds-hint"><strong>Frage ${idx + 1} / ${total}</strong>${q.schwierigkeit ? ` · ${q.schwierigkeit}` : ""}</p>

      <p><strong>${idx + 1}.</strong> ${q.frage}</p>

      <!-- Add-on Darstellung (LinkedList / BubbleSort / Diagramm / Statistik-Code) -->
      ${renderS3AddonHTML(q, qid)}

      <!--  Antwort-UI -->
      ${renderQuestionByType(q, qid)}

      <button class="ds-btn" type="button" data-check="${qid}">Prüfen</button>
      <div class="ds-feedback" data-feedback="${qid}"></div>
    </div>
  `;
  }

  function bindBankQuestionInteractions(stepEl, q) {

    //  BubbleSort Animation starten (nur wenn Frage bubbleSort hat)
    if (q.bubbleSort) {
      const host = stepEl.querySelector(`[data-bubble-host]`);
      if (host) startS3BubbleSortAnimation(host);
    }

    // Drag&Drop innerhalb dieses Steps aktivieren (Zuordnung/Lückentext + Sortierung)
    bindDnDWithin(stepEl);
    bindSimpleDragDropWithin(stepEl);
    bindSortDnDWithin(stepEl);

    //Für Mobile
    enableTouchTapDnD(stepEl);


    // Prüfen-Button nur für diese eine Frage
    const btn = stepEl.querySelector("[data-check]");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const box = stepEl.querySelector(".ds-question");
      if (!box) return;

      const result = checkQuestionByType(q, box); // {ok,msg}

      const fb = box.querySelector(`[data-feedback="${box.dataset.qid}"]`);
      if (!fb) return;

      fb.className = "ds-feedback " + (result.ok ? "ok" : "warn");
      fb.textContent = result.msg;


    });
  }


  function renderInfoSections(content, rootEl) {
    const host = rootEl.querySelector(".ds-info");
    if (!host) return;

    const sections = Array.isArray(content.sections) ? content.sections : [];

    host.innerHTML = sections.map(sec => {
      const title = sec.title ? `<h3>${escapeHtml(sec.title)}</h3>` : "";
      const body = sec.body ? `<p>${escapeHtml(sec.body)}</p>` : "";
      const bullets = Array.isArray(sec.bullets) && sec.bullets.length
        ? `<ul>${sec.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
        : "";

      return `<div class="ds-info-block">${title}${body}${bullets}</div>`;
    }).join("");
  }

  function bindSimpleDragDropWithin(root) {
    root.querySelectorAll(".s3-chip[draggable='true']").forEach(chip => {
      chip.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", chip.dataset.value || "");
        e.dataTransfer.effectAllowed = "move";
      });
    });

    // Dropzones
    root.querySelectorAll(".s3-dropzone").forEach(zone => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        zone.classList.add("is-over");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("is-over");
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("is-over");

        const val = e.dataTransfer.getData("text/plain");
        if (!val) return;

        const qid = zone.getAttribute("data-dd-dropzone");
        const tray = root.querySelector(`[data-dd-tray="${qid}"]`);
        const selected = root.querySelector(`[data-dd-selected="${qid}"]`);

        // Finde existierendes Chip-Element (aus Tray oder Selected)
        const chip = root.querySelector(`.s3-chip[data-dd-chip="${qid}"][data-value="${CSS.escape(val)}"]`);
        if (!chip || !selected) return;

        selected.appendChild(chip);
      });
    });

    // Chips zurück in Tray bei Klick
    root.querySelectorAll(".s3-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const qid = chip.getAttribute("data-dd-chip");
        const tray = root.querySelector(`[data-dd-tray="${qid}"]`);
        if (tray) tray.appendChild(chip);
      });
    });
  }


  function bindDnDWithin(root) {
    // Drag start (für alle Chips)
    root.querySelectorAll('[draggable="true"][data-drag-type]').forEach(chip => {
      chip.addEventListener("dragstart", (e) => {
        const type = chip.dataset.dragType;
        const value = chip.dataset.value;

        e.dataTransfer.setData("text/plain", JSON.stringify({ type, value }));
        e.dataTransfer.effectAllowed = "move";

        chip.classList.add("is-dragging");
      });

      chip.addEventListener("dragend", () => {
        chip.classList.remove("is-dragging");
      });
    });

    // Dropzones (Zuordnung + Lückentext)
    root.querySelectorAll("[data-drop-type]").forEach(zone => {
      // allow drop
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("is-over");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("is-over");
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("is-over");

        let payload;
        try {
          payload = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");
        } catch {
          payload = {};
        }

        const expectedType = zone.dataset.dropType; // "zuordnung" oder "lueckentext" etc.
        if (!payload.type || payload.type !== expectedType) return;

        // Wenn Zone schon gefüllt ist: Chip zurück in Pool legen
        const already = zone.dataset.filled;
        if (already) {
          moveChipBackToPool(root, expectedType, already);
        }

        // neuen Chip aus Pool entfernen (oder aus anderer Zone bewegen)
        zone.dataset.filled = payload.value;

        // Zone visual füllen
        zone.innerHTML = `
        <span class="ds-dropzone-filled">${escapeHtml(payload.value)}</span>
        <button class="ds-mini-btn" type="button" data-clear>×</button>
      `;

        // „Clear“ Button
        zone.querySelector("[data-clear]")?.addEventListener("click", () => {
          const val = zone.dataset.filled;
          zone.dataset.filled = "";
          zone.innerHTML = `<span class="ds-dropzone-placeholder">Definition hier ablegen</span>`;
          // Für inline-dropzone (Lückentext) Placeholder besser:
          if (zone.classList.contains("ds-inline-dropzone")) {
            const idx = Number(zone.dataset.blankIndex) + 1;
            zone.innerHTML = `<span class="ds-dropzone-placeholder">[${idx}]</span>`;
          }
          moveChipBackToPool(root, expectedType, val);
        });

        // Chip im Pool entfernen (damit nicht doppelt)
        removeChipFromPool(root, expectedType, payload.value);
      });
    });
  }

  function bindSortDnDWithin(root) {
    const lists = root.querySelectorAll("[data-sort-list]");
    lists.forEach(list => {
      let draggingEl = null;

      // dragstart/dragend auf Items
      list.querySelectorAll('.ds-sort-item[draggable="true"]').forEach(item => {
        item.addEventListener("dragstart", (e) => {
          draggingEl = item;
          e.dataTransfer.effectAllowed = "move";
          item.classList.add("is-dragging");
        });

        item.addEventListener("dragend", () => {
          item.classList.remove("is-dragging");
          draggingEl = null;
          list.querySelectorAll(".is-over").forEach(el => el.classList.remove("is-over"));
        });
      });

      // dragover auf Liste: Element an passende Stelle bewegen
      list.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (!draggingEl) return;

        const afterEl = getDragAfterElement(list, e.clientY);
        if (afterEl == null) {
          list.appendChild(draggingEl);
        } else {
          list.insertBefore(draggingEl, afterEl);
        }
      });
    });
  }

  function getDragAfterElement(list, y) {
    const items = [...list.querySelectorAll(".ds-sort-item:not(.is-dragging)")];

    return items.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - (box.top + box.height / 2);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
  }


  function removeChipFromPool(root, type, value) {
    const pool = root.querySelector(`.ds-pool[data-pool-type="${type}"]`);
    if (!pool) return;

    const chip = Array.from(pool.querySelectorAll(`[data-drag-type="${type}"][data-value]`))
      .find(c => c.dataset.value === value);

    chip?.remove();
  }

  function moveChipBackToPool(root, type, value) {
    if (!value) return;
    const pool = root.querySelector(`.ds-pool[data-pool-type="${type}"]`);
    if (!pool) return;

    // Wenn schon im Pool existiert, nicht doppelt hinzufügen
    const exists = Array.from(pool.querySelectorAll(`[data-drag-type="${type}"][data-value]`))
      .some(c => c.dataset.value === value);
    if (exists) return;

    pool.insertAdjacentHTML("beforeend", `
    <div class="ds-chip"
         draggable="true"
         data-drag-type="${type}"
         data-value="${escapeHtml(value)}">
      ${escapeHtml(value)}
    </div>
  `);

    // Neu hinzugefügten Chip sofort bindDnD-fähig machen:
    const newChip = pool.lastElementChild;
    if (newChip) {
      newChip.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({ type, value }));
        e.dataTransfer.effectAllowed = "move";
        newChip.classList.add("is-dragging");
      });
      newChip.addEventListener("dragend", () => newChip.classList.remove("is-dragging"));
    }
  }

  function renderQuestionByType(q, qid) {
    switch (q.typ) {
      case "single_choice":
        return (q.optionen || []).map((opt, idx) => `
          <label>
            <input type="radio" name="${qid}" value="${idx}">
            ${opt}
          </label><br/>
        `).join("");

      case "multiple_choice":
        return (q.optionen || []).map((opt, idx) => `
          <label>
            <input type="checkbox" name="${qid}" value="${idx}">
            ${opt}
          </label><br/>
        `).join("");

      // Einfaches Drag&Drop (DropZone + Chips)
      case "dragdrop":
        return renderSimpleDragDrop(q, qid);

      // Statistik Code + Inline Dropdown wird als Add-on gerendert
      case "code_inline_dropdown":
        return ``;

      // Zuordnung als Drag&Drop
      case "zuordnung":
        return renderZuordnungDnd(q, qid);

      // Lückentext (Drag&Drop)
      case "lueckentext":
        return renderLueckentextDnd(q, qid);

      // Lückentext-Auswahl (Dropdown)
      case "lueckentext_auswahl":
        return renderLueckentextAuswahl(q, qid);

      case "sortierung":
        return renderSortierungDnd(q, qid);


      default:
        return `<p>⚠️ Fragetyp "${q.typ}" ist noch nicht gerendert.</p>`;
    }
  }

  function checkQuestionByType(q, box) {
    const qid = box.dataset.qid;

    switch (q.typ) {
      case "single_choice": {
        const sel = box.querySelector(`input[name="${qid}"]:checked`)?.value;
        if (sel == null) return { ok: false, msg: "Bitte wähle eine Option." };

        const ok = Number(sel) === q.antwort;
        return { ok, msg: (ok ? "✅ Richtig! " : "↪ Nicht ganz. ") + (q.erklaerung || "") };
      }

      case "multiple_choice": {
        const selected = Array.from(box.querySelectorAll(`input[name="${qid}"]:checked`))
          .map(el => Number(el.value))
          .sort((a, b) => a - b);

        if (selected.length === 0) return { ok: false, msg: "Bitte wähle mindestens eine Option." };

        const correct = [...(q.antwort || [])].sort((a, b) => a - b);
        const ok = JSON.stringify(selected) === JSON.stringify(correct);

        return { ok, msg: (ok ? "✅ Richtig! " : "↪ Nicht ganz. ") + (q.erklaerung || "") };
      }

      case "dragdrop": {
        return checkSimpleDragDrop(q, box);
      }

      case "code_inline_dropdown": {
        const sel = box.querySelector("select.inline-dropdown")?.value;
        if (!sel) return { ok: false, msg: "Bitte wähle eine Option." };

        const ok = String(sel) === String(q.antwort);
        return { ok, msg: (ok ? "✅ Richtig! " : "↪ Nicht ganz. ") + (q.erklaerung || "") };
      }

      // Zuordnung (DnD)
      case "zuordnung": {
        return checkZuordnungDnd(q, box);
      }

      //Lückentext (DnD)
      case "lueckentext": {
        return checkLueckentextDnd(q, box);
      }

      // Lückentext-Auswahl
      case "lueckentext_auswahl": {
        return checkLueckentextAuswahl(q, box);
      }

      case "sortierung":
        return checkSortierungDnd(q, box);


      default:
        return { ok: false, msg: `Für den Typ "${q.typ}" fehlt noch die Auswertung.` };
    }
  }


  function renderSimpleDragDrop(q, qid) {
    const dropText = q.dropText || "Ziehe hier die passenden Begriffe hinein";
    const chips = shuffleCopy(q.begriffe || []);

    return `
    <div class="s3-dd">
      <div class="s3-dropzone" data-dd-dropzone="${qid}">
        <b>${escapeHtml(dropText)}</b>
        <div class="s3-dropitems" data-dd-selected="${qid}"></div>
      </div>

      <div class="s3-chiptray" data-dd-tray="${qid}">
        ${chips.map((t, i) => `
          <div class="s3-chip" draggable="true"
               data-dd-chip="${qid}"
               data-value="${escapeHtml(t)}">${escapeHtml(t)}</div>
        `).join("")}
      </div>
    </div>
  `;
  }

  function checkSimpleDragDrop(q, box) {
    const qid = box.dataset.qid;
    const selectedHost = box.querySelector(`[data-dd-selected="${qid}"]`);
    if (!selectedHost) return { ok: false, msg: "Drop-Zone nicht gefunden." };

    // Ausgewählte Werte (Strings)
    const selected = Array.from(selectedHost.querySelectorAll(".s3-chip"))
      .map(el => el.dataset.value);

    const begriffe = Array.isArray(q.begriffe) ? q.begriffe : [];

    // Lösung ermitteln: loesung ODER antwort
    // - loesung: meist Strings ["Extract",...]
    // - antwort: kann Indizes [0,1,6] ODER Strings sein
    let correctRaw = Array.isArray(q.loesung) ? q.loesung
      : Array.isArray(q.antwort) ? q.antwort
        : [];

    // Wenn correctRaw Zahlen enthält -> in Begriffe umwandeln
    let correct = [];
    if (correctRaw.length && typeof correctRaw[0] === "number") {
      correct = correctRaw
        .map(i => begriffe[i])
        .filter(v => typeof v === "string");
    } else {
      // Strings direkt übernehmen
      correct = correctRaw.map(String);
    }

    if (selected.length !== correct.length) {
      return { ok: false, msg: `❌ Du musst genau ${correct.length} Begriffe auswählen!` };
    }

    // Reihenfolge egal (ETL): sortierter Vergleich
    const ok =
      JSON.stringify([...selected].sort()) === JSON.stringify([...correct].sort());

    return { ok, msg: ok ? "✅ Richtig!" : "↪ Nicht ganz. Versuche es noch einmal." };
  }



  function shuffleCopy(arr) {
    const a = [...(arr || [])];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // =======================
  //  Add-ons (Darstellungen) für Bank-Fragen
  // =======================

// kompakter PythonCode (für Statistik Inline-Dropdown)
  const S3_pythonCodes = {
    import: `
<pre><code>import <span class="blank">numpy</span> as np
daten = np.array([1, 2, 3, 4, 5])
mittelwert = np.mean(daten)</code></pre>`,
    vergleich: `
<pre><code>import numpy as np
daten = np.array([1, 2, 3, 4, 5])
mittelwert = np.mean(daten)
kleiner_als_3 = <span class="blank">daten[daten <= 3]</span></code></pre>`,
    filter: `
<pre><code>import <span class="blank">pandas</span> as pd
df = pd.DataFrame({
"name":["Anna","Tom","Lisa"],
"alter":[17, 21, 30]})</code></pre>`,
    alter: `
<pre><code>import pandas as pd
print("Die jüngste Person ist: "
<span class="blank">df["Alter"].min()</span>)</code></pre>`,
  };

// Add-on HTML oberhalb der Antwort-UI
  function renderS3AddonHTML(q, qid) {
    let out = "";

    // 1) Linked-List Darstellung
    if (Array.isArray(q.linkedNode) && q.linkedNode.length) {
      const nodes = q.linkedNode
        .map((n, i) => {
          const node = `<div class="node">${escapeHtml(n.wert)}</div>`;
          const arrow = i < q.linkedNode.length - 1 ? `<div class="arrow">→</div>` : "";
          return node + arrow;
        })
        .join("");
      out += `<div class="linked-node">${nodes}</div>`;
    }

    // 2) BubbleSort Animation Container (Animation startet später in bindBankQuestionInteractions)
    if (q.bubbleSort) {
      out += `<div class="bubble-container" data-bubble-host="${qid}"></div>`;
    }

    // 3) SWT Diagramm
    if (q.diagramm) {
      out += `
      <div class="diagramm-container">
        <div class="diagramm">
          <div class="diagramm-header">StudentIn</div>
          <div class="diagramm-body">
            + name : String<br>
            - alter : Integer<br>
            # note : Float
          </div>
        </div>
        <div class="arrow">→</div>
        <div class="diagramm">
          <div class="diagramm-header"><u>:StudentIn</u></div>
          <div class="diagramm-body">
            name = "Anna"<br>
            alter = 20<br>
            note = 4.0
          </div>
        </div>
      </div>
    `;
    }

    // 4) Statistik Code + Inline Dropdown
    if (q.typ === "code_inline_dropdown" && q.codeKey) {
      let html = S3_pythonCodes[q.codeKey] || "";

      // ersetze <span class="blank">...</span> durch <select>
      html = html.replace(/<span class="blank">.*?<\/span>/g, () => {
        const optionen = q.optionen || [];
        const optionsHTML =
          `<option value="" disabled selected></option>` +
          optionen
            .map(opt => {
              const val = String(opt).replace(/"/g, "&quot;");
              return `<option value="${val}">${escapeHtml(opt)}</option>`;
            })
            .join("");
        return `<select class="inline-dropdown">${optionsHTML}</select>`;
      });

      out += `<div class="code-content">${html}</div>`;
    }

    return out;
  }

// BubbleSort Animation (pro Step/Frage)
  function startS3BubbleSortAnimation(hostEl) {
    if (!hostEl) return;

    const array = [15, 2, 8, 11, 6, 13, 4, 1];
    hostEl.innerHTML = "";

    hostEl.style.display = "flex";
    hostEl.style.justifyContent = "center";
    hostEl.style.alignItems = "flex-end";
    hostEl.style.gap = "6px";
    hostEl.style.height = "200px";
    hostEl.style.overflow = "hidden";
    hostEl.style.margin = "10px 0 14px";

    const maxVal = Math.max(...array);
    const maxHeight = 150;

    array.forEach(val => {
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.height = (val / maxVal * maxHeight) + "px";
      bar.style.width = "15px";
      bar.style.borderRadius = "4px";
      hostEl.appendChild(bar);
    });

    let i = 0, j = 0;
    const bars = hostEl.querySelectorAll(".bar");

    const interval = setInterval(() => {
      if (i < bars.length) {
        if (j < bars.length - i - 1) {
          const h1 = parseFloat(bars[j].style.height);
          const h2 = parseFloat(bars[j + 1].style.height);
          if (h1 > h2) {
            bars[j].style.height = h2 + "px";
            bars[j + 1].style.height = h1 + "px";
          }
          j++;
        } else {
          j = 0;
          i++;
        }
      } else {
        clearInterval(interval);
      }
    }, 500);
  }

// erkennt [LUECKE1], [LUECKE2], ...
  function extractBlankTokens(text) {
    const matches = String(text ?? "").match(/\[LUECKE\d+\]/g);
    return matches ? [...new Set(matches)] : [];
  }


  function renderZuordnungDnd(q, qid) {
    const begriffe = q.items?.begriffe || [];
    const definitionen = q.items?.definitionen || [];

    const defsShuffled = shuffleCopy(definitionen);

    // Linke Seite: Begriffe + Dropzone
    const rows = begriffe.map((b, i) => `
    <div class="ds-zuordnung-row">
      <div class="ds-zuordnung-begriff">${escapeHtml(b)}</div>
      <div class="ds-dropzone"
           data-drop-type="zuordnung"
           data-begriff="${escapeHtml(b)}"
           data-filled="">
        <span class="ds-dropzone-placeholder">Definition hier ablegen</span>
      </div>
    </div>
  `).join("");

    // Rechte Seite: draggable Definitionen
    const pool = defsShuffled.map((d, i) => `
    <div class="ds-chip"
         draggable="true"
         data-drag-type="zuordnung"
         data-value="${escapeHtml(d)}">
      ${escapeHtml(d)}
    </div>
  `).join("");

    // Wir markieren den Container, damit wir später Events sauber binden können
    // Events werden in renderQuestionBank nach dem Insert gebunden
    return `
    <div class="ds-zuordnung" data-qui="${qid}">
      <div class="ds-zuordnung-left">
        ${rows}
      </div>
      <div class="ds-zuordnung-right">
        <p class="ds-hint">Ziehe die Definitionen auf die passenden Begriffe.</p>
        <div class="ds-pool" data-pool-type="zuordnung">
          ${pool}
        </div>
      </div>
    </div>
  `;
  }

  function checkZuordnungDnd(q, box) {
    const drops = Array.from(box.querySelectorAll(`.ds-dropzone[data-drop-type="zuordnung"]`));

    // alle müssen gefüllt sein
    const unfilled = drops.filter(d => !d.dataset.filled);
    if (unfilled.length) {
      return { ok: false, msg: "Bitte ordne alle Begriffe einer Definition zu." };
    }

    // userPairs: [ [begriff, definition], ... ]
    const userPairs = drops.map(d => [d.dataset.begriff, d.dataset.filled]);

    // correctPairs: aus q.antwort
    const correctPairs = (q.antwort || []).map(([b, def]) => [b, def]);

    // Vergleich: alle Paare müssen exakt matchen
    const ok = correctPairs.every(([b, def]) =>
      userPairs.some(([ub, udef]) => ub === b && udef === def)
    );

    return { ok, msg: (ok ? "✅ Richtig! " : "↪ Nicht ganz. ") + (q.erklaerung || "") };
  }

  function renderLueckentextDnd(q, qid) {
    const text = String(q.text || "");
    const blanks = extractBlankTokens(text); // z.B. ["[LUECKE1]","[LUECKE2]","[LUECKE3]"]

    // Text in HTML: jede Lücke wird Dropzone
    let htmlText = escapeHtml(text);
    blanks.forEach((token, idx) => {
      const drop = `
      <span class="ds-inline-dropzone"
            data-drop-type="lueckentext"
            data-blank-index="${idx}"
            data-filled="">
        <span class="ds-dropzone-placeholder">[${idx + 1}]</span>
      </span>
    `;
      htmlText = htmlText.replaceAll(escapeHtml(token), drop);
    });

    const pool = shuffleCopy(q.optionen || []).map(opt => `
    <div class="ds-chip"
         draggable="true"
         data-drag-type="lueckentext"
         data-value="${escapeHtml(opt)}">
      ${escapeHtml(opt)}
    </div>
  `).join("");

    return `
    <div class="ds-lueckentext" data-qui="${qid}">
      <p class="ds-lueckentext-text">${htmlText}</p>
      <p class="ds-hint">Ziehe die passenden Begriffe in die Lücken.</p>
      <div class="ds-pool" data-pool-type="lueckentext">
        ${pool}
      </div>
    </div>
  `;
  }

  function checkLueckentextDnd(q, box) {
    const drops = Array.from(box.querySelectorAll(`.ds-inline-dropzone[data-drop-type="lueckentext"]`))
      .sort((a, b) => Number(a.dataset.blankIndex) - Number(b.dataset.blankIndex));

    const unfilled = drops.filter(d => !d.dataset.filled);
    if (unfilled.length) return { ok: false, msg: "Bitte fülle alle Lücken." };

    const user = drops.map(d => d.dataset.filled);
    const correct = q.antwort || [];

    const ok = JSON.stringify(user) === JSON.stringify(correct);

    return { ok, msg: (ok ? "✅ Richtig! " : "↪ Nicht ganz. ") + (q.erklaerung || "") };
  }

  function renderLueckentextAuswahl(q, qid) {
    const text = String(q.text || "");
    const blanks = extractBlankTokens(text);

    let htmlText = escapeHtml(text);

    blanks.forEach((token, idx) => {
      const options = (q.optionen || []).map(opt =>
        `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`
      ).join("");

      const select = `
      <select class="ds-select"
              data-drop-type="lueckentext_auswahl"
              data-blank-index="${idx}">
        <option value="">Bitte wählen…</option>
        ${options}
      </select>
    `;

      htmlText = htmlText.replaceAll(escapeHtml(token), select);
    });

    return `
    <div class="ds-lueckentext" data-qui="${qid}">
      <p class="ds-lueckentext-text">${htmlText}</p>
    </div>
  `;
  }

  function checkLueckentextAuswahl(q, box) {
    const selects = Array.from(box.querySelectorAll(`select[data-drop-type="lueckentext_auswahl"]`))
      .sort((a, b) => Number(a.dataset.blankIndex) - Number(b.dataset.blankIndex));

    if (selects.some(s => !s.value)) return { ok: false, msg: "Bitte wähle für alle Lücken eine Option." };

    const user = selects.map(s => s.value);
    const correct = q.antwort || [];

    const ok = JSON.stringify(user) === JSON.stringify(correct);

    return { ok, msg: (ok ? "✅ Richtig! " : "↪ Nicht ganz. ") + (q.erklaerung || "") };
  }

  function checkSortierungDnd(q, box) {
    const list = box.querySelector("[data-sort-list]");
    if (!list) return { ok: false, msg: "Sortierliste nicht gefunden." };

    const current = Array.from(list.querySelectorAll(".ds-sort-item"))
      .map(li => li.dataset.value);

    const correct = Array.isArray(q.antwort) ? q.antwort : [];

    // Wenn Länge nicht passt, ist was faul
    if (current.length !== correct.length) {
      return { ok: false, msg: "Die Sortierung ist unvollständig." };
    }

    const ok = JSON.stringify(current) === JSON.stringify(correct);
    return { ok, msg: (ok ? "✅ Richtig! " : "↪ Nicht ganz. ") + (q.erklaerung || "") };
  }


  function renderSortierungDnd(q, qid) {
    const items = Array.isArray(q.items) ? q.items : [];
    const shuffled = shuffleCopy(items);

    const list = shuffled.map((text, i) => `
    <li class="ds-sort-item"
        draggable="true"
        data-drag-type="sortierung"
        data-value="${escapeHtml(text)}">
      <span class="ds-sort-handle" aria-hidden="true">↕</span>
      <span class="ds-sort-text">${escapeHtml(text)}</span>
    </li>
  `).join("");

    return `
    <div class="ds-sortierung" data-qui="${qid}">
      <p class="ds-hint">Ziehe die Elemente in die richtige Reihenfolge.</p>
      <ol class="ds-sort-list" data-sort-list>
        ${list}
      </ol>
    </div>
  `;
  }

  // =========================================================
  //  Logic: Buttons + DnD
  // =========================================================
  function getFeedback(def, key, fallback) {
    return (def.feedback && def.feedback[key]) ? def.feedback[key] : fallback;
  }

  function bindTaskLogic(def) {
    // Aufgabe 1 – Erwartungscheck
    const expBtn = document.getElementById("ds-check-exp");
    const expFb = document.getElementById("ds-exp-feedback");
    if (expBtn && expFb) {
      expBtn.onclick = () => {
        const checked = Array.from(document.querySelectorAll("input[name='ds-exp']:checked"));
        expFb.className = "ds-feedback";
        if (checked.length === 0) {
          expFb.textContent = "Wähle mindestens eine Aussage aus.";
          expFb.classList.add("warn");
          return;
        }
        const values = checked.map(i => i.value);
        const good = values.includes("1") || values.includes("3");
        expFb.textContent = good
          ? getFeedback(def, "exp_ok", "✅ Klingt passend!")
          : getFeedback(def, "exp_warn", "↪ Hinweis: Das Modul ist breiter als gedacht.");
        expFb.classList.add(good ? "ok" : "warn");
      };
    }

    // Quiz
    const quizBtn = document.getElementById("ds-check-quiz");
    const quizFb = document.getElementById("ds-quiz-feedback");
    if (quizBtn && quizFb) {
      quizBtn.onclick = () => {
        quizFb.className = "ds-feedback";
        const ans = def.answers.quiz;

        const s1 = document.querySelector("input[name='ds-q1']:checked")?.value;
        const s2 = document.querySelector("input[name='ds-q2']:checked")?.value;
        const s3 = document.querySelector("input[name='ds-q3']:checked")?.value;

        if (!s1 || !s2 || !s3) {
          quizFb.textContent = "Bitte beantworte alle 3 Fragen.";
          quizFb.classList.add("warn");
          return;
        }

        let score = 0;
        if (s1 === ans.q1) score++;
        if (s2 === ans.q2) score++;
        if (s3 === ans.q3) score++;

        const msg = (score >= 2)
          ? getFeedback(def, "quiz_ok", "✅ Sehr solide!")
          : getFeedback(def, "quiz_warn", "↪ Kein Stress – das ist am Anfang normal.");

        quizFb.textContent = `Ergebnis: ${score}/3. ${msg}`;
        quizFb.classList.add(score >= 2 ? "ok" : "warn");

      };
    }


    // Drag & Drop
    initDnD();

    const dndBtn = document.getElementById("ds-check-dnd");
    const dndFb = document.getElementById("ds-dnd-feedback");
    if (dndBtn && dndFb) {
      dndBtn.onclick = () => {
        dndFb.className = "ds-feedback";

        const drops = Array.from(document.querySelectorAll(".ds-drop"));
        let filled = 0;
        let ok = 0;

        drops.forEach(drop => {
          const accept = drop.dataset.accept;
          const slot = drop.querySelector(".ds-drop-slot");
          const term = slot?.dataset.term || "";
          if (term) filled++;
          if (term && term === accept) ok++;
        });

        if (filled < drops.length) {
          dndFb.textContent = "Bitte fülle erst alle Felder (alle Begriffe zuordnen).";
          dndFb.classList.add("warn");
          return;
        }

        dndFb.textContent = ok === drops.length
          ? getFeedback(def, "dnd_ok", "✅ Alles richtig zugeordnet!")
          : getFeedback(def, "dnd_warn", `↪ ${ok}/${drops.length} richtig.`);
        dndFb.classList.add(ok === drops.length ? "ok" : "warn");

      };
    }

    // True/False
    const tfBtn = document.getElementById("ds-check-tf");
    const tfFb = document.getElementById("ds-tf-feedback");
    if (tfBtn && tfFb) {
      tfBtn.onclick = () => {
        tfFb.className = "ds-feedback";
        const sel = document.querySelector("input[name='ds-tf1']:checked")?.value;
        if (!sel) {
          tfFb.textContent = "Bitte wähle eine Option.";
          tfFb.classList.add("warn");
          return;
        }
        const correct = def.answers.tf.q1; // "false"
        if (sel === correct) {
          tfFb.textContent = getFeedback(def, "sc_ok", "✅ Sehr gut!");
          tfFb.classList.add("ok");
        } else {
          tfFb.textContent = getFeedback(def, "sc_warn", "↪ Verständlich – aber es gibt einen besseren ersten Schritt.");
          tfFb.classList.add("warn");
        }

      };
    }

    // Szenario
    const scBtn = document.getElementById("ds-check-scenario");
    const scFb = document.getElementById("ds-scenario-feedback");
    const summary = document.getElementById("ds-summary");

    if (scBtn && scFb) {
      scBtn.onclick = () => {
        scFb.className = "ds-feedback";
        const sel = document.querySelector("input[name='ds-sc1']:checked")?.value;
        if (!sel) {
          scFb.textContent = "Bitte wähle eine Antwort.";
          scFb.classList.add("warn");
          return;
        }
        const correct = def.answers.scenario.q1;
        if (sel === correct) {
          scFb.textContent = "✅ Sehr gut! Ein Beweis zeigt Korrektheit für alle Fälle – nicht nur für Tests.";
          scFb.classList.add("ok");
        } else {
          scFb.textContent = "↪ Tests/Struktur helfen – aber sie garantieren nicht „für alle Fälle“. Genau da sind Beweise wichtig.";
          scFb.classList.add("warn");
        }

        if (summary) {
          summary.hidden = false;
          summary.scrollIntoView({ behavior: "smooth", block: "start" });
        }


        if (nextBtn) {
          nextBtn.textContent = "Fertig";
          nextBtn.disabled = false;
          nextBtn.dataset.mode = "finish";

        }
      };
    }
  }

  // =========================================================
  //  Stepper Navigation
  // =========================================================
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (!currentModuleId) return;
      if (currentTask > 1) {
        currentTask--;
        showTask(currentTask);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!currentModuleId) return;

      const tasks = bodyEl.querySelectorAll(".ds-task");
      const total = tasks.length;

      if (currentTask < total) {
        currentTask++;
        showTask(currentTask);
      } else {

        if (progressEl) {
          progressEl.className = "ds-feedback ok";
          progressEl.textContent = "✅ Fertig! Du hast alle Aufgaben durchgeklickt.";
        }
      }
    });
  }

  // =========================================================
  // Öffnen/Schließen + Delegation auf [data-module]
  // =========================================================
  modal.querySelectorAll("[data-ds-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });



  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-module]");
    if (!a) return;

    // Touch-Geräte: Tap auf Modul-Kacheln NICHT direkt das Quiz öffnen
    const isTouch =
      (window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

    // Wenn es eine normale Modul-Kachel ist, auf Touch: NICHT öffnen
    // (Quiz wird dann über einen expliziten Button gestartet)
    if (isTouch && a.classList.contains("module")) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }


    const moduleId = a.getAttribute("data-module");
    if (!moduleId) return;

    const def = MODULE_DEFS[moduleId];
    if (!def) return;

    e.preventDefault();
    renderModule(moduleId);
  });





})();
