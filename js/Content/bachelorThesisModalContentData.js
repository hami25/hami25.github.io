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

window.BACHELORARBEIT_MODAL_CONTENT = {
  titel: "Bachelorarbeit (WI)",
  sections: [
    {
      title: "Worum geht’s?",
      body:
        "Die Bachelorarbeit zeigt, dass du ein Thema aus der Wirtschaftsinformatik selbstständig, methodisch sauber und nachvollziehbar bearbeiten kannst – typischerweise mit Praxisbezug oder wissenschaftlicher Fragestellung."
    },
    {
      title: "Typische Bestandteile",
      bullets: [
        "Problem-/Fragestellung & Ziel",
        "Stand der Forschung / Grundlagen",
        "Vorgehensmodell / Methode",
        "Umsetzung / Analyse / Evaluation",
        "Ergebnisse, Diskussion, Fazit"
      ]
    },
    {
      title: "Ablauf ",
      bullets: [
        "Thema finden & eingrenzen (Scope!)",
        "Exposé / Gliederung + Zeitplan",
        "Recherche & Grundlagen",
        "Durchführung (Implementierung / Studie / Analyse)",
        "Auswertung & Schreiben",
        "Korrektur / Formalia / Abgabe"
      ]
    },
    {
      title: "Grobe Qualitätskriterien",
      bullets: [
        "Klare Fragestellung und roter Faden",
        "Methodik nachvollziehbar, Quellen sauber",
        "Ergebnisse begründet und kritisch reflektiert",
        "Formalia (Zitation, Abbildungen, Sprache) stimmen"
      ]
    },
    {
      title: "Tipps (die fast immer helfen)",
      bullets: [
        "Scope kleiner machen als du denkst – lieber tief als breit.",
        "Früh schreiben: Einleitung/Grundlagen parallel zur Umsetzung.",
        "Abnahmekriterien definieren: Was ist 'fertig'?",
        "Feedback-Schleifen einplanen (Betreuung, Peer-Review)."
      ]
    }
  ]
};
