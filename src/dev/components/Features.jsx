import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getBannersSelector } from '../../store/reducers/languages.reducer';

const Features = () => {
    const bannersData = useSelector(getBannersSelector);
    const communityAdvantagesTitle = bannersData.featuresComponent.title;
    const communityAdvantages = bannersData.featuresComponent.communityAdvantages;

    return (
        <Fragment>
            <h2>{communityAdvantagesTitle}</h2>
            <section className='community-grid'>
                {communityAdvantages.map((item, index) => (
                    <div className='community-grid--element' key={index}>
                        <img src={item.imageSrc} alt={item.label} />
                        <p>{item.label}</p>
                    </div>
                ))}
            </section>
        </Fragment>
    );
};

export default Features;