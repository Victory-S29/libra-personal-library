import { combineReducers, createStore } from "redux"
import BooksReducer from "./reducers/books.reducer";
import CatalogueReducer from "./reducers/catalogue.reducer";
import UserReducer from "./reducers/user.reducer";

const reducers = {
    booksReducer: BooksReducer,
    catalogueReducer: CatalogueReducer,
    userReducer: UserReducer
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;