import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentPageSelector, getNumberOfBooksPerPageSelector, getNumberOfBooksSelector,
} from "../../store/reducers/catalogue.reducer";
import { displayNewPageAction } from "../../store/actions/catalogue.action";
import { Pagination } from "rsuite";

const PaginationComponent = () => {
    const dispatch = useDispatch();

    const numberOfBooks = useSelector(getNumberOfBooksSelector);
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

    const handlePageChange = (pageNumber) => {
        if (currentPage !== pageNumber) {
            dispatch(displayNewPageAction(numberOfBooksPerPage, numberOfBooks, pageNumber));
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
        </div>
    );
};

export default PaginationComponent;