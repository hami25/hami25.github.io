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

window.MODULE_CONTENT["programmiermethoden"] = {
  sub: "Programmiermethoden, 10 CP",

  longHtml: `
    <p>
      Nachdem im ersten Semester im Modul „Objektorientierte Softwareentwicklung“ die Grundlagen
      in der Programmierung mit Java vermittelt wurden, wie zum Beispiel Datentypen, prozedurale
      Programmierung, Objektorientierung oder GUI, werden diese Kenntnisse mit dem Modul
      „Programmiermethoden“ nun erweitert.
    </p>
    <p>
      Dabei wird auf die zuvor erlernten Grundkenntnisse aufgebaut und es werden weitere Techniken gezeigt,
      die man zur professionellen Softwareentwicklung braucht.
    </p>
    <p>
      Programmieren ist die Basic Skill der Informatik und fast alle weiteren Themen des Studiums bauen darauf auf.
      Fast alle Jobs im Informatikbereich erfordern Kenntnisse im Programmieren. Deshalb umfasst dieses Modul auch
      10 CP und hat 2 Vorlesungen pro Woche.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Generics</li>
      <li>Enums</li>
      <li>Iterables</li>
      <li>Baumstrukturen</li>
      <li>Fehlerbehandlung</li>
      <li>Multithreading</li>
      <li>Verknüpfung mit SQL</li>
      <li>Verknüpfung mit XML</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 5 von 5 Sternen">
      ★★★★★ (5 / 5)
    </span>
  `
};
