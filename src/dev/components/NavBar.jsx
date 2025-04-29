import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';

const NavBar = ({ SetShowLogin, toggleLoginPopup }) => {
    const bannersData = useSelector(getBannersEnSelector);

    return (
        <Fragment>
            <nav className='main-nav'>
                <Link to={`/`}>
                    <img src={bannersData.logo.LibraLogo} alt="Libra" />
                    <h1>{bannersData.logo.title}</h1>
                </Link>
                <div className='navbar-settings'>
                    <FontAwesomeIcon icon={faUser} className='icon' onClick={() => { SetShowLogin(true); toggleLoginPopup(); }} />
                </div>
            </nav>
            <hr className='separator' />
        </Fragment>
    );
};

export default NavBar;