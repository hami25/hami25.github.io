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

window.PROJEKT_DIGITALISIERUNG_MODAL_CONTENT = {
  titel: "Projekt Digitalisierung",
  sections: [
    {
      title: "Worum geht’s?",
      body:
        "Im Modul „Projekt Digitalisierung“ setzt ihr im Team ein Digitalisierungsprojekt um. Von der Problemdefinition über Konzept und Umsetzung bis zur Ergebnispräsentation. Der konkrete Inhalt kann variieren (Thema, Partner, Use Case), die Vorgehensweise bleibt jedoch ähnlich."
    },
    {
      title: "Typische Ziele im WI-Kontext",
      bullets: [
        "Ein reales Problem strukturiert analysieren (Ist-Situation, Stakeholder, Ziele).",
        "Digitales Lösungskonzept entwickeln (Prozess, Daten, System/Tooling).",
        "Einen Prototyp/MVP oder eine belastbare Konzeptlösung erarbeiten.",
        "Ergebnisse verständlich dokumentieren und präsentieren.",
        "Teamarbeit und Projektorganisation erproben (Rollen, Planung, Kommunikation)."
      ]
    },
    {
      title: "Ablauf in Phasen (Beispiel)",
      bullets: [
        "Kickoff: Team, Rollen, Rahmenbedingungen, Thema/Use Case verstehen.",
        "Problem & Ziele: Scope abgrenzen, Erfolgskriterien definieren, Stakeholder klären.",
        "Analyse: Ist-Prozess / Daten / Systemlandschaft aufnehmen, Pain Points identifizieren.",
        "Konzept: Soll-Prozess, Lösungsidee, grobe Architektur/Tools, Risiken & Annahmen.",
        "Umsetzung/Prototyp: MVP planen, implementieren/konfigurieren, testen, iterieren.",
        "Finalisierung: Dokumentation, Demo/Präsentation, Reflexion (Lessons Learned)."
      ]
    },
    {
      title: "Typische Deliverables (abhängig von Projektform)",
      bullets: [
        "Projektsteckbrief (Ziel, Scope, Team, Rollen, Zeitplan).",
        "Anforderungsübersicht (Must/Should/Could, Abnahmekriterien).",
        "Ist-/Soll-Prozessdarstellung (z. B. BPMN) oder Use-Case-Beschreibung.",
        "Konzept/Architektur-Skizze (Systeme, Datenflüsse, Schnittstellen).",
        "Prototyp/MVP (oder: klickbarer Mock, Proof of Concept, konfigurierte Lösung).",
        "Test-/Validierungsergebnisse (z. B. Nutzerfeedback, Testfälle, Evaluation).",
        "Dokumentation + Abschlusspräsentation/Demo."
      ]
    },
    {
      title: "Worauf wird häufig geachtet (Bewertung – allgemein)",
      bullets: [
        "Nachvollziehbarkeit: Problem, Ziele und Scope sind klar und begründet.",
        "Methodik: strukturiertes Vorgehen, sinnvolle Priorisierung (MVP), sauberes Projektmanagement.",
        "Lösung: passt zum Problem, ist realistisch und zeigt Digitalisierungsnutzen.",
        "Umsetzung/Artefakte: Qualität des Prototyps/Konzepts, Dokumentation, Demo.",
        "Teamleistung: Rollen, Zusammenarbeit, Kommunikation, Reflexion."
      ]
    },
    {
      title: "Praktische Tipps (damit es nicht „zu groß“ wird)",
      bullets: [
        "Scope klein halten: lieber ein gutes MVP als 10 halbe Features.",
        "Früh sichtbares Ergebnis: schnell ein Prototyp/Mock, dann iterieren.",
        "Abnahmekriterien festlegen: Woran erkennt man „fertig“?",
        "Risiken aktiv managen: Abhängigkeiten, Datenzugang, Tooling, Zeitpuffer.",
        "Transparenz im Team: Aufgaben klar schneiden, kurze Abstimmungen, Kanban/Board nutzen."
      ]
    },
    {
      title: "Mini-Checkliste für euren Start",
      bullets: [
        "Was ist das konkrete Problem (1–2 Sätze) und wer hat es?",
        "Was ist euer MVP (minimaler Funktionsumfang)?",
        "Welche Daten/Systeme/Tools braucht ihr (und habt ihr Zugriff)?",
        "Welche Meilensteine setzt ihr pro Woche (Plan + Verantwortliche)?",
        "Wie zeigt ihr den Nutzen (Demo, Messgröße, Feedback)?"
      ]
    }
  ]
};

