"use client";
import "./BannerForm.css";

import { useEffect, useRef } from "react";

export default function BannerForm() {

  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const startTimeRef = useRef<HTMLInputElement | null>(null);
  const endTimeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const refs = [startDateRef, endDateRef, startTimeRef, endTimeRef];
    refs.forEach(ref => {
      if (ref.current) {
        // ✅ Only attach event if supported
        ref.current.addEventListener("click", () => {
          ref.current?.showPicker?.();
        });
      }
    });

    // Optional cleanup
    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          ref.current.removeEventListener("click", () => {
            ref.current?.showPicker?.();
          });
        }
      });
    };
  }, []);

  return (
    <>
      {/* <!-- Booking Search --> */}
      <section className="search_section clearfix" style={{marginBottom:'30px'}}>
        <div className="container">
          <div
            className="advance_search_form2 aos-init aos-animate"
            data-bg-color="#161616"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ backgroundColor: "#161616" }}
          >
            <form action="#">
              <div className="form_row_wrapper">
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">Start Date</h4>
                  <input type="date" className="form-control" name="start_date" ref={startDateRef} />
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">End Date</h4>
                  <input type="date" name="end_date" ref={endDateRef} />
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">Start Time</h4>
                  <input type="time" name="start_time" ref={startTimeRef} />
                </div>
                <div className="form_item_wrapper">
                  <h4 className="input_title text-white">End Time</h4>
                  <input type="time" name="end_time" ref={endTimeRef} />
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
