// js/ds-modal-content.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("DS-Modal: DOMContentLoaded");
  
  const baseUrl = "/typo3conf/ext/erwartungscheck_sitepackage/Resources/Public/Content/DiskreteStrukturen/modal.txt";
  const urlWithCacheBuster = baseUrl + "?v=" + Date.now(); // gegen Cache
  
  fetch(urlWithCacheBuster, { cache: "no-store" })
  .then(response => {
    console.log("DS-Modal: fetch response", response.status);
    if (!response.ok) {
      throw new Error("Konnte modal.txt nicht laden (" + response.status + ")");
    }
    return response.text();
  })
  .then(text => {
    console.log("DS-Modal: Textdatei geladen, Länge:", text.length);
    const blocks = parseBlocks(text);
    console.log("DS-Modal: Blöcke gefunden:", Object.keys(blocks));
    
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      const value = blocks[key];
      
      if (typeof value === "string") {
        el.textContent = value.trim();
      } else {
        console.warn("Kein Block für key", key, "gefunden");
      }
    });
  })
  .catch(err => {
    console.error("Fehler beim Laden der DS-Modal-Inhalte:", err);
  });
});


/**
 * Wandelt die Textdatei mit Blöcken wie
 * [TITLE]
 * ...
 * in ein Objekt { TITLE: "…", INTRO: "…" } um.
 */
function parseBlocks(text) {
  const sections = {};
  let currentKey = null;
  const lines = text.split(/\r?\n/);

  lines.forEach(line => {
    const match = line.match(/^\[(.+?)\]$/); // Zeilen wie [TITLE]

    if (match) {
      currentKey = match[1].trim();
      if (!sections[currentKey]) {
        sections[currentKey] = "";
      }
    } else if (currentKey) {
      sections[currentKey] += line + "\n";
    }
  });

  return sections;
}
