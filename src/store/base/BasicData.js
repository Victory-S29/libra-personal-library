import TheHungerGames from './images/TheHungerGames.png'

const initialState = {
    books: [
      {
        id: crypto.randomUUID(),
        image: TheHungerGames,
        title: "The Hunger Games: Sunrise on the Reaping",
        author: "Suzanne Collins",
        cover: '',
        category: "Dystopian",
        tags: ["Science fiction", "Dystopian"],
        status: "finished",
        progress: 416,
        totalPages: 416,
        notes: [
          { id: "n1", text: "The psychological toll of the Games is emphasized, great character depth.", page: 250 },
          { id: "n2", text: "The climax is intense; power dynamics shift drastically.", page: 300 }
        ],
        review: {
          rating: 5,
          text: "Suzanne Collins once again masterfully explores themes of power, control, and survival. This prequel expands the world of Panem with rich storytelling, compelling characters, and unexpected twists. The stakes feel higher than ever, making it an intense and emotional read. Fans of the series won’t be disappointed!"
        },
        addedAt: "2025-03-19T12:00:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: TheHungerGames,
        title: "Dune: The Sisterhood",
        author: "Brian Herbert & Kevin J. Anderson",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Space Opera", "Adventure"],
        status: "to-read",
        progress: 0,
        totalPages: 512,
        notes: [],
        review: null,
        addedAt: "2025-03-20T15:30:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: TheHungerGames,
        title: "The Atlas Paradox",
        author: "Olivie Blake",
        category: "Fantasy",
        tags: ["Dark Academia", "Fantasy", "Mystery"],
        status: "reading",
        progress: 120,
        totalPages: 400,
        notes: [
          { id: "n1", text: "Intriguing philosophical discussions about knowledge and power.", page: 75 },
          { id: "n2", text: "Character dynamics are getting more intense and layered.", page: 110 }
        ],
        review: null,
        addedAt: "2025-03-18T09:45:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: TheHungerGames,
        title: "Project Hail Mary",
        author: "Andy Weir",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Thriller", "Survival"],
        status: "read",
        progress: 476,
        totalPages: 476,
        notes: [
          { id: "n1", text: "Amazing blend of science and humor. Loved the problem-solving aspect.", page: 200 }
        ],
        review: {
          rating: 5,
          text: "A gripping, scientifically accurate space survival story with an unexpected emotional depth. Andy Weir delivers another fantastic adventure!"
        },
        addedAt: "2025-03-15T18:20:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: TheHungerGames,
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        category: "Fantasy",
        tags: ["Feel-Good", "Fantasy", "LGBTQ+"],
        status: "to-read",
        progress: 0,
        totalPages: 398,
        notes: [],
        review: null,
        addedAt: "2025-03-17T14:10:00Z"
      }
    ],
  };

  export default initialState;