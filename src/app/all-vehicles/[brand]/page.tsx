import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import Listing from "../components/Listing";
import BrandName from "../components/BrandName";
import { Suspense } from 'react';
export default function AllVehicles() {
  return (
    <>
      <Header />

       <Suspense fallback={<div>Loading...</div>}>
                      <BrandName />
     
          <Listing />     
                    </Suspense>

     

    
      <Footer />
    </>
  );
}
