"use client";

import Image from "next/image";
import './Gallery.css';

export default function Gallery() {



  return (
    <section className="video-gallery section-padding" style={{ margin: '20px' }}>
  <div className="container-fluid p-0">
    <div className="row g-0" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {[4, 2, 3, 3].map((img, i) => (
        <div
          className="col-lg-3 col-md-6"
          key={i}
          style={{ padding: 0, flex: '0 0 calc(25% - 15px)' }} // 25% width - gap adjustment
        >
          <div className="item">
            <Image
              src={`/img/gallery/${img}.jpg`}
              className="img-fluid"
              alt=""
              width={800}
              height={500}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
