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

window.MODULE_CONTENT["betriebliches-rechnungswesen"] = {
  sub: "Betriebliches Rechnungswesen, 5 CP",

  longHtml: `
    <p>
      In diesem Modul werden folgende Fragen behandelt:
      Wie erfasse ich die quantifizierbaren Vorgänge in einem Unternehmen, wie werte ich diese Daten aus
      und wie berichte ich darüber? Wie nutze ich diese Daten und Ergebnisse, um ein Unternehmen oder
      Unternehmensbereiche zu planen und zu steuern?
    </p>
    <p>
      Das Modul besteht aus den beiden Bestandteilen:
      <br>
      1. Externes Rechnungswesen (Financial Accounting) ca. 25%: Berichtslegung für Externe (Bilanz, Jahresabschluss, Buchführung)
      <br>
      2. Internes Rechnungswesen (Management Accounting) ca. 75%: Internes Management auf Basis von quantitativen Daten
      (Kosten- und Leistungsrechnung inkl. Ergebnis- und Deckungsbeitragsrechnung, Break-Even-Analyse sowie Planungsrechnung)
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Externes Rechnungswesen</li>
      <li>Kostenartenrechnung</li>
      <li>Kostenstellenrechnung</li>
      <li>Kostenträgerrechnung</li>
      <li>Kostenrechnungssysteme</li>
      <li>Planrechnung &amp; Rekapitulation</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 3,5 von 5 Sternen">
      ★★★☆✩ (3,5 / 5)
    </span>
  `

};
