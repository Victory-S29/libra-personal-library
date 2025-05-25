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

const Book = ({ title, author, rating, image, bookId, lists }) => {
    const isClickable = title && author && bookId;

    const content = (
        <>
            <h4 className='single-book-title'>{title}</h4>
            <p className='single-book-text'>{author}</p>
            <img className='single-book-img' src={image} alt={`Cover of ${title}`} />
            <StarRating rating={rating} />
            <div className='actions-bar'>
                <FontAwesomeIcon
                    icon={lists.liked ? faHeartSolid : faHeartRegular}
                    className={`icon ${lists.liked ? 'icon-filled' : ''}`}
                />
                <FontAwesomeIcon
                    icon={lists.finished ? faSquareCheckSolid : faSquareCheckRegular}
                    className={`icon ${lists.finished ? 'icon-filled' : ''}`}
                />
                <FontAwesomeIcon
                    icon={lists.inProgress ? faClockSolid : faClockRegular}
                    className={`icon ${lists.inProgress ? 'icon-filled' : ''}`}
                />
                <FontAwesomeIcon
                    icon={lists.saved ? faBookmarkSolid : faBookmarkRegular}
                    className={`icon ${lists.saved ? 'icon-filled' : ''}`}
                />
            </div>
        </>
    );

    return isClickable ? (
        <Link className='single-book-section' to={`/book/${bookId}`}>
            {content}
        </Link>
    ) : (
        <div className='single-book-section not-clickable'>
            {content}
        </div>
    );
};

export default Book;