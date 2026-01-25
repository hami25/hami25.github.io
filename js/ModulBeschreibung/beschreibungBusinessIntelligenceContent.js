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

window.MODULE_CONTENT["business-intelligence"] = {
  sub: "Business Intelligence, 10 CP",

  longHtml: `
    <p>
      Das Modul Business Intelligence vermittelt Methoden zur Analyse und Auswertung von
      Unternehmensdaten. Studierende lernen, wie Daten gesammelt, aufbereitet und visualisiert werden.
      Ziel ist es, Entscheidungsprozesse im Unternehmen zu unterstützen.
    </p>
    <p>
      Dabei werden unterschiedliche Analyseverfahren betrachtet. Praxisbeispiele zeigen den Einsatz von
      BI-Systemen. Der erlernte Umgang mit Excel spielt hier ebenfalls eine Rolle.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen von Business Intelligence</li>
      <li>Datenanalyse und Reporting</li>
      <li>Data Warehousing</li>
      <li>Kennzahlen und Dashboards</li>
      <li>Datenvisualisierung</li>
      <li>Entscheidungsunterstützung</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 3,5 von 5 Sternen">
      ★★★☆✩ (3,5 / 5)
    </span>
  `
};
