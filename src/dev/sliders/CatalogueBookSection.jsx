import React from 'react';
import { Book } from '../';
import { getCurrentDataSelector } from '../../store/reducers/catalogue.reducer';
import { useSelector } from 'react-redux';

const CatalogueBookSection = () => {
    const currentData = useSelector(getCurrentDataSelector);

    return (
        <section className='catalogue-book__section' >
            {currentData && currentData.map((book) => (
                <Book key={book.id} book={book} />
            ))
            }

        </section>
    );
};

export default CatalogueBookSection;