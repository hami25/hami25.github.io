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

window.WISSENSCHAFTLICHES_ARBEITEN_MODAL_CONTENT = {
  titel: "Wissenschaftliches Arbeiten",
  fragen: [
    {
      frage:
        "Bringen Sie die Phasen eines Forschungsprozesses in die korrekte Reihenfolge (von 1 bis 5).",
      typ: "sortierung",
      schwierigkeit: "mittel",
      items: [
        "Datenerhebung und -analyse",
        "Entwicklung der Forschungsfrage und des Ziels",
        "Interpretation und Fazit",
        "Design der Forschungsmethode",
        "Literaturrecherche und Hypothesenbildung"
      ],
      antwort: [
        "Entwicklung der Forschungsfrage und des Ziels",
        "Literaturrecherche und Hypothesenbildung",
        "Design der Forschungsmethode",
        "Datenerhebung und -analyse",
        "Interpretation und Fazit"
      ],
      erklaerung:
        "Der Forschungsprozess folgt immer einer klaren Logik: Frage/Zielsetzung -> Recherche/Grundlagen -> Planung -> Durchführung/Daten -> Auswertung/Abschluss."
    },

    {
      frage:
        "Welche Stilmittel müssen in wissenschaftlichen Arbeiten unbedingt vermieden werden?",
      optionen: [
        "Fachbegriffe",
        "Umgangssprache und umgangssprachliche Abkürzungen",
        "Passivsätze"
      ],
      antwort: 1,
      typ: "single_choice",
      schwierigkeit: "mittel",
      erklaerung:
        "Wissenschaftliche Arbeiten müssen objektiv, präzise und formal sein. Umgangssprache (z.B. 'echt super') und umgangssprachliche Abkürzungen (z.B. 'usw.') sind daher zu vermeiden."
    },

    {
      frage: "Was ist das Ziel einer 'Peer-Review' in wissenschaftlichen Journals?",
      optionen: [
        "Die Bezahlung des Autors festlegen.",
        "Die Qualität, Validität und Originalität der Forschung sicherzustellen.",
        "Die Arbeit in eine andere Sprache zu übersetzen."
      ],
      antwort: 1,
      typ: "single_choice",
      schwierigkeit: "schwer",
      hinweis: "Hier geht es um die Gütekriterien der Forschung.",
      erklaerung:
        "Das Peer-Review-Verfahren ist die Begutachtung einer Arbeit durch unabhängige, gleichrangige Fachexperten, um die wissenschaftliche Güte vor der Veröffentlichung zu sichern."
    },

    {
      frage: "Füllen Sie die Lücken im Satz zur Definition des Plagiats.",
      typ: "lueckentext",
      schwierigkeit: "mittel",
      text:
        "Ein Plagiat liegt vor, wenn man [LUECKE1] oder Textteile [LUECKE2] ohne korrekte [LUECKE3] als eigene Leistung ausgibt.",
      optionen: [
        "Ideen",
        "Formulierung",
        "Quelle",
        "Internet",
        "Veröffentlichung",
        "wörtlich",
        "Sicherung",
        "Quellenangabe"
      ],
      antwort: ["Ideen", "wörtlich", "Quellenangabe"],
      erklaerung:
        "Ein Plagiat ist die Übernahme fremden geistigen Eigentums – egal ob es eine wörtliche Übernahme oder die nur sinngemäße Übernahme einer Idee ist – ohne die Herkunft zu nennen."
    },

    {
      frage:
        "Ordnen Sie die Begrifflichkeiten den korrekten wissenschaftlichen Gütekriterien zu.",
      typ: "zuordnung",
      schwierigkeit: "schwer",
      hinweis:
        "Merke: Reliabilität = Wiederholung, Validität = Messung des Richtigen.",
      items: {
        begriffe: [
          "Zuverlässigkeit der Messung (Wiederholbarkeit)",
          "Messung dessen, was gemessen werden soll (Gültigkeit)",
          "Nachvollziehbarkeit der Ergebnisse und Methodik"
        ],
        definitionen: ["Reliabilität", "Validität", "Objektivität"]
      },
      antwort: [
        ["Zuverlässigkeit der Messung (Wiederholbarkeit)", "Reliabilität"],
        ["Messung dessen, was gemessen werden soll (Gültigkeit)", "Validität"],
        ["Nachvollziehbarkeit der Ergebnisse und Methodik", "Objektivität"]
      ],
      erklaerung:
        "Die drei Hauptgütekriterien empirischer Forschung sind: **Objektivität** (Unabhängigkeit des Forschers), **Reliabilität** (Zuverlässigkeit der Messung) und **Validität** (Gültigkeit der Messung)."
    }
  ]
};
