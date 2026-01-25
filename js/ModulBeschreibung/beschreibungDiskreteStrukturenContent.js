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

window.MODULE_CONTENT["diskrete-strukturen"] = {
  sub: "Diskrete Strukturen, 5 CP",

  // Kurzübersicht
  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Logik</li>
      <li>Mengen</li>
      <li>Relationen</li>
      <li>Beweisen</li>
      <li>Graphentheorie</li>
      <li>Algebraische Grundstrukturen</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 2,5 von 5 Sternen">
      ★★☆✩✩ (2,5 / 5)
    </span>
  `,

  // Ausführliche Modulbeschreibung
  longHtml: `
    <p>
      In diesem Modul werden die mathematischen Grundlagen vermittelt,
      die für die Informatik benötigt werden. Die diskrete Mathematik
      ist ein modernes Teilgebiet der Mathematik, das auf besondere
      Weise theoretische Konzepte mit praktischen Anwendungen verbindet.
    </p>
    <p>
      Der Begriff <em>„diskret“</em> bezieht sich dabei nicht auf etwas
      „Verborgenes“, sondern darauf, dass endliche und abzählbare
      Strukturen betrachtet werden. Diese spielen eine zentrale Rolle
      in vielen Bereichen der Informatik, etwa bei Algorithmen,
      Datenstrukturen oder der Modellierung von Netzwerken.
    </p>
  `
};
