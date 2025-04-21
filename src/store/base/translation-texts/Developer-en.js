const cv = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/CV-Viktoriia-Sanina-en.jpg?raw=true";
const cursorBasic = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/Viktoriia-Sanina-cursor-basic.jpg?raw=true";
const cursorAdv = "https://github.com/Victory-S29/personal-certificates/blob/main/imgs/Viktoriia-Sanina-cursor-adv.jpg?raw=true";

const initialStateDeveloperEn = {
    name: "Viktoriia Sanina",
    cv: cv,
    location: {
        address: "Remote / Erftstadt / Köln",
        email: "viktoriia.sanina.2917@gmail.com",
        phone: "+4915126128532",
    },
    profile: {
        description:
            "Front-end developer experienced in HTML, CSS, and JavaScript with a focus on responsive web design. Proficient in Bootstrap and SCSS/SASS for efficient and visually appealing UI development. Passionate about clean code, accessibility, and user-centered design.",
        languages: [
            { language: "Ukrainian", level: "Native" },
            { language: "English", level: "B2" },
            { language: "German", level: "A2" },
        ],
    },
    education: {
        institution: "Taras Shevchenko National University of Kyiv",
        faculty: "Faculty of Information Technologies",
        department: "Software Systems and Technologies",
        period: "2021 – 2025",
    },
    skills: [
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
    ],
    courses: [
        {
            provider: "Cursor.Education",
            title: ["Front-End Basic Course"],
            image: cursorBasic,
            years: "2022-2023",
        },
        {
            provider: "Cursor.Education",
            title: ["Front-End Advanced Course"],
            image: cursorAdv,
            years: "2023",
        }
    ],
};

export default initialStateDeveloperEn;