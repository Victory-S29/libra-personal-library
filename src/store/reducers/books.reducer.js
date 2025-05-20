import { ADD_BOOK_NOTE, CHANGE_BOOK_INFO, CHANGE_BOOK_REVIEW, DELETE_BOOK, DELETE_NOTE } from "../actions/catalogue.action";
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
        case ADD_BOOK_NOTE: {
            const { bookId, note } = action.payload;
            const updateNotes = (books) =>
                books.map((book) =>
                    book.id === bookId
                        ? { ...book, notes: [...book.notes, note] }
                        : book
                );

            return {
                ...state,
                startingBooks: {
                    ...state.startingBooks,
                    data: updateNotes(state.startingBooks.data),
                },
                popularBooks: {
                    ...state.popularBooks,
                    data: updateNotes(state.popularBooks.data),
                },
            };
        }
        case DELETE_NOTE: {
            const { bookId, noteId } = action.payload;

            const updateBooks = (books) =>
                books.map((book) =>
                    book.id === bookId
                        ? {
                            ...book,
                            notes: Array.isArray(book.notes)
                                ? book.notes.filter((_, index) => index !== noteId)
                                : [],
                        }
                        : book
                );

            return {
                ...state,
                startingBooks: {
                    ...state.startingBooks,
                    data: updateBooks(state.startingBooks.data),
                },
                popularBooks: {
                    ...state.popularBooks,
                    data: updateBooks(state.popularBooks.data),
                },
            };
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