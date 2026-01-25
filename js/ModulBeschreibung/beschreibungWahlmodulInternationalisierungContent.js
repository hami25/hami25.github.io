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

window.MODULE_CONTENT["wahlmodul-internationalisierung"] = {
  sub: "Wahlmodul Internationalisierung, 5 CP",

  longHtml: `
    <p>
      Das Wahlmodul Internationalisierung ermöglicht es Studierenden, internationale
      Perspektiven in das Studium einzubringen. Je nach Angebot können Lehrveranstaltungen
      mit internationalem Bezug oder englischsprachige Module belegt werden.
    </p>
    <p>
      Ziel ist es, interkulturelle Kompetenzen zu stärken und ein Verständnis für globale
      wirtschaftliche und technologische Zusammenhänge zu entwickeln. Dabei können sowohl
      fachliche Inhalte als auch Soft Skills wie Kommunikation und Teamarbeit in
      internationalen Kontexten vertieft werden.
    </p>
    <p>
      Das konkrete Angebot an Modulen kann sich von Semester zu Semester ändern und richtet
      sich nach aktuellen Kooperationen und internationalen Entwicklungen.
    </p>
  `,

  quickHtml: `
    <strong>Mögliche Inhalte:</strong>
    <ul>
      <li>Internationale IT- und Wirtschaftsthemen</li>
      <li>Englischsprachige Lehrveranstaltungen</li>
      <li>Interkulturelle Zusammenarbeit</li>
      <li>Globale Geschäftsprozesse</li>
      <li>Internationale Projekt- oder Fallstudien</li>
    </ul>

    <strong>Hinweis:</strong>
    <p style="margin:0;">
      Die verfügbaren Module können je nach Semester variieren.
    </p>
  `
};
