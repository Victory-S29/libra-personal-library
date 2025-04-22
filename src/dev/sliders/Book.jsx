import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

const Book = ({ title, author, rating, image, bookId }) => {
    const isClickable = title && author && bookId;

    const content = (
        <>
            <h4 className='single-book-title'>{title}</h4>
            <p className='single-book-text'>{author}</p>
            <img className='single-book-img' src={image} alt={`Cover of ${title}`} />
            <StarRating rating={rating} />
            <div className='actions-bar'>
                <FontAwesomeIcon icon={faBookmark} className='icon' />
                <FontAwesomeIcon icon={faComment} className='icon' />
                <FontAwesomeIcon icon={faShareFromSquare} className='icon' />
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