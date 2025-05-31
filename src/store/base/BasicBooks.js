import { v4 as uuidv4 } from 'uuid';

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
        id: uuidv4(),
        image: TheHungerGames,
        title: "The Hunger Games: Sunrise on the Reaping",
        author: "Suzanne Collins",
        category: "Dystopian",
        tags: ["Science fiction", "Dystopian"],
        status: "finished",
        lists: {
          liked: true,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 416,
        description: "Sunrise on the Reaping, the fifth book in the series, willrevisit the world of Panem twenty-four years before the events of The Hunger Games, starting on the morning of the reaping of the Fiftieth Hunger Games, also known as the Second Quarter Quell.",
        notes: [
          { id: uuidv4(), text: "The psychological toll of the Games is emphasized, great character depth.The psychological toll of the Games is emphasized, great character depth.", page: 250 },
          { id: uuidv4(), text: "The climax is intense; power dynamics shift drastically.", page: 300 }
        ],
        review: {
          rating: 4.5,
          text: "Suzanne Collins once again masterfully explores themes of power, control, and survival. This prequel expands the world of Panem with rich storytelling, compelling characters, and unexpected twists. The stakes feel higher than ever, making it an intense and emotional read. Fans of the series won’t be disappointed!"
        },
        addedAt: "2025-03-19T12:00:00Z"
      },
      {
        id: uuidv4(),
        image: ProjectHailMary,
        title: "Project Hail Mary",
        author: "Andy Weir",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Thriller", "Survival"],
        status: "reading",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 476,
        totalPages: 476,
        description: "A lone astronaut. An impossible mission. An ally he never imagined.",
        notes: [
          { id: uuidv4(), text: "Amazing blend of science and humor. Loved the problem-solving aspect.", page: 200 }
        ],
        review: {
          rating: 3.5,
          text: "A gripping, scientifically accurate space survival story with an unexpected emotional depth. Andy Weir delivers another fantastic adventure!"
        },
        addedAt: "2025-03-15T18:20:00Z"
      },
      {
        id: uuidv4(),
        image: TheStarlessSea,
        title: "The Starless Sea",
        author: "Erin Morgenstern",
        category: "Fantasy",
        tags: ["Magical Realism", "Mystery", "Adventure"],
        status: "reading",
        lists: {
          liked: false,
          saved: false,
          inProgress: true,
          finished: false,
        },
        progress: 230,
        totalPages: 500,
        description: "When Zachary Rawlins stumbles across a mysterious book containing details from his own life among its pages, it leads him on a quest unlike any other.",
        notes: [
          { id: uuidv4(), text: "Beautiful, dreamlike prose with intricate storytelling.", page: 120 },
          { id: uuidv4(), text: "The underground library concept is mesmerizing.", page: 200 }
        ],
        review: {
          rating: 4.0,
          text: ""
        },
        addedAt: "2025-03-16T11:30:00Z"
      },
      {
        id: uuidv4(),
        image: TheNameoftheWind,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        category: "Fantasy",
        tags: ["Epic Fantasy", "Magic", "Adventure"],
        status: "reading",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 400,
        totalPages: 662,
        description: "The Name of the Wind by Patrick Rothfuss is an enthralling fantasy novel that follows the life of Kvothe, a gifted young magician and musician. With beautifully crafted prose and a captivating story, it will transport you to a world of magic and mystery.",
        notes: [
          { id: uuidv4(), text: "Kvothe's storytelling is gripping, and the world-building is incredible.", page: 250 }
        ],
        review: {
          rating: 2,
          text: ""
        },
        addedAt: "2025-03-12T16:25:00Z"
      },
      {
        id: uuidv4(),
        image: Dune,
        title: "Dune",
        author: "Frank Herbert",
        category: "Science Fiction",
        tags: ["Classic Sci-Fi", "Political Intrigue", "Space Opera"],
        status: "no status",
        lists: {
          liked: true,
          saved: false,
          inProgress: false,
          finished: true,
        },
        progress: 688,
        totalPages: 688,
        description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.",
        notes: [
          { id: uuidv4(), text: "Dense but rewarding. The political and ecological themes are still relevant.", page: 400 }
        ],
        review: {
          rating: 5,
          text: "A timeless classic that blends politics, religion, and ecology in an epic sci-fi narrative. A must-read for any sci-fi fan."
        },
        addedAt: "2025-03-10T13:50:00Z"
      },
      {
        id: uuidv4(),
        image: TheMartian,
        title: "The Martian",
        author: "Andy Weir",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Survival", "Humor"],
        status: "finished",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 385,
        description: "The Martian by Andy Weir is a gripping sci-fi novel about an astronaut, Mark Watney, who is mistakenly presumed dead and left behind on Mars. With limited supplies, he must use his ingenuity to survive and find a way to signal Earth.",
        notes: [],
        review: {
          rating: 3,
          text: "Hilarious, suspenseful, and scientifically smart. A space survival story like no other."
        },
        addedAt: "2025-03-22T13:00:00Z"
      },
      {
        id: uuidv4(),
        image: Circe,
        title: "Circe",
        author: "Madeline Miller",
        category: "Fantasy",
        tags: ["Mythology", "Fantasy", "Feminism"],
        status: "reading",
        lists: {
          liked: false,
          saved: false,
          inProgress: true,
          finished: false,
        },
        progress: 150,
        totalPages: 400,
        description: "Circe is a beautifully written mythological retelling centered on the life of the enchantress Circe, daughter of the sun god Helios. Banished to a remote island for defying the gods, she hones her powers of witchcraft and crosses paths with famous figures from Greek mythology, including Odysseus. The novel explores themes of transformation, power, identity, and what it means to find one's place in the world, especially as a woman in a world ruled by gods and men.",
        notes: [],
        review: {
          rating: 4.5,
          text: "A beautifully written retelling of a myth through the lens of empowerment."
        },
        addedAt: "2025-03-23T10:45:00Z"
      },
      {
        id: uuidv4(),
        image: Educated,
        title: "Educated",
        author: "Tara Westover",
        category: "Memoir",
        tags: ["Autobiography", "Inspiration", "Real Life"],
        status: "to-read",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 334,
        description: "Educated by Tara Westover is a powerful memoir about a woman who grows up in a strict and isolated survivalist family in rural Idaho. Denied formal education and medical care, Tara teaches herself enough to gain admission to college, eventually earning a PhD from Cambridge University. The book is a moving account of her journey toward knowledge, self-discovery, and independence, as she struggles to reconcile loyalty to her family with her desire for a different life. It explores themes of education, identity, resilience, and the complexities of family ties.",
        notes: [],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-24T09:30:00Z"
      },
      {
        id: uuidv4(),
        image: AtomicHabits,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-help",
        tags: ["Productivity", "Habits", "Motivation"],
        status: "reading",
        lists: {
          liked: true,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 80,
        totalPages: 320,
        description: "Atomic Habits by James Clear is a practical and insightful guide to building good habits and breaking bad ones through small, consistent changes. The core idea is that tiny improvements made consistently over time lead to remarkable results. Clear breaks down the science of habit formation into four simple steps: cue, craving, response, and reward, and offers actionable strategies for making habits obvious, attractive, easy, and satisfying. The book emphasizes identity-based habits and how focusing on who you want to become is more effective than just setting goals. It's all about mastering the art of continuous improvement.",
        notes: [],
        review: {
          rating: 4.3,
          text: ""
        },
        addedAt: "2025-03-22T08:00:00Z"
      },
      {
        id: uuidv4(),
        image: TheAlchemist,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        tags: ["Adventure", "Philosophical", "Life Lessons"],
        status: "finished",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 208,
        totalPages: 208,
        description: "The Alchemist by Paulo Coelho is a philosophical novel that follows Santiago, a young Andalusian shepherd, on a journey to find a hidden treasure he dreams about. Along the way, he meets various characters—a king, a crystal merchant, an Englishman, and an alchemist—who help him discover deeper truths about life, destiny, and following one's \"Personal Legend.\" The story is a spiritual exploration of self-discovery, purpose, and the idea that when you truly desire something, the universe conspires to help you achieve it.",
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
        id: uuidv4(),
        image: SisterhoodOfDune,
        title: "Sisterhood of Dune: Book One of the Schools of Dune",
        author: "Brian Herbert & Kevin J. Anderson",
        category: "Science Fiction",
        tags: ["Sci-Fi", "Space Opera", "Adventure"],
        status: "to-read",
        lists: {
          liked: false,
          saved: true,
          inProgress: true,
          finished: false,
        },
        progress: 0,
        totalPages: 512,
        description: "Sisterhood of Dune by Brian Herbert and Kevin J. Anderson is the first book in the Schools of Dune series, set in the Dune universe created by Frank Herbert. Taking place about 80 years after the Butlerian Jihad—the war against thinking machines—the novel explores the early formation of powerful groups like the Bene Gesserit Sisterhood, the Mentats, and the Swordmasters of Ginaz. With the rise of anti-technology zealotry and political tension across the galaxy, these emerging schools must navigate dangerous intrigue and shifting alliances. The book delves into the origins of the institutions that will shape the universe centuries later in the original Dune saga.",
        notes: [],
        review: {
          rating: 2,
          text: ""
        },
        addedAt: "2025-03-20T15:30:00Z"
      },
      {
        id: uuidv4(),
        image: TheAtlasParadox,
        title: "The Atlas Paradox",
        author: "Olivie Blake",
        category: "Fantasy",
        tags: ["Dark Academia", "Fantasy", "Mystery"],
        status: "reading",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 120,
        totalPages: 400,
        description: "The Atlas Paradox by Olivie Blake is the sequel to The Atlas Six, continuing the story of six powerful young magicians chosen to join the secretive and elite Alexandrian Society. In this installment, the characters face deeper philosophical and moral dilemmas as they grapple with dangerous knowledge, shifting alliances, and the true cost of power. With one of their own gone and the Society’s secrets unraveling, tensions rise and loyalties are tested. The novel explores themes of ambition, identity, sacrifice, and the blurred lines between right and wrong—all wrapped in a darkly academic, magical setting.",
        notes: [
          { id: uuidv4(), text: "Intriguing philosophical discussions about knowledge and power.", page: 75 },
          { id: uuidv4(), text: "Character dynamics are getting more intense and layered.", page: 110 }
        ],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-18T09:45:00Z"
      },
      {
        id: uuidv4(),
        image: TheHouseinCeruleanSea,
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        category: "Fantasy",
        tags: ["Feel-Good", "Fantasy", "LGBTQ+"],
        status: "to-read",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 398,
        description: "The House in the Cerulean Sea by TJ Klune is a heartwarming and whimsical fantasy novel about Linus Baker, a quiet, rule-following caseworker for the Department in Charge of Magical Youth. He's sent on a special assignment to a mysterious orphanage housing six magical children considered dangerous—including a gnome, a wyvern, and the Antichrist. As Linus gets to know the children and their kind, protective caretaker Arthur Parnassus, he begins to question the rules he’s always followed. The story is a charming and tender exploration of love, acceptance, found family, and the courage to stand up for what’s right.",
        notes: [],
        review: {
          rating: 0,
          text: ""
        },
        addedAt: "2025-03-17T14:10:00Z"
      },
      {
        id: uuidv4(),
        image: Babel,
        title: "Babel: An Arcane History",
        author: "R.F. Kuang",
        category: "Historical Fantasy",
        tags: ["Dark Academia", "Linguistics", "Historical"],
        status: "No status",
        lists: {
          liked: false,
          saved: true,
          inProgress: false,
          finished: true,
        },
        progress: 0,
        totalPages: 560,
        description: "Babel: Or the Necessity of Violence – An Arcane History of the Oxford Translators' Revolution by R.F. Kuang is a dark academia fantasy novel set in an alternate 19th-century England. The story follows Robin Swift, a Chinese orphan raised in Britain to attend the prestigious Royal Institute of Translation at Oxford—also known as Babel. The institute uses magical silver-working powered by translation to fuel the British Empire’s dominance. As Robin becomes more entrenched in Babel’s world, he’s forced to confront the violent realities of colonialism, language, and resistance. The novel blends scholarship, magic, and revolution in a powerful critique of empire and the cost of knowledge.",
        notes: [],
        review: {
          rating: 4,
          text: ""
        },
        addedAt: "2025-03-21T10:00:00Z"
      },
      {
        id: uuidv4(),
        image: TheMidnightLibrary,
        title: "The Midnight Library",
        author: "Matt Haig",
        category: "Fiction",
        tags: ["Philosophical", "Life Choices", "Fantasy"],
        status: "finished",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 288,
        totalPages: 288,
        description: "The Midnight Library by Matt Haig is a thought-provoking and emotional novel about Nora Seed, a woman who finds herself in a magical library between life and death. Each book on its shelves represents a different version of her life—one she could have lived if she had made different choices. As Nora explores these alternate realities, she confronts her regrets and wonders what truly makes a life worth living. The novel is a heartfelt exploration of mental health, purpose, and the beauty of second chances, reminding readers that even the smallest decisions can shape a meaningful life.",
        notes: [
          { id: uuidv4(), text: "Thought-provoking meditation on regrets and alternate lives.", page: 100 }
        ],
        review: {
          rating: 1.4,
          text: "A deep and moving reflection on the choices we make and how they shape our lives. A must-read for those who enjoy introspective fiction."
        },
        addedAt: "2025-03-14T08:45:00Z"
      },
      {
        id: uuidv4(),
        image: BookThief,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "Historical Fiction",
        tags: ["War", "Coming-of-Age", "Literature"],
        status: "to-read",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: true,
        },
        progress: 0,
        totalPages: 552,
        description: "The Book Thief by Markus Zusak is a haunting and beautifully written novel set in Nazi Germany during World War II. The story is narrated by Death and follows Liesel Meminger, a young girl living with a foster family in a small town. Liesel finds solace in stealing books, and as she reads them to her foster family and neighbors, these books become a form of resistance and a way to cope with the horrors of war. Through Liesel's journey, the novel explores themes of love, loss, friendship, and the power of words in a time of darkness. It's a poignant and unforgettable story about the human spirit and the impact of storytelling.",
        notes: [],
        review: {
          rating: 4,
          text: ""
        },
        addedAt: "2025-03-20T17:30:00Z"
      },
      {
        id: uuidv4(),
        image: NormalPeople,
        title: "Normal People",
        author: "Sally Rooney",
        category: "Fiction",
        tags: ["Contemporary", "Romance", "Emotional"],
        status: "reading",
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 75,
        totalPages: 273,
        description: "Normal People by Sally Rooney is a compelling and intimate novel that follows the complex relationship between Connell and Marianne, two young people from a small Irish town. The story spans several years, exploring their deep emotional and intellectual connection as they navigate the ups and downs of their lives, from high school to university. The novel delves into themes of love, friendship, class, identity, and the challenges of personal growth. Through its sharp and realistic portrayal of relationships, Normal People captures the nuances of intimacy and the way people shape and are shaped by each other.",
        notes: [],
        review: {
          rating: 2.5,
          text: ""
        },
        addedAt: "2025-03-21T15:25:00Z"
      },
      {
        id: uuidv4(),
        image: Mistborn,
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        category: "Fantasy",
        tags: ["Epic Fantasy", "Magic", "Heist"],
        status: "reading",
        lists: {
          liked: false,
          saved: true,
          inProgress: false,
          finished: false,
        },
        progress: 320,
        totalPages: 541,
        description: "Mistborn: The Final Empire by Brandon Sanderson is the first book in the Mistborn series, set in a world where ash falls from the sky and mist dominates the night. The story follows Vin, a street urchin with latent magical abilities, who is recruited by a group of rebels led by Kelsier to overthrow the oppressive Lord Ruler who has ruled the Final Empire for over a thousand years. The unique magic system in the novel revolves around \"Allomancy,\" where users ingest and \"burn\" metals to gain powerful abilities. Mistborn is a gripping tale of rebellion, power, and betrayal, with intricate world-building, complex characters, and a focus on hope and redemption.",
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
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        addedAt: "2025-03-20T15:30:00Z"
      }
    ]
  }
};

export default initialStateBooks;