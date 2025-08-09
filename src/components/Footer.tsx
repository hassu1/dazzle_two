"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-4">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>  Office 6, Crystal Tower, Business Bay, Dubai, UAE</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-6 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+971527277464</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-12 col-6 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>info@dazzlewheels.ae</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-5">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image
                        src="/img/logo-01.png"
                        className="img-fluid"
                        alt="logo"
                        width={800}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                      Dazzle Wheels is the best luxury car rental services in
                      Dubai, we have a big fleet of 50 sports and luxury
                      vehicles, we are known for the professional services, we
                      offer a wide range of supercars, luxury cars & Suvs in the
                      market for daily rental.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- New Brands Section --> */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-5 pl-6rem">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Brands</h3>
                  </div>
                  <ul>
                    <li className="mb-3">
                      <Link href="/all-vehicles/audi">Audi</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/all-vehicles/mercedes">Mercedes</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/all-vehicles/mclaren">Mclaren</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/all-vehicles/lamborghini">Lamborghini</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/all-vehicles/ferrari">Ferrari</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/all-vehicles/range-rover">Range Rover</Link>
                    </li>
                      <li className="mb-3">
                      <Link href="/all-vehicles/rolls-royce">Rolls Royce</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/all-vehicles/porsche">Porsche</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Merged Useful Links into one column --> */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-5 pl-3rem">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li className="mb-3">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/our-services">Services</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/all-vehicles">All Vehicles</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/contact-us">Contact</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/about">About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-5">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                  <div className="footer-social-icon mt-3">
                    <span>Follow us</span>
                    <Link href="javascript:void()">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link href="javascript:void()">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </Link>
                    <Link href="javascript:void()">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-between justify-content-center gap-2 flex-wrap text-center text-md-start footer-bottom-wrapper">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; {new Date().getFullYear()}{" "}
                    <Link href="/">Dazzle Wheels</Link> All Rights Reserved
                  </p>
                </div>
                <div className="footer-menu">
                  <ul className="mb-0">
                    <li>
                      <Image
                        src="/img/payment-cards-6.png"
                        alt=""
                        width={150}
                        height={150}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
