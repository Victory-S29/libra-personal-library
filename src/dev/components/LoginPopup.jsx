import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';

const LoginPopup = ({ SetShowLogin, toggleLoginPopup, currentLoginState, SetCurrentLoginState }) => {

    const bannersData = useSelector(getBannersEnSelector);

    const popupRef = useRef(null);

    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");

    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [loginData, SetLoginData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const togglePasswordVisibility = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError("");
        setConfirmPasswordError("");

        const trimmedEmail = loginData.email.trim();
        const trimmedUsername = loginData.username.trim();

        if (currentLoginState === "Log in") {
            const loginPayload = {
                email: trimmedEmail,
                password: loginData.password
            };
            console.log("Login Data:", loginPayload);
            SetShowLogin(false);

        }

        if (currentLoginState === "Sign up") {
            let isValid = true;
            if (loginData.password.length < 8) {
                setPasswordError("Password must be at least 8 characters long.");
                isValid = false;
            }
            if (loginData.password !== loginData.confirmPassword) {
                setConfirmPasswordError("Passwords do not match.");
                isValid = false;
            }

            if (isValid) {
                const signupPayload = {
                    email: trimmedEmail,
                    username: trimmedUsername,
                    password: loginData.password,
                    confirmPassword: loginData.confirmPassword
                };
                console.log("Signup Data:", signupPayload);
                SetShowLogin(false);
                toggleLoginPopup();
            }
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        SetLoginData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                SetShowLogin(false);
                toggleLoginPopup();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [SetShowLogin, toggleLoginPopup]);

    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={handleSubmit} ref={popupRef}>
                <div className='login-popup-title'>
                    <p>{bannersData.notifications.welcome}</p>
                    <h3>{currentLoginState}</h3>
                    <p className='login-title--subtext'>{bannersData.logo.description}</p>
                </div>
                <div className='login-popup-inputs'>
                    <div className="input-group">
                        <label htmlFor="email">{bannersData.buttons.email.label}</label>
                        <input type="email" id="email" placeholder={bannersData.buttons.email.placeholder}
                            value={loginData.email}
                            onChange={handleChange} required
                            autoComplete="email"
                        />
                    </div>

                    {currentLoginState === "Sign up"
                        ? <div className="input-group">
                            <label htmlFor="username">{bannersData.buttons.userName.label}</label>
                            <input type="text" id="username" placeholder={bannersData.buttons.userName.placeholder}
                                value={loginData.username}
                                onChange={handleChange} required
                                autoComplete="username"
                            />
                        </div>
                        : <></>
                    }
                    <div className="input-group">
                        <label htmlFor="password">{bannersData.buttons.password.label}</label>
                        <div className='password-group'>
                            <input type={passwordType} onPaste={(e) => { e.preventDefault(); }} id="password" placeholder={bannersData.buttons.password.placeholder} value={loginData.password}
                                onChange={handleChange} required
                                autoComplete={currentLoginState === "Sign up" ? "new-password" : "current-password"}
                            />
                            {passwordType === "password"
                                ? <FontAwesomeIcon icon={faEye} className='icon'
                                    onClick={() => togglePasswordVisibility()} />
                                : <FontAwesomeIcon icon={faEyeSlash} className='icon'
                                    onClick={() => togglePasswordVisibility()} />
                            }
                        </div>
                        {passwordError && currentLoginState === "Sign up" && <p className='error-message'>{passwordError}</p>}
                    </div>
                    {currentLoginState === "Sign up"
                        ? <div className="input-group">
                            <label htmlFor="confirmPassword">{bannersData.buttons.confirmPassword.label}</label>
                            <div className='password-group'>
                                <input type={confirmPasswordType} id="confirmPassword" placeholder={bannersData.buttons.confirmPassword.placeholder} value={loginData.confirmPassword}
                                    onChange={handleChange} required onPaste={(e) => { e.preventDefault(); }}
                                    autoComplete="new-password"
                                />
                                {confirmPasswordType === "password"
                                    ? <FontAwesomeIcon icon={faEye} className='icon'
                                        onClick={() => toggleConfirmPasswordVisibility()} />
                                    : <FontAwesomeIcon icon={faEyeSlash} className='icon'
                                        onClick={() => toggleConfirmPasswordVisibility()} />
                                }
                            </div>
                            {confirmPasswordError && <p className='error-message'>{confirmPasswordError}</p>}
                        </div>
                        : <></>
                    }
                    <button type='submit'>{bannersData.buttons.register}</button>
                    {currentLoginState === "Sign up"
                        ? <p className='signup-login-link'>{bannersData.notifications.login.haveAnAccount}
                            <span onClick={() => SetCurrentLoginState("Log in")}>{bannersData.notifications.login.loginHere}</span></p>
                        : <p className='signup-login-link'>{bannersData.notifications.login.newAcc}
                            <span onClick={() => SetCurrentLoginState("Sign up")}>{bannersData.notifications.login.signUpHere}</span></p>
                    }
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;