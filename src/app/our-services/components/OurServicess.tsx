"use client";
import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import Image from "next/image";
import ContactForm from "@components/app/contact-us/components/ContactForm";
import '../ourservice.css';

export default function OurServicess() {
  return (
    <>
      <Header />
       <section
        className="m20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, black, transparent),url('/img/our-service-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          padding:'130px 0px',
          position:'relative'
        }}
      >
        <div className="borderRadius-20" style={{position:'absolute', backgroundColor:'rgba(0, 0, 0, 0.6)',inset:'0px',zIndex:1}}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 style={{ fontSize:'40px', color:'#1b1b1b', lineHeight:'1.25em', position:'relative',marginBottom:'0', zIndex:3, top:'50%'}}>
                <span style={{ color: '#FFF'}}>Our Services</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mb-3">
              <div className="card-news">
                <div className="card-image">
                  <Image
                    src="/img/carDesert.jpg"
                    alt=""
                    width={800}
                    height={500}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                 <div className="card-info">
                <div className="card-title mb-3">
                  <h3 style={{fontSize:'20px'}}>Daily and Weekly Car Rentals </h3>
                  <p className="text-md-medium neutral-500 mt-2">
                    Flexible rental options available for both short-term and weekly stays ideal for vacations, business trips, or quick getaways. Enjoy comfort, convenience, and value throughout your stay.
                  </p>
                </div>
              </div>
              </div>
             
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card-news">
                <div className="card-image">
                   <Image
                  src="/img/yacht.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
                </div>
                 <div className="card-info">
                <div className="card-title mb-3">
                  <h3 style={{fontSize:'20px'}}>Yachts</h3>
                  <p className="text-md-medium neutral-500 mt-2">
                  Experience a luxury yacht cruise along Dubais stunning coastline. Perfect for birthdays, gatherings, or a relaxing day at sea each trip is customized to your needs. Enjoy the sun, skyline views, and unforgettable moments. Book your yacht today!
                  </p>
                </div>
              </div>
              </div>
             
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card-news">
                <div className="card-image">
                   <Image
                  src="/img/hotel.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
                </div>
                 <div className="card-info">
                <div className="card-title mb-3">
                  <h3 style={{fontSize:'20px'}}>Hotel Booking</h3>
                  <p className="text-md-medium neutral-500 mt-2">
                    We can help you book hotels, Were passionate about travel and aim to inspire millions of travelers across the globe. So, when it comes to booking the perfect hotel, weve got you covered.
                  </p>
                </div>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* <section className="p3" style={{ paddingTop: "30px" }}>
        <div className="container-fluid p-5">
          <div className="row justify-content-center">
            <div className="col-md-9 col-12 m-auto">
              <form
                action=""
                style={{
                  background: "#f9f9f9",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <div className="row">
                  <div className="col-md-4 col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        className="form-control mt-2"
                        placeholder="abc@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control mt-2"
                        placeholder="+971-1111-11111"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="">Message</label>
                      <textarea
                        className="form-control mt-2"
                        placeholder="How can i help you?"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 col-12 mb-3 mt-3 text-center">
                    <div className="form-group text-center">
                      <button
                        className="customButton d-flex gap-2 justify-content-center m-auto"
                        style={{ alignItems: "center" }}
                      >
                        Contact Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
