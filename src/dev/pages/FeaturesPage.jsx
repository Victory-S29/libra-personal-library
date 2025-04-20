import React, { useEffect } from 'react';
import { getFeaturesEnSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const FeaturesPage = () => {
    const features = useSelector(getFeaturesEnSelector);

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
                <h4>{features.catalogue.overview}</h4>
                <ul>
                    {features.catalogue.mainDetails.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='features-sorting-section'>
                <h4>{features.sorting.description}</h4>
                <ul>
                    {features.sorting.options.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='features-user-section'>
                <h4>{features.userFeatures.login}</h4>
                <ul>
                    {features.userFeatures.preferences.map((item) => <li><p>{item}</p></li>)}
                </ul>
            </section>
            <section className='features-notes-section'>
                <h4>{features.notes.description}</h4>
                <ul>
                    {features.notes.features.map((item) => <li><p>{item}</p></li>)}
                </ul>
                <p>{features.notes.summary}</p>
            </section>
            <section className='features-control-section'>
                <h4>{features.control.description}</h4>
                <ul>
                    {features.control.features.map((item) => <li><p>{item}</p></li>)}
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