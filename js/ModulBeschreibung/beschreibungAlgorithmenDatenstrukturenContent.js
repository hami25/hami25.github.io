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

window.MODULE_CONTENT["algorithmen-datenstrukturen"] = {
  sub: "Algorithmen und Datenstrukturen, 5 CP",

  longHtml: `
    <p>
      Im Modul Algorithmen und Datenstrukturen lernst du grundlegende Konzepte zur effizienten
      Verarbeitung von Daten kennen. Es werden verschiedene Algorithmen zur Suche, Sortierung und
      Optimierung behandelt. Zudem werden wichtige Datenstrukturen vorgestellt und analysiert.
    </p>
    <p>
      Der Fokus liegt darauf, die Funktionsweise und Effizienz von Algorithmen zu verstehen.
      Man lernt ebenfalls, Laufzeiten und Speicherbedarf zu bewerten. Das Modul bildet eine wichtige
      Grundlage für weiterführende Informatikmodule.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen von Algorithmen</li>
      <li>Such- und Sortieralgorithmen</li>
      <li>Datenstrukturen (Listen, Bäume, Graphen)</li>
      <li>Laufzeit- und Komplexitätsanalyse</li>
      <li>Effizienz und Optimierung</li>
      <li>Problemlösestrategien</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 5 von 5 Sternen">
      ★★★★★ (5 / 5)
    </span>
  `
};
