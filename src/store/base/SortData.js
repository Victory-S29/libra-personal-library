const initialStateSort = {
    Genres: {
        data: [
            "Dystopian",
            "Science Fiction",
            "Fantasy",
            "Memoir",
            "Self-help",
            "Fiction",
            "Fairy Tale",
            "Family Saga",
            "Action",
            "Drama",
            "Folklore",
            "Gothic",
            "Horror",
            "Humor",
            "Other"
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