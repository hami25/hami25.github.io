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
// - Bei Abschlussarbeiten ist es sinnvoll, eher "Anforderungen" als "Inhalte" zu nennen.
// -----------------------------------------------------------------------------

window.MODULE_CONTENT = window.MODULE_CONTENT || {};

window.MODULE_CONTENT["bachelor-thesis"] = {
  sub: "Bachelor-Thesis, 15 CP",

  longHtml: `
    <p>
      Die Bachelor-Thesis bildet den Abschluss des Studiums. In dieser Abschlussarbeit
      bearbeiten Studierende eine selbst gewählte oder vorgegebene Fragestellung aus dem
      Bereich der Wirtschaftsinformatik eigenständig und wissenschaftlich fundiert.
    </p>
    <p>
      Ziel ist es, die im Studium erworbenen fachlichen, methodischen und wissenschaftlichen
      Kompetenzen anzuwenden und unter Beweis zu stellen. Die Arbeit kann sowohl theoretisch
      als auch praxisorientiert ausgerichtet sein.
    </p>
    <p>
      Die Bachelor-Thesis wird in einem festgelegten Zeitraum angefertigt und schließt das
      Studium formal ab.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte / Anforderungen:</strong>
    <ul>
      <li>Eigenständige Bearbeitung einer wissenschaftlichen Fragestellung</li>
      <li>Anwendung wissenschaftlicher Methoden</li>
      <li>Strukturierte Analyse und Dokumentation</li>
      <li>Verknüpfung von Theorie und Praxis</li>
      <li>Schriftliche Ausarbeitung und Abgabe</li>
    </ul>
  `
};
