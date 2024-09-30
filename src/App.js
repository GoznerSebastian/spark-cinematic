import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <section id='hero'>
                <Hero />
            </section>

            <br />
            <br />

            <section id='stats'>
                <Stats />
            </section>
            <section id='testimonials'>
                <Testimonials />
            </section>
            <section id='pricing'>
                <Pricing />
            </section>
            <section id='contact'>
                <Contact />
            </section>
            <Footer />
        </>
    );
}

export default App;
