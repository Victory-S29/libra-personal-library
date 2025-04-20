import { combineReducers, createStore } from "redux"
import BooksReducer from "./reducers/books.reducer";
import CatalogueReducer from "./reducers/catalogue.reducer";
import UserReducer from "./reducers/user.reducer";
import LanguageReducer from "./reducers/languages.reducer";

const reducers = {
    booksReducer: BooksReducer,
    catalogueReducer: CatalogueReducer,
    userReducer: UserReducer,
    languageReducer: LanguageReducer
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;