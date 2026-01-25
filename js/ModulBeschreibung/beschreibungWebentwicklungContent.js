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

window.MODULE_CONTENT["webentwicklung"] = {
  sub: "Webentwicklung, 5 CP",

  longHtml: `
    <p>
      Im Modul Webentwicklung lernst du die Grundlagen der Entwicklung moderner Webanwendungen.
      Es werden sowohl Frontend- als auch Backend-Konzepte behandelt. Studierende erwerben
      Kenntnisse in gängigen Webtechnologien und -standards.
    </p>
    <p>
      Der Fokus liegt auf der Umsetzung interaktiver und nutzerfreundlicher Anwendungen.
      Praxisübungen fördern das Verständnis für Webarchitekturen. Ziel ist es, funktionale und
      strukturierte Webanwendungen, also Webseiten, zu entwickeln.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen der Webentwicklung</li>
      <li>HTML, CSS und JavaScript</li>
      <li>Client-Server-Architekturen</li>
      <li>Responsive Design</li>
      <li>Webanwendungen und APIs</li>
      <li>Benutzerfreundlichkeit und Usability</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 5 von 5 Sternen">
      ★★★★★ (5 / 5)
    </span>
  `
};
