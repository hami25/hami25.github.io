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

window.INTERNATIONALISIERUNG_MODAL_CONTENT = {
  titel: "Wahlmodul Internationalisierung ",
  sections: [
    {
      title: "Worum geht es im Wahlmodul Internationalisierung?",
      body:
        "Das Wahlmodul Internationalisierung bietet dir die Möglichkeit, internationale Aspekte der Wirtschaftsinformatik kennenzulernen – z. B. durch englischsprachige Lehrveranstaltungen, interkulturelle Inhalte oder ein Auslandssemester an einer Partnerhochschule."
    },
    {
      title: "Typische Ausprägungen (abhängig vom Angebot)",
      bullets: [
        "Englischsprachige WI- oder BWL-Module an der HSRM",
        "Auslandssemester an einer Partnerhochschule",
        "Internationale Projekt- oder Fallstudienmodule",
        "Module mit interkulturellem oder globalem Fokus"
      ]
    },
    {
      title: "Was bringt dir das fachlich?",
      bullets: [
        "Sicherer Umgang mit englischer Fachsprache (IT & Wirtschaft).",
        "Verständnis internationaler Märkte, Prozesse und Organisationen.",
        "Einordnung digitaler Lösungen im globalen Kontext.",
        "Erweiterung des eigenen fachlichen und methodischen Horizonts."
      ]
    },
    {
      title: "Was bringt dir das persönlich?",
      bullets: [
        "Interkulturelle Kompetenz und Perspektivwechsel.",
        "Mehr Selbstständigkeit und Organisationserfahrung.",
        "Stärkung von Kommunikations- und Präsentationsfähigkeiten.",
        "Pluspunkt im Lebenslauf (insbesondere für internationale Arbeitgeber)."
      ]
    },
    {
      title: "Worauf solltest du achten?",
      bullets: [
        "Sprachniveau: Reicht dein Englisch für Vorlesungen, Prüfungen und Gruppenarbeiten?",
        "Organisation: Bewerbung, Fristen, Anerkennung von Leistungen.",
        "Arbeitsaufwand: Englische Module wirken oft anspruchsvoller als gedacht.",
        "Timing: Passt das Wahlmodul gut zu Bachelorarbeit/Abschlussphase?"
      ]
    },
    {
      title: "Mini-Entscheidungshilfe",
      bullets: [
        "Möchte ich später international arbeiten oder studieren?",
        "Bin ich bereit, Vorträge/Abgaben auf Englisch zu machen?",
        "Traue ich mir zu, mich in neue akademische/kulturelle Umgebungen einzuarbeiten?",
        "Will ich meinen Lebenslauf bewusst international ausrichten?"
      ]
    }
  ]
};
