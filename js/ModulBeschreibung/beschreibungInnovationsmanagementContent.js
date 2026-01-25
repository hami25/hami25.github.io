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

window.MODULE_CONTENT["innovationsmanagement"] = {
  sub: "Innovationsmanagement, 5 CP",

  longHtml: `
    <p>
      Das Modul Innovationsmanagement vermittelt, wie neue Ideen systematisch entwickelt und
      umgesetzt werden. Studierende lernen, Innovationsprozesse in Unternehmen zu analysieren und zu
      gestalten. Dabei werden sowohl technische als auch organisatorische Innovationen betrachtet.
    </p>
    <p>
      Kreativitätsmethoden und Bewertungsverfahren spielen eine zentrale Rolle. Praxisbeispiele zeigen
      erfolgreiche Innovationsstrategien. Ziel ist es, Innovationspotenziale zu erkennen und zu fördern.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen des Innovationsmanagements</li>
      <li>Innovationsprozesse</li>
      <li>Kreativitäts- und Ideengenerierungsmethoden</li>
      <li>Bewertung von Innovationen</li>
      <li>Produkt- und Prozessinnovationen</li>
      <li>Innovationsstrategien</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 2,5 von 5 Sternen">
      ★★☆✩✩ (2,5 / 5)
    </span>
  `
};
