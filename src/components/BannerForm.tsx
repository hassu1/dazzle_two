"use client";
import "./BannerForm.css";

import React, { useEffect, useRef , useState} from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Image from 'next/image';

export default function BannerForm() {


const startDateRef = useRef<HTMLInputElement>(null);
const endDateRef = useRef<HTMLInputElement>(null);
const startTimeRef = useRef<HTMLInputElement>(null);
const endTimeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  if (startDateRef.current) {
    flatpickr(startDateRef.current, {
      dateFormat: 'Y-m-d',
       minDate: "today",
        disableMobile: true,
    });
  }

  if (endDateRef.current) {
    flatpickr(endDateRef.current, {
      dateFormat: 'Y-m-d',
       minDate: "today",
        disableMobile: true,
    });
  }

  if (startTimeRef.current) {
    flatpickr(startTimeRef.current, {
      enableTime: true,
      noCalendar: true,
         dateFormat: 'h:i K',
      time_24hr: false,
       disableMobile: true,
    });
  }

  if (endTimeRef.current) {
    flatpickr(endTimeRef.current, {
      enableTime: true,
      noCalendar: true,
          dateFormat: 'h:i K',
      time_24hr: false,
       disableMobile: true,
    });
  }
}, []);



  return (
    <>
      {/* <!-- Booking Search --> */}
      <section className="search_section clearfix" style={{marginBottom:'30px'}}>
        <div className="container">
          <div
            className="advance_search_form2 aos-init aos-animate"
            data-bg-color="rgb(22 22 22 / 88%)"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <form action="#" style={{borderRadius:'10px', padding:'10px', background:'#f6f6f6'}}>
              <div className="form_row_wrapper">
                <div className="form_item_wrapper">
                  <h4 className="input_title text-dark"> <i className="fa-light fa-calendar-alt"></i>Start Date</h4>
                   <div className="custom-input-wrapper d-flex align-items-center" style={{ overflow:'hidden'}}>
                              <input type="text" ref={startDateRef} placeholder="Choose Your Date" className="form-control" />
                              {/* <i className="fa-light fa-plus"></i> */}
                              <Image alt="" src={'/img/arrow.svg'} width={15} height={15} style={{filter:'contrast(2%)'}}/>
                     </div>
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-dark"><i className="fa-light fa-calendar-alt"></i>End Date</h4>
                   <div className="custom-input-wrapper d-flex align-items-center" style={{ overflow:'hidden'}}>
                             <input type="text" ref={endDateRef} placeholder="Choose Your Date" className="form-control" />
                              <Image alt="" src={'/img/arrow.svg'} width={15} height={15} style={{filter:'contrast(2%)'}}/>
                            </div>
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-dark"><i className="fa-light fa-clock-rotate-left"></i>Start Time</h4>
                   <div className="custom-input-wrapper d-flex align-items-center" style={{ overflow:'hidden'}}>
                             <input type="text" ref={startTimeRef} placeholder="Choose Your Time" className="form-control" />
                              <Image alt="" src={'/img/arrow.svg'} width={15} height={15} style={{filter:'contrast(2%)'}}/>
                            </div>
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-dark"><i className="fa-light fa-clock-rotate-left"></i>End Time</h4>
                   <div className="custom-input-wrapper d-flex align-items-center" style={{ overflow:'hidden'}}>
                             <input type="text" ref={endTimeRef} placeholder="Choose Your Time" className="form-control" />
                              <Image alt="" src={'/img/arrow.svg'} width={15} height={15} style={{filter:'contrast(2%)'}}/>
                            </div>
                </div>
                <div className="form_item_wrapper">
                  <button
                    type="submit"
                    className="custom_btn bg_default_red"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
