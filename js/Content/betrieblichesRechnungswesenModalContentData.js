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

window.RECHNUNGSWESEN_MODAL_CONTENT = {
  titel: "Betriebliches Rechnungswesen",
  fragen: [
    {
      frage: "Wie lautet der Grundsatz der doppelten Buchführung?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Soll an Haben", "Haben an Soll", "Gewinn an Verlust", "Umsatz an Kosten"],
      antwort: 0
    },
    {
      frage: "Wie lautet die grundlegende Bilanzgleichung?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Umsatz = Gewinn", "Aktiva = Passiva", "Kosten = Erlöse", "Vermögen = Ausgaben"],
      antwort: 1
    },
    {
      frage: "Mini-Aufgabe: Wo würdest du „Bankguthaben“ in der Bilanz einordnen?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Auf die Aktivseite (Vermögen)",
        "Auf die Passivseite (Eigenkapital/Schulden)",
        "In die GuV (Ertrag)",
        "In ein BPMN-Diagramm"
      ],
      antwort: 0
    },
    {
      frage: "Was zeigt die GuV (Gewinn- und Verlustrechnung)?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Aufwand und Ertrag eines Zeitraums (zur Ermittlung des Gewinns/Verlusts)",
        "Nur das Vermögen am Stichtag",
        "Nur die offenen Rechnungen",
        "Nur die Steuerlast"
      ],
      antwort: 0
    },
    {
      frage: "Was passiert mit dem Jahresgewinn (vereinfacht), wenn er nicht ausgeschüttet wird?",
      typ: "single_choice",
      schwierigkeit: "schwer",
      optionen: [
        "Er erhöht das Eigenkapital",
        "Er wird automatisch zu Schulden",
        "Er verschwindet nach Jahresende",
        "Er wird immer bar ausgezahlt"
      ],
      antwort: 0
    }
  ]
};
