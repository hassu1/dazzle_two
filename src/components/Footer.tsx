'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
     <footer className="footer-section">
    <div className="container">
        <div className="footer-cta pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="cta-text">
                            <h4>Find us</h4>
                            <span>Office 6, Crystal Tower, Business Bay, Dubai, UAE</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-phone"></i>
                        <div className="cta-text">
                            <h4>Call us</h4>
                            <span>+971527277464</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
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
                            <Link href="/"><Image src="/img/dazzle.png" className="img-fluid" alt="logo" width={800} height={500} style={{width:'100%', height:'auto'}}/></Link>
                        </div>
                        <div className="footer-text">
                            <p>Dazzle Wheels is the best luxury car rental services in Dubai, we have a big fleet of 50 sports and luxury vehicles, we are known for the professional services, we offer a wide range of supercars, luxury cars & Suvs in the market for daily rental.</p>
                        </div>
                        <div className="footer-social-icon">
                            <span>Follow us</span>
                            <Link href="#"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                            <Link href="#"><i className="fab fa-twitter twitter-bg"></i></Link>
                            <Link href="#"><i className="fab fa-google-plus-g google-bg"></i></Link>
                        </div>
                    </div>
                </div>

                {/* <!-- New Brands Section --> */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-5">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Brands</h3>
                        </div>
                        <ul>
                            <li><Link href="#">Audi</Link></li>
                            <li><Link href="#">Mercedes</Link></li>
                            <li><Link href="#">Lamborghini</Link></li>
                            <li><Link href="#">Ferrari</Link></li>
                            <li><Link href="#">BMW</Link></li>
                            <li><Link href="#">Porsche</Link></li>
                            <li><Link href="#">Toyota</Link></li>
                            <li><Link href="#">Honda</Link></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Merged Useful Links into one column --> */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-5">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">Portfolio</Link></li>
                            <li><Link href="#">Contact</Link></li>
                            <li><Link href="#">About Us</Link></li>
                        </ul>
                    </div>
                </div>

                 <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-5">  
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Subscribe</h3>
                        </div>
                        <div className="footer-text mb-25">
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div className="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address" />
                                <button><i className="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between gap-2 flex-wrap">
                        <div className="copyright-text">
                        <p>Copyright &copy; 2025 <Link href="/">Dazzle Wheels</Link> All Right Reserved</p>
                    </div>
                    <div className="footer-menu">
                        <ul className='mb-0'>
                            <li><Image src="/img/payment-secure.webp" alt="" width={800} height={500} style={{width:'100%',height:'auto'}} /></li>
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
