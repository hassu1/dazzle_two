"use client";
import Link from "next/link";
import styles from "./CarCategory.module.css"; // 👈 import CSS module

export default function CarCategory() {
  const categories = [
    { name: "Economy", icon: "flaticon-coupe-car", link: "/all-vehicle-type/economy" },
    { name: "Sport Cars", icon: "flaticon-sportive-car", link: "/all-vehicle-type/sport" },
    { name: "SUVs", icon: "flaticon-car-suv", link: "/all-vehicle-type/suv" },
    { name: "Convertible", icon: "flaticon-cabrio-car", link: "/all-vehicle-type/convertible" },
    { name: "Luxury Cars", icon: "flaticon-sportive-car", link: "/all-vehicle-type/luxury" },
    { name: "Coupe", icon: "flaticon-coupe-car", link: "/all-vehicle-type/coupe" },
  ];

  return (
    <section className={`${styles.carTypes} section-padding`}>
      <div className="container">
        <div className="row">
               <div className="col-md-12 text-center">
          <h2 className="section-heading center">Our Fleet Categories</h2>
        </div>
        </div>
        <div className={styles.gridWrapper}>
        {categories.map((category, index) => (
          <div className={styles.gridItem} key={index}
          >
            <div className={styles.item}>
              <Link href={'/all-vehicles'}>
                <div>
                  <span className={category.icon}></span>
                  <h6>{category.name}</h6>
                </div>
              </Link>
              <div className={styles.bgIcon}>
                <span className={category.icon}></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
