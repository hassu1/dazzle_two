import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import Listing from '../components/Listing';
export default function AllVehicles(){
    return(
        <>
            <Header />
            <section
      style={{
        backgroundImage: "linear-gradient(45deg, black, transparent),url('/img/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
      }}
    >
    </section>
            <Listing />
            <Footer />
        </>
    )
}