import { combineReducers, createStore } from "redux"
import BooksReducer from "./reducers/books.reducer";

const reducers = {
    booksReducer: BooksReducer,
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;