import LibraLogo from '../../../../style/images/LibraLogo.png';
import LibraLogoLight from '../../../../style/images/LibraLogoLight.png';

const explore = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/explore.png";
const progress = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/progress.png";
const save = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/save.png";
const inspiration = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/inspiration.png";
const recommendation = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/recommendation.png";
const start = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/start.png";

const initialStateBannersDe = {
    logo: {
        title: "Libra",
        description: "Tauchen Sie gemeinsam in eine Welt voller Geschichten ein!",
        LibraLogo,
        LibraLogoLight
    },
    notifications: {
        welcome: "Willkommen!",
        basic: {
            confirm: "Bestätigen",
            cancel: "Abbrechen",
            change: "Ändern",
            saveChanges: "Änderungen speichern",
            delete: "Löschen",
            add: "Hinzufügen"
        },
    },
    featuresComponent: {
        title: "Alles, was Sie als Leser brauchen",
        communityAdvantages: [
            { imageSrc: explore, label: 'Erkunden Sie die Welt' },
            { imageSrc: start, label: 'Starten Sie Ihre Lesereise' },
            { imageSrc: save, label: 'Speichern Sie Ihre Favoriten' },
            { imageSrc: progress, label: 'Verfolgen Sie Ihren Fortschritt' },
            { imageSrc: recommendation, label: 'Bewerten und empfehlen Sie' },
            { imageSrc: inspiration, label: 'Finden Sie Inspiration' }
        ]
    },
    footer: {
        footerNav: [
            { name: "Funktionen", link: "/features" },
            { name: "Technologien", link: "/technologies" },
            { name: "Über die Entwickler", link: "/about-developer" },
        ]
    },
    user: {
        labels: {
            signUp: "Registrieren",
            logIn: "Anmelden",
            register: "Registrieren",
            email: "E-Mail",
            userName: "Benutzername",
            password: "Passwort",
            confirmPassword: "Passwort bestätigen"
        },
        placeholders: {
            email: "Geben Sie Ihre E-Mail-Adresse ein",
            userName: "Geben Sie Ihren Benutzernamen ein",
            password: "Geben Sie Ihr Passwort ein",
            confirmPassword: "Bestätigen Sie Ihr Passwort"
        },
        messages: {
            shortPassword: "Das Passwort muss mindestens 8 Zeichen lang sein.",
            matchPassword: "Die Passwörter stimmen nicht überein.",
            emailError: "Ein Konto mit dieser E-Mail-Adresse existiert bereits.",
            userNotExist: "Diese E-Mail-Adresse könnte falsch sein.",
            wrongPassword: "Falsches Passwort.",
            haveAnAccount: "Haben Sie bereits ein Konto?",
            loginHere: "Hier anmelden",
            signUpHere: "Hier registrieren",
            newAcc: "Ein neues Konto erstellen?",
            userNameRequired: "Benutzername ist erforderlich.",
            emailRequired: "E-Mail ist erforderlich."
        },
        settingsPage: {
            labels: {
                profile: "Profil",
                password: "Passwort",
                delete: "Löschen",
                signOut: "Abmelden",
            },
            messages: {
                profile: "Legen Sie Ihre Kontodaten fest",
                password: "Legen Sie Ihre Passwortdetails fest",
                delete: "Konto löschen",
                signOut: "Von Ihrem Konto abmelden",
                changeDataTitle: "Sind Sie sicher, dass Sie die Änderungen speichern möchten?"
            },
            language: {
                title: "Sprache",
                description: "Sprache festlegen",
                languages: {
                    en: "En",
                    de: "De"
                }
            },
            theme: {
                title: "Thema",
                description: "Thema festlegen",
            },
        }
    },
    bookEdit: {
        labels: {
            changeImage: "Bild ändern",
            title: "Titel",
            author: "Autor",
            genre: "Genre",
            tags: "Tags (durch Kommas getrennt)",
            changeReview: "Rezension",
            description: "Beschreibung",
            progress: "Fortschritt",
            newNote: "Neue Notiz",
            totalPages: "Gesamtseiten",
            searchByName: "Buch nach Namen suchen",
            search: "Suchen",
            rating: "Bewertung",
            status: "Status",
            review: "Rezension bearbeiten",
            pageNumber: "Seitenzahl",
            noteText: "Notiz",
            changeNote: "Notiz bearbeiten",
            deleteBook: "Buch löschen"
        },
        placeholders: {
            title: "Titel hinzufügen",
            author: "Autor hinzufügen",
            tags: "Tags mit Kommas trennen",
            description: "Beschreibung hinzufügen",
            progress: "z.B. 30",
            totalPages: "z.B. 300",
            review: "Rezension hinzufügen",
            pageNumber: "z.B. 123",
            noteText: "Schreiben Sie Ihre Notiz hier..."
        },
        messages: {
            bookExists: "Ein Buch mit diesem Titel und Autor existiert bereits.",
            progressError: "Der Fortschritt darf die Gesamtseitenanzahl nicht überschreiten.",
            noReview: "Jedes Buch wartet auf Ihre Rezension.",
            myNotes: "Meine Notizen",
            addFirstNote: "Sie können hier jederzeit eine Notiz hinzufügen.",
            deleteBook: "Buch dauerhaft löschen",
            deleteNote: "Notiz dauerhaft löschen",
            changeImage: "Vergessen Sie nicht, das Bild durch Klicken auf die Schaltfläche 'Ändern' zu bestätigen.",
            emptyFields: "Titel und Autor sind erforderlich."
        }
    },
    bookAdd: {
        labels: {
            changeImage: "Bild hochladen",
            title: "Titel",
            author: "Autor",
            genre: "Genre",
            tags: "Tags (durch Kommas getrennt)",
            description: "Beschreibung",
            progress: "Fortschritt",
            totalPages: "Gesamtseiten",
            status: "Status",
        },
        placeholders: {
            title: "Titel hinzufügen",
            author: "Autor hinzufügen",
            tags: "Tags mit Kommas trennen",
            description: "Beschreibung hinzufügen",
            progress: "z.B. 30",
            totalPages: "z.B. 300",
        },
        messages: {
            bookExists: "Ein Buch mit diesem Titel und Autor existiert bereits.",
            progressError: "Der Fortschritt darf die Gesamtseitenanzahl nicht überschreiten.",
            emptyFields: "Titel und Autor sind erforderlich."
        }
    },
    catalogueInfo: {
        labels: {
            createNewBook: "Neues Buch erstellen",
            finishedBooks: "Beendet",
            inProgressBooks: "In Bearbeitung",
            likedBooks: "Favoriten",
            savedBooks: "Gespeichert",
        },
        placeholders: {
            sortBooksInput: "Nach Titel oder Autor sortieren",
            searchBooksInput: "Buch, Autor, Ausgabe suchen..."
        },
        messages: {
            noBooksFound: "Sie haben noch keine Bücher hinzugefügt."
        },
    }
};

export default initialStateBannersDe;