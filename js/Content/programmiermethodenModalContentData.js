
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

window.PROGRAMMIERMETHODEN_MODAL_CONTENT = {
  titel: "Programmiermethoden",
  fragen: [
    {
      frage: "Was bedeutet „Clean Code“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Code, der automatisch Viren entfernt",
        "Code, der gut lesbar und wartbar ist",
        "Code ohne Leerzeichen",
        "Code, der nur mit Kommentaren funktioniert"
      ],
      antwort: 1
    },
    {
      frage: "Wozu dienen Unit-Tests?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Um Daten in einer Datenbank zu speichern",
        "Um einzelne Funktionen/Methoden automatisch zu prüfen",
        "Um Webseiten zu gestalten",
        "Um Passwörter zu verschlüsseln"
      ],
      antwort: 1
    },
    {
      frage: "Mini-Aufgabe: Du siehst denselben Codeblock an drei Stellen im Projekt. Was ist eine sinnvolle Verbesserung?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Den Code dreimal kopieren, damit alles 'gleich' bleibt",
        "Eine Funktion/Methode daraus machen und wiederverwenden (Refactoring)",
        "Alles in eine riesige Klasse packen",
        "Nichts ändern – doppelt hält besser"
      ],
      antwort: 1
    },
    {
      frage: "Was ist ein „Design Pattern“ (Entwurfsmuster)?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Ein schickes Layout für Apps",
        "Eine wiederverwendbare Lösung für ein häufiges Entwurfsproblem",
        "Ein Fehler im Code",
        "Eine Datenbanktabelle"
      ],
      antwort: 1
    },
    {
      frage: "Das „Single Responsibility Principle“ sagt grob:",
      typ: "single_choice",
      schwierigkeit: "schwer",
      optionen: [
        "Eine Klasse/Funktion sollte nur einen klaren Verantwortungsbereich haben",
        "Eine Klasse sollte alles können, dann ist es einfacher",
        "Es darf nur eine Datei im Projekt geben",
        "Methoden müssen immer genau 3 Zeilen haben"
      ],
      antwort: 0
    }
  ]
};
