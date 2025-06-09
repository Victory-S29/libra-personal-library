import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Book from './Book';

const SliderComponent = ({ title, data }) => {
    const [slidesPerPage, setSlidesPerPage] = useState(1);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateSlides = () => {
            if (!sliderRef.current) return;

            const containerWidth = sliderRef.current.offsetWidth;
            let slideWidth = 195;
            if (containerWidth >= 1920) slideWidth = 245;
            else if (containerWidth >= 1400) slideWidth = 195;
            else if (containerWidth >= 1024) slideWidth = 175;
            else slideWidth = 170;

            const gap = 20;
            const perPage = Math.floor((containerWidth + gap) / (slideWidth + gap));
            setSlidesPerPage(perPage);
        };

        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);
    return (
        <div className='slider-section' ref={sliderRef}>
            <h5 className='slider-title'>{title}</h5>
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