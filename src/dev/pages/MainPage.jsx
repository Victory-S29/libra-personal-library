import React, { Fragment, useState } from 'react';
import { Catalogue, Features, LoginPopup, NavBar, SliderComponent } from '../';
import { getPopularBooksSelector, getStartingBooksSelector } from '../../store/reducers/books.reducer';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const startingBooks = useSelector(getStartingBooksSelector);
    const popularBooks = useSelector(getPopularBooksSelector);

    const [currentLoginState, SetCurrentLoginState] = useState("Sign up");
    const [showLogin, SetShowLogin] = useState(false);

    const toggleLoginPopup = () => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = showLogin ? '' : `${scrollBarWidth}px`;
        document.body.style.overflow = showLogin ? '' : 'hidden';
    };

    return (
        <Fragment>
            {showLogin ? <LoginPopup SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup}
                currentLoginState={currentLoginState} SetCurrentLoginState={SetCurrentLoginState} /> : <></>}
            <NavBar SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup} />
            <SliderComponent {...startingBooks} />
            <SliderComponent {...popularBooks} />
            <Catalogue />
            <Features />
        </Fragment>
    );
};

export default MainPage;