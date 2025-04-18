const TheHungerGames = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheHungerGames.jpg";
const SisterhoodOfDune = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/SisterhoodOfDune.jpg";
const TheAtlasParadox = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheAtlasParadox.jpg";
const ProjectHailMary = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/ProjectHailMary.jpg";
const TheHouseinCeruleanSea = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheHouseinCeruleanSea.jpg";
const TheStarlessSea = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheStarlessSea.jpg";
const Babel = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/Babel.jpg";
const TheMidnightLibrary = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheMidnightLibrary.jpg";
const TheNameoftheWind = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheNameoftheWind.jpg";
const Dune = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/Dune.jpg";
const TheMartian = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheMartian.jpg";
const Circe = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/Circe.jpg";
const Educated = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/Educated.jpg";
const AtomicHabits = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/AtomicHabits.jpg";
const TheAlchemist = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/TheAlchemist.jpg";
const BookThief = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/BookThief.jpg";
const NormalPeople = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/NormalPeople.jpg";
const Mistborn = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/Mistborn.jpg";
const NoCover = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/NoCover.jpg";

const generateUniqueId = (title, author) => {
  return `${title.replace(/\s+/g, '-').toLowerCase()}-${author.replace(/\s+/g, '-').toLowerCase()}`;
}

const initialStateBooks = {
  startingBooks: {
    title: "Start with..",
    data: [
      {
        id: generateUniqueId("The Hunger Games: Sunrise on the Reaping", "Suzanne Collins"),
        image: TheHungerGames,
        title: "The Hunger Games: Sunrise on the Reaping",
        author: "Suzanne Collins",
        category: "Dystopian",
        tags: ["Science fiction", "Dystopian"],
        status: "finished",
        progress: 0,
        totalPages: 416,
        description: "Sunrise on the Reaping, the fifth book in the series, willrevisit the world of Panem twenty-four years before the events of The Hunger Games, starting on the morning of the reaping of the Fiftieth Hunger Games, also known as the Second Quarter Quell.",
        notes: [
          { id: "n1", text: "The psychological toll of the Games is emphasized, great character depth.The psychological toll of the Games is emphasized, great character depth.", page: 250 },
          { id: "n2", text: "The climax is intense; power dynamics shift drastically.", page: 300 }
        ],
        review: {
          rating: 4.5,
          text: "Suzanne Collins once again masterfully explores themes of power, control, and survival. This prequel expands the world of Panem with rich storytelling, compelling characters, and unexpected twists. The stakes feel higher than ever, making it an intense and emotional read. Fans of the series won’t be disappointed!"
        },
        addedAt: "2025-03-19T12:00:00Z"
      },
      {
        id: generateUniqueId("Project Hail Mary", "Andy Weir"),
        image: ProjectHailMary,
        title: "Project Hail Mary",
        author: "Andy Weir",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Thriller", "Survival"],
        status: "reading",
        progress: 476,
        totalPages: 476,
        description: "A lone astronaut. An impossible mission. An ally he never imagined.",
        notes: [
          { id: "n1", text: "Amazing blend of science and humor. Loved the problem-solving aspect.", page: 200 }
        ],
        review: {
          rating: 3.5,
          text: "A gripping, scientifically accurate space survival story with an unexpected emotional depth. Andy Weir delivers another fantastic adventure!"
        },
        addedAt: "2025-03-15T18:20:00Z"
      },
      {
        id: generateUniqueId("The Starless Sea", "Erin Morgenstern"),
        image: TheStarlessSea,
        title: "The Starless Sea",
        author: "Erin Morgenstern",
        category: "Fantasy",
        tags: ["Magical Realism", "Mystery", "Adventure"],
        status: "reading",
        progress: 230,
        totalPages: 500,
        description: "When Zachary Rawlins stumbles across a mysterious book containing details from his own life among its pages, it leads him on a quest unlike any other.",
        notes: [
          { id: "n1", text: "Beautiful, dreamlike prose with intricate storytelling.", page: 120 },
          { id: "n2", text: "The underground library concept is mesmerizing.", page: 200 }
        ],
        review: {
          rating: 4.0,
          text: ""
        },
        addedAt: "2025-03-16T11:30:00Z"
      },
      {
        id: generateUniqueId("The Name of the Wind", "Patrick Rothfuss"),
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
          rating: 2,
          text: ""
        },
        addedAt: "2025-03-12T16:25:00Z"
      },
      {
        id: generateUniqueId("Dune", "Frank Herbert"),
        image: Dune,
        title: "Dune",
        author: "Frank Herbert",
        category: "Science Fiction",
        tags: ["Classic Sci-Fi", "Political Intrigue", "Space Opera"],
        status: "no status",
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
      },
      {
        id: generateUniqueId("The Martian", "Andy Weir"),
        image: TheMartian,
        title: "The Martian",
        author: "Andy Weir",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Survival", "Humor"],
        status: "finished",
        progress: 0,
        totalPages: 385,
        notes: [],
        review: {
          rating: 3,
          text: "Hilarious, suspenseful, and scientifically smart. A space survival story like no other."
        },
        addedAt: "2025-03-22T13:00:00Z"
      },
      {
        id: generateUniqueId("Circe", "Madeline Miller"),
        image: Circe,
        title: "Circe",
        author: "Madeline Miller",
        category: "Fantasy",
        tags: ["Mythology", "Fantasy", "Feminism"],
        status: "reading",
        progress: 150,
        totalPages: 400,
        notes: [],
        review: {
          rating: 4.5,
          text: "A beautifully written retelling of a myth through the lens of empowerment."
        },
        addedAt: "2025-03-23T10:45:00Z"
      },
      {
        id: generateUniqueId("Educated", "Tara Westover"),
        image: Educated,
        title: "Educated",
        author: "Tara Westover",
        category: "Memoir",
        tags: ["Autobiography", "Inspiration", "Real Life"],
        status: "to-read",
        progress: 0,
        totalPages: 334,
        notes: [],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-24T09:30:00Z"
      },
      {
        id: generateUniqueId("Atomic Habits", "James Clear"),
        image: AtomicHabits,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-help",
        tags: ["Productivity", "Habits", "Motivation"],
        status: "reading",
        progress: 80,
        totalPages: 320,
        notes: [],
        review: {
          rating: 4.3,
          text: ""
        },
        addedAt: "2025-03-22T08:00:00Z"
      },
      {
        id: generateUniqueId("The Alchemist", "Paulo Coelho"),
        image: TheAlchemist,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        tags: ["Adventure", "Philosophical", "Life Lessons"],
        status: "finished",
        progress: 208,
        totalPages: 208,
        notes: [],
        review: {
          rating: 3.9,
          text: "A poetic journey of following your dreams and finding meaning."
        },
        addedAt: "2025-03-19T19:40:00Z"
      }
    ]
  },
  popularBooks: {
    title: "Most popular..",
    data: [
      {
        id: generateUniqueId("Sisterhood of Dune: Book One of the Schools of Dune", "Brian Herbert & Kevin J. Anderson"),
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
          rating: 2,
          text: ""
        },
        addedAt: "2025-03-20T15:30:00Z"
      },
      {
        id: generateUniqueId("The Atlas Paradox", "Olivie Blake"),
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
        id: generateUniqueId("The House in the Cerulean Sea", "TJ Klune"),
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
        id: generateUniqueId("Babel: An Arcane History", "R.F. Kuang"),
        image: Babel,
        title: "Babel: An Arcane History",
        author: "R.F. Kuang",
        category: "Historical Fantasy",
        tags: ["Dark Academia", "Linguistics", "Historical"],
        status: "No status",
        progress: 0,
        totalPages: 560,
        notes: [],
        review: {
          rating: 4,
          text: ""
        },
        addedAt: "2025-03-21T10:00:00Z"
      },
      {
        id: generateUniqueId("The Midnight Library", "Matt Haig"),
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
          rating: 1.4,
          text: "A deep and moving reflection on the choices we make and how they shape our lives. A must-read for those who enjoy introspective fiction."
        },
        addedAt: "2025-03-14T08:45:00Z"
      },
      {
        id: generateUniqueId("The Book Thief", "Markus Zusak"),
        image: BookThief,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "Historical Fiction",
        tags: ["War", "Coming-of-Age", "Literature"],
        status: "to-read",
        progress: 0,
        totalPages: 552,
        notes: [],
        review: {
          rating: 4,
          text: ""
        },
        addedAt: "2025-03-20T17:30:00Z"
      },
      {
        id: generateUniqueId("Normal People", "Sally Rooney"),
        image: NormalPeople,
        title: "Normal People",
        author: "Sally Rooney",
        category: "Fiction",
        tags: ["Contemporary", "Romance", "Emotional"],
        status: "reading",
        progress: 75,
        totalPages: 273,
        notes: [],
        review: {
          rating: 2.5,
          text: ""
        },
        addedAt: "2025-03-21T15:25:00Z"
      },
      {
        id: generateUniqueId("Mistborn: The Final Empire", "Brandon Sanderson"),
        image: Mistborn,
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        category: "Fantasy",
        tags: ["Epic Fantasy", "Magic", "Heist"],
        status: "reading",
        progress: 320,
        totalPages: 541,
        notes: [],
        review: {
          rating: 4.7,
          text: "Unique magic system, deep characters, and a thrilling plot make this a fantasy must-read."
        },
        addedAt: "2025-03-18T14:30:00Z"
      }
    ]
  },
  noCover: {
    title: "You don't have anything similar right now...",
    data: [
      {
        id: generateUniqueId("NoCover", ""),
        image: NoCover,
        title: "",
        author: "",
        category: "",
        notes: [],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-20T15:30:00Z"
      }
    ]
  }
};

export default initialStateBooks;