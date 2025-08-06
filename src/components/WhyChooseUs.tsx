export default function WhyChooseUs() {
  const features = [
    {
      icon: "flaticon-car-4",
      title: "First Class Service",
      description: "We offer services, easy booking and instant delivery",
     
        img: 'https://cdn-icons-png.flaticon.com/512/2359/2359603.png',

    },
    {
      icon: "flaticon-fix-sign",
      title: "Pick & Drop",
      description: "Free pickup and delivery across Dubai",
         img: '      https://cdn-icons-png.flaticon.com/512/3312/3312677.png  ',
    },
    {
      icon: "flaticon-car-3",
      title: "Extra Services",
      description: "We can help you with hotel bookings, leisure and yachts",
        img: 'https://cdn-icons-png.flaticon.com/512/11501/11501789.png ',
        
    },
    {
      icon: "flaticon-car-2",
      title: "Car Support",
      description: "We’re here to assist you anytime, anywhere.",
        img: 'https://cdn-icons-png.flaticon.com/512/4961/4961759.png  ',
    },
  ];

  return (
    <section style={{ padding: '40px 0' }}>
  <div className="container">
    <div className="row mb-4">
      <div className="col-md-12 text-center">
        <h2 className="section-heading center">What We Offer</h2>
      </div>
    </div>

    <div className="row">
      {features.map((item, i) => (
        <div key={i} className="col-lg-3 col-md-6 col-12 mb-4">
          <div className="feature-card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
