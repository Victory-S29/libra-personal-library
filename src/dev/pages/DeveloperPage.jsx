import React, { useEffect } from 'react';
import { getDeveloperEnSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const DeveloperPage = () => {
    const dev = useSelector(getDeveloperEnSelector);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='developer-page'>
            <section className='developer-page--main-info'>
                <h1>{dev.profile.name}</h1>
                <p>{dev.profile.description}</p>
            </section>
            <section className='developer-page--location'>
                <p>{dev.location.address}</p>
                <p>{dev.location.email}</p>
                <p>{dev.location.phone}</p>
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
            <section className='developer-page--education'>
                <h4>{dev.education.title}</h4>
                <p>{dev.education.institution}</p>
                <p>{dev.education.faculty}</p>
                <p>{dev.education.department}</p>
                <p>{dev.education.period}</p>
            </section>
            <section className="developer-page--skills">
                <h2>{dev.skills.title}</h2>
                <ul>
                    {dev.skills.data.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
            <section className="developer-page--courses">
                <h2>{dev.courses.title}</h2>
                <div>
                    {dev.courses.data.map((course, index) => (
                        <div key={index}>
                            <img src={course.image} alt={course.title} />
                            <div>
                                <h3>{course.title}</h3>
                                <p>{course.provider}</p>
                                <span>{course.years}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='developer-page--refs'>
                <img src={dev.cv.img} alt={dev.cv.alt} />
                <img src={dev.qrCode.img} alt={dev.qrCode.alt} />
            </section>
        </div>
    );
};

export default DeveloperPage;