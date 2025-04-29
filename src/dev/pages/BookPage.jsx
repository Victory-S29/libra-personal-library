import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllDataSelector } from '../../store/reducers/catalogue.reducer';
import StarRating from '../sliders/StarRating';
import { faBookmark, faHeart, faSquareCheck, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getNoBooksSelector, getPopularBooksSelector } from '../../store/reducers/books.reducer';
import { SliderComponent } from '../';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';

const BookPage = () => {
    const { bookId } = useParams();
    const allData = useSelector(getAllDataSelector);
    const popularBooks = useSelector(getPopularBooksSelector);
    const noBooks = useSelector(getNoBooksSelector);
    const currentBook = allData.find(book => String(book.id) === String(bookId));
    const bannersData = useSelector(getBannersEnSelector);

    const messages = {
        uk: {
            noReview: "Every book is waiting for your review",
            notes: "My Notes",
            addFirstNote: "You can always add one Note here"
        }
    };

    const similarBooksSorting = () => {
        if (!currentBook) return { ...noBooks };

        const filteredBooksByCategory = allData?.filter((book) =>
            book?.category === currentBook?.category
        );
        const filteredBooksbyAuthor = allData?.filter((book) =>
            book?.author === currentBook?.author
        );
        const filteredBooksByTags = allData?.filter((book) =>
            book?.tags?.some(t => currentBook?.tags?.includes(t))
        );

        const allFilteredBooks = [
            ...filteredBooksByCategory,
            ...filteredBooksByTags,
            ...filteredBooksbyAuthor
        ];

        const uniqueBooks = Array.from(new Set(allFilteredBooks.map(book => JSON.stringify(book))))
            .map(item => JSON.parse(item));

        const booksWithoutCurrent = uniqueBooks.filter(book => book.id !== bookId);

        return booksWithoutCurrent.length > 4
            ? { title: "You may also like...", data: booksWithoutCurrent.slice(0, 10) }
            : { ...noBooks };
    };

    const similarBooks = similarBooksSorting();

    return (
        <Fragment>
            {currentBook ? (
                <>
                    <section className='single-book--section'>
                        <section className="main-info">
                            <img src={currentBook.image} alt={currentBook.title} />
                            <div>
                                <h1>{currentBook.title}</h1>
                                <h3>{currentBook.author}</h3>
                                <p><span>{currentBook.tags.join(', ')}</span></p>
                                <p className='description-paragraf'>{currentBook.description}</p>
                                <div className='users-progress'>
                                    <p className='reading-progress'><span>{currentBook.progress}</span>/{currentBook.totalPages}</p>
                                    <StarRating rating={currentBook.review.rating} />
                                    <div className='actions-bar'>
                                           <FontAwesomeIcon icon={faHeart} className='icon' />
                                           <FontAwesomeIcon icon={faSquareCheck} className='icon' />
                                           <FontAwesomeIcon icon={faClock} className='icon' />
                                           <FontAwesomeIcon icon={faBookmark} className='icon' />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="additional-info">
                            <section className='book-review'>
                                <p className='description-paragraf'>{currentBook.review.text ? currentBook.review.text : messages.uk.noReview}</p>
                                <button>{bannersData.buttons.bookPage.changeReview}</button>
                            </section>
                            <SliderComponent {...similarBooks} />
                        </div>
                        <section className='notes-section'>
                            <h2 className='notes-message'>{messages.uk.notes}</h2>
                            <section>
                                {currentBook.notes.length > 0 ? (
                                    currentBook.notes.map((note, id) => (
                                        <div className="note" key={id}>
                                            <p className='note-page'>{note.page}</p>
                                            <p className='note-text'>{note.text}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className='new-note--form'>
                                        <p>{messages.uk.addFirstNote}</p>
                                    </div>
                                )}
                            </section>
                            <button>{bannersData.buttons.bookPage.newNote}</button>
                        </section>
                    </section>
                    <SliderComponent {...popularBooks} />
                </>
            ) : (
                <p>...</p>
            )
            }
        </Fragment>
    );
};

export default BookPage;