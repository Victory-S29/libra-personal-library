import { DISPLAY_MAIN_CATALOGUE_TYPE, DISPLAY_NEW_CATALOGUE_TYPE, DISPLAY_PAGE_OF_BOOKS_TYPE } from "../actions/catalogue.action";
import initialStateBooks from "../base/BasicBooks";
import initialStateSort from "../base/SortData";

const numberOfBooksPerPageNumb = 10;

const initialState = {
    catalogueSliderData: {
        currentPage: 1,
        previousPage: null,
        allData: [
            ...initialStateBooks.startingBooks.data,
            ...initialStateBooks.popularBooks.data
        ],
        currentData: [
            ...initialStateBooks.startingBooks.data,
            ...initialStateBooks.popularBooks.data
        ],
    },
    numberOfBooks: 10,
    numberOfBooksPerPage: numberOfBooksPerPageNumb,
    filters: initialStateSort,
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
        case DISPLAY_NEW_CATALOGUE_TYPE: {
            const { currentData, showFiltered } = action.payload;

            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    currentData,
                },
                showFiltered
            };
        }
        case DISPLAY_MAIN_CATALOGUE_TYPE: {
            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                },
                showFiltered: false
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
export const getAllDataSelector = (state) => state.catalogueReducer.catalogueSliderData.allData;

export const getNumberOfBooksSelector = (state) => state.catalogueReducer.numberOfBooks;
export const getNumberOfBooksPerPageSelector = (state) => state.catalogueReducer.numberOfBooksPerPage;
export const getStartingDataSelector = (state) => state.catalogueReducer.catalogueSliderData.startingData;

export const getFiltersSelector = (state) => state.catalogueReducer.filters;
export const getIsFilteredSelector = (state) => state.catalogueReducer.showFiltered;