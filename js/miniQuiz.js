/* =========================================================
  Mini-Quiz (Tab „Mini-Quiz“): Skalen-Test (1–5)

  Ziel:
  - Wenn der Tab „Mini-Quiz“ (Modal #wi-quiz-modal) geöffnet wird,
    soll der Skalen-Test gerendert werden.

  HTML-Vertrag (wahlprojekt_2.html):
  - Root: #wi-scale-quiz-root
  - Modal: #wi-quiz-modal (wird von tabs.js geöffnet/geschlossen)
  ========================================================= */

(function () {
  const ROOT_ID = 'wi-scale-quiz-root';

  function byId(id) {
    return document.getElementById(id);
  }

  // 1~5 -> -1..+1 (neutral 3 = 0)
  function weight(val) {
    return (val - 3) / 2;
  }

  // Fragen + Gewichtung (aus deinem Standalone-Test)
  const questions = [
    { text: 'Haben Sie Spaß am Programmieren und an technischen Herausforderungen?', points: { BWL: 0, WI: 2, AI: 5 } },
    { text: 'Interessieren Sie sich für wirtschaftliche Zusammenhänge und Unternehmensstrategien?', points: { BWL: 5, WI: 2, AI: 0 } },
    { text: 'Möchten Sie später mit IT-Systemen arbeiten und Projekte planen?', points: { BWL: 2, WI: 5, AI: 5 } },
    { text: 'Finden Sie die Verbindung von IT und Wirtschaft spannend?', points: { BWL: 2, WI: 5, AI: 2 } },
    { text: 'Arbeiten Sie gerne an Konzepten, Prozessen oder im Management?', points: { BWL: 5, WI: 2, AI: 0 } },
    { text: 'Können Sie sich vorstellen, Daten zu analysieren und daraus Lösungen abzuleiten?', points: { BWL: 0, WI: 2, AI: 5 } },
    { text: 'Interessieren Sie sich für Marketing, Vertrieb oder Finanzthemen?', points: { BWL: 5, WI: 2, AI: 0 } },
    { text: 'Möchten Sie an der Schnittstelle zwischen IT-Systemen und Unternehmen arbeiten?', points: { BWL: 2, WI: 5, AI: 2 } },
    { text: 'Arbeiten Sie gerne mit Algorithmen, Logik oder künstlicher Intelligenz?', points: { BWL: 0, WI: 2, AI: 5 } },
    { text: 'Möchten Sie wirtschaftliche Prozesse optimieren und IT-Systeme dabei einsetzen?', points: { BWL: 3, WI: 5, AI: 0 } },
  ];

  // State: pro Frage gewählter Wert (1..5) oder null
  let selections = new Array(questions.length).fill(null);

  function allAnswered() {
    return selections.every(v => v !== null);
  }

  function render(root) {
    root.innerHTML = '';

    const warning = document.createElement('div');
    warning.id = 'wi-scale-warning';
    warning.className = 'wi-scale-warning';
    warning.hidden = true;
    root.appendChild(warning);

    const quizWrap = document.createElement('div');
    quizWrap.className = 'wi-scale-quiz';
    root.appendChild(quizWrap);

    questions.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'wi-scale-card';

      const title = document.createElement('h4');
      title.className = 'wi-scale-question';
      title.textContent = `${idx + 1}. ${q.text}`;
      card.appendChild(title);

      const scaleWrapper = document.createElement('div');
      scaleWrapper.className = 'wi-scale-wrapper';

      const scale = document.createElement('div');
      scale.className = 'wi-scale';
      scale.setAttribute('role', 'radiogroup');
      scale.setAttribute('aria-label', `Frage ${idx + 1}`);

      // Optionen 1..5
      for (let v = 1; v <= 5; v++) {
        const opt = document.createElement('button');
        opt.type = 'button';
        opt.className = 'wi-scale-option';
        opt.dataset.value = String(v);
        opt.setAttribute('aria-label', `Wert ${v}`);

        opt.addEventListener('click', () => {
          selections[idx] = v;
          scale.querySelectorAll('.wi-scale-option').forEach(o => o.classList.remove('is-selected'));
          opt.classList.add('is-selected');
          warning.hidden = true;
          warning.textContent = '';
        });

        scale.appendChild(opt);
      }

      const labels = document.createElement('div');
      labels.className = 'wi-scale-labels';
      labels.innerHTML = '<span>Stimme gar nicht zu</span><span>Stimme voll zu</span>';

      scaleWrapper.appendChild(scale);
      scaleWrapper.appendChild(labels);
      card.appendChild(scaleWrapper);
      quizWrap.appendChild(card);
    });

    const actions = document.createElement('div');
    actions.className = 'wi-scale-actions';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.id = 'wi-scale-submit';
    submitBtn.className = 'wi-scale-submit';
    submitBtn.textContent = 'Ergebnis anzeigen';

    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'wi-scale-reset';
    resetBtn.textContent = 'Neu starten';
    resetBtn.hidden = true;

    actions.appendChild(submitBtn);
    actions.appendChild(resetBtn);
    root.appendChild(actions);

    const result = document.createElement('div');
    result.id = 'wi-scale-result';
    result.className = 'wi-scale-result';
    result.hidden = true;
    root.appendChild(result);

    function doReset() {
      selections = new Array(questions.length).fill(null);
      warning.hidden = true;
      warning.textContent = '';
      result.hidden = true;
      result.innerHTML = '';
      submitBtn.disabled = false;
      submitBtn.hidden = false;
      resetBtn.hidden = true;

      root.querySelectorAll('.wi-scale-option').forEach(o => o.classList.remove('is-selected'));
      // nach oben scrollen (Modal-Dialog)
      const dialog = root.closest('.wi-quiz-dialog');
      if (dialog) dialog.scrollTop = 0;
    }

    resetBtn.addEventListener('click', doReset);

    submitBtn.addEventListener('click', () => {
      if (!allAnswered()) {
        warning.textContent = '⚠️ Bitte beantworten Sie alle Fragen, bevor Sie das Ergebnis anzeigen.';
        warning.hidden = false;
        warning.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Score berechnen
      const scores = { BWL: 0, WI: 0, AI: 0 };

      selections.forEach((val, i) => {
        const w = weight(val);
        const p = questions[i].points;

        // Design wie in deinem Standalone-Code:
        // negative Werte nicht als "Gegenpunkt" zählen
        scores.BWL += Math.max(0, p.BWL * w);
        scores.WI += Math.max(0, p.WI * w);
        scores.AI += Math.max(0, p.AI * w);
      });

      const maxBWL = questions.reduce((sum, q) => sum + q.points.BWL, 0) || 1;
      const maxWI = questions.reduce((sum, q) => sum + q.points.WI, 0) || 1;
      const maxAI = questions.reduce((sum, q) => sum + q.points.AI, 0) || 1;

      const perc = {
        BWL: (scores.BWL / maxBWL) * 100,
        WI: (scores.WI / maxWI) * 100,
        AI: (scores.AI / maxAI) * 100,
      };

      const maxPercent = Math.max(perc.BWL, perc.WI, perc.AI);
      let best;
      if (maxPercent === perc.WI) best = 'WI';
      else if (maxPercent === perc.BWL) best = 'BWL';
      else best = 'AI';

      // Ergebnis-UI
      result.innerHTML = '';

      const title = document.createElement('div');
      title.className = 'wi-scale-result-title';
      title.textContent = `Dein empfohlenes Fach 🎓: ${best}`;
      result.appendChild(title);

      const barsWrap = document.createElement('div');
      barsWrap.className = 'wi-scale-bars';
      result.appendChild(barsWrap);

      const maxByTrack = { BWL: maxBWL, WI: maxWI, AI: maxAI };
      ['BWL', 'WI', 'AI'].forEach((fach) => {
        const percent = Math.round((Math.abs(scores[fach]) / maxByTrack[fach]) * 100);

        const row = document.createElement('div');
        row.className = 'wi-scale-bar-row';

        const label = document.createElement('div');
        label.className = 'wi-scale-bar-label';
        label.textContent = fach;

        const bar = document.createElement('div');
        bar.className = 'wi-scale-bar';

        const fill = document.createElement('div');
        fill.className = 'wi-scale-bar-fill';
        if (fach === best) fill.classList.add('is-best');
        fill.style.width = percent + '%';
        fill.textContent = percent + '%';

        bar.appendChild(fill);
        row.appendChild(label);
        row.appendChild(bar);
        barsWrap.appendChild(row);
      });

      const allZero = (scores.BWL === 0 && scores.WI === 0 && scores.AI === 0);

      let messageText = '';
      let linkURL = '';
      if (best === 'BWL') {
        messageText = 'Hier erfahren Sie mehr über BWL – schauen Sie sich die Details an!';
        linkURL = 'https://www.hs-rm.de/wiesbaden-business-school';
      } else if (best === 'WI') {
        messageText = allZero
          ? 'Sie wissen noch nicht, welcher Studiengang zu Ihnen passt? Wie wäre es mit WI? Hier erfahren Sie mehr!'
          : 'Hier erfahren Sie mehr über Wirtschaftsinformatik – lernen Sie es besser kennen!';
      } else if (best === 'AI') {
        messageText = 'Hier erfahren Sie mehr über AI – entdecken Sie spannende Inhalte!';
        linkURL = 'https://www.hs-rm.de/design-informatik-medien/studiengaenge/bachelor/angewandte-informatik';
      }

      const msg = document.createElement('div');
      msg.className = 'wi-scale-message';
      msg.textContent = messageText;

      if (linkURL) {
        const a = document.createElement('a');
        a.className = 'wi-scale-link';
        a.href = linkURL;
        a.target = '_self';
        a.rel = 'noopener';
        a.textContent = 'Zur Webseite';
        msg.appendChild(document.createTextNode(' '));
        msg.appendChild(a);
      }

      result.appendChild(msg);

      result.hidden = false;
      submitBtn.hidden = true;
      resetBtn.hidden = false;
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Initialer Reset-Status
    doReset();
  }

  // Exposed: wird von tabs.js aufgerufen, wenn das Mini-Quiz-Modal geöffnet wird
  window.renderMiniQuiz = function () {
    const root = byId(ROOT_ID);
    if (!root) return;
    render(root);
  };

  // Fallback: nur sicherstellen, dass root existiert – Render passiert beim Tab-Klick
  document.addEventListener('DOMContentLoaded', () => {
    const root = byId(ROOT_ID);
    if (!root) return;
  });
})();

