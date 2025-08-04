"use client";
import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import Image from "next/image";
import ContactForm from "@components/app/contact-us/components/ContactForm";

export default function OurServicess() {
  return (
    <>
      <Header />

      <section className="section-padding" style={{ paddingTop: "200px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mb-3">
              <div className="p-2">
                <Image
                  src="/img/carDesert.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto", borderRadius:'20px' }}
                />
                <h3 className="text-dark mt-3 text-center">Desert Safari</h3>
                <p className="text-dark text-center">
                  We have a team To assist you with desert safari packages offer
                  entertainment and has proven to be excellent in services and
                  capturing the hearts of our valuable guests. It provides
                  guests a fun and thrilling experience in the desert, For
                  bookings and other enquiries, feel free to get in touch with
                  us.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-12 mb-3">
              <div className="p-2">
                <Image
                  src="/img/yacht.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
                   style={{ width: "100%", height: "auto", borderRadius:'20px' }}
                />
                <h3 className="text-dark mt-3 text-center">Yachts</h3>
                <p className="text-dark text-center">
                  We Can Help You with luxury yachts to allow guests to enjoy a
                  truly memorable cruise along the outstanding coastline of
                  Dubai. Relax under the warmth of the sun or treat your eyes to
                  unbeatable views of the Dubai skyline as you cruise through
                  the sparkling waters. Whether you opt for the yacht to
                  celebrate a birthday or have a fun day out with friends, we
                  ensure to tailor it in line with your specific needs. So,
                  contact us today to book a yacht.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-12 mb-3">
              <div className="p-2">
                <Image
                  src="/img/hotel.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
             style={{ width: "100%", height: "auto", borderRadius:'20px' }}
                />
                <h3 className="text-dark mt-3 text-center">Hotel Booking</h3>
                <p className="text-dark text-center">
                  We can help you book hotels, We&apos;re passionate about
                  travel and aim to inspire millions of travelers across the
                  globe. So, when it comes to booking the perfect hotel,
                  we&apos;ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="p3" style={{ paddingTop:'30px'}}>
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
      </section>

      <Footer />
    </>
  );
}
