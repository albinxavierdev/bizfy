import "@fontsource/roboto";
import { useState } from "react";
import { Link } from "react-scroll";
const HeroContent = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 w-full p-5 font-roboto"
    >
      <h1 className="text-5xl mb-6 leading-[1.1] break-words px-2 md:text-7xl sm:text-2xl ">
        Unlock the <span className="italic font-pop">future</span> with{" "}
        <span className="italic font-pop">AI</span>.
      </h1>
      <p className="text-3xl font-normal mb-5 px-2 leading-relaxed md:text-xl md:font-light sm:text-sm hidden sm:block">
        We are <span className="italic font-pop">Bizfy Solutions</span>, an
        engineering team that designs and{" "}
        <span className="italic font-pop">builds Custom AI </span>solutions and
        experiences.
      </p>
      <div className="px-[25%] gap-2 sm:w-[20%] sm:px-[31%]">
        <div className="w-[45vw] sm:h-[8vh] sm:w-[35vw] gap-2 block sm:flex sm:gap-2">
          <button className="px-4 text-lg sm:w-[80%] mb-2 font-medium rounded border border-white/50 bg-transparent text-white hover:bg-white/20 hover:border-white/80 transform hover:-translate-y-1 transition-all duration-300">
            <Link
              to="services"
              smooth={true}
              duration={800}
              onClick={toggleMenu}
            >
              Our Services
            </Link>
          </button>
          <button className="px-4 text-lg sm:w-[80%] mb-2 font-medium rounded border border-white/50 bg-transparent text-white hover:bg-white/20 hover:border-white/80 transform hover:-translate-y-1 transition-all duration-300">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              onClick={toggleMenu}
            >
              Project Estimate
              </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
