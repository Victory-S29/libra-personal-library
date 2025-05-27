import React, { Fragment, useEffect } from 'react';
import { BreadcrumbComponent, Catalogue, Features, SliderComponent } from '../';
import { getPopularBooksSelector, getStartingBooksSelector } from '../../store/reducers/books.reducer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
    const startingBooks = useSelector(getStartingBooksSelector);
    const popularBooks = useSelector(getPopularBooksSelector);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Fragment>
            <BreadcrumbComponent />
            <SliderComponent {...startingBooks} />
            <SliderComponent {...popularBooks} />
            <Catalogue />
            <Features />
        </Fragment>
    );
};

export default MainPage;