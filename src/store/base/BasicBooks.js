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
        title: "Die Tribute von Panem: Sonnenaufgang der Ernte",
        author: "Suzanne Collins",
        category: { en: "Dystopian", de: "Dystopie" },
        tags: ["Science-Fiction", "Dystopie"],
        status: { en: "finished", de: "Beendet" },
        lists: {
          liked: true,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 416,
        description: "Mit Sonnenaufgang der Ernte, dem fünften Buch der Reihe, kehren wir in die Welt von Panem zurück – 24 Jahre vor den Ereignissen von Die Tribute von Panem. Die Geschichte beginnt am Morgen der Ernte der fünfzigsten Hungerspiele, die auch als das zweite Viertelquell bekannt sind.",
        notes: [
          {
            id: uuidv4(),
            text: "Die psychologischen Folgen der Spiele werden hervorgehoben und die Charaktere sind großartig.",
            page: 250
          },
          {
            id: uuidv4(),
            text: "Der Höhepunkt ist intensiv und führt zu einer drastischen Verschiebung der Machtverhältnisse.",
            page: 300
          }
        ],
        review: {
          rating: 4.5,
          text: "Suzanne Collins erforscht in diesem Prequel erneut meisterhaft Themen wie Macht, Kontrolle und Überleben. Dieses Prequel zur „Panem“-Trilogie erweitert die bekannte Welt mit fesselndem Erzählen, überzeugenden Charakteren und unerwarteten Wendungen."
        },
        addedAt: "2025-03-19T12:00:00Z"
      },
      {
        id: uuidv4(),
        image: ProjectHailMary,
        title: "Projekt Heilige Maria",
        author: "Andy Weir",
        category: { en: "Science Fiction", de: "Science-Fiction" },
        tags: ["Sci-Fi", "Thriller", "Überleben"],
        status: { en: "reading", de: "Am Lesen" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 476,
        totalPages: 476,
        description: "Ein einsamer Astronaut. Eine unmögliche Mission. Ein Verbündeter, mit dem er nie gerechnet hätte.",
        notes: [
          {
            id: uuidv4(),
            text: "Eine erstaunliche Mischung aus Wissenschaft und Humor. Die Problemlösung war großartig.",
            page: 200
          }
        ],
        review: {
          rating: 3.5,
          text: "Ein fesselnder, wissenschaftlich fundierter Weltraum-Überlebensroman mit unerwarteter emotionaler Tiefe! Andy Weir liefert mit diesem Buch wieder ein großartiges Abenteuer!"
        },
        addedAt: "2025-03-15T18:20:00Z"
      },
      {
        id: uuidv4(),
        image: TheStarlessSea,
        title: "Das Sternenlose Meer",
        author: "Erin Morgenstern",
        category: { en: "Fantasy", de: "Fantasie" },
        tags: ["Magischer Realismus", "Geheimnis", "Abenteuer"],
        status: { en: "reading", de: "Am Lesen" },
        lists: {
          liked: false,
          saved: false,
          inProgress: true,
          finished: false,
        },
        progress: 230,
        totalPages: 500,
        description: "Als Zachary Rawlins auf ein mysteriöses Buch stößt, das Details aus seinem eigenen Leben enthält, begibt er sich auf eine Reise, wie er sie noch nie zuvor erlebt hat.",
        notes: [
          {
            id: uuidv4(),
            text: "Es ist wunderschöne, traumhafte Prosa mit einer komplexen Erzählweise.",
            page: 120
          },
          {
            id: uuidv4(),
            text: "Das Konzept einer unterirdischen Bibliothek ist faszinierend.",
            page: 200
          }
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
        title: "Der Name des Windes",
        author: "Patrick Rothfuss",
        category: { en: "Fantasy", de: "Fantasie" },
        tags: ["Epische Fantasie", "Magie", "Abenteuer"],
        status: { en: "reading", de: "Am Lesen" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 400,
        totalPages: 662,
        description: "„Der Name des Windes“ von Patrick Rothfuss ist ein fesselnder Fantasyroman über das Leben des begabten jungen Magiers und Musikers Kvothe. Mit seiner wunderschönen Sprache und packenden Geschichte entführt er die Lesenden in eine Welt voller Magie und Geheimnisse.",
        notes: [
          {
            id: uuidv4(),
            text: "Kvothes Erzählweise ist mitreißend, sein Worldbuilding ist beeindruckend.",
            page: 250
          }
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
        title: "Der Wüstenplanet",
        author: "Frank Herbert",
        category: { en: "Science Fiction", de: "Science-Fiction" },
        tags: ["Klassische Sci-Fi", "Politische Intrigen", "Weltraumoper"],
        status: { en: "no status", de: "Kein Status" },
        lists: {
          liked: true,
          saved: false,
          inProgress: false,
          finished: true,
        },
        progress: 688,
        totalPages: 688,
        description: "In „Dune“ wird auf dem Wüstenplaneten Arrakis die Geschichte von Paul Atreides erzählt, dem Erben einer Adelsfamilie. Er regiert ein gefährliches Reich, in dem das „Spice“ das kostbarste Gut ist – eine Substanz, die das Leben verlängert und das Bewusstsein erweitert.",
        notes: [
          {
            id: uuidv4(),
            text: "Komplex, aber lohnend. Die politischen und ökologischen Themen sind weiterhin aktuell.",
            page: 400
          }
        ],
        review: {
          rating: 5,
          text: "Ein zeitloser Klassiker, der die Themen Politik, Religion und Ökologie in einer epischen Science-Fiction-Erzählung vereint. Pflichtlektüre für Science-Fiction-Fans!"
        },
        addedAt: "2025-03-10T13:50:00Z"
      },
      {
        id: uuidv4(),
        image: TheMartian,
        title: "Der Marsianer",
        author: "Andy Weir",
        category: { en: "Science Fiction", de: "Science-Fiction" },
        tags: ["Sci-Fi", "Überleben", "Humor"],
        status: { en: "finished", de: "Beendet" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 385,
        description: "„Der Marsianer“ von Andy Weir ist ein fesselnder Science-Fiction-Roman über den Astronauten Mark Watney. Dieser wird versehentlich für tot gehalten und auf dem Mars zurückgelassen. Mit begrenzten Vorräten muss er all seinen Einfallsreichtum einsetzen, um zu überleben und Kontakt zur Erde aufzunehmen.",
        notes: [],
        review: {
          rating: 3,
          text: "Witzig, spannend und wissenschaftlich fundiert – diese Weltraumüberlebensgeschichte ist einzigartig."
        },
        addedAt: "2025-03-22T13:00:00Z"
      },
      {
        id: uuidv4(),
        image: Circe,
        title: "Circe",
        author: "Madeline Miller",
        category: { en: "Fantasy", de: "Fantasie" },
        tags: ["Mythologie", "Fantasie", "Feminismus"],
        status: { en: "reading", de: "Am Lesen" },
        lists: {
          liked: false,
          saved: false,
          inProgress: true,
          finished: false,
        },
        progress: 150,
        totalPages: 400,
        description: "„Circe“ ist eine wunderschön geschriebene mythologische Nacherzählung über das Leben der Zauberin Circe, Tochter des Sonnengottes Helios. Nachdem sie die Götter herausgefordert hat, wird sie auf eine abgelegene Insel verbannt. Dort verfeinert sie ihre Hexenkünste und begegnet berühmten Gestalten aus der griechischen Mythologie, darunter Odysseus. Der Roman behandelt Themen wie Transformation, Macht, Identität und die Suche nach dem eigenen Platz in der Welt, insbesondere als Frau in einer Welt der Götter und Männer.",
        notes: [],
        review: {
          rating: 4.5,
          text: "Es ist eine wunderschön geschriebene Nacherzählung eines Mythos aus der Perspektive der weiblichen Selbstermächtigung."
        },
        addedAt: "2025-03-23T10:45:00Z"
      },
      {
        id: uuidv4(),
        image: Educated,
        title: "Befreit: Wie Bildung mir die Welt erschloss",
        author: "Tara Westover",
        category: { en: "Memoir", de: "Memoiren" },
        tags: ["Autobiografie", "Inspiration", "Wahre Geschichte"],
        status: { en: "to-read", de: "Leseliste" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 334,
        description: "„Befreit“ von Tara Westover ist eine kraftvolle Autobiografie über eine Frau, die in einer streng religiösen und abgeschotteten Überlebensgemeinschaft in Idaho aufwächst. Ohne Schulbildung oder medizinische Versorgung bringt sie sich das Lernen selbst bei, schafft es an die Universität und promoviert schließlich in Cambridge. Das Buch erzählt von ihrem Weg zur Selbstfindung, Bildung und Unabhängigkeit – und vom schwierigen Spagat zwischen familiärer Loyalität und dem Streben nach einem eigenen Leben.",
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
        title: "Die 1% Methode",
        author: "James Clear",
        category: { en: "Self-help", de: "Selbsthilfe" },
        tags: ["Produktivität", "Gewohnheiten", "Motivation"],
        status: { en: "reading", de: "Am Lesen" },
        lists: {
          liked: true,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 80,
        totalPages: 320,
        description: "„Die 1%-Methode“ von James Clear ist ein praxisnaher Ratgeber, der zeigt, wie man durch kleine, konsequente Veränderungen gute Gewohnheiten aufbaut und schlechte überwindet. Die Idee dahinter: Winzige Verbesserungen führen mit der Zeit zu bemerkenswerten Ergebnissen. Clear erläutert den Aufbau von Gewohnheiten in vier Schritten: Auslösereiz, Verlangen, Reaktion und Belohnung. Er gibt praktische Tipps, wie man Gewohnheiten sichtbar, attraktiv, einfach und befriedigend macht. Der Fokus liegt auf identitätsbasierten Gewohnheiten. Wer möchtest du sein, statt was möchtest du erreichen?",
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
        title: "Der Alchimist",
        author: "Paulo Coelho",
        category: { en: "Fiction", de: "Belletristik" },
        tags: ["Abenteuer", "Philosophie", "Lebensweisheiten"],
        status: { en: "finished", de: "Beendet" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 208,
        totalPages: 208,
        description: "„Der Alchimist“ von Paulo Coelho ist ein philosophischer Roman über Santiago, einen jungen andalusischen Hirten, der sich auf eine Reise begibt, um einen Schatz aus einem Traum zu finden. Auf dem Weg begegnet er Königen, Kaufleuten und einem Alchemisten, die ihm helfen, tiefere Wahrheiten über das Leben, die Bestimmung und das Streben nach der eigenen „Persönlichen Legende“ zu erkennen. Eine spirituelle Reise zur Selbstverwirklichung und dem Glauben, dass das Universum uns unterstützt, wenn wir etwas wirklich wollen.",
        notes: [],
        review: {
          rating: 3.9,
          text: "Eine poetische Reise, die uns lehrt, unseren Träumen zu folgen und den Sinn des Lebens zu erkennen."
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
        title: "Die Schwesternschaft von Dune",
        author: "Brian Herbert & Kevin J. Anderson",
        category: { en: "Science Fiction", de: "Science-Fiction" },
        tags: ["Sci-Fi", "Space Opera", "Abenteuer"],
        status: { en: "to-read", de: "Leseliste" },
        lists: {
          liked: false,
          saved: true,
          inProgress: true,
          finished: false,
        },
        progress: 0,
        totalPages: 512,
        description: "Rund 80 Jahre nach dem Butlerianischen Dschihad bildet sich die Schwesternschaft der Bene Gesserit heraus. Intrigen, Machtspiele und der Aufstieg der Mentaten und Schwertmeister bestimmen diese frühe Phase der Dune-Zeitlinie.",
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
        title: "Das Atlas-Paradoxon",
        author: "Olivie Blake",
        category: { en: "Fantasy", de: "Fantasie" },
        tags: ["Düstere Akademie", "Fantasie", "Geheimnis"],
        status: { en: "reading", de: "am Lesen" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 120,
        totalPages: 400,
        description: "In der Fortsetzung von „The Atlas Six” werden moralische Konflikte, geheime Allianzen und die dunklen Konsequenzen magischen Wissens innerhalb einer geheimen Gesellschaft vertieft.",
        notes: [
          { id: uuidv4(), text: "Interessante philosophische Diskussionen über Wissen und Macht.", page: 75 },
          { id: uuidv4(), text: "Die Charakterdynamik wird immer komplexer.", page: 110 }
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
        title: "Das Haus am Cerulean-Meer",
        author: "TJ Klune",
        category: { en: "Fantasy", de: "Fantasie" },
        tags: ["Wohlfühlbuch", "Fantasie", "LGBTQ+"],
        status: { en: "to-read", de: "Leseliste" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 0,
        totalPages: 398,
        description: "Ein Beamter untersucht ein magisches Waisenhaus und entdeckt durch die außergewöhnlichen Kinder und ihre Betreuer die wahre Bedeutung von Familie, Akzeptanz und Mut.",
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
        title: "Babel: Eine arkane Geschichte",
        author: "R.F. Kuang",
        category: { en: "Historical Fantasy", de: "Historische Fantasie" },
        tags: ["Düstere Akademie", "Linguistik", "Geschichte"],
        status: { en: "No status", de: "Kein Status" },
        lists: {
          liked: false,
          saved: true,
          inProgress: false,
          finished: true,
        },
        progress: 0,
        totalPages: 560,
        description: "In einer alternativen Version des 19. Jahrhunderts wird ein chinesischer Waisenjunge an das Institut Babel in Oxford gebracht. Dort ist Sprache Magie – und Kolonialismus wird bekämpft.",
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
        title: "Die Mitternachtsbibliothek",
        author: "Matt Haig",
        category: { en: "Fiction", de: "Belletristik" },
        tags: ["Philosophisch", "Lebensentscheidungen", "Fantasie"],
        status: { en: "finished", de: "gelesen" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 288,
        totalPages: 288,
        description: "Nora Seed entdeckt zwischen Leben und Tod eine Bibliothek, in der sie all ihre möglichen Leben durchlebt und erkennt, was wirklich zählt.",
        notes: [
          { id: uuidv4(), text: "Nachdenklich stimmende Reflexion über Reue und alternative Lebenswege.", page: 100 }
        ],
        review: {
          rating: 1.4,
          text: "Eine bewegende Erzählung über Entscheidungen und deren Bedeutung. Ideal für Leser:innen, die introspektive Literatur mögen."
        },
        addedAt: "2025-03-14T08:45:00Z"
      },
      {
        id: uuidv4(),
        image: BookThief,
        title: "Die Bücherdiebin",
        author: "Markus Zusak",
        category: { en: "Historical Fiction", de: "Historische Belletristik" },
        tags: ["Krieg", "Erwachsenwerden", "Literatur"],
        status: { en: "to-read", de: "Leseliste" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: true,
        },
        progress: 0,
        totalPages: 552,
        description: "In Nazi-Deutschland findet ein Mädchen Trost durch Bücher. Der Tod erzählt die Geschichte von Verlust, Freundschaft und der Kraft des Wortes.",
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
        title: "Normale Menschen",
        author: "Sally Rooney",
        category: { en: "Fiction", de: "Belletristik" },
        tags: ["Zeitgenössisch", "Romantik", "Emotional"],
        status: { en: "reading", de: "am Lesen" },
        lists: {
          liked: false,
          saved: false,
          inProgress: false,
          finished: false,
        },
        progress: 75,
        totalPages: 273,
        description: "Die Beziehung zwischen Connell und Marianne durchlebt Höhen und Tiefen. Es ist eine feinfühlige Erzählung über Nähe, Klasse und Identität.",
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
        title: "Mistborn: Der letzte Kaiser",
        author: "Brandon Sanderson",
        category: { en: "Fantasy", de: "Fantasie" },
        tags: ["Epische Fantasie", "Magie", "Raubzug"],
        status: { en: "reading", de: "am Lesen" },
        lists: {
          liked: false,
          saved: true,
          inProgress: false,
          finished: false,
        },
        progress: 320,
        totalPages: 541,
        description: "Eine junge Straßendiebin entdeckt ihre magischen Fähigkeiten in einer Welt, in der die Metallmagie herrscht. Gemeinsam mit Rebellen plant sie, das Reich des Lord Rulers zu stürzen.",
        notes: [],
        review: {
          rating: 4.7,
          text: "Ein einzigartiges Magiesystem, tiefgründige Figuren und eine spannende Handlung – dieses Buch ist ein Muss für Fantasy-Fans."
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
        category: { en: "", de: "" },
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