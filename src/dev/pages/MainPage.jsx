import React, { Fragment } from 'react';
import { Catalogue, NavBar, SliderComponent } from '../';
import { getBasicBooksSelector } from '../../store/reducers/books.reducer';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const baseBooks = useSelector(getBasicBooksSelector);
    return (
        <Fragment>
            <NavBar />
            <SliderComponent {...baseBooks}   />
            <Catalogue />
        </Fragment>
    );
};

export default MainPage;