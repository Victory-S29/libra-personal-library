import React from 'react';
import { Book } from '../';
import { getCurrentDataSelector } from '../../store/reducers/catalogue.reducer';
import { useSelector } from 'react-redux';

const CatalogueBookSection = () => {
    const currentData = useSelector(getCurrentDataSelector);

    return (
        <section className='catalogue-book__section' >
            {currentData && currentData.map((book) => (
                <Book title={book.title}
                    author={book.author}
                    rating={book.rating}
                    image={book.image}
                    publisher={book.publisher}
                    key={book.id}
                />
            ))}      
        </section>
    );
};

export default CatalogueBookSection;