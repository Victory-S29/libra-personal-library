import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { getAllDataSelector, getFiltersSelector, getIsFilteredSelector, getNumberOfBooksPerPageSelector } from '../../store/reducers/catalogue.reducer';
import { displayFilteredCatalogueAction, resetPaginationAction, rewriteCatalogueAction } from '../../store/actions/catalogue.action';
import { displayMainCatalogueAction } from '../../store/actions/catalogue.action';
import { getBannersSelector, getCurrentLanguageSelector } from '../../store/reducers/languages.reducer';

const SortControl = () => {
    const bannersData = useSelector(getBannersSelector);
    // Select filters from the Redux store
    const dropdownRef = useRef(null); // Reference for the dropdown menu

    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
    const [inputData, setInputData] = useState(''); // State to handle search input

    const filters = useSelector(getFiltersSelector);
    const allBooks = useSelector(getAllDataSelector);

    const dispatch = useDispatch(); // Dispatch function for Redux actions
    const isFiltered = useSelector(getIsFilteredSelector); // Check if the catalogue is filtered

    // Initialize selected filters based on the available filters in the Redux store
    const initialSelectedFilters = Object.keys(filters).reduce((acc, key) => {
        const filterType = filters[key]?.type;
        if (filterType === 'radio') {
            acc[key] = null; // For radio filters, we store the selected value
        } else {
            acc[key] = []; // For checkboxes, we store an array of selected values
        }
        return acc;
    }, {});

    const [selectedFilters, setSelectedFilters] = useState(initialSelectedFilters || {}); // State for the currently selected filters
    const numberOfBooksPerPage = useSelector(getNumberOfBooksPerPageSelector);

    const language = useSelector(getCurrentLanguageSelector);
    // Toggle the dropdown menu visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Utility function to convert strings to a safe ID format (replace non-alphanumeric characters with underscores)
    function toSafeId(str) {
        return str.replace(/[^a-zA-Z0-9]/g, "_");
    }

    // Close the dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    // Set up event listener for closing the dropdown when clicking outside
    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

    // Handle the change in checkbox/radio selection
    const handleCheckboxChange = (category, value) => {
        setSelectedFilters((prev) => {
            const filterType = filters[category]?.type;
            if (filterType === 'radio') {
                // For radio buttons, only one value can be selected
                return { ...prev, [category]: value };
            } else {
                // For checkboxes, toggle the value in the array
                const currentValues = prev[category] || [];
                const newValues = currentValues.includes(value)
                    ? currentValues.filter((item) => item !== value) // Remove if already selected
                    : [...currentValues, value]; // Add if not selected

                return { ...prev, [category]: newValues };
            }
        });
    };

    // Handle the change in the search input field
    const handleInputChange = (e) => {
        setInputData(e.target.value || ''); // Update the input value state
    };

    const sortBooks = (books, sortBy) => {
        switch (sortBy) {
            case 'Sort by name':
                return [...books].sort((a, b) => a.title.localeCompare(b.title));
            case 'Sort by author':
                return [...books].sort((a, b) => a.author.localeCompare(b.author));
            case 'Sort by date':
                return [...books].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
            case 'Sort by rating':
                return [...books].sort((a, b) => b.review.rating - a.review.rating);
            default:
                return books;
        }
    };

    const generateNewCatalogue = () => {
        let filteredBooks = [...allBooks];

        if (inputData.length > 0) {
            filteredBooks = filteredBooks.filter(book =>
                book.title.toLowerCase().includes(inputData.toLowerCase()) || book.author.toLowerCase().includes(inputData.toLowerCase())
            );
        }

        if (selectedFilters.Genres && selectedFilters.Genres.length > 0) {
            filteredBooks = filteredBooks.filter(book =>
                selectedFilters.Genres.some(selectedGenre =>
                    (book.category[language] || '').toLowerCase() === selectedGenre.toLowerCase()
                )
            );
        }

        if (selectedFilters.Status && selectedFilters.Status.length > 0) {
            if (selectedFilters.Status !== "Turn off sorting by status" && selectedFilters.Status !== "Sortierung nach Status deaktivieren") {
                filteredBooks = filteredBooks.filter(book =>
                    (book.status?.[language] || '').toLowerCase() === selectedFilters.Status.toLowerCase()
                );
            }
            console.log("electedFilters.Status", selectedFilters.Status)
        }
        filteredBooks = sortBooks(filteredBooks, selectedFilters.Additional)
        dispatch(rewriteCatalogueAction(filteredBooks, true));
        dispatch(displayFilteredCatalogueAction(numberOfBooksPerPage));
    };

    const backToMainCatalogue = () => {
        dispatch(resetPaginationAction(0));
        dispatch(displayMainCatalogueAction());
    };

    const clearForm = () => {
        setInputData('');
        setSelectedFilters({})
    };

    return (
        <Fragment>
            <section className='catalogue-search'>
                {
                    isFiltered ? <FontAwesomeIcon icon={faCircleLeft} onClick={backToMainCatalogue} className="icon" />
                        : <div></div>
                }
                <div className="filter-menu" ref={dropdownRef}>
                    <FontAwesomeIcon icon={faBars} className="icon" onClick={toggleDropdown} />
                    {dropdownOpen ? (
                        <div className="filter-menu__dropdown">
                            <div className="filter-menu__section">
                                <h4 className="filter-menu__section-title">{bannersData.bookEdit.labels.searchByName}</h4>
                                <div className='catalogue-search--input'>
                                    <FontAwesomeIcon icon={faSearch} className="icon icon-focus" />
                                    <input
                                        type="text"
                                        placeholder={bannersData.catalogueInfo.placeholders.searchBooksInput}
                                        onChange={handleInputChange}
                                        value={inputData || ''}
                                    />
                                </div>
                            </div>
                            {Object.entries(filters).map(([categoryName, { data, type }]) => (
                                <div key={categoryName} className="filter-menu__section">
                                    <h4 className="filter-menu__section-title">{categoryName}</h4>
                                    <div className="filter-menu__options">
                                        {Array.isArray(data) && data.map((item, id) => {
                                            const value = typeof item === 'object' ? item[language] : item;
                                            return (
                                                <div key={id} className="filter-menu__option">
                                                    <input
                                                        type={type === 'radio' ? 'radio' : 'checkbox'}
                                                        id={toSafeId(value)}
                                                        name={toSafeId(categoryName)}
                                                        value={value}
                                                        className="filter-menu__checkbox"
                                                        onChange={() => handleCheckboxChange(categoryName, value, type)}
                                                        checked={type === 'radio'
                                                            ? selectedFilters[categoryName] === value
                                                            : selectedFilters[categoryName]?.includes(value) || false
                                                        }
                                                    />
                                                    <label htmlFor={toSafeId(value)} className="filter-menu__label">
                                                        {value}
                                                    </label>
                                                </div>
                                            );

                                        })}
                                    </div>
                                </div>
                            ))}
                            <button className="change-btn" onClick={() => {
                                generateNewCatalogue();
                                setDropdownOpen(false);
                                clearForm()
                            }
                            }>{bannersData.bookEdit.labels.search}</button>
                        </div>
                    ) : null}
                </div>
            </section>
        </Fragment>
    );
};

export default SortControl;