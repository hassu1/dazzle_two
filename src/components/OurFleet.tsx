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
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
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
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
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
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
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
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
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
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
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
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },


];

export default function OurFleet() {
  return (
    <section style={{ padding: "40px 0px 0px 0px" }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
  <h2 className="section-heading text-center text-md-start w-100 w-md-auto">
    Featured Cars
  </h2>

  <button
    className="customButton d-none d-md-block"
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
         {cars.slice(0, 6).map((car, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mb-5"
            >
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
                        <div className={styles.carDetailValue}>
                          {car.mileage}
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
                        {/* <i className="fas fa-engine" style={{ color: '#E5AF3E'}} ></i> */}
                        <div className={styles.carDetailValue}>
                          V8
                        </div>
                      </div>
                      <div className={styles.carDetail}>
                        {/* <Image
                          src="/img/icons/icons-2.png"
                          alt="Fuel"
                          width={20}
                          height={20}
                          className={styles.listingDetailIcon}
                        /> */}
                        <i className="omfi-door" style={{ color: '#E5AF3E' , fontSize:'18px'}} ></i>
                        <div className={styles.carDetailValue}>
                          2
                        </div>
                      </div>
                      <div className={styles.carDetail}>
                         {/* <Image
                          src="/img/icons/icons-4.png"
                          alt="Fuel"
                          width={20}
                          height={20}
                          className={styles.listingDetailIcon}
                        /> */}
                        <i className="fas fa-money-bill" style={{ color: '#E5AF3E'}} ></i>
                        <div className={styles.carDetailValue}>
                          2000
                        </div>
                      </div>
                    </div>

                    <div className={styles.carListingPriceWrapper}>
                      <div className={styles.listingPrice}> <Image width={30} height={30} alt="" src="/img/dirham.png" style={{filter: 'brightness(0) invert(1)', marginTop:'-4px', paddingRight:'3px'}} />{car.price}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
