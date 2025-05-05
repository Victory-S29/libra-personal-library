import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';

const Footer = ({ SetShowLogin, toggleLoginPopup, SetCurrentLoginState }) => {
    const bannersData = useSelector(getBannersEnSelector);
    const LibraLogo = bannersData.logo.LibraLogo;
    const footerNav = bannersData.footer.footerNav;
    return (
        <footer>
            <div className="footer-logo">
                <Link to={`/`}>
                    <img src={LibraLogo} alt="Libra" />
                    <h1>{bannersData.logo.title}</h1>
                </Link>
                <p className="logo-subtitle">{bannersData.logo.description}</p>
            </div>
            <ul className="footer-nav">
                {footerNav.map((item, id) => {
                    return (<li className="nav-item"><Link className="nav-item" to={`${item.link}`} key={id}> {item.name} </Link></li>)
                })}
            </ul>
            <div className="auth-buttons">
                <button className="register" onClick={() => {
                    SetCurrentLoginState("Sign up");
                    SetShowLogin(true); toggleLoginPopup();
                }}>{bannersData.buttons.signUp}</button>
                <button className="login" onClick={() => {
                    SetCurrentLoginState("Log in");
                    SetShowLogin(true); toggleLoginPopup();
                }}>{bannersData.buttons.logIn}</button>
            </div>
        </footer>
    );
};

export default Footer;