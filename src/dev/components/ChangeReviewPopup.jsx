import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { changeBookReviewAction } from '../../store/actions/catalogue.action';

const ChangeReviewPopup = ({ setShowChangeReviewPopup, review, bookId }) => {
    const dispatch = useDispatch();
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    const [reviewData, setReviewData] = useState(review);

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        };
    }, []);

    const onClick = () => {
        dispatch(changeBookReviewAction(bookId, reviewData));
        setShowChangeReviewPopup(false);
    }

    return (
        <div className='change-review-container'>
            <section className='review-popup'>
                <div className="input-group">
                    <label htmlFor="review">{bannersData.bookEdit.labels.review}</label>
                    <textarea
                        id="review"
                        placeholder={bannersData.bookEdit.placeholders.review}
                        rows={4}
                        value={reviewData}
                        onChange={(e) => setReviewData(e.target.value)}
                    />
                </div>
                <button className='change-btn' onClick={onClick}>{bannersData.notifications.basic.change}</button>
            </section>
        </div>
    );
};

export default ChangeReviewPopup;