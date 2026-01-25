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

window.MODULE_CONTENT["oo-softwareentwicklung"] = {
  sub: "Objektorientierte Softwareentwicklung, 10 CP",

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Prozedurale Elemente</li>
      <li>Objektorientierung</li>
      <li>GUI-Programmierung</li>
      <li>Datenverwaltung</li>
      <li>Rekursion</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 4,5 von 5 Sternen">
      ★★★★☆ (4,5 / 5)
    </span>
  `,

  longHtml: `
    <p>
      Programmieren ist eine grundlegende Fähigkeit der Informatik.
      Fast alle weiteren Themen des Studiums bauen darauf auf und auch
      in vielen späteren Berufsfeldern sind Programmierkenntnisse wichtig.
    </p>
    <p>
      In diesem Modul werden die Grundlagen der Programmiersprache Java
      von Grund auf vermittelt. Vorkenntnisse sind nicht erforderlich,
      können den Einstieg aber erleichtern.
    </p>
  `
};
