import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { useTheme } from '../../context/ThemeContext';

const Footer = ({ SetShowLogin, toggleLoginPopup, SetCurrentLoginState }) => {
    const bannersDataEn = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEn;
    const { theme } = useTheme();
    const footerNav = bannersData.footer.footerNav;
    return (
        <footer>
            <div className="footer-logo">
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
                }}>{bannersData.user.labels.signUp}</button>
                <button className="login" onClick={() => {
                    SetCurrentLoginState("Log in");
                    SetShowLogin(true); toggleLoginPopup();
                }}>{bannersData.user.labels.logIn}</button>
            </div>
        </footer>
    );
};

export default Footer;