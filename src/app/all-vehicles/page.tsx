import { Suspense } from "react";
import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import AllListing from "./components/AllListing";

export default function VehicleAll() {
  return (
    <>
      <Header />
      <section
        className="m20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, black, transparent),url('/img/all-vechicle-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          padding: "130px 0px",
          position: "relative",
        }}
      >
        <div
          className="borderRadius-20"
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            inset: "0px",
            zIndex: 1,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-title text-white modern-heading">
                <span>All Vehicles</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <AllListing />
      </Suspense>
      <Footer />
    </>
  );
}
