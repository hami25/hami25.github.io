/**
 * UNI Projekt Wahlprojekt – Content Datei (Bank-Format)
 * ----------------------------------------------------
 *  Zweck:
 *  Inhalte für das Modul-Modal im Bank-Modus (1 Frage pro Step).
 *
 * Erwartete Struktur:
 *   window.<CONTENT_VAR> = {
 *     titel: string,
 *     summaryTitle?: string,
 *     summaryText?: string,
 *     fragen: Array<Frage>
 *   }
 *
 * Unterstützte Fragetypen (moduleModal.js):
 *   - single_choice        (antwort: number)
 *   - multiple_choice      (antwort: number[], optional scored:false)
 *   - zuordnung            (items: {begriffe[], definitionen[]}, antwort: [[begriff, definition], ...])
 *   - sortierung           (items: string[], antwort: string[])
 *   - lueckentext          (text + optionen + antwort: string[])
 *   - lueckentext_auswahl  (text + optionen + antwort: string[])
 *   - dragdrop             (begriffe[] + antwort: number[] ODER loesung: string[])
 *
 * Hinweise:
 *   - scored:false => Selbstcheck, keine Bewertung
 *   - Schwierigkeit: "einfach" | "mittel" | "schwer" (optional)
 *
 * Konvention:
 *  - Fragen kurz, schülerfreundlich formulieren
 *  - Erklärung optional unter erklärung
 *
 */

window.BWL_MODAL_CONTENT = {
  titel: "Einführung in die Betriebswirtschaft",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn du Lust hast, Unternehmensentscheidungen zu verstehen – also Menschen, Märkte und Organisationen – dann ist „Einführung in die BWL“ sehr wahrscheinlich ein gutes Match.",

  fragen: [
    {
      frage: "Was erwartest du von BWL? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ich will verstehen, wie Unternehmen Entscheidungen treffen (z. B. Strategie, Ziele, Planung).",
        "Ich interessiere mich dafür, wie man Kunden gewinnt und Produkte am Markt platziert.",
        "BWL ist für mich vor allem „Menschen + Organisation“ (Teams, Rollen, Prozesse).",
        "Ich denke, BWL ist hauptsächlich Buchhaltung und Zahlen – das schreckt mich eher ab."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "BWL ist deutlich breiter als nur Zahlen: Es geht um Entscheidungen, Organisation, Märkte und Menschen."
    },

    {
      frage: "Was ist „Gewinn“ in einfachen Worten?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Umsatz minus Kosten.",
        "Kosten minus Umsatz.",
        "Alle Einnahmen insgesamt."
      ],
      antwort: 0,
      erklaerung:
        "Gewinn entsteht, wenn die Einnahmen (Umsatz) höher sind als die Kosten."
    },

    {
      frage: "Was bedeutet „Marketing“ am ehesten?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Nur Werbung auf Social Media.",
        "Alle Maßnahmen, um Kunden zu gewinnen und zu halten.",
        "Nur interne Verwaltung im Unternehmen."
      ],
      antwort: 1,
      erklaerung:
        "Marketing umfasst alles rund um Kunden: Bedarf erkennen, Angebote entwickeln, Kommunikation und Bindung."
    },

    {
      frage: "Wer sind „Stakeholder“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Nur Aktionäre.",
        "Gruppen, die vom Unternehmen betroffen sind oder Einfluss haben (z. B. Kunden, Mitarbeitende, Lieferanten).",
        "Nur die Geschäftsführung."
      ],
      antwort: 1,
      erklaerung:
        "Stakeholder sind alle Gruppen, die Interesse am Unternehmen haben oder von Entscheidungen betroffen sind."
    },

    {
      frage: "Ordne die BWL-Bereiche den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Marketing", "Personalmanagement", "Produktion"],
        definitionen: [
          "Planung und Organisation der Herstellung von Produkten oder Dienstleistungen.",
          "Planung, wie Produkte beworben, verkauft und am Markt positioniert werden.",
          "Einstellung, Motivation und Entwicklung von Mitarbeitenden."
        ]
      },
      antwort: [
        ["Produktion", "Planung und Organisation der Herstellung von Produkten oder Dienstleistungen."],
        ["Marketing", "Planung, wie Produkte beworben, verkauft und am Markt positioniert werden."],
        ["Personalmanagement", "Einstellung, Motivation und Entwicklung von Mitarbeitenden."]
      ],
      erklaerung:
        "BWL deckt viele Bereiche ab: Marketing (Markt), Personal (Menschen) und Produktion (Leistungserstellung)."
    },

    {
      frage: "BWL beschäftigt sich hauptsächlich mit Zahlen und Buchhaltung.",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Richtig", "Falsch"],
      antwort: 1,
      erklaerung:
        "Zahlen sind wichtig, aber BWL betrachtet vor allem Entscheidungen, Organisationen, Märkte und Menschen."
    },

    {
      frage:
        "Ein Unternehmen merkt: Kund:innen sind unzufriedener und wechseln zur Konkurrenz. Was ist aus BWL-Sicht der sinnvollste erste Schritt?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Preise sofort senken.",
        "Ursachen analysieren (z. B. Qualität, Service, Prozesse, Kundenbedürfnisse).",
        "Mehr Werbung schalten, ohne etwas am Angebot zu verändern."
      ],
      antwort: 1,
      erklaerung:
        "In der BWL ist Analyse der erste Schritt: Erst verstehen, warum Kunden unzufrieden sind, dann Maßnahmen ableiten."
    }
  ]
};
