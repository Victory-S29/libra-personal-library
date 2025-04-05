import React, { Fragment } from 'react';
import { Catalogue, NavBar, SliderComponent } from '../';
import { getPopularBooksSelector, getStartingBooksSelector } from '../../store/reducers/books.reducer';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const startingBooks = useSelector(getStartingBooksSelector);
    const popularBooks = useSelector(getPopularBooksSelector);
     
    return (
        <Fragment>
            <NavBar />
            <SliderComponent {...startingBooks}   />
            <SliderComponent {...popularBooks}   />
            <Catalogue />
        </Fragment>
    );
};

export default MainPage;