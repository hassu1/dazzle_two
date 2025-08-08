"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./OurFleet.module.css";
import { useSearchParams } from "next/navigation"; // for safer query params in Next.js 13+
import { useMemo } from "react";

import { cars } from "../libs/data/cars";

const ITEMS_PER_PAGE = 6;


export default function OurFleet() {

// For query params, use `useSearchParams` in Next.js 13+
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  const filteredCars = cars; // no brand filter

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  const paginatedCars = useMemo(() => {
    return filteredCars.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [filteredCars, currentPage]);

  // Page link generator
  const createPageLink = (page: number) => `/all-vehicles?page=${page}`;


  return (
    <section style={{ padding: "40px 0px" }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="d-flex customJustifyBetween">
                  <h2 className="section-heading center">Featured Cars</h2>
            <button
              className="customButton mobilee"
              style={{
                borderRadius: "10px",
                backgroundColor: "#161616",
                padding: "5px 30px",
              }}
            >
              <Link href="/all-vehicles" style={{ color: "#FFF" }}>
                Show All
              </Link>
            </button>
          </div>
        </div>

       <div className="row">
          {filteredCars.length === 0 ? (
            <div className="col-12 text-center">
              <h4 style={{ color: "#999" }}>No cars found.</h4>
            </div>
          ) : (
            paginatedCars.map((car, index) => (
               <div key={index} className="col-lg-4 col-md-6 col-12 mb-5">
                <div role="listitem" className={styles.collectionItem}>
                  <div className={styles.carCard}>
                    <div className={styles.carListingBrandWrapper}>
                      <Link
                        href={`/vehicle/${car.brand.toLowerCase()}/${car.slug}`}
                        className={`${styles.carListingBrand} w-inline-block`}
                      >
                        <Image
                          src={car.logo}
                          alt={`${car.brand} Logo`}
                          width={50}
                          height={50}
                          className={styles.carBrandImage}
                        />
                      </Link>
                      <div>
                        <h3 className={`${styles.carListingName} mb-0`}>{car.name}</h3>
                        <div className={styles.carListingSpecs}>
                          <div className={styles.listingDetailsDivider}></div>
                          <div className={styles.listingSpec}>{car.type}</div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/vehicle/${car.brand.toLowerCase()}/${car.slug}`}
                      className={`${styles.listingImageWrapper} w-inline-block`}
                    >
                      <Image
                        src={car.image}
                        alt={car.name}
                        className={styles.listingImage}
                        width={800}
                        height={500}
                        layout="responsive"
                      />
                    </Link>

                    <div className={styles.carListingDetailsWrapper}>
                      <div className={styles.carListingDetails}>
                        <div className={styles.carDetail}>
                          <Image
                            src="/img/icons/icons-1.png"
                            alt="Mileage"
                            width={20}
                            height={20}
                            className={styles.listingDetailIcon}
                          />
                          <div className={styles.carDetailValue}>{car.Seats}</div>
                        </div>
                        <div className={styles.carDetail}>
                          <Image
                            src="/img/icons/icons-3.png"
                            alt="Engine"
                            width={20}
                            height={20}
                            className={styles.listingDetailIcon}
                          />
                          <div className={styles.carDetailValue}>{car.engine}</div>
                        </div>
                        <div className={styles.carDetail}>
                          <i className="omfi-door" style={{ color: "#E5AF3E", fontSize: "18px" }}></i>
                          <div className={styles.carDetailValue}>{car.door}</div>
                        </div>
                        <div className={styles.carDetail}>
                          <i className="fas fa-money-bill" style={{ color: "#E5AF3E" }}></i>
                          <div className={styles.carDetailValue}>{car.deposit}</div>
                        </div>
                      </div>

                      <div className={styles.carListingPriceWrapper}>
                        <div className={styles.listingPrice}>
                          <Image
                            width={30}
                            height={30}
                            alt=""
                            src="/img/dirham.png"
                            style={{ filter: "brightness(0) invert(1)", marginTop: "-4px", paddingRight: "3px" }}
                          />
                          {car.price} Per Day
                        </div>
                        <Link
                          href={`/vehicle/${car.brand.toLowerCase()}/${car.slug}`}
                          className={`${styles.primaryButton} ${styles.carListingButton} ${styles.wButton}`}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
