import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllDataSelector } from '../../store/reducers/catalogue.reducer';
import StarRating from '../sliders/StarRating';
import { faBookmark, faHeart, faSquareCheck, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getNoBooksSelector, getPopularBooksSelector } from '../../store/reducers/books.reducer';
import { ChangeReviewPopup, ConfirmPopup, NotesSection, SliderComponent } from '../';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { deleteBookAction } from '../../store/actions/catalogue.action';

const BookPage = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allData = useSelector(getAllDataSelector);
    const popularBooks = useSelector(getPopularBooksSelector);
    const noBooks = useSelector(getNoBooksSelector);
    const currentBook = allData.find(book => String(book.id) === String(bookId));
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;

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
    const [showChangeReviewPopup, setShowChangeReviewPopup] = useState(false);
    const [showConfirmPopupDelete, setShowConfirmPopupDelete] = useState(false);

    useEffect(() => {
        if (!currentBook) {
            navigate('/');
        }
    }, [currentBook, navigate]);

    const deleteBook = () => {
        setShowConfirmPopupDelete(true);
    }

    const handleConfirmDelete = () => {
        dispatch(deleteBookAction(bookId));
        setShowConfirmPopupDelete(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmPopupDelete(false);
    };

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
                                <p>{currentBook.category}</p>
                                <p><span>{currentBook.tags.join(', ')}</span></p>
                                <p className='description-paragraf'>{currentBook.description}</p>
                                <div className='users-progress'>
                                    <p className='reading-progress'><span>{currentBook.progress}</span>/{currentBook.totalPages}</p>
                                    <StarRating rating={currentBook.review.rating} />
                                    <Link className='change-btn' to={`/change-bookinfo/${bookId}`}>{bannersData.notifications.basic.change}</Link>
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
                                <p className='description-paragraf'>{currentBook.review.text ? currentBook.review.text : bannersData.bookEdit.messages.noReview}</p>
                                <button onClick={() => setShowChangeReviewPopup(true)}>{bannersData.bookEdit.labels.changeReview}</button>
                            </section>
                            <SliderComponent {...similarBooks} />
                        </div>
                        <NotesSection currentBook={currentBook} />
                        <button id="delete" onClick={deleteBook}>{bannersData.bookEdit.labels.deleteBook}</button>
                    </section>
                    <SliderComponent {...popularBooks} />
                    {showChangeReviewPopup && <ChangeReviewPopup
                        setShowChangeReviewPopup={setShowChangeReviewPopup}
                        review={currentBook.review.text}
                        bookId={currentBook.id}
                    />}
                    {showConfirmPopupDelete && (
                        <ConfirmPopup
                            title={bannersData.bookEdit.messages.deleteBook}
                            onConfirm={handleConfirmDelete}
                            onCancel={handleCancelDelete}
                        />
                    )}
                </>
            ) : (
                <p>...</p>
            )
            }
        </Fragment>
    );
};

export default BookPage;