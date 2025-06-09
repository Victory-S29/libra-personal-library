import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBannersSelector } from '../../store/reducers/languages.reducer';
import {
    faBookmark as faBookmarkRegular,
    faHeart as faHeartRegular,
    faSquareCheck as faSquareCheckRegular,
    faClock as faClockRegular
} from '@fortawesome/free-regular-svg-icons';
import { faPlus as faPlusSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BreadcrumbComponent = () => {
    const bannersData = useSelector(getBannersSelector);
    const links = [
        { to: '/create-new-book', icon: faPlusSolid, labelKey: 'createNewBook' },
        { to: '/liked-books', icon: faHeartRegular, labelKey: 'likedBooks' },
        { to: '/finished-books', icon: faSquareCheckRegular, labelKey: 'finishedBooks' },
        { to: '/inprogress-books', icon: faClockRegular, labelKey: 'inProgressBooks' },
        { to: '/saved-books', icon: faBookmarkRegular, labelKey: 'savedBooks' }
    ];
    return (
        <section className='breadcrumb-component--section'>
            {links.map((link, index) => (
                <React.Fragment key={link.labelKey}>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => `breadcrumb-component--link ${isActive ? 'active' : ''}`}
                        title={bannersData.catalogueInfo.labels[link.labelKey]}
                        id={link.labelKey}
                    >
                        <FontAwesomeIcon icon={link.icon} className="icon" />
                        {bannersData.catalogueInfo.labels[link.labelKey]}
                    </NavLink>
                    {index < links.length - 1 && (
                        <p className='breadcrumb-component--separator'>|</p>
                    )}
                </React.Fragment>
            ))}
        </section>
    );
};

export default BreadcrumbComponent;