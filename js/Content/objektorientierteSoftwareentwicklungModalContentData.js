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

window.OO_MODAL_CONTENT = {
  titel: "Objektorientierte Softwareentwicklung",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn du Lust hast, Software strukturiert zu modellieren und verständlich aufzubauen, ist Objektorientierte Softwareentwicklung sehr wahrscheinlich ein gutes Match.",

  fragen: [

    {
      frage: "Was erwartest du von Objektorientierung? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ich möchte Software so strukturieren, dass sie gut wartbar und erweiterbar ist.",
        "Ich finde es spannend, reale Dinge als „Objekte“ zu modellieren (z. B. Nutzer, Bestellung, Konto).",
        "Ich will verstehen, wie Klassen, Methoden und Beziehungen zusammenhängen.",
        "Ich denke, OO heißt nur: überall Vererbung benutzen."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "OO heißt vor allem: Struktur, Modelle und saubere Zuständigkeiten – Vererbung ist nur ein Werkzeug (und nicht immer die beste Lösung)."
    },


    {
      frage: "Was ist eine „Klasse“ am ehesten?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein Bauplan/Template für Objekte.",
        "Ein konkretes Ding zur Laufzeit (z. B. genau dieser User).",
        "Eine Datei im Betriebssystem."
      ],
      antwort: 0,
      erklaerung:
        "Eine Klasse ist wie ein Bauplan: Sie beschreibt, welche Daten und Funktionen Objekte später haben."
    },


    {
      frage: "Was ist ein „Objekt“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein allgemeines Konzept ohne konkrete Werte.",
        "Eine konkrete Instanz einer Klasse (mit Daten/Zustand).",
        "Nur ein anderer Name für eine Methode."
      ],
      antwort: 1,
      erklaerung:
        "Ein Objekt ist eine konkrete Instanz: z. B. der Nutzer „Max“ mit echten Werten (Name, ID, …)."
    },


    {
      frage: "Was beschreibt „Kapselung (Encapsulation)“ am besten?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Alles ist überall öffentlich zugreifbar.",
        "Daten und Verhalten gehören zusammen, Details werden verborgen und über Methoden genutzt.",
        "Man darf keine Objekte erzeugen."
      ],
      antwort: 1,
      erklaerung:
        "Kapselung bedeutet: Internes verstecken und über klare Methoden zugänglich machen – das schützt vor Fehlern."
    },


    {
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Klasse", "Objekt", "Vererbung"],
        definitionen: [
          "Bauplan, der festlegt, welche Daten/Funktionen ein Typ hat.",
          "Konkrete Instanz einer Klasse (mit Zustand/Werten).",
          "Beziehung „ist-ein“: Eine Unterklasse übernimmt Eigenschaften/Methoden der Oberklasse."
        ]
      },
      antwort: [
        ["Klasse", "Bauplan, der festlegt, welche Daten/Funktionen ein Typ hat."],
        ["Objekt", "Konkrete Instanz einer Klasse (mit Zustand/Werten)."],
        ["Vererbung", "Beziehung „ist-ein“: Eine Unterklasse übernimmt Eigenschaften/Methoden der Oberklasse."]
      ],
      erklaerung:
        "Klasse = Bauplan, Objekt = konkretes Exemplar, Vererbung = Spezialisierung (ist-ein)."
    },


    {
      frage: "Vererbung ist immer die beste Lösung, um Code wiederzuverwenden.",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: ["Richtig", "Falsch"],
      antwort: 1,
      erklaerung:
        "Oft ist Komposition (zusammensetzen) besser als Vererbung. Vererbung kann auch unnötige Abhängigkeiten erzeugen."
    },


    {
      frage:
        "Du baust eine App für eine Bibliothek. Nutzer können Bücher ausleihen und zurückgeben. Was wäre eine sinnvolle OO-Modellierung?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Alles in eine große Klasse „App“ schreiben, damit man nur eine Datei hat.",
        "Klassen wie „Buch“, „Nutzer“ und „Ausleihe“ mit passenden Methoden (z. B. ausleihen(), zurückgeben()).",
        "Nur Funktionen ohne Daten verwenden, weil Daten in OO stören."
      ],
      antwort: 1,
      erklaerung:
        "OO-Modellierung heißt: reale Dinge als Klassen/Objekte abbilden und Verantwortlichkeiten sauber trennen."
    }
  ]
};
