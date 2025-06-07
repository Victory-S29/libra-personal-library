const cursorBasic = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/Viktoriia-Sanina-cursor-basic.jpg?raw=true";
const cursorAdv = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/Viktoriia-Sanina-cursor-adv.jpg?raw=true";
const qrCode = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/drive-qr-code.png?raw=true";

const initialStateDeveloperDe = {
    profile: {
        name: "Viktoriia Sanina",
        description:
            "Front-End-Entwicklerin mit Erfahrung in HTML, CSS und JavaScript, mit Fokus auf responsives Webdesign. Versiert im Umgang mit Bootstrap und SCSS/SASS für eine effiziente und ansprechende UI-Entwicklung. Leidenschaftlich für sauberen Code, Barrierefreiheit und benutzerzentriertes Design.",
    },
    location: {
        address: "Remote / Erftstadt / Köln",
        email: "viktoriia.sanina.2917@gmail.com",
        phone: "+4915126128532",
    },
    languages: {
        title: "Sprachen:",
        data: [
            { language: "Ukrainisch", level: "Muttersprache" },
            { language: "Englisch", level: "B2" },
            { language: "Deutsch", level: "A2" },
        ]
    },
    education: {
        title: "Ausbildung",
        institution: "Taras-Schewtschenko-Universität Kyiw",
        faculty: "Fakultät für Informationstechnologien",
        department: "Software-Systeme und Technologien",
        period: "2021 – 2025",
    },
    skills: {
        title: "Fähigkeiten",
        data: [
            "HTML/CSS",
            "JavaScript",
            "React",
            "Redux",
            "REST API",
            "Context API",
            "Bootstrap",
            "SCSS/SASS",
            "Responsives Webdesign",
            "Versionskontrolle (Git)",
        ]
    },
    courses: {
        title: "Kurse",
        data: [
            {
                provider: "Cursor.Education",
                title: "Grundkurs Front-End",
                image: cursorBasic,
                years: "2022-2023",
            },
            {
                provider: "Cursor.Education",
                title: "Fortgeschrittener Kurs Front-End",
                image: cursorAdv,
                years: "2023",
            }
        ]
    },
    qrCode: {
        title: "Alle Zertifikate und Lebensläufe finden Sie unter diesem Link",
        img: qrCode,
        alt: "QR-Code für alle Zertifikate"
    },
};

export default initialStateDeveloperDe;