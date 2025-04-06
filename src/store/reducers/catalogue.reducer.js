import { DISPLAY_MAIN_CATALOGUE_TYPE, DISPLAY_NEW_CATALOGUE_TYPE, DISPLAY_PAGE_OF_BOOKS_TYPE, RESET_PAGINATION_TYPE, REWRITE_CATALOGUE_TYPE } from "../actions/catalogue.action";
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
        sortedData: [],
        currentData: [],
    },
    numberOfBooksPerPage: numberOfBooksPerPageNumb,
    filters: initialStateSort,
    showFiltered: false
};

const CatalogueReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_PAGE_OF_BOOKS_TYPE: {
            const { numberOfBooksPerPage, currentPage, isFiltered } = action.payload;
            const startIndex = (currentPage - 1) * numberOfBooksPerPage;
            const endIndex = startIndex + numberOfBooksPerPage;

            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    currentPage,
                    currentData: isFiltered ? state.catalogueSliderData.sortedData.slice(startIndex, endIndex)
                        : state.catalogueSliderData.allData.slice(startIndex, endIndex),
                },
            };
        }
        case REWRITE_CATALOGUE_TYPE: {
            const { sortedData, showFiltered } = action.payload;

            return {
                ...state,
                currentPage: 1,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    sortedData,

                },
                showFiltered
            };
        }
        case DISPLAY_NEW_CATALOGUE_TYPE: {
            const { numberOfBooksPerPage } = action.payload;
            const startIndex = 0;
            const endIndex = startIndex + numberOfBooksPerPage;

            return {
                ...state,
                currentPage: 1,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    currentData: state.catalogueSliderData.sortedData.slice(startIndex, endIndex)
                },
            };
        }
        case DISPLAY_MAIN_CATALOGUE_TYPE: {
            const startIndex = 0;
            return {
                ...state,
                currentPage: 1,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    currentData: state.catalogueSliderData.allData.slice(startIndex, numberOfBooksPerPageNumb)
                },
                showFiltered: false
            };
        }
        case RESET_PAGINATION_TYPE: {
            const { currentPage } = action.payload;
            return {
                ...state,
                currentPage: currentPage,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                },
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
export const getSortedDataSelector = (state) => state.catalogueReducer.catalogueSliderData.sortedData;

export const getNumberOfBooksPerPageSelector = (state) => state.catalogueReducer.numberOfBooksPerPage;
export const getStartingDataSelector = (state) => state.catalogueReducer.catalogueSliderData.startingData;

export const getFiltersSelector = (state) => state.catalogueReducer.filters;
export const getIsFilteredSelector = (state) => state.catalogueReducer.showFiltered;