import React from 'react';
import LibraLogo from '../../style/images/LibraLogo.png'

const Footer = ({ SetShowLogin, toggleLoginPopup, SetCurrentLoginState }) => {
    return (
        <footer>
            <div className="footer-logo">
                <div>
                    <img src={LibraLogo} alt="Libra" />
                    <h1>Libra</h1>
                </div>
                <p className="logo-subtitle">Dive into a World of Stories Together</p>
            </div>

            <ul className="footer-nav">
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact us</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About developers</a></li>
            </ul>

            <div className="auth-buttons">
                <button className="register" onClick={() => {
                    SetCurrentLoginState("Sign up");
                    SetShowLogin(true); toggleLoginPopup();
                }}>Sign up</button>
                <button className="login" onClick={() => {
                    SetCurrentLoginState("Log in");
                    SetShowLogin(true); toggleLoginPopup();
                }}>Log in</button>
            </div>
        </footer>
    );
};

export default Footer;