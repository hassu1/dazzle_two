"use client";
import "./BannerForm.css";

import React, { useEffect, useRef , useState} from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default function BannerForm() {


const startDateRef = useRef<HTMLInputElement>(null);
const endDateRef = useRef<HTMLInputElement>(null);
const startTimeRef = useRef<HTMLInputElement>(null);
const endTimeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  if (startDateRef.current) {
    flatpickr(startDateRef.current, {
      dateFormat: 'Y-m-d',
       minDate: "today"
    });
  }

  if (endDateRef.current) {
    flatpickr(endDateRef.current, {
      dateFormat: 'Y-m-d',
       minDate: "today"
    });
  }

  if (startTimeRef.current) {
    flatpickr(startTimeRef.current, {
      enableTime: true,
      noCalendar: true,
         dateFormat: 'h:i K',
      time_24hr: false,
    });
  }

  if (endTimeRef.current) {
    flatpickr(endTimeRef.current, {
      enableTime: true,
      noCalendar: true,
          dateFormat: 'h:i K',
      time_24hr: false,
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
            style={{ backgroundColor: "rgb(22 22 22 / 88%)" }}
          >
            <form action="#">
              <div className="form_row_wrapper">
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">Start Date</h4>
                   <div className="custom-input-wrapper" style={{ overflow:'hidden'}}>
                              <input type="text" ref={startDateRef} placeholder="Select date" className="form-control" />
                              <i className="fa fa-calendar-alt"></i>
                     </div>
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">End Date</h4>
                   <div className="custom-input-wrapper">
                             <input type="text" ref={endDateRef} placeholder="Select date" className="form-control" />
                              <i className="fa fa-calendar-alt"></i>
                            </div>
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">Start Time</h4>
                   <div className="custom-input-wrapper">
                             <input type="text" ref={startTimeRef} placeholder="Select time" className="form-control" />
                              <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">End Time</h4>
                   <div className="custom-input-wrapper">
                             <input type="text" ref={endTimeRef} placeholder="Select time" className="form-control" />
                              <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                </div>
                <div className="form_item_wrapper">
                  <button
                    type="submit"
                    className="custom_btn bg_default_red text-uppercase"
                  >
                    Find A Car
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
