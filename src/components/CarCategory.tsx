"use client";
import Link from "next/link";
import styles from "./CarCategory.module.css"; // 👈 import CSS module

export default function CarCategory() {
  const categories = [
    { name: "Luxury Cars", icon: "flaticon-coupe-car", link: "/cars/luxury" },
    { name: "Sport Cars", icon: "flaticon-sportive-car", link: "/cars/sport" },
    { name: "SUVs", icon: "flaticon-car-suv", link: "/cars/suv" },
    { name: "Convertible", icon: "flaticon-cabrio-car", link: "/cars/convertible" },
    { name: "Coupe", icon: "flaticon-coupe-car", link: "/cars/coupe" },
  ];

  return (
    <section className={`${styles.carTypes} section-padding`}>
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-12 m-auto">
                    <h2 className="text-center" style={{ color:'#161616'}}>Our Fleet Categories</h2>
            </div>
        </div>
        <div className={styles.gridWrapper}>
        {categories.map((category, index) => (
          <div className={styles.gridItem} key={index}
          data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
          >
            <div className={styles.item}>
              <Link href={category.link}>
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
