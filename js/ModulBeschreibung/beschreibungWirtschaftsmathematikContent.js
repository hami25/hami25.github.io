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

window.MODULE_CONTENT["wirtschaftsmathematik"] = {
  sub: "Wirtschaftsmathematik, 5 CP",

  longHtml: `
    <p>
      Inhalt dieses Moduls sind mathematische Grundlagen, die für das Verständnis von komplexeren Problemen notwendig sind.
      Das Modul unterteilt sich in zwei Themenbereiche: Analysis und Lineare Algebra.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Folgen &amp; Grenzwerte</li>
      <li>Differential- und Integralrechnung</li>
      <li>Funktionen mehrerer Variablen</li>
      <li>Matrizen</li>
      <li>Analytische Geometrie</li>
      <li>Lineare Optimierung</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 1,5 von 5 Sternen">
      ★☆✩✩✩ (1,5 / 5)
    </span>
  `
};
