'use client';
import { useEffect, useState, Suspense } from "react";
import "flatpickr/dist/flatpickr.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { useParams } from "next/navigation";
import type { Swiper as SwiperType } from "swiper";

import Footer from "@components/components/Footer";
import Image from "next/image";
import Header from "@components/components/Header";
import SidebarForm from "./SidebarForm";

export default function Detail() {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const brand = Array.isArray(params.brand) ? params.brand[0] : params.brand;
  const model = Array.isArray(params.model) ? params.model[0] : params.model;

     const BASE_URL = "https://cms.dazzlewheels.ae/public/storage";
  const cleanUrl = (path: string | null): string => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${BASE_URL}/${path.replace(/^\/+/, "")}`;
  };

  useEffect(() => {
    if (!brand || !model) return;

    const fetchCar = async () => {
      try {
        const res = await fetch(`/api/cars`, {
          cache: "no-store",
        });
        const data = await res.json();

        const foundCar: Car | undefined = data.data.find(
          (c: Car) =>
            c.brand?.name.toLowerCase().replace(/\s+/g, "-") ===
              brand.toLowerCase() &&
            c.model.toLowerCase().replace(/\s+/g, "-") === model.toLowerCase()
        );

        setCar(foundCar || null);
      } catch (error) {
        console.error("Error fetching car:", error);
        setCar(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [brand, model]);

  if (loading) {
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
        <div className="col-12 text-center">
              <h4 style={{ color: "#999" }}>
                Loading...
              </h4>
            </div>
        <Footer />
      </>
    );
  }

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
        <div className="text-center py-40 text-white" style={{ paddingTop: "200px" }}>
          <h1 className="text-dark">Car Not Found</h1>
          <p className="text-dark">The vehicle you are looking for does not exist.</p>
        </div>
        <Footer />
      </>
    );
  }


  const images = [cleanUrl(car.main_image), ...(car.gallery || []).map(cleanUrl)];

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
              <h1 className="section-title text-white modern-heading">
                <span>{model}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "30px" }}>
        <div className="container">
          <div className="row">
            {/* Main Image & Thumbnails */}
            <div className="col-xl-7 col-lg-7 col-md-12 col-12">
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
                        height: "100%",
                        objectFit:'cover',
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
                        objectFit: 'cover'
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="d-xl-none d-lg-none d-md-none d-sm-none d-block">
                <Suspense fallback={<div className="col-12 text-center">
              <h4 style={{ color: "#999" }}>
                Loading ...
              </h4>
            </div>}>
                  <SidebarForm data={car}  />
                </Suspense>
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
                      <div className="spec-text spec-value">{car.free_pickup_drop ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Bluetooth</div>
                      <div className="spec-text spec-value">{car.bluetooth ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Parking Sensor</div>
                      <div className="spec-text spec-value"> {car.parking_sensor ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Full Insurance</div>
                      <div className="spec-text spec-value">{car.full_insurance ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Payment Type</div>
                      <div className="spec-text spec-value">
                        {car.payment_type}
                      </div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">24/7 Customer Service</div>
                      <div className="spec-text spec-value">{car.customer_service_24_7 ? "Yes" : "No"}</div>
                    </div>
                  </div>
                  <div className="specs-column">
                    <div className="spec-wrapper">
                      <div className="spec-text">Cruise Control</div>
                      <div className="spec-text spec-value">{car.cruise_control ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Automatic</div>
                      <div className="spec-text spec-value">{car.automatic ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Navigation</div>
                      <div className="spec-text spec-value">{car.navigation ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Security Type</div>
                      <div className="spec-text spec-value">{car.security_type ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Free Cancellation</div>
                      <div className="spec-text spec-value">{car.free_cancellation ? "Yes" : "No"}</div>
                    </div>
                    <div className="spec-wrapper">
                      <div className="spec-text">Mileage Daily</div>
                      <div className="spec-text spec-value">{car.daily_mileage} KM/day</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vehicleDetaiBox mt-4">
                <h3 className="uppercase font-bold">Description</h3>
                <p style={{ fontSize: "13px" }}>{car.description}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-5 col-lg-5 col-md-12 col-12 mobilee">
              <div className="sidebar">
                <Suspense fallback={<div>Loading...</div>}>
                  <SidebarForm data={car} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
