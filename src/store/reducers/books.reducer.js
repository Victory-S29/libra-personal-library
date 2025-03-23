import initialStateBooks from "../base/BasicData";

const BooksReducer = (state = initialStateBooks, action) => {
    switch (action.type) {
        default: {
            return initialStateBooks;
        }
    }
}

export default BooksReducer;

export const getBasicBooksSelector = (state) => state.booksReducer.books;