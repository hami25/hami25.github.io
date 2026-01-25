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

window.CYBERSECURITY_MODAL_CONTENT = {
  titel: "Cybersecurity",
  fragen: [
    {
      frage: "Ordne die Säulen der IT-Sicherheit ihrer korrekten Definition zu.",
      typ: "zuordnung",
      schwierigkeit: "einfach",
      items: {
        begriffe: [
          "Vertraulichkeit (Confidentiality)",
          "Integrität (Integrity)",
          "Verfügbarkeit (Availability)"
        ],
        definitionen: [
          "Sicherstellung, dass Daten nur von autorisierten Personen gelesen werden können.",
          "Sicherstellung, dass Systeme und Daten zuverlässig funktionieren und zugänglich sind.",
          "Sicherstellung, dass Daten vollständig, korrekt und unverändert sind."
        ]
      },
      antwort: [
        [
          "Vertraulichkeit (Confidentiality)",
          "Sicherstellung, dass Daten nur von autorisierten Personen gelesen werden können."
        ],
        [
          "Integrität (Integrity)",
          "Sicherstellung, dass Daten vollständig, korrekt und unverändert sind."
        ],
        [
          "Verfügbarkeit (Availability)",
          "Sicherstellung, dass Systeme und Daten zuverlässig funktionieren und zugänglich sind."
        ]
      ],
      erklaerung:
        "Die CIA-Triade (Confidentiality, Integrity, Availability) ist das Fundament aller IT-Sicherheitsmodelle. Sie definiert die drei Hauptziele, die es zu schützen gilt."
    },

    {
      frage: "Was ist der Hauptzweck einer 'Firewall' in einem Netzwerk?",
      optionen: [
        "Daten verschlüsseln",
        "Den internen Traffic beschleunigen",
        "Unautorisierten Zugriff blockieren und Datenverkehr filtern"
      ],
      antwort: 2,
      typ: "single_choice",
      schwierigkeit: "einfach",
      erklaerung:
        "Eine Firewall dient als Barriere zwischen einem vertrauenswürdigen (internen) und einem nicht vertrauenswürdigen (externen) Netzwerk. Ihre Hauptaufgabe ist die Steuerung des Datenverkehrs anhand vordefinierter Sicherheitsregeln."
    },

    {
      frage:
        "Die Zwei-Faktor-Authentifizierung (2FA) stützt sich auf die drei unabhängigen Faktoren Wissen, Besitz und Inhärenz (Sein). Welche der folgenden Optionen repräsentieren diese drei unterschiedlichen Faktoren?",
      optionen: [
        "Ein geheimes Passwort, das nur Sie kennen",
        "Ein generierter Einmal-Code von einem physischen Token",
        "Ihre biometrischen Daten (z. B. Fingerabdruck oder Retina-Scan)",
        "Der Benutzername Ihres Haupt-Accounts"
      ],
      antwort: [0, 1, 2],
      typ: "multiple_choice",
      schwierigkeit: "mittel",
      erklaerung:
        "2FA kombiniert mindestens zwei der drei Faktoren: Wissen ('etwas, das ich weiß', z. B. Passwort), Besitz ('etwas, das ich habe', z. B. Token) und Inhärenz/Sein ('etwas, das ich bin', z. B. Fingerabdruck). Der Benutzername ist öffentlich bekannt und dient lediglich der Identifikation, nicht der Authentifizierung."
    },

    {
      frage:
        "Anhand welcher Merkmale kann eine E-Mail als 'Phishing'-Versuch identifiziert werden?",
      optionen: [
        "Aufforderung zur dringenden Eingabe persönlicher Daten über einen Link.",
        "Unpersönliche oder unklare Anrede ('Sehr geehrter Kunde').",
        "Eine seriöse Absenderadresse (z. B. @microsoft.com) ohne Tippfehler.",
        "Grammatikfehler oder ungewöhnliche Formulierungen."
      ],
      antwort: [0, 1, 3],
      typ: "multiple_choice",
      schwierigkeit: "mittel",
      erklaerung:
        "Phishing-Mails nutzen oft Zeitdruck und vage Anreden. Häufige Indikatoren sind Tippfehler, falsche Domainnamen, aber vor allem die Aufforderung, Passwörter oder Kreditkartennummern preiszugeben."
    },

    {
      frage:
        "Bringen Sie die folgenden Maßnahmen in die korrekte Reihenfolge ihrer Wichtigkeit für ein grundlegend sicheres System (von der höchsten zur niedrigsten Priorität).",
      typ: "sortierung",
      schwierigkeit: "schwer",
      items: [
        "Regelmäßiges Patching und Software-Updates",
        "Etablierung einer starken Zugangskontrolle (z.B. 2FA und Passwort-Regeln)",
        "Netzwerksegmentierung (Trennung von kritischen und weniger kritischen Bereichen)",
        "Sensibilisierung der Mitarbeiter (Schulungen zu Phishing, Social Engineering)"
      ],
      antwort: [
        "Sensibilisierung der Mitarbeiter (Schulungen zu Phishing, Social Engineering)",
        "Etablierung einer starken Zugangskontrolle (z.B. 2FA und Passwort-Regeln)",
        "Regelmäßiges Patching und Software-Updates",
        "Netzwerksegmentierung (Trennung von kritischen und weniger kritischen Bereichen)"
      ],
      erklaerung:
        "Die Mitarbeiter-Sensibilisierung (Mensch) ist die höchste Priorität, da viele Angriffe auf menschliche Schwächen abzielen. Es folgen grundlegende Kontrollen (Zugang), die technische Hygiene (Patching) und komplexe Architekturen (Segmentierung)."
    }
  ]
};




