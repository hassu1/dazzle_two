'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Sponsor() {
  // Sample images – replace with your actual sponsor image paths
  const sponsors = [
    '/img/clients/1.png',
    '/img/clients/2.png',
    '/img/clients/3.png',
    '/img/clients/4.png',
    '/img/clients/5.png',
    '/img/clients/6.png',
    '/img/clients/7.png',
    '/img/clients/8.png',
  ];

  return (
    <div style={{ padding: '40px 0', background: '#f9f9f9', margin:'40px', borderRadius:'10px' }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        speed={3000}
        slidesPerView={5}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 5 },
        }}
        spaceBetween={30}
        allowTouchMove={false}
      >
        {sponsors.map((src, i) => (
          <SwiperSlide key={i}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image src={src} alt={`Sponsor ${i + 1}`} width={150} height={100} objectFit="contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
