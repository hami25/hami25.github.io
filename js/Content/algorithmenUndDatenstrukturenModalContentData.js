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

window.ALGORITHMEN_DATENSTRUKTUREN_MODAL_CONTENT = {
  titel: "Algorithmen & Datenstrukturen",
  fragen: [
    {
      typ: "single_choice",
      frage: "Welcher Code gibt null zurück, wenn die Liste so aussieht?",
      schwierigkeit: "einfach",
      linkedNode: [{ wert: 1 }, { wert: 3 }, { wert: 5 }, { wert: 7 }],
      optionen: [
        "node1.next.next.next.next",
        "node2.next.next",
        "node1.next"
      ],
      antwort: 0
    },
    {
      typ: "single_choice",
      frage: "Was enthält ein Node in einer verketteten Liste?",
      schwierigkeit: "einfach",
      optionen: [
        "Nur einen Wert",
        "Einen Wert und einen Zeiger auf das nächste Element",
        "Einen Wert und einen Zeiger auf das vorherige Element"
      ],
      antwort: 1
    },
    {
      typ: "single_choice",
      frage: "Welcher Sortieralgorithmus wird hier dargestellt?",
      schwierigkeit: "einfach",
      bubbleSort: true,
      optionen: ["Bubble Sort", "Merge Sort", "Quick Sort"],
      antwort: 0
    },
    {
      typ: "single_choice",
      frage: "Was ist eine typische Eigenschaft des BubbleSort?",
      schwierigkeit: "schwierig",
      bubbleSort: true,
      optionen: [
        "Vergleicht Elemente, um das kleinste zu finden",
        "Vergleicht Elemente basierend auf dem Pivot",
        "Nur benachbarte Elemente werden verglichen"
      ],
      antwort: 2
    },
    {
      typ: "single_choice",
      frage: "Welche Datenstruktur arbeitet nach dem Prinzip 'First In, First Out'?",
      schwierigkeit: "schwierig",
      optionen: ["Stack", "Queue", "Array"],
      antwort: 1
    }
  ]
};







