import React, { useEffect } from 'react';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';

const ConfirmPopup = ({ title, onConfirm, onCancel }) => {
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        };
    }, []);
    return (
        <div className='confirm-container'>
            <section className='confirm-popup'>
                <h3>{title}</h3>
                <div>
                    <button onClick={() => onCancel()} className="cansel-btn">{bannersData.notifications.basic.cancel}</button>
                    <button onClick={() => onConfirm()} className="confirm-btn">{bannersData.notifications.basic.confirm}</button>
                </div>
            </section>
        </div>
    );
};

export default ConfirmPopup;