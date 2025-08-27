'use client';

import Link from "next/link";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styles from "@components/components/OurFleet.module.css";
import { slugify } from "@components/utils/slugify"; // import your slugify function

const ITEMS_PER_PAGE = 12;

export default function Listing() {
  const params = useParams();
  const rawBrandParam = params?.brand as string;
  const brandParam = slugify(rawBrandParam); // ✅ Slugify the brand from URL

  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("/api/cars");
        const result: ApiResponse = await res.json();

        if (result.success && result.data) {
          const BASE_URL = "https://cms.dazzlewheels.ae/public/storage";
          const cleanUrl = (path: string | null): string => {
            if (!path) return "";
            if (path.startsWith("http")) return path;
            return `${BASE_URL}/${path.replace(/^\/+/, "")}`;
          };

          const mappedCars = result.data.map((car) => {
            const logo = car.brand.logo ? cleanUrl(car.brand.logo) : "/fallback-logo.png";
            const image = car.main_image ? cleanUrl(car.main_image) : "/fallback-image.png";

            return {
              ...car,
              price: car.daily_rate,
              image,
              logo,
              Seats: car.seats,
              door: car.doors,
              slug: slugify(car.model),
            };
          });

          // ✅ Use slugified comparison
          const filteredCars = brandParam
            ? mappedCars.filter(
                (car) => slugify(car.brand.name) === brandParam
              )
            : mappedCars;

          setCars(filteredCars);
        } else {
          console.error("API Error:", result.message);
        }
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [brandParam]);

  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);

  const paginatedCars = useMemo(() => {
    return cars.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [cars, currentPage]);

  const capitalized =
    brandParam?.length > 0
      ? brandParam.charAt(0).toUpperCase() + brandParam.slice(1)
      : "";

  const createPageLink = (page: number) =>
    `/all-vehicles/${brandParam}?page=${page}`;

  if (loading) {
    return (
      <div className="col-12 text-center">
        <h4 style={{ color: "#999" }}>Loading Cars...</h4>
      </div>
    );
  }

  return (
    <section style={{ padding: "50px 0px 10px 0px" }}>
      <div className="container">
        <div className="row">
          {cars.length === 0 ? (
            <div className="col-12 text-center">
              <h4 style={{ color: "#999" }}>
                No cars found for
                <span style={{ color: "#000", fontWeight: "bold", marginLeft: '10px' }}>
                  &quot;{capitalized}&quot;
                </span>
              </h4>
            </div>
          ) : (
            paginatedCars.map((car, index) => (
              <div key={car.id} className="col-lg-4 col-md-6 col-12 mb-5">
                <div role="listitem" className={styles.collectionItem}>
                  <div className={styles.carCard}>
                    <div className={styles.carListingBrandWrapper}>
                      <Link
                        href={`/all-vehicles/${slugify(car.brand.name)}`} // ✅ Slugified link
                        className={`${styles.carListingBrand} w-inline-block`}
                      >
                        <Image
                          src={car.logo!}
                          alt={`${car.brand.name} Logo`}
                          width={50}
                          height={50}
                          className={styles.carBrandImage}
                        />
                      </Link>
                      <div>
                        <h3 className={`${styles.carListingName} mb-0`}>
                          {car.name}
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

                    <Link
                      href={`/vehicle/${slugify(car.brand.name)}/${car.slug}`} // ✅ Slugified link
                      className={`${styles.listingImageWrapper} w-inline-block`}
                    >
                      <Image
                        src={car.image!}
                        alt={car.name}
                        className={styles.listingImage}
                        width={800}
                        height={500}
                        style={{ objectFit: "cover" }}
                        priority={index < 3}
                      />
                    </Link>

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

                      <div className={styles.carListingPriceWrapper}>
                        <div className={styles.listingPrice}>
                          <Image
                            width={30}
                            height={30}
                            alt="Dirham"
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
                          href={`/vehicle/${slugify(car.brand.name)}/${car.slug}`}
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
  );
}
