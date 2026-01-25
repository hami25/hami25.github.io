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

window.MODULE_CONTENT["einfuehrung-bwl"] = {
  sub: "Einführung in die Betriebswirtschaft, 5 CP",

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen und Rahmenbedingungen</li>
      <li>Strategische Planung</li>
      <li>Organisation</li>
      <li>Produktionswirtschaft</li>
      <li>Absatzwirtschaft</li>
      <li>Finanzwirtschaft</li>
      <li>Rechnungswesen</li>
      <li>Personalwirtschaft</li>
      <li>Digitalisierung / Informationsmanagement</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 2,5 von 5 Sternen">
      ★★☆✩✩ (2,5 / 5)
    </span>
  `,

  longHtml: `
    <p>
      Im Fokus der LV-BWL stehen die Vermittlung der Fachkompetenz wie ein Unternehmen
      erfolgreich funktioniert und geführt wird! Das Ziel jedes Unternehmen ist
      erfolgreiches Wirtschaften.
    </p>
    <p>
      Dazu werden in diesem Modul die notwendigen Grundlagen vermittelt. Zudem werden
      auch aktuelle Themen aus der Wirtschaft behandelt.
    </p>
  `
};
