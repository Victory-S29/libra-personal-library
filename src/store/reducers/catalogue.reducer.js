import { DISPLAY_PAGE_OF_BOOKS_TYPE } from "../actions/catalogue.action";
import initialStateBooks from "../base/BasicData";

const numberOfBooksPerPageNumb = 6;

const initialState = {
    catalogueSliderData: {
        currentPage: 1,
        previousPage: null,
        allData: initialStateBooks.basicBooks.data,
        currentData: initialStateBooks.basicBooks.data,
    },
    numberOfBooks: 10,
    numberOfBooksPerPage: numberOfBooksPerPageNumb,
    filters: {},
    showFiltered: false
};

const CatalogueReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_PAGE_OF_BOOKS_TYPE: {
            const { numberOfBooksPerPage, numberOfBooks, currentPage } = action.payload;
            const startIndex = (currentPage - 1) * numberOfBooksPerPage;
            const endIndex = startIndex + numberOfBooksPerPage;

            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    currentPage,
                    currentData: state.catalogueSliderData.allData.slice(startIndex, endIndex),
                },
                numberOfBooks: numberOfBooks
            };
        }
        default: {
            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    currentData: state.catalogueSliderData.allData.slice(0, numberOfBooksPerPageNumb),
                },
            };
        }
    }
}

export default CatalogueReducer;

export const getCurrentDataSelector = (state) => state.catalogueReducer.catalogueSliderData.currentData;
export const getCurrentPageSelector = (state) => state.catalogueReducer.catalogueSliderData.currentPage;

export const getNumberOfBooksSelector = (state) => state.catalogueReducer.numberOfBooks;
export const getNumberOfBooksPerPageSelector = (state) => state.catalogueReducer.numberOfBooksPerPage;

export const getFiltersSelector = (state) => state.catalogueReducer.filters;
export const getIsFilteredSelector = (state) => state.catalogueReducer.showFiltered;