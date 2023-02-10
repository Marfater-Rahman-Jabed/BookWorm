import React from 'react';
import imagBanner1 from '../../Assets/sell_used_books_banner2.jpg';
import imagBanner2 from '../../Assets/banner2.png'

const Carusel = () => {

    return (

        <div className="carousel w-full lg:h-[500px] h-[250px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={imagBanner1} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={imagBanner2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Carusel;