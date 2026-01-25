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

window.MODULE_CONTENT["einfuehrung-wi"] = {
  sub: "Einführung in die Wirtschaftsinformatik, 5 CP",

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Betriebliche Informationssysteme – Grundlagen</li>
      <li>Profil der Wirtschaftsinformatik</li>
      <li>Rechtliche Rahmenbedingungen und Auswirkungen auf BIS</li>
      <li>Einführung eines betrieblichen Informationssystems</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 3 von 5 Sternen">
      ★★★✩✩ (3 / 5)
    </span>
  `,

  longHtml: `
    <p>
      In diesem Modul bekommst du einen Einblick in die Arbeitswelt von
      Wirtschaftsinformatikerinnen und Wirtschaftsinformatikern und lernst,
      was diesen Studiengang von Informatik oder Betriebswirtschaft unterscheidet.
    </p>
    <p>
      Es werden grundlegende Themen erklärt, die im weiteren Verlauf des Studiums
      noch vertieft werden. Die hier vermittelten Inhalte helfen dir dabei,
      in späteren Modulen schneller und sicherer in neue Themen einzusteigen.
    </p>
  `
};
