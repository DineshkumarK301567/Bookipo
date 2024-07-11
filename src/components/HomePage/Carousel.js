import React from 'react';
import Slider from "react-slick";

import { Carousel } from 'antd';

const CarouselSection = () => {
/*   const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500
  }; */


  return (
    <div className="slider-container">
       <div className='carousel-container'>
      <Carousel
        arrows
        infinite={true}
        autoplay={true}
        speed={1500}
        autoplaySpeed={3000}
        slidesToShow={1}
        centerMode={true}
        className="custom-carousel"
      >
        <div
          className="carousel-item"
        >
          <img src="/images/promo-banner5.jpeg" alt="slide1" />
        </div>
        <div className="carousel-item">
          <img src="/images/promo-banner2.jpeg" alt="slide2" />
        </div>
        <div className="carousel-item">
          <img src="/images/promo-banner3.jpeg" alt="slide3" />
        </div>
        <div className="carousel-item">
          <img src="/images/promo-banner6.jpeg" alt="slide4" />
        </div>
        <div className="carousel-item">
          <img src='/images/promo-banner1.jpeg' alt="slide5" />
        </div>
      </Carousel>
    </div>
     {/*  <Slider {...settings}>
        <div>
          <img src="/images/promo-banner1.jpeg" alt="slide1" />
        </div>
        <div >
          <img src="/images/promo-banner2.jpeg" alt="slide2" />
        </div>
        <div >
          <img src="/images/promo-banner3.jpeg" alt="slide3" />
        </div>
        <div >
          <img src="/images/promo-banner2.jpeg" alt="slide4" />
        </div>
      </Slider> */}
    </div>
    
  )
}
export default CarouselSection;
