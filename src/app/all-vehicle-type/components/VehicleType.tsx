'use client';
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import styles from "@components/components/OurFleet.module.css";
import { cars } from "../../../libs/data/cars";

const ITEMS_PER_PAGE = 12;

export default function VehicleType() {
  const { category } = useParams();  // Get the dynamic 'category' from the URL

  console.log("Category from URL: ", category);  // Debugging

  const categoryName = typeof category === "string" ? category : "";

  // Get current page from URL query params
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = parseInt(searchParams.get('page') || '1'); // Default to page 1

  // Filter cars based on the category
const filteredCars = categoryName
  ? cars.filter((car) => {
      if (Array.isArray(car.type)) {
        return car.type.some((t) => t.toLowerCase() === categoryName.toLowerCase());
      } else {
        return car.type.toLowerCase() === categoryName.toLowerCase();
      }
    })
  : cars;

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  // Get the cars for the current page
  const paginatedCars = useMemo(() => {
    return filteredCars.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [filteredCars, currentPage]);

  const capitalized =
    categoryName.length > 0
      ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
      : "";

  // Function to generate the page link
  const createPageLink = (page: number) => `/all-vehicle-type/${categoryName.toLowerCase()}?page=${page}`;

  return (
    <>
      <section
        className="m20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, black, transparent),url('/img/all-vechicle-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          padding: '130px 0px',
          position: 'relative'
        }}
      >
        <div className="borderRadius-20" style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', inset: '0px', zIndex: 1 }}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-title text-white modern-heading"><span>All {capitalized} Vehicles</span></h1>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 0px 10px 0px" }}>
        <div className="container">
          <div className="row">
            {filteredCars.length === 0 ? (
              <div className="col-12 text-center">
                <h4 style={{ color: "#999" }}>
                  No cars found for
                  <span style={{ color: "#000", fontWeight: "bold" }}>
                    &quot;{capitalized}&quot;
                  </span>
                </h4>
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
                           <div className={styles.listingSpec}>
                            {(Array.isArray(car.type) ? car.type : [car.type]).join(" * ")}
                            </div>
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
                        <Link
                          href={createPageLink(page)}
                          className={page === currentPage ? 'active' : ''}
                        >
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
    </>
  );
}
