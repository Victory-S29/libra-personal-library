import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { toggleBookListAction } from '../../store/actions/catalogue.action';
import { useDispatch } from 'react-redux';

const Book = ({ book }) => {
    const dispatch = useDispatch();
    const isClickable = book.title && book.author && book.id;

    const icons = [
        { key: 'liked', solid: faHeartSolid, reg: faHeartRegular },
        { key: 'finished', solid: faSquareCheckSolid, reg: faSquareCheckRegular },
        { key: 'inProgress', solid: faClockSolid, reg: faClockRegular },
        { key: 'saved', solid: faBookmarkSolid, reg: faBookmarkRegular }
    ];
    const content = (
        <>
            <h4 className='single-book-title'>{book.title}</h4>
            <p className='single-book-text'>{book.author}</p>
            <img className='single-book-img' src={book.image} alt={`Cover of ${book.title}`} />
            <StarRating rating={book.rating} />
        </>
    );
    const actionsBar = (
        <div className="actions-bar">
            {icons.map(({ key, solid, reg }) => (
                <FontAwesomeIcon
                    key={key}
                    icon={book.lists[key] ? solid : reg}
                    className={`icon ${book.lists[key] ? 'icon-filled' : ''}`}
                    onClick={() => dispatch(toggleBookListAction(book.id, key))}
                />
            ))}
        </div>
    );
    return isClickable ? (
        <div className='single-book-section'>
            <Link className='single-book-link-section' to={`/book/${book.id}`}>
                {content}
            </Link>
            {actionsBar}
        </div>

    ) : (
        <div className='single-book-section not-clickable'>
            {content}
            {actionsBar}
        </div>
    );
};

export default Book;