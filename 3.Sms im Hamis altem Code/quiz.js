// =======================
// Quiz-Daten
// =======================
const quizDaten = {
  'ads': {
    titel: "Check: Algorithmen & Datenstrukturen",
    fragen: [
      { 
        frage: "Welcher Code gibt null zurück, wenn die Liste so aussieht?",
        linkedNode: [{ wert: 1 },{ wert: 3 },{ wert: 5 },{ wert: 7 }],
        optionen: [
          "node1.next.next.next.next", // richtige Antwort
          "node2.next.next",
          "node1.next"
      ],
        antwort: 0
      },
      { 
        frage: "Was enthält ein Node in einer verketteten Liste?",
        optionen: [
          "Nur einen Wert", 
          "Einen Wert und einen Zeiger auf das nächste Element", 
          "Einen Wert und einen Zeiger auf das vorherige Element"
      ],
        antwort: 1
      },
      { 
        frage: "Welcher Sortieralgorithmus wird hier dargestellt?",
        bubbleSort: true,
        optionen: ["Bubble Sort", "Merge Sort", "Quick Sort"],
        antwort: 0
      },
      { 
        frage: "Was ist eine typische Eigenschaft des BubbleSort?",
        bubbleSort: true,
        optionen: [
          "Vergleicht Elemente, um das kleinste zu finden", 
          "Vergleicht Elemente basierend auf dem Pivot", 
          "Nur benachbarte Elemente werden verglichen"
        ],
        antwort: 2
      },     
      { 
        frage: "Welche Datenstruktur arbeitet nach dem Prinzip <br>'First In, First Out'?",
        optionen: ["Stack", "Queue", "Array"],
        antwort: 1
      }
    ]
  },
  'swt': {
    titel: "Check: Softwaretechnik",
    fragen: [
      {
        frage: "Welche Eigenschaft ist geschützt?",
        optionen: [
            "note = 4.0", 
            "vorname = Anna",
            "alter = 20",
        ],
        codeKey:"diagramm",
        antwort: 0
      },
      { 
        frage: "Welches Merkmal beschreibt NICHT ein Objektdiagramm?",
        optionen: [
          "Zeigt konkrete Objekte einer Klasse und deren Attributwerte", 
          "Zeigt die Sichtbarkeit von Attributen (+, -, #)", 
          "Stellt Instanzen einer Klasse in einem bestimmten Zustand dar"
        ],
        antwort: 1,
        codeKey:"diagramm"
      },
      { 
        frage: "Wofür eignen sich Zustandsautomaten in der Analysephase?",
        optionen: [
           "Zum Festlegen der endgültigen Benutzeroberfläche",
           "Zur Analyse potenzieller Zustände eines Systems", 
           "Zur Dokumentation von Datenbanken"
        ],
        antwort: 1,
      },
      { 
        frage: "Welche Aufgabe gehört zur Wartung und Pflege von Software?",
        optionen: [
           "Analyse der Kundenanforderungen",
           "Erstellung des Grobenwurfs",
           "Beheben von Fehlern und Umsetzung von Änderungswünschen" 
        ],
        antwort: 2,
      },
      { 
        frage: "Wofür bildet das Token-Konzept die Grundlage?",
        optionen: [
          "Für die Benutzeroberfläche von Software", 
          "Für die Semantik von Aktivitätsdiagrammen", 
          "Für die Berechnung von Serverkosten"
        ],
        antwort: 1
      }
    ]
  },
  'bis': {
  titel: "Check: Betriebl. Informationssysteme",
  fragen: [
    { 
      frage: "Was bedeutet die Abkürzung ETL im Datenmanagement?",
      typ: "dragdrop",
      dropText: "Ziehe hier die passenden Begriffe hinein",
      begriffe: [
        "Extract", "Transform","Encode", "Transfer", "Link", "Translate", "Load"],
      loesung: ["Extract","Transform","Load"]
    },
    { 
      frage: "Was kann man NICHT in SAP HANA mit Queries erstellen?",
      optionen: [
        "Grafikdesign für Benutzeroberflächen", 
        "Tabellenabfragen zur Datenanalyse", 
        "Aggregierte Kennzahlen"
    ],
      antwort: 0
    },
    { 
      frage: "In der richtigen Reihenfolge auflisten",
      typ: "dragdrop",
      dropText:"Ziehe hier die Phasen in die richtige Reihenfolge",
      begriffe: [
        "Sprint Planning", 
        "Daily Scrum", 
        "Sprint-Review",
        "Sprint-Retrospektive"],
      loesung: ["Sprint Planning", "Daily Scrum", "Sprint-Review","Sprint-Retrospektive"]
    },
    { 
      frage: "Was kann man NICHT in SAP HANA mit Queries erstellen?",
      optionen: [
        "Grafikdesign für Benutzeroberflächen", 
        "Tabellenabfragen zur Datenanalyse", 
        "Aggregierte Kennzahlen"
    ],
      antwort: 0
    },
    { 
      frage: "Welche Aufgabe gehört NICHT zur Datenbereinigung",
      optionen: [
        "Duplikate in Datensätzen entfernen", 
        "Fehlerhafte Werte korrigieren", 
        "Analysen durchführen"
    ],
      antwort: 2
    }
  ]
},
'inno': {
  titel: "Check: Innovationsmanagement",
  fragen: [
    { 
      frage: "Was ist eine typische Eigenschaft von SCRUM?",
      optionen: [
        "Fokus auf Nutzerbedürfnisse durch Prototypen", 
        "Kurze Iterationen und Feedbackschleifen", 
        "Schnelle Validierung von Geschäftsideen durch Experimente"
    ],
      antwort: 1
    },
    { 
      frage: "Welche Aussage trifft nicht auf ein Backlog zu?",
      optionen: [
        "Enthält alle Ideen und Aufgaben", 
        "Bleibt nach Erstellung unverändert", 
        "Ist nach Priorität geordnet"
    ],
      antwort: 1
    },
    { 
      frage: "Was ist der Unterschied zwischen inkrementeller und radikaler Innovation?",
      optionen: [
        "Inkrementell bezieht sich auf Dokumentation, radikal auf Meetings", 
        "Inkrementell bedeutet Marketinganpassung, radikal Prozessänderungen", 
        "Inkrementell verbessert Bestehende Produkte, radikal bringt neue Ideen auf den Markt"
    ],
      antwort: 2
    },
    { 
      frage: "Welche Kennzahl wird oft zur Bewertung von Innovationsprojekten genutzt?",
      optionen: [
        "Return on Innovation (ROI)", 
        "Bilanzsumme", 
        "Mitarbeiterzahl"
    ],
      antwort: 0
    },
    { 
      frage: "Welche Aussage passt zum Kaizen-Prinzip?",
      optionen: [
        "Verbesserung erfolgen kontinuierlich und schrittweise", 
        "Innovation erfolgen einmalig und radikal", 
        "Neue Produkte werden zuerst am Markt getestet, bevor sie entwickelt werden"
    ],
      antwort: 0
    }
  ]
},
'statistik': {
  titel: "Check: Statistik",
  fragen: [
    { 
      frage: "Welche Bibliothek wird hier importiert?",
      optionen: ["Nippe", "Numpy", "Nappy"],
      antwort: "Numpy",
      codeKey: "import"
    },
    { 
      frage: "Welche Syntax wählt, die kleiner oder gleich 3 sind?",
      optionen: ["daten[daten <= 3]", "daten <= 3", "[daten <=3]"],
      antwort: "daten[daten <= 3]",
      codeKey: "vergleich"
    },
    { 
      frage: "Welche Bibliothek wird hier importiert?",
      optionen: ["pyrod", "panda", "pavida"],
      antwort: "panda",
      codeKey: "filter"
    },
    {
      frage: "Wie filtert man im DataFrame nur die jüngste Person?",
      optionen: [
        "df.sort_values(\"Alter\").tail(1)",
        "df[df[\"Alter\"] < df[\"Alter\"].max()]",
        "df[\"Alter\"].min()"
      ],
      antwort: "df[\"Alter\"].min()",
      codeKey: "alter"
    },
    { 
      frage: "Gegeben ist die Datenreihe: [3, 7, 2, 8, 10] <br>Was ist der Median?",
      optionen: ["15", "7", "2"],
      antwort: 1,
    }
  ]
}
};


function showQuestion() {

  resetFeedbackNavigation();
  
  const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
  const frageContainerEl = document.getElementById('quiz-frage-container');

  // Frage immer anzeigen
  frageContainerEl.innerHTML = `<p class="quiz-frage">${currentQuestionIndex + 1}. ${frageData.frage}</p>`;

  // Spezielle Typen
  if (frageData.typ === "dragdrop") {
    showQuestionDragDrop(frageData); // Drop-Zone + Drag-Elemente
  } else if (frageData.bubbleSort) {
    showQuestionBubbleSort(frageData); // BubbleSort Animation + Kacheln
  } else if (aktuellesQuiz === quizDaten['statistik'] && frageData.codeKey) {
    renderStatistikQuestion(currentQuestionIndex);
    // Keine Kacheln unten!
  } else if (aktuellesQuiz ===quizDaten['swt']&& frageData.codeKey==='diagramm'){
    showDiagram(frageData);
  } else {
    showQuestionBasic(frageData); // Normale MC-Fragen mit Kacheln
  }
}

function showQuestionBasic() {
  const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
  const frageContainerEl = document.getElementById('quiz-frage-container');

  // Bubble-Container entfernen
  const bubbleContainer = document.getElementById('bubble-container');
  //bubbleContainer.appendChild(linkedNodeEl);
  if (frageData.bubbleContainer) {
  let bubbleContainer = document.createElement('div');
  bubbleContainer.id = 'bubble-container';
  frageContainerEl.appendChild(bubbleContainer);
  }else{
    bubbleContainer.style.display = 'none';
  }

  // Frage anzeigen
  frageContainerEl.innerHTML = `<p class="quiz-frage">${currentQuestionIndex + 1}. ${frageData.frage}</p>`;

  // Node-Kacheln (nur wenn linkedNode existiert)
  renderLinkedNodes(frageContainerEl, frageData.linkedNode);

  // Optionen
  if (frageData.optionen) {
    frageData.optionen.forEach((option, index) => {
      const optionEl = document.createElement('div');
      optionEl.className = 'quiz-option';
      optionEl.innerText = option;
      optionEl.onclick = () => selectAnswer(index);
      frageContainerEl.appendChild(optionEl);
    });
  }

  resetFeedbackNavigation();
}


function renderLinkedNodes(container, linkedNode) {
  if (!linkedNode) return;

  const el = document.createElement("div");
  el.className = "linked-node";

  linkedNode.forEach((node, i) => {
    el.innerHTML += `<div class="node">${node.wert}</div>` +
      (i < linkedNode.length - 1 ? `<div class="arrow">→</div>` : "");
  });

  container.appendChild(el);
}


function showQuestionBubbleSort() {
  const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
  const container = document.getElementById('quiz-frage-container');
  container.innerHTML = `<p class="quiz-frage">${currentQuestionIndex + 1}. ${frageData.frage}</p>`;

  // Optionen, falls vorhanden
  if (frageData.optionen) {
    frageData.optionen.forEach((option, index) => {
      const optEl = document.createElement('div');
      optEl.className = 'quiz-option';
      optEl.innerText = option;
      optEl.onclick = () => selectAnswer(index);
      container.appendChild(optEl);
    });
  }

  startBubbleSortAnimation();
  resetFeedbackNavigation();
}

function startBubbleSortAnimation() {
  const container = document.getElementById('bubble-container');
  if (!container) return;

  const array = [15, 2, 8, 11, 6, 13, 4, 1];

  // Container Layout fixieren
  container.innerHTML = "";
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "flex-end"; 
  container.style.gap = "6px";
  container.style.height = "200px";        // maximale Höhe des Containers
  container.style.overflow = "hidden";    // Überlauf unsichtbar

  const maxVal = Math.max(...array);
  const maxHeight = 150; // max Höhe der Balken

  // Balken erstellen
  array.forEach(val => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = (val / maxVal * maxHeight) + 'px';
    bar.style.width = '15px';
    bar.style.background = '#2196F3';
    bar.style.borderRadius = '4px';
    container.appendChild(bar);
  });

  let i = 0, j = 0;
  const bars = container.querySelectorAll('.bar');

  // BubbleSort Animation
  const interval = setInterval(() => {
    if (i < bars.length) {
      if (j < bars.length - i - 1) {
        const h1 = parseFloat(bars[j].style.height);
        const h2 = parseFloat(bars[j+1].style.height);
        if (h1 > h2) {
          bars[j].style.height = h2 + 'px';
          bars[j+1].style.height = h1 + 'px';
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

//funktionierend
function showQuestionDragDrop() {

  const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
  const container = document.getElementById('quiz-frage-container');
  container.innerHTML = `<p class="quiz-frage">${currentQuestionIndex + 1}. ${frageData.frage}</p>`;

  // Drop-Zone
  let dropZone = document.getElementById("drop-zone");
  if (!dropZone) {
    dropZone = document.createElement("div");
    dropZone.id = "drop-zone";
    dropZone.innerHTML = `<b>${aktuellesQuiz.fragen[currentQuestionIndex].dropText}</b>`;
    container.appendChild(dropZone);
  }
  //dropZone.innerHTML = "<b>Ziehe hier die passenden Begriffe hinein:</b>";
  dropZone.style.border = "2px dashed #666";
  dropZone.style.minHeight = "80px";
  dropZone.style.padding = "10px";
  dropZone.style.marginBottom = "20px";
  dropZone.style.display = "flex";
  dropZone.style.flexDirection = "column";
  dropZone.style.gap = "5px";

  // Begriffe Container
  const shuffled = [...frageData.begriffe].sort(() => Math.random() - 0.5);
  const begriffeContainerId = "begriffe-container-" + currentQuestionIndex;
  let begriffeContainer = document.getElementById(begriffeContainerId);
  if (!begriffeContainer) {
    begriffeContainer = document.createElement("div");
    begriffeContainer.id = begriffeContainerId;
    container.appendChild(begriffeContainer);
  }
  begriffeContainer.innerHTML = "";
  begriffeContainer.style.display = "flex";
  begriffeContainer.style.flexWrap = "wrap";
  begriffeContainer.style.gap = "10px";

  let dragged = null;
  let offsetX = 0;
  let offsetY = 0;

  shuffled.forEach((text, i) => {
    const el = document.createElement("div");
    el.id = "drag-" + currentQuestionIndex + "-" + i;
    el.className = "drag-item";
    el.innerText = text;
    el.style.padding = "8px 12px";
    el.style.background = "#e0e0ff";
    el.style.borderRadius = "8px";
    el.style.cursor = "grab";
    el.style.userSelect = "none";
    el.style.position = "relative";

    el.addEventListener("mousedown", e => {
      dragged = el;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      dragged.style.position = "absolute";
      dragged.style.zIndex = 1000;
      document.body.appendChild(dragged); 
      moveAt(e.pageX, e.pageY);
      e.preventDefault();
    });

    begriffeContainer.appendChild(el);
  });

  function moveAt(pageX, pageY) {
    if (dragged) {
      dragged.style.left = pageX - offsetX + 'px';
      dragged.style.top = pageY - offsetY + 'px';
    }
  }

  document.addEventListener("mousemove", e => moveAt(e.pageX, e.pageY));

  document.addEventListener("mouseup", e => {
    if (!dragged) return;

    const dropRect = dropZone.getBoundingClientRect();
    if (e.clientX > dropRect.left && e.clientX < dropRect.right &&
        e.clientY > dropRect.top && e.clientY < dropRect.bottom) {

      dragged.style.position = "static";
      dragged.classList.add("drop-item"); 
      dropZone.appendChild(dragged);
    } else {

      dragged.style.position = "static";
      begriffeContainer.appendChild(dragged);
    }

    dragged.style.zIndex = 1;
    dragged = null;
  });
  createCheckButton(container, currentQuestionIndex, frageData); 

  resetFeedbackNavigation();
}


//===== Drag & Drop Prüfung =====
function checkDragDrop(frageData) {
  const dropZone = document.getElementById("drop-zone");
  const selected = [...dropZone.querySelectorAll(".drop-item")].map(el => el.innerText);
  const correct = frageData.loesung;
  const feedback = document.getElementById("quiz-feedback");

  if (selected.length !== correct.length) {
    feedback.innerHTML = `❌ Du musst genau ${correct.length} Begriffe auswählen!`;
    feedback.style.color = "red";
    return;
  }

  const isCorrect = JSON.stringify(selected.sort()) === JSON.stringify(correct.sort());

  if (isCorrect) {
    feedback.innerHTML = "<p style='color:green; font-weight:bold;'>Richtig!</p>";
    score++; 
  } else {
    feedback.innerHTML = "<p style='color:red; font-weight:bold;'>Falsch!</p>";
  }

  const navEl = document.getElementById('quiz-navigation');
  if (currentQuestionIndex < aktuellesQuiz.fragen.length - 1) {
    navEl.innerHTML = `<button class="quiz-btn" onclick="nextQuestion()">Nächste Frage</button>`;
  } else {
    navEl.innerHTML = `<button class="quiz-btn" onclick="showResult()">Ergebnis anzeigen</button>`;
  }
}

//kompakter PythonCode
const pythonCodes = {
      import: `
          <pre><code>import <span class="blank">numpy</span> as np
          \ndaten = np.array([1, 2, 3, 4, 5])
          \nmittelwert = np.mean(daten)
          </code></pre>
          `,
      vergleich: `
          <pre><code>import numpy as np
          \ndaten = np.array([1, 2, 3, 4, 5])
          \nmittelwert = np.mean(daten)
          \nkleiner_als_3 = <span class="blank">Daten[Daten <= 3]</span>
          </code></pre>
          `,
      filter: `
          <pre><code>import <span class="blank">pandas</span> as pd
          \ndf = pd.DataFrame({
          \n"name":["Anna","Tom","Lisa"],
          \n"alter":[17, 21, 30]})
          </code></pre>
      `,
      alter:`
          <pre><code>import pandas as pd 
          \nprint("Die jüngste Person ist: "
          \n<span class="blank">df[\"Alter\"].min()</span>)</code></pre>
      `,
    };


function renderStatistikQuestion(currentIndex) {
  const frageData = aktuellesQuiz.fragen[currentIndex];
  const frageContainerEl = document.getElementById('quiz-frage-container');

  // Container für den Code
  let container = document.getElementById("statistik-container");
  if (!container) {
    container = document.createElement('div');
    container.id = "statistik-container";
    container.style.marginTop = "10px";
    frageContainerEl.appendChild(container);
  } else {
    container.innerHTML = '';
  }

  // Python-Code auswählen
  let html = frageData.codeKey ? pythonCodes[frageData.codeKey] : "";

  // Dropdown einfügen
  html = html.replace(/<span class="blank">(.*?)<\/span>/g, () => {
    const optionen = frageData.optionen || frageData.options || [];
    let optionsHTML = '<option value="" disabled selected></option>' +
      optionen
        .map(opt => {
          // Escapen der inneren Anführungszeichen für HTML
          const valueEscaped = opt.replace(/"/g, '&quot;');
          return `<option value="${valueEscaped}">${opt}</option>`;
        })
        .join("");
    return `<select class="inline-dropdown">${optionsHTML}</select>`;
  });

  // Code-Block anzeigen
  const codeDiv = document.createElement('div');
  codeDiv.className = 'code-content';
  codeDiv.innerHTML = html;
  container.appendChild(codeDiv);

  // Überprüfen-Button über createCheckButton
  createCheckButton(container, currentIndex, frageData);
}


function showDiagram(frageData) {
  const container = document.getElementById('quiz-frage-container');
  container.innerHTML = ""; // Container einmal leeren

  // 1️⃣ Frage anzeigen
  const frageEl = document.createElement('p');
  frageEl.className = 'quiz-frage';
  frageEl.innerHTML = `${currentQuestionIndex + 1}. ${frageData.frage}`;
  container.appendChild(frageEl);

  // 2️⃣ Objektdiagramm (falls codeKey=diagramm)
  if (frageData.codeKey === 'diagramm') {
  // Container für horizontale Reihe
  const diagramRow = document.createElement('div');
  diagramRow.className = 'diagramm-container';

  // Klasse
  const classDiagram = document.createElement('div');
  classDiagram.className = 'diagramm';
  classDiagram.innerHTML = `
    <div class="diagramm-header">StudentIn</div>
    <div class="diagramm-body">
      + name : String<br>
      - alter : Integer<br>
      # note : Float
    </div>
  `;

  // Objekt
  const objectDiagram = document.createElement('div');
  objectDiagram.className = 'diagramm';
  objectDiagram.innerHTML = `
    <div class="diagramm-header"><u>:StudentIn</u></div>
    <div class="diagramm-body">
      name = "Anna"<br>
      alter = 20<br>
      note = 4.0
    </div>
  `;

  // Pfeil zwischen den beiden
  const arrow = document.createElement('div');
  arrow.className = 'arrow';
  arrow.innerText = '→';

  // Alles in die Reihe einfügen
  diagramRow.appendChild(classDiagram);
  diagramRow.appendChild(arrow);
  diagramRow.appendChild(objectDiagram);

  container.appendChild(diagramRow);
}

  // 3️⃣ Optionen als Kacheln
  if (frageData.optionen) {
    frageData.optionen.forEach((opt, i) => {
      const optEl = document.createElement('div');
      optEl.className = 'quiz-option';
      optEl.innerText = opt;
      optEl.onclick = () => selectAnswer(i);
      container.appendChild(optEl);
    });
  }

  resetFeedbackNavigation();
}

function createCheckButton(container, currentQuestionIndex, frageData) {
  // Alten Check-Button entfernen
  let oldBtn = container.querySelector(".check-btn");
  if (oldBtn) oldBtn.remove();

  const btn = document.createElement("button");
  btn.className = "check-btn";
  btn.innerText = "Überprüfen";

  btn.style.cssText = `
    margin-top: 16px;
    padding: 8px 12px;
    background: #ffd699;
    border: 2px solid #cc9966;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;
  `;

  btn.onmouseover = () => btn.style.background = "#ffcc80";
  btn.onmouseout  = () => btn.style.background = "#ffd699";

  container.appendChild(btn);

  btn.addEventListener("click", () => {
    const feedbackEl = document.getElementById("quiz-feedback");
    const navEl = document.getElementById("quiz-navigation");

    // Feedback & Navigation immer resetten
    feedbackEl.innerHTML = "";
    navEl.innerHTML = "";

    // =========================
    // 1️⃣ DRAG & DROP
    // =========================
    if (frageData.typ === "dragdrop") {
      checkDragDrop(frageData);
      return;
    }

    // =========================
    // 2️⃣ STATISTIK (Dropdown)
    // =========================
    const selectEl = container.querySelector("select.inline-dropdown");
    if (selectEl) {
      const selectedValue = selectEl.value;

      if (!selectedValue) {
        feedbackEl.innerHTML = "Bitte wähle eine Option aus.";
        feedbackEl.style.color = "orange";
        return;
      }

      let richtig = false;

      if (
        selectedValue === frageData.antwort ||
        selectedValue === frageData.optionen?.[frageData.antwort]
      ) {
        richtig = true;
      }

      if (richtig) {
        feedbackEl.innerHTML = "Richtig!";
        feedbackEl.style.color = "green";
        score++;

        const nextBtn = document.createElement("button");
        nextBtn.className = "quiz-btn";
        nextBtn.innerText =
          currentQuestionIndex < aktuellesQuiz.fragen.length - 1
            ? "Nächste Frage"
            : "Ergebnis anzeigen";

        nextBtn.onclick = () => nextQuestion();
        navEl.appendChild(nextBtn);
      } else {
        feedbackEl.innerHTML = "Falsch! Versuche es noch einmal.";
        feedbackEl.style.color = "red";
      }

      return;
    }

    // =========================
    // 3️⃣ NORMALE MC-FRAGEN
    // =========================
    if (typeof selectedAnswer === "undefined" || selectedAnswer === null) {
      feedbackEl.innerHTML = "Bitte wähle eine Option aus.";
      feedbackEl.style.color = "orange";
      return;
    }

    if (selectedAnswer === frageData.antwort) {
      feedbackEl.innerHTML = "Richtig!";
      feedbackEl.style.color = "green";
      score++;

      const nextBtn = document.createElement("button");
      nextBtn.className = "quiz-btn";
      nextBtn.innerText =
        currentQuestionIndex < aktuellesQuiz.fragen.length - 1
          ? "Nächste Frage"
          : "Ergebnis anzeigen";

      nextBtn.onclick = () => nextQuestion();
      navEl.appendChild(nextBtn);
    } else {
      feedbackEl.innerHTML = "Falsch! Versuche es noch einmal.";
      feedbackEl.style.color = "red";
    }
  });
}

function resetFeedbackNavigation() {
  document.getElementById('quiz-feedback').innerHTML = "";
  document.getElementById('quiz-navigation').innerHTML = "";
}

