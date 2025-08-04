'use client';

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
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
