import { CHANGE_BOOK_INFO } from "../actions/catalogue.action";
import initialStateBooks from "../base/BasicBooks";

const initialState = {
    startingBooks: initialStateBooks.startingBooks,
    popularBooks: initialStateBooks.popularBooks,
    noBook: initialStateBooks.noCover,
};

const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BOOK_INFO: {
            const updatedStartingBooks = state.startingBooks.data.map(book =>
                book.id === action.payload.changedBook.id
                    ? { ...book, ...action.payload.changedBook }
                    : book
            );

            const updatedPopularBooks = state.popularBooks.data.map(book =>
                book.id === action.payload.changedBook.id
                    ? { ...book, ...action.payload.changedBook }
                    : book
            );

            return {
                ...state,
                startingBooks: { ...state.startingBooks, data: updatedStartingBooks },
                popularBooks: { ...state.popularBooks, data: updatedPopularBooks },
            }
        }
        default: {
            return state;
        }
    }
}

export default BooksReducer;

export const getStartingBooksSelector = (state) => state.booksReducer.startingBooks;
export const getPopularBooksSelector = (state) => state.booksReducer.popularBooks;
export const getNoBooksSelector = (state) => state.booksReducer.noBook;