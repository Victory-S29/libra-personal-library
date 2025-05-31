import React, { useState } from 'react';
import BreadcrumbComponent from '../../components/BreadcrumbComponent';
import { getAllDataSelector } from '../../../store/reducers/catalogue.reducer';
import { useSelector } from 'react-redux';
import { Book } from '../../';
import { getBannersEnSelector } from '../../../store/reducers/languages.reducer';

const FinishedBooksPage = () => {
    const bannersDataEn = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEn;
    const allData = useSelector(getAllDataSelector);
    const [sortQuery, setSortQuery] = useState('');
    const finishedBooks = allData
        .filter((book) => book.lists.finished === true)
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
                {finishedBooks.map((book, index) => (
                    <Book book={book} key={index} />
                ))}
            </section>

            {finishedBooks.length === 0 && (
                <p className='no-books-found--message'>
                    {bannersData.catalogueInfo.messages.noBooksFound}
                </p>
            )}
        </div>
    );
};

export default FinishedBooksPage;