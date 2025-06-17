import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Book from './Book';

const SliderComponent = ({ title, data }) => {
    const [slidesPerPage, setSlidesPerPage] = useState(1);
    const sliderRef = useRef(null);

    const vwConfig = {
        breakpoints: {
            tablet: 768,
            laptop: 1024,
            desktop: 1400,
            desktopXL: 1920,
            desktop2K: 2560
        },
        slideWidths: {
            desktop2K: 11, // >= 2560px
            desktopXL: 13, // >= 1920px 
            desktop: 15,   // >= 1400px 
            laptop: 15,    // >= 1024px 
            tablet: 35,    // < 1024px 
            mobile: 35,    // < 768px 
        },
        sliderAreaWidths: {
            desktop2K: 80, // >= 2560px
            desktopXL: 60, // >= 1920px 
            desktop: 80,   // >= 1400px 
            laptop: 80,    // >= 1024px 
            tablet: 80,    // < 1024px 
            mobile: 80,    // < 768px 
        }
    };


    useEffect(() => {
        const updateSlides = () => {
            const width = window.innerWidth;
            const { breakpoints, slideWidths } = vwConfig;
            let slideVW;

            if (width >= breakpoints.desktop2K) slideVW = slideWidths.desktop2K;
            else if (width >= breakpoints.desktopXL) slideVW = slideWidths.desktopXL;
            else if (width >= breakpoints.desktop) slideVW = slideWidths.desktop;
            else if (width >= breakpoints.laptop) slideVW = slideWidths.laptop;
            else if (width >= breakpoints.tablet) slideVW = slideWidths.tablet;
            else slideVW = slideWidths.mobile;

            let perPage;
            if (width >= breakpoints.desktop2K) perPage = Math.floor(vwConfig.sliderAreaWidths.desktop2K / slideVW);
            else if (width >= breakpoints.desktopXL) perPage = Math.floor(vwConfig.sliderAreaWidths.desktopXL / slideVW);
            else if (width >= breakpoints.desktop) perPage = Math.floor(vwConfig.sliderAreaWidths.desktop / slideVW);
            else if (width >= breakpoints.laptop) perPage = Math.floor(vwConfig.sliderAreaWidths.laptop / slideVW);
            else if (width >= breakpoints.tablet) perPage = Math.floor(vwConfig.sliderAreaWidths.tablet / slideVW);
            else perPage = Math.floor(vwConfig.sliderAreaWidths.mobile / slideVW);

            setSlidesPerPage(perPage);
        };

        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);
    return (
        <div className='slider-section' ref={sliderRef}>
            <h5 className='slider-title'>{title}</h5>
            {console.log("slidesPerPage", slidesPerPage)}
            <Splide
                className='slider'
                options={{
                    type: 'slide',
                    perPage: slidesPerPage,
                    arrows: true,
                    pagination: false,
                    perMove: 1,
                    drag: false,
                }}
            >
                {data.map((book) => {
                    return (
                        <SplideSlide key={book.id}>
                            <Book book={book} />
                        </SplideSlide>)
                })}
            </Splide>
        </div>
    );
};

export default SliderComponent;