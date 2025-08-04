export default function ContactForm() {
  return (
    <>
      <section className="p3" style={{ paddingTop:'30px'}}>
        <div className="container-fluid p-5">
          <div className="row justify-content-center">
            <div className="col-md-5 col-12 mb-">
              <h2 className="heading-h5">Our contact details</h2>
              <div className="w-layout-grid grid-contact-hero">
                <div className="contact-meta-item">
                  <img
                    src="https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/6753d0b38b15fdd1afedfdfe_headphone-line.svg"
                    loading="eager"
                    alt=""
                    className="contact-meta-icon"
                  />
                  <div className="contaact-meta-title">Support</div>
                  <div className="contact-meta-link-wrap">
                    <a
                      href="mailto:example@gmail.com"
                      className="contact-meta-link"
                    >
                      example@gmail.com
                    </a>
                    <a href="tel:(+91)125888666" className="contact-meta-link">
                      (+91) 125 888 666
                    </a>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <img
                    src="https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/6753d0b379df68bd6de0028e_location-pin.svg"
                    loading="eager"
                    alt=""
                    className="contact-meta-icon"
                  />
                  <div className="contaact-meta-title">Address</div>
                  <div className="contact-meta-content">
                    Chicago HQ Estica Cop. Macomb, MI 48042
                  </div>
                </div>
                <div className="contact-meta-item">
                  <img
                    src="https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/6753d0b361e252d724ffd0cb_hourglass-line.svg"
                    loading="eager"
                    alt=""
                    className="contact-meta-icon"
                  />
                  <div className="contaact-meta-title">Working hours</div>
                  <div className="contact-meta-text-wrap">
                    <div className="" style={{ fontSize:'17px', fontWeight:600, color: '#393935d1'}}>Mon - Thu: 11am - 7pm</div>
                      <div className="" style={{ fontSize:'17px', fontWeight:600, color: '#393935d1'}}>Sat: 11am - 2pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-1 col-12">
              <form
                action=""
                style={{
                  background: "#f9f9f9",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <div className="row">
                  <div className="col-md-6 col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        className="form-control mt-2"
                        placeholder="abc@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-12 mb-3">
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
    </>
  );
}
