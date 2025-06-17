import React, { useEffect } from 'react';
import { getFeaturesSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const FeaturesPage = () => {
    const features = useSelector(getFeaturesSelector);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className='features-page'>
            <section className='features-intro'>
                <h1>{features.intro.title}</h1>
                <p>{features.intro.description}</p>
            </section>
            <section className='features-catalogue-section'>
                <h5>{features.catalogue.overview}</h5>
                <ul>
                    {features.catalogue.mainDetails.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='features-sorting-section'>
                <h5>{features.sorting.description}</h5>
                <ul>
                    {features.sorting.options.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='features-user-section'>
                <h5>{features.userFeatures.login}</h5>
                <ul>
                    {features.userFeatures.preferences.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='features-notes-section'>
                <h5>{features.notes.description}</h5>
                <ul>
                    {features.notes.features.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
                <p>{features.notes.summary}</p>
            </section>
            <section className='features-control-section'>
                <h5>{features.control.description}</h5>
                <ul>
                    {features.control.features.map((item, index) => <li key={index}><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='features-footer-section'>
                <p>{features.footer.summary}</p>
                <p>{features.footer.note}</p>
                <p>{features.footer.callToAction}</p>
            </section>
        </section>
    );
};

export default FeaturesPage;