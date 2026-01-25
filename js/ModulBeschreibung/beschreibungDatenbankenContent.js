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

window.MODULE_CONTENT["datenbanken"] = {
  sub: "Datenbanken, 10 CP",

  longHtml: `
    <p>
      Datenbanken in der Informatik sind ein Hilfsmittel zur effizienten, rechnergestützten Organisation,
      Speicherung, Manipulation, Integration und Verwaltung großer Datensammlungen.
    </p>
    <p>
      Hier lernst du alles über den Aufbau, die Funktionen, die Historie, die Verwaltung und die Erstellung solcher
      Datenbanken und größerer Datenbanksysteme.
    </p>
    <p>
      Besonders im Fokus wird hier die standardisierte Datenbanksprache „Structured Query Language“ (SQL) stehen,
      die es ermöglicht, per Befehl Daten aus Datenbanken abzufragen, einzufügen, zu ändern oder zu löschen sowie
      Tabellen und Datenbanken anzulegen oder zu ändern.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Konzeptueller Datenbankentwurf</li>
      <li>Das relationale Datenmodell</li>
      <li>Relationale Entwurfstheorie (Normalformen)</li>
      <li>Anfrageoperationen für Relationen</li>
      <li>Datenbanksprache (Anfrage- und Manipulationssprache)</li>
      <li>Datenintegrität</li>
      <li>PL/SQL (Stored Procedure und Trigger)</li>
      <li>Datenbankanbindung</li>
      <li>Transaktionen (Transaktionstheorie)</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 4 von 5 Sternen">
      ★★★★✩ (4 / 5)
    </span>
  `
};
