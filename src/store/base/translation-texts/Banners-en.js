import LibraLogo from '../../../style/images/LibraLogo.png'

const explore = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/explore.png";
const progress = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/progress.png";
const save = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/save.png";
const inspiration = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/inspiration.png";
const recommendation = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/recommendation.png";
const start = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/featuresImgs/start.png";

const initialStateBannersEn = {
    logo: {
        title: "Libra",
        description: "Dive into a World of Stories Together",
        LibraLogo
    },
    notifications: {
        welcome: "Welcome!",
        basic: {
            confirm: "Confirm",
            cancel: "Cancel",
            change: "Change",
            saveChanges: "Save changes",
            delete: "Delete",
            add:"Add"
        },
    },
    featuresComponent: {
        title: "Everything You Need as a Reader",
        communityAdvantages: [
            { imageSrc: explore, label: 'Explore the world' },
            { imageSrc: start, label: 'Start your reading journey' },
            { imageSrc: save, label: 'Save your favourites' },
            { imageSrc: progress, label: 'Track progress' },
            { imageSrc: recommendation, label: 'Rate and recommend' },
            { imageSrc: inspiration, label: 'Find inspiration' }
        ]
    },
    footer: {
        footerNav: [
            { name: "Features", link: "/features" },
            { name: "Technologies", link: "/technologies" },
            { name: "About developers", link: "/about-developer" },
        ]
    },
    user: {
        labels: {
            signUp: "Sign up",
            logIn: "Log in",
            register: "Register",
            email: "Email",
            userName: "User name",
            password: "Password",
            confirmPassword: "Confirm Password"
        },
        placeholders: {
            email: "Enter your email",
            userName: "Enter your user name",
            password: "Enter your password",
            confirmPassword: "Confirm your password",
        },
        messages: {
            shortPassword: "Password must be at least 8 characters long.",
            matchPassword: "Passwords do not match.",
            emailError: "An account for this email address already exists.",
            userNotExist: "This email address may be incorrect.",
            wrongPassword: "Incorrect password.",
            haveAnAccount: "Already have an account?",
            loginHere: "Login here",
            signUpHere: "Sign up here",
            newAcc: "Create a new account?",
        },
        settingsPage: {
            labels: {
                profile: "Profile",
                password: "Password",
                delete: "Delete",
                signOut: "Sign out",
            },
            messages: {
                profile: "Set your account details",
                password: "Set your password details",
                delete: "Delete account",
                signOut: "Log out from your account",
                changeDataTitle: "Are you sure you want to save changes to your account?"
            },
            language: {
                title: "Language",
                description: "Set your language",
                languages: {
                    en: "En",
                    de: "De"
                }
            },
        }
    },
    bookEdit: {
        labels: {
            changeImage: "Change Image",
            title: "Title",
            author: "Author",
            genre: "Genre",
            tags: "Tags (comma-separated)",
            changeReview: "Review",
            description: "Description",
            progress: "Progress",
            newNote: "New note",
            totalPages: "Total pages",
            searchByName: "Search book by name",
            search: "Search",
            rating: "Rating",
            status: "Status",
            review: "Edit review",
            pageNumber: "Page number",
            noteText: "Note",
            changeNote: "Edit note",
            deleteBook: "Delete book"
        },
        placeholders: {
            title: "Add a title",
            author: "Add an author",
            tags: "Add tags separated by commas",
            description: "Add a description",
            progress: "e.g., 30",
            totalPages: "e.g., 300",
            review: "Add a review",
            pageNumber: "e.g., 123",
            noteText: "Write your note here..."
        },
        messages: {
            bookExists: "A book with this title and author already exists.",
            progressError: "Progress cannot exceed total pages.",
            noReview: "Every book is waiting for your review.",
            myNotes: "My Notes",
            addFirstNote: "You can always add one note here.",
            deleteBook: "Permanently delete book",
            deleteNote: "Permanently delete note",
            changeImage: "Don't forget to confirm the image change by clicking the 'Change' button.",
            emptyFields: "Title and Author are required."
        }
    },
    bookAdd: {
        labels: {
            changeImage: "Upload Image",
            title: "Title",
            author: "Author",
            genre: "Genre",
            tags: "Tags (comma-separated)",
            description: "Description",
            progress: "Progress",
            totalPages: "Total pages",
            status: "Status",
        },
        placeholders: {
            title: "Add a title",
            author: "Add an author",
            tags: "Add tags separated by commas",
            description: "Add a description",
            progress: "e.g., 30",
            totalPages: "e.g., 300",
        },
        messages: {
            bookExists: "A book with this title and author already exists.",
            progressError: "Progress cannot exceed total pages.",
            emptyFields: "Title and Author are required."
        }
    },
    catalogueInfo: {
        labels: {
            createNewBook: "Create New Book",
            finishedBooks: "Finished",
            inProgressBooks: "In Progress",
            likedBooks: "Liked",
            savedBooks: "Saved",
        },
        placeholders: {
            sortBooksInput: "Sort by title or author"
        },
        messages: {
            noBooksFound: "You haven't added any books yet."
        },
    }
};

export default initialStateBannersEn;