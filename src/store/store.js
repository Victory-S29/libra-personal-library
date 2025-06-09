import { combineReducers, createStore } from "redux";
import BooksReducer from "./reducers/books.reducer";
import CatalogueReducer from "./reducers/catalogue.reducer";
import UserReducer from "./reducers/user.reducer";
import LanguageReducer from "./reducers/languages.reducer";

// Combine all individual reducers into one root reducer
const reducers = combineReducers({
    booksReducer: BooksReducer,
    catalogueReducer: CatalogueReducer,
    userReducer: UserReducer,
    languageReducer: LanguageReducer
});

// Function to load user state from localStorage (if it exists)
const loadUserState = () => {
    try {
        const serialized = localStorage.getItem("userState");
        // If there's no data, return undefined to use default state
        if (!serialized) return undefined;
        // Return the parsed userReducer state in the expected shape
        return { userReducer: JSON.parse(serialized) };
    } catch {
        // If there's an error (e.g., JSON parse error), return undefined
        return undefined;
    }
};

// Get persisted user state from localStorage, or fallback to undefined
const persistedState = loadUserState();

// Create the Redux store with persisted user state if available
const store = createStore(reducers, persistedState);

// Subscribe to the store changes and save updated user state to localStorage
store.subscribe(() => {
    try {
        const { userReducer } = store.getState();
        // Save only the userReducer part of the state
        localStorage.setItem("userState", JSON.stringify(userReducer));
    } catch {
        // Silently ignore errors
    }
});

export default store;