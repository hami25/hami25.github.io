// -----------------------------------------------------------------------------
// CONTENT-ONLY Datei (Redaktion):
// - Hier stehen nur Berufsvorschläge (keine Logik).
// - WICHTIG: In diesem Tab wird Text im Renderer escaped (escapeHtml).
//   => Bitte KEIN HTML in title/desc/vibe/tags/why/modules verwenden.
// - category wird aktuell v.a. zur Gruppierung genutzt (kann später für Filter dienen).
// - modules sind reine Anzeige-Strings (keine IDs). Am besten exakt so benennen wie im Curriculum.
// -----------------------------------------------------------------------------

export const CAREERS = [
  // ===== Daten & Analytics =====
  {
    emoji: "📊",
    title: "Data Analyst",
    vibe: "Daten verstehen & erklären",
    desc: "Du analysierst Daten und machst daraus klare Handlungsempfehlungen.",
    tags: ["#Daten", "#BI", "#Analyse"],
    category: "Daten",
    why: "Passt, wenn du gerne Muster erkennst und Ergebnisse verständlich erklären möchtest.",
    modules: ["Business Intelligence", "Datenbanken", "Statistik und Wahrscheinlichkeitsrechnung"]
  },
  {
    emoji: "🧠",
    title: "Data Scientist",
    vibe: "Analytisch & neugierig",
    desc: "Du liebst Modelle und willst mit Daten Entscheidungen verbessern.",
    tags: ["#Daten", "#Mathe", "#Modelle"],
    category: "Daten",
    why: "Passt, wenn du Mathe/Logik okay findest und Lust auf Modelle/Prognosen hast.",
    modules: ["Statistik und Wahrscheinlichkeitsrechnung", "Business Intelligence", "Algorithmen und Datenstrukturen"]
  },
  {
    emoji: "🏗️",
    title: "Data Engineer",
    vibe: "Daten-Pipelines bauen",
    desc: "Du sorgst dafür, dass Daten sauber gesammelt, gespeichert und nutzbar werden.",
    tags: ["#Daten", "#Systeme", "#Pipelines"],
    category: "Daten",
    why: "Passt, wenn du gerne Systeme strukturierst und Daten zuverlässig verfügbar machen willst.",
    modules: ["Datenbanken", "Webentwicklung", "Softwaretechnik"]
  },

  // ===== Business / Prozesse / Consulting =====
  {
    emoji: "💼",
    title: "Business Analyst",
    vibe: "Zwischen IT & Management",
    desc: "Du übersetzt Anforderungen zwischen Fachbereich und IT und machst Prozesse schlauer.",
    tags: ["#Prozesse", "#Kommunikation", "#Business"],
    category: "Business",
    why: "Passt, wenn du gerne vermittelst und Prozesse verbessern willst (statt nur zu programmieren).",
    modules: ["Geschäftsprozessmanagement", "Betriebliche Informationssysteme", "Agiles Projektmanagement"]
  },
  {
    emoji: "🧩",
    title: "Requirements Engineer",
    vibe: "Anforderungen glasklar machen",
    desc: "Du sammelst Bedürfnisse, formulierst Anforderungen und hilfst Teams, richtig zu bauen.",
    tags: ["#Requirements", "#Kommunikation", "#Struktur"],
    category: "Business",
    why: "Passt, wenn du strukturiert denkst und gerne Klarheit in komplexe Wünsche bringst.",
    modules: ["Softwaretechnik", "Agiles Projektmanagement", "Geschäftsprozessmanagement"]
  },
  {
    emoji: "🗺️",
    title: "IT-Consultant",
    vibe: "Lösungen für Unternehmen",
    desc: "Du berätst, wie IT eingesetzt wird, um Ziele zu erreichen – technisch & organisatorisch.",
    tags: ["#Beratung", "#IT", "#Business"],
    category: "Business",
    why: "Passt, wenn du gerne mit Menschen arbeitest und Lösungen im Gesamtbild siehst.",
    modules: ["Betriebliche Informationssysteme", "Projekt Digitalisierung", "IT-Recht und Datenschutz"]
  },
  {
    emoji: "🧭",
    title: "Product Owner",
    vibe: "Prioritäten & Nutzerfokus",
    desc: "Du entscheidest, was gebaut wird, priorisierst und hältst Team & Stakeholder zusammen.",
    tags: ["#Agil", "#Produkt", "#Kommunikation"],
    category: "Business",
    why: "Passt, wenn du gern koordinierst, priorisierst und Nutzerbedürfnisse ernst nimmst.",
    modules: ["Agiles Projektmanagement", "Projekt Digitalisierung", "Wissenschaftliches Arbeiten"]
  },
  {
    emoji: "🧠",
    title: "Prozessmanager",
    vibe: "Ordnung im Chaos",
    desc: "Du analysierst Abläufe, findest Engpässe und optimierst Workflows.",
    tags: ["#Prozesse", "#Organisation", "#Optimierung"],
    category: "Business",
    why: "Passt, wenn du gerne Abläufe verbesserst und Probleme praktisch löst.",
    modules: ["Geschäftsprozessmanagement", "Betriebliche Informationssysteme", "Digitale Transformation"]
  },
  {
    emoji: "🛠️",
    title: "ERP Consultant",
    vibe: "Digitaler Prozessbauer",
    desc: "Du bildest Geschäftsprozesse in ERP-Systemen ab und passt sie an Unternehmen an.",
    tags: ["#ERP", "#Prozesse", "#Business"],
    category: "Business",
    why: "Passt, wenn du Prozesse + IT verbinden willst und gerne in Unternehmensabläufe eintauchst.",
    modules: ["Betriebliche Informationssysteme", "Geschäftsprozessmanagement", "Projekt Digitalisierung"]
  },

  // ===== Software & Web =====
  {
    emoji: "🌐",
    title: "Web Developer",
    vibe: "Frontend & Nutzererlebnis",
    desc: "Du entwickelst Web-Anwendungen und machst Oberflächen nutzbar und schön.",
    tags: ["#Web", "#Frontend", "#UI"],
    category: "Software",
    why: "Passt, wenn du sichtbare Ergebnisse magst und Spaß an Oberflächen/Interaktion hast.",
    modules: ["Webentwicklung", "Programmiermethoden", "Objektorientierte Softwareentwicklung"]
  },
  {
    emoji: "⚙️",
    title: "Backend Developer",
    vibe: "Logik & Schnittstellen",
    desc: "Du baust APIs und sorgst für stabile Systeme im Hintergrund.",
    tags: ["#Backend", "#APIs", "#Systeme"],
    category: "Software",
    why: "Passt, wenn du gern logisch tüftelst und robuste Systeme bauen willst.",
    modules: ["Objektorientierte Softwareentwicklung", "Softwaretechnik", "Datenbanken"]
  },
  {
    emoji: "🧪",
    title: "QA / Test Engineer",
    vibe: "Qualität absichern",
    desc: "Du findest Fehler, bevor Nutzer sie finden – mit Tests und sauberem Vorgehen.",
    tags: ["#Testing", "#Qualität", "#Systematisch"],
    category: "Software",
    why: "Passt, wenn du genau bist und Spaß daran hast, Dinge zuverlässig zu machen.",
    modules: ["Softwaretechnik", "Objektorientierte Softwareentwicklung", "Webentwicklung"]
  },

  // ===== IT-Betrieb / Infrastruktur =====
  {
    emoji: "☁️",
    title: "Cloud Engineer",
    vibe: "Skalierbare IT",
    desc: "Du betreibst Systeme in der Cloud und machst sie stabil, sicher und effizient.",
    tags: ["#Cloud", "#Infrastruktur", "#Betrieb"],
    category: "IT-Betrieb",
    why: "Passt, wenn du gerne Systeme betreibst und technische Zusammenhänge verstehst.",
    modules: ["Cybersecurity", "Softwaretechnik", "IT-Recht und Datenschutz"]
  },
  {
    emoji: "🔁",
    title: "DevOps Engineer",
    vibe: "Build, Deploy, Run",
    desc: "Du automatisierst Deployments und bringst Development & Betrieb zusammen.",
    tags: ["#DevOps", "#Automation", "#Tools"],
    category: "IT-Betrieb",
    why: "Passt, wenn du gern automatisierst und willst, dass Systeme sauber laufen.",
    modules: ["Softwaretechnik", "Webentwicklung", "Cybersecurity"]
  },

  // ===== Security =====
  {
    emoji: "🔐",
    title: "IT-Security Specialist",
    vibe: "Systeme schützen",
    desc: "Du machst IT sicherer – von Richtlinien bis Technik, damit Angriffe schwerer werden.",
    tags: ["#Security", "#Sicherheit", "#IT"],
    category: "Security",
    why: "Passt, wenn du gerne Risiken minimierst und dich für Schutz/Privatsphäre interessierst.",
    modules: ["Cybersecurity", "IT-Recht und Datenschutz", "Algorithmen und Datenstrukturen"]
  },

  // ===== eGov =====
  {
    emoji: "🏛️",
    title: "Digitalisierungsmanager (eGov)",
    vibe: "Verwaltung modernisieren",
    desc: "Du unterstützt Digitalisierungsvorhaben in Behörden und bringst Prozesse & IT zusammen.",
    tags: ["#eGov", "#Prozesse", "#Digitalisierung"],
    category: "eGov",
    why: "Passt, wenn du Digitalisierung sinnvoll gestalten willst – mit Blick auf Menschen & Prozesse.",
    modules: ["Projekt Digitalisierung", "Geschäftsprozessmanagement", "IT-Recht und Datenschutz"]
  }
];
