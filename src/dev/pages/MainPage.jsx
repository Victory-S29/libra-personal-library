import React, { Fragment } from 'react';
import { Catalogue, Features, SliderComponent } from '../';
import { getPopularBooksSelector, getStartingBooksSelector } from '../../store/reducers/books.reducer';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const startingBooks = useSelector(getStartingBooksSelector);
    const popularBooks = useSelector(getPopularBooksSelector);

    return (
        <Fragment>
            <SliderComponent {...startingBooks} />
            <SliderComponent {...popularBooks} />
            <Catalogue />
            <Features />
        </Fragment>
    );
};

export default MainPage;