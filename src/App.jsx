import { useEffect } from "react";
import Navbar from "./pages/Navbar";
import HeroContent from "./pages/HeroContent";
import AgencyHero from "./pages/AgencyHero";
import Process from "./pages/Process";
import ServicesSection from "./pages/ServicesSection";
// import Testimonial from "./pages/Testimonial";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Circle from "./canvas/Circle";
import StarryBackground from "./canvas/StarryBackground";
import DotCursor from "./canvas/DotCursor";
import Projects from "./pages/Projects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="relative h-full w-full overflow-hidden bg-[#01111f] ">
        <DotCursor />
        <Navbar className="z-10" />
        <div
          id="hero"
          className="relative z-10 h-screen"
        >
          <StarryBackground className="absolute inset-0 z-[-2]" />
          <Circle />
          <HeroContent />
        </div>
        <div id="agency" className="mt-20">
          <AgencyHero />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        {/* <div id="testimonials">
          <Testimonial />
        </div> */}
        <div id='projects'>
          <Projects/>
        </div>
        <div id="contact us">
          <ContactPage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
