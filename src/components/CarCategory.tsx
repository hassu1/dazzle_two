"use client";
import Link from "next/link";
import styles from "./CarCategory.module.css"; // 👈 import CSS module

export default function CarCategory() {
  const categories = [
    { name: "Luxury Cars", icon: "flaticon-coupe-car", link: "/cars/luxury" },
    { name: "Sport Cars", icon: "flaticon-sportive-car", link: "/cars/sport" },
    { name: "SUVs", icon: "flaticon-car-suv", link: "/cars/suv" },
    { name: "Convertible", icon: "flaticon-cabrio-car", link: "/cars/convertible" },
    { name: "Hatchback", icon: "flaticon-car-of-hatchback-model", link: "/cars/hatchback" },
    { name: "Sedan", icon: "flaticon-sedan-car-model", link: "/cars/sedan" },
    { name: "Minivan", icon: "flaticon-minivan-car", link: "/cars/minivan" },
    { name: "Small Cars", icon: "flaticon-car", link: "/cars/small" },
  ];

  return (
    <section className={`${styles.carTypes} section-padding`}>
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-12 m-auto">
                    <h2 className="text-center" style={{ color:'#161616'}}>Our Fleet Categories</h2>
            </div>
        </div>
        <div className="row mt-5">
          {categories.map((category, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
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
