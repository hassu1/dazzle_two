"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { useParams } from "next/navigation";
import { cars, slugify } from '../../../libs/data/cars';

import Header from "@components/components/Header";
import Footer from "@components/components/Footer";

import Image from "next/image";

export default function Detail() {
    
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Sample images
  const images = [
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg", // reuse for demo
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg",
  ];

    const { brand, model } = useParams();
  
    const car = cars.find(
    (c) => c.brand.toLowerCase() === brand.toLowerCase() && slugify(c.name) === model
    );
  
    if (!car) {
      return (
        <>
          <Header />
          <div className="text-center py-40 text-white" style={{ paddingTop:'200px'}}>
            <h1 className="text-dark">Car Not Found</h1>
            <p className="text-dark">The vehicle you are looking for does not exist.</p>
          </div>
          <Footer />
        </>
      );
    }

  return (
    <>
      <Header />

      <section style={{ paddingTop: "200px" }}>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between mb-3">
              <h1>Audi</h1>

              <h2>AED 680,000</h2>
            </div>
            {/* Main Image & Thumbnails */}
            <div className="col-md-8">
              {/* Main Swiper */}
              <Swiper
                style={{ width: "100%", borderRadius: "10px" }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      alt={`Image ${i + 1}`}
                      width={800}
                      height={500}
                      style={{
                        borderRadius: "10px",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Swiper */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      alt={`Thumb ${i + 1}`}
                      width={150}
                      height={90}
                      style={{
                        cursor: "pointer",
                        borderRadius: "6px",
                        border: "2px solid #ccc",
                        marginTop: "20px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="vehicleDetaiBox mt-4">
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: "130%",
                    textTransform: "uppercase",
                  }}
                >
                  Specifications
                </h3>
                <div className="car-specs-wrapper">
                  <div className="specs-column">
                    <div className="spec-wrapper">
                      <div className="spec-text">Car Make</div>
                      <div className="spec-text spec-value">Audi</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Car Type</div>
                      <div className="spec-text spec-value">Convertible</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Car Condition</div>
                      <div className="spec-text spec-value">New</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Fuel Type</div>
                      <div className="spec-text spec-value">Diesel</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Transmission</div>
                      <div className="spec-text spec-value">Manual</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Year</div>
                      <div className="spec-text spec-value">2023</div>
                    </div>
                  </div>
                  <div className="specs-column">
                    <div className="spec-wrapper">
                      <div className="spec-text">Cylinders</div>
                      <div className="spec-text spec-value">8</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Engine</div>
                      <div className="spec-text spec-value">5.2L</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Mileage (KM)</div>
                      <div className="spec-text spec-value">90</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Horsepower</div>
                      <div className="spec-text spec-value">602 HP</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Body Color</div>
                      <div className="spec-text spec-value">Jet Black</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Stock ID</div>
                      <div className="spec-text spec-value">ABC1234</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vehicleDetaiBox mt-4">
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: "130%",
                    textTransform: "uppercase",
                  }}
                >
                  Description
                </h3>
                <p style={{ fontSize: "17px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, cum excepturi. Nostrum, qui dicta? Ea accusantium nemo
                  sed maxime debitis, nam reiciendis itaque odit quibusdam
                  laborum quia rerum architecto explicabo.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4">
              <div className="sidebar">
                <div className="vehicleDetaiBox">
                  <div
                    className="bg-white p-4 d-flex flex-column gap-4 mb-3"
                    style={{ borderRadius: "20px" }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        lineHeight: "130%",
                        textTransform: "uppercase",
                      }}
                      className="mb-1"
                    >
                      Get In Touch
                    </h3>
                    <button className="customButton">
                      <i className="fa fa-phone"></i> Phone
                    </button>
                    <button className="customButton">
                      <i className="fa fa-book"></i> Book Now
                    </button>
                  </div>
                  <div
                    className="bg-white p-4 d-flex flex-column gap-4 mb-3"
                    style={{ borderRadius: "20px" }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        lineHeight: "130%",
                        textTransform: "uppercase",
                      }}
                      className="mb-1"
                    >
                      Features
                    </h3>
                    <div className="car-features-wrapper">
                      <div className="feature-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728eb4b515a3e8da3069820_bluetooth.svg"
                          loading="lazy"
                          alt="Bluetooth Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">Bluetooth</div>
                      </div>
                      <div className="feature-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728f30f63994d2a5f2c04cb_gps.svg"
                          loading="lazy"
                          alt="Built-in GPS Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">Built-in GPS</div>
                      </div>
                      <div className="feature-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728f30f100b5c010a62df97_charger.svg"
                          loading="lazy"
                          alt="Wireless Qi Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">Wireless Qi</div>
                      </div>
                      <div className="feature-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728f310b7cb2ef2a9cbd6fb_camera.svg"
                          loading="lazy"
                          alt="360° Camera Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">360° Camera</div>
                      </div>
                      <div className="feature-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728f30f79a4bfc922fa3977_sound.svg"
                          loading="lazy"
                          alt="Sound System Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">Sound System</div>
                      </div>
                      <div className="feature-wrapper w-condition-invisible">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728f30fb867088cd8ad437e_headlights.svg"
                          loading="lazy"
                          alt="LED Headlights Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">LED Headlight</div>
                      </div>
                      <div className="feature-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728f30fc699962cf27f5b23_seat.svg"
                          loading="lazy"
                          alt="Leather Seats Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">Leather Seats</div>
                      </div>
                      <div className="feature-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6728f30fa44f2cc6e368f5a5_security.svg"
                          loading="lazy"
                          alt="Security Icon"
                          className="benefit-icon"
                        />
                        <div className="feature-name">Security</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
