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


window.INF_MODAL_CONTENT = {
  titel: "Einführung in die Informatik ",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn dir logisches Denken, strukturiertes Problemlösen und das Verstehen von Systemen Spaß machen, passt Einführung in die Informatik sehr gut zu dir.",

  fragen: [
    {
      frage: "Was erwartest du von Informatik? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ich will lernen, Probleme in klare Schritte zu zerlegen (algorithmisches Denken).",
        "Ich möchte verstehen, wie Computer und Software „unter der Haube“ funktionieren.",
        "Ich finde es spannend, Daten zu strukturieren und Systeme zu bauen.",
        "Ich denke, Informatik ist hauptsächlich Geräte zusammenbauen oder Gaming."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "Informatik bedeutet vor allem: logisch denken, Probleme strukturieren und Lösungen systematisch entwickeln."
    },

    {
      frage: "Was ist ein „Algorithmus“ am ehesten?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems.",
        "Ein spezieller Computerchip.",
        "Ein Bildformat."
      ],
      antwort: 0,
      erklaerung:
        "Ein Algorithmus beschreibt klare Schritte, um ein Problem zu lösen – unabhängig von einer Programmiersprache."
    },

    {
      frage: "Was beschreibt eine „Datenstruktur“ am besten?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Eine Programmiersprache.",
        "Eine Art, Daten organisiert zu speichern und zu verwalten (z. B. Liste, Baum).",
        "Ein Betriebssystem."
      ],
      antwort: 1,
      erklaerung:
        "Datenstrukturen legen fest, wie Daten gespeichert werden, damit man effizient darauf zugreifen kann."
    },

    {
      frage: "Wofür ist „Debugging“ da?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Fehler im Programm finden und beheben.",
        "Programme automatisch schneller machen.",
        "Designs für Apps zeichnen."
      ],
      antwort: 0,
      erklaerung:
        "Debugging bedeutet, Fehler im Code systematisch zu finden und zu korrigieren."
    },

    {
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Algorithmus", "Programm", "Datenstruktur"],
        definitionen: [
          "Schrittfolge, die ein Problem löst (unabhängig von einer konkreten Programmiersprache).",
          "Konkrete Umsetzung/Code, der auf dem Computer ausgeführt werden kann.",
          "Art, Daten zu organisieren (z. B. Liste, Baum), damit Operationen effizient sind."
        ]
      },
      antwort: [
        ["Algorithmus", "Schrittfolge, die ein Problem löst (unabhängig von einer konkreten Programmiersprache)."],
        ["Programm", "Konkrete Umsetzung/Code, der auf dem Computer ausgeführt werden kann."],
        ["Datenstruktur", "Art, Daten zu organisieren (z. B. Liste, Baum), damit Operationen effizient sind."]
      ],
      erklaerung:
        "Algorithmus = Idee/Schritte, Programm = konkrete Umsetzung, Datenstruktur = Ordnung der Daten."
    },

    {
      frage: "Ein Algorithmus ist dasselbe wie ein Programm.",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Richtig", "Falsch"],
      antwort: 1,
      erklaerung:
        "Ein Algorithmus ist die Idee/Lösung – ein Programm ist die konkrete Umsetzung in Code."
    },

    {
      frage:
        "Du sollst eine App bauen, die Termine verwaltet. Es gibt viele Bugs und Chaos im Code. Was ist der sinnvollste erste Schritt?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Einfach mehr Features einbauen – dann fällt es weniger auf.",
        "Problem eingrenzen: reproduzierbaren Fehler finden, Ursachen analysieren, dann gezielt beheben.",
        "Die Farben/Designs ändern – das wirkt professioneller."
      ],
      antwort: 1,
      erklaerung:
        "Informatik startet strukturiert: Problem verstehen, Ursache finden, dann gezielt lösen."
    }
  ]
};
