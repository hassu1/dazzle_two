"use client";

import Image from "next/image";
import './Gallery.css';

export default function Gallery() {
  return (
     <section className="video-gallery section-padding" style={{margin:'40px'}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-12 mb-30">
                    <div className="item"> <Image src="/img/gallery/4.jpg" className="img-fluid" alt=""  width={800} height={500} style={{ objectFit: 'cover' , width: '100%', height:'auto'}} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 mb-30">
                    <div className="item"> <Image src="/img/gallery/2.jpg" className="img-fluid" alt="" width={800} height={500} style={{ objectFit: 'cover' , width: '100%', height:'auto'}} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 mb-30">
                    <div className="item"> <Image src="/img/gallery/3.jpg" className="img-fluid" alt="" width={800} height={500} style={{ objectFit: 'cover' , width: '100%', height:'auto'}} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 mb-30">
                    <div className="item"> <Image src="/img/gallery/3.jpg" className="img-fluid" alt="" width={800} height={500} style={{ objectFit: 'cover' , width: '100%', height:'auto'}} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
