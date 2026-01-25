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

window.BI_MODAL_CONTENT = {
  titel: "Business Intelligence",
  summaryTitle: "Fazit für dich",
  summaryText:
    "Wenn du gerne mit Daten arbeitest, Muster erkennst und Kennzahlen verständlich aufbereiten willst, passt Business Intelligence sehr gut zu dir.",

  fragen: [
    {
      frage: "Worum geht es in Business Intelligence? (Wähle, was am ehesten passt.)",
      typ: "multiple_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Man arbeitet mit Daten, Kennzahlen (KPIs) und Dashboards zur Entscheidungsunterstützung.",
        "Man repariert hauptsächlich Server und Hardware.",
        "Man bereitet Daten aus verschiedenen Quellen auf, um sie analysieren zu können.",
        "Es geht nur um das Erstellen von PowerPoint-Folien ohne Datenbezug."
      ],
      antwort: [],
      scored: false,
      erklaerung:
        "BI dreht sich um Daten: sammeln/aufbereiten, analysieren und verständlich als Kennzahlen/Reports/Dashboards darstellen."
    },

    {
      frage: "Was ist ein „Dashboard“ in BI?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein Ablagefach für Akten",
        "Eine visuelle Anzeige der wichtigsten Kennzahlen (KPIs)",
        "Ein Server-Gehäuse"
      ],
      antwort: 1,
      erklaerung:
        "Ein Dashboard zeigt Kennzahlen und Trends kompakt – damit man schnell Entscheidungen unterstützen kann."
    },

    {
      frage: "Wofür steht „ETL“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Extract, Transform, Load",
        "Electronic Trading List",
        "End of Time Limit"
      ],
      antwort: 0,
      erklaerung:
        "ETL beschreibt den typischen Prozess: Daten extrahieren, umwandeln und in ein Zielsystem laden."
    },

    {
      frage: "Was ist ein „Data Warehouse“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein physisches Lagerhaus",
        "Eine zentrale Datenbank zur Analyse von Geschäftsdaten",
        "Ein Backup-Server"
      ],
      antwort: 1,
      erklaerung:
        "Ein Data Warehouse sammelt Daten zentral, damit man sie gut auswerten und reporten kann."
    },

    {
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      typ: "zuordnung",
      schwierigkeit: "mittel",
      items: {
        begriffe: ["Dashboard", "ETL", "Data Warehouse"],
        definitionen: [
          "Visuelle Übersicht, die KPIs und Trends auf einen Blick zeigt.",
          "Prozess, bei dem Daten extrahiert, umgewandelt und geladen werden.",
          "Zentrale Datenbasis für Analyse und Reporting."
        ]
      },
      antwort: [
        ["Dashboard", "Visuelle Übersicht, die KPIs und Trends auf einen Blick zeigt."],
        ["ETL", "Prozess, bei dem Daten extrahiert, umgewandelt und geladen werden."],
        ["Data Warehouse", "Zentrale Datenbasis für Analyse und Reporting."]
      ],
      erklaerung:
        "Dashboard = Visualisierung, ETL = Datenpipeline, Data Warehouse = zentrale Analyse-Datenbasis."
    },

    {
      frage: "ETL dient dazu, Daten aus verschiedenen Quellen für Analysen aufzubereiten.",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: ["Richtig", "Falsch"],
      antwort: 0,
      erklaerung:
        "Genau: ETL ist die typische Datenpipeline, um Analyse-Daten nutzbar zu machen."
    },

    {
      frage:
        "Das Management will täglich die wichtigsten Kennzahlen sehen – schnell und übersichtlich. Was ist am sinnvollsten?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Ein Dashboard mit KPIs",
        "Ein physisches Lagerhaus für Daten",
        "Nur eine Dateiablage ohne Visualisierung"
      ],
      antwort: 0,
      erklaerung:
        "Für schnelle Übersicht sind Dashboards ideal, weil sie KPIs kompakt und visuell darstellen."
    }
  ]
};
