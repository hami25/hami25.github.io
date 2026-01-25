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

window.MODULE_CONTENT["portfolio-wi"] = {
  sub: "Portfolio Wirtschaftsinformatik, 10 CP",

  longHtml: `
    <p>
      Im Modul Portfolio Wirtschaftsinformatik reflektieren Studierende ihre im Studium
      erworbenen Kompetenzen und dokumentieren ausgewählte Arbeiten, Projekte und Erfahrungen.
      Ziel ist es, die eigene fachliche Entwicklung sichtbar zu machen.
    </p>
    <p>
      Das Portfolio dient dazu, theoretische Kenntnisse und praktische Fähigkeiten
      zusammenzuführen und kritisch zu reflektieren. Dabei können Inhalte aus verschiedenen
      Modulen des Studiums eingebunden werden.
    </p>
    <p>
      Das Modul unterstützt zudem die Vorbereitung auf den Berufseinstieg, da das Portfolio
      als Grundlage für Bewerbungen oder Vorstellungsgespräche genutzt werden kann.
    </p>
  `,

  quickHtml: `
    <strong>Ziele des Portfolios:</strong>
    <ul>
      <li>Reflexion des eigenen Studienverlaufs</li>
      <li>Dokumentation fachlicher und praktischer Kompetenzen</li>
      <li>Zusammenführung von Theorie und Praxis</li>
      <li>Vorbereitung auf den Berufseinstieg</li>
      <li>Darstellung individueller Schwerpunkte</li>
    </ul>
  `
};
