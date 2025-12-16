document.addEventListener('DOMContentLoaded', function () {
  
  
  

  /**********************************************
  * 4) FAQ-Karten (Kartenfächer)
  **********************************************/
  (function () {
    const cards = document.querySelectorAll(".fh-card");
    if (!cards.length) return;
    
    function setActive(card) {
      cards.forEach(c => c.classList.remove("is-active"));
      if (card) {
        card.classList.add("is-active");
      }
    }
    
    cards.forEach(card => {
      // Klick für Touch & Desktop
      card.addEventListener("click", () => {
        setActive(card);
      });
      
      // Tastatur-Navigation (Tab + Enter/Space)
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(card);
        }
      });
      
      // Hover: Karte nach vorne holen
      card.addEventListener("mouseenter", () => {
        setActive(card);
      });
    });
  })();
  
  
});
