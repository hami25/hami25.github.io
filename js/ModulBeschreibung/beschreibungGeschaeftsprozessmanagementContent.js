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

window.MODULE_CONTENT["geschaeftsprozessmanagement"] = {
  sub: "Geschäftsprozessmanagement, 5 CP",

  longHtml: `
    <p>
      Hier lernst du, was Geschäftsprozesse sind und wie man sie modelliert und optimiert.
      Nachdem das Thema Geschäftsprozesse bereits oberflächlich in den Modulen „BWL“ und
      „Einführung in die Wirtschaftsinformatik“ behandelt wurde, gibt es hier nun einen
      detaillierteren Einblick in das Thema.
    </p>
    <p>
      Besonders im Fokus stehen dabei grafische Notationen zur Modellierung der Geschäftsprozesse
      wie eEPK (erweiterte ereignisgesteuerte Prozesskette) und BPMN (Business Process Model and Notation).
    </p>
    <p>
      Es werden verschiedene Tools vorgestellt, mit welchen du selber Geschäftsprozesse modellieren wirst.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen des Geschäftsprozessmanagements</li>
      <li>Konzepte des PM/GPM (u.a. Business Reengineering, Integr. GPM/WfM)</li>
      <li>Modelle, Methoden, Modellierungssprachen, Werkzeuge</li>
      <li>Organisation des PM/GPM, Prozesskosten, Prozesscontrolling, Rollen</li>
      <li>IT-Unterstützung für das GPM (u.a. Anwendungssysteme der Wirtschaft)</li>
      <li>Ausgewählte GPM-Managementkonzepte (u.a. Kaizen, KVP, Lean Manag.)</li>
      <li>Aktuelle/praxisrelevante Beispiele aus Wirtschaft, Verwaltung, Forschung</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 2 von 5 Sternen">
      ★★✩✩✩ (2 / 5)
    </span>
  `
};
