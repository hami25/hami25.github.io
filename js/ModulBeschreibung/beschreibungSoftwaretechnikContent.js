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

window.MODULE_CONTENT["softwaretechnik"] = {
  sub: "Softwaretechnik, 5 CP",

  longHtml: `
    <p>
      Im Modul Softwaretechnik behandelt man den gesamten Lebenszyklus von Software, von der Planung
      bis zur Wartung. Ein zentraler Schwerpunkt liegt auf der Modellierung von Softwaresystemen mithilfe
      der UML. Dabei werden verschiedene Diagrammarten wie Klassen-, Objekt- und
      Kommunikationsdiagramme behandelt.
    </p>
    <p>
      Darüber hinaus lernst du unterschiedliche Softwarearchitekturen sowie Entwurfsmuster kennen.
      Auch theoretische Grundlagen und formale Darstellungsregeln spielen eine wichtige Rolle.
      Ziel des Moduls ist es, Software strukturiert zu entwerfen, zu dokumentieren und verständlich darzustellen.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Softwareentwicklungsprozesse</li>
      <li>Anforderungsanalyse</li>
      <li>Modellierung (z. B. UML)</li>
      <li>Softwarearchitekturen</li>
      <li>Qualitätssicherung und Tests</li>
      <li>Theoretische Grundlagen und Modellierungsregeln</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 3,5 von 5 Sternen">
      ★★★☆✩ (3,5 / 5)
    </span>
  `
};
