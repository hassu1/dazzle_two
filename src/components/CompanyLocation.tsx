export default function CompanyLocation() {
  return (
    <>
      {/* <!--================== S-GMAP ==================--> */}
      <section className="s-instagram s-dark-instagram" style={{margin:'20px', borderRadius:'20px'}}>
        <div id="map" className="cont-map">
          <iframe
            className=""
            width="100%"
            height="515"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2661945287937!2d55.28672631500947!3d25.1942439838976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b085cce46d2441e!2sMillennium%20Central%20Downtown!5e0!3m2!1sen!2s!4v1643803305865!5m2!1sen!2s"
            style={{ border: 0  , borderRadius:'10px'}}
            loading="lazy"
          ></iframe>
        </div>
      </section>
      {/* <!--================ S-GMAP END ================--> */}
    </>
  );
}
