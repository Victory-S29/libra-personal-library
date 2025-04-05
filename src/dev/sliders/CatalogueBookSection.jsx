import React from 'react';
import { Book } from '../';
import { getAllDataSelector, getCurrentDataSelector, getIsFilteredSelector } from '../../store/reducers/catalogue.reducer';
import { useSelector } from 'react-redux';

const CatalogueBookSection = () => {
    const allData = useSelector(getAllDataSelector);
    const isFiltered = useSelector(getIsFilteredSelector);
    const currentData = useSelector(getCurrentDataSelector);

    return (
        <section className='catalogue-book__section' >
            {isFiltered === true ?
                currentData && currentData.map((book) => (
                    <Book title={book.title}
                        author={book.author}
                        rating={book.review.rating}
                        image={book.image}
                        publisher={book.publisher}
                        key={book.id}
                    />
                )) :
                allData && allData.map((book) => (
                    <Book title={book.title}
                        author={book.author}
                        rating={book.review.rating}
                        image={book.image}
                        publisher={book.publisher}
                        key={book.id}
                    />
                ))
            }
        </section>
    );
};

export default CatalogueBookSection;