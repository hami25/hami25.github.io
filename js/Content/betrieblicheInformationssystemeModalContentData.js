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

window.BETRIEBLICHE_INFORMATIONSSYSTEME_MODAL_CONTENT = {
  titel: " Betriebliche Informationssysteme",
  fragen: [
    {
      typ: "dragdrop",
      frage: "Was bedeutet die Abkürzung ETL im Datenmanagement?",
      schwierigkeit: "einfach",
      dropText: "Ziehe hier die passenden Begriffe hinein",
      begriffe: ["Extract", "Transform", "Encode", "Transfer", "Link", "Translate", "Load"],
      antwort: [0, 1, 6]
    },
    {
      typ: "single_choice",
      frage: "Was kann man NICHT in SAP HANA mit Queries erstellen?",
      schwierigkeit: "einfach",
      optionen: [
        "Grafikdesign für Benutzeroberflächen",
        "Tabellenabfragen zur Datenanalyse",
        "Aggregierte Kennzahlen"
      ],
      antwort: 0
    },
    {
      typ: "dragdrop",
      frage: "In der richtigen Reihenfolge auflisten",
      schwierigkeit: "einfach",
      dropText: "Ziehe hier die Phasen in die richtige Reihenfolge",
      begriffe: ["Sprint Planning", "Daily Scrum", "Sprint-Review", "Sprint-Retrospektive"],
      loesung: [0, 1, 2, 3]
    },
    {
      typ: "single_choice",
      frage: "Was kann man NICHT in SAP HANA mit Queries erstellen?",
      schwierigkeit: "schwer",
      optionen: [
        "Grafikdesign für Benutzeroberflächen",
        "Tabellenabfragen zur Datenanalyse",
        "Aggregierte Kennzahlen"
      ],
      antwort: 0
    },
    {
      typ: "single_choice",
      frage: "Welche Aufgabe gehört NICHT zur Datenbereinigung?",
      schwierigkeit: "schwer",
      optionen: [
        "Duplikate in Datensätzen entfernen",
        "Fehlerhafte Werte korrigieren",
        "Analysen durchführen"
      ],
      antwort: 2
    }
  ]
};
