import React, { useEffect } from 'react';
import { getTechnologiesEnSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const TechnologiesPage = () => {
    const tech = useSelector(getTechnologiesEnSelector);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className='technologies-page'>
            <section className='technologies-intro'>
                <h1>{tech.intro.title}</h1>
                <p>{tech.intro.description}</p>
            </section>
            <section className='technologies-framework-section'>
                <h4>{tech.framework.title}</h4>
                <ul>
                    {tech.framework.points.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-routing-section'>
                <h4>{tech.routing.title}</h4>
                <ul>
                    {tech.routing.points.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-stateManagement-section'>
                <h4>{tech.stateManagement.title}</h4>
                <ul>
                    {tech.stateManagement.points.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-persistence-section'>
                <h4>{tech.persistence.title}</h4>
                <ul>
                    {tech.persistence.points.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-dataManagement-section'>
                <h4>{tech.dataManagement.title}</h4>
                <ul>
                    {tech.dataManagement.points.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-ui-section'>
                <h4>{tech.dataManagement.title}</h4>
                <ul className='technologies-ui-section--main-ul'>
                    {Object.entries(tech.ui.subSections).map(([key, item]) => (
                        <li key={key}>
                            <h5>{item.subtitle}</h5>
                            <ul className='technologies-ui-section--additional-ul'>
                                {item.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default TechnologiesPage;