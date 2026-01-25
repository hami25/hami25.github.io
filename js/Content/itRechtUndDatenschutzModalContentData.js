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

window.IT_RECHT_MODAL_CONTENT = {
  titel: "IT-Recht ",
  fragen: [
    {
      frage: "Vervollständigen Sie den Satz zum Hauptziel der DSGVO.",
      typ: "lueckentext",
      schwierigkeit: "einfach",
      text:
        "Das Hauptziel der DSGVO ist die [LUECKE1] der Datenschutzbestimmungen in der EU und der [LUECKE2] natürlicher Personen bei der Verarbeitung ihrer [LUECKE3].",
      optionen: ["Vereinheitlichung", "Schutz", "Daten", "Regulierung", "Gesetze"],
      antwort: ["Vereinheitlichung", "Schutz", "Daten"],
      erklaerung:
        "Die DSGVO sorgt für einheitliche Regeln in der gesamten EU, um die Kontrolle über personenbezogene Daten zu gewährleisten."
    },

    {
      frage:
        "Ordnen Sie die Rechte aus der DSGVO der korrekten Begrifflichkeit zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      hinweis: "Die Rechte von betroffenen Personen sind zentral im IT-Recht.",
      items: {
        begriffe: [
          "Daten an einen anderen Anbieter übertragen",
          "Auskunft über gespeicherte Daten erhalten",
          "Fordern, dass gespeicherte Daten gelöscht werden"
        ],
        definitionen: [
          "Recht auf Löschung",
          "Recht auf Datenübertragbarkeit",
          "Recht auf Auskunft"
        ]
      },
      antwort: [
        ["Daten an einen anderen Anbieter übertragen", "Recht auf Datenübertragbarkeit"],
        ["Auskunft über gespeicherte Daten erhalten", "Recht auf Auskunft"],
        ["Fordern, dass gespeicherte Daten gelöscht werden", "Recht auf Löschung"]
      ],
      erklaerung:
        "Betroffene Personen haben umfassende Rechte, um Kontrolle darüber zu behalten, wer welche ihrer Daten speichert und verarbeitet."
    },

    {
      frage: "Was regelt das 'Urheberrecht' in Bezug auf Software?",
      optionen: [
        "Die Haftung bei Fehlfunktionen.",
        "Den Schutz des Quellcodes als Sprachwerk des Programmierers.",
        "Die Lizenzgebühren für Hardware."
      ],
      antwort: 1,
      typ: "single_choice",
      schwierigkeit: "mittel",
      erklaerung:
        "In Deutschland wird der Quellcode einer Software als individuelles geistiges Schaffen betrachtet und ist daher als 'Sprachwerk' urheberrechtlich geschützt."
    },

    {
      frage:
        "Bringen Sie die folgenden legalen Grundlagen für die Datenverarbeitung nach Art. 6 DSGVO in die alphabetische Reihenfolge.",
      typ: "sortierung",
      schwierigkeit: "schwer",
      items: [
        "Die betroffene Person hat eingewilligt.",
        "Die Verarbeitung ist zur Erfüllung eines Vertrages notwendig.",
        "Die Verarbeitung ist zur Wahrung berechtigter Interessen des Verantwortlichen erforderlich."
      ],
      antwort: [
        "Die betroffene Person hat eingewilligt.",
        "Die Verarbeitung ist zur Wahrung berechtigter Interessen des Verantwortlichen erforderlich.",
        "Die Verarbeitung ist zur Erfüllung eines Vertrages notwendig."
      ],
      erklaerung:
        "Die drei hier genannten Rechtsgrundlagen sind die gängigsten für die Datenverarbeitung. Ohne eine solche Grundlage ist die Verarbeitung unzulässig."
    },

    {
      frage:
        "Welche der folgenden Maßnahmen dienen der IT-Sicherheit und der Erfüllung datenschutzrechtlicher Vorgaben?",
      optionen: [
        "Regelmäßige Sicherheitsschulungen für Mitarbeiter",
        "Einsatz von Verschlüsselungstechnologien",
        "Zugriffskontrollen (z.B. Zwei-Faktor-Authentifizierung)",
        "Veröffentlichung aller Passwörter im Intranet"
      ],
      antwort: [0, 1, 2],
      typ: "multiple_choice",
      schwierigkeit: "schwer",
      hinweis: "Denken Sie an organisatorische und technische Maßnahmen (Art. 32 DSGVO)."
    }
  ]
};
