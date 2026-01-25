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

window.AGILES_PM_MODAL_CONTENT = {
  titel: "Agiles Projektmanagement",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn du gerne im Team arbeitest, kurze Feedback-Schleifen magst und flexibel auf Veränderungen reagieren willst, passt agiles Projektmanagement sehr gut zu dir.",

  fragen: [
    {
      frage: "Worum geht es im agilen Projektmanagement? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Man arbeitet iterativ in kurzen Zyklen (z. B. Sprints) und verbessert sich kontinuierlich.",
        "Man plant am Anfang alles bis ins Detail und ändert danach nichts mehr.",
        "Transparenz und regelmäßige Abstimmungen im Team sind zentral.",
        "Es geht hauptsächlich um Einzelarbeit ohne Teamkommunikation."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "Agiles Projektmanagement setzt auf kurze Zyklen, Teamarbeit und regelmäßiges Feedback statt starrer Langzeitplanung."
    },

    {
      frage: "Wie lang ist ein typischer „Sprint“ in Scrum?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "1 Jahr",
        "1 Tag",
        "1 bis 4 Wochen"
      ],
      antwort: 2,
      erklaerung:
        "Ein Sprint dauert meist zwischen einer und vier Wochen und hat ein klares Ziel."
    },

    {
      frage: "Wer ist im Scrum-Team für die Maximierung des Produktwerts verantwortlich?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Scrum Master",
        "Product Owner",
        "Entwicklerteam"
      ],
      antwort: 1,
      erklaerung:
        "Der Product Owner priorisiert Anforderungen und verantwortet den Produktwert."
    },

    {
      frage: "Was ist das „Daily Scrum“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein 15-minütiges Abstimmungs-Meeting im Team",
        "Ein langes Protokoll-Meeting",
        "Das gemeinsame Mittagessen"
      ],
      antwort: 0,
      erklaerung:
        "Das Daily Scrum ist ein kurzes tägliches Meeting zur Abstimmung im Team."
    },

    {
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Sprint", "Product Owner", "Daily Scrum"],
        definitionen: [
          "Kurzer Arbeitszyklus mit festem Zeitraum und klarem Ziel.",
          "Rolle, die Prioritäten setzt und den Produktwert maximiert.",
          "Kurzes tägliches Team-Meeting zur Abstimmung."
        ]
      },
      antwort: [
        ["Sprint", "Kurzer Arbeitszyklus mit festem Zeitraum und klarem Ziel."],
        ["Product Owner", "Rolle, die Prioritäten setzt und den Produktwert maximiert."],
        ["Daily Scrum", "Kurzes tägliches Team-Meeting zur Abstimmung."]
      ],
      erklaerung:
        "Sprint = Arbeitszyklus, Product Owner = Wertverantwortung, Daily Scrum = tägliche Abstimmung."
    },

    {
      frage: "In Scrum hilft ein Burndown Chart, die verbleibende Arbeit im Zeitverlauf sichtbar zu machen.",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Richtig", "Falsch"],
      antwort: 0,
      erklaerung:
        "Ein Burndown Chart zeigt, wie viel Arbeit im Sprint noch übrig ist."
    },

    {
      frage:
        "Das Team will sich täglich kurz abstimmen, was ansteht und ob es Hindernisse gibt. Was ist am sinnvollsten?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Daily Scrum",
        "Eine jährliche Planungssitzung",
        "Ein langes Status-Meeting von mehreren Stunden"
      ],
      antwort: 0,
      erklaerung:
        "Für tägliche Abstimmung ist das Daily Scrum genau dafür gedacht."
    }
  ]
};
