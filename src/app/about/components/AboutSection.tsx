"use client";

import "../about.css";
import Image from "next/image";
import styles from "../AboutSection.module.css"; // CSS module for custom image layout

export default function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="container">
        <div className="row align-items-center">
          {/* Images on the left */}
          <div className="col-md-6 col-12 mb-4">
            <div className={styles.imageWrapper}>
            <div className={styles.mainImageWrapper}>
              <Image
                alt="Main"
                src="/img/FS.jpg"
                width={800}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          </div>

          {/* Text on the right */}
          <div className="col-md-6 col-12 text-center text-md-start">
            <span className="tagline-badge">Explore the world</span>
          <h2 className="section-heading left">The Best Car Rental Service in the World</h2>
            <p className="para_p mt-4" style={{fontSize:'15.5px'}}>
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
                  {/* <img src="   https://cdn-icons-png.flaticon.com/512/10434/10434252.png " style={{ width:'68px', clipPath:'circle()', padding:'5px'}} /> */}
                                    {/* <i className="fas fa-rocket" style={{padding:'10px', background:'#e5af3e', color:'#FFF', fontSize:'30px', width: 'max-content' , borderRadius:'50px'}}></i> */}
                  <h3>Our Vision</h3>
                  <p>
                   To become the world’s most trusted and innovative luxury car rental company by delivering premium service, world-class vehicles, and a consistently outstanding customer experience.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                  <div className="box" style={{ marginTop:'15px'}}>
                    {/* <img src="   https://cdn-icons-png.flaticon.com/512/3721/3721184.png " style={{ width:'62px', clipPath:'circle()', padding:'5px'}} /> */}
                  {/* <i className="fas fa-bullseye" style={{padding:'10px', background:'#e5af3e', color:'#FFF', fontSize:'30px', width: 'max-content' , borderRadius:'50px'}}></i> */}
                  <h3>Our Mision</h3>
                  <p>To provide a high-quality, hassle-free car rental experience through a modern, well-maintained fleet, transparent pricing, and personalized customer support.
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
