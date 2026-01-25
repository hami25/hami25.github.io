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

window.MODULE_CONTENT["agiles-projektmanagement"] = {
  sub: "Agiles Projektmanagement, 5 CP",

  longHtml: `
    <p>
      Im Modul Agiles Projektmanagement lernen Studierende agile Methoden zur Planung und
      Umsetzung von Projekten kennen. Der Fokus liegt auf flexiblen und iterativen Vorgehensweisen.
      Studierende verstehen die Prinzipien agiler Arbeitsweisen und deren Vorteile gegenüber klassischen
      Methoden.
    </p>
    <p>
      Praxisnahe Übungen fördern das Arbeiten im Team. Das Modul bereitet auf agile Projekte
      in der Berufspraxis vor. Ziel ist es, Projekte effizient und anpassungsfähig zu steuern.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen des agilen Projektmanagements</li>
      <li>Agile Prinzipien und Werte</li>
      <li>Scrum, Kanban und agile Frameworks</li>
      <li>Rollen und Artefakte</li>
      <li>Iterative Planung</li>
      <li>Teamarbeit und Kommunikation</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 3 von 5 Sternen">
      ★★★✩✩ (3 / 5)
    </span>
  `
};
