/* =========================================================
   Zentraler Einstiegspunkt
   - HTML lädt nur noch diese Datei
   Contract/Load-Order:
   - Content-Dateien müssen VOR moduleInfoPanel.js geladen sein (nutzt window.MODULE_CONTENT)
   - Modul-Modal Content muss VOR moduleModal.js verfügbar sein, falls man dort drauf zugreift
   ========================================================= */

/* =========================================================
   WELCOME MODAL
   ========================================================= */
import "./welcomeModal.js";

/* =========================================================
   CORE / BASIS
   - Globale Styles / Theme / Basis-Initialisierung
   ========================================================= */
import "./theme.js";

/* =========================================================
   FEATURE: BERUFSFINDER
   ========================================================= */
import "./renderCareerFinder.js";

/* =========================================================
   AllgemeineInfos
   ========================================================= */
import "./renderAllgemeineInfos.js";

/* =========================================================
   FAQ
   ========================================================= */
import "./renderFaq.js";

/* =========================================================
   SIDEBAR
   ========================================================= */
import "./renderSidebar.js";

/* =========================================================
   FILTER + QUIZ + TABS
   ========================================================= */
import "./legendeFilter.js";
import "./miniQuiz.js";
import "./tabs.js";



/* =========================================================
   CONTENT: MODAL-INHALTE (Semester 1 / Inhalte)
   - nur Content/Strings/Daten
   ========================================================= */
import "./Content/diskreteStrukturenModalContentData.js";
import "./Content/einfuehrungInDieBetriebswirtschaftModalContentData.js";
import "./Content/einfuehrungInDieWirtschaftsinformatikModalContentData.js";
import "./Content/objektorientierteSoftwareentwicklungModalContentData.js";
import "./Content/einfuehrungInDieInformatikModalContentData.js";

/* =========================================================
   CONTENT: MODAL-INHALTE (Semester 2 / Inhalte)
   - nur Content/Strings/Daten
   ========================================================= */
import "./Content/programmiermethodenModalContentData.js";
import "./Content/datenbankenModalContentData.js";
import "./Content/geschaeftsprozessmanagementModalContentData.js";
import "./Content/betrieblichesRechnungswesenModalContentData.js";
import "./Content/wirtschaftsmathematikModalContentData.js";

/* =========================================================
   CONTENT: MODAL-INHALTE (Semester 3 / Inhalte)
   - nur Content/Strings/Daten
   ========================================================= */
import "./Content/algorithmenUndDatenstrukturenModalContentData.js";
import "./Content/softwaretechnikModalContentData.js";
import "./Content/betrieblicheInformationssystemeModalContentData.js";
import "./Content/innovationsmanagementModalContentData.js";
import "./Content/statistikUndWahrscheinlichkeitsrechnungModalContentData.js";

/* =========================================================
   CONTENT: MODAL-INHALTE (Semester 4 / Inhalte)
   - nur Content/Strings/Daten
   ========================================================= */
import "./Content/webentwicklungModalContentData.js";
import "./Content/wahlmodulWirtschaftsinformatikModalContentData.js";
import "./Content/businessIntelligenceModalContentData.js";
import "./Content/agilesProjektmanagementModalContentData.js";

/* =========================================================
   CONTENT: MODAL-INHALTE (Semester 5 / Inhalte)
   - nur Content/Strings/Daten
   ========================================================= */
import "./Content/cybersecurityModalContentData.js";
import "./Content/projektDigitalisierungModalContentData.js";
import "./Content/digitaleTransformationModalContentData.js";
import "./Content/wissenschaftlichesArbeitenModalContentData.js";
import "./Content/itRechtUndDatenschutzModalContentData.js";

/* =========================================================
   CONTENT: MODAL-INHALTE (Semester 6 / Inhalte)
   - nur Content/Strings/Daten
   ========================================================= */


/* =========================================================
   CONTENT: MODAL-INHALTE (Semester 7 / Inhalte)
   - nur Content/Strings/Daten
   ========================================================= */
import "./Content/bachelorThesisModalContentData.js";
import "./Content/portfolioWirtschaftsinformatikModalContentData.js";
import "./Content/wahlmodulInternationalisierungModalContent.js";



/* =========================================================
    MODULE – DARSTELLUNG & INTERAKTION
   ========================================================= */
import "./moduleModal.js";

/* =========================================================
   CONTENT: MODULBESCHREIBUNGEN (kurz/lang)
   - alle Beschreibungs-Content-Dateien
   ========================================================= */
import "./ModulBeschreibung/beschreibungDiskreteStrukturenContent.js";
import "./ModulBeschreibung/beschreibungEinfuehrungBWLContent.js";
import "./ModulBeschreibung/beschreibungEinfuehrungWIContent.js";
import "./ModulBeschreibung/beschreibungObjektorientierteSoftwareentwicklungContent.js";
import "./ModulBeschreibung/beschreibungEinfuehrungInformatikContent.js";

import "./ModulBeschreibung/beschreibungProgrammiermethodenContent.js";
import "./ModulBeschreibung/beschreibungDatenbankenContent.js";
import "./ModulBeschreibung/beschreibungGeschaeftsprozessmanagementContent.js";
import "./ModulBeschreibung/beschreibungBetrieblichesRechnungswesenContent.js";
import "./ModulBeschreibung/beschreibungWirtschaftsmathematikContent.js";

import "./ModulBeschreibung/beschreibungAlgorithmenDatenstrukturenContent.js";
import "./ModulBeschreibung/beschreibungSoftwaretechnikContent.js";
import "./ModulBeschreibung/beschreibungBetrieblicheInformationssystemeContent.js";
import "./ModulBeschreibung/beschreibungInnovationsmanagementContent.js";
import "./ModulBeschreibung/beschreibungStatistikWahrscheinlichkeitContent.js";

import "./ModulBeschreibung/beschreibungWebentwicklungContent.js";
import "./ModulBeschreibung/beschreibungBusinessIntelligenceContent.js";
import "./ModulBeschreibung/beschreibungAgilesProjektmanagementContent.js";
import "./ModulBeschreibung/beschreibungWahlmodulWIContent.js";

import "./ModulBeschreibung/beschreibungCybersecurityContent.js";
import "./ModulBeschreibung/beschreibungProjektDigitalisierungContent.js";
import "./ModulBeschreibung/beschreibungDigitaleTransformationContent.js";
import "./ModulBeschreibung/beschreibungWissenschaftlichesArbeitenContent.js";
import "./ModulBeschreibung/beschreibungITRechtDatenschutzContent.js";

import "./ModulBeschreibung/beschreibungBerufspraktischeTaetigkeitContent.js";
import "./ModulBeschreibung/beschreibungWahlmodulInternationalisierungContent.js";
import "./ModulBeschreibung/beschreibungPortfolioWIContent.js";
import "./ModulBeschreibung/beschreibungBachelorThesisContent.js";

/* =========================================================
   INFO PANEL (nutzt Content, daher nach Content laden)
   ========================================================= */
import "./moduleInfoPanel.js";

/* =========================================================
   VIDEO / MEDIEN
   ========================================================= */
import "./videoBerufspraktischeTaetigkeit.js";

/* =========================================================
   DEEP LINKS / INTERNAL NAVIGATION
   ========================================================= */
import "./deepLinks.js";

/* =========================================================
    CHATBOT
   ========================================================= */
import "./chatbot.js"

/* =========================================================
   Optional: Debug
   ========================================================= */
// console.log("main.js loaded");




