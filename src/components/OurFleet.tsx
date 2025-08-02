"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./OurFleet.module.css";

const cars = [
  {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "150",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "AED 600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
   {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "150",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "AED 600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
   {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "150",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "AED 600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
   {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "150",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "AED 600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
   {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "150",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "AED 600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
   {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "150",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "AED 600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },


];

export default function OurFleet() {
  return (
    <section style={{ padding: "40px 0px" }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="d-flex justify-content-between">
            <h2 className="text-center" style={{ color: "#161616" }}>
              Featured Cars
            </h2>
            <button
              className="customButton"
              style={{
                borderRadius: "10px",
                backgroundColor: "#161616",
                padding: "5px 30px",
              }}
            >
              <Link href="#" style={{ color: "#FFF" }}>
                Show All
              </Link>
            </button>
          </div>
        </div>

        <div className="row">
         {cars.slice(0, 6).map((car, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
            >
              <div role="listitem" className={styles.collectionItem}>
                <div className={styles.carCard}>
                  <div className={styles.carListingBrandWrapper}>
                    <Link
                      href={`/car-makes/${car.brand.toLowerCase()}`}
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
                      <h3 className={`${styles.carListingName} mb-0`}>
                        {car.name}
                      </h3>
                      <div className={styles.carListingSpecs}>
                        <div className={styles.listingDetailsDivider}></div>
                        <div className={styles.listingSpec}>{car.type}</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/cars/${car.slug}`}
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
                          src="/img/icons/mileage.svg"
                          alt="Mileage"
                          width={20}
                          height={20}
                          className={styles.listingDetailIcon}
                        />
                        <div className={styles.carDetailValue}>
                          {car.mileage}
                        </div>
                      </div>
                      <div className={styles.carDetail}>
                        <Image
                          src="/img/icons/engine.svg"
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
                        <Image
                          src="/img/icons/fuel-type.svg"
                          alt="Fuel"
                          width={20}
                          height={20}
                          className={styles.listingDetailIcon}
                        />
                        <div className={styles.carDetailValue}>
                          {car.fuel}
                        </div>
                      </div>
                      <div className={styles.carDetail}>
                        <Image
                          src="/img/icons/transmission.svg"
                          alt="Transmission"
                          width={20}
                          height={20}
                          className={styles.listingDetailIcon}
                        />
                        <div className={styles.carDetailValue}>
                          {car.transmission}
                        </div>
                      </div>
                    </div>

                    <div className={styles.carListingPriceWrapper}>
                      <div className={styles.listingPrice}>{car.price}</div>
                      <Link
                        href={`/cars/${car.slug}`}
                        className={`${styles.primaryButton} ${styles.carListingButton} ${styles.wButton}`}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
