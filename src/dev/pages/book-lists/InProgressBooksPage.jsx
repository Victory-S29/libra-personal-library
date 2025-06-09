import React, { useState } from 'react';
import BreadcrumbComponent from '../../components/BreadcrumbComponent';
import { useSelector } from 'react-redux';
import { getBannersSelector } from '../../../store/reducers/languages.reducer';
import { getAllDataSelector } from '../../../store/reducers/catalogue.reducer';
import Book from '../../sliders/Book';

const InProgressBooksPage = () => {
    const bannersData = useSelector(getBannersSelector);
    const allData = useSelector(getAllDataSelector);
    const [sortQuery, setSortQuery] = useState('');
    const inProgressBooks = allData
        .filter((book) => book.lists.inProgress === true)
        .filter((book) =>
            book.title.toLowerCase().includes(sortQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(sortQuery.toLowerCase())
        )
        .sort((a, b) => {
            return a.title.localeCompare(b.title);
        });

    return (
        <div>
            <BreadcrumbComponent />
            <div className="books-list--sort-input">
                <input
                    type="text"
                    placeholder={bannersData.catalogueInfo.placeholders.sortBooksInput}
                    value={sortQuery}
                    onChange={(e) => setSortQuery(e.target.value)}
                />
            </div>
            <section className='books-list--section'>
                {inProgressBooks.map((book, index) => (
                    <Book book={book} key={index} />
                ))}
            </section>

            {inProgressBooks.length === 0 && (
                <p className='no-books-found--message'>
                    {bannersData.catalogueInfo.messages.noBooksFound}
                </p>
            )}
        </div>
    );
};

export default InProgressBooksPage;