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

window.MODULE_CONTENT["cybersecurity"] = {
  sub: "Cybersecurity, 5 CP",

  longHtml: `
    <p>
      Im Modul Cybersecurity beschäftigst du dich mit den Grundlagen der IT-Sicherheit und dem Schutz von
      Informationssystemen. Du lernst typische Bedrohungen wie Malware, Phishing oder Social Engineering kennen
      und verstehst, wie Angriffe auf IT-Systeme ablaufen.
    </p>
    <p>
      Ein weiterer Schwerpunkt liegt auf technischen und organisatorischen Schutzmaßnahmen. Dabei wird auch die
      Bedeutung von Sicherheitskonzepten in Unternehmen betrachtet. Das Modul verbindet theoretische Grundlagen
      mit praxisnahen Beispielen.
    </p>
    <p>
      Ziel ist es, ein Sicherheitsbewusstsein für digitale Systeme zu entwickeln.
    </p>
  `,

  quickHtml: `
    <strong>Inhalte:</strong>
    <ul>
      <li>Grundlagen der IT-Sicherheit</li>
      <li>Bedrohungen und Angriffsszenarien</li>
      <li>Malware, Phishing, Social Engineering</li>
      <li>Authentifizierung und Zugriffskontrollen</li>
      <li>Sicherheitskonzepte und Schutzmaßnahmen</li>
      <li>Sensibilisierung für Informationssicherheit</li>
    </ul>

    <strong>Schwierigkeitsgrad:</strong>
    <span aria-label="Schwierigkeit 4 von 5 Sternen">
      ★★★★✩ (4 / 5)
    </span>
  `
};
