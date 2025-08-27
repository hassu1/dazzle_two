"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styles from "@components/components/OurFleet.module.css";

const ITEMS_PER_PAGE = 12;

export default function VehicleType() {

  
  const { category } = useParams(); 
  const searchParams = useSearchParams();

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryName = typeof category === "string" ? category : "";
  const currentPage = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/cars`);
        const json = await res.json();
        if (json.success) {
          setCars(json.data);
          // console.warn(cars)
        } else {
          setCars([]);
        }
      } catch (error) {
        // console.error("Error fetching cars:", error);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const slugify = (str: string = ""): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")       // spaces → -
    .replace(/[^a-z0-9-]/g, ""); // remove special chars
};

  const filteredCars = useMemo(() => {
    if (!categoryName) return cars;

    return cars.filter((car) => {
      if (Array.isArray(car.car_types)) {
        return car.car_types.some(
          (t: string) => t.toLowerCase() === categoryName.toLowerCase()
        );
      } else {
        return car.car_types?.toLowerCase() === categoryName.toLowerCase();
      }
    });
  }, [cars, categoryName]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

// pageination
  const paginatedCars = useMemo(() => {
    return filteredCars.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredCars, currentPage]);

  const capitalized =
    categoryName.length > 0
      ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
      : "";

  const createPageLink = (page: number) =>
    `/all-vehicle-type/${categoryName.toLowerCase()}?page=${page}`;

  // Clean URL function for images
  const BASE_URL = "https://cms.dazzlewheels.ae/public/storage";
  const cleanUrl = (path: string | null): string => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${BASE_URL}/${path.replace(/^\/+/, "")}`;
  };

  return (
    <>
      {/* Banner */}
      <section
        className="m20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, black, transparent),url('/img/all-vechicle-banner.jpg')",
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
                <span>All {capitalized} Vehicles</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Cars */}
      <section style={{ padding: "50px 0px 10px 0px" }}>
        <div className="container">
          <div className="row">
            {loading ? (
              <div className="col-12 text-center">
                <h4 style={{ color: "#999" }}>Loading cars...</h4>
              </div>
            ) : filteredCars.length === 0 ? (
              <div className="col-12 text-center">
                <h4 style={{ color: "#999" }}>
                  No cars found for{" "}
                  <span style={{ color: "#000", fontWeight: "bold" }}>
                    &quot;{capitalized}&quot;
                  </span>
                </h4>
              </div>
            ) : (
              paginatedCars.map((car, index) => (
                <div key={car.id || index} className="col-lg-4 col-md-6 col-12 mb-5">
                  <div role="listitem" className={styles.collectionItem}>
                    <div className={styles.carCard}>
                      {/* Brand */}
                      <div className={styles.carListingBrandWrapper}>
                        <Link
                            href={`/all-vehicles/${slugify(car.brand?.name)}`}
                          className={`${styles.carListingBrand} w-inline-block`}
                        >
                          <Image
                            src={cleanUrl(car.brand?.logo)}
                            alt={`${car.brand?.name} Logo`}
                            width={50}
                            height={50}
                            className={styles.carBrandImage}
                          />
                        </Link>
                        <div>
                          <h3 className={`${styles.carListingName} mb-0`}>
                            {car.model}
                          </h3>
                          <div className={styles.carListingSpecs}>
                            <div className={styles.listingDetailsDivider}></div>
                            <div className={styles.listingSpec}>
                              {Array.isArray(car.car_types)
                                ? car.car_types
                                    .map((type: string) =>
                                      type.replace(/([a-z])([A-Z])/g, "$1 $2")
                                    )
                                    .join(", ")
                                : typeof car.car_types === "string"
                                ? car.car_types.replace(/([a-z])([A-Z])/g, "$1 $2")
                                : ""}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <Link
                          href={`/vehicle/${slugify(car.brand?.name)}/${slugify(car.model)}`}
                        className={`${styles.listingImageWrapper} w-inline-block`}
                      >
                        <Image
                          src={cleanUrl(car.main_image)}
                          alt={car.model}
                          className={styles.listingImage}
                          width={800}
                          height={500}
                        />
                      </Link>

                      {/* Details */}
                      <div className={styles.carListingDetailsWrapper}>
                        <div className={styles.carListingDetails}>
                          <div className={styles.carDetail}>
                            <Image
                              src="/img/icons/icons-1.png"
                              alt="Seats"
                              width={20}
                              height={20}
                              className={styles.listingDetailIcon}
                            />
                            <div className={styles.carDetailValue}>
                              {car.seats}
                            </div>
                          </div>
                          <div className={styles.carDetail}>
                            <Image
                              src="/img/icons/icons-3.png"
                              alt="Engine"
                              width={20}
                              height={20}
                              className={styles.listingDetailIcon}
                            />
                            <div className={styles.carDetailValue}>
                              {car.engine}
                            </div>
                          </div>
                          <div className={styles.carDetail}>
                            <i
                              className="omfi-door"
                              style={{ color: "#E5AF3E", fontSize: "18px" }}
                            ></i>
                            <div className={styles.carDetailValue}>
                              {car.doors}
                            </div>
                          </div>
                          <div className={styles.carDetail}>
                            <i
                              className="fas fa-money-bill"
                              style={{ color: "#E5AF3E" }}
                            ></i>
                            <div className={styles.carDetailValue}>
                              {Math.floor(Number(car.deposit))}
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className={styles.carListingPriceWrapper}>
                          <div className={styles.listingPrice}>
                            <Image
                              width={30}
                              height={30}
                              alt=""
                              src="/img/dirham.png"
                              style={{
                                filter: "brightness(0) invert(1)",
                                marginTop: "-4px",
                                paddingRight: "3px",
                              }}
                            />
                           {Math.floor(Number(car.daily_rate))} Per Day
                          </div>
                          <Link
                              href={`/vehicle/${slugify(car.brand?.name)}/${slugify(car.model)}`}
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
                          className={page === currentPage ? "active" : ""}
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
