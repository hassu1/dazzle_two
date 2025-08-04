'use client';
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "@components/components/OurFleet.module.css";

// Sample data (replace with real API in production)
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
    brand: "Ferrari",
    name: "Ferrari Roma",
    year: "2023",
    type: "Coupe",
    condition: "New",
    mileage: "1",
    engine: "3.9L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "750 Per Day",
      image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "ferrari-roma",
  },
  {
    brand: "Porsche",
    name: "Porsche Cayenne",
    year: "2022",
    type: "SUV",
    condition: "Used",
    mileage: "30",
    engine: "3.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "500 Per Day",
   image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "porsche-cayenne",
  },
];

export default function Listing() {
  const params = useParams();
  const brandParam = params?.brand;
  const brandName = typeof brandParam === "string" ? brandParam : "";

  const filteredCars = brandName
    ? cars.filter((car) => car.brand.toLowerCase() === brandName.toLowerCase())
    : cars;

  const capitalized =
    brandName.length > 0
      ? brandName.charAt(0).toUpperCase() + brandName.slice(1)
      : "";

  return (
    <section style={{ padding: "200px 0px 10px 0px" }}>
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
            filteredCars.slice(0, 6).map((car, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12 mb-5">
                <div role="listitem" className={styles.collectionItem}>
                  <div className={styles.carCard}>
                    <div className={styles.carListingBrandWrapper}>
                      <Link
                        href={`/all-vehicles/${car.brand.toLowerCase()}`}
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
