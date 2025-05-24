import { ADD_BOOK_NOTE, CHANGE_BOOK_INFO, CHANGE_BOOK_REVIEW, CHANGE_NOTE, DELETE_BOOK, DELETE_NOTE, DISPLAY_MAIN_CATALOGUE_TYPE, DISPLAY_NEW_CATALOGUE_TYPE, DISPLAY_PAGE_OF_BOOKS_TYPE, RESET_PAGINATION_TYPE, REWRITE_CATALOGUE_TYPE } from "../actions/catalogue.action";
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
        case CHANGE_BOOK_INFO: {
            const { changedBook } = action.payload;
            const newBookData = {
                ...changedBook,
                tags: changedBook.tags.split(',')
                    .map(tag => tag.trim())
                    .filter(tag => tag !== '')
            };
            const updatedBooks = state.catalogueSliderData.allData.map(book =>
                book.id === newBookData.id ? newBookData : book
            );

            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    allData: updatedBooks,
                }
            };
        }
        case CHANGE_BOOK_REVIEW: {
            const updatedBooksReview = state.catalogueSliderData.allData.map(book =>
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
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    allData: updatedBooksReview,
                }
            }
        }
        case DELETE_BOOK: {
            const updatedAllData = state.catalogueSliderData.allData.filter(book => book.id !== action.payload.bookId);
            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    allData: updatedAllData,
                    currentData: updatedAllData.slice(0, numberOfBooksPerPageNumb),
                }
            };
        }
        case ADD_BOOK_NOTE: {
            const { bookId, note } = action.payload;

            const updateNotes = (books) =>
                books.map((book) =>
                    book.id === bookId
                        ? {
                            ...book,
                            notes: Array.isArray(book.notes)
                                ? [...book.notes, note]
                                : [note]
                        }
                        : book
                );

            const updatedAllData = updateNotes(state.catalogueSliderData.allData);
            const updatedSortedData = updateNotes(state.catalogueSliderData.sortedData);
            const updatedCurrentData = updateNotes(state.catalogueSliderData.currentData);

            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    allData: updatedAllData,
                    sortedData: updatedSortedData,
                    currentData: updatedCurrentData,
                }
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

            const updatedAllData = updateBooks(state.catalogueSliderData.allData);
            const updatedSortedData = updateBooks(state.catalogueSliderData.sortedData);
            const updatedCurrentData = updateBooks(state.catalogueSliderData.currentData);

            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    allData: updatedAllData,
                    sortedData: updatedSortedData,
                    currentData: updatedCurrentData,
                }
            };
        }
        case CHANGE_NOTE: {
            const { newNote } = action.payload;
            const noteId = newNote.noteId;

            const changedNote = {
                id: newNote.noteId,
                page: newNote.notePage,
                text: newNote.noteText
            }
            const updateBooks = (books) =>
                books.map((book) =>
                    book.id === newNote.bookId ? {
                        ...book,
                        notes: Array.isArray(book.notes)
                            ? book.notes.map(note => note.id === noteId ? changedNote : note)
                            : [],
                    } : book
                );

            const updatedAllData = updateBooks(state.catalogueSliderData.allData);
            const updatedSortedData = updateBooks(state.catalogueSliderData.sortedData);
            const updatedCurrentData = updateBooks(state.catalogueSliderData.currentData);

            return {
                ...state,
                catalogueSliderData: {
                    ...state.catalogueSliderData,
                    allData: updatedAllData,
                    sortedData: updatedSortedData,
                    currentData: updatedCurrentData,
                }
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