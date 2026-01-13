
// ===================================
  // QUIZ-DATENBANK
  // ===================================
  const quizDaten = {
      'info1': {
          titel: "Info-Grundlagen Check",
          fragen: [
          {
              frage: "Woraus besteht ein 'Bit', die kleinste digitale Information?",
              optionen: ["Aus einer 1 oder einer 0", "Aus Buchstaben", "Aus einem Pixel", "Aus Strom"],
              antwort: 0, // Index 0 ist richtig
              typ: "single_choice"
          },
          {
              frage: "Was ist der Unterschied zwischen Hardware & Software?",
              optionen: ["Hardware ist schnell, Software ist langsam", "Hardware kann man anfassen (z.B. Monitor), Software nicht (z.B. App)", "Hardware ist der Code, Software ist das Programm"],
              antwort: 1,
              typ: "single_choice"
          },
          {
              frage: "Was macht ein 'Algorithmus'?",
              optionen: ["Er speichert Daten", "Er verschlüsselt Passwörter", "Er ist eine Schritt-für-Schritt-Anleitung, um ein Problem zu lösen"],
              antwort: 2,
              typ: "single_choice"
          }
          ]
      },
      'oose': {
        titel: "OOSE Einsteiger-Check",
        fragen: [
          {
            frage: "Was ist eine 'Klasse' in der OOSE am besten beschrieben?",
            optionen: ["Ein spezifisches Objekt (z.B. dein Fahrrad)", "Ein Bauplan oder eine Schablone (z.B. der Bauplan eines Fahrrads)", "Eine Funktion im Code", "Eine Variable"],
            antwort: 1,
            typ: "single_choice" // Jetzt explizit
          },
          {
            frage: "Was ist ein 'Objekt'?",
            optionen: ["Ein Synonym für 'Variable'", "Der Code in der Klassendatei", "Eine konkrete Ausprägung einer Klasse (z.B. 'Mein Hund Bello')", "Der Oberbegriff für alle Lebewesen"],
            antwort: 2,
            typ: "single_choice"
          },
          {
            frage: "Die Klasse 'Auto' hat die Fähigkeit 'hupen()'. Wie nennt man diese Fähigkeit?",
            optionen: ["Attribut", "Methode", "Vererbung", "Instanz"],
            antwort: 1,
            typ: "single_choice"
          },
          {
            frage: "Was versteht man unter 'Vererbung'?",
            optionen: ["Eine Klasse gibt ihre Eigenschaften an eine Unterklasse weiter", "Ein Objekt schickt Daten an ein anderes", "Das Erstellen eines neuen Objekts", "Das Kapseln von Daten"],
            antwort: 0,
            typ: "single_choice"
          },
          // NEUE MULTIPLE CHOICE FRAGE
          {
              frage: "Welche der folgenden sind Grundprinzipien der Objektorientierung (O.O.)?",
              optionen: ["Kapselung (Encapsulation)", "Prozeduralität", "Vererbung (Inheritance)", "Polymorphie", "Strukturierte Programmierung"],
              antwort: [0, 2, 3], // Index 0, 2 und 3 sind richtig
              typ: "multiple_choice"
          }
        ]
      },

    'einfWI': {
        titel: "Check: Einführung WI",
        fragen: [
            { 
            frage: "Was ist die Hauptaufgabe der Wirtschaftsinformatik?",
            optionen: ["Nur Programmieren", "Die Brücke zwischen BWL und Informatik zu bilden", "Nur BWL-Theorien lernen"],
            antwort: 1
            },
            { 
            frage: "Was ist ein 'Informationssystem'?",
            optionen: ["Ein Computer-Netzwerk", "Ein System, das Daten sammelt, speichert und verarbeitet, um Menschen zu unterstützen", "Eine Datenbank"],
            antwort: 1
            },
            { 
            frage: "Wofür steht 'ERP'?",
            optionen: ["Enterprise Resource Planning (z.B. SAP)", "Enhanced-Routing-Protocol", "Effective-Response-Programming"],
            antwort: 0
            }
        ]
    },
    
    // Platzhalter für das Mathe-Quiz
    'ds': {
    titel: "Check: Diskrete Strukturen",
    fragen: [
        { 
        frage: "Womit beschäftigt sich die 'Mengenlehre'?",
        optionen: ["Mit sehr viel Geld", "Mit der Unendlichkeit", "Mit der Zusammenfassung von Objekten (z.B. A ∪ B)"],
        antwort: 2
        },
        { 
        frage: "Was ist 'Aussagenlogik'?",
        optionen: ["Die Kunst, gut zu argumentieren", "Das Rechnen mit 'wahr' und 'falsch' (z.B. AND, OR, NOT)", "Eine Programmiersprache"],
        antwort: 1
        },
        { 
        frage: "Was ist ein 'Graph' in der Graphentheorie?",
        optionen: ["Ein Diagramm (z.B. Balkendiagramm)", "Ein Netzwerk aus Knoten und Kanten (z.B. wie Straßenkarten)", "Eine komplizierte Zeichnung"],
        antwort: 1
        }
    ]
    },

    
    //==================================
// SEMESTER 2
//==================================
'pmt': {
  titel: "Check: Programmiermethoden",
  fragen: [
    { 
      frage: "Was ist 'Clean Code'?",
      optionen: ["Code, der Viren entfernt", "Ein Programmierstil, der Code lesbar und wartbar macht", "Code ohne Kommentare"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Design Pattern' (Entwurfsmuster)?",
      optionen: ["Ein schönes Layout für eine App", "Eine wiederverwendbare Lösung für ein bekanntes Software-Problem", "Ein Fehler im Code"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Refactoring'?",
      optionen: ["Code neu schreiben, ohne seine Funktion zu ändern, um ihn zu verbessern", "Eine neue Funktion hinzufügen", "Den Code löschen"],
      antwort: 0
    }
  ]
},

'db': {
  titel: "Check: Datenbanken",
  fragen: [
    { 
      frage: "Wofür steht 'SQL'?",
      optionen: ["Simple Query Logic", "Structured Query Language (Sprache zur Abfrage von Datenbanken)", "Software Quality Language"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Primary Key' (Primärschlüssel)?",
      optionen: ["Ein Passwort für die Datenbank", "Ein Feld, das einen Datensatz eindeutig identifiziert (z.B. Matrikelnummer)", "Der erste Eintrag in einer Tabelle"],
      antwort: 1
    },
    { 
      frage: "Was macht ein 'JOIN'-Befehl in SQL?",
      optionen: ["Er fügt neue Daten hinzu", "Er löscht Daten", "Er kombiniert Daten aus zwei oder mehr Tabellen"],
      antwort: 2
    }
  ]
},

'gpm': {
  titel: "Check: Geschäftsprozesse",
  fragen: [
    { 
      frage: "Was ist ein 'Geschäftsprozess'?",
      optionen: ["Ein Gespräch mit dem Chef", "Eine Abfolge von Schritten, um ein Ziel zu erreichen (z.B. 'Bestellung bearbeiten')", "Die Bilanz-Pressekonferenz"],
      antwort: 1
    },
    { 
      frage: "Womit visualisiert man Prozesse oft?",
      optionen: ["Mit Texten", "Mit EPKs (Ereignisgesteuerte Prozessketten) oder BPMN", "Mit Excel-Tabellen"],
      antwort: 1
    },
    { 
      frage: "Was ist das Ziel von 'Prozessoptimierung'?",
      optionen: ["Prozesse komplizierter machen", "Prozesse schneller, günstiger oder besser zu machen", "Mitarbeiter zu entlassen"],
      antwort: 1
    }
  ]
},

'rewe': {
  titel: "Check: Rechnungswesen",
  fragen: [
    { 
      frage: "Was ist der wichtigste Buchungssatz?",
      optionen: ["Soll an Haben", "Mehr ist besser", "Immer im Plus bleiben"],
      antwort: 0
    },
    { 
      frage: "Was gehört auf die 'Aktivseite' einer Bilanz?",
      optionen: ["Das Kapital (woher das Geld kommt)", "Das Vermögen (wofür das Geld verwendet wurde, z.B. LKW, Gebäude)", "Die Schulden"],
      antwort: 1
    },
    { 
      frage: "Was ist die 'GuV' (Gewinn- und Verlustrechnung)?",
      optionen: ["Eine Bilanz", "Eine Rechnung, die Aufwand und Ertrag eines Jahres gegenüberstellt", "Eine Steuererklärung"],
      antwort: 1
    }
  ]
},

'mathe': {
  titel: "Check: Wirtschaftsmathematik",
  fragen: [
    { 
      frage: "Wofür braucht man 'Lineare Optimierung'?",
      optionen: ["Um Geraden zu zeichnen", "Um das Maximum oder Minimum zu finden (z.B. 'Maximiere den Gewinn')", "Um Zinsen zu berechnen"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Zinseszins'?",
      optionen: ["Eine Steuer auf Zinsen", "Zinsen, die man auf bereits erhaltene Zinsen bekommt", "Eine Strafe der Bank"],
      antwort: 1
    },
    { 
      frage: "Womit beschäftigt sich die 'Finanzmathematik'?",
      optionen: ["Nur mit Addition", "Mit der Berechnung von Renten, Krediten und Investitionen", "Mit Geometrie"],
      antwort: 2
    }
  ]
},

//==================================
// SEMESTER 3
//==================================
'ads': {
  titel: "Check: Algorithmen & Datenstrukturen",
  fragen: [
    { 
      frage: "Was ist eine 'Datenstruktur'?",
      optionen: ["Eine Datenbank", "Eine Art, Daten zu speichern und zu organisieren (z.B. Liste, Baum, Stack)", "Ein Algorithmus"],
      antwort: 1
    },
    { 
      frage: "Was misst die 'O-Notation' (z.B. O(n))?",
      optionen: ["Wie schnell ein Computer ist", "Die Komplexität/Laufzeit eines Algorithmus, wenn die Datenmenge (n) wächst", "Wie viel Speicher ein Programm braucht"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Sortieralgorithmus' (z.B. Bubble Sort)?",
      optionen: ["Ein Programm, das aufräumt", "Ein Algorithmus, der eine unsortierte Liste in eine sortierte Reihenfolge bringt", "Ein Virus"],
      antwort: 1
    }
  ]
},

'swt': {
  titel: "Check: Softwaretechnik",
  fragen: [
    { 
      frage: "Was ist das 'Wasserfallmodell'?",
      optionen: ["Ein agiles Modell", "Ein starres Phasenmodell (Planung -> Design -> Code -> Test)", "Ein Werkzeug zum Testen"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Agile Entwicklung' (z.B. Scrum)?",
      optionen: ["Entwickeln ohne Plan", "Ein flexibles Vorgehen in kurzen Zyklen ('Sprints') mit viel Feedback", "Ein Programmierstil"],
      antwort: 1
    },
    { 
      frage: "Wofür steht 'UML'?",
      optionen: ["Unified Modeling Language (Standard zur Visualisierung von Software)", "Universal Main Loop", "User-Mode-Linux"],
      antwort: 0
    }
  ]
},

'bis': {
  titel: "Check: Betriebl. Informationssysteme",
  fragen: [
    { 
      frage: "Was ist ein 'ERP-System' (z.B. SAP)?",
      optionen: ["Ein Textverarbeitungsprogramm", "Eine zentrale Software, die alle Bereiche eines Unternehmens (Lager, HR, Finanzen) steuert", "Eine Webseite"],
      antwort: 1
    },
    { 
      frage: "Wofür steht 'CRM'?",
      optionen: ["Customer Relationship Management (Kundenbeziehungs-Software)", "Code-Revision-Management", "Company-Resource-Module"],
      antwort: 0
    },
    { 
      frage: "Was ist ein 'Data Warehouse'?",
      optionen: ["Ein Lager für Festplatten", "Eine große Datenbank, die Daten aus vielen Quellen für Analysen sammelt", "Ein Cloud-Speicher für Fotos"],
      antwort: 1
    }
  ]
},

'inno': {
  titel: "Check: Innovationsmanagement",
  fragen: [
    { 
      frage: "Was ist eine 'Innovation' (im Ggs. zur 'Erfindung')?",
      optionen: ["Eine Idee, die es noch nie gab", "Eine Erfindung, die erfolgreich am Markt eingeführt wurde", "Ein Patent"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Design Thinking'?",
      optionen: ["Nur das Design von Produkten", "Eine Methode zur kreativen Problemlösung, die sich stark am Nutzer orientiert", "Eine Software"],
      antwort: 1
    },
    { 
      frage: "Was ist eine 'Disruptive Innovation'?",
      optionen: ["Eine kleine Verbesserung", "Eine Innovation, die einen bestehenden Markt komplett umkrempelt (z.B. Smartphone statt Tastenhandy)", "Eine fehlerhafte Idee"],
      antwort: 1
    }
  ]
},

'statistik': {
  titel: "Check: Statistik",
  fragen: [
    { 
      frage: "Was ist der 'Median'?",
      optionen: ["Der Durchschnittswert (Mittelwert)", "Der Wert, der in der Mitte einer sortierten Liste steht", "Der häufigste Wert (Modalwert)"],
      antwort: 1
    },
    { 
      frage: "Was ist eine 'Korrelation'?",
      optionen: ["Ein statistischer Zusammenhang zwischen zwei Dingen", "Der Beweis, dass A die Ursache für B ist", "Ein Fehler in den Daten"],
      antwort: 0
    },
    { 
      frage: "Was ist 'Deskriptive Statistik'?",
      optionen: ["Statistik, die Daten beschreibt (z.B. Mittelwert, Diagramme)", "Statistik, die Vorhersagen trifft (Inferenzstatistik)", "Eine Fälschung von Daten"],
      antwort: 0
    }
  ]
},

//==================================
// SEMESTER 4
//==================================
'wba': {
    titel: "Web-Grundlagen Check",
    fragen: [
      { 
        frage: "Wofür steht HTML?",
        optionen: ["HyperText Markup Language", "Home Tool Management Logic", "High Tech Multi Language"],
        antwort: 0 // Die erste Option
      },
      { 
        frage: "Welche Sprache wird für das Styling (Farben, Layout) einer Webseite verwendet?",
        optionen: ["JavaScript", "HTML", "CSS (Cascading Style Sheets)"],
        antwort: 2 
      },
      { 
        frage: "Welche Sprache macht eine Webseite interaktiv (z.B. Klick-Events, Popups)?",
        optionen: ["HTML", "JavaScript", "CSS"],
        antwort: 1
      }
    ]
    },

'bi': {
  titel: "Check: Business Intelligence",
  fragen: [
    { 
      frage: "Was ist das Ziel von 'Business Intelligence' (BI)?",
      optionen: ["Daten zu sammeln, um bessere Geschäftsentscheidungen zu treffen", "Konkurrenten auszuspionieren", "Nur schöne Diagramme zu malen"],
      antwort: 0
    },
    { 
      frage: "Was ist ein 'Dashboard'?",
      optionen: ["Eine Datenbank", "Eine visuelle Aufbereitung von wichtigen Kennzahlen (KPIs) auf einen Blick", "Ein Server-Raum"],
      antwort: 1
    },
    { 
      frage: "Wofür steht 'ETL'?",
      optionen: ["Easy-To-Learn", "Extract, Transform, Load (Der Prozess, Daten in ein Data Warehouse zu laden)", "Electronic-Transaction-List"],
      antwort: 1
    }
  ]
},

'agl': {
  titel: "Check: Agiles Projektmanagement",
  fragen: [
    { 
      frage: "Was ist 'Scrum'?",
      optionen: ["Ein starres Projektmanagement-Tool", "Ein Framework (Regelwerk) für agiles Arbeiten in 'Sprints'", "Ein Befehl in SQL"],
      antwort: 1
    },
    { 
      frage: "Welche Rolle gibt es in Scrum NICHT?",
      optionen: ["Product Owner", "Scrum Master", "Klassischer Projektmanager (Chef)"],
      antwort: 2
    },
    { 
      frage: "Was ist ein 'Sprint'?",
      optionen: ["Ein schnelles Meeting", "Ein kurzer, festgelegter Zeitraum (z.B. 2 Wochen), in dem ein fertiges Produkt-Teil entsteht", "Die Testphase"],
      antwort: 1
    }
  ]
},

//==================================
// SEMESTER 5
//==================================
'cybersec': {
    titel: "Cybersecurity (5 CP)",
    fragen: [
        // ZUORDNUNG (CIA-Triade)
        {
            frage: "Ordne die Säulen der IT-Sicherheit ihrer korrekten Definition zu.",
            typ: "zuordnung",
            schwierigkeit: "einfach",
            items: {
                begriffe: ["Vertraulichkeit (Confidentiality)", "Integrität (Integrity)", "Verfügbarkeit (Availability)"],
                definitionen: [
                    "Sicherstellung, dass Daten nur von autorisierten Personen gelesen werden können.",
                    "Sicherstellung, dass Systeme und Daten zuverlässig funktionieren und zugänglich sind.",
                    "Sicherstellung, dass Daten vollständig, korrekt und unverändert sind."
                ]
            },
            antwort: [
                ["Vertraulichkeit (Confidentiality)", "Sicherstellung, dass Daten nur von autorisierten Personen gelesen werden können."],
                ["Integrität (Integrity)", "Sicherstellung, dass Daten vollständig, korrekt und unverändert sind."],
                ["Verfügbarkeit (Availability)", "Sicherstellung, dass Systeme und Daten zuverlässig funktionieren und zugänglich sind."]
            ],
            erklaerung: "Die CIA-Triade (Confidentiality, Integrity, Availability) ist das Fundament aller IT-Sicherheitsmodelle. Sie definiert die drei Hauptziele, die es zu schützen gilt."
        },

        // SINGLE CHOICE (Firewall)
        {
            frage: "Was ist der Hauptzweck einer 'Firewall' in einem Netzwerk?",
            optionen: ["Daten verschlüsseln", "Den internen Traffic beschleunigen", "Unautorisierten Zugriff blockieren und Datenverkehr filtern"],
            antwort: 2,
            typ: "single_choice",
            schwierigkeit: "einfach",
            erklaerung: "Eine Firewall dient als Barriere zwischen einem vertrauenswürdigen (internen) und einem nicht vertrauenswürdigen (externen) Netzwerk. Ihre Hauptaufgabe ist die Steuerung des Datenverkehrs anhand vordefinierter Sicherheitsregeln."
        },

        // MULTIPLE CHOICE (2FA)
        {
            frage: "Die Zwei-Faktor-Authentifizierung (2FA) stützt sich auf die drei unabhängigen Faktoren Wissen, Besitz und Inhärenz (Sein). Welche der folgenden Optionen repräsentieren diese drei unterschiedlichen Faktoren?",
            optionen: [
                "Ein geheimes Passwort, das nur Sie kennen",
                "Ein generierter Einmal-Code von einem physischen Token",
                "Ihre biometrischen Daten (z. B. Fingerabdruck oder Retina-Scan)",
                "Der Benutzername Ihres Haupt-Accounts"
            ],
            antwort: [0, 1, 2], // 0=Wissen, 1=Besitz, 2=Sein
            typ: "multiple_choice",
            schwierigkeit: "mittel",
            erklaerung: "2FA kombiniert mindestens zwei der drei Faktoren: Wissen ('etwas, das ich weiß', z. B. Passwort), Besitz ('etwas, das ich habe', z. B. Token) und Inhärenz/Sein ('etwas, das ich bin', z. B. Fingerabdruck). Der Benutzername ist öffentlich bekannt und dient lediglich der Identifikation, nicht der Authentifizierung."
        },

        // MULTIPLE CHOICE (Phishing)
        {
            frage: "Anhand welcher Merkmale kann eine E-Mail als 'Phishing'-Versuch identifiziert werden?",
            optionen: [
                "Aufforderung zur dringenden Eingabe persönlicher Daten über einen Link.",
                "Unpersönliche oder unklare Anrede ('Sehr geehrter Kunde').",
                "Eine seriöse Absenderadresse (z. B. @microsoft.com) ohne Tippfehler.",
                "Grammatikfehler oder ungewöhnliche Formulierungen."
            ],
            antwort: [0, 1, 3],
            typ: "multiple_choice",
            schwierigkeit: "mittel",
            erklaerung: "Phishing-Mails nutzen oft Zeitdruck und vage Anreden. Häufige Indikatoren sind Tippfehler, falsche Domainnamen, aber vor allem die Aufforderung, Passwörter oder Kreditkartennummern preiszugeben."
        },

        // SORTIERUNG (Priorität der Sicherheitsmaßnahmen)
        {
            frage: "Bringen Sie die folgenden Maßnahmen in die korrekte Reihenfolge ihrer Wichtigkeit für ein grundlegend sicheres System (von der höchsten zur niedrigsten Priorität).",
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
            erklaerung: "Die Mitarbeiter-Sensibilisierung (Mensch) ist die höchste Priorität, da viele Angriffe auf menschliche Schwächen abzielen. Es folgen grundlegende Kontrollen (Zugang), die technische Hygiene (Patching) und komplexe Architekturen (Segmentierung)."
        }
    ]
},

'dt': {
    titel: "Digitale Transformation (5 CP)",
    fragen: [
        // 1. MULTIPLE CHOICE (Digitale Geschäftsmodell-Kompetenzen)
        {
            frage: "Welche der folgenden Komponenten sind Kernbestandteile eines digitalen Geschäftsmodells?",
            optionen: [
                "Transaktion und ihre Wiederholbarkeit",
                "Physische Lagerhaltung",
                "Das digitale System (Anbieter)",
                "Das nachfragende digitale System (Kunde)",
                "Analoge Leistungserbringung",
                "(Digitale) Leistung und Gegenleistung"
            ],
            antwort: [0, 2, 3, 5],
            typ: "multiple_choice",
            schwierigkeit: "mittel",
            erklaerung: "Ein digitales Geschäftsmodell basiert auf der Wiederholbarkeit digitaler Transaktionen zwischen dem anbietenden und dem nachfragenden digitalen System. Reine analoge oder physische Komponenten sind keine Kernbestandteile."
        },

        // 2. MULTIPLE CHOICE (Enabler digitaler Kundenzugang)
        {
            frage: "Welche Technologien wirken als Enabler für den digitalen Kundenzugang in der Digitalen Transformation?",
            optionen: [
                "Mobiles Internet und mobile Endgeräte",
                "E-Commerce-Plattformen",
                "Mainframe-Systeme",
                "Soziale Netzwerke und Messenger-Dienste",
                "Analoge Telefonanlagen (POTS)"
            ],
            antwort: [0, 1, 3],
            typ: "multiple_choice",
            schwierigkeit: "einfach",
            erklaerung: "Enabler sind Technologien, die den direkten, effizienten und neuen Zugang zum Kunden ermöglichen. Dazu gehören mobile Technologien, spezialisierte Plattformen (E-Commerce) und soziale Kanäle."
        },

        // 3. ZUORDNUNG (Task-Typen)
        {
            frage: "Ordne die Task-Typen korrekt ihrer Ausführung zu.",
            typ: "zuordnung",
            schwierigkeit: "mittel",
            items: {
                begriffe: ["Service-Task", "Benutzer-Task", "Manueller Task"],
                definitionen: [
                    "Wird voll automatisch von einem System ausgeführt.",
                    "Führt ein menschlicher Bearbeiter per Hand aus (ohne Systemunterstützung).",
                    "Führt ein menschlicher Bearbeiter in Interaktion mit einem unterstützenden System aus."
                ]
            },
            antwort: [
                ["Service-Task", "Wird voll automatisch von einem System ausgeführt."],
                ["Manueller Task", "Führt ein menschlicher Bearbeiter per Hand aus (ohne Systemunterstützung)."],
                ["Benutzer-Task", "Führt ein menschlicher Bearbeiter in Interaktion mit einem unterstützenden System aus."]
            ],
            erklaerung: "Die Unterscheidung ist zentral für die Prozessautomatisierung: Service ist vollautomatisch, Benutzer ist halb-automatisch/interaktiv, Manuell ist nicht unterstützt."
        },

        // 4. NEU: SINGLE CHOICE (Vernetzung als Erfolgsfaktor) - Ersetzt die Sortierung
        {
            frage: "Warum ist die Vernetzung mit Kunden und Partnern ein zentraler Erfolgsfaktor für neue digitale Geschäftsmodelle?",
            optionen: [
                "Sie reduziert die Notwendigkeit von Software-Updates.",
                "Sie steigert die Kapitalrendite (ROI) direkt um mindestens 20%.",
                "Sie ermöglicht das Schaffen von Effizienz- und Qualitätsgewinnen sowie die Erweiterung des eigenen Leistungsangebots durch Kooperation.",
                "Sie vereinfacht die Einhaltung globaler Datenschutzbestimmungen."
            ],
            antwort: 2,
            typ: "single_choice",
            schwierigkeit: "mittel",
            erklaerung: "Die Vernetzung ermöglicht es Unternehmen, über die eigenen Grenzen hinaus Wert zu schaffen (Ökosysteme), Prozesse zu optimieren (Effizienz) und neue Angebote durch Daten- und Leistungsaustausch zu generieren (Qualitätsgewinne/Erweiterung)."
        },

        // 5. LÜCKENTEXT (BPM-Prozess)
        {
            frage: "Vervollständigen Sie die Schritte eines grundlegenden Business Process Management (BPM) Prozesses.",
            typ: "lueckentext_auswahl",
            schwierigkeit: "mittel",
            text: "Der BPM-Zyklus beginnt mit der [LUECKE1] des Prozesses, gefolgt von der [LUECKE2] in IT-Systemen, der Überwachung (Monitoring) und der abschließenden [LUECKE3] zur kontinuierlichen Verbesserung.",
            optionen: ["Design", "Implementierung", "Kontinuierliche Verbesserung", "Strategische Planung", "Outsourcing"],
            antwort: ["Design", "Implementierung", "Kontinuierliche Verbesserung"],
            erklaerung: "Der BPM-Zyklus ist ein geschlossener Regelkreis, der mit der Planung (Design) beginnt, über die Ausführung (Implementierung) läuft und mit der Optimierung (Verbesserung) endet."
        }
    ]
},

'wa': {
    titel: "Wissenschaftliches Arbeiten (5 CP)",
    fragen: [
        // FRAGE 1: Sortierung (Mittel)
        {
            frage: "Bringen Sie die Phasen eines Forschungsprozesses in die korrekte Reihenfolge (von 1 bis 5).",
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
            erklaerung: "Der Forschungsprozess folgt immer einer klaren Logik: Frage/Zielsetzung -> Recherche/Grundlagen -> Planung -> Durchführung/Daten -> Auswertung/Abschluss."
        },
        // FRAGE 2: Single Choice (Mittel)
        {
            frage: "Welche Stilmittel müssen in wissenschaftlichen Arbeiten unbedingt vermieden werden?",
            optionen: ["Fachbegriffe", "Umgangssprache und umgangssprachliche Abkürzungen", "Passivsätze"],
            antwort: 1,
            typ: "single_choice",
            schwierigkeit: "mittel",
            erklaerung: "Wissenschaftliche Arbeiten müssen objektiv, präzise und formal sein. Umgangssprache (z.B. 'echt super') und umgangssprachliche Abkürzungen (z.B. 'usw.') sind daher zu vermeiden."
        },
        // FRAGE 3: Single Choice (Schwer)
        {
            frage: "Was ist das Ziel einer 'Peer-Review' in wissenschaftlichen Journals?",
            optionen: ["Die Bezahlung des Autors festlegen.", "Die Qualität, Validität und Originalität der Forschung sicherzustellen.", "Die Arbeit in eine andere Sprache zu übersetzen."],
            antwort: 1,
            typ: "single_choice",
            schwierigkeit: "schwer",
            hinweis: "Hier geht es um die Gütekriterien der Forschung.",
            erklaerung: "Das Peer-Review-Verfahren ist die Begutachtung einer Arbeit durch unabhängige, gleichrangige Fachexperten, um die wissenschaftliche Güte vor der Veröffentlichung zu sichern."
        },
        // FRAGE 4: NEU: Lückentext-Auswahl (Mittel)
        {
            frage: "Füllen Sie die Lücken im Satz zur Definition des Plagiats.",
            typ: "lueckentext",
            schwierigkeit: "mittel",
            text: "Ein Plagiat liegt vor, wenn man [LUECKE1] oder Textteile [LUECKE2] ohne korrekte [LUECKE3] als eigene Leistung ausgibt.",
            // Die Optionen sind für alle Dropdowns zusammen
            optionen: ["Ideen", "Formulierung", "Quelle", "Internet", "Veröffentlichung", "wörtlich", "Sicherung", "Quellenangabe"],
            // Die korrekte Antwort, in der Reihenfolge der Lücken
            antwort: ["Ideen", "wörtlich", "Quellenangabe"],
            erklaerung: "Ein Plagiat ist die Übernahme fremden geistigen Eigentums – egal ob es eine wörtliche Übernahme oder die nur sinngemäße Übernahme einer Idee ist – ohne die Herkunft zu nennen."
        },
        // FRAGE 5: NEU: Zuordnung (Schwer)
        {
            frage: "Ordnen Sie die Begrifflichkeiten den korrekten wissenschaftlichen Gütekriterien zu.",
            typ: "zuordnung",
            schwierigkeit: "schwer",
            hinweis: "Merke: Reliabilität = Wiederholung, Validität = Messung des Richtigen.",
            items: {
                begriffe: [
                    "Zuverlässigkeit der Messung (Wiederholbarkeit)",
                    "Messung dessen, was gemessen werden soll (Gültigkeit)",
                    "Nachvollziehbarkeit der Ergebnisse und Methodik"
                ],
                definitionen: [
                    "Reliabilität",
                    "Validität",
                    "Objektivität"
                ]
            },
            // Das korrekte Paar von [Begriff, Definition]
            antwort: [
                ["Zuverlässigkeit der Messung (Wiederholbarkeit)", "Reliabilität"],
                ["Messung dessen, was gemessen werden soll (Gültigkeit)", "Validität"],
                ["Nachvollziehbarkeit der Ergebnisse und Methodik", "Objektivität"]
            ],
            erklaerung: "Die drei Hauptgütekriterien empirischer Forschung sind: **Objektivität** (Unabhängigkeit des Forschers), **Reliabilität** (Zuverlässigkeit der Messung) und **Validität** (Gültigkeit der Messung)."
        }
    ]
},

 'itr': {
     titel: "IT-Recht (5 CP)",
     fragen: [
         // FRAGE 1: Lückentext (Drag & Drop) - Basierend auf alter SC-Frage 1
         {
             frage: "Vervollständigen Sie den Satz zum Hauptziel der DSGVO.",
             typ: "lueckentext",
             schwierigkeit: "einfach",
             text: "Das Hauptziel der DSGVO ist die [LUECKE1] der Datenschutzbestimmungen in der EU und der [LUECKE2] natürlicher Personen bei der Verarbeitung ihrer [LUECKE3].",
             optionen: ["Vereinheitlichung", "Schutz", "Daten", "Regulierung", "Gesetze"],
             antwort: ["Vereinheitlichung", "Schutz", "Daten"],
             erklaerung: "Die DSGVO sorgt für einheitliche Regeln in der gesamten EU, um die Kontrolle über personenbezogene Daten zu gewährleisten."
         },
         // FRAGE 2: Zuordnung - Basierend auf alter MC-Frage 2
         {
             frage: "Ordnen Sie die Rechte aus der DSGVO der korrekten Begrifflichkeit zu.",
             typ: "zuordnung",
             schwierigkeit: "mittel",
             hinweis: "Die Rechte von betroffenen Personen sind zentral im IT-Recht.",
             items: {
                 begriffe: [
                     "Daten an einen anderen Anbieter übertragen",
                     "Auskunft über gespeicherte Daten erhalten",
                     "Fordern, dass gespeicherte Daten gelöscht werden"
                 ],
                 definitionen: [
                     "Recht auf Löschung",
                     "Recht auf Datenübertragbarkeit",
                     "Recht auf Auskunft"
                 ]
             },
             antwort: [
                 ["Daten an einen anderen Anbieter übertragen", "Recht auf Datenübertragbarkeit"],
                 ["Auskunft über gespeicherte Daten erhalten", "Recht auf Auskunft"],
                 ["Fordern, dass gespeicherte Daten gelöscht werden", "Recht auf Löschung"]
             ],
             erklaerung: "Betroffene Personen haben umfassende Rechte, um Kontrolle darüber zu behalten, wer welche ihrer Daten speichert und verarbeitet."
         },
         // FRAGE 3: Single Choice (Behalten)
         {
             frage: "Was regelt das 'Urheberrecht' in Bezug auf Software?",
             optionen: ["Die Haftung bei Fehlfunktionen.", "Den Schutz des Quellcodes als Sprachwerk des Programmierers.", "Die Lizenzgebühren für Hardware."],
             antwort: 1,
             typ: "single_choice",
             schwierigkeit: "mittel",
             erklaerung: "In Deutschland wird der Quellcode einer Software als individuelles geistiges Schaffen betrachtet und ist daher als 'Sprachwerk' urheberrechtlich geschützt."
         },
         // FRAGE 4: Sortierung - Basierend auf alter MC-Frage 4
         {
             frage: "Bringen Sie die folgenden legalen Grundlagen für die Datenverarbeitung nach Art. 6 DSGVO in die alphabetische Reihenfolge.",
             typ: "sortierung",
             schwierigkeit: "schwer",
             items: [
                 "Die betroffene Person hat eingewilligt.",
                 "Die Verarbeitung ist zur Erfüllung eines Vertrages notwendig.",
                 "Die Verarbeitung ist zur Wahrung berechtigter Interessen des Verantwortlichen erforderlich."
             ],
             antwort: [
                 "Die betroffene Person hat eingewilligt.",
                 "Die Verarbeitung ist zur Wahrung berechtigter Interessen des Verantwortlichen erforderlich.",
                 "Die Verarbeitung ist zur Erfüllung eines Vertrages notwendig."
             ],
             erklaerung: "Die drei hier genannten Rechtsgrundlagen sind die gängigsten für die Datenverarbeitung. Ohne eine solche Grundlage ist die Verarbeitung unzulässig."
         },
         // NEUE FRAGE 5: Multiple Choice (Ersatz für Cloud Act)
         {
             frage: "Welche der folgenden Maßnahmen dienen der IT-Sicherheit und der Erfüllung datenschutzrechtlicher Vorgaben?",
             optionen: ["Regelmäßige Sicherheitsschulungen für Mitarbeiter", "Einsatz von Verschlüsselungstechnologien", "Zugriffskontrollen (z.B. Zwei-Faktor-Authentifizierung)", "Veröffentlichung aller Passwörter im Intranet"],
             antwort: [0, 1, 2],
             typ: "multiple_choice",
             schwierigkeit: "schwer",
             hinweis: "Denken Sie an organisatorische und technische Maßnahmen (Art. 32 DSGVO)."
         }
     ]
 },

//==================================
// SONDERMODULE (Platzhalter)
//==================================
'praxis': {
  titel: "Berufspraktische Tätigkeit",
  fragen: [],
  error: "Für dieses Modul gibt es kein Quiz. Hier geht es um deine Praxiserfahrung! Bist du bereit, die Theorie anzuwenden?"
},

'wi1': {
  titel: "Wahlmodul WI",
  fragen: [],
  error: "Dies ist ein Wahlmodul. Hier entscheidest DU, worauf du Lust hast! (Noch kein spezifisches Quiz verfügbar)"
},

'pdt': {
  titel: "Projekt Digitalisierung",
  fragen: [],
  error: "Im Projekt ist Teamarbeit gefragt! Hier gibt es kein 'richtig' oder 'falsch' auf Knopfdruck, sondern nur das gemeinsame Ziel."
},

'international': {
  titel: "Wahlmodul Internationalisierung",
  fragen: [],
  error: "Hier geht es um den Blick über den Tellerrand! Für dieses Modul ist (noch) kein Quiz hinterlegt."
},

'portfolio': {
  titel: "Portfolio WI",
  fragen: [],
  error: "Im Portfolio zeigst du, was DU gelernt hast. Das ist deine persönliche Zusammenfassung – dafür gibt es kein Standard-Quiz!"
},

'thesis': {
  titel: "Bachelor-Thesis",
  fragen: [],
  error: "Jetzt wird es ernst! Das Thema deiner Thesis ist so individuell wie du. Viel Erfolg beim Forschen!"
},

    // Platzhalter für nicht gefundene Quiz
    'nicht_gefunden': {
      titel: "Quiz nicht gefunden",
      fragen: [],
      error: "Für dieses Modul wurde noch kein Quiz erstellt."
    }
  };
