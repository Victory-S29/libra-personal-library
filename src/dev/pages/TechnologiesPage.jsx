import React, { useEffect } from 'react';
import { getTechSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const TechnologiesPage = () => {
    const tech = useSelector(getTechSelector);

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
                <h5>{tech.framework.title}</h5>
                <ul>
                    {tech.framework.points.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-routing-section'>
                <h5>{tech.routing.title}</h5>
                <ul>
                    {tech.routing.points.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-stateManagement-section'>
                <h5>{tech.stateManagement.title}</h5>
                <ul>
                    {tech.stateManagement.points.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-persistence-section'>
                <h5>{tech.persistence.title}</h5>
                <ul>
                    {tech.persistence.points.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-dataManagement-section'>
                <h5>{tech.dataManagement.title}</h5>
                <ul>
                    {tech.dataManagement.points.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='technologies-ui-section'>
                <h5>{tech.dataManagement.title}</h5>
                <ul>
                    {Object.entries(tech.ui.subSections).map(([key, item]) => (
                        <li className='technologies-ui-section--main-ul' key={key}>
                            <h5>{item.subtitle}</h5>
                            <ul>
                                {item.points.map((point, index) => (
                                    <li className='technologies-ui-section--additional-li' key={index}><p>{point}</p></li>
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