/*************************************************
 * 1) Mini-Quiz "Passt Wirtschaftsinformatik zu dir?"
 *************************************************/
let wiQuizCurrentStep = 1;
const wiQuizTotalSteps = 5;

// global verfügbar machen, damit onclick="" in deinem HTML weiter funktioniert:
window.openWiQuizModal = function () {
  const modal = document.getElementById('wi-quiz-modal');
  const resultBox = document.getElementById('wi-quiz-result');
  const form = document.getElementById('wi-quiz-form');
  if (!modal || !resultBox || !form) return;

  // Reset
  wiQuizCurrentStep = 1;
  const steps = form.querySelectorAll('.wi-quiz-step');
  steps.forEach((step, index) => {
    step.hidden = index !== 0;
    const inputs = step.querySelectorAll('input[type="radio"]');
    inputs.forEach(i => i.checked = false);
  });

  resultBox.hidden = true;
  resultBox.innerHTML = '';
  const prevBtn = document.getElementById('wi-quiz-prev');
  const nextBtn = document.getElementById('wi-quiz-next');
  if (prevBtn) prevBtn.disabled = true;
  if (nextBtn) nextBtn.textContent = 'Weiter';

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
};

window.closeWiQuizModal = function () {
  const modal = document.getElementById('wi-quiz-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
};

function showWiQuizStep(step) {
  const form = document.getElementById('wi-quiz-form');
  if (!form) return;
  const steps = form.querySelectorAll('.wi-quiz-step');
  steps.forEach((el) => {
    el.hidden = Number(el.dataset.step) !== step;
  });

  const prevBtn = document.getElementById('wi-quiz-prev');
  if (prevBtn) prevBtn.disabled = (step === 1);

  const nextBtn = document.getElementById('wi-quiz-next');
  if (nextBtn) nextBtn.textContent = (step === wiQuizTotalSteps) ? 'Auswerten' : 'Weiter';
}

window.nextWiQuizStep = function () {
  const form = document.getElementById('wi-quiz-form');
  if (!form) return;

  const currentStep = wiQuizCurrentStep;
  const currentGroup = form.querySelector(`.wi-quiz-step[data-step="${currentStep}"]`);
  if (!currentGroup) return;

  const checked = currentGroup.querySelector('input[type="radio"]:checked');
  if (!checked) {
    alert('Bitte eine Antwort auswählen.');
    return;
  }

  if (currentStep < wiQuizTotalSteps) {
    wiQuizCurrentStep++;
    showWiQuizStep(wiQuizCurrentStep);
  } else {
    evaluateWiQuiz();
  }
};

window.prevWiQuizStep = function () {
  if (wiQuizCurrentStep > 1) {
    wiQuizCurrentStep--;
    showWiQuizStep(wiQuizCurrentStep);
  }
};

function evaluateWiQuiz() {
  const form = document.getElementById('wi-quiz-form');
  const resultBox = document.getElementById('wi-quiz-result');
  if (!form || !resultBox) return;

  let total = 0;

  for (let i = 1; i <= wiQuizTotalSteps; i++) {
    const checked = form.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) {
      alert('Bitte alle Fragen beantworten.');
      return;
    }
    total += Number(checked.value);
  }

  let message = '';
  if (total >= 8) {
    message = `
      <strong>Sehr gute Passung!</strong><br>
      Wirtschaftsinformatik passt fachlich und vom Arbeitsstil her sehr gut zu dir.
      Du hast Interesse an IT und Wirtschaft und bist bereit, dich mit Mathe und Projekten zu beschäftigen.
    `;
    resultBox.style.background = 'rgba(180, 197, 48, 0.2)';
  } else if (total >= 5) {
    message = `
      <strong>Könnte gut passen.</strong><br>
      Vieles am Studium klingt interessant für dich. Mit etwas Offenheit für IT, Mathe und Projekte
      kann Wirtschaftsinformatik gut zu dir passen.
    `;
    resultBox.style.background = 'rgba(244, 194, 137, 0.25)';
  } else {
    message = `
      <strong>Vielleicht ist ein anderer Studiengang passender.</strong><br>
      Einige typische Aspekte der Wirtschaftsinformatik (IT, Mathe, Wirtschaft) sprechen dich eher weniger an.
      Vielleicht lohnt sich auch ein Blick auf andere Studienrichtungen.
    `;
    resultBox.style.background = 'rgba(244, 75, 117, 0.18)';
  }

  resultBox.innerHTML = message;
  resultBox.hidden = false;
}

