// -----------------------------------------------------------------------------
// CONTENT-ONLY Datei (Redaktion):
// - Hier steht nur Inhalt, keine Logik.
// - In diesem Tab ist HTML in Strings erlaubt (Renderer nutzt innerHTML),
//   z.B. <strong> ... </strong> für Hervorhebungen.
// - Wichtig: quickNav.links[].href muss auf eine existierende sections[].id zeigen:
//   href: "#wi-was-ist"  <->  id: "wi-was-ist"
// -----------------------------------------------------------------------------

export const INFO_CONTENT = {
  title: "Allgemeine Infos",
  // intro darf HTML enthalten (z.B. <strong>), weil es im Renderer als HTML eingesetzt wird.
  intro: `
    Du schreibst gerade Abi und willst wissen, ob <strong>Wirtschaftsinformatik</strong> zu dir passt?
    Hier bekommst du ein klares Bild: Was dich erwartet, wie sich der Alltag anfühlt und welche
    typischen Stolpersteine du vermeiden kannst.
  `,
  quickCheck: {
    title: "In 10 Sekunden",
    // bullets dürfen HTML enthalten (Renderer setzt sie als <li> mit innerHTML)
    bullets: [
      "<strong>Du lernst:</strong> IT + Wirtschaft/Prozesse + Daten (Schnittstelle zwischen Technik & Organisation)",
      "<strong>Du brauchst:</strong> Bereitschaft für Logik/Mathe und regelmäßiges Üben",
      "<strong>Du bekommst:</strong> Praxis durch Projekte & berufspraktische Phase"
    ],
    hint: "Wenn das für dich gut klingt: Spring direkt zu „Passt das zu dir?“ oder „Fallstricke“."
  },
  quickNav: {
    title: "Schnell zu…",
    // Redaktion: href muss zu sections[].id passen (ohne #).
    links: [
      { href: "#wi-was-ist", label: "Was ist WI?" },
      { href: "#wi-alltag", label: "Studienalltag" },
      { href: "#wi-mitbringen", label: "Was du mitbringen solltest" },
      { href: "#wi-fallstricke", label: "Fallstricke" },
      { href: "#wi-praxis", label: "Praxis" },
      { href: "#wi-passt", label: "Passt das zu dir?" },
      { href: "#wi-danach", label: "Was kommt danach?" }
    ]
  },
  // sections Schema:
  // { id: string, title: string, bullets: string[], hint?: string }
  // bullets/hint dürfen HTML enthalten (Renderer nutzt innerHTML).
  sections: [
    {
      id: "wi-was-ist",
      title: "Was ist Wirtschaftsinformatik – kurz & ehrlich?",
      bullets: [
        "<strong>Kernidee:</strong> IT (Programmieren, Daten, Systeme) + Wirtschaft (Prozesse, Organisation, Management).",
        "<strong>Was du machst:</strong> Du verstehst, wie Unternehmen arbeiten – und entwickelst digitale Lösungen.",
        "<strong>Was es nicht ist:</strong> Kein reines Programmier- und kein reines BWL-Studium."
      ]
    },
    {
      id: "wi-alltag",
      title: "So fühlt sich der Studienalltag an",
      bullets: [
        "<strong>Vorlesungen & Übungen:</strong> Grundlagen lernen und direkt an Aufgaben üben.",
        "<strong>Praxis & Projekte:</strong> Teamarbeit, Projektabgaben, Präsentationen.",
        "<strong>Selbstorganisation:</strong> Du planst dein Lernen selbst (Uni ≠ Schule)."
      ],
      hint: "Tipp: Lieber früh Routine fürs Nacharbeiten aufbauen."
    },
    {
      id: "wi-mitbringen",
      title: "Was du mitbringen solltest (und was nicht)",
      bullets: [
        "<strong>Hilft sehr:</strong> Interesse an digitalen Themen, Lust auf Problemlösen, Durchhaltevermögen.",
        "<strong>Mathe/Logik:</strong> Kein „Mathe-LK nötig“ – aber regelmäßig üben.",
        "<strong>Kommunikation:</strong> Teamprojekte und Abstimmungen gehören dazu."
      ],
      hint: "„Perfekt können“ ist nicht nötig – „dranbleiben“ ist entscheidend."
    },
    {
      id: "wi-fallstricke",
      title: "Typische Fallstricke (damit du sie vermeiden kannst)",
      bullets: [
        "<strong>Mathe & IT unterschätzen:</strong> lieber jede Woche ein bisschen statt kurz vor der Klausur.",
        "<strong>Allein kämpfen:</strong> Tutorien, Übungen, Fragestunden, Lerngruppen nutzen.",
        "<strong>Falsche Erwartungen:</strong> Es gibt Theorie und Praxis – nicht nur „coden“.",
        "<strong>Zeitmanagement:</strong> Abgaben/Projekte/Klausuren können sich ballen – plane Puffer ein."
      ]
    },
    {
      id: "wi-praxis",
      title: "Wie praxisnah ist das?",
      bullets: [
        "<strong>Praxisprojekte:</strong> Inhalte an realen Problemstellungen anwenden.",
        "<strong>Berufspraktische Phase:</strong> Praxiserfahrung & Joballtag kennenlernen.",
        "<strong>Abschlussarbeit:</strong> häufig mit Praxisbezug."
      ]
    },
    {
      id: "wi-passt",
      title: "Passt das zu dir?",
      bullets: [
        "<strong>Gute Wahl, wenn du…</strong> Technik verstehen willst, logisch denkst und gerne Lösungen baust.",
        "<strong>Eher schwierig, wenn du…</strong> Mathe/Logik komplett vermeiden willst."
      ],
      hint: 'Nutze zur Orientierung: <strong>Mini-Quiz</strong> und den <strong>Beruf-Finder</strong>.'
    },
    {
      id: "wi-danach",
      title: "Was kommt später? (Beispiele)",
      bullets: [
        "IT-/Business-Consulting",
        "Software- & Webentwicklung",
        "Datenanalyse / Business Intelligence",
        "Projekt- & Prozessmanagement",
        "IT in Verwaltung / eGovernment (je nach Schwerpunkt)"
      ]
    }
  ],
  nextSteps: {
    title: "Was du als Nächstes tun kannst",
    bullets: [
      "<strong>Mini-Quiz:</strong> in 1 Minute checken, ob WI grundsätzlich zu dir passt",
      "<strong>Beruf-Finder:</strong> durch Job-Ideen swipen und passende Richtungen finden",
      "<strong>Curriculum:</strong> Module pro Semester ansehen und Gefühl für Inhalte bekommen"
    ],
    hint: "Tipp: Wenn du unsicher bist, starte mit dem Mini-Quiz und klick danach auf 2–3 Module im Curriculum."
  }
};






