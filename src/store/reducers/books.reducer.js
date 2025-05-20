import { CHANGE_BOOK_INFO, CHANGE_BOOK_REVIEW, DELETE_BOOK } from "../actions/catalogue.action";
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
        case CHANGE_BOOK_REVIEW: {
            const updatedStartingBooks = state.startingBooks.data.map(book =>
                book.id === action.payload.bookId
                    ? {
                        ...book,
                        review: {
                            ...book.review,
                            text: action.payload.reviewText,
                        }
                    }
                    : book
            );

            const updatedPopularBooks = state.popularBooks.data.map(book =>
                book.id === action.payload.bookId
                    ? {
                        ...book,
                        review: {
                            ...book.review,
                            text: action.payload.reviewText,
                        }
                    }
                    : book
            );

            return {
                ...state,
                startingBooks: { ...state.startingBooks, data: updatedStartingBooks },
                popularBooks: { ...state.popularBooks, data: updatedPopularBooks },
            }
        }
        case DELETE_BOOK: {
            const updatedStartingBooks = state.startingBooks.data.filter(book => book.id !== action.payload.bookId);
            const updatedPopularBooks = state.popularBooks.data.filter(book => book.id !== action.payload.bookId);
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