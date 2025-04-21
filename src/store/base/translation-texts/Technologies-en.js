const initialStateTechnology = {
    intro: {
        title: "Technology Stack",
        description:
            "Libra is a React-based web application designed to provide a personalised and scalable digital library experience. Built using modern development tools, it offers performance, flexibility, and a user-friendly interface across devices.",
    },
    framework: {
        title: "Frontend Framework: React",
        points: [
            "Libra is built with React (v18.3.1), a powerful JavaScript library for building dynamic user interfaces.",
            "Uses functional components and React hooks for efficient logic encapsulation and lifecycle control.",
            "JSX syntax enables clear, declarative UI structure inside JavaScript.",
        ],
    },
    routing: {
        title: "Navigation & Routing: React Router DOM",
        points: [
            "Client-side routing is handled by React Router DOM (v7.4.0).",
            "Supports seamless page transitions without reloads.",
            "Uses <Link> and <Route> components for intuitive navigation.",
            "Enables nested routes for layout management and page grouping.",
        ],
    },
    stateManagement: {
        title: "State Management: Redux Toolkit + React Redux",
        points: [
            "App-wide state (e.g. books, user preferences, auth) is managed using Redux Toolkit (v2.6.1) and React Redux (v9.2.0).",
            "Modular state slices improve maintainability and code clarity.",
            "Actions and reducers handle all updates, triggered by user interaction.",
        ],
    },
    persistence: {
        title: "User Persistence: localStorage",
        points: [
            "Simulates authentication and preserves user preferences (theme, language).",
            "Ensures consistent experience across sessions.",
            "No backend required for basic user behaviour.",
        ],
    },
    dataManagement: {
        title: "Data Handling: Static JavaScript Objects",
        points: [
            "Book data is stored as structured JavaScript objects.",
            "Each book entry includes multilingual fields, metadata, notes, status, and reviews.",
            "User-generated updates (ratings, notes, etc.) are sent to Redux and treated as database mutations.",
        ],
    },
    ui: {
        title: "UI Components & Styling",
        subSections: {
            rsuite: {
                subtitle: "RSuite (v5.78.1)",
                points: [
                    "Modern UI library used for forms, modals, lists, and layout components.",
                    "Provides styled, ready-made components for faster development.",
                    "Ensures consistent design language throughout the app.",
                ],
            },
            sass: {
                subtitle: "Sass (v1.86.0)",
                points: [
                    "CSS preprocessor for writing modular and maintainable styles.",
                    "Supports variables, nesting, and mixins.",
                    "Improves readability and theming flexibility.",
                ],
            },
            fontAwesome: {
                subtitle: "Font Awesome (v6.7.2)",
                points: [
                    "Used for icons via @fortawesome/react-fontawesome and supporting icon sets.",
                    "Enhances user interface with visual cues (ratings, buttons, navigation).",
                ],
            },
        },
    },
    internationalisation: {
        title: "Internationalisation & Language Support",
        points: [
            "Every book and key interface components are available in both English and German.",
            "Language preference is stored in Redux and updated in real-time.",
            "localStorage preserves user language across sessions.",
        ],
    },
    summary: {
        statement:
            "Libra is powered by a carefully selected front-end tech stack that balances modernity with reliability. From its React foundation to its elegant state handling and UI tools, every part of the stack is chosen to enhance the user’s reading experience.",
        callToAction:
            "Explore Libra and discover how modern technology can support your personal library – with simplicity, speed, and style.",
    },
};

export default initialStateTechnology;