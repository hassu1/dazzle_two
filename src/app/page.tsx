import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import Banner from "@components/components/Banner";
import BannerForm from "@components/components/BannerForm";
import Sponsor from "@components/components/Sponsor";
import CarCategory from "@components/components/CarCategory";
import OurFleet from "@components/components/OurFleet";
import WhyChooseUs from "@components/components/WhyChooseUs";
import Steps from "@components/components/Steps";
import Testimonal from "@components/components/Testimonal";
import CompanyLocation from "@components/components/CompanyLocation";
import Gallery from "@components/components/Gallery";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <BannerForm />
      <Sponsor />
      <CarCategory />
      <OurFleet />
      <WhyChooseUs />
      <Steps />
      <Testimonal />
      <CompanyLocation />
      <Gallery />
      <Footer />
    </>
  );
}
