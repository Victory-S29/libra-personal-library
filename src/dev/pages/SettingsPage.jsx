import React, { useState } from 'react';
import { changeLoginAction, changeUserAction } from '../../store/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { getCurrentUserSelector, getUsersSelector } from '../../store/reducers/user.reducer';
import ConfirmPopup from '../components/ConfirmPopup';

const SettingsPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserSelector);
    const usersData = useSelector(getUsersSelector);
    const [passwordError, setPasswordError] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN
    const [loginData, setLoginData] = useState({
        id: currentUser.id,
        email: currentUser.email,
        username: currentUser.username,
        password: currentUser.password,
    })
    const [initialData, setInitialData] = useState({
        id: currentUser.id,
        email: currentUser.email,
        username: currentUser.username,
        password: currentUser.password,
    });
    const [emailError, setEmailError] = useState("");
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
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
        const sameEmailUser = usersData.find(user => user.email === loginData.email.trim());
        const sameUser = sameEmailUser && sameEmailUser.id !== currentUser.id
        setPasswordError("");
        setEmailError("");
    
        if (sameUser) {
            setEmailError(bannersData.notifications.login.emailError);
            isValid = false;
        }
        if (loginData.password.length < 8) {
            setPasswordError(bannersData.notifications.login.longPassword);
            isValid = false;
        }
        return isValid;
    };

    const handleConfirmChanges = () => {
        dispatch(changeUserAction(loginData));
        setInitialData(loginData);
        setShowConfirmPopup(false);
    };

    const handleCancelChanges = () => {
        setLoginData(initialData);
        setShowConfirmPopup(false);
    };
    const isDataChanged = () => {
        return (
            loginData.username !== initialData.username ||
            loginData.email !== initialData.email ||
            loginData.password !== initialData.password
        );
    };
    const handleSubmit = () => {
        if (validateSignup()) {
            if (isDataChanged()) {
                setShowConfirmPopup(true);
            }
            // dispatch(changeUserAction(loginData));
        }
    }

    const onClick = () => {
        dispatch(changeLoginAction(false));
    }
    return (
        <div className='settings-page'>
            <section className='main-settings--section'>
                <form>
                    <section className='main-section'>
                        <div className='main-section--title'>
                            <h2>{bannersData.settingsPage.profile.title}</h2>
                            <p>{bannersData.settingsPage.profile.description}</p>
                        </div>
                        <div className='main-section--form'>
                            <div className="input-group">
                                <label htmlFor="username">{bannersData.buttons.username.label}</label>
                                <input type="username"
                                    id="username"
                                    placeholder={bannersData.buttons.username.placeholder}
                                    autoComplete="username"
                                    onChange={handleChange}
                                    value={loginData.username}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">{bannersData.buttons.email.label}</label>
                                <input type="email"
                                    id="email"
                                    placeholder={bannersData.buttons.email.placeholder}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    value={loginData.email}
                                    required
                                />
                                {emailError && <p className='error-message'>{emailError}</p>}
                            </div>
                        </div>
                    </section>
                    <section className='main-section'>
                        <div className='main-section--title'>
                            <h2>{bannersData.settingsPage.password.title}</h2>
                            <p>{bannersData.settingsPage.password.description}</p>
                        </div>
                        <div className='main-section--form'>
                            <div className="input-group">
                                <label htmlFor="password">{bannersData.buttons.password.label}</label>
                                <div className='password-group'>
                                    <input type={passwordType}
                                        id="password"
                                        placeholder={bannersData.buttons.password.placeholder}
                                        onPaste={(e) => { e.preventDefault(); }}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                        value={loginData.password}
                                        required
                                    />
                                    {passwordType === "password"
                                        ? <FontAwesomeIcon icon={faEye} className='icon'
                                            onClick={() => togglePasswordVisibility()} />
                                        : <FontAwesomeIcon icon={faEyeSlash} className='icon'
                                            onClick={() => togglePasswordVisibility()} />
                                    }
                                </div>
                                {passwordError && <p className='error-message'>{passwordError}</p>}
                            </div>
                        </div>
                    </section>
                </form>
                <button onClick={() => handleSubmit()}>{bannersData.settingsPage.saveChanges}</button>
            </section>
            <section className='additional-settings'>
                <section className='main-section'>
                    <div className='main-section--title'>
                        <h2>{bannersData.settingsPage.language.title}</h2>
                        <p>{bannersData.settingsPage.language.description}</p>
                    </div>
                    <div className='main-section--form'>
                        <button
                            type="button"
                            className="lang-button"
                        // className={selectedLanguage === "en" ? "lang-button active" : "lang-button"}
                        >
                            {bannersData.settingsPage.language.languages.en}
                        </button>
                        <button
                            type="button"
                            className="lang-button"
                        // className={selectedLanguage === "de" ? "lang-button active" : "lang-button"}
                        >
                            {bannersData.settingsPage.language.languages.de}
                        </button>
                    </div>
                </section>
                <div className='exit-section'>
                    <div className='main-section'>
                        <div className='main-section--title'>
                            <h2>{bannersData.settingsPage.signOut.title}</h2>
                            <p>{bannersData.settingsPage.signOut.description}</p>
                        </div>
                        <div className='main-section--form'>
                            <Link to="/" className='signoutLink'
                                onClick={() => onClick()}>{bannersData.settingsPage.signOut.title}</Link>
                        </div>
                    </div>
                    <div className='main-section'>
                        <div className='main-section--title'>
                            <h2>{bannersData.settingsPage.delete.title}</h2>
                            <p>{bannersData.settingsPage.delete.description}</p>
                        </div>
                        <div className='main-section--form'>
                            <button id="delete">{bannersData.settingsPage.delete.title}</button>
                        </div>
                    </div>
                </div>
            </section>
            {showConfirmPopup && (
                <ConfirmPopup
                    title={bannersData.notifications.user.ChangeDataTitle}
                    onConfirm={handleConfirmChanges}
                    onCancel={handleCancelChanges}
                />
            )}
            {console.log(usersData)}
        </div>
    );
};

export default SettingsPage;