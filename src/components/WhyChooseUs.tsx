export default function WhyChooseUs() {
  const features = [
    {
      icon: "fas fa-crown",
      title: "First Class Service",
      description: "We offer services, easy booking and instant delivery",
      img: '/img/11.png',
    },
    {
      icon: "fas fa-car",
      title: "Pick & Drop",
      description: "Free pickup and delivery across Dubai",
        img: '/img/12.png',
    },
    {
      icon: "fas fa-concierge-bell",
      title: "Extra Services",
      description: "We can help you with hotel bookings, leisure and yachts",
        img: '/img/13.png',
    },
    {
      icon: "fas fa-tools",
      title: "Car Support",
      description: "We’re here to assist you anytime, anywhere.",
        img: '/img/14.png',
    },
  ];

  return (
    <section style={{ padding: '5px 0px 10px 0px' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h2>What We Offer</h2>
          </div>
        </div>
        <div className="row">
          {features.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-12 mb-4"
            >
              <div className="text-center d-flex flex-column gap-3" style={{padding:'23px', boxShadow:'rgba(17, 17, 17, 0.07) 0px 10px 50px' , borderRadius:'10px', height:'220px'}}>
                {/* <i className={item.icon} style={{ fontSize: '20px' , background:'#E5AF3E', padding:'10px', borderRadius:'100%', height:'50px', width:'50px' , color:'#FFF', lineHeight:'inherit'}}></i> */}
                <img src={item.img} style={{width: '50px', height:'auto' , filter: 'invert(0) brightness(0)'}} />
                <h3 className="text-start" style={{color:'#161618',fontSize:'20px',fontWeight:600,lineHeight:'1.2em' , marginBottom:0}}>{item.title}</h3>
                <p className="text-start" style={{ fontSize:'15px' , lineHeight:'normal', color:'#393935'}}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
