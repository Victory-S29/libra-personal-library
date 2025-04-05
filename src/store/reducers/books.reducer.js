import initialStateBooks from "../base/BasicBooks";

const initialState = {
    startingBooks: initialStateBooks.startingBooks,
    popularBooks: initialStateBooks.popularBooks,
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