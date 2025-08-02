export default function WhyChooseUs() {
  const features = [
    {
      icon: "fas fa-crown",
      title: "First Class Service",
      description: "We offer services, easy booking and instant delivery",
    },
    {
      icon: "fas fa-car-side",
      title: "Pick & Drop",
      description: "Free pickup and delivery across Dubai",
    },
    {
      icon: "fas fa-concierge-bell",
      title: "Extra Services",
      description: "We can help you with hotel bookings, leisure and yachts",
    },
    {
      icon: "fas fa-tools",
      title: "Car Support",
      description: "We’re here to assist you anytime, anywhere.",
    },
  ];

  return (
    <section style={{ padding: '5px 0px 10px 0px' }}>
      <div className="container">
        <div className="row">
          {features.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-12 mb-4"
            >
              <div className="text-center d-flex flex-column gap-3" style={{padding:'5px'}}>
                <i className={item.icon} style={{ fontSize: '50px'}}></i>
                <h3 style={{color:'#161618',fontSize:'25px',fontWeight:500,lineHeight:'1.2em'}}>{item.title}</h3>
                <p style={{ fontSize:'20px' , lineHeight:'normal', color:'#393935'}}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
