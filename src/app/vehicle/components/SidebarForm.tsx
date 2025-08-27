"use client";
import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function SidebarForm({ data }: { data: Car }) {
  const params = useParams();
  const brand = Array.isArray(params.brand) ? params.brand[0] : params.brand;
  const model = Array.isArray(params.model) ? params.model[0] : params.model;

  // Always declare hooks at top level
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startDateRef.current) {
      flatpickr(startDateRef.current, {
        dateFormat: "Y-m-d",
        minDate: "today",
        disableMobile: true,
      });
    }

    if (endDateRef.current) {
      flatpickr(endDateRef.current, {
        dateFormat: "Y-m-d",
        minDate: "today",
        disableMobile: true,
      });
    }

    if (startTimeRef.current) {
      flatpickr(startTimeRef.current, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false,
        disableMobile: true,
      });
    }

    if (endTimeRef.current) {
      flatpickr(endTimeRef.current, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false,
        disableMobile: true,
      });
    }
  }, []);

  if (!brand || !model) {
    return (
      <>
        <section
          className="m20"
          style={{
            backgroundImage:
              "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
          }}
        ></section>
        <div
          className="text-center py-40 text-white"
          style={{ paddingTop: "200px" }}
        >
          <h1 className="text-dark">Car Not Found</h1>
          <p className="text-dark">
            The vehicle you are looking for does not exist.
          </p>
        </div>
      </>
    );
  }
  
    return(
        <>
                <div className="vehicleDetaiBox">
                    <div className="row flexDirectionColumnReverse">
                        <div className="col-md-12">
                            <div className="item">
                                <h4>
                                  {" "}
                                  <Image
                                    width={35}
                                    height={35}
                                    alt=""
                                    src="/img/dirham.png"
                                    style={{
                                      marginTop: "-5px",
                                      marginRight: "-9px",
                                    }}
                                  />{" "}
                                    {Math.floor(Number(data?.daily_rate))} <span style={{fontWeight:700}}>/ Rent Per Day</span>
                                </h4>
                              </div>
            

                              <div
                                className="p-4 d-flex flex-column gap-4 mb-3"
                                style={{ backgroundColor: "#161616", borderBottomLeftRadius:'20px', borderBottomRightRadius:'20px' }}
                              >
                                <h3
                                  style={{
                                    fontSize: "22px",
                                    fontWeight: 700,
                                    lineHeight: "130%",
                                    textTransform: "uppercase",
                                    color: "#FFF",
                                  }}
                                  className="mb-1"
                                >
                                  Booking Form
                                </h3>
            
                                <form action="">
                                  <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                                      <div className="form-group">
                                        <label
                                          htmlFor=""
                                          style={{
                                            fontWeight: 600,
                                            color: "#FFF",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          Start Date
                                        </label>
                                        <div className="custom-input-wrapper" style={{ overflow:'hidden'}}>
                                          <input type="text" ref={startDateRef} placeholder="Select date" className="form-control" />
                                          <i className="fa fa-calendar-alt"></i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                                      <div className="form-group">
                                        <label
                                          htmlFor=""
                                          style={{
                                            fontWeight: 600,
                                            color: "#FFF",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          End Date
                                        </label>
                                         <div className="custom-input-wrapper">
                                         <input type="text" ref={endDateRef} placeholder="Select date" className="form-control" />
                                          <i className="fa fa-calendar-alt"></i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                                      <div className="form-group">
                                        <label
                                          htmlFor=""
                                          style={{
                                            fontWeight: 600,
                                            color: "#FFF",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          Start Time
                                        </label>
                                        <div className="custom-input-wrapper">
                                         <input type="text" ref={startTimeRef} placeholder="Select time" className="form-control" />
                                          <i className="fa-solid fa-clock-rotate-left"></i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                                      <div className="form-group">
                                        <label
                                          htmlFor=""
                                          style={{
                                            fontWeight: 600,
                                            color: "#FFF",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          End Time
                                        </label>
                                        <div className="custom-input-wrapper">
                                         <input type="text" ref={endTimeRef} placeholder="Select time" className="form-control" />
                                          <i className="fa-solid fa-clock-rotate-left"></i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                                      <div className="form-group">
                                        <label
                                          htmlFor=""
                                          style={{
                                            fontWeight: 600,
                                            color: "#FFF",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Your Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-2">
                                      <div className="form-group">
                                        <label
                                          htmlFor=""
                                          className="custom-field one"
                                          style={{
                                            fontWeight: 600,
                                            color: "#FFF",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          Email
                                        </label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Your Email"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                      <div className="form-group">
                                        <label
                                          htmlFor=""
                                          style={{
                                            fontWeight: 600,
                                            color: "#FFF",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          Contact Number
                                        </label>
                                        <input
                                          type="tel"
                                          className="form-control"
                                          placeholder="Your Contact Number"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                                      <div className="form-group">
                                        <button
                                          className="customButton w-100"
                                          style={{ borderRadius: "20px" }}
                                        >
                                          Book Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            
                        </div>
                        <div className="col-md-12">
                             <div
                                className="bg-white p-4 d-flex flex-column gap-4 mb-3"
                                style={{ borderRadius: "20px" }}
                              >
                                <h3
                                  style={{
                                    fontSize: "22px",
                                    fontWeight: 700,
                                    lineHeight: "130%",
                                    textTransform: "uppercase",
                                  }}
                                  className="mb-1"
                                >
                                  Car Details
                                </h3>
                                <div className="row">
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="car-benefits-wrapper">
                                      <div className="benefit-wrapper">
                                        <i className="fa fa-money-bill" style={{padding:'5px', color:'#e5af3e', fontSize:'15px', marginLeft:'5px'}}></i>
                                        <div className="benefit-name" style={{marginLeft:'-5px'}}>
                                            {Math.floor(Number(data?.deposit))} Deposit</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="car-benefits-wrapper">
                                      <div className="benefit-wrapper">
                                           <Image
                                                                  src="/img/sd/icons-7-8-25-4.png"
                                                                  alt="Engine"
                                                                  width={20}
                                                                  height={20}
                                                                  style={{width:'5%',height:'auto', marginLeft:'0.6rem'}}
                                                                />
                                        {/* <i className="flaticon-gas" style={{padding:'5px', color:'#e5af3e', fontSize:'15px', marginLeft:'5px'}}></i> */}
                                        <div className="benefit-name">{data?.daily_mileage}KM/Day</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="car-benefits-wrapper">
                                      <div className="benefit-wrapper">
                                          <Image
                                                                  src="/img/sd/icons-7-8-25-2.png"
                                                                  alt="Engine"
                                                                  width={20}
                                                                  height={20}
                                                                  style={{width:'5%',height:'auto', marginLeft:'0.6rem'}}
                                                                />
                                                                   {/* <i className="fas fa-engine" style={{padding:'5px', color:'#e5af3e', fontSize:'15px'}}></i> */}
                                        <div className="benefit-name">{data?.engine} Engine</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="car-benefits-wrapper">
                                      <div className="benefit-wrapper">
                                           <Image
                                                                  src="/img/sd/icons-7-8-25-5.png"
                                                                  alt="Engine"
                                                                  width={20}
                                                                  height={20}
                                                                  style={{width:'5%',height:'auto', marginLeft:'0.6rem'}}
                                                                />
                                                                   {/* <i className="omfi-passengers" style={{padding:'5px', color:'#e5af3e', fontSize:'15px', marginLeft:'5px'}}></i> */}
                                        <div className="benefit-name">{data?.seats} Seats</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="car-benefits-wrapper">
                                      <div className="benefit-wrapper">
                                            <Image
                                                                  src="/img/sd/icons-7-8-25-3.png"
                                                                  alt="Engine"
                                                                  width={20}
                                                                  height={20}
                                                                  style={{width:'5%',height:'auto', marginLeft:'0.6rem'}}
                                                                />
                                                                   {/* <i className="omfi-door" style={{padding:'5px', color:'#e5af3e', fontSize:'15px', marginLeft:'5px'}}></i> */}
                                        <div className="benefit-name">{data?.doors} Doors</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="car-benefits-wrapper">
                                      <div className="benefit-wrapper">
                                          <Image
                                                                  src="/img/sd/icons-7-8-25-6.png"
                                                                  alt="Engine"
                                                                  width={20}
                                                                  height={20}
                                                                  style={{width:'5%',height:'auto', marginLeft:'0.6rem'}}
                                                                />
                                                                   {/* <i className="fa omfi-luggage" style={{padding:'5px', color:'#e5af3e', fontSize:'15px', marginLeft:'5px'}}></i> */}
                                        <div className="benefit-name">{data?.luggage} Luggage</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                              
            
                             
                            </div>
        </>
    )
}