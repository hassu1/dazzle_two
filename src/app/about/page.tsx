import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";

import WhyChooseUs from "@components/components/WhyChooseUs";
import Testimonal from "@components/components/Testimonal";
import Sponsor from "@components/components/Sponsor";
import "./about.css";
import AboutBg from "./components/AboutBg";

export default function About() {
  return (
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
      <AboutSection />
      <StatsSection />
      <AboutBg />
      <div className="mt-5">
        <WhyChooseUs />
      </div>
      <Testimonal />
      <Sponsor />

      <Footer />
    </>
  );
}
