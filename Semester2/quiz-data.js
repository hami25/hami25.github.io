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
            antwort: 0 // Die erste Option (Index 0) ist richtig
        },
        { 
            frage: "Was ist der Unterschied zwischen Hardware & Software?",
            optionen: ["Hardware ist schnell, Software ist langsam", "Hardware kann man anfassen (z.B. Monitor), Software nicht (z.B. App)", "Hardware ist der Code, Software ist das Programm"],
            antwort: 1 
        },
        { 
            frage: "Was macht ein 'Algorithmus'?",
            optionen: ["Er speichert Daten", "Er verschlüsselt Passwörter", "Er ist eine Schritt-für-Schritt-Anleitung, um ein Problem zu lösen"],
            antwort: 2
        }
        ]
    },
    'oose': {
      titel: "OOSE Einsteiger-Check",
      fragen: [
        { 
          frage: "Was ist eine 'Klasse' in der OOSE am besten beschrieben?",
          optionen: ["Ein spezifisches Objekt (z.B. dein Fahrrad)", "Ein Bauplan oder eine Schablone (z.B. der Bauplan eines Fahrrads)", "Eine Funktion im Code", "Eine Variable"],
          antwort: 1 // Das zweite Element (Index 1) ist richtig
        },
        { 
          frage: "Was ist ein 'Objekt'?",
          optionen: ["Ein Synonym für 'Variable'", "Der Code in der Klassendatei", "Eine konkrete Ausprägung einer Klasse (z.B. 'Mein Hund Bello')", "Der Oberbegriff für alle Lebewesen"],
          antwort: 2
        },
        { 
          frage: "Die Klasse 'Auto' hat die Fähigkeit 'hupen()'. Wie nennt man diese Fähigkeit?",
          optionen: ["Attribut", "Methode", "Vererbung", "Instanz"],
          antwort: 1
        },
        { 
          frage: "Was versteht man unter 'Vererbung'?",
          optionen: ["Eine Klasse gibt ihre Eigenschaften an eine Unterklasse weiter", "Ein Objekt schickt Daten an ein anderes", "Das Erstellen eines neuen Objekts", "Das Kapseln von Daten"],
          antwort: 0
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
      frage: "Was bedeutet „Clean Code“?",
      optionen: [
        "Code, der automatisch Viren entfernt",
        "Code, der gut lesbar und wartbar ist",
        "Code ohne Leerzeichen",
        "Code, der nur mit Kommentaren funktioniert"
      ],
      antwort: 1,
      level: "einfach"
    },
    {
      frage: "Wozu dienen Unit-Tests?",
      optionen: [
        "Um Daten in einer Datenbank zu speichern",
        "Um einzelne Funktionen/Methoden automatisch zu prüfen",
        "Um Webseiten zu gestalten",
        "Um Passwörter zu verschlüsseln"
      ],
      antwort: 1,
      level: "einfach"
    },
    {
      frage: "Mini-Aufgabe: Du siehst denselben Codeblock an drei Stellen im Projekt. Was ist eine sinnvolle Verbesserung?",
      optionen: [
        "Den Code dreimal kopieren, damit alles 'gleich' bleibt",
        "Eine Funktion/Methode daraus machen und wiederverwenden (Refactoring)",
        "Alles in eine riesige Klasse packen",
        "Nichts ändern – doppelt hält besser"
      ],
      antwort: 1,
      level: "mittel"
    },
    {
      frage: "Was ist ein „Design Pattern“ (Entwurfsmuster)?",
      optionen: [
        "Ein schickes Layout für Apps",
        "Eine wiederverwendbare Lösung für ein häufiges Entwurfsproblem",
        "Ein Fehler im Code",
        "Eine Datenbanktabelle"
      ],
      antwort: 1,
      level: "mittel"
    },
    {
      frage: "Das „Single Responsibility Principle“ sagt grob:",
      optionen: [
        "Eine Klasse/Funktion sollte nur einen klaren Verantwortungsbereich haben",
        "Eine Klasse sollte alles können, dann ist es einfacher",
        "Es darf nur eine Datei im Projekt geben",
        "Methoden müssen immer genau 3 Zeilen haben"
      ],
      antwort: 0,
      level: "schwer"
    }
  ]
},
'db': {
  titel: "Check: Datenbanken",
  fragen: [
    {
      frage: "Wofür steht „SQL“?",
      optionen: [
        "Simple Query Logic",
        "Structured Query Language",
        "Software Quality Level",
        "Secure Question List"
      ],
      antwort: 1,
      level: "einfach"
    },
    {
      frage: "Was ist ein Primärschlüssel (Primary Key)?",
      optionen: [
        "Ein Passwort für die Datenbank",
        "Ein Feld, das einen Datensatz eindeutig identifiziert",
        "Der erste Eintrag in einer Tabelle",
        "Ein Backup der Tabelle"
      ],
      antwort: 1,
      level: "einfach"
    },
    {
      frage: "Mini-Aufgabe: Du hast eine Tabelle KUNDEN und eine Tabelle BESTELLUNGEN. Du willst Name + Bestellnummer zusammen anzeigen. Was brauchst du typischerweise?",
      optionen: [
        "JOIN",
        "INSERT",
        "ORDER BY",
        "DROP TABLE"
      ],
      antwort: 0,
      level: "mittel"
    },
    {
      frage: "Warum normalisiert man Tabellen?",
      optionen: [
        "Damit Tabellen bunter aussehen",
        "Um Redundanzen zu reduzieren und Datenfehler zu vermeiden",
        "Damit SQL schneller tippt",
        "Damit man keine Primärschlüssel braucht"
      ],
      antwort: 1,
      level: "mittel"
    },
    {
      frage: "Was ist der typische Unterschied zwischen WHERE und HAVING?",
      optionen: [
        "WHERE filtert Zeilen, HAVING filtert Gruppen (nach GROUP BY)",
        "HAVING filtert Zeilen, WHERE filtert Gruppen",
        "Beides ist identisch, nur andere Schreibweise",
        "WHERE funktioniert nur mit JOINs"
      ],
      antwort: 0,
      level: "schwer"
    }
  ]
},
'gpm': {
  titel: "Check: Geschäftsprozessmanagement",
  fragen: [
    {
      frage: "Was ist ein Geschäftsprozess?",
      optionen: [
        "Ein Gespräch mit dem Chef",
        "Eine Abfolge von Schritten, um ein Ziel zu erreichen (z. B. Bestellung bearbeiten)",
        "Ein Jahresabschluss",
        "Ein reines IT-System"
      ],
      antwort: 1,
      level: "einfach"
    },
    {
      frage: "Wozu nutzt man BPMN oder EPKs typischerweise?",
      optionen: [
        "Um Prozesse zu visualisieren und zu beschreiben",
        "Um Passwörter sicher zu speichern",
        "Um Datenbanken zu normalisieren",
        "Um Programmcode zu kompilieren"
      ],
      antwort: 0,
      level: "einfach"
    },
    {
      frage: "Mini-Aufgabe: Du zeichnest einen Prozess in BPMN. Womit startet ein Prozess meistens?",
      optionen: [
        "Mit einem Ereignis/Start-Event (z. B. „Bestellung eingegangen“)",
        "Mit einem KPI",
        "Mit einer SQL-Abfrage",
        "Mit einer Bilanz"
      ],
      antwort: 0,
      level: "mittel"
    },
    {
      frage: "Was ist ein KPI im Prozessmanagement?",
      optionen: [
        "Eine Kennzahl, um Leistung zu messen (z. B. Durchlaufzeit)",
        "Ein Programmierstandard",
        "Ein Datenbankindex",
        "Ein Diagrammtyp"
      ],
      antwort: 0,
      level: "mittel"
    },
    {
      frage: "Was beschreibt ein „Bottleneck“ (Engpass) im Prozess?",
      optionen: [
        "Einen Schritt, der den Ablauf ausbremst (z. B. zu wenig Kapazität)",
        "Einen besonders schnellen Schritt",
        "Einen Schritt, der immer automatisch läuft",
        "Einen Schritt, der nur im ERP existiert"
      ],
      antwort: 0,
      level: "schwer"
    }
  ]
},
'rewe': {
  titel: "Check: Betriebliches Rechnungswesen",
  fragen: [
    {
      frage: "Wie lautet der Grundsatz der doppelten Buchführung?",
      optionen: [
        "Soll an Haben",
        "Haben an Soll",
        "Gewinn an Verlust",
        "Umsatz an Kosten"
      ],
      antwort: 0,
      level: "einfach"
    },
    {
      frage: "Wie lautet die grundlegende Bilanzgleichung?",
      optionen: [
        "Umsatz = Gewinn",
        "Aktiva = Passiva",
        "Kosten = Erlöse",
        "Vermögen = Ausgaben"
      ],
      antwort: 1,
      level: "einfach"
    },
    {
      frage: "Mini-Aufgabe: Wo würdest du „Bankguthaben“ in der Bilanz einordnen?",
      optionen: [
        "Auf die Aktivseite (Vermögen)",
        "Auf die Passivseite (Eigenkapital/Schulden)",
        "In die GuV (Ertrag)",
        "In ein BPMN-Diagramm"
      ],
      antwort: 0,
      level: "mittel"
    },
    {
      frage: "Was zeigt die GuV (Gewinn- und Verlustrechnung)?",
      optionen: [
        "Aufwand und Ertrag eines Zeitraums (zur Ermittlung des Gewinns/Verlusts)",
        "Nur das Vermögen am Stichtag",
        "Nur die offenen Rechnungen",
        "Nur die Steuerlast"
      ],
      antwort: 0,
      level: "mittel"
    },
    {
      frage: "Was passiert mit dem Jahresgewinn (vereinfacht), wenn er nicht ausgeschüttet wird?",
      optionen: [
        "Er erhöht das Eigenkapital",
        "Er wird automatisch zu Schulden",
        "Er verschwindet nach Jahresende",
        "Er wird immer bar ausgezahlt"
      ],
      antwort: 0,
      level: "schwer"
    }
  ]
},
'mathe': {
  titel: "Check: Wirtschaftsmathematik",
  fragen: [
    {
      frage: "Was bedeutet der Grenzwert einer Folge ganz grob?",
      optionen: [
        "Der Wert, dem sich die Folge für sehr große n annähert",
        "Immer der erste Wert der Folge",
        "Die Summe aller Werte der Folge",
        "Die Anzahl der Werte der Folge"
      ],
      antwort: 0,
      level: "leicht"
    },
    {
      frage: "Was beschreibt die Ableitung f'(x) an einer Stelle am besten?",
      optionen: [
        "Die Steigung / Änderungsrate",
        "Die Fläche unter dem Graphen",
        "Die Anzahl der Werte",
        "Den größten Tabellenwert"
      ],
      antwort: 0,
      level: "leicht"
    },
    {
      frage: "Wofür steht ein bestimmtes Integral ∫_a^b f(x) dx oft?",
      optionen: [
        "Für eine aufsummierte Größe zwischen a und b (z. B. Fläche)",
        "Für die Steigung von f bei a",
        "Für den größten Funktionswert",
        "Für die Nullstellen der Funktion"
      ],
      antwort: 0,
      level: "mittel"
    },
    {
      frage: "Mini-Aufgabe (Analytische Geometrie): Wie schreibt man den Punkt P(2,3) als Spaltenvektor?",
      optionen: [
        "[2 3]",
        "(2,3)",
        "[[2],[3]]",
        "[3;2]"
      ],
      antwort: 2,
      level: "mittel"
    },
    {
      frage: "Bei linearer Optimierung liegt ein Optimum häufig …",
      optionen: [
        "… an einem Eckpunkt des zulässigen Bereichs",
        "… immer genau in der Mitte",
        "… immer bei x = 0",
        "… nur, wenn es keine Nebenbedingungen gibt"
      ],
      antwort: 0,
      level: "schwer"
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
        titel: "Check: Webentwicklung",
        fragen: [
            { 
                frage: "Welche Sprache wird primär für die Struktur einer Webseite verwendet?", 
                optionen: ["CSS", "HTML", "PHP", "JavaScript"], 
                antwort: 1, 
                level: "einfach" 
            },
            { 
                frage: "Was bewirkt die CSS-Eigenschaft 'margin: auto;' bei einem Element mit fester Breite?", 
                optionen: ["Es wird unsichtbar", "Es wird links ausgerichtet", "Es wird horizontal zentriert"], 
                antwort: 2, 
                level: "einfach" 
            },
            { 
                frage: "Welches JavaScript-Schlüsselwort wird verwendet, um eine Konstante zu deklarieren?", 
                optionen: ["var", "let", "const"], 
                antwort: 2, 
                level: "einfach" 
            },
            { 
                frage: "Was ist ein 'Closure' in JavaScript?", 
                optionen: ["Ein HTML-End-Tag", "Eine Funktion, die Zugriff auf ihren äußeren Gültigkeitsbereich behält", "Das Schließen einer Datenbankverbindung"], 
                antwort: 1, 
                level: "schwer" 
            },
            { 
                frage: "Was beschreibt das 'Event Bubbling'?", 
                optionen: ["Das Löschen von Events", "Ein Event steigt vom Ziel-Element durch seine Eltern-Elemente nach oben", "Das gleichzeitige Auslösen aller Events"], 
                antwort: 1, 
                level: "schwer" 
            }
        ]
    },

    // 2. Wahlmodul Wirtschaftsinformatik (Beispiel: Cloud/IT-Infrastruktur)
    'wahl_wi': {
        titel: "Check: WI-Wahlmodul",
        fragen: [
            { 
                frage: "Wofür steht die Abkürzung 'SaaS'?", 
                optionen: ["Software as a Service", "System and Application Support", "Storage as a Solution"], 
                antwort: 0, 
                level: "einfach" 
            },
            { 
                frage: "Was ist der Hauptvorteil von Cloud-Infrastrukturen?", 
                optionen: ["Man braucht kein Internet", "Skalierbarkeit und Flexibilität", "Es ist immer kostenlos"], 
                antwort: 1, 
                level: "einfach" 
            },
            { 
                frage: "Was ist eine 'API'?", 
                optionen: ["Ein Antiviren-Programm", "Eine Schnittstelle zur Kommunikation zwischen Programmen", "Ein spezielles Grafikformat"], 
                antwort: 1, 
                level: "einfach" 
            },
            { 
                frage: "Was versteht man unter 'Serverless Computing'?", 
                optionen: ["Es gibt keine Server mehr", "Der Entwickler muss sich nicht um die Serververwaltung kümmern", "Rechnen ohne Strom"], 
                antwort: 1, 
                level: "schwer" 
            },
            { 
                frage: "Was ist der Unterschied zwischen Public und Private Cloud?", 
                optionen: ["Public ist kostenlos, Private kostet Geld", "Public wird geteilt, Private ist exklusiv für eine Organisation", "Es gibt keinen technischen Unterschied"], 
                antwort: 1, 
                level: "schwer" 
            }
        ]
    },

    // 3. Business Intelligence
    'bi': {
        titel: "Check: Business Intelligence",
        fragen: [
            { 
                frage: "Was ist ein 'Dashboard' in BI?", 
                optionen: ["Ein Ablagefach für Akten", "Eine visuelle Anzeige der wichtigsten Kennzahlen (KPIs)", "Ein Server-Gehäuse"], 
                antwort: 1, 
                level: "einfach" 
            },
            { 
                frage: "Wofür steht 'ETL'?", 
                optionen: ["Extract, Transform, Load", "Electronic Trading List", "End of Time Limit"], 
                antwort: 0, 
                level: "einfach" 
            },
            { 
                frage: "Was ist ein 'Data Warehouse'?", 
                optionen: ["Ein physisches Lagerhaus", "Eine zentrale Datenbank zur Analyse von Geschäftsdaten", "Ein Backup-Server"], 
                antwort: 1, 
                level: "einfach" 
            },
            { 
                frage: "Was ist der Unterschied zwischen OLTP und OLAP?", 
                optionen: ["OLTP für operative Transaktionen, OLAP für analytische Abfragen", "Es gibt keinen Unterschied", "OLAP ist nur für Big Data"], 
                antwort: 0, 
                level: "schwer" 
            },
            { 
                frage: "Was beschreibt 'Predictive Analytics'?", 
                optionen: ["Das Archivieren alter Daten", "Die Nutzung von Daten und Algorithmen, um zukünftige Ereignisse vorherzusagen", "Das Löschen von unwichtigen Daten"], 
                antwort: 1, 
                level: "schwer" 
            }
        ]
    },

    // 4. Agiles Projektmanagement
    'agl': {
        titel: "Check: Agiles Management",
        fragen: [
            { 
                frage: "Wie lang ist ein typischer 'Sprint' in Scrum?", 
                optionen: ["1 Jahr", "1 Tag", "1 bis 4 Wochen"], 
                antwort: 2, 
                level: "einfach" 
            },
            { 
                frage: "Wer ist für die Maximierung des Werts des Produkts verantwortlich?", 
                optionen: ["Scrum Master", "Product Owner", "Entwicklerteam"], 
                antwort: 1, 
                level: "einfach" 
            },
            { 
                frage: "Was ist das 'Daily Scrum'?", 
                optionen: ["Ein 15-minütiges Planungs-Meeting", "Ein langes Protokoll-Meeting", "Das Mittagessen"], 
                antwort: 0, 
                level: "einfach" 
            },
            { 
                frage: "Was beschreibt die 'Velocity' in Scrum?", 
                optionen: ["Die Internetgeschwindigkeit", "Die Menge an Arbeit, die ein Team pro Sprint bewältigt", "Die Geschwindigkeit des Product Owners"], 
                antwort: 1, 
                level: "schwer" 
            },
            { 
                frage: "Was ist das Ziel eines 'Burndown Charts'?", 
                optionen: ["Die Server-Temperatur messen", "Die verbleibende Arbeit im Zeitverlauf visualisieren", "Die Kosten pro Mitarbeiter berechnen"], 
                antwort: 1, 
                level: "schwer" 
            }
        ]
    },

//==================================
// SEMESTER 5
//==================================
'cybersec': {
  titel: "Check: Cybersecurity",
  fragen: [
    { 
      frage: "Was ist eine 'Phishing'-Attacke?",
      optionen: ["Ein Virus, der die Festplatte löscht", "Der Versuch, über gefälschte E-Mails an Passwörter zu gelangen", "Ein Angriff auf einen Server"],
      antwort: 1
    },
    { 
      frage: "Wofür stehen 'CIA' in der IT-Sicherheit?",
      optionen: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability (Vertraulichkeit, Integrität, Verfügbarkeit)", "Cyber-Integrity-Act"],
      antwort: 1
    },
    { 
      frage: "Was macht eine 'Firewall'?",
      optionen: ["Sie scannt nach Viren", "Sie kontrolliert den ein- und ausgehenden Netzwerkverkehr", "Sie verschlüsselt E-Mails"],
      antwort: 1
    }
  ]
},

'dt': {
  titel: "Check: Digitale Transformation",
  fragen: [
    { 
      frage: "Was ist 'Digitale Transformation'?",
      optionen: ["Nur die Anschaffung neuer Computer", "Die grundlegende Veränderung von Geschäftsmodellen und Prozessen durch digitale Technologien", "Eine Webseite zu haben"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Industrie 4.0'?",
      optionen: ["Die vierte Version einer Software", "Die Vernetzung der (Industrie-)Produktion (z.B. 'Internet of Things')", "Ein neues Smartphone"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Big Data'?",
      optionen: ["Eine sehr große Excel-Tabelle", "Riesige Datenmengen, die zu groß für traditionelle Datenbanken sind", "Ein Cloud-Speicher"],
      antwort: 1
    }
  ]
},

'wa': {
  titel: "Check: Wissenschaftl. Arbeiten",
  fragen: [
    { 
      frage: "Was ist ein 'Plagiat'?",
      optionen: ["Ein Schreibfehler", "Das 'Abschreiben' oder Übernehmen fremder Ideen, ohne die Quelle anzugeben", "Ein Zitat"],
      antwort: 1
    },
    { 
      frage: "Was ist der Unterschied zwischen 'Zitat' und 'Paraphrase'?",
      optionen: ["Es gibt keinen", "Zitat = wörtlich übernommen (in ...), Paraphrase = sinngemäß wiedergegeben", "Zitat = kurz, Paraphrase = lang"],
      antwort: 1
    },
    { 
      frage: "Was ist eine 'Hypothese'?",
      optionen: ["Eine bewiesene Tatsache", "Eine Vermutung oder Annahme, die man in der Arbeit testen will", "Das Inhaltsverzeichnis"],
      antwort: 1
    }
  ]
},

'itr': {
  titel: "Check: IT-Recht",
  fragen: [
    { 
      frage: "Wofür steht 'DSGVO' (oder 'GDPR')?",
      optionen: ["Deutscher Software-Gerichts-Verbund", "Datenschutz-Grundverordnung", "Digitale-Service-Gesamt-Verordnung"],
      antwort: 1
    },
    { 
      frage: "Was schützt das 'Urheberrecht'?",
      optionen: ["Nur Erfindungen (Patente)", "Persönliche, geistige Schöpfungen (z.B. Code, Musik, Texte)", "Nur den Namen einer Firma (Markenrecht)"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Impressum'?",
      optionen: ["Eine freiwillige Angabe", "Eine gesetzlich vorgeschriebene Anbieter-Kennzeichnung auf Webseiten", "Die Datenschutzerklärung"],
      antwort: 1
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