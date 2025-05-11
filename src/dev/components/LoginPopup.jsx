import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { getUsersSelector } from '../../store/reducers/user.reducer';
import { addCurrentUserAction, addNewUserAction, changeLoginAction } from "../../store/actions/user.action";
import { v4 as uuidv4 } from 'uuid';

const LoginPopup = ({ SetShowLogin, toggleLoginPopup, currentLoginState, SetCurrentLoginState }) => {
    const popupRef = useRef(null);
    const dispatch = useDispatch();

    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    const usersData = useSelector(getUsersSelector);

    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");

    const [notification, setNotification] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const [loginData, setLoginData] = useState({
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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const validateSignup = () => {
        let isValid = true;
        setPasswordError("");
        setConfirmPasswordError("");
        setEmailError("");

        const existingUser = usersData.find(user => user.email === loginData.email.trim());
        if (existingUser) {
            setEmailError(bannersData.user.messages.emailError);
            isValid = false;
        }
        if (loginData.password.length < 8) {
            setPasswordError(bannersData.user.messages.shortPassword);
            isValid = false;
        }
        if (loginData.password !== loginData.confirmPassword) {
            setConfirmPasswordError(bannersData.user.messages.matchPassword);
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError("");
        setConfirmPasswordError("");

        const trimmedEmail = loginData.email.trim();
        const trimmedUsername = loginData.username.trim();

        if (currentLoginState === "Log in") {
            const user = usersData.find(
                (user) => user.email === trimmedEmail && user.password === loginData.password
            );
            if (user) {
                dispatch(changeLoginAction(true));
                dispatch(addCurrentUserAction(user.id));
                SetShowLogin(false);
                toggleLoginPopup();
            } else {
                setNotification(true);
            };
        }

        if (currentLoginState === "Sign up" && validateSignup()) {
            const newUser = {
                id: uuidv4(),
                email: trimmedEmail,
                username: trimmedUsername,
                password: loginData.password,
            };
            dispatch(addNewUserAction(newUser));
            dispatch(changeLoginAction(true));
            dispatch(addCurrentUserAction(newUser.id));
            SetShowLogin(false);
            toggleLoginPopup();
        }
    };

    const resetData = () => {
        setLoginData({
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
        });
        setPasswordError("");
        setConfirmPasswordError("");
        setEmailError("");
        setNotification(false);
    }

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
                        <label htmlFor="email">{bannersData.user.labels.email}</label>
                        <input type="email" id="email" placeholder={bannersData.user.placeholders.email}
                            value={loginData.email}
                            onChange={handleChange} required
                            autoComplete="email"
                        />
                        {notification && <p className='error-message'>{bannersData.user.messages.userNotExist}</p>}
                        {emailError && currentLoginState === "Sign up" && <p className='error-message'>{emailError}</p>}
                    </div>

                    {currentLoginState === "Sign up" && (<div className="input-group">
                        <label htmlFor="username">{bannersData.user.labels.userName}</label>
                        <input type="text" id="username" placeholder={bannersData.user.placeholders.userName}
                            value={loginData.username}
                            onChange={handleChange} required
                            autoComplete="username"
                        />
                    </div>)}
                    <div className="input-group">
                        <label htmlFor="password">{bannersData.user.labels.password}</label>
                        <div className='password-group'>
                            <input type={passwordType} onPaste={(e) => { e.preventDefault(); }} id="password" placeholder={bannersData.user.placeholders.password} value={loginData.password}
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
                        {notification && <p className='error-message'>{bannersData.user.messages.wrongPassword}</p>}
                        {passwordError && currentLoginState === "Sign up" && <p className='error-message'>{passwordError}</p>}
                    </div>
                    {currentLoginState === "Sign up" &&
                        (<div className="input-group">
                            <label htmlFor="confirmPassword">{bannersData.user.labels.confirmPassword}</label>
                            <div className='password-group'>
                                <input type={confirmPasswordType} id="confirmPassword" placeholder={bannersData.user.placeholders.confirmPassword} value={loginData.confirmPassword}
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
                        )}
                    {currentLoginState === "Sign up" ? <button type='submit'>{bannersData.user.labels.register}</button>
                        : <button type='submit'>{bannersData.user.labels.logIn}</button>
                    }

                    {currentLoginState === "Sign up"
                        ? <p className='signup-login-link'>{bannersData.user.messages.haveAnAccount}
                            <span onClick={() => {
                                SetCurrentLoginState("Log in");
                                resetData();
                            }}>{bannersData.user.messages.loginHere}</span></p>
                        : <p className='signup-login-link'>{bannersData.user.messages.newAcc}
                            <span onClick={() => {
                                SetCurrentLoginState("Sign up");
                                resetData();
                            }}>{bannersData.user.messages.signUpHere}</span></p>
                    }
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;