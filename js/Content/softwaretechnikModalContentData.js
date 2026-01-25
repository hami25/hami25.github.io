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

window.SOFTWARETECHNIK_MODAL_CONTENT = {
  titel: "Softwaretechnik",
  fragen: [
    {
      typ: "single_choice",
      frage: "Welche Eigenschaft ist geschützt?",
      schwierigkeit: "einfach",
      diagramm: true,
      optionen: ["note = 4.0", "vorname = Anna", "alter = 20"],
      antwort: 0
    },
    {
      typ: "single_choice",
      frage: "Welches Merkmal beschreibt NICHT ein Objektdiagramm?",
      schwierigkeit: "einfach",
      diagramm: true,
      optionen: [
        "Zeigt konkrete Objekte einer Klasse und deren Attributwerte",
        "Zeigt die Sichtbarkeit von Attributen (+, -, #)",
        "Stellt Instanzen einer Klasse in einem bestimmten Zustand dar"
      ],
      antwort: 1
    },
    {
      typ: "single_choice",
      frage: "Wofür eignen sich Zustandsautomaten in der Analysephase?",
      schwierigkeit: "einfach",
      optionen: [
        "Zum Festlegen der endgültigen Benutzeroberfläche",
        "Zur Analyse potenzieller Zustände eines Systems",
        "Zur Dokumentation von Datenbanken"
      ],
      antwort: 1
    },
    {
      typ: "single_choice",
      frage: "Welche Aufgabe gehört zur Wartung und Pflege von Software?",
      schwierigkeit: "schwer",
      optionen: [
        "Analyse der Kundenanforderungen",
        "Erstellung des Grobenwurfs",
        "Beheben von Fehlern und Umsetzung von Änderungswünschen"
      ],
      antwort: 2
    },
    {
      typ: "single_choice",
      frage: "Wofür bildet das Token-Konzept die Grundlage?",
      schwierigkeit: "schwer",
      optionen: [
        "Für die Benutzeroberfläche von Software",
        "Für die Semantik von Aktivitätsdiagrammen",
        "Für die Berechnung von Serverkosten"
      ],
      antwort: 1
    }
  ]
};
