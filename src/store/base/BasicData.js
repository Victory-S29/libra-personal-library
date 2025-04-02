const TheHungerGames = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheHungerGames.jpg";
const SisterhoodOfDune = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/SisterhoodOfDune.jpg"
const TheAtlasParadox = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheAtlasParadox.jpg"
const ProjectHailMary = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/ProjectHailMary.jpg"
const TheHouseinCeruleanSea = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheHouseinCeruleanSea.jpg"
const TheStarlessSea = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheStarlessSea.jpg";
const Babel = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/Babel.jpg"
const TheMidnightLibrary = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheMidnightLibrary.jpg"
const TheNameoftheWind = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheNameoftheWind.jpg"
const Dune = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/Dune.jpg"

const initialStateBooks = {
  basicBooks: {
    title: "Start with..",
    data: [
      {
        id: crypto.randomUUID(),
        image: TheHungerGames,
        title: "The Hunger Games: Sunrise on the Reaping",
        author: "Suzanne Collins",
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
        image: SisterhoodOfDune,
        title: "Sisterhood of Dune: Book One of the Schools of Dune",
        author: "Brian Herbert & Kevin J. Anderson",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Space Opera", "Adventure"],
        status: "to-read",
        progress: 0,
        totalPages: 512,
        notes: [],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-20T15:30:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: TheAtlasParadox,
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
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-18T09:45:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: ProjectHailMary,
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
        image: TheHouseinCeruleanSea,
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        category: "Fantasy",
        tags: ["Feel-Good", "Fantasy", "LGBTQ+"],
        status: "to-read",
        progress: 0,
        totalPages: 398,
        notes: [],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-17T14:10:00Z"
      },   
      {
        id: crypto.randomUUID(),
        image: TheStarlessSea,
        title: "The Starless Sea",
        author: "Erin Morgenstern",
        category: "Fantasy",
        tags: ["Magical Realism", "Mystery", "Adventure"],
        status: "reading",
        progress: 230,
        totalPages: 500,
        notes: [
          { id: "n1", text: "Beautiful, dreamlike prose with intricate storytelling.", page: 120 },
          { id: "n2", text: "The underground library concept is mesmerizing.", page: 200 }
        ],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-16T11:30:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: Babel,
        title: "Babel: An Arcane History",
        author: "R.F. Kuang",
        category: "Historical Fantasy",
        tags: ["Dark Academia", "Linguistics", "Historical"],
        status: "to-read",
        progress: 0,
        totalPages: 560,
        notes: [],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-21T10:00:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: TheMidnightLibrary,
        title: "The Midnight Library",
        author: "Matt Haig",
        category: "Fiction",
        tags: ["Philosophical", "Life Choices", "Fantasy"],
        status: "finished",
        progress: 288,
        totalPages: 288,
        notes: [
          { id: "n1", text: "Thought-provoking meditation on regrets and alternate lives.", page: 100 }
        ],
        review: {
          rating: 4,
          text: "A deep and moving reflection on the choices we make and how they shape our lives. A must-read for those who enjoy introspective fiction."
        },
        addedAt: "2025-03-14T08:45:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: TheNameoftheWind,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        category: "Fantasy",
        tags: ["Epic Fantasy", "Magic", "Adventure"],
        status: "reading",
        progress: 400,
        totalPages: 662,
        notes: [
          { id: "n1", text: "Kvothe's storytelling is gripping, and the world-building is incredible.", page: 250 }
        ],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-12T16:25:00Z"
      },
      {
        id: crypto.randomUUID(),
        image: Dune,
        title: "Dune",
        author: "Frank Herbert",
        category: "Science Fiction",
        tags: ["Classic Sci-Fi", "Political Intrigue", "Space Opera"],
        status: "read",
        progress: 688,
        totalPages: 688,
        notes: [
          { id: "n1", text: "Dense but rewarding. The political and ecological themes are still relevant.", page: 400 }
        ],
        review: {
          rating: 5,
          text: "A timeless classic that blends politics, religion, and ecology in an epic sci-fi narrative. A must-read for any sci-fi fan."
        },
        addedAt: "2025-03-10T13:50:00Z"
      }
    ]
  }
};

export default initialStateBooks;