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

window.INNOVATIONSMANAGEMENT_MODAL_CONTENT = {
  titel: "Innovationsmanagement",
  fragen: [
    {
      typ: "single_choice",
      frage: "Was ist eine typische Eigenschaft von SCRUM?",
      schwierigkeit: "einfach",
      optionen: [
        "Fokus auf Nutzerbedürfnisse durch Prototypen",
        "Kurze Iterationen und Feedbackschleifen",
        "Schnelle Validierung von Geschäftsideen durch Experimente"
      ],
      antwort: 1
    },
    {
      typ: "single_choice",
      frage: "Welche Aussage trifft nicht auf ein Backlog zu?",
      schwierigkeit: "einfach",
      optionen: [
        "Enthält alle Ideen und Aufgaben",
        "Bleibt nach Erstellung unverändert",
        "Ist nach Priorität geordnet"
      ],
      antwort: 1
    },
    {
      typ: "single_choice",
      frage: "Was ist der Unterschied zwischen inkrementeller und radikaler Innovation?",
      schwierigkeit: "einfach",
      optionen: [
        "Inkrementell bezieht sich auf Dokumentation, radikal auf Meetings",
        "Inkrementell bedeutet Marketinganpassung, radikal Prozessänderungen",
        "Inkrementell verbessert bestehende Produkte, radikal bringt neue Ideen auf den Markt"
      ],
      antwort: 2
    },
    {
      typ: "single_choice",
      frage: "Welche Kennzahl wird oft zur Bewertung von Innovationsprojekten genutzt?",
      schwierigkeit: "schwer",
      optionen: ["Return on Innovation (ROI)", "Bilanzsumme", "Mitarbeiterzahl"],
      antwort: 0
    },
    {
      typ: "single_choice",
      frage: "Welche Aussage passt zum Kaizen-Prinzip?",
      schwierigkeit: "schwer",
      optionen: [
        "Verbesserungen erfolgen kontinuierlich und schrittweise",
        "Innovation erfolgt einmalig und radikal",
        "Neue Produkte werden zuerst am Markt getestet, bevor sie entwickelt werden"
      ],
      antwort: 0
    }
  ]
};

