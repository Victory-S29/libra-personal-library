const initialStateSort = {
    Genres: {
        data: [
            { en: "Dystopian", de: "Dystopie" },
            { en: "Science Fiction", de: "Science-Fiction" },
            { en: "Fantasy", de: "Fantasie" },
            { en: "Memoir", de: "Erinnerungen" },
            { en: "Self-help", de: "Selbsthilfe" },
            { en: "Fiction", de: "Belletristik" },
            { en: "Fairy Tale", de: "Märchen" },
            { en: "Family Saga", de: "Familiensaga" },
            { en: "Action", de: "Action" },
            { en: "Drama", de: "Drama" },
            { en: "Folklore", de: "Folklore" },
            { en: "Gothic", de: "Gothic" },
            { en: "Horror", de: "Horror" },
            { en: "Humor", de: "Humor" },
            { en: "Other", de: "Andere" }
        ],
        type: "checkbox"
    },
    Status: {
        data: [
            { en: "To-read", de: "Leseliste" },
            { en: "Reading", de: "Am Lesen" },
            { en: "Finished", de: "Beendet" },
            { en: "No Status", de: "Kein Status" },
            { en: "Turn off sorting by status", de: "Sortierung nach Status deaktivieren" }
        ],
        type: "radio"
    },
    Additional: {
        data: [
            { en: "Sort by rating", de: "Nach Bewertung sortieren" },
            { en: "Sort by name", de: "Nach Name sortieren" },
            { en: "Sort by author", de: "Nach Autor sortieren" },
            { en: "Sort by date", de: "Nach Datum sortieren" },
            { en: "Turn off additional sorting", de: "Zusätzliche Sortierung deaktivieren" }
        ],
        type: "radio"
    }
};

export default initialStateSort;