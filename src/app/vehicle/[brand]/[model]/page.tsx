
import Detail from '../../components/Detail';
import { Suspense } from "react";

export default function VehicleDetails(){
    return(
        <>


              <Suspense fallback={<div>Loading...</div>}>
                <Detail />
                </Suspense> 

        </>
    )
}