import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBannersSelector } from '../../store/reducers/languages.reducer';
import { getIsLoginSelector } from '../../store/reducers/user.reducer';
import { useTheme } from '../../context/ThemeContext';

const NavBar = ({ SetShowLogin, toggleLoginPopup }) => {
    const bannersData = useSelector(getBannersSelector);
    const isLogin = useSelector(getIsLoginSelector);
    const { theme } = useTheme();
    const handleUserClick = () => {
        SetShowLogin(true);
        toggleLoginPopup();
    }

    return (
        <Fragment>
            <nav className='main-nav'>
                {theme === "light" ? (
                    <Link to={`/`}>
                        <img src={bannersData.logo.LibraLogo} alt="Libra" />
                        <h1>{bannersData.logo.title}</h1>
                    </Link>
                ) : (
                    <Link to={`/`}>
                        <img src={bannersData.logo.LibraLogoLight} alt="Libra" />
                        <h1>{bannersData.logo.title}</h1>
                    </Link>
                )}
                <div className='navbar-settings'>
                    {isLogin ? <Link to='/settings'> <FontAwesomeIcon icon={faUserSolid} className='icon' /> </Link>
                        : <FontAwesomeIcon icon={faUserRegular} className='icon' onClick={handleUserClick} />}
                </div>
            </nav>
            <hr className='separator' />
        </Fragment>
    );
};

export default NavBar;