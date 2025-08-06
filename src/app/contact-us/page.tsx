import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import ContactForm from './components/ContactForm';
export default function Contact(){
    return(
        <>
            <Header />
            <section
        style={{
          backgroundImage:
            "linear-gradient(45deg, black, transparent),url('/img/contact-us-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          padding:'130px 0px',
          position:'relative'
        }}
      >
        <div style={{position:'absolute', backgroundColor:'rgba(0, 0, 0, 0.6)',inset:'0px',zIndex:1}}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 style={{ fontSize:'40px', color:'#1b1b1b', lineHeight:'1.25em', position:'relative',marginBottom:'0', zIndex:3, top:'50%'}}>
                <span style={{ color: '#FFF'}}>Contact Us</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
            <ContactForm />
            <Footer />
        </>
    )
}