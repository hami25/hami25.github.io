// -----------------------------------------------------------------------------
// CONTENT-ONLY Datei: Modulbeschreibung für das Info-Panel (Hover/Fokus)
// Renderer: moduleInfoPanel.js
//
// Struktur (muss so bleiben):
// window.MODULE_CONTENT["<module-id>"] = {
//   sub: "Titel, CP",
//   quickHtml: `...`,  // kurze Box
//   longHtml: `...`    // ausführlicher Text (Ausklappen)
// }
//
// Hinweise (Redaktion):
// - quickHtml/longHtml werden via innerHTML gerendert -> HTML ist erlaubt,
//   aber bitte nur einfache/sichere Tags (p, ul/li, strong, br).
// - <module-id> muss zur HTML passen (id/href="#<module-id>").
// -----------------------------------------------------------------------------

window.MODULE_CONTENT = window.MODULE_CONTENT || {};

window.MODULE_CONTENT["statistik-wahrscheinlichkeit"] = {
  sub: "Statistik und Wahrscheinlichkeitsrechnung, 5 CP",

  longHtml: `
    <p>
      Im Modul Statistik und Wahrscheinlichkeitsrechnung erwirbst du grundlegende mathematische
      Kenntnisse zur Analyse von Daten. Du lernst, statistische Methoden anzuwenden und Ergebnisse zu
      interpretieren. Dabei werden Wahrscheinlichkeitsmodelle und Zufallsprozesse behandelt.
    </p>
    <p>
      Das Modul legt die Basis für datengetriebene Entscheidungen. Ziel ist es, Daten sachgerecht auszuwerten
      und zu bewerten.
    </p>
  `,

  quickHtml: `
    <strong>Lernziele / Themen:</strong>
    <ul>
      <li>Grundlagen der Statistik</li>
      <li>Wahrscheinlichkeitsrechnung</li>
      <li>Zufallsvariablen und Verteilungen</li>
      <li>Statistische Auswertungen</li>
      <li>Interpretation von Daten</li>
      <li>Grundlagen der Programmiersprache Python</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 5 von 5 Sternen">
      ★★★★★ (5 / 5)
    </span>
  `
};
