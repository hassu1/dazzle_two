'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const testimonials = [
  {
    stars: '/img/rating.svg',
    content: 'The service was amazing and the car was in perfect condition. Highly recommended!',
    avatar: '/img/testi1.jpg',
    name: 'Ali Khan',
  },
  {
    stars: '/img/rating.svg',
    content: 'Truly exceptional! Great experience and very professional staff.',
    avatar: '/img/testi2.jpg',
    name: 'Sarah Ahmed',
  },
  {
    stars: '/img/rating-04.svg',
    content: 'Smooth booking and clean car. Will rent again!',
    avatar: '/img/testi3.jpg',
    name: 'John Doe',
  },
  {
    stars: '/img/rating-04.svg',
    content: 'Very reliable and punctual service. Highly impressed.',
    avatar: '/img/testi1.jpg',
    name: 'Ayesha Malik',
  },
  {
    stars: '/img/rating.svg',
    content: 'Easy pickup and return. Best car rental experience I’ve had.',
    avatar: '/img/testi2.jpg',
    name: 'Hassan Tariq',
  },
];

export default function Testimonal() {
  return (
    <section style={{ padding: '40px 0 60px 0', background: '#f9f9f9', margin:'20px', borderRadius:'10px' }}>
      <div className="container">
        <div className="row mb-4">
              <div className="col-md-6 col-12 m-auto">
                    <h2 className="text-center" style={{ color:'#161616' , fontSize:'40px'}}>Feedback</h2>
            </div>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  height: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Image src={testimonial.stars} alt="Stars" width={100} height={20} />
                  <p style={{ marginTop: '40px', fontSize: '16px', color: '#333' }}>
                    {testimonial.content}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%', marginRight: '10px' }}
                  />
                  <strong>{testimonial.name}</strong>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
