export default function StatsSection() {
  const stats = [
    { value: "15+", label: "Happy customers who have trusted us" },
    { value: "99%", label: "Our customers agree with our offer value" },
    { value: "5,000+", label: "Trusted by thousands of satisfied clients" },
    { value: "24/7", label: "Our dedicated support team is available" },
  ];

  return (
    <section className="p-5">
      <div className="container-fluid">
        <div className="row text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`col-6 col-md-3 d-flex flex-column justify-content-center align-items-center ${
                index !== stats.length - 1 ? 'border-endd' : ''
              }`}
            >
              <h2 style={{ marginBottom:'10px', fontSize:'60px',fontWeight:500,lineHeight:'1.2em'}}>{item.value}</h2>
              <p className="para_p" style={{fontSize:'20px'}}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
