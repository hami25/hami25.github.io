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

window.WI_MODAL_CONTENT = {
  titel: "Einführung in die Wirtschaftsinformatik",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn du Lust hast, Unternehmen zu verstehen und mit IT-Lösungen sinnvoll zu verbessern (Kommunikation + Struktur + Technik), ist „Einführung in die Wirtschaftsinformatik“ sehr wahrscheinlich ein gutes Match.",

  fragen: [

    {
      frage: "Was erwartest du von Wirtschaftsinformatik? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ich will verstehen, wie Unternehmen arbeiten – und wie IT dabei hilft.",
        "Ich interessiere mich für Abläufe/Prozesse (z. B. Bestellung, Lieferung, Service).",
        "Ich finde es spannend, zwischen „Fachbereich“ und „IT“ zu übersetzen (Kommunikation!).",
        "Ich denke, WI ist nur Programmieren – alles andere ist unwichtig."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "Wirtschaftsinformatik verbindet Business & IT: Prozesse verstehen, Anforderungen klären und passende digitale Lösungen entwickeln."
    },

    {
      frage: "Was ist ein „Geschäftsprozess“ am ehesten?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Eine wiederkehrende Abfolge von Aufgaben (z. B. Bestellung → Lieferung → Rechnung).",
        "Ein Computerprogramm, das man installiert.",
        "Eine Tabelle mit Zahlen für die Buchhaltung."
      ],
      antwort: 0,
      erklaerung:
        "Ein Geschäftsprozess ist eine Abfolge von Aufgaben, die ein Ziel erreicht (z. B. Bestellung abwickeln)."
    },

    {
      frage: "Was macht ein Informationssystem typischerweise?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Es ersetzt alle Mitarbeitenden komplett.",
        "Es unterstützt Menschen/Organisationen mit Informationen und Funktionen (z. B. ERP, CRM).",
        "Es dient nur zum Speichern von Bildern und Videos."
      ],
      antwort: 1,
      erklaerung:
        "Informationssysteme unterstützen Arbeit und Entscheidungen – z. B. durch Daten, Funktionen und Automatisierung."
    },

    {
      frage: "Wozu braucht man in WI oft Modelle (z. B. Prozessmodelle)?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Damit man schöne Poster drucken kann.",
        "Um Abläufe verständlich zu machen und Verbesserungen zu planen.",
        "Damit Code automatisch fehlerfrei wird."
      ],
      antwort: 1,
      erklaerung:
        "Modelle helfen, Prozesse/Strukturen zu verstehen und gezielt zu verbessern – bevor man direkt Lösungen baut."
    },

    {
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["ERP-System", "Geschäftsprozess", "Datenmodell"],
        definitionen: [
          "Beschreibt, welche Daten es gibt und wie sie zusammenhängen (z. B. Kunde–Bestellung).",
          "Software, die zentrale Unternehmensbereiche integriert (z. B. Einkauf, Lager, Finanzen).",
          "Abfolge von Aufgaben, die ein Ziel erreicht (z. B. Bestellung abwickeln)."
        ]
      },
      antwort: [
        ["Datenmodell", "Beschreibt, welche Daten es gibt und wie sie zusammenhängen (z. B. Kunde–Bestellung)."],
        ["ERP-System", "Software, die zentrale Unternehmensbereiche integriert (z. B. Einkauf, Lager, Finanzen)."],
        ["Geschäftsprozess", "Abfolge von Aufgaben, die ein Ziel erreicht (z. B. Bestellung abwickeln)."]
      ],
      erklaerung:
        "ERP = integrierte Unternehmenssoftware, Prozess = Ablauf, Datenmodell = Daten + Beziehungen."
    },

    {
      frage: "Wenn ein Unternehmen ein neues IT-System einführt, lösen sich Prozessprobleme automatisch.",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: ["Richtig", "Falsch"],
      antwort: 1,
      erklaerung:
        "Neue Software hilft nur, wenn Prozesse, Anforderungen und Nutzung wirklich passen. Sonst digitalisiert man Chaos."
    },

    {
      frage:
        "Ein Unternehmen klagt über viele Fehler in Bestellungen. IT soll „schnell eine Software bauen“. Was ist aus WI-Sicht der sinnvollste erste Schritt?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Sofort programmieren, damit schnell etwas da ist.",
        "Erst den Prozess aufnehmen/analysieren (wo passieren Fehler?) und Anforderungen klären.",
        "Mehr Werbung machen, damit Kunden geduldiger werden."
      ],
      antwort: 1,
      erklaerung:
        "WI startet strukturiert: Problem verstehen, Prozess analysieren, Anforderungen klären – dann Lösung bauen."
    }
  ]
};
