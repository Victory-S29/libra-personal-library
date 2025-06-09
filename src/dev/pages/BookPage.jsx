import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllDataSelector } from '../../store/reducers/catalogue.reducer';
import StarRating from '../sliders/StarRating';
import {
    faBookmark as faBookmarkRegular,
    faHeart as faHeartRegular,
    faSquareCheck as faSquareCheckRegular,
    faClock as faClockRegular
} from '@fortawesome/free-regular-svg-icons';
import {
    faBookmark as faBookmarkSolid,
    faHeart as faHeartSolid,
    faSquareCheck as faSquareCheckSolid,
    faClock as faClockSolid
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getNoBooksSelector, getPopularBooksSelector } from '../../store/reducers/books.reducer';
import { ChangeReviewPopup, ConfirmPopup, NotesSection, SliderComponent } from '../';
import { getBannersSelector, getCurrentLanguageSelector } from '../../store/reducers/languages.reducer';
import { deleteBookAction, toggleBookListAction } from '../../store/actions/catalogue.action';

const BookPage = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allData = useSelector(getAllDataSelector);
    const popularBooks = useSelector(getPopularBooksSelector);
    const noBooks = useSelector(getNoBooksSelector);
    const currentBook = allData.find(book => String(book.id) === String(bookId));
    const bannersData = useSelector(getBannersSelector);
    const language = useSelector(getCurrentLanguageSelector);
    const similarBooksSorting = () => {
        if (!currentBook) return { ...noBooks };

        const filteredBooksByCategory = allData?.filter((book) =>
            book?.category?.[language] === currentBook?.category?.[language]
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

        const uniqueBooksMap = new Map();
        allFilteredBooks.forEach(book => {
            uniqueBooksMap.set(book.id, book);
        });
        const uniqueBooks = Array.from(uniqueBooksMap.values());

        const booksWithoutCurrent = uniqueBooks.filter(book => book.id !== bookId);

        return booksWithoutCurrent.length > 4
            ? { title: "You may also like...", data: booksWithoutCurrent.slice(0, 10) }
            : { ...noBooks };
    };

    const similarBooks = similarBooksSorting();
    const [showChangeReviewPopup, setShowChangeReviewPopup] = useState(false);
    const [showConfirmPopupDelete, setShowConfirmPopupDelete] = useState(false);

    const icons = [
        { key: 'liked', solid: faHeartSolid, reg: faHeartRegular },
        { key: 'finished', solid: faSquareCheckSolid, reg: faSquareCheckRegular },
        { key: 'inProgress', solid: faClockSolid, reg: faClockRegular },
        { key: 'saved', solid: faBookmarkSolid, reg: faBookmarkRegular }
    ];
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
                                <p>{currentBook.category ? currentBook.category[language] : ''}</p>
                                <p><span>{currentBook.tags?.join(', ') || ''}</span></p>
                                <p className='description-paragraf'>{currentBook.description}</p>
                                <div className='users-progress'>
                                    <p className='reading-progress'><span>{currentBook.progress}</span>/{currentBook.totalPages}</p>
                                    <StarRating rating={currentBook.review.rating} />
                                    <Link className='change-btn' to={`/change-bookinfo/${bookId}`}>{bannersData.notifications.basic.change}</Link>
                                    <div className='actions-bar'>
                                        {icons.map(({ key, solid, reg }) => (
                                            <FontAwesomeIcon
                                                key={key}
                                                icon={currentBook.lists[key] ? solid : reg}
                                                className={`icon ${currentBook.lists[key] ? 'icon-filled' : ''}`}
                                                onClick={() => dispatch(toggleBookListAction(bookId, key))}
                                            />
                                        ))}
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