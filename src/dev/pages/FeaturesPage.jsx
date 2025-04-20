import React, { Fragment } from 'react';
import { getFeaturesEnSelector } from '../../store/reducers/languages.reducer';
import { useSelector } from 'react-redux';

const FeaturesPage = () => {
    const features = useSelector(getFeaturesEnSelector);

    return (
        <Fragment>
            <div className='intro'>
                <h1>{features.intro.title}</h1>
                <p>{features.intro.description}</p>
            </div>
            <section className='features-catalogue-section'>
                <h4>{features.catalogue.overview}</h4>
                {features.catalogue.mainDetails.map((item) => <p>{item}</p>)}
            </section>
            <section className='features-sorting-section'>
                <h4>{features.sorting.description}</h4>
                {features.sorting.options.map((item) => <p>{item}</p>)}
            </section>
            <section className='features-user-section'>
                <h4>{features.userFeatures.login}</h4>
                {features.userFeatures.preferences.map((item) => <p>{item}</p>)}
            </section>
            <section className='features-notes-section'>
                <h4>{features.notes.description}</h4>
                {features.notes.features.map((item) => <p>{item}</p>)}
                <p>{features.notes.summary}</p>
            </section>
            <section className='features-control-section'>
                <h4>{features.control.description}</h4>
                {features.control.features.map((item) => <p>{item}</p>)}
            </section>
            <section className='features-footer-section'>
                <p>{features.footer.summary}</p>
                <p>{features.footer.note}</p>
                <p>{features.footer.callToAction}</p>
            </section>
        </Fragment>
    );
};

export default FeaturesPage;