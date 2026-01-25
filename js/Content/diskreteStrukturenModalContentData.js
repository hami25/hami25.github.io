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

window.DS_MODAL_CONTENT = {
  titel: "Diskrete Strukturen",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn dir Logik, sauberes Denken und abstrakte Begriffe Spaß machen, ist „Diskrete Strukturen“ wahrscheinlich spannend für dich.",

  fragen: [
    {
      frage: "Was macht man in „Diskrete Strukturen“ ungefähr? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Man arbeitet mit Logik, Mengen, Relationen, Graphen & Beweisen.",
        "Man lernt hauptsächlich eine Programmiersprache auswendig.",
        "Man rechnet viel, aber eher „mit Symbolen/Begriffen“ als mit großen Zahlen.",
        "Man macht hauptsächlich UI/UX-Design und gestaltet Oberflächen."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "Diskrete Strukturen ist eher 'Denken mit Regeln': Logik, Mengen, Relationen, Graphen und Beweise – weniger Programmieren, mehr Struktur."
    },

    {
      frage: "Was ist typisch für eine „Menge“ in der Mathematik?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Eine Sammlung von Elementen, bei der die Reihenfolge egal ist.",
        "Ein Programm, das man ausführen kann.",
        "Ein spezieller Datentyp in einer Programmiersprache."
      ],
      antwort: 0,
      erklaerung:
        "Eine Menge ist eine Sammlung von Elementen – die Reihenfolge spielt dabei keine Rolle."
    },

    {
      frage: "Womit beschäftigt sich Graphentheorie typischerweise?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Mit Bildern und Diagramm-Gestaltung.",
        "Mit Knoten und Kanten (z. B. Netzwerke, Wege).",
        "Mit Audio- und Videosignalen."
      ],
      antwort: 1,
      erklaerung:
        "Graphen bestehen aus Knoten und Kanten – z. B. für Netzwerke, Routen und Verbindungen."
    },

    {
      frage: "Wozu braucht man logische Aussagen und Beweise in der Informatik?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Um sicherzustellen, dass Algorithmen korrekt sind.",
        "Nur, um Prüfungen zu bestehen – sonst nie.",
        "Um Farben besser auswählen zu können."
      ],
      antwort: 0,
      erklaerung:
        "Beweise helfen, Korrektheit sicherzustellen – z. B. dass ein Algorithmus wirklich immer funktioniert."
    },

    {
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Menge", "Relation", "Graph"],
        definitionen: [
          "Struktur aus Knoten und Kanten, z. B. für Netze oder Wegsuche.",
          "Zusammenfassung von Elementen, z. B. alle geraden Zahlen.",
          "Verknüpfung von Elementen zweier Mengen, z. B. „ist kleiner als“."
        ]
      },
      antwort: [
        ["Graph", "Struktur aus Knoten und Kanten, z. B. für Netze oder Wegsuche."],
        ["Menge", "Zusammenfassung von Elementen, z. B. alle geraden Zahlen."],
        ["Relation", "Verknüpfung von Elementen zweier Mengen, z. B. „ist kleiner als“."]
      ],
      erklaerung:
        "Menge = Sammlung, Relation = Beziehung zwischen Elementen, Graph = Knoten/Kanten-Struktur."
    },

    {
      frage: "In einer Menge ist die Reihenfolge der Elemente wichtig.",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Richtig", "Falsch"],
      antwort: 1,
      erklaerung:
        "In Mengen ist die Reihenfolge egal: {1,2,3} ist dasselbe wie {3,2,1}."
    },

    {
      frage: "Du willst sicher sein, dass ein Algorithmus wirklich für alle Fälle korrekt ist. Was hilft am meisten?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Viele Tests mit Beispieldaten durchführen",
        "Einen formalen Beweis führen",
        "Den Code schöner strukturieren"
      ],
      antwort: 1,
      erklaerung:
        "Tests sind hilfreich, aber ein formaler Beweis zeigt Korrektheit für alle Fälle."
    }
  ]
};
