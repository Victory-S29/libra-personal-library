const initialStateFeatures = {
  intro: {
    title: "Libra",
    description: "Libra is a modern digital library platform designed to help you manage your reading life efficiently and intuitively. Whether you're building your personal collection or exploring new titles, Libra offers a range of smart, flexible tools to support your experience.",
  },
  catalogue: {
    overview: "Explore a comprehensive book catalogue. Libra provides access to a structured database of books covering a wide range of genres and subjects. Each book record includes:",
    mainDetails: [
      "title",
      "author",
      "genre",
      "cover image",
      "description",
      "Basic and advanced information for deeper context",
      "User-generated ratings",
      "notes",
      "tags",
    ],
  },
  sorting: {
    description: "These features make it easy to find the right book at the right time:",
    options: [
      "Sorting by title (A–Z or Z–A)",
      "Sorting by author (A–Z or Z–A)",
      "Sorting by rating (1 to 5 stars)",
      "Sorting by date",
      "Sorting by reading status: To-read, Reading, Finished, or No Status",
      "Filtering by genre",
    ],
  },
  userFeatures: {
    login: "Once logged in, users can tailor the platform to their preferences. Account-specific features include:",
    preferences: [
      "Theme settings - switch between light and dark mode",
      "Language options - use Libra in English or German",
      "Add or remove books - manage personal library by adding custom entries or deleting existing ones",
    ],
  },
  notes: {
    description: "Create and manage book notes. Libra provides an easy way to document your reading journey:",
    features: [
      "Add notes linked to specific pages",
      "Save favourite quotes, thoughts or questions for future reference",
      "Edit or delete notes as your reading progresses",
      "Add a personal rating from 1 to 5 stars",
    ],
    summary: "Each book becomes more than just a title - it becomes a living document of your experience.",
  },
  control: {
    description: "Stay in control of your reading. Libra puts you in complete control of your digital bookshelf:",
    features: [
      "Track your reading status and progress",
      "Revisit past reads and continue where you left off",
      "Keep your library organized, customized, and aligned with your tastes",
      "Easily add and manage content as your interests evolve - The platform adapts to your habits rather than forcing a fixed structure",
    ],
  },
  footer: {
    summary: "Built for readers, evolving with you. Libra is constantly growing and improving, shaped by the feedback and needs of real readers.",
    note: "Whether you are an occasional reader or a daily reader, Libra offers a flexible, user-centred experience that supports your reading lifestyle.",
    callToAction: "Ready to make your reading more organised and enjoyable? Join Libra and build your personal library - your way.",
  },
};

export default initialStateFeatures;