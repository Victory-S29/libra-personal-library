export const DISPLAY_PAGE_OF_BOOKS_TYPE = "DISPLAY_PAGE_OF_BOOKS_TYPE";
export const DISPLAY_NEW_CATALOGUE_TYPE = "DISPLAY_NEW_CATALOGUE_TYPE";
export const DISPLAY_MAIN_CATALOGUE_TYPE = "DISPLAY_MAIN_CATALOGUE_TYPE";
export const REWRITE_CATALOGUE_TYPE = "REWRITE_NEW_CATALOGUE_TYPE";
export const RESET_PAGINATION_TYPE = "RESET_PAGINATION_TYPE";
export const CHANGE_BOOK_INFO = "CHANGE_BOOK_INFO";
export const CHANGE_BOOK_REVIEW = "CHANGE_BOOK_REVIEW";
export const DELETE_BOOK = "DELETE_BOOK";
export const ADD_BOOK_NOTE = 'ADD_BOOK_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CHANGE_NOTE = 'CHANGE_NOTE';

export const displayNewPageAction = (numberOfBooksPerPage, currentPage, isFiltered) => {
    return {
        type: DISPLAY_PAGE_OF_BOOKS_TYPE,
        payload: {
            numberOfBooksPerPage,
            currentPage,
            isFiltered
        }
    };
};

export const rewriteCatalogueAction = (sortedData, showFiltered) => {

    return {
        type: REWRITE_CATALOGUE_TYPE,
        payload: {
            sortedData,
            showFiltered
        }
    };
};

export const displayFilteredCatalogueAction = (numberOfBooksPerPage) => {
    return {
        type: DISPLAY_NEW_CATALOGUE_TYPE,
        payload: {
            numberOfBooksPerPage
        }
    };
};

export const displayMainCatalogueAction = () => {
    return {
        type: DISPLAY_MAIN_CATALOGUE_TYPE,
        payload: {}
    };
};

export const resetPaginationAction = (currentPage) => {
    return {
        type: RESET_PAGINATION_TYPE,
        payload: {}
    };
};

export const changeBookInfoAction = (changedBook) => {
    return {
        type: CHANGE_BOOK_INFO,
        payload: {
            changedBook
        }
    };
};

export const changeBookReviewAction = (bookId, reviewText) => {
    return {
        type: CHANGE_BOOK_REVIEW,
        payload: {
            bookId,
            reviewText
        }
    };
};

export const deleteBookAction = (bookId) => ({
    type: DELETE_BOOK,
    payload: { bookId }
});

export const addBookNoteAction = (bookId, note) => ({
    type: ADD_BOOK_NOTE,
    payload: { bookId, note },
});

export const deleteNoteAction = (bookId, noteId) => ({
    type: DELETE_NOTE,
    payload: { bookId, noteId }
});

export const changeNoteAction = (newNote) => ({
    type: CHANGE_NOTE,
    payload: { newNote }
});