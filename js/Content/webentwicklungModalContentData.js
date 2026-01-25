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

window.WEBENTWICKLUNG_MODAL_CONTENT = {
  titel: "Webentwicklung",

  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn du gerne gestaltest, logisch denkst und direkt sichtbare Ergebnisse magst, ist Webentwicklung sehr gut für dich geeignet.",

  fragen: [
    {
      frage: "Worum geht es in der Webentwicklung? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Webseiten mit HTML strukturieren und mit CSS gestalten.",
        "Nur Backend-Programmierung ohne Nutzeroberfläche.",
        "Interaktive Funktionen mit JavaScript umsetzen.",
        "Ausschließlich Grafikdesign ohne Code."
      ],
      antwort: [],
      scored: false
    },


    {
      frage: "Welche Sprache wird primär für die Struktur einer Webseite verwendet?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["CSS", "HTML", "PHP", "JavaScript"],
      antwort: 1
    },
    {
      frage: "Was bewirkt die CSS-Eigenschaft 'margin: auto;' bei einem Element mit fester Breite?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Es wird unsichtbar", "Es wird links ausgerichtet", "Es wird horizontal zentriert"],
      antwort: 2
    },
    {
      frage: "Welches JavaScript-Schlüsselwort wird verwendet, um eine Konstante zu deklarieren?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["var", "let", "const"],
      antwort: 2
    },
    {
      frage: "Was ist ein 'Closure' in JavaScript?",
      typ: "single_choice",
      schwierigkeit: "schwer",
      optionen: [
        "Ein HTML-End-Tag",
        "Eine Funktion, die Zugriff auf ihren äußeren Gültigkeitsbereich behält",
        "Das Schließen einer Datenbankverbindung"
      ],
      antwort: 1
    },
    {
      frage: "Was beschreibt das 'Event Bubbling'?",
      typ: "single_choice",
      schwierigkeit: "schwer",
      optionen: [
        "Das Löschen von Events",
        "Ein Event steigt vom Ziel-Element durch seine Eltern-Elemente nach oben",
        "Das gleichzeitige Auslösen aller Events"
      ],
      antwort: 1
    },

    {
      frage: "Ordne die Begriffe korrekt zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["HTML", "CSS", "JavaScript"],
        definitionen: [
          "Beschreibt Aufbau und Struktur einer Webseite.",
          "Gestaltet Layout, Farben und Abstände.",
          "Macht Webseiten interaktiv."
        ]
      },
      antwort: [
        ["HTML", "Beschreibt Aufbau und Struktur einer Webseite."],
        ["CSS", "Gestaltet Layout, Farben und Abstände."],
        ["JavaScript", "Macht Webseiten interaktiv."]
      ]
    }
  ]
};
