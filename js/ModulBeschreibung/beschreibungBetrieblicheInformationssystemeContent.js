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

window.MODULE_CONTENT["betriebliche-informationssysteme"] = {
  sub: "Betriebliche Informationssysteme, 10 CP",

  longHtml: `
    <p>
      Im Modul Betriebliche Informationssysteme beschäftigen sich Studierende mit IT-Systemen zur
      Unterstützung betrieblicher Prozesse. Es wird vermittelt, wie Informationssysteme in Unternehmen
      eingesetzt werden. Dabei werden verschiedene Systemtypen und deren Funktionen betrachtet.
      Das Zusammenspiel von Organisation, Prozessen und IT steht im Mittelpunkt.
    </p>
    <p>
      Praxisbeispiele zeigen den Einsatz in realen Unternehmen. Ziel ist es, betriebliche Informationssysteme
      zu verstehen und einordnen zu können. Die Arbeit mit der SAP-Software steht hier im Mittelpunkt.
      Man lernt den Umgang zum Einfügen und Pflegen der Daten kennen.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen betrieblicher Informationssysteme</li>
      <li>Geschäftsprozesse und IT-Unterstützung</li>
      <li>Systemintegration</li>
      <li>Rolle von Informationssystemen im Unternehmen</li>
      <li>Analyse von Unternehmensprozessen</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 3 von 5 Sternen">
      ★★★✩✩ (3 / 5)
    </span>
  `
};
