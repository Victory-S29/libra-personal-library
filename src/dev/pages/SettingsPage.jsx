import React, { useEffect, useState } from 'react';
import { changeLoginAction } from '../../store/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'

const SettingsPage = () => {
    const dispatch = useDispatch();
    const [passwordError, setPasswordError] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN
    const [loginData, setLoginData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(() => {
        if (loginData.password.length < 8) {
            setPasswordError(bannersData.notifications.login.longPassword);
        }
    }, [loginData.password])

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
                                <input type="username" id="username" placeholder={bannersData.buttons.username.placeholder}
                                    required
                                    autoComplete="username"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">{bannersData.buttons.email.label}</label>
                                <input type="email" id="email" placeholder={bannersData.buttons.email.placeholder}
                                    required
                                    autoComplete="email"
                                />
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
                                    <input type={passwordType} onPaste={(e) => { e.preventDefault(); }} id="password" placeholder={bannersData.buttons.password.placeholder}
                                        required
                                        onChange={handleChange}
                                        autoComplete="new-password"
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
                <button>{bannersData.settingsPage.saveChanges}</button>
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
        </div>
    );
};

export default SettingsPage;