"use client";

import "../about.css";
import Image from "next/image";
import styles from "../AboutSection.module.css"; // CSS module for custom image layout

export default function AboutSection() {
  return (
    <section className="aboutSection" style={{ padding: "50px" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Images on the left */}
          <div className="col-md-6 col-12 mb-4">
            <div className={styles.imageWrapper}>
              <div className={styles.mainImage}>
                <Image
                  alt="Main"
                  src="/img/background-1.png"
                  width={421}
                  height={281}
                  className="img-fluid"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text on the right */}
          <div className="col-md-6 col-12 text-center text-md-start">
            <span
              style={{
                display: "block",
                width: "max-content",
                padding: "9px 10px",
                background: "#E5AF3E",
                color: "#161616",
                borderRadius: "50px",
                marginBottom: "15px",
              }}
            >
              Explore the world
            </span>
            <h2 className="">The Best Car Rental Service in the World</h2>
            <p className="para_p mt-4" style={{fontSize:'17px'}}>
              Dazzle Wheels Car Rental offers premium luxury and sports car
              rentals in Dubai. With a fleet of over 50 high-end vehicles, we&apos;re
              known for our top-tier service and attention to detail. Whether
              you&apos;re looking for a supercar, SUV, or luxury ride for the day,
              our expert team ensures a smooth, unforgettable experience.
              Contact us today to explore our collection.
            </p>
            <div className="row">
              <div className="col-md-6 col-12 mb-2">
                <div className="box">
                  <i className="fa fa-phone"></i>
                  <h3>Certified Hiking Guides</h3>
                  <p>
                    Join expert-led treks that ensure safety and adventure in
                    every step.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                  <div className="box">
                  <i className="fa fa-phone"></i>
                  <h3>Certified Hiking Guides</h3>
                  <p>
                    Join expert-led treks that ensure safety and adventure in
                    every step.
                  </p>
                </div>
              </div>
            </div>
            <button className="customButton" style={{padding:'13px 40px'}}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
