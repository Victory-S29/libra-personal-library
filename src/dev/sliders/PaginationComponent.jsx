import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllDataSelector,
    getCurrentPageSelector, getIsFilteredSelector, getNumberOfBooksPerPageSelector,
    getSortedDataSelector,
} from "../../store/reducers/catalogue.reducer";
import { displayNewPageAction } from "../../store/actions/catalogue.action";
import { Pagination } from "rsuite";

const PaginationComponent = () => {
    const dispatch = useDispatch();
    const isFiltered = useSelector(getIsFilteredSelector);
    const allData = useSelector(getAllDataSelector);
    const sortedData = useSelector(getSortedDataSelector);
    const data = isFiltered ? sortedData : allData;

    const numberOfBooks = data.length;
    const numberOfBooksPerPage = useSelector(getNumberOfBooksPerPageSelector);
    const currentPage = useSelector(getCurrentPageSelector);

    const paginationData = {
        prev: true,
        next: true,
        first: true,
        last: true,
        maxButtons: 4,
        layout: ["pager"],
    };

    useEffect(() => {
        dispatch(displayNewPageAction(numberOfBooksPerPage, currentPage, isFiltered));
    }, [dispatch, numberOfBooksPerPage, currentPage, isFiltered, data]);

    const handlePageChange = (pageNumber) => {
        if (currentPage !== pageNumber) {
            dispatch(displayNewPageAction(numberOfBooksPerPage, pageNumber, isFiltered));
        }
    };

    return (
        <div className="pagination-section">
            <Pagination
                layout={paginationData.layout}
                prev={paginationData.prev}
                next={paginationData.next}
                first={paginationData.first}
                last={paginationData.last}
                total={numberOfBooks}
                limit={numberOfBooksPerPage}
                activePage={currentPage}
                maxButtons={paginationData.maxButtons}
                onSelect={handlePageChange}
            />
            {console.log(currentPage)}
        </div>
    );
};

export default PaginationComponent;