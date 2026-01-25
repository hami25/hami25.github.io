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

window.MODULE_CONTENT["einfuehrung-informatik"] = {
  sub: "Einführung in die Informatik, 5 CP",

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundbegriffe der Informatik</li>
      <li>Schaltnetze und Schaltwerke</li>
      <li>Repräsentierung von Information in Rechensystemen</li>
      <li>Internet</li>
      <li>IT-Sicherheit</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 2 von 5 Sternen">
      ★★✩✩✩ (2 / 5)
    </span>
  `,

  longHtml: `
    <p>
      Wie der Name des Moduls bereits verrät, erhältst du hier einen Einblick
      in die Grundlagen der Informatik. Es werden zentrale Konzepte aus
      verschiedenen Themenbereichen vorgestellt.
    </p>
    <p>
      Diese Inhalte bilden die Basis für viele weitere Module im Studium,
      in denen die Themen später detaillierter behandelt werden. Ziel ist es,
      ein solides Grundverständnis aufzubauen und dich mit der Materie
      vertraut zu machen.
    </p>
  `
};
