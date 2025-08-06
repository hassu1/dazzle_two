'use client';

import '../about.css';
import Image from 'next/image';
import styles from '../AboutSection.module.css'; // CSS module for custom image layout

export default function AboutSection() {
  return (
    <section style={{ padding:'50px'}}>
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
              <div className={styles.overlayImage}>
                <Image
                  alt="Overlay"
                  src="/img/blog-05-768x484.png"
                  width={327}
                  height={220}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Text on the right */}
          <div className="col-md-6 col-12 text-center text-md-start">
            <h2 className="">About Company</h2>
            <p className="para_p mt-4" style={{fontSize:'15px'}}>
              Dazzle Wheels Car Rental is the best luxury car rental services in Dubai, we have a big fleet of 50 sports and luxury vehicles, we are known for the professional services we offer, We offer a wide range of supercars, luxury cars & Suvs in the market for daily rental, The difference is in the details and that’s why our car rental services are the best in town, with a team of experts and quality trained professionals in the tourism and automobile industry, we stand out for quality and good taste, to offer you with a unique experience, get in touch with us to know more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
