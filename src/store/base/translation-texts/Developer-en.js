const cv = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/CV-Viktoriia-Sanina-en.jpg?raw=true";
const cursorBasic = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/Viktoriia-Sanina-cursor-basic.jpg?raw=true";
const cursorAdv = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/Viktoriia-Sanina-cursor-adv.jpg?raw=true";
const qrCode = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/drive-qr-code.png?raw=true";

const initialStateDeveloperEn = {
    profile: {
        name: "Viktoriia Sanina",
        description:
            "Front-end developer experienced in HTML, CSS, and JavaScript with a focus on responsive web design. Proficient in Bootstrap and SCSS/SASS for efficient and visually appealing UI development. Passionate about clean code, accessibility, and user-centered design.",
    },
    location: {
        address: "Remote / Erftstadt / Köln",
        email: "viktoriia.sanina.2917@gmail.com",
        phone: "+4915126128532",
    },
    languages: {
        title: "Languages:",
        data: [
            { language: "Ukrainian", level: "Native" },
            { language: "English", level: "B2" },
            { language: "German", level: "A2" },
        ]
    },
    education: {
        title: "Education",
        institution: "Taras Shevchenko National University of Kyiv",
        faculty: "Faculty of Information Technologies",
        department: "Software Systems and Technologies",
        period: "2021 – 2025",
    },
    skills: {
        title: "Skills",
        data: [
            "HTML/CSS",
            "JavaScript",
            "React",
            "Redux",
            "REST API",
            "Context API",
            "Bootstrap",
            "SCSS/SASS",
            "Responsive Web Design",
            "Version Control (Git)",
        ]
    },
    courses: {
        title: "Courses",
        data: [
            {
                provider: "Cursor.Education",
                title: "Front-End Basic Course",
                image: cursorBasic,
                years: "2022-2023",
            },
            {
                provider: "Cursor.Education",
                title: "Front-End Advanced Course",
                image: cursorAdv,
                years: "2023",
            }
        ]
    },
    qrCode: {
        title:"You can find all certificates and resumes at this link", 
        img: qrCode,
        alt: "QR-Code for all certificates"
    },
};

export default initialStateDeveloperEn;