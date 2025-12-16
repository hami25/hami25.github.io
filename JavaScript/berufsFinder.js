document.addEventListener('DOMContentLoaded', function () {
  
  /**********************************************
  * 2) Beruf-Finder „Swipe your Future“
  **********************************************/
  (function () {
    const careers = [
      {
        emoji: "📊",
        title: "Data Scientist",
        vibe: "Analytisch & neugierig",
        desc: "Du liebst Zahlen, Muster und willst mit Daten Entscheidungen verbessern.",
        tags: ["#Daten", "#Mathe", "#Analyse"]
      },
      {
        emoji: "💼",
        title: "Business Analyst",
        vibe: "Zwischen IT & Management",
        desc: "Du vermittelst zwischen Fachbereichen und IT und machst Prozesse schlauer.",
        tags: ["#Prozesse", "#Kommunikation", "#Business"]
      },
      {
        emoji: "🔐",
        title: "IT-Security Specialist",
        vibe: "Beschützer:in der Systeme",
        desc: "Du schützt Unternehmen vor Cyberangriffen und denkst wie ein Hacker – nur auf der guten Seite.",
        tags: ["#Security", "#IT", "#Sicherheit"]
      },
      {
        emoji: "🧩",
        title: "Prozessmanager",
        vibe: "Ordnung im Chaos",
        desc: "Du strukturierst Abläufe, findest Engpässe und sorgst für reibungslose Workflows.",
        tags: ["#Prozesse", "#Organisation", "#Optimierung"]
      },
      {
        emoji: "🛠",
        title: "ERP Consultant",
        vibe: "Digitaler Prozessbauer",
        desc: "Du bildest Geschäftsprozesse in ERP-Systemen ab und passt sie an Unternehmen an.",
        tags: ["#ERP", "#IT", "#Business"]
      }
    ];
    
    const cardEl = document.getElementById("cs-card");
    const counterEl = document.getElementById("cs-counter");
    const resultEl = document.getElementById("cs-result");
    const actionsEl = document.querySelector(".cs-actions");
    const container = document.querySelector(".career-swipe");
    
    if (!container || !cardEl || !counterEl || !resultEl || !actionsEl) return;
    
    let currentIndex = 0;
    const liked = [];
    
    function renderCard() {
      if (currentIndex >= careers.length) {
        showResult();
        return;
      }
      
      const c = careers[currentIndex];
      counterEl.textContent = (currentIndex + 1) + " / " + careers.length;
      
      cardEl.classList.remove("swipe-out");
      cardEl.style.display = "block";
      actionsEl.style.display = "flex";
      
      cardEl.innerHTML = `
        <div class="cs-pill">${c.vibe}</div>
        <div class="cs-emoji">${c.emoji}</div>
        <h3 class="cs-title">${c.title}</h3>
        <p class="cs-desc">${c.desc}</p>
        <div class="cs-tags">
          ${c.tags.map(tag => `<span class="cs-tag">${tag}</span>`).join("")}
        </div>
      `;
    }
    
    function showResult() {
      cardEl.style.display = "none";
      actionsEl.style.display = "none";
      resultEl.hidden = false;
      
      if (!liked.length) {
        resultEl.innerHTML = `
          <h3>Dein Ergebnis</h3>
          <p>Du hast keinen Beruf mit „Gefällt mir“ markiert. 🤔</p>
          <p>Vielleicht magst du den Test noch einmal machen oder wir ergänzen weitere Berufe.</p>
        `;
        return;
      }
      
      const listItems = liked
      .map(c => `<li>${c.emoji} <strong>${c.title}</strong></li>`)
      .join("");
      
      resultEl.innerHTML = `
        <h3>Dein Future-Match 💡</h3>
        <p>Diese Berufe hast du als interessant markiert:</p>
        <ul>${listItems}</ul>
        <p class="cs-note">
          Hinweis: Das ist nur ein erster Eindruck. Sprich gern mit uns,
          wenn du mehr über diese Berufe wissen möchtest.
        </p>
      `;
    }
    
    function handleAction(isLike) {
      const current = careers[currentIndex];
      if (isLike && current) liked.push(current);
      
      cardEl.classList.add("swipe-out");
      setTimeout(function () {
        currentIndex++;
        renderCard();
      }, 200);
    }
    
    container.addEventListener("click", function (event) {
      const action = event.target.getAttribute("data-action");
      if (!action) return;
      if (action === "yes") {
        handleAction(true);
      } else if (action === "no") {
        handleAction(false);
      }
    });
    
    renderCard();
  })();
});



