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

window.MODULE_CONTENT["projekt-digitalisierung"] = {
  sub: "Projekt Digitalisierung, 10 CP",

  longHtml: `
    <p>
      Im Modul Projekt Digitalisierung setzen Studierende ihr Wissen aus vorherigen Semestern in einem praxisnahen
      Projekt um. In Teams planen und realisieren sie ein Digitalisierungsprojekt von der Idee bis zur Umsetzung.
      Dabei werden sowohl technische als auch organisatorische Aspekte berücksichtigt.
    </p>
    <p>
      Das Modul fördert selbstständiges Arbeiten und Teamkompetenzen. Projektmanagement-Methoden werden praktisch
      angewendet. Ziel ist es, reale Problemstellungen strukturiert zu lösen.
    </p>
    <p>
      Genau das stellt auch dieses Projekt dar, welches von Studierenden erstellt wurde.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Planung und Durchführung von Digitalisierungsprojekten</li>
      <li>Projektmanagement in der Praxis</li>
      <li>Teamarbeit und Kommunikation</li>
      <li>Analyse von Anforderungen</li>
      <li>Umsetzung digitaler Lösungen</li>
      <li>Präsentation und Dokumentation von Projektergebnissen</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 4,5 von 5 Sternen">
      ★★★★☆ (4,5 / 5)
    </span>
  `
};
