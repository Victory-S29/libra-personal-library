import React, { useEffect } from 'react';
import { getDeveloperEnSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { faHouse, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeveloperPage = () => {
    const dev = useSelector(getDeveloperEnSelector);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='developer-page'>
            <section className='developer-page--main-info'>
                <div>
                    <h1>{dev.profile.name}</h1>
                    <p>{dev.profile.description}</p>
                    <section className='developer-page--location'>
                        <p><FontAwesomeIcon icon={faHouse} className='icon' /><span>{dev.location.address}</span></p>
                        <p><FontAwesomeIcon icon={faEnvelope} className='icon' /><span>{dev.location.email}</span></p>
                        <p><FontAwesomeIcon icon={faPhone} className='icon' /><span>{dev.location.phone}</span></p>
                    </section>
                    <section className='developer-page--languages'>
                        <h4>{dev.languages.title}</h4>
                        <ul>
                            {Object.entries(dev.languages.data).map(([index, item]) => (
                                <li className='developer-page--languages-li' key={index}>
                                    <p>{item.language} - <span>{item.level}</span></p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <img src="https://st.depositphotos.com/1144472/1472/i/450/depositphotos_14723103-stock-photo-cheerful-businesswoman-with-folder-over.jpg" />
            </section>
            <hr />
            <section className='developer-page--education'>
                <h4>{dev.education.title}</h4>
                <p>{dev.education.institution}</p>
                <p>{dev.education.faculty}</p>
                <p>{dev.education.department}</p>
                <p>{dev.education.period}</p>
            </section>
            <hr />
            <section className="developer-page--skills">
                <h4>{dev.skills.title}</h4>
                <ul>
                    {dev.skills.data.map((skill, index) => (
                        <li key={index}><p>{skill}</p></li>
                    ))}
                </ul>
            </section>
            <hr />
            <section className="developer-page--courses">
                <h4>{dev.courses.title}</h4>
                <section>
                    {dev.courses.data.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div>
                                <h3>{course.title}</h3>
                                <p>{course.provider}</p>
                                <p>{course.years}</p>
                            </div>
                            <img className="course-img" src={course.image} alt={course.title} />
                        </div>
                    ))}
                </section>
            </section>
            <hr />
            <section className='developer-page--refs'>
                <p>{dev.qrCode.title}</p>
                <img src={dev.qrCode.img} alt={dev.qrCode.alt} />
            </section>
        </div>
    );
};

export default DeveloperPage;