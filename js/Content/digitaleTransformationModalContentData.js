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

window.DIGITALE_TRANSFORMATION_MODAL_CONTENT = {
  titel: "Digitale Transformation",
  fragen: [
    {
      frage:
        "Welche der folgenden Komponenten sind Kernbestandteile eines digitalen Geschäftsmodells?",
      optionen: [
        "Transaktion und ihre Wiederholbarkeit",
        "Physische Lagerhaltung",
        "Das digitale System (Anbieter)",
        "Das nachfragende digitale System (Kunde)",
        "Analoge Leistungserbringung",
        "(Digitale) Leistung und Gegenleistung"
      ],
      antwort: [0, 2, 3, 5],
      typ: "multiple_choice",
      schwierigkeit: "mittel",
      erklaerung:
        "Ein digitales Geschäftsmodell basiert auf der Wiederholbarkeit digitaler Transaktionen zwischen dem anbietenden und dem nachfragenden digitalen System. Reine analoge oder physische Komponenten sind keine Kernbestandteile."
    },

    {
      frage:
        "Welche Technologien wirken als Enabler für den digitalen Kundenzugang in der Digitalen Transformation?",
      optionen: [
        "Mobiles Internet und mobile Endgeräte",
        "E-Commerce-Plattformen",
        "Mainframe-Systeme",
        "Soziale Netzwerke und Messenger-Dienste",
        "Analoge Telefonanlagen (POTS)"
      ],
      antwort: [0, 1, 3],
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      erklaerung:
        "Enabler sind Technologien, die den direkten, effizienten und neuen Zugang zum Kunden ermöglichen. Dazu gehören mobile Technologien, spezialisierte Plattformen (E-Commerce) und soziale Kanäle."
    },

    {
      frage: "Ordne die Task-Typen korrekt ihrer Ausführung zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Service-Task", "Benutzer-Task", "Manueller Task"],
        definitionen: [
          "Wird voll automatisch von einem System ausgeführt.",
          "Führt ein menschlicher Bearbeiter per Hand aus (ohne Systemunterstützung).",
          "Führt ein menschlicher Bearbeiter in Interaktion mit einem unterstützenden System aus."
        ]
      },
      antwort: [
        ["Service-Task", "Wird voll automatisch von einem System ausgeführt."],
        [
          "Manueller Task",
          "Führt ein menschlicher Bearbeiter per Hand aus (ohne Systemunterstützung)."
        ],
        [
          "Benutzer-Task",
          "Führt ein menschlicher Bearbeiter in Interaktion mit einem unterstützenden System aus."
        ]
      ],
      erklaerung:
        "Die Unterscheidung ist zentral für die Prozessautomatisierung: Service ist vollautomatisch, Benutzer ist halb-automatisch/interaktiv, Manuell ist nicht unterstützt."
    },

    {
      frage:
        "Warum ist die Vernetzung mit Kunden und Partnern ein zentraler Erfolgsfaktor für neue digitale Geschäftsmodelle?",
      optionen: [
        "Sie reduziert die Notwendigkeit von Software-Updates.",
        "Sie steigert die Kapitalrendite (ROI) direkt um mindestens 20%.",
        "Sie ermöglicht das Schaffen von Effizienz- und Qualitätsgewinnen sowie die Erweiterung des eigenen Leistungsangebots durch Kooperation.",
        "Sie vereinfacht die Einhaltung globaler Datenschutzbestimmungen."
      ],
      antwort: 2,
      typ: "single_choice",
      schwierigkeit: "mittel",
      erklaerung:
        "Die Vernetzung ermöglicht es Unternehmen, über die eigenen Grenzen hinaus Wert zu schaffen (Ökosysteme), Prozesse zu optimieren (Effizienz) und neue Angebote durch Daten- und Leistungsaustausch zu generieren (Qualitätsgewinne/Erweiterung)."
    },

    {
      frage:
        "Vervollständigen Sie die Schritte eines grundlegenden Business Process Management (BPM) Prozesses.",
      typ: "lueckentext_auswahl",
      schwierigkeit: "mittel",
      text:
        "Der BPM-Zyklus beginnt mit der [LUECKE1] des Prozesses, gefolgt von der [LUECKE2] in IT-Systemen, der Überwachung (Monitoring) und der abschließenden [LUECKE3] zur kontinuierlichen Verbesserung.",
      optionen: [
        "Design",
        "Implementierung",
        "Kontinuierliche Verbesserung",
        "Strategische Planung",
        "Outsourcing"
      ],
      antwort: ["Design", "Implementierung", "Kontinuierliche Verbesserung"],
      erklaerung:
        "Der BPM-Zyklus ist ein geschlossener Regelkreis, der mit der Planung (Design) beginnt, über die Ausführung (Implementierung) läuft und mit der Optimierung (Verbesserung) endet."
    }
  ]
};
