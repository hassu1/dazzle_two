"use client";
import React, { useEffect, useRef , useState} from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { useParams } from "next/navigation";
import { cars, slugify } from "../../../libs/data/cars";
import type { Swiper as SwiperType } from "swiper";

import Footer from "@components/components/Footer";


import Image from "next/image";
import { url } from "inspector";
import Header from "@components/components/Header";
import SidebarForm from './SidebarForm';

export default function Detail() {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const params = useParams();

  const brand = Array.isArray(params.brand) ? params.brand[0] : params.brand;
  const model = Array.isArray(params.model) ? params.model[0] : params.model;

  if (!brand || !model) {
    return (
      <>
        <Header />
        <section
         className="m20"
          style={{
            backgroundImage:
              "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
          }}
        ></section>
        <div
          className="text-center py-40 text-white"
          style={{ paddingTop: "200px" }}
        >
          <h1 className="text-dark">Car Not Found</h1>
          <p className="text-dark">
            The vehicle you are looking for does not exist.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  const car = cars.find(
    (c) =>
      c.brand.toLowerCase() === brand.toLowerCase() && slugify(c.name) === model
  );

  if (!car) {
    return (
      <>
        <Header />
        <section
          style={{
            backgroundImage:
              "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
          }}
        ></section>
        <div
          className="text-center py-40 text-white"
          style={{ paddingTop: "200px" }}
        >
          <h1 className="text-dark">Car Not Found</h1>
          <p className="text-dark">
            The vehicle you are looking for does not exist.
          </p>
        </div>
        <Footer />
      </>
    );
  }
   const images = [car.image, car.image, car.image, car.image, car.image]; // Using the car's image for simplicity
  
  return (
    <>
      <Header />

      <section
      className="m20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          padding: "130px 0px",
          position: "relative",
        }}
      >
        <div
        className="borderRadius-20"
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            inset: "0px",
            zIndex: 1,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-title text-white modern-heading"><span>{model}</span></h1>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "30px" }}>
        <div className="container">
          <div className="row">
            {/* Main Image & Thumbnails */}
            <div className="col-md-7">
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

              <div className="d-xl-none d-lg-none d-md-none d-sm-none d-block">
                <SidebarForm />
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
                  Features
                </h3>
                <div className="car-specs-wrapper">
                  <div className="specs-column">
                    <div className="spec-wrapper">
                      <div className="spec-text">Free Pickup-Drop Off</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Bluetooth</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Parking Sensor</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Full Insurance</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Payment Type</div>
                      <div className="spec-text spec-value">
                        Credit Card & Cash
                      </div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">24/7 Customer Service</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                  </div>
                  <div className="specs-column">
                    <div className="spec-wrapper">
                      <div className="spec-text">Cruise Control</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Automatic</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Navigation</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Security Type</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Free Cancellation</div>
                      <div className="spec-text spec-value">Yes</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Mileage Daily</div>
                      <div className="spec-text spec-value">250km/day</div>
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
            <div className="col-md-5 mobilee">
              <div className="sidebar">
                <SidebarForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
