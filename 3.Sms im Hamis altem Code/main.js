// =======================
// Grundfunktionen
// =======================
let currentQuizId = null;
let currentQuestionIndex = 0;
let score = 0;
let aktuellesQuiz = null;

const quizModal = document.getElementById('quiz-modal');
const quizInhalt = document.getElementById('quiz-inhalt');

function flipCard(element) {
  element.classList.toggle('flipped');
}

// =======================
// Quiz öffnen
// =======================
function openQuizModal(quizId, event) {
  if (event) event.stopPropagation();

  currentQuizId = quizId;
  aktuellesQuiz = quizDaten[quizId] || quizDaten['nicht_gefunden'];
  currentQuestionIndex = 0;
  score = 0;

  quizInhalt.innerHTML = `
    <h2>${aktuellesQuiz.titel}</h2>
    <div id="bubble-container"></div>
    <div id="quiz-frage-container"></div>
    <div id="quiz-feedback"></div>
    <div id="quiz-navigation"></div>
    <div id="code-container"></div>
  `;

  if (aktuellesQuiz.error) {
    document.getElementById('quiz-frage-container').innerHTML = `<p>${aktuellesQuiz.error}</p>`;
  } else {
    showQuestion();
  }

  quizModal.style.display = "flex";
}


function showQuestion() {
    const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
    const frageContainerEl = document.getElementById('quiz-frage-container');

    frageContainerEl.innerHTML = `
        <p class="quiz-frage">${currentQuestionIndex + 1}. ${frageData.frage}</p>
    `;

    // Optionen anzeigen (ohne Speziallogik)
    frageData.optionen.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'quiz-option';
        optionEl.innerText = option;
        optionEl.onclick = () => selectAnswer(index);
        frageContainerEl.appendChild(optionEl);
    });

    // Feedback & Navigation zurücksetzen
    document.getElementById('quiz-feedback').innerHTML = "";
    document.getElementById('quiz-navigation').innerHTML = "";
}

// =======================
// Antwort auswerten
// =======================
function selectAnswer(selectedIndex) {
  const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
  const richtigeAntwortIndex = frageData.antwort;
  const feedbackEl = document.getElementById('quiz-feedback');
  const optionenElements = quizInhalt.querySelectorAll('.quiz-option');

  optionenElements.forEach(opt => {
    opt.style.pointerEvents = "none";
    opt.style.opacity = "0.7";
  });

  if (selectedIndex === richtigeAntwortIndex) {
    score++;
    optionenElements[selectedIndex].style.backgroundColor = "#a5d6a7";
    optionenElements[selectedIndex].style.borderColor = "#4caf50";
    feedbackEl.innerHTML = "<p style='color:green; font-weight:bold;'>Richtig!</p>";
  } else {
    optionenElements[selectedIndex].style.backgroundColor = "#ef9a9a";
    optionenElements[selectedIndex].style.borderColor = "#f44336";
    optionenElements[richtigeAntwortIndex].style.backgroundColor = "#a5d6a7";
    optionenElements[richtigeAntwortIndex].style.opacity = "1";
    feedbackEl.innerHTML = "<p style='color:red; font-weight:bold;'>Falsch.</p>";
  }

  const navEl = document.getElementById('quiz-navigation');
  if (currentQuestionIndex < aktuellesQuiz.fragen.length - 1) {
    navEl.innerHTML = `<button class="quiz-btn" onclick="nextQuestion()">Nächste Frage</button>`;
  } else {
    navEl.innerHTML = `<button class="quiz-btn" onclick="showResult()">Ergebnis anzeigen</button>`;
  }
}

// =======================
// Nächste Frage
// =======================
function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

// =======================
// Ergebnis anzeigen
// =======================
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

// =======================
// Modal schließen
// =======================
function closeQuizModal() {
  quizModal.style.display = "none";
  quizInhalt.innerHTML = "";
}
