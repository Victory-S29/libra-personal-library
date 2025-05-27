import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Book from './Book';

const SliderComponent = ({ title, data }) => {
    return (
        <div className='slider-section'>
            <h5 className='slider-title'>{title}</h5>
            <Splide
                className='slider'
                options={{
                    type: 'loop',
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    drag: true,
                }} >
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