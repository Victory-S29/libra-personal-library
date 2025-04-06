import React, { Fragment } from 'react';
import LibraLogo from '../../style/images/LibraLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const NavBar = ({ SetShowLogin, toggleLoginPopup }) => {
    return (
        <Fragment>
            <nav className='main-nav'>
                <div>
                    <img src={LibraLogo} alt="Libra" />
                    <h1>Libra</h1>
                </div>
                <div className='navbar-settings'>
                    <FontAwesomeIcon icon={faUser} className='icon' onClick={() => { SetShowLogin(true); toggleLoginPopup(); }} />
                </div>
            </nav>
            <hr className='separator' />
        </Fragment>
    );
};

export default NavBar;