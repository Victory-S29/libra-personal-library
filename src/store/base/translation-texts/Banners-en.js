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
    featuresComponent: {
        title: "Everything You Need as a Reader",
        communityAdvantages: [
            { imageSrc: explore, label: 'Explore world' },
            { imageSrc: start, label: 'Start your reading journey' },
            { imageSrc: save, label: 'Save your favourites' },
            { imageSrc: progress, label: 'Track progress' },
            { imageSrc: recommendation, label: 'Rate and Recommend' },
            { imageSrc: inspiration, label: 'Get inspired' }
        ]
    },
    footer: {
        footerNav: [
            { name: "Features", link: "/features" },
            { name: "Technologies", link: "/technologies" },
            { name: "About developers", link: "/about-developer" },
        ]
    },
    buttons: {
        signUp: "Sign up",
        logIn: "Log in",
        register: "Register",
        bookPage: {
            changeReview: "Change Review",
            newNote: "New Note"
        },
        searchByName: {
            label: "Search book by name"
        },
        email: {
            label: "Email",
            placeholder: "Enter your email"
        },
        userName: {
            label: "User name",
            placeholder: "Enter your user name"
        },
        password: {
            label: "Password",
            placeholder: "Enter your password"
        },
        confirmPassword: {
            label: "Confirm Password",
            placeholder: "Confirm your password"
        },
        search: {
            label: "Search"
        },
        username: {
            label: "Username",
            placeholder: "Enter your username"
        }
    },
    notifications: {
        welcome: "Welcome!",
        basic: {
            confirm: "Confirm",
            cancel: "Cancel"
        },
        login: {
            userNotExist: "Your email may be wrong",
            wrongPassword: "Your password may be wrong",
            longPassword: "Password must be at least 8 characters long.",
            matchPassword: "Passwords do not match.",
            haveAnAccount: "Already have an Account?",
            loginHere: "Login here",
            signUpHere: "Sign up here",
            emailError: "An account for this email address already exists.",
            newAcc: "Create a new Account?"
        },
        user: {
            ChangeDataTitle: "Are you sure you want to save changes to your account?"
        }
    },
    settingsPage: {
        profile: {
            title: "Profile",
            description: "Set your account details"
        },
        password: {
            title: "Password",
            description: "Set your password details"
        },
        language: {
            title: "Language",
            description: "Set your language",
            languages: {
                en: "En",
                de: "De"
            }
        },
        delete: {
            title: "Delete",
            description: "Delete account"
        },
        signOut: {
            title: "Sign out",
            description: "Log out from your account"
        },
        change: "Change",
        saveChanges: "Save changes"
    }
};

export default initialStateBannersEn;