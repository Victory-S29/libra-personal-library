export const DISPLAY_PAGE_OF_BOOKS_TYPE = "DISPLAY_PAGE_OF_BOOKS_TYPE";
export const DISPLAY_NEW_CATALOGUE_TYPE = "DISPLAY_NEW_CATALOGUE_TYPE";
export const DISPLAY_MAIN_CATALOGUE_TYPE = "DISPLAY_MAIN_CATALOGUE_TYPE";

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

export const displayFilteredCatalogueAction = (currentData, showFiltered) => {
    return {
        type: DISPLAY_NEW_CATALOGUE_TYPE,
        payload: {
            currentData,
            showFiltered
        }
    };
};

export const displayMainCatalogueAction = () => {
    return {
        type: DISPLAY_MAIN_CATALOGUE_TYPE,
        payload: {}
    };
};