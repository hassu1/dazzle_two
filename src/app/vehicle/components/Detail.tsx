"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { useParams } from "next/navigation";
import { cars, slugify } from "../../../libs/data/cars";
import type { Swiper as SwiperType } from "swiper";
import HeaderTwo from "@components/components/HeaderTwo";
import Footer from "@components/components/Footer";

import Image from "next/image";
import { url } from "inspector";
import Header from "@components/components/Header";

export default function Detail() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // Sample images
  const images = [
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg", // reuse for demo
    "/img/lamborghini-urus.jpg",
    "/img/lamborghini-urus.jpg",
  ];

  const params = useParams();

  const brand = Array.isArray(params.brand) ? params.brand[0] : params.brand;
  const model = Array.isArray(params.model) ? params.model[0] : params.model;

  if (!brand || !model) {
    return (
      <>
        <HeaderTwo />
       <section
      style={{
        backgroundImage: "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
      }}
    >
    </section>
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
        <HeaderTwo />
        <section
      style={{
        backgroundImage: "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
      }}
    >
    </section>
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

  return (
    <>
      <Header />

    <section
      style={{
        backgroundImage: "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
      }}
    >
    </section>

      <section style={{ paddingTop: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between mb-3">
              <h1>Audi</h1>

              <h2>AED 680 Per Day</h2>
            </div>
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
                      <div className="spec-text spec-value">Credit Card & Cash</div>
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
            <div className="col-md-5">
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
                      Booking Form
                    </h3>
                    <form>
                      
                    </form>
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
                      Car Details
                    </h3>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                            <img
                              src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6727d5fe85b73f5678b3881b_check-circle.svg"
                              loading="lazy"
                              alt="Checkmark Icon"
                              className="benefit-icon"
                            />
                            <div className="benefit-name">No Deposit</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                            <img
                              src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6727d5fe85b73f5678b3881b_check-circle.svg"
                              loading="lazy"
                              alt="Checkmark Icon"
                              className="benefit-icon"
                            />
                            <div className="benefit-name">250KM/Day</div>
                          </div>
                        </div>
                      </div>
                       <div className="col-md-6 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                            <img
                              src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6727d5fe85b73f5678b3881b_check-circle.svg"
                              loading="lazy"
                              alt="Checkmark Icon"
                              className="benefit-icon"
                            />
                            <div className="benefit-name">I6 Engine</div>
                          </div>
                        </div>
                      </div>
                       <div className="col-md-6 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                            <img
                              src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6727d5fe85b73f5678b3881b_check-circle.svg"
                              loading="lazy"
                              alt="Checkmark Icon"
                              className="benefit-icon"
                            />
                            <div className="benefit-name">2 Seats</div>
                          </div>
                        </div>
                      </div>
                       <div className="col-md-6 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                            <img
                              src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6727d5fe85b73f5678b3881b_check-circle.svg"
                              loading="lazy"
                              alt="Checkmark Icon"
                              className="benefit-icon"
                            />
                            <div className="benefit-name">2 Doors</div>
                          </div>
                        </div>
                      </div>
                       <div className="col-md-6 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                            <img
                              src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/6727d5fe85b73f5678b3881b_check-circle.svg"
                              loading="lazy"
                              alt="Checkmark Icon"
                              className="benefit-icon"
                            />
                            <div className="benefit-name">1 Luggage</div>
                          </div>
                        </div>
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
