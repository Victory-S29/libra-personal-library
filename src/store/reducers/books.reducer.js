import initialStateBooks from "../base/BasicBooks";

const initialState = {
    startingBooks: initialStateBooks.startingBooks,
    popularBooks: initialStateBooks.popularBooks,
    noBook: initialStateBooks.noCover,
};

const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default BooksReducer;

export const getStartingBooksSelector = (state) => state.booksReducer.startingBooks;
export const getPopularBooksSelector = (state) => state.booksReducer.popularBooks;
export const getNoBooksSelector = (state) => state.booksReducer.noBook;