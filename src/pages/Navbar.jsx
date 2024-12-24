import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-4 py-2 h-[70px]  backdrop-blur-md text-white z-50">
      {/* Logo */}
      <div className="navbar-logo">
        <span className={`transition-all duration-300 ${isMenuOpen ? "w-[250px] h-[50px]" : "w-[200px] h-[40px]"}`}>
          <img src="/white logo-02.png" alt="Logo" className=" object-contain w-fit h-10" />
        </span>
      </div>

      {/* Menu Icon */}
      <div className="block lg:hidden cursor-pointer" onClick={toggleMenu}>
        <div className={`w-6 h-[3px] bg-white mb-1.5 transition-transform ${isMenuOpen ? "transform translate-y-2 rotate-45" : ""}`}></div>
        <div className={`w-6 h-[3px] bg-white mb-1.5 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></div>
        <div className={`w-6 h-[3px] bg-white transition-transform ${isMenuOpen ? "transform -translate-y-2 -rotate-45" : ""}`}></div>
      </div>

      {/* Navlinks */}
      <div
        className={`absolute top-[70px] right-0 backdrop-blur-sm bg-slate-700 sm:bg-transparent lg:static lg:flex lg:flex-row lg:gap-5 lg:items-center lg:py-0 py-4 px-6 flex-col text-center w-full lg:w-auto transition-all duration-300 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {["hero", "agency", "process", "services", "testimonials", "contact"].map((item, index) => (
          <Link
            key={index}
            to={item}
            smooth={true}
            duration={800}
            onClick={toggleMenu}
            className="text-white text-3xl lg:text-sm px-2 py-1 hover:text-blue-500 transition-colors cursor-pointer"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="hidden lg:block">
        <button className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white/30 rounded-lg hover:bg-gray-700 hover:border-white/70 transition-all">
          Buy this template
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
