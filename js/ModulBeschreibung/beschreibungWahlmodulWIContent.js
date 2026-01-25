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

window.MODULE_CONTENT["wahlmodul-wi"] = {
  sub: "Wahlmodul Wirtschaftsinformatik, 5 CP",

  longHtml: `
    <p>
      Im Wahlmodul Wirtschaftsinformatik haben Studierende die Möglichkeit,
      individuelle Schwerpunkte innerhalb des Studiums zu setzen. Je nach Angebot
      können unterschiedliche Module aus dem Bereich der Wirtschaftsinformatik gewählt werden.
    </p>
    <p>
      Ziel des Wahlmoduls ist es, persönliche Interessen zu vertiefen und fachliche
      Kompetenzen gezielt auszubauen. Die angebotenen Inhalte können sowohl technische
      als auch betriebswirtschaftliche oder anwendungsorientierte Themen umfassen.
    </p>
    <p>
      Das konkrete Angebot an Wahlmodulen kann sich von Semester zu Semester ändern
      und orientiert sich an aktuellen Entwicklungen in Wissenschaft und Praxis.
    </p>
  `,

  quickHtml: `
    <strong>Mögliche Themenfelder:</strong>
    <ul>
      <li>Angewandte Informatik und IT-Systeme</li>
      <li>Digitale Geschäftsmodelle</li>
      <li>Datenanalyse und Informationsmanagement</li>
      <li>IT-Management und Organisation</li>
      <li>Spezielle Themen der Wirtschaftsinformatik</li>
    </ul>

    <strong>Hinweis:</strong>
    <p style="margin:0;">
      Die verfügbaren Wahlmodule können je nach Semester variieren.
    </p>
  `
};
