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

window.WIRTSCHAFTSMATHEMATIK_MODAL_CONTENT = {
  titel: "Wirtschaftsmathematik",
  fragen: [
    {
      frage: "Was bedeutet der Grenzwert einer Folge ganz grob?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Der Wert, dem sich die Folge für sehr große n annähert",
        "Immer der erste Wert der Folge",
        "Die Summe aller Werte der Folge",
        "Die Anzahl der Werte der Folge"
      ],
      antwort: 0
    },
    {
      frage: "Was beschreibt die Ableitung f'(x) an einer Stelle am besten?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Die Steigung / Änderungsrate",
        "Die Fläche unter dem Graphen",
        "Die Anzahl der Werte",
        "Den größten Tabellenwert"
      ],
      antwort: 0
    },
    {
      frage: "Wofür steht ein bestimmtes Integral ∫_a^b f(x) dx oft?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Für eine aufsummierte Größe zwischen a und b (z. B. Fläche)",
        "Für die Steigung von f bei a",
        "Für den größten Funktionswert",
        "Für die Nullstellen der Funktion"
      ],
      antwort: 0
    },
    {
      frage: "Mini-Aufgabe (Analytische Geometrie): Wie schreibt man den Punkt P(2,3) als Spaltenvektor?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: ["[2 3]", "(2,3)", "[[2],[3]]", "[3;2]"],
      antwort: 2
    },
    {
      frage: "Bei linearer Optimierung liegt ein Optimum häufig …",
      typ: "single_choice",
      schwierigkeit: "schwer",
      optionen: [
        "… an einem Eckpunkt des zulässigen Bereichs",
        "… immer genau in der Mitte",
        "… immer bei x = 0",
        "… nur, wenn es keine Nebenbedingungen gibt"
      ],
      antwort: 0
    }
  ]
};
