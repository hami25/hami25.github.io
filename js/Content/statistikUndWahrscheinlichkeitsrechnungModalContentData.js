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

window.STATISTIK_MODAL_CONTENT = {
  titel: "Statistik",
  fragen: [
    {
      typ: "code_inline_dropdown",
      frage: "Welche Bibliothek wird hier importiert?",
      schwierigkeit: "einfach",
      codeKey: "import",
      optionen: ["Nippe", "Numpy", "Nappy"],
      antwort: "Numpy"
    },
    {
      typ: "code_inline_dropdown",
      frage: "Welche Syntax wählt die Werte, die kleiner oder gleich 3 sind?",
      schwierigkeit: "einfach",
      codeKey: "vergleich",
      optionen: ["daten[daten <= 3]", "daten <= 3", "[daten <=3]"],
      antwort: "daten[daten <= 3]"
    },
    {
      typ: "code_inline_dropdown",
      frage: "Welche Bibliothek wird hier importiert?",
      schwierigkeit: "einfach",
      codeKey: "filter",
      optionen: ["pyrod", "panda", "pavida"],
      antwort: "panda"
    },
    {
      typ: "code_inline_dropdown",
      frage: "Wie filtert man im DataFrame nur die jüngste Person?",
      schwierigkeit: "schwer",
      codeKey: "alter",
      optionen: [
        "df.sort_values(\"Alter\").tail(1)",
        "df[df[\"Alter\"] < df[\"Alter\"].max()]",
        "df[\"Alter\"].min()"
      ],
      antwort: "df[\"Alter\"].min()"
    },
    {
      typ: "single_choice",
      frage: "Gegeben ist die Datenreihe: [3, 7, 2, 8, 10] – Was ist der Median?",
      schwierigkeit: "schwer",
      optionen: ["15", "7", "2"],
      antwort: 1
    }
  ]
};
