// ===================================
// main.js - QUIZ-ENGINE
// ===================================

// ===================================
// ZUSTANDS-VARIABLEN
// ===================================
let currentQuizId = null;
let currentQuestionIndex = 0;
let score = 0;
let aktuellesQuiz = null;

// Holt sich die Haupt-Elemente des Modals
const quizModal = document.getElementById('quiz-modal');
const quizInhalt = document.getElementById('quiz-inhalt');


// ===================================
// GRUNDFUNKTIONEN / UTILITIES
// ===================================

function flipCard(element) {
  element.classList.toggle('flipped');
}

// 1. STARTET DAS QUIZ (wird vom Button aufgerufen)
function openQuizModal(quizId, event) {
  if (event) event.stopPropagation();

  // Setzt alles auf Anfang
  currentQuizId = quizId;
  aktuellesQuiz = quizDaten[quizId] || quizDaten['nicht_gefunden'];
  currentQuestionIndex = 0;
  score = 0;

  // Leert das Modal und baut die Quiz-Struktur auf
  quizInhalt.innerHTML = `
    <h2>${aktuellesQuiz.titel}</h2>
    <div id="quiz-hinweis" class="quiz-hinweise"></div>
    <div id="quiz-frage-container"></div>
    <div id="quiz-feedback"></div>
    <div id="quiz-navigation"></div>
  `;

  // Zeigt die erste Frage
  if (aktuellesQuiz.error) {
    document.getElementById('quiz-frage-container').innerHTML = `<p>${aktuellesQuiz.error}</p>`;
  } else {
    showQuestion();
  }

  quizModal.style.display = "flex";
}

// 6. SCHLIESST DAS MODAL
function closeQuizModal() {
  quizModal.style.display = "none";
  quizInhalt.innerHTML = "";
}

// 4. LÄDT DIE NÄCHTE FRAGE (wird vom "Weiter"-Button aufgerufen)
function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

// 5. ZEIGT DAS ENDERGEBNIS
function showResult() {
  const anzahlFragen = aktuellesQuiz.fragen.length;
  const prozent = Math.round((score / anzahlFragen) * 100);

  document.getElementById('quiz-frage-container').innerHTML = `
    <h2>Quiz beendet!</h2>
    <p style="font-size: 1.2rem;">Du hast <strong>${score} von ${anzahlFragen}</strong> Fragen richtig beantwortet (${prozent}%).</p>
  `;
  document.getElementById('quiz-feedback').innerHTML = "";
  document.getElementById('quiz-navigation').innerHTML = `<button class="quiz-btn" onclick="closeQuizModal()">Schließen</button>`;
}


// ===================================
// 2. HAUPT-DISPATCHER: FRAGE ANZEIGEN
// ===================================
function showQuestion() {
  const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
  const frageTyp = frageData.typ || 'single_choice';
  const frageSchwierigkeit = frageData.schwierigkeit || 'einfach';
  const frageHinweis = frageData.hinweis || '';

  // Hinweis-Container (Schwierigkeit/Extra-Hinweis)
  const hinweisEl = document.getElementById('quiz-hinweis');
  hinweisEl.innerHTML = '';

  // Baut die Frage und die Optionen
  let html = `<p class="quiz-frage">${currentQuestionIndex + 1}. ${frageData.frage}</p>`;
  
  // --- HINWEISE ANZEIGEN ---
  let hinweisHtml = `<span class="schwierigkeit schwer-${frageSchwierigkeit}">${frageSchwierigkeit.toUpperCase()}</span>`;
  if (frageTyp === 'multiple_choice') {
     hinweisHtml += '<span class="hinweis-mc" style="color:#ee7f00; font-weight:bold;">(Mehrere Antworten möglich)</span>';
  }
  if (frageHinweis) {
     hinweisHtml += `<span class="hinweis-extra">⚠️ ${frageHinweis}</span>`;
  }
  hinweisEl.innerHTML = hinweisHtml;
  // --- ENDE HINWEISE ---


  const frageContainer = document.getElementById('quiz-frage-container');
  frageContainer.innerHTML = html; // Setzt die Frage
  
  // Dispatcher zur Darstellung der Optionen/Elemente
      if (frageTyp === 'single_choice' || frageTyp === 'multiple_choice') {
              renderMultipleChoice(frageData, frageContainer);
          } else if (frageTyp === 'zuordnung') {
              renderZuordnung(frageData, frageContainer);
          } else if (frageTyp === 'lueckentext') {
              renderLueckentext(frageData, frageContainer);
          } else if (frageTyp === 'sortierung') {
              renderSortierung(frageData, frageContainer);
          } else if (frageTyp === 'lueckentext_auswahl') {
              renderLueckentextAuswahl(frageData, frageContainer);
          } else {
              frageContainer.innerHTML += `<p>Unbekannter Quiztyp: ${frageTyp}</p>`;
          }


  // Navigation: Prüfen Button
  const navEl = document.getElementById('quiz-navigation');
  navEl.innerHTML = '';

  // SC hat checkAnswer im Klick, MC/Zuordnung braucht expliziten Check-Button
      if (frageTyp !== 'single_choice') {
        navEl.innerHTML = `<button class="quiz-btn" onclick="checkAnswer(-1, '${frageTyp}')">Antwort prüfen</button>`;
      }

  document.getElementById('quiz-feedback').innerHTML = "";
}


// ===================================
// 3. RENDERER FÜR QUIZ-TYPEN
// ===================================

/**
 * Rendert Single Choice (SC) und Multiple Choice (MC)
 */
function renderMultipleChoice(frageData, container) {
    const frageTyp = frageData.typ || 'single_choice';
    let html = '';
    frageData.optionen.forEach((option, index) => {
        if (frageTyp === 'single_choice') {
            // SC: Klick löst sofort die Prüfung aus
            html += `<div class="quiz-option" data-index="${index}" onclick="checkAnswer(${index}, 'single_choice')">${option}</div>`;
        } else if (frageTyp === 'multiple_choice') {
            // MC: Checkboxen
            html += `
                <label class="quiz-option multiple-choice-label">
                    <input type="checkbox" data-index="${index}" class="mc-checkbox" />
                    <span class="mc-text">${option}</span>
                </label>`;
        }
    });
    container.innerHTML += html;
}

/**
 * Rendert Puzzle Zuordnung (Drag & Drop)
 */
function renderZuordnung(frageData, container) {
    const begriffe = frageData.items.begriffe;
    const definitionen = frageData.items.definitionen;

    // Begriffe mischen
    const shuffledBegriffe = begriffe.map((text, id) => ({ text, id: 'term-' + id }))
        .sort(() => Math.random() - 0.5);

    let html = `
      <div class="zuordnung-wrapper">
        <div class="zuordnung-quellen-container">
          <h3>Begriffe (Ziehen)</h3>
          <div id="zuordnung-quellen" class="zuordnung-quellen">`;

    shuffledBegriffe.forEach(t => {
      html += `<div class="zuordnung-item" draggable="true" id="${t.id}">${t.text}</div>`;
    });

    html += `</div></div><div class="zuordnung-ziele-container">
          <h3>Definitionen (Ablegen)</h3>
          <div id="zuordnung-ziele" class="zuordnung-ziele">`;

    definitionen.forEach((d, i) => {
      html += `<div class="zuordnung-ziel" data-korrekt-text="${d}" data-index="${i}">${d}</div>`;
    });

    html += `</div></div></div>`;
    container.innerHTML += html;

    // Events für Drag & Drop hinzufügen
    setupDragDropEvents();
}

/**
 * Hilfsfunktion zum Einrichten der Drag & Drop Listener
 */
function setupDragDropEvents() {
    const terms = document.querySelectorAll('.zuordnung-item');
    const targets = document.querySelectorAll('.zuordnung-ziel');
    if (terms.length === 0) return;
    let dragSrcEl = null;

    terms.forEach(term => {
        term.addEventListener('dragstart', e => {
            dragSrcEl = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', term.id);
            term.classList.add('dragging');
        });
        term.addEventListener('dragend', e => {
            e.target.classList.remove('dragging');
        });
    });

    targets.forEach(target => {
        target.addEventListener('dragover', e => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            target.classList.add('drag-over');
        });
        target.addEventListener('dragleave', e => {
            target.classList.remove('drag-over');
        });
        target.addEventListener('drop', e => {
            e.preventDefault();
            target.classList.remove('drag-over');

            const id = e.dataTransfer.getData('text/plain');
            const draggedEl = document.getElementById(id);

            if (draggedEl && draggedEl.parentNode !== target) {
                if (target.children.length > 0) {
                    const existing = target.children[0];
                    document.getElementById('zuordnung-quellen').appendChild(existing);
                    existing.classList.remove('assigned');
                }

                target.appendChild(draggedEl);
                draggedEl.classList.add('assigned');
                target.style.backgroundColor = '#e6e6e6';
            }
        });
    });
}

// --------------------------------------------------------
// LÜCKENTEXT (DRAG & DROP)
// --------------------------------------------------------

/**
 * Rendert die Lückentext-Elemente (Quellen: Drag, Text: Drop-Zonen)
 */
function renderLueckentext(frageData, container) {
    const optionen = frageData.optionen;
    let text = frageData.text || "";

    // Platzhalter für die Lücken finden und Drop-Zonen einfügen
    let lueckenZaehler = 1;
    let lueckentextHtml = text.replace(/\[LUECKE\d+\]/g, () => {
        const id = 'LUECKE' + lueckenZaehler++;
        return `<div class="luecke-ziel" data-luecke-id="${id}"><span>[${id}]</span></div>`;
    });

    let html = `
      <div class="lueckentext-wrapper">
        <div class="lueckentext-text">${lueckentextHtml}</div>

        <div class="lueckentext-quellen-container">
          <h3>Optionen (Ziehen)</h3>
          <div id="lueckentext-quellen" class="lueckentext-quellen zuordnung-quellen">`;

    // Optionen mischen und als draggable Items rendern
    const shuffledOptionen = optionen.map((text, id) => ({ text, id: 'opt-' + id }))
        .sort(() => Math.random() - 0.5);

    shuffledOptionen.forEach(t => {
      html += `<div class="lueckentext-item zuordnung-item" draggable="true" id="${t.id}">${t.text}</div>`;
    });

    html += `</div></div></div>`;
    container.innerHTML += html;

    // Events für Drag & Drop hinzufügen
    setupLueckentextDragDropEvents();
}

/**
 * Hilfsfunktion zum Einrichten der Drag & Drop Listener NUR für Lückentext
 */
function setupLueckentextDragDropEvents() {
    const terms = document.querySelectorAll('.lueckentext-item');
    const targets = document.querySelectorAll('.luecke-ziel');
    if (terms.length === 0) return;

    terms.forEach(term => {
        term.addEventListener('dragstart', e => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', term.id);
            term.classList.add('dragging');
        });
        term.addEventListener('dragend', e => {
            e.target.classList.remove('dragging');
        });
    });

    targets.forEach(target => {
        target.addEventListener('dragover', e => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            target.classList.add('drag-over');
        });
        target.addEventListener('dragleave', e => {
            target.classList.remove('drag-over');
        });
        target.addEventListener('drop', e => {
            e.preventDefault();
            target.classList.remove('drag-over');

            const id = e.dataTransfer.getData('text/plain');
            const draggedEl = document.getElementById(id);

            if (draggedEl && draggedEl.parentNode !== target) {
                const existing = target.querySelector('.lueckentext-item');
                if (existing) {
                    document.getElementById('lueckentext-quellen').appendChild(existing);
                    existing.classList.remove('assigned');
                }

                target.appendChild(draggedEl);
                draggedEl.classList.add('assigned');
                const placeholderSpan = target.querySelector('span');
                if (placeholderSpan) {
                    placeholderSpan.style.display = 'none';
                }
                target.style.backgroundColor = '#e6e6e6';
            }
        });
    });
}


// --------------------------------------------------------
// LÜCKENTEXT MIT AUSWAHL (SELECT-BOX)
// --------------------------------------------------------

/**
 * Rendert die Lückentext-Elemente (Text mit Dropdown-Listen)
 */
function renderLueckentextAuswahl(frageData, container) {
    const optionen = frageData.optionen;
    let text = frageData.text || "";

    // HTML für die Dropdown-Optionen vorbereiten
    let optionsHtml = '<option value="">-- Wählen Sie --</option>';

    // Optionen mischen
    const shuffledOptions = optionen.map(value => ({ value, sort: Math.random() }))
                                    .sort((a, b) => a.sort - b.sort)
                                    .map(a => a.value);

    shuffledOptions.forEach(opt => {
        optionsHtml += `<option value="${opt}">${opt}</option>`;
    });


    // Platzhalter für die Lücken finden und SELECT-Boxen einfügen
    let lueckenZaehler = 1;
    let lueckentextHtml = text.replace(/\[LUECKE\d+\]/g, () => {
        const id = 'luecke-select-' + lueckenZaehler++;
        return `<select class="lueckentext-select" data-luecke-id="${id}">${optionsHtml}</select>`;
    });

    let html = `
      <div class="lueckentext-auswahl-wrapper">
        <p class="lueckentext-text">${lueckentextHtml}</p>
      </div>`;

    container.innerHTML += html;
}

// --------------------------------------------------------
// SORTIERUNG (VERTIKALES DRAG & DROP)
// --------------------------------------------------------

/**
 * Rendert die Sortierungs-Elemente (als vertikale Drag & Drop Liste)
 */
function renderSortierung(frageData, container) {
    const items = frageData.items;

    // Items mischen, bevor sie im Container erscheinen
    const shuffledItems = items.map((text, id) => ({ text, id: 'sort-item-' + id }))
        .sort(() => Math.random() - 0.5);

    let html = `
      <div class="sortierung-wrapper">
        <h3>Ziehen Sie die Schritte in die korrekte Reihenfolge (1 = oben).</h3>
        <ul id="sortierung-liste" class="sortierung-liste">`;

    shuffledItems.forEach(t => {
      html += `<li class="sortierung-item" draggable="true" data-text="${t.text}" id="${t.id}">${t.text}</li>`;
    });

    html += `</ul></div>`;
    container.innerHTML += html;

    // Events für Drag & Drop hinzufügen
    setupSortierungDragDropEvents();
}

/**
 * Hilfsfunktion zum Einrichten der Drag & Drop Listener NUR für Sortierung
 */
function setupSortierungDragDropEvents() {
    const list = document.getElementById('sortierung-liste');
    if (!list) return;

    let dragSrcEl = null;

    list.querySelectorAll('.sortierung-item').forEach(item => {
        item.addEventListener('dragstart', e => {
            dragSrcEl = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', item.id);
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', e => {
            e.target.classList.remove('dragging');
            list.querySelectorAll('.sortierung-item').forEach(i => i.classList.remove('drag-over-above', 'drag-over-below'));
        });

        item.addEventListener('dragover', e => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            e.target.classList.remove('drag-over-above', 'drag-over-below');
            const boundingBox = e.target.getBoundingClientRect();
            const yMidpoint = boundingBox.top + boundingBox.height / 2;

            if (e.clientY < yMidpoint) {
                e.target.classList.add('drag-over-above');
            } else {
                e.target.classList.add('drag-over-below');
            }
        });

        item.addEventListener('dragleave', e => {
            e.target.classList.remove('drag-over-above', 'drag-over-below');
        });

        item.addEventListener('drop', e => {
            e.preventDefault();
            e.target.classList.remove('drag-over-above', 'drag-over-below');

            if (dragSrcEl && dragSrcEl !== e.target) {
                const boundingBox = e.target.getBoundingClientRect();
                const yMidpoint = boundingBox.top + boundingBox.height / 2;

                if (e.clientY < yMidpoint) {
                    list.insertBefore(dragSrcEl, e.target);
                } else {
                    list.insertBefore(dragSrcEl, e.target.nextSibling);
                }
            }
        });
    });
}


// ===================================
// 4. EVALUATOREN UND PRÜFUNG (CHECKANSWER IST DER HAUPT-DISPATCHER)
// ===================================

/**
 * Bewertet die Antwort und zeigt Feedback an. --> verbesserungsbedürftig, gerade ist die Berechnung nicht so gut
 * Muss für alle Typen 'correct' und 'feedbackText' setzen.
 */
function checkAnswer(selectedIndex, typ) {
  const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
  const richtigeAntwort = frageData.antwort;
  const feedbackEl = document.getElementById('quiz-feedback');
  const quizInhalt = document.getElementById('quiz-inhalt');
  const optionenElements = quizInhalt.querySelectorAll('.quiz-option');

  let correct = false;
  let feedbackText = "";

  // Deaktiviere alle Optionen (gilt nur für SC/MC)
  optionenElements.forEach(opt => {
      opt.style.pointerEvents = "none";
      opt.style.opacity = "0.7";
  });

  // --- 1. LOGIK FÜR SINGLE CHOICE (SC) ---
  if (typ === 'single_choice') {

    correct = selectedIndex === richtigeAntwort;
    if (correct) { score++; }

    // Einfärben und Feedback-Text setzen
    if (correct) {
      optionenElements[selectedIndex].style.backgroundColor = "#a5d6a7";
      optionenElements[selectedIndex].style.borderColor = "#4caf50";
      feedbackText = "<p style='color:green; font-weight:bold;'>Richtig!</p>";
    } else {
      optionenElements[selectedIndex].style.backgroundColor = "#ef9a9a";
      optionenElements[selectedIndex].style.borderColor = "#f44336";

      // Korrekte Antwort grün hervorheben
      const richtigeSC = quizInhalt.querySelector(`.quiz-option[data-index="${richtigeAntwort}"]`);
      if(richtigeSC) {
           richtigeSC.style.backgroundColor = "#a5d6a7";
           richtigeSC.style.opacity = "1";
      }
      feedbackText = "<p style='color:red; font-weight:bold;'>Falsch.</p>";
    }
  }

  // --- 2. LOGIK FÜR MULTIPLE CHOICE (MC) ---
  else if (typ === 'multiple_choice') {
    const checkboxes = quizInhalt.querySelectorAll('input[type="checkbox"]');
    const selectedIndices = [];

    checkboxes.forEach((cb, index) => {
        if (cb.checked) {
            selectedIndices.push(index);
        }
    });

    // Prüfe, ob die ausgewählten Indizes exakt mit den richtigen Antworten übereinstimmen
    const isCorrect = richtigeAntwort.length === selectedIndices.length &&
                      richtigeAntwort.every(val => selectedIndices.includes(val));

    correct = isCorrect;
    if (correct) { score++; }

    // Feedback-Text setzen
    if (correct) {
        feedbackText = "<p style='color:green; font-weight:bold;'>Richtig! Alle korrekten Optionen wurden ausgewählt.</p>";
    } else {
        feedbackText = "<p style='color:red; font-weight:bold;'>Falsch. Die Kombination der ausgewählten Antworten ist nicht vollständig korrekt.</p>";
    }

    // Zeige die korrekten Antworten immer an (grün hervorheben)
    checkboxes.forEach((cb, index) => {
        const label = cb.closest('.quiz-option');
        const isCorrectOption = richtigeAntwort.includes(index);
        const isSelected = cb.checked;

        cb.disabled = true;
        label.style.pointerEvents = "none";

        if (isCorrectOption) {
            label.style.backgroundColor = '#a5d6a7';
            label.style.borderColor = '#4caf50';
            label.style.opacity = '1';
        }
        // Markiere falsch gewählte Antworten als rot (falls die Korrekte grün ist, wird Rot überlagert, was gut ist)
        if (isSelected && !isCorrectOption) {
             label.style.backgroundColor = '#ef9a9a';
             label.style.borderColor = '#f44336';
             label.style.opacity = '1';
        }
        if (isCorrectOption && !isSelected) {
            label.querySelector('.mc-text').innerHTML += " (Korrekt)"; // Nur Hinweis bei nicht ausgewählter korrekter Option
        }
    });
  }

 // --- 3. LOGIK FÜR ZUORDNUNG / SORTIERUNG / LÜCKENTEXT-AUSWAHL / LÜCKENTEXT ---
      else if (typ === 'zuordnung' || typ === 'sortierung' || typ === 'lueckentext_auswahl' || typ === 'lueckentext') {
        let checkResult = { correct: false, html: "" };

        // --- 3a. ZUORDNUNG (Drag & Drop) ---
        if (typ === 'zuordnung') {
            const targets = document.querySelectorAll('.zuordnung-ziel');
            let correctCount = 0;
            const totalPairs = richtigeAntwort.length;

            targets.forEach(target => {
                const assignedEl = target.querySelector('.zuordnung-item');
                const assignedText = assignedEl ? assignedEl.textContent.trim() : null;

                // KORRIGIERTE LOGIK: Nur den reinen Zieltext holen
                let pureTargetText = target.textContent.trim();
                if (assignedEl) {
                    pureTargetText = pureTargetText.replace(assignedText, '').trim();
                }

                // Prüfen anhand des [Begriff, Definition]-Paares in richtigeAntwort
                const isCorrectPair = richtigeAntwort.some(pair =>
                    pair[0].trim() === assignedText && pair[1].trim() === pureTargetText
                );

                target.style.pointerEvents = 'none';
                if (assignedEl) assignedEl.draggable = false;

                if (isCorrectPair) {
                    correctCount++;
                    target.style.backgroundColor = '#a5d6a7';
                    if (assignedEl) assignedEl.style.backgroundColor = '#a5d6a7';
                } else {
                    target.style.backgroundColor = '#ef9a9a';
                    if (assignedEl) assignedEl.style.backgroundColor = '#ef9a9a';
                }
            });

            const isCorrect = correctCount === totalPairs;

            if (isCorrect) {
                checkResult.html = "<p style='color:green; font-weight:bold;'>Richtig! Alle Paare sind korrekt zugeordnet.</p>";
            } else {
                checkResult.html = `<p style='color:red; font-weight:bold;'>Falsch. ${correctCount} von ${totalPairs} Zuordnungen sind korrekt.</p>`;
            }
            checkResult.correct = isCorrect;
        }

        // --- 3b. SORTIERUNG (Vertikales Drag & Drop) ---
        else if (typ === 'sortierung') {
            const listEl = document.getElementById('sortierung-liste');
            const itemsToCheck = listEl ? listEl.querySelectorAll('li.sortierung-item') : [];

            let correctCount = 0;
            const totalItems = richtigeAntwort.length;
            let fullyCorrect = true;

            itemsToCheck.forEach((li, index) => {
                const itemText = li.getAttribute('data-text').trim();
                const korrektesItem = richtigeAntwort[index];

                li.draggable = false;
                li.style.pointerEvents = 'none';

                if (itemText === korrektesItem) {
                    correctCount++;
                    li.style.backgroundColor = '#a5d6a7';
                } else {
                    fullyCorrect = false;
                    li.style.backgroundColor = '#ef9a9a';
                    const korrekterIndex = richtigeAntwort.indexOf(itemText);
                    li.innerHTML += ` <span class="sort-fehler">(Sollte Position ${korrekterIndex + 1} sein)</span>`;
                }

                li.style.borderLeft = `10px solid ${fullyCorrect ? '#4caf50' : '#f44336'}`;
                li.innerHTML = `<span class="sort-position">${index + 1}. </span> ${li.innerHTML}`;
            });

            if (fullyCorrect) {
                checkResult.html = "<p style='color:green; font-weight:bold;'>Richtig! Die Reihenfolge ist korrekt.</p>";
            } else {
                checkResult.html = `<p style='color:red; font-weight:bold;'>Falsch. ${correctCount} von ${totalItems} Elementen sind an der korrekten Position.</p>`;
            }
            checkResult.correct = fullyCorrect;
        }

        // --- 3c. LÜCKENTEXT-AUSWAHL (Dropdown) ---
        else if (typ === 'lueckentext_auswahl') {
            const selectElements = document.getElementById('quiz-inhalt').querySelectorAll('.lueckentext-select');
            let correctCount = 0;
            const totalCount = richtigeAntwort.length;

            selectElements.forEach((selectEl, index) => {
                const selectedValue = selectEl.value;
                const correctAnswer = richtigeAntwort[index];

                selectEl.disabled = true;

                if (selectedValue === correctAnswer) {
                    correctCount++;
                    selectEl.style.backgroundColor = '#a5d6a7';
                    selectEl.style.borderColor = '#4caf50';
                } else {
                    selectEl.style.backgroundColor = '#ef9a9a';
                    selectEl.style.borderColor = '#f44336';

                    const correctText = document.createElement('span');
                    correctText.className = 'select-fehler-hinweis';
                    correctText.style.color = 'darkred';
                    correctText.style.fontSize = '0.9rem';
                    correctText.innerHTML = ` (Korrekt: ${correctAnswer})`;

                    if (selectEl.nextSibling && selectEl.nextSibling.className === 'select-fehler-hinweis') {
                         selectEl.nextSibling.remove();
                    }
                    selectEl.parentNode.insertBefore(correctText, selectEl.nextSibling);
                }
            });

            const isCorrect = correctCount === totalCount;
            const percent = Math.round((correctCount / totalCount) * 100);

            if (isCorrect) {
                checkResult.html = "<p style='color:green; font-weight:bold;'>Richtig! Alle Lücken korrekt gefüllt.</p>";
            } else {
                checkResult.html = `<p style='color:red; font-weight:bold;'>Falsch. Du hast ${correctCount} von ${totalCount} Lücken korrekt gefüllt (${percent}%).</p>`;
            }
            checkResult.correct = isCorrect;
        }

        // --- 3d. LÜCKENTEXT (Drag & Drop) ---
        else if (typ === 'lueckentext') {
            const targets = document.querySelectorAll('.luecke-ziel');
            const korrekteAntworten = richtigeAntwort || [];

            let correctCount = 0;
            let totalTargets = targets.length;
            let fullyCorrect = true;

            targets.forEach((target, index) => {
                const assignedEl = target.querySelector('.lueckentext-item');
                const assignedText = assignedEl ? assignedEl.textContent.trim() : null;
                const korrektesWort = korrekteAntworten[index];

                const isCorrect = assignedText === korrektesWort;

                target.style.pointerEvents = 'none';
                if (assignedEl) assignedEl.draggable = false;

                const placeholderSpan = target.querySelector('span');

                if (isCorrect) {
                    correctCount++;
                    target.style.backgroundColor = '#a5d6a7';
                    if (assignedEl) assignedEl.style.backgroundColor = '#a5d6a7';
                } else {
                    fullyCorrect = false;
                    target.style.backgroundColor = '#ef9a9a';
                    if (assignedEl) assignedEl.style.backgroundColor = '#ef9a9a';

                    if (placeholderSpan) {
                        placeholderSpan.style.display = 'block';
                        placeholderSpan.textContent = `Falsch (Korrekt: ${korrektesWort})`;
                        placeholderSpan.style.color = 'darkred';
                    }
                }
            });

            const percent = Math.round((correctCount / totalTargets) * 100);

            if (fullyCorrect) {
                checkResult.html = `<p style='color:green; font-weight:bold;'>Richtig! Alle ${totalTargets} Lücken korrekt gefüllt.</p>`;
            } else {
                checkResult.html = `<p style='color:red; font-weight:bold;'>Falsch. Du hast ${correctCount} von ${totalTargets} Lücken korrekt gefüllt (${percent}%).</p>`;
            }
            checkResult.correct = fullyCorrect;
        }


       // HIER FINDET DIE KORREKTE AKTUALISIERUNG STATT (NACH ALLEN ELSE IFS):
       // Aktualisiere die Haupt-Variablen
       correct = checkResult.correct;
       feedbackText = checkResult.html;

       if (correct) { score++; }
     } // <--- ENDE DES GROSSEN ELSE IF BLOCKS


  // 4. LERNMODUS HINZUFÜGEN (UNIVERSAL FÜR ALLE TYPEN)
  // ----------------------------------------------------
  const erklaerung = frageData.erklaerung || '';

  // Füge die Erklärung zum Feedback-Text hinzu, falls vorhanden
  if (erklaerung) {
      feedbackText += `<div class="erklaerung-box" style="margin-top: 15px; padding: 10px; border: 1px solid #ee7f00; border-radius: 5px; background: #fffaf0;">
          <span style="font-weight:bold; color: #ee7f00;">Lern-Hinweis:</span> ${erklaerung}
      </div>`;
  }

  // ----------------------------------------------------
  // 5. ABSCHLUSS
  // ----------------------------------------------------

  feedbackEl.innerHTML = feedbackText; // Setzt das finale Feedback (inkl. Erklärung)
  showNavigation(correct);
}

// ===================================
// 5. NAVIGATION
// ===================================

/**
 * HILFSFUNKTION: Zeigt den Weiter/Ergebnis-Button an
 */
function showNavigation(answeredCorrectly) {
  const navEl = document.getElementById('quiz-navigation');
  const isLast = currentQuestionIndex === aktuellesQuiz.fragen.length - 1;
  const buttonStyle = answeredCorrectly ? "" : "background:#555;";

  if (isLast) {
    // Letzte Frage
    navEl.innerHTML = `<button class="quiz-btn" style="${buttonStyle}" onclick="showResult()">Ergebnis anzeigen</button>`;
  } else {
    // Es gibt noch mehr Fragen
    navEl.innerHTML = `<button class="quiz-btn" style="${buttonStyle}" onclick="nextQuestion()">Nächste Frage</button>`;
  }
}


// ===================================
// EXPORTIERTE / GLOBALE Helfer (Wichtig für HTML-Events)
// ===================================
window.flipCard = flipCard;
window.openQuizModal = openQuizModal;
window.closeQuizModal = closeQuizModal;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.showResult = showResult;
window.setupDragDropEvents = setupDragDropEvents;
window.setupLueckentextDragDropEvents = setupLueckentextDragDropEvents; // Auch diese Funktion muss global sein