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

window.MODULE_CONTENT["it-recht-datenschutz"] = {
  sub: "IT-Recht und Datenschutz, 5 CP",

  longHtml: `
    <p>
      Das Modul IT-Recht und Datenschutz vermittelt rechtliche Grundlagen im Umgang mit digitalen Technologien.
      Hier lernt man, welche gesetzlichen Rahmenbedingungen für IT-Systeme, Software und Daten gelten.
    </p>
    <p>
      Ein Schwerpunkt liegt auf dem Datenschutz und der DSGVO. Zudem werden Fragen des Urheberrechts und der Haftung
      im IT-Umfeld behandelt. In der Vorlesung zeigen Beispiele typische rechtliche Problemstellungen.
    </p>
    <p>
      Ziel ist es, rechtliche Risiken im IT-Kontext erkennen und einschätzen zu können.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen des IT-Rechts</li>
      <li>Datenschutz und DSGVO</li>
      <li>Personenbezogene Daten</li>
      <li>Urheberrecht und Lizenzmodelle</li>
      <li>Impressumspflicht und Haftungsfragen</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 1 von 5 Sternen">
      ★✩✩✩✩ (1 / 5)
    </span>
  `
};
