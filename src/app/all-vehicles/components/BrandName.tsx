'use client';

import { useParams } from 'next/navigation';

export default function BrandName(){
      const { brand } = useParams<{ brand: string | string[] }>(); // Type for `useParams` to ensure we get a valid brand value

  // Ensure brand is a single string, if it's an array, pick the first one
  const brandName = Array.isArray(brand) ? brand[0] : brand;

  // Capitalize the first letter of the brand name
  const capitalizedBrand = brandName
    ? brandName.charAt(0).toUpperCase() + brandName.slice(1).toLowerCase()
    : 'All Vehicles';
    return(
        <>
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
                                <span>{capitalizedBrand ? `${capitalizedBrand} Vehicles` : 'All Vehicles'}</span>
                            </h1>
                        </div>
                      </div>
                    </div>
                  </section>
        </>
    )
}