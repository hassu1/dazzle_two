'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="hero-bg-section">
      <div className="hero-bg-wrapper">
        <div className="hero-bg-image-overlay"></div>
        <div className="hero-bg-wrap" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
          <h1 className="hero-bg-title">Quick and affordable car rentals</h1>
          <Link href="/car" className="button-icon w-inline-block">
            <div className="button-icon-text-wrap">
              <div className="d-flex">
                <button
                  className="customButton d-flex gap-2"
                  style={{ alignItems:'center'}}
                >
                  Book your ride now
                  <div className="box" style={{backgroundColor:'#161616',padding:'3px'}}>
                    <Image
                    src="https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/676682bf44c92e272152469e_arrow-01.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="button-icon-image p-1 "
                    style={{ borderRadius:'5px'}}
                    
                     />
                  </div>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
