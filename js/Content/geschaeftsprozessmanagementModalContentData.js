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

window.GESCHAEFTSPROZESSMANAGEMENT_MODAL_CONTENT = {
  titel: "Geschäftsprozessmanagement",
  fragen: [
    {
      frage: "Was ist ein Geschäftsprozess?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein Gespräch mit dem Chef",
        "Eine Abfolge von Schritten, um ein Ziel zu erreichen (z. B. Bestellung bearbeiten)",
        "Ein Jahresabschluss",
        "Ein reines IT-System"
      ],
      antwort: 1
    },
    {
      frage: "Wozu nutzt man BPMN oder EPKs typischerweise?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Um Prozesse zu visualisieren und zu beschreiben",
        "Um Passwörter sicher zu speichern",
        "Um Datenbanken zu normalisieren",
        "Um Programmcode zu kompilieren"
      ],
      antwort: 0
    },
    {
      frage: "Mini-Aufgabe: Du zeichnest einen Prozess in BPMN. Womit startet ein Prozess meistens?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Mit einem Ereignis/Start-Event (z. B. „Bestellung eingegangen“)",
        "Mit einem KPI",
        "Mit einer SQL-Abfrage",
        "Mit einer Bilanz"
      ],
      antwort: 0
    },
    {
      frage: "Was ist ein KPI im Prozessmanagement?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Eine Kennzahl, um Leistung zu messen (z. B. Durchlaufzeit)",
        "Ein Programmierstandard",
        "Ein Datenbankindex",
        "Ein Diagrammtyp"
      ],
      antwort: 0
    },
    {
      frage: "Was beschreibt ein „Bottleneck“ (Engpass) im Prozess?",
      typ: "single_choice",
      schwierigkeit: "schwer",
      optionen: [
        "Einen Schritt, der den Ablauf ausbremst (z. B. zu wenig Kapazität)",
        "Einen besonders schnellen Schritt",
        "Einen Schritt, der immer automatisch läuft",
        "Einen Schritt, der nur im ERP existiert"
      ],
      antwort: 0
    }
  ]
};
