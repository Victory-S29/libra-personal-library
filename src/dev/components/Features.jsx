import React, { Fragment } from 'react';

const explore = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/communityImgs/explore.jpg";
const progress = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/communityImgs/progress.jpg";
const save = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/communityImgs/save.jpg";
const inspiration = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/communityImgs/inspiration.jpg";
const recommendation = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/communityImgs/recommendation.jpg";
const start = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/style/images/communityImgs/start.jpg";

const Features = () => {
    const communityAdvantages = [
        { imageSrc: explore, label: 'Explore world' },
        { imageSrc: start, label: 'Start your reading journey' },
        { imageSrc: save, label: 'Save your favourites' },
        { imageSrc: progress, label: 'Track progress' },
        { imageSrc: recommendation, label: 'Rate and Recommend' },
        { imageSrc: inspiration, label: 'Get inspired' }
    ];

    return (
        <Fragment>
            <h2>Everything You Need as a Reader</h2>
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