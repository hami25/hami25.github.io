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

window.MODULE_CONTENT["wissenschaftliches-arbeiten"] = {
  sub: "Wissenschaftliches Arbeiten, 5 CP",

  longHtml: `
    <p>
      Im Modul Wissenschaftliches Arbeiten erhältst du die Grundlagen für das strukturierte und methodische Arbeiten
      in wissenschaftlichen Kontexten. Du lernst, wie man Fragestellungen entwickelt, recherchiert und bearbeitet.
    </p>
    <p>
      Ein besonderer Fokus liegt auf dem korrekten Umgang mit wissenschaftlichen Quellen. Zudem werden verschiedene
      Zitier- und Forschungsmethoden vorgestellt. Das Modul bereitet gezielt auf Projektarbeiten und Abschlussarbeiten vor.
    </p>
    <p>
      Ziel ist es, wissenschaftliche Arbeiten selbstständig und korrekt erstellen zu können.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Wissenschaftliche Fragestellungen formulieren</li>
      <li>Literaturrecherche und Quellenbewertung</li>
      <li>Zitierregeln und Plagiatsvermeidung</li>
      <li>Aufbau wissenschaftlicher Arbeiten</li>
      <li>Forschungsmethoden (qualitativ &amp; quantitativ)</li>
      <li>Argumentation und Strukturierung</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 2 von 5 Sternen">
      ★★✩✩✩ (2 / 5)
    </span>
  `
};
