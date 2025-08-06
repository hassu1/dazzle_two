"use client";
import React, { useEffect, useRef , useState} from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
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

const startDateRef = useRef<HTMLInputElement>(null);
const endDateRef = useRef<HTMLInputElement>(null);
const startTimeRef = useRef<HTMLInputElement>(null);
const endTimeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  if (startDateRef.current) {
    flatpickr(startDateRef.current, {
      dateFormat: 'Y-m-d',
       minDate: "today",
        disableMobile: true,
    });
  }

  if (endDateRef.current) {
    flatpickr(endDateRef.current, {
      dateFormat: 'Y-m-d',
       minDate: "today", disableMobile: true,
    });
  }

  if (startTimeRef.current) {
    flatpickr(startTimeRef.current, {
      enableTime: true,
      noCalendar: true,
         dateFormat: 'h:i K',
      time_24hr: false,
       disableMobile: true,
    });
  }

  if (endTimeRef.current) {
    flatpickr(endTimeRef.current, {
      enableTime: true,
      noCalendar: true,
          dateFormat: 'h:i K',
      time_24hr: false,
       disableMobile: true,
    });
  }
}, []);

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
        <HeaderTwo />
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
              <h1 className="section-title text-white modern-heading"><span>Audi</span></h1>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "30px" }}>
        <div className="container">
          <div className="row">
            {/* <div className="d-flex justify-content-between mb-3">
              <h1>Audi</h1>

              <h2>AED 680 Per Day</h2>
            </div> */}
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
            <div className="col-md-5">
              <div className="sidebar">
                <div className="vehicleDetaiBox">
                  <div className="item">
                    <h4>
                      {" "}
                      <Image
                        width={35}
                        height={35}
                        alt=""
                        src="/img/dirham.png"
                        style={{
                          marginTop: "-5px",
                          marginRight: "-9px",
                        }}
                      />{" "}
                      600 <span style={{fontWeight:700}}>/ Rent Per Day</span>
                    </h4>
                  </div>

                  <div
                    className="p-4 d-flex flex-column gap-4 mb-3"
                    style={{ backgroundColor: "#161616", borderBottomLeftRadius:'20px', borderBottomRightRadius:'20px' }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        lineHeight: "130%",
                        textTransform: "uppercase",
                        color: "#FFF",
                      }}
                      className="mb-1"
                    >
                      Booking Form
                    </h3>

                    <form action="">
                      <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              style={{
                                fontWeight: 600,
                                color: "#FFF",
                                marginBottom: "10px",
                              }}
                            >
                              Start Date
                            </label>
                            <div className="custom-input-wrapper" style={{ overflow:'hidden'}}>
                              <input type="text" ref={startDateRef} placeholder="Select date" className="form-control" />
                              <i className="fa fa-calendar-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              style={{
                                fontWeight: 600,
                                color: "#FFF",
                                marginBottom: "10px",
                              }}
                            >
                              End Date
                            </label>
                             <div className="custom-input-wrapper">
                             <input type="text" ref={endDateRef} placeholder="Select date" className="form-control" />
                              <i className="fa fa-calendar-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              style={{
                                fontWeight: 600,
                                color: "#FFF",
                                marginBottom: "10px",
                              }}
                            >
                              Start Time
                            </label>
                            <div className="custom-input-wrapper">
                             <input type="text" ref={startTimeRef} placeholder="Select time" className="form-control" />
                              <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              style={{
                                fontWeight: 600,
                                color: "#FFF",
                                marginBottom: "10px",
                              }}
                            >
                              End Time
                            </label>
                            <div className="custom-input-wrapper">
                             <input type="text" ref={endTimeRef} placeholder="Select time" className="form-control" />
                              <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              style={{
                                fontWeight: 600,
                                color: "#FFF",
                                marginBottom: "10px",
                              }}
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              className="custom-field one"
                              style={{
                                fontWeight: 600,
                                color: "#FFF",
                                marginBottom: "10px",
                              }}
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              style={{
                                fontWeight: 600,
                                color: "#FFF",
                                marginBottom: "10px",
                              }}
                            >
                              Contact Number
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Your Contact Number"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                          <div className="form-group">
                            <button
                              className="customButton w-100"
                              style={{ borderRadius: "20px" }}
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
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
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                            <i className="fa fa-check" style={{padding:'5px',background:'#e5af3e',color:'#FFF', clipPath:'circle()', fontSize:'8px', marginLeft:'5px'}}></i>
                            <div className="benefit-name">5000</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                                                        <i className="fa fa-check" style={{padding:'5px',background:'#e5af3e',color:'#FFF', clipPath:'circle()', fontSize:'8px', marginLeft:'5px'}}></i>
                            <div className="benefit-name">200KM/Day</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                                                       <i className="fa fa-check" style={{padding:'5px',background:'#e5af3e',color:'#FFF', clipPath:'circle()', fontSize:'8px', marginLeft:'5px'}}></i>
                            <div className="benefit-name">V8 Engine</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                                                       <i className="fa fa-check" style={{padding:'5px',background:'#e5af3e',color:'#FFF', clipPath:'circle()', fontSize:'8px', marginLeft:'5px'}}></i>
                            <div className="benefit-name">2 Seats</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                                                       <i className="fa fa-check" style={{padding:'5px',background:'#e5af3e',color:'#FFF', clipPath:'circle()', fontSize:'8px', marginLeft:'5px'}}></i>
                            <div className="benefit-name">2 Doors</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                        <div className="car-benefits-wrapper">
                          <div className="benefit-wrapper">
                                                       <i className="fa fa-check" style={{padding:'5px',background:'#e5af3e',color:'#FFF', clipPath:'circle()', fontSize:'8px', marginLeft:'5px'}}></i>
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
