// components/DarkSliderSwiper.js
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './DarkSlider.css'; // Use your existing CSS here

const slides = [
  {
    bgImage: '/img/bg-slider-2.jpg',
    bgTextLeft: '570s',
    bgTextRight: 'Cars',
    effectBg: '/img/effect-dark-slider.svg',
    model: '570s',
    brand: 'Mclaren',
    link: 'https://dazzlewheels.ae/vehicle/570s-cabriolet',
    imgSrc: 'https://cms.dazzlewheels.ae/public/uploads/7ZKz6WZbtvr8Pr8FuPQA10kRpqwg4yvMs857ggcy.webp',
  },
  {
    bgImage: '/img/bg-slider-2.jpg',
    bgTextLeft: 'Cullinan',
    bgTextRight: 'Cars',
    effectBg: '/img/effect-dark-slider.svg',
    model: 'Cullinan',
    brand: 'Rolls Royce',
    link: 'https://dazzlewheels.ae/vehicle/cullinan',
    imgSrc: 'https://cms.dazzlewheels.ae/public/uploads/y9il1c5eCEYk7pLDGuHECN6aiR5vVOMT8KTS7zsM.webp',
  },
  {
    bgImage: '/img/bg-slider-2.jpg',
    bgTextLeft: 'URUS',
    bgTextRight: 'Cars',
    effectBg: '/img/effect-dark-slider.svg',
    model: 'URUS',
    brand: 'Lamborghini',
    link: 'https://dazzlewheels.ae/vehicle/urus',
    imgSrc: 'https://cms.dazzlewheels.ae/public/uploads/5kpEH5fRa5oIekhBcV9g8xP6KEoSFnes4g3A09uW.webp',
  }
];

const DarkSlider = () => {
  return (
    <section className="s-main-slider s-dark-slider animated-page">
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        slidesPerView={1}
        speed={1000}
        loop
        className="dark-slider"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`dark-slide ${isActive ? 'slick-current' : ''}`}
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <span className="bg-text-left">{slide.bgTextLeft}</span>
                <span className="bg-text-right">{slide.bgTextRight}</span>
                <span
                  className="effect-bg-dark"
                  style={{ backgroundImage: `url(${slide.effectBg})` }}
                ></span>
                <div className="container">
                  <div className="dark-slide-info" style={{ marginTop: 70 }}>
                    <h3 className="name" style={{ fontSize: 20, marginBottom: 10 }} id="model">{slide.model}</h3>
                    <h2 className="name" style={{ marginBottom: 120 }}>{slide.brand}</h2>
                    <a href={slide.link} className="btn btn-green" target="_blank" rel="noopener noreferrer">
                      <button className="customButton">Book Your Ride Now</button>
                    </a>
                  </div>
                  <img
                    className="dark-slide-img"
                    src={slide.imgSrc}
                    loading="lazy"
                    alt={slide.model}
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DarkSlider;
