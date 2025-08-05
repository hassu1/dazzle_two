import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import ContactForm from './components/ContactForm';
export default function Contact(){
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
            <ContactForm />
            <Footer />
        </>
    )
}