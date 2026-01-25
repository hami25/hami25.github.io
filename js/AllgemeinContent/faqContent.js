// -----------------------------------------------------------------------------
// CONTENT-ONLY Datei (Redaktion):
// - FAQ_SECTIONS: strukturierte FAQ nach Themen.
// - answer ist ein Array von Absätzen. Jeder Eintrag wird als eigener <p> gerendert.
// - cta.hash ist ein Sprungziel (#...).
// -----------------------------------------------------------------------------

export const FAQ_SECTIONS = [
  {
    id: "kurz",
    title: "Häufige Kurzfragen",
    intro: "Kurze Antworten auf die häufigsten Fragen.",
    items: [
      {
        question: "Wie schwer ist „Diskrete Strukturen?",
        answer: [
          "Anspruchsvoll, aber mit Übungen, Fragen und etwas Durchhaltevermögen machbar. \n" +
          "Du solltest bereit sein, regelmäßig mitzuarbeiten und nicht alles auf die letzte Woche vor der Klausur zu schieben. \n" +
          "Wenn du Mathe aus der Oberstufe grob drauf hast und Fragen stellst, \n" +
          "wenn du hängen bleibst, ist es gut zu schaffen."
        ]
      },
      {
        question: "Brauche ich Mathe-LK?",
        answer: [
          "Nein. Wichtiger ist Lust auf logisches, abstraktes Denken. \n" +
          "Ein Mathe-LK kann helfen, ist aber keine Pflicht. Viele starten ohne LK. \n" +
          "Wichtig ist, dass du bereit bist, neue Begriffe (Menge, Relation, Graph, Beweis) \n" +
          "kennenzulernen und wirklich zu üben."
        ]
      },
      {
        question: "Wofür brauche ich das später?",
        answer: [
          "Für viele IT-Jobs: Algorithmen, Datenstrukturen, Security, Data Science... \n" +
          "Diskrete Strukturen sind Basis für Softwareentwicklung, Datenanalyse, \n" +
          "IT-Security, KI und mehr. Viele Praxisprobleme lassen sich besser lösen, \n" +
          "wenn du diese Grundlagen kennst."
        ]
      },
      {
        question: "Was, wenn ich nicht mitkomme?",
        answer: [
          "Früh melden, Angebote nutzen! Du bist nicht allein. \n" +
          "Nutze Übungen, Tutorien, Fragestunden und Lerngruppen. Es ist völlig normal, \n" +
          "nicht alles sofort zu verstehen. Je früher du nachfragst, desto entspannter \n" +
          "wird die Klausurphase."
        ]
      },
      {
        question: "Passt das Studium überhaupt zu mir?",
        answer: [
          "Beantworte ein paar Fragen zu deinen Interessen und swipe durch passende \n" +
          "Berufsbilder. So bekommst du ein Gefühl, ob Inhalte wie „Diskrete Strukturen“ \n" +
          "zu deinen Stärken und Zielen passen."
        ],
        cta: { label: "Zum Beruf- & Modul-Checker", hash: "#career-modal" }
      },
      {
        question: "Brauche ich Programmier-Vorkenntnisse?",
        answer: [
          "Nein, wichtiger sind Neugier, Geduld und regelmäßiges Üben. \n" +
          "Viele starten ohne Vorerfahrung. Du lernst Schritt für Schritt die Grundlagen. \n" +
          "Programmieren ist wie eine neue Sprache: am Anfang ungewohnt, mit Übung wird’s leichter."
        ]
      },
      {
        question: "Wie anders ist Mathe an der Uni?",
        answer: [
          "Oft weniger „Rechnen“, mehr Logik, Begründungen und Verständnis. \n" +
          "Uni-Mathe ist häufig abstrakter als Schulmathe: Es geht stärker um Begriffe, \n" +
          "Zusammenhänge und sauberes Denken. Mit Übungen und Beispielaufgaben wird’s greifbarer."
        ]
      },
      {
        question: "Wie lernt man für Uni-Klausuren?",
        answer: [
          "Kontinuierlich, am besten jede Woche ein bisschen statt „last minute“. \n" +
          "In vielen Modulen helfen Übungen und alte Aufgaben mehr als reines Lesen. \n" +
          "Ein guter Rhythmus: wöchentlich nacharbeiten, Fragen sammeln, in der Prüfungsphase gezielt wiederholen."
        ]
      },
      {
        question: "Was passiert, wenn ich eine Klausur nicht bestehe?",
        answer: [
          "Das kann vorkommen! Wichtig ist, ruhig zu bleiben und früh gegenzusteuern. \n" +
          "Durchfallen ist kein Weltuntergang. In der Regel gibt es Wiederholungen und \n" +
          "Unterstützungsangebote (Tutorien, Sprechstunden, Lerngruppen). \n" +
          "Entscheidend: nicht abtauchen, sondern direkt klären, woran es lag."
        ]
      },
      {
        question: "Bin ich an der Hochschule „nur eine Nummer“?",
        answer: [
          "In Vorlesungen sind teilweise viele Studierende. Aber in Übungen und Projekten wirst du schnell „sichtbar“. \n" +
          "Gerade in Übungen, Tutorien und Gruppenprojekten entsteht schnell Kontakt. \n" +
          "Wenn du Fragen stellst und mitarbeitest, findest du meist schnell Leute zum Lernen."
        ]
      },
      {
        question: "Wie zeitintensiv ist das Studium wirklich?",
        answer: [
          "Betrachte das Studium eher wie ein Vollzeitjob, mit Phasen, in denen es deutlich mehr wird. \n" +
          "Während des Semesters ist es gut planbar: Vorlesungen/Übungen + Nacharbeiten. \n" +
          "In Prüfungsphasen steigt der Aufwand spürbar. Wer früh Struktur hat, kommt entspannter durch."
        ]
      },
      {
        question: "Kann ich nebenbei arbeiten?",
        answer: [
          "Ja, das geht, aber sinnvoll dosiert und in Prüfungsphasen flexibel bleiben. \n" +
          "Viele Studierende haben einen Nebenjob. Wichtig ist, realistisch zu planen: \n" +
          "In intensiven Wochen (Abgaben/Klausuren) brauchst du Luft. Flexibel oder weniger Stunden ist oft ideal."
        ]
      },

      {
        question: "Ist Wirtschaftsinformatik eher IT oder eher BWL?",
        answer: [
          "Beides: WI ist die Schnittstelle zwischen IT (Programmieren, Daten, Systeme) und Wirtschaft (Prozesse, Organisation). \n" +
          "Du arbeitest viel daran, Abläufe zu verstehen und digital zu verbessern."
        ]
      }
    ]
  },

  {
    id: "technik",
    title: "Technik & IT-Infrastruktur",
    intro: "Tools, Lizenzen, Laptop & Arbeitsplätze.",
    items: [
      {
        question: "Welche Softwarelizenzen oder IT-Tools bekomme ich als Studierende:r?",
        answer: [
          "Du erhältst kostenlosen Zugriff auf Microsoft Office 365 (Word, Excel, Teams etc.).\n" +
          "Über das Programm „Azure Dev Tools for Teaching“ gibt es viele Microsoft-Entwicklertools \n" +
          "gratis. Zudem bieten wir je nach Fachbereich Lizenzen für MATLAB, vergünstigte Adobe Creative Cloud Abos."
        ]
      },
      {
        question: "Gibt es moderne Laborräume oder Projektarbeitsplätze?",
        answer: [
          "Ja, absolut. Die Hochschule hat spezialisierte PC-Pools. Für Gruppenarbeiten stehen \n" +
          "dir Coworking-Flächen und Projekträume zur Verfügung, die du teilweise auch reservieren \n" +
          "kannst."
        ]
      },
      {
        question: "Wird ein eigener Laptop empfohlen?",
        answer: [
          "Ja, wir empfehlen dringend die Anschaffung eines eigenen Laptops. In der \n" +
          "Wirtschaftsinformatik arbeitest du viel mit Entwicklungsumgebungen (IDEs) und \n" +
          "Datenbanken. Ein Gerät mit mindestens 16 GB RAM und einer SSD ist ratsam, um flüssig \n" +
          "arbeiten zu können. Das Runterladen einiger Programme kann auf MAC-Geräten eine \n" +
          "Herausforderung sein, mit anderen Betriebssystemen ist das etwas einfacher."
        ]
      }
    ]
  },

  {
    id: "bewerbung",
    title: "Bewerbung & Zulassung",
    intro: "Voraussetzungen, Ablauf, NC, Anrechnung.",
    items: [
      {
        question: "Welche Zugangsvoraussetzungen gibt es für Wirtschaftsinformatik?",
        answer: [
          "Du benötigst die allgemeine Hochschulreife, die fachgebundene Hochschulreife \n" +
          "oder die Fachhochschulreife. Auch beruflich Qualifizierte (z. B. Meister oder Personen mit \n" +
          "Ausbildung und mehrjähriger Berufserfahrung) können unter bestimmten Bedingungen \n" +
          "studieren."
        ]
      },
      {
        question: "Wie läuft die Bewerbung ab?",
        answer: [
          "Die Bewerbung erfolgt digital über das Portal HSRM Compass. Da \n" +
          "Wirtschaftsinformatik oft am Dialogorientierten Serviceverfahren (DoSV) teilnimmt, musst du \n" +
          "dich meist parallel auch auf hochschulstart.de registrieren und die dortige Bewerber-ID in \n" +
          "unserem Portal angeben. Auf der Internetseite von hochschulstart.de kannst du auch \n" +
          "nachlesen, wie du dich anmeldest."
        ]
      },
      {
        question: "Gibt es einen NC?",
        answer: [
          "Ja, Wirtschaftsinformatik ist in der Regel zulassungsbeschränkt. Der NC (Numerus \n" +
          "Clausus) ist jedoch keine feste Grenze, sondern hängt von der Anzahl der Bewerber ab. Er lag \n" +
          "in den letzten Jahren oft im Bereich von 2,5 bis 3,0 – das kann sich aber jedes Semester \n" +
          "ändern. Solltest du dich dual beworben haben, dann ist es NC frei. "
        ]
      },
      {
        question: "Werden berufliche Erfahrungen oder eine Ausbildung angerechnet?",
        answer: [
          "Ja! Wenn du zum Beispiel eine Ausbildung als Fachinformatiker:in abgeschlossen \n" +
          "hast, kannst du dir bestimmte Module anrechnen lassen. Das spart Zeit und Arbeit. Den \n" +
          "Antrag stellst du nach der Einschreibung beim Prüfungsausschuss."
        ]
      }
    ]
  },

  {
    id: "campus",
    title: "Beratung, Campusleben & Wohnen",
    intro: "Support, Wohnen, Erreichbarkeit.",
    items: [
      {
        question: "Gibt es Stipendien oder Förderprogramme?",
        answer: [
          "Ja. Neben dem BAföG gibt es das Deutschlandstipendium (300 € monatlich), für \n" +
          "das man sich jährlich bewerben kann. Auch Begabtenförderungswerke und spezifische \n" +
          "Stipendien für Auslandssemester (Erasmus+) sind verfügbar. Spezifische Fragen hierzu kannst \n" +
          "du dem Sekretariat stellen, falls du an der Hochschule RheinMain angenommen werden \n" +
          "solltest."
        ]
      },
      {
        question: "Gibt es Beratungsangebote (Studienberatung, psychologische Beratung, Lerncoaching)?",
        answer: [
          "Die Hochschule bietet ein volles Support-Programm: Die Zentrale Studienberatung \n" +
          "(ZSB) hilft bei allgemeinen Fragen, das Lerncoaching unterstützt dich bei Zeitmanagement \n" +
          "oder Prüfungsangst, und das Studierendenwerk bietet eine professionelle \n" +
          "psychotherapeutische Beratung an."
        ]
      },
      {
        question: "Wie finde ich eine Wohnung in Wiesbaden?",
        answer: [
          "Die Suche ist in Wiesbaden herausfordernd. Nutze Portale wie WG-Gesucht, die \n" +
          "Privatzimmerbörse des Studierendenwerks oder lokale Facebook-Gruppen. Fang am besten \n" +
          "sofort nach der Zusage anzusuchen!"
        ]
      },
      {
        question: "Gibt es günstige Wohnheimplätze?",
        answer: [
          "Ja, das Studierendenwerk Frankfurt betreibt Wohnheime in Wiesbaden wie auch \n" +
          "Frankfurt. Die Mieten sind mit ca. 250 € bis 400 € sehr günstig. Wichtig: Bewirb dich \n" +
          "frühzeitig online beim Studierendenwerk, da die Wartelisten lang sind."
        ]
      },
      {
        question: "Wie gut ist die Hochschule erreichbar?",
        answer: [
          "Unser Standort Wiesbaden, Unter den Eichen, ist fest in das Bus- und Bahnnetz integriert. \n" +
          "Die Bushaltestelle „Nordfriedhof“ ist mit den Buslinien 3, 6 und 28 ab Wiesbaden Hauptbahnhof \n" +
          "erreichbar. Die Bushaltestelle „Unter den Eichen“ mit den Buslinien 3 oder E48. \n" +
          "Dein Semesterticket erlaubt dir zudem die kostenlose Nutzung des Deutschlandtickets. \n" +
          "Auf unserem Campus befindet sich eine Fahrradstation von nextbike. Von Campus zu Campus sowie \n" +
          "von und zum Wiesbadener Hauptbahnhof ist es möglich, Leihfahrräder zu benutzen. \n" +
          "Die Fahrräder kannst du beliebig oft für bis zu 60 Minuten ausleihen, ohne dass dir dafür Kosten \n" +
          "entstehen."
        ]
      }
    ]
  },

  {
    id: "orga",
    title: "Organisation & Plattformen",
    intro: "CP/ECTS und die wichtigsten Systeme.",
    items: [
      {
        question: "Was sind CP?",
        answer: [
          "CP steht für Credit Points (nach dem ECTS-System). Ein CP entspricht einem \n" +
          "Arbeitsaufwand von etwa 30 Stunden."
        ]
      },
      {
        question: "Welche Plattformen gibt es?",
        answer: [
          "Wir nutzen drei Hauptsysteme:",
            "1. HSRM Compass: Für die Verwaltung (Immatrikulation, Notenspiegel, Anmeldung zu Prüfungen).",
            "2. Stud.IP: Die Lernplattform für Skripte, Vorlesungsunterlagen und die Kommunikation in den Kursen.",
            "3. Webmail: Dein offizieller Hochschul-Account. Alle wichtigen Infos kommen hier an!"
        ]
      }
    ]
  },

  {
    id: "vorbereitung",
    title: "Vorbereitung aufs Studium",
    intro: "Wie du entspannt starten kannst.",
    items: [
      {
        question: "Kann man sich schon auf das Studium vorbereiten?",
        answer: [
         "Zwei Wochen zum offiziellen Beginn des Semesters steht dir der Mathevorkurs zur Verfügung.\n" +
         "Begleitet wird diese Veranstaltung von einem Professor, hier werden nochmal Grundlagen und auch\n" +
         "erweitertes Wissen der Mathematik vermittelt. Die Veranstaltung ist auf freiwilliger Basis, also selbst,\n" +
         "wenn du nicht kommst, ist das in Ordnung. Hier brauchst du dich nicht unterkriegen zulassen, falls du\n" +
         "mal etwas nicht kennst oder kannst. Diese Veranstaltung ist sehr empfehlenswert, weil du hier nicht\n" +
         "nur etwas lernst, sondern auch schon vor dem Studium Kontakte knüpfen kannst."
        ]
      }
    ]
  }
];
// -----------------------------------------------------------------------------
// Kompatibilitäts-Export für den aktuellen Renderer:
// renderFaq.js importiert FAQ_ITEMS. Wir liefern deshalb ein "flattened" Array,
// das alle items aus allen Sections enthält.
// -----------------------------------------------------------------------------
export const FAQ_ITEMS = FAQ_SECTIONS.flatMap((section) => section.items);
