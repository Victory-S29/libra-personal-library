export const DISPLAY_PAGE_OF_BOOKS_TYPE = "DISPLAY_PAGE_OF_BOOKS_TYPE";

export const displayNewPageAction = (numberOfBooksPerPage, numberOfBooks, currentPage) => {
    return {
        type: DISPLAY_PAGE_OF_BOOKS_TYPE,
        payload: {
            numberOfBooksPerPage,
            numberOfBooks,
            currentPage
        }
    };
};