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

window.PORTFOLIO_WI_MODAL_CONTENT = {
  titel: "Portfolio Wirtschaftsinformatik",
  sections: [
    {
      title: "Was ist das für ein Modul?",
      body:
        "Im Modul „Portfolio Wirtschaftsinformatik“ arbeitest du selbstständig an einem oder mehreren Themen, die zu deinen Interessen im Studium passen. Es geht nicht um eine klassische Klausur, sondern darum zu zeigen, was du kannst und wofür du dich besonders interessierst."
    },
    {
      title: "Was macht man konkret?",
      bullets: [
        "Du wählst einen Schwerpunkt, z. B. Digitalisierung, IT-Systeme, Prozesse oder Daten.",
        "Du arbeitest über das Semester hinweg an eigenen Aufgaben oder Projekten.",
        "Du sammelst Ergebnisse wie Texte, Konzepte, Analysen, Modelle oder kleine Prototypen.",
        "Am Ende stellst du diese Ergebnisse strukturiert als „Portfolio“ zusammen."
      ]
    },
    {
      title: "Warum gibt es kein festes Thema?",
      body:
        "Das Modul ist bewusst offen gestaltet. So kannst du deine persönlichen Stärken ausbauen und eigene Interessen vertiefen – je nachdem, ob du eher technisch, organisatorisch oder analytisch arbeiten möchtest."
    },
    {
      title: "Was lernt man dabei?",
      bullets: [
        "Selbstständig arbeiten und Zeit gut einteilen.",
        "Eigene Ideen strukturieren und umsetzen.",
        "Komplexe Themen verständlich darstellen.",
        "Reflektieren, was man gelernt hat und warum es relevant ist."
      ]
    },
    {
      title: "Was sollte man erwarten?",
      bullets: [
        "Viel Eigenverantwortung statt wöchentlicher Vorlesungen.",
        "Freiraum bei der Themenwahl, aber auch Planung nötig.",
        "Ein Modul, das gut zur Vorbereitung auf Bachelorarbeit und Beruf passt."
      ]
    }
  ]
};

