import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllDataSelector } from '../../store/reducers/catalogue.reducer';
import StarRating from '../sliders/StarRating';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getNoBooksSelector, getPopularBooksSelector } from '../../store/reducers/books.reducer';
import { SliderComponent } from '../';

const BookPage = () => {
    const { bookId } = useParams();
    const allData = useSelector(getAllDataSelector);
    const popularBooks = useSelector(getPopularBooksSelector);
    const noBooks = useSelector(getNoBooksSelector);
    const currentBook = allData.find(book => String(book.id) === String(bookId));

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
    
        return uniqueBooks.length > 4
            ? { title: "You may also like...", data: uniqueBooks.slice(0, 10) }
            : { ...noBooks };
    };

    const similarBooks = similarBooksSorting();

    return (
        <Fragment>
            {currentBook ? (
                <>
                    <div className="review-area">
                        <div>
                            <p>{currentBook.review.text ? currentBook.review.text : messages.uk.noReview}</p>
                            <img src={currentBook.image} alt = {currentBook.title}/>
                        </div>
                        <SliderComponent {...similarBooks} />
                    </div>
                    <div className="book-info">
                        <h1>{currentBook.title}</h1>
                        <p>{currentBook.author}</p>
                        <p>{currentBook.tags.join(', ')}</p>
                        <div className='users-progress'>
                            <p className='reading-progress'><span>{currentBook.progress}</span>/{currentBook.totalPages}</p>
                            <StarRating rating={currentBook.review.rating} />
                            <div className='actions-bar'>
                                <FontAwesomeIcon icon={faBookmark} className='icon' />
                                <FontAwesomeIcon icon={faComment} className='icon' />
                                <FontAwesomeIcon icon={faShareFromSquare} className='icon' />
                            </div>
                            <h2 className='notes-message'>{messages.uk.notes}</h2>
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
                                    <button>New Note</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <SliderComponent {...popularBooks} />
                </>
            ) : (
                <p>...</p>
            )}
        </Fragment>
    );
};

export default BookPage;