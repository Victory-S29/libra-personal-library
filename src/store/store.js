import { combineReducers, createStore } from "redux"
import BooksReducer from "./reducers/books.reducer";
import CatalogueReducer from "./reducers/catalogue.reducer";

const reducers = {
    booksReducer: BooksReducer,
    catalogueReducer: CatalogueReducer,
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;