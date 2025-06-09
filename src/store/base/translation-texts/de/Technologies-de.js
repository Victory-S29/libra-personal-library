const initialStateTechnologyDe = {
    intro: {
        title: "Technologie-Stack",
        description:
            "Libra ist eine auf React basierende Webanwendung, die entwickelt wurde, um Ihnen ein personalisiertes und skalierbares digitales Bibliothekserlebnis zu bieten. Mit modernen Entwicklungstools erstellt, bietet sie Leistung, Flexibilität und eine benutzerfreundliche Oberfläche auf allen Geräten.",
    },
    framework: {
        title: "Frontend-Framework: React",
        points: [
            "Libra wurde mit React (v18.3.1) entwickelt – einer leistungsstarken JavaScript-Bibliothek für dynamische Benutzeroberflächen.",
            "Verwendet funktionale Komponenten und React Hooks zur effizienten Logikkapselung und Steuerung des Lebenszyklus.",
            "JSX-Syntax ermöglicht eine klare, deklarative UI-Struktur innerhalb von JavaScript.",
        ],
    },
    routing: {
        title: "Navigation & Routing: React Router DOM",
        points: [
            "Clientseitiges Routing wird durch React Router DOM (v7.4.0) realisiert.",
            "Unterstützt nahtlose Seitenübergänge ohne Neuladen.",
            "Verwendet <Link>- und <Route>-Komponenten für eine intuitive Navigation.",
            "Ermöglicht verschachtelte Routen zur Layout-Verwaltung und Gruppierung von Seiten.",
        ],
    },
    stateManagement: {
        title: "Zustandsverwaltung: Redux Toolkit + React Redux",
        points: [
            "Der globale Zustand der App (z. B. Bücher, Benutzereinstellungen, Authentifizierung) wird mit Redux Toolkit (v2.6.1) und React Redux (v9.2.0) verwaltet.",
            "Modulare Zustandsslices verbessern Wartbarkeit und Codeübersicht.",
            "Aktionen und Reducer verarbeiten sämtliche Änderungen, ausgelöst durch Benutzerinteraktionen.",
        ],
    },
    persistence: {
        title: "Benutzerpersistenz: localStorage",
        points: [
            "Simuliert Authentifizierung und speichert Benutzereinstellungen (Thema, Sprache).",
            "Sorgt für ein konsistentes Erlebnis über mehrere Sitzungen hinweg.",
            "Kein Backend erforderlich für grundlegendes Benutzerverhalten.",
        ],
    },
    dataManagement: {
        title: "Datenverwaltung: Statische JavaScript-Objekte",
        points: [
            "Buchdaten werden als strukturierte JavaScript-Objekte gespeichert.",
            "Jeder Bucheintrag enthält mehrsprachige Felder, Metadaten, Notizen, Status und Rezensionen.",
            "Von Nutzern erzeugte Änderungen (z. B. Bewertungen, Notizen) werden an Redux gesendet und wie Datenbankmutationen behandelt.",
        ],
    },
    ui: {
        title: "UI-Komponenten & Styling",
        subSections: {
            rsuite: {
                subtitle: "RSuite (v5.78.1)",
                points: [
                    "Moderne UI-Bibliothek für Formulare, Modale, Listen und Layout-Komponenten.",
                    "Stilvolle, sofort einsetzbare Komponenten beschleunigen die Entwicklung.",
                    "Sorgt für ein konsistentes Design im gesamten Interface.",
                ],
            },
            sass: {
                subtitle: "Sass (v1.86.0)",
                points: [
                    "CSS-Präprozessor zur Erstellung modularer und wartbarer Styles.",
                    "Unterstützt Variablen, Verschachtelung und Mixins.",
                    "Verbessert Lesbarkeit und Flexibilität beim Theming.",
                ],
            },
            fontAwesome: {
                subtitle: "Font Awesome (v6.7.2)",
                points: [
                    "Wird für Icons über @fortawesome/react-fontawesome und zugehörige Icon-Sets verwendet.",
                    "Verbessert das Interface mit visuellen Hinweisen (Bewertungen, Schaltflächen, Navigation).",
                ],
            },
        },
    },
    internationalisation: {
        title: "Internationalisierung & Sprachunterstützung",
        points: [
            "Alle Bücher und wichtigen Interface-Komponenten sind auf Englisch und Deutsch verfügbar.",
            "Die Sprachpräferenz wird in Redux gespeichert und in Echtzeit aktualisiert.",
            "localStorage bewahrt die Benutzersprache über Sitzungen hinweg.",
        ],
    },
    summary: {
        statement:
            "Libra basiert auf einem sorgfältig ausgewählten Frontend-Technologie-Stack, der Modernität und Zuverlässigkeit vereint. Von der React-Basis über effizientes State-Handling bis hin zu eleganten UI-Werkzeugen – jede Komponente dient dazu, Ihr Leseerlebnis zu optimieren.",
        callToAction:
            "Erleben Sie Libra und entdecken Sie, wie moderne Technologien Ihre persönliche Bibliothek mit Einfachheit, Geschwindigkeit und Stil unterstützen können.",
    },
};

export default initialStateTechnologyDe;