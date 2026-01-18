// ===================================
// ZUSTANDS-VARIABLEN
// ===================================
let currentQuizId = null;
let currentQuestionIndex = 0;
let score = 0;
let aktuellesQuiz = null;

// Wird pro Frage neu gesetzt (weil wir die Antwortoptionen mischen)
let currentCorrectIndex = null;

// Holt sich die Haupt-Elemente des Modals
const quizModal = document.getElementById('quiz-modal');
const quizInhalt = document.getElementById('quiz-inhalt');

// ===================================
// HELFER
// ===================================
function shuffleArray(arr) {
    // Fisher–Yates Shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ===================================
// GRUNDFUNKTIONEN
// ===================================

// Karte umdrehen
function flipCard(element) {
    element.classList.toggle('flipped');
}

// 1. STARTET DAS QUIZ (wird vom Button aufgerufen)
function openQuizModal(quizId, event) {
    if (event) event.stopPropagation();

    aktuellesQuiz = quizDaten[quizId];

    // Falls das Quiz nicht in der quiz-data.js existiert
    if (!aktuellesQuiz) {
        alert("Quiz für dieses Modul ist noch in Arbeit!");
        return;
    }

    // Wenn es ein "error"-Modul ist (z.B. Praxis/Thesis etc.)
    if (aktuellesQuiz.error) {
        quizModal.style.display = "flex";
        quizInhalt.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <h2 style="color:#ee7f00; margin-top:0;">${aktuellesQuiz.titel}</h2>
                <p style="font-size:1.1rem;">${aktuellesQuiz.error}</p>
                <button class="quiz-btn" onclick="closeQuizModal()">Zurück zur Übersicht</button>
            </div>
        `;
        return;
    }

    // Setzt alles auf Anfang
    currentQuestionIndex = 0;
    score = 0;

    // Startet die Anzeige
    showQuestion();

    quizModal.style.display = "flex"; // Macht das Modal sichtbar
}

// 2. ZEIGT DIE AKTUELLE FRAGE AN (inkl. Level-Badge)
function showQuestion() {
    const frageData = aktuellesQuiz.fragen[currentQuestionIndex];

    // Schwierigkeitsgrad bestimmen (Standard: leicht/einfach)
    const rawLevel = (frageData.level || "einfach").toString().toLowerCase();
    // Alias: "leicht" wird wie "einfach" behandelt
    const levelKey = rawLevel === "leicht" ? "einfach" : rawLevel;

    const badgeClassMap = {
        einfach: "badge-einfach",
        mittel: "badge-mittel",
        schwer: "badge-schwer"
    };

    // Was im Badge stehen soll
    const levelLabelMap = {
        einfach: "LEICHT",
        mittel: "MITTEL",
        schwer: "SCHWER"
    };

    const badgeClass = badgeClassMap[levelKey] || "badge-einfach";
    const levelLabel = levelLabelMap[levelKey] || levelKey.toUpperCase();

    // Antwortoptionen mischen (damit die richtige Antwort nicht immer oben steht)
    const correctOriginalIndex = (typeof frageData.antwort === "number") ? frageData.antwort : 0;
    const optionPairs = (frageData.optionen || []).map((text, idx) => ({ text, idx }));
    shuffleArray(optionPairs);
    currentCorrectIndex = optionPairs.findIndex(p => p.idx === correctOriginalIndex);
    const shuffledOptions = optionPairs.map(p => p.text);

    // Das gesamte Modal-Innere wird hier neu aufgebaut
    quizInhalt.innerHTML = `
        <div class="quiz-header">
            <span class="level-badge ${badgeClass}">${levelLabel}</span>
        </div>
        <h3 style="margin-top:0; color:#ee7f00;">${aktuellesQuiz.titel}</h3>
        <p class="quiz-frage"><strong>Frage ${currentQuestionIndex + 1}:</strong> ${frageData.frage}</p>
        <div id="options-list"></div>
        <div id="feedback-area" style="margin-top:15px; font-weight:bold;"></div>
    `;

    // Optionen generieren
    const container = document.getElementById('options-list');
    shuffledOptions.forEach((text, i) => {
        const opt = document.createElement('div');
        opt.className = 'quiz-option';
        opt.innerText = text;
        opt.onclick = () => selectAnswer(i);
        container.appendChild(opt);
    });
}

// 3. VERARBEITET DIE ANTWORT
function selectAnswer(selectedIndex) {
    const optionen = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('feedback-area');

    // Alle Optionen "deaktivieren", damit man nicht nochmal klickt
    optionen.forEach(opt => {
        opt.style.pointerEvents = "none";
        opt.style.opacity = "0.7";
    });

    if (selectedIndex === currentCorrectIndex) {
        // Richtig!
        score++;
        optionen[selectedIndex].style.backgroundColor = "#e8f5e9"; // Hellgrün
        optionen[selectedIndex].style.borderColor = "#4caf50";
        optionen[selectedIndex].style.opacity = "1";
        feedback.innerHTML = "<span style='color:#4caf50;'>Richtig! ✓</span>";
    } else {
        // Falsch!
        optionen[selectedIndex].style.backgroundColor = "#ffebee"; // Hellrot
        optionen[selectedIndex].style.borderColor = "#f44336";
        optionen[selectedIndex].style.opacity = "1";

        // Die korrekte Antwort zeigen
        if (currentCorrectIndex != null && optionen[currentCorrectIndex]) {
            optionen[currentCorrectIndex].style.backgroundColor = "#e8f5e9";
            optionen[currentCorrectIndex].style.borderColor = "#4caf50";
            optionen[currentCorrectIndex].style.opacity = "1";
        }

        feedback.innerHTML = "<span style='color:#f44336;'>Leider falsch.</span>";
    }

    // Button für "Nächste Frage" oder "Ergebnis"
    const btn = document.createElement('button');
    btn.className = 'quiz-btn';

    if (currentQuestionIndex < aktuellesQuiz.fragen.length - 1) {
        btn.innerText = "Nächste Frage";
        btn.onclick = () => { currentQuestionIndex++; showQuestion(); };
    } else {
        btn.innerText = "Ergebnis anzeigen";
        btn.onclick = showResult;
    }
    feedback.appendChild(btn);
}

// 4. ZEIGT DAS ENDERGEBNIS
function showResult() {
    const anzahlFragen = aktuellesQuiz.fragen.length;
    const prozent = Math.round((score / anzahlFragen) * 100);

    quizInhalt.innerHTML = `
        <div style="text-align:center; padding:20px;">
            <h2 style="color:#ee7f00;">Quiz beendet!</h2>
            <p style="font-size:1.4rem;">Du hast <strong>${score} von ${anzahlFragen}</strong> Fragen richtig beantwortet.</p>
            <p>Das entspricht einer Erfolgsquote von <strong>${prozent}%</strong>.</p>
            <button class="quiz-btn" onclick="closeQuizModal()">Zurück zur Übersicht</button>
        </div>
    `;
}

// 5. SCHLIESST DAS MODAL
function closeQuizModal() {
    quizModal.style.display = "none";
}

// ===================================
// EXPORT FÜR HTML
// ===================================
window.flipCard = flipCard;
window.openQuizModal = openQuizModal;
window.closeQuizModal = closeQuizModal;
