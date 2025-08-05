import '../contact.css'
import Link from 'next/link';
export default function ContactForm() {
  return (
    <>
      <section className="section extra-padding-section">
        <div className="content-wrapper">
          <div className="contact-section-wrapper">
            <div className="contact-content-wrapper">
              <div className="contact-details-wrapper">
                <div className="contact-text-wrapper">
                  <h2 className="section-heading white-section-heading">
                    Contact Information
                  </h2>
                  <div className="contact-text">
                   <p>Dazzle Wheels is the best luxury car rental services in Dubai, we have a big fleet of 50 sports and luxury vehicles, we are known for the professional services we offer, We offer a wide range of supercars and luxury cars in the market for daily rental.</p>
                   <p>The difference is in the details and that’s why our car rental services are the best in town, with a team of experts and quality trained professionals in the tourism and automobile industry, we stand out for quality and good taste, to offer you with a unique experience, get in touch with us to know more.</p>
                  </div>
                </div>
                <div className="contact-info-wrapper">
                  <div className="contact-info">
                    <div className="contact-icon-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/67279c938c12755774eeb682_email.svg"
                        loading="lazy"
                        alt="Email Icon"
                        className="contact-icon"
                      />
                    </div>
                    <div className="contact-link-wrapper">
                      <div style={{ fontWeight:600}}>Email</div>
                      <Link
                        href="mailto:info@dazzlewheels.ae"
                        className="contact-link"
                        style={{ color:'#000000c7'}}
                      >
                        info@dazzlewheels.ae
                      </Link>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-icon-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/67043699dee425d32afcd59a/672797559ee5cba2b893093f_phone.svg"
                        loading="lazy"
                        alt="Phone Icon"
                        className="contact-icon"
                      />
                    </div>
                    <div className="contact-link-wrapper">
                      <div style={{ fontWeight:600}}>Phone</div>
                      <Link
                        href="tel:+971527277464"
                        className="contact-link"
                        style={{ color:'#000000c7'}}
                      >
                        +971-5272-77464
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <div className="contact-form-group w-form">
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    method="get"
                    className="contact-form"
                    data-wf-element-id="b100410b-6681-7a6c-76e6-7aa67f5607d3"
                    aria-label="Contact Form"
                  >
                    <div className="form-fields-wrapper">
                      <div
                        id="w-node-f1bc0165-1900-589e-9aff-1dc29122e5fb-4a6aa1cd"
                        className="label-field-wrapper"
                      >
                        <label htmlFor="First-Name" className="form-label">
                          First Name
                        </label>
                        <input
                          className="form-field w-input"
                          name="First-Name"
                          data-name="First Name"
                          placeholder="First Name"
                          type="text"
                          id="First-Name"
                        />
                      </div>
                      <div
                        id="w-node-_052f1539-a18c-23d4-053f-056528863371-4a6aa1cd"
                        className="label-field-wrapper"
                      >
                        <label htmlFor="Last-Name" className="form-label">
                          Last Name
                        </label>
                        <input
                          className="form-field w-input"
                          name="Last-Name"
                          data-name="Last Name"
                          placeholder="Last Name"
                          type="text"
                          id="Last-Name"
                        />
                      </div>
                      <div className="label-field-wrapper">
                        <label htmlFor="Email-Address" className="form-label">
                          Email Address
                        </label>
                        <input
                          className="form-field w-input"
                          name="Email-Address"
                          data-name="Email Address"
                          placeholder="example@email.com"
                          type="email"
                          id="Email-Address"
                        />
                      </div>
                      <div
                        id="w-node-_10ab0417-ad32-b980-8458-413251bec603-4a6aa1cd"
                        className="label-field-wrapper"
                      >
                        <label htmlFor="Phone-Number" className="form-label">
                          Phone Number
                        </label>
                        <input
                          className="form-field w-input"
                          name="Phone-Number"
                          data-name="Phone Number"
                          placeholder="+971 12 345 6789"
                          type="tel"
                          id="Phone-Number"
                        />
                      </div>
                      <div className="label-field-wrapper textArea">
                        <label htmlFor="Message" className="form-label">
                          Message
                        </label>
                        <textarea
                          placeholder="Provide details of your enquiry..."
                          id="Message"
                          name="Message"
                          data-name="Message"
                          className="form-textarea w-input"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-button-wrapper">
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        className="primary-button w-button"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="contact-image-wrapper"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
