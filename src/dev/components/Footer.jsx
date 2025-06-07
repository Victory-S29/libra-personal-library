import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBannersSelector } from '../../store/reducers/languages.reducer';
import { useTheme } from '../../context/ThemeContext';
import { getIsLoginSelector } from '../../store/reducers/user.reducer';

const Footer = ({ SetShowLogin, toggleLoginPopup, SetCurrentLoginState }) => {
    const bannersData = useSelector(getBannersSelector);
    const { theme } = useTheme();
    const footerNav = bannersData.footer.footerNav;
    const isLogin = useSelector(getIsLoginSelector);
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
                    return (<li className="nav-item" key={id}><Link className="nav-item" to={`${item.link}`} key={id}> {item.name} </Link></li>)
                })}
            </ul>
            {!isLogin &&
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
            }
        </footer>
    );
};

export default Footer;