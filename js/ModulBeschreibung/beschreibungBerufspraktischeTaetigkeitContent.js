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
// - "Praxisphase" ist oft sehr individuell: Hinweisblock ist gut, bitte beibehalten.
// -----------------------------------------------------------------------------

window.MODULE_CONTENT = window.MODULE_CONTENT || {};

window.MODULE_CONTENT["berufspraktische-taetigkeit"] = {
  sub: "Berufspraktische Tätigkeit, 30 CP",

  longHtml: `
    <p>
      Die berufspraktische Tätigkeit bietet dir die Möglichkeit, die im Studium erworbenen
      theoretischen Kenntnisse in der Praxis anzuwenden. Du sammelst wertvolle Erfahrungen
      in einem Unternehmen oder einer Organisation und erhältst einen realistischen Einblick
      in den Berufsalltag von Wirtschaftsinformatikerinnen und Wirtschaftsinformatikern.
    </p>
    <p>
      Während der Praxisphase arbeitest du an konkreten Aufgaben und Projekten mit und lernst,
      wie betriebliche Abläufe, IT-Systeme und organisatorische Prozesse im Zusammenspiel
      funktionieren. Dabei kannst du deine fachlichen, methodischen und sozialen Kompetenzen
      weiterentwickeln.
    </p>
    <p>
      Die berufspraktische Tätigkeit dient zudem der beruflichen Orientierung und hilft dir,
      eigene Interessen und Stärken zu erkennen. Häufig ergeben sich aus der Praxisphase
      wertvolle Kontakte oder sogar Perspektiven für den späteren Berufseinstieg.
    </p>
  `,

  quickHtml: `
    <strong>Ziele der Praxisphase:</strong>
    <ul>
      <li>Anwendung von Studieninhalten in der Praxis</li>
      <li>Einblick in reale Arbeits- und Projektprozesse</li>
      <li>Erwerb beruflicher Handlungskompetenzen</li>
      <li>Stärkung von Team- und Kommunikationsfähigkeit</li>
      <li>Berufliche Orientierung und Netzwerkaufbau</li>
    </ul>

    <strong>Hinweis:</strong>
    <p style="margin:0;">
      Die konkrete Ausgestaltung der berufspraktischen Tätigkeit richtet sich nach dem
      jeweiligen Unternehmen und den individuellen Einsatzbereichen.
    </p>
  `
};
