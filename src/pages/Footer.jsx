const Footer = () => {
    return (
        <div className="flex flex-col min-h-[80vh] bg-[#01111f] text-white py-8 sticky z-[120]">
            {/* Header Section */}
            <header className="flex justify-between px-8 py-8">
                <h1 className="text-4xl font-medium hidden sm:block" data-aos="fade-right">Let&apos;s talk <span className="text-blue-600">Business</span></h1>
                <a
                    href="mailto:info@bizfy.in"
                    className="text-4xl relative hover:after:w-full hover:after:bg-[#0E62A6] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:transition-all"
                    data-aos="fade-left"
                >
                    info<span className="text-[#0E62A6]">@</span>bizfy.com
                </a>
            </header>

            {/* Footer Section */}
            <footer className="mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 border-t border-gray-700 pt-8">
                    {/* Contact Info Column */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[#0E62A6]">© 2024</p>
                        <a href="mailto:info@bizfy.in" className="hover:text-[#0E62A6]">
                            info@bizfy.in
                        </a>
                        <a href="tel:+918878789891" className="hover:text-[#0E62A6]">
                            +91 88787-89891
                        </a>
                        {/* <p className="text-gray-400">Local time: 12:36:00 (CET)</p> */}
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col gap-2 border-t md:border-none pt-4 md:pt-0">
                        <a href="#services" className="hover:text-[#0E62A6]">Services</a>
                        <a href="#process" className="hover:text-[#0E62A6]">Process</a>
                        <a href="#projects" className="hover:text-[#0E62A6]">Projects</a>
                        <a href="#plans" className="hover:text-[#0E62A6]">Careers</a>
                        {/* <a href="#team" className="hover:text-[#0E62A6]">Team</a>
                        <a href="#contact" className="hover:text-[#0E62A6]">
                            Contact <span className="transform rotate-45">↗</span>
                        </a>
                        <a href="#404" className="hover:text-[#0E62A6]">404</a> */}
                    </div>

                            {/* Credits Column */}
                    <div className="flex flex-col gap-2 border-t md:border-none pt-4 md:pt-0">
                    <a href="#about" className="hover:text-[#0E62A6]">About Us</a>
                    <a href="#contact" className="hover:text-[#0E62A6]">Contact Us</a>
                    <a href="#privacy" className="hover:text-[#0E62A6]">Privacy Policy</a>
                    <a href="#t&c" className="hover:text-[#0E62A6]">Terms & Conditions</a>
                    </div>

                    {/* Social Links Column */}
                    <div className="hidden md:flex flex-col gap-2">
                        <a href="https://www.linkedin.com/company/bizfysolutions/" className="hover:text-[#0E62A6]">LinkedIn</a>
                        <a href="https://www.instagram.com/bizfysolutions" className="hover:text-[#0E62A6]">Instagram</a>
                        <a href="https://www.facebook.com/bizfysolutions" className="hover:text-[#0E62A6]">Facebook</a>
                        <a href="https://x.com/bizfysolutions?s=09" className="hover:text-[#0E62A6]">X</a>
                        {/* <a href="#" className="hover:text-[#0E62A6]">YouTube</a> */}
                    </div>

                    
                </div>

                <div className="flex justify-center items-center mt-8">
                    <div className="opacity-80 w-1/3 max-w-[500px]">
                        <img src="/white logo-02.png" alt="Brand-logo" className="w-full" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
