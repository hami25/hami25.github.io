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

window.DATENBANKEN_MODAL_CONTENT = {
  titel: "Datenbanken",
  fragen: [
    {
      frage: "Wofür steht „SQL“?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Simple Query Logic",
        "Structured Query Language",
        "Software Quality Level",
        "Secure Question List"
      ],
      antwort: 1
    },
    {
      frage: "Was ist ein Primärschlüssel (Primary Key)?",
      typ: "single_choice",
      schwierigkeit: "einfach",
      optionen: [
        "Ein Passwort für die Datenbank",
        "Ein Feld, das einen Datensatz eindeutig identifiziert",
        "Der erste Eintrag in einer Tabelle",
        "Ein Backup der Tabelle"
      ],
      antwort: 1
    },
    {
      frage: "Mini-Aufgabe: Du hast eine Tabelle KUNDEN und eine Tabelle BESTELLUNGEN. Du willst Name + Bestellnummer zusammen anzeigen. Was brauchst du typischerweise?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: ["JOIN", "INSERT", "ORDER BY", "DROP TABLE"],
      antwort: 0
    },
    {
      frage: "Warum normalisiert man Tabellen?",
      typ: "single_choice",
      schwierigkeit: "mittel",
      optionen: [
        "Damit Tabellen bunter aussehen",
        "Um Redundanzen zu reduzieren und Datenfehler zu vermeiden",
        "Damit SQL schneller tippt",
        "Damit man keine Primärschlüssel braucht"
      ],
      antwort: 1
    },
    {
      frage: "Was ist der typische Unterschied zwischen WHERE und HAVING?",
      typ: "single_choice",
      schwierigkeit: "schwer",
      optionen: [
        "WHERE filtert Zeilen, HAVING filtert Gruppen (nach GROUP BY)",
        "HAVING filtert Zeilen, WHERE filtert Gruppen",
        "Beides ist identisch, nur andere Schreibweise",
        "WHERE funktioniert nur mit JOINs"
      ],
      antwort: 0
    }
  ]
};
