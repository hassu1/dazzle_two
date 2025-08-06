'use client';
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // for safer query params in Next.js 13+
import { useMemo } from "react";
import styles from "@components/components/OurFleet.module.css";
import { cars } from "../../../libs/data/cars";

const ITEMS_PER_PAGE = 12;

export default function AllListing() {
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
    <section style={{ padding: "50px 0px 10px 0px" }}>
      <div className="container">
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
                          <div className={styles.carDetailValue}>{car.mileage} km</div>
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
                          <div className={styles.carDetailValue}>2</div>
                        </div>
                        <div className={styles.carDetail}>
                          <i className="fas fa-money-bill" style={{ color: "#E5AF3E" }}></i>
                          <div className={styles.carDetailValue}>{car.price}</div>
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
                          {car.price}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="pagination-wrap">
                {currentPage > 1 && (
                  <li>
                    <Link href={createPageLink(currentPage - 1)}>
                      <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                  </li>
                )}
                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  return (
                    <li key={page}>
                      <Link href={createPageLink(page)} className={page === currentPage ? 'active' : ''}>
                        {page}
                      </Link>
                    </li>
                  );
                })}
                {currentPage < totalPages && (
                  <li>
                    <Link href={createPageLink(currentPage + 1)}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
