const initialStateSort = {
    Genres: {
        data: [
            "Adventure",
            "Science fiction",
            "Adventure novel",
            "Alternate history",
            "Fantasy",
            "Crime",
            "Gothic novel",
            "Horror fiction",
            "Portal fantasy",
            "Literary nonsense",
            "Thriller"
        ],
        type: "checkbox"
    },
    Status: {
        data: [
            "To-read",
            "Reading",
            "Finished",
            "No Status",
            "Turn off sorting by status"
        ],
        type: "radio"
    },
    Additional: {
        data: [
            "Sort by rating",
            "Sort by name",
            "Sort by author",
            "Sort by date",
            "Turn off additional sorting"
        ],
        type: "radio"
    },
}

export default initialStateSort;