'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Sponsor() {

  const sponsors = [
    '/img/logos/1.png',
    '/img/logos/2.png',
    '/img/logos/3.png',
    '/img/logos/4.png',
    '/img/logos/5.png',
    '/img/logos/6.png',
    '/img/logos/7.png',
    '/img/logos/8.png',
  ];

  return (
    <div style={{ padding: '40px 0', background: '#f9f9f9', margin:'20px', borderRadius:'20px' }}>
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
              <Image src={src} alt={`Sponsor ${i + 1}`} width={800} height={500}  style={{width:'50%', height:'auto', objectFit:'cover' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
