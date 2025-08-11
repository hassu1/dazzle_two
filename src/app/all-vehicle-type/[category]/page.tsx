import Header from "@components/components/Header";
import VehicleType from "../components/VehicleType";
import Footer from "@components/components/Footer";
import { Suspense } from "react";

export default function AllTypeVehicle(){
    return(
        <>
            <Header />
            
              <Suspense fallback={<div>Loading...</div>}>
                    <VehicleType />
              </Suspense> 
     
            <Footer />
        </>
    )
}