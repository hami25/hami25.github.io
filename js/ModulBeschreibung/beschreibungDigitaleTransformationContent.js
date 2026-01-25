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

window.MODULE_CONTENT["digitale-transformation"] = {
  sub: "Digitale Transformation, 5 CP",

  longHtml: `
    <p>
      Das Modul Digitale Transformation vermittelt ein Verständnis dafür, wie digitale Technologien Geschäftsmodelle,
      Prozesse und Organisationen verändern. Studierende analysieren den Einfluss neuer Technologien auf Unternehmen
      und Märkte und betrachten, wie digitale Innovationen Wettbewerbsvorteile schaffen können.
    </p>
    <p>
      Neben dem gelernten Wissen in der Vorlesung spielt im Praktikum dieser Veranstaltung die Business Process Model
      Notation (BPMN) eine zentrale Rolle, da man hier Aufgaben erhält, die in einem BPMN-Modell dargestellt werden müssen.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen der digitalen Transformation</li>
      <li>Digitale Geschäftsmodelle</li>
      <li>Plattformökonomie</li>
      <li>Vertiefter Umgang mit Business Process Model Notation (BPMN)</li>
      <li>Decision Model Notation (DMN)</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 2 von 5 Sternen">
      ★★✩✩✩ (2 / 5)
    </span>
  `
};
