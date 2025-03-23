import React from 'react';
import { getBasicBooksSelector } from '../../store/reducers/books.reducer';
import { useSelector } from 'react-redux';

const Book = () => {
    const baseBooks = useSelector(getBasicBooksSelector);

    return (
        <div>
            <img className="project-image" src={baseBooks[0].image} alt="project screenshot"   />;
        </div>
    );
};

export default Book;