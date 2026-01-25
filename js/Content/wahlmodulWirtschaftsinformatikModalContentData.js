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

window.WAHLMODUL_WI_MODAL_CONTENT = {
  titel: "Wahlmodul Wirtschaftsinformatik",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn dich IT-Systeme, Cloud-Lösungen und deren Einsatz im Unternehmen interessieren, passt das WI-Wahlmodul sehr gut zu dir.",

  fragen: [
    {
      frage: "Worum geht es im WI-Wahlmodul? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Man beschäftigt sich mit Cloud, IT-Services und digitalen Plattformen.",
        "Man programmiert ausschließlich Algorithmen auf Papier.",
        "IT-Lösungen werden aus einer wirtschaftlichen Perspektive betrachtet.",
        "Es geht nur um Hardware-Reparatur."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "Im Wahlmodul geht es typischerweise um IT-Systeme im Unternehmen – z. B. Cloud, IT-Services, Schnittstellen und deren Nutzen."
    },

    {
      frage: "Wofür steht die Abkürzung „SaaS“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Software as a Service",
        "System and Application Support",
        "Storage as a Solution"
      ],
      antwort: 0,
      erklaerung:
        "SaaS bedeutet „Software as a Service“: Software wird als Dienst über das Internet genutzt."
    },

    {
      frage: "Was ist der Hauptvorteil von Cloud-Infrastrukturen?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Man braucht kein Internet",
        "Skalierbarkeit und Flexibilität",
        "Es ist immer kostenlos"
      ],
      antwort: 1,
      erklaerung:
        "Cloud-Infrastrukturen lassen sich flexibel anpassen: mehr oder weniger Ressourcen je nach Bedarf."
    },

    {
      frage: "Was ist eine „API“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein Antiviren-Programm",
        "Eine Schnittstelle zur Kommunikation zwischen Programmen",
        "Ein spezielles Grafikformat"
      ],
      antwort: 1,
      erklaerung:
        "APIs sind Schnittstellen, mit denen Software-Systeme miteinander kommunizieren können."
    },

    {
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Cloud", "API", "IT-Service"],
        definitionen: [
          "Flexible IT-Ressourcen, die über das Internet bereitgestellt werden.",
          "Schnittstelle zur Kommunikation zwischen Softwaresystemen.",
          "Bereitgestellte IT-Leistung für Nutzer oder Unternehmen."
        ]
      },
      antwort: [
        ["Cloud", "Flexible IT-Ressourcen, die über das Internet bereitgestellt werden."],
        ["API", "Schnittstelle zur Kommunikation zwischen Softwaresystemen."],
        ["IT-Service", "Bereitgestellte IT-Leistung für Nutzer oder Unternehmen."]
      ],
      erklaerung:
        "Cloud beschreibt bereitgestellte Ressourcen, APIs verbinden Systeme, und IT-Services sind Leistungen für Nutzer/Unternehmen."
    },

    {
      frage: "Cloud-Systeme lassen sich flexibel an steigende Nutzerzahlen anpassen.",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Richtig", "Falsch"],
      antwort: 0,
      erklaerung:
        "Das ist einer der Hauptvorteile: Cloud ist skalierbar (hoch/runter je nach Bedarf)."
    },

    {
      frage:
        "Ein Unternehmen will schnell neue Serverkapazitäten bereitstellen. Was ist am sinnvollsten?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Neue Hardware kaufen",
        "Cloud-Ressourcen flexibel hinzubuchen",
        "Die Anwendung offline betreiben"
      ],
      antwort: 1,
      erklaerung:
        "Cloud-Ressourcen lassen sich kurzfristig skalieren, ohne erst Hardware zu beschaffen und aufzubauen."
    }
  ]
};

