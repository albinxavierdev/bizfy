const Footer = () => {
    return (
        <div className="flex flex-col min-h-[80vh] bg-[#01111f] text-white py-8 sticky z-[120]">
            {/* Header Section */}
            <header className="flex justify-between px-8 py-8">
                <h1 className="text-4xl font-medium hidden sm:block" data-aos="fade-right">Let&apos;s talk.</h1>
                <a
                    href="mailto:mail@nebula.com"
                    className="text-4xl relative hover:after:w-full hover:after:bg-[#0E62A6] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:transition-all"
                    data-aos="fade-left"
                >
                    mail<span className="text-[#0E62A6]">@</span>bizfy.com
                </a>
            </header>

            {/* Footer Section */}
            <footer className="mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 border-t border-gray-700 pt-8">
                    {/* Contact Info Column */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[#0E62A6]">© 2024</p>
                        <a href="mailto:mail@nebula.com" className="hover:text-[#0E62A6]">
                            mail@bizfy.com
                        </a>
                        <a href="tel:+31202439223" className="hover:text-[#0E62A6]">
                            +31 (0) 20 343 9223
                        </a>
                        <p className="text-gray-400">Local time: 12:36:00 (CET)</p>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col gap-2 border-t md:border-none pt-4 md:pt-0">
                        <a href="#process" className="hover:text-[#0E62A6]">Process</a>
                        <a href="#services" className="hover:text-[#0E62A6]">Services</a>
                        <a href="#work" className="hover:text-[#0E62A6]">Work</a>
                        <a href="#plans" className="hover:text-[#0E62A6]">Plans</a>
                        <a href="#team" className="hover:text-[#0E62A6]">Team</a>
                        <a href="#contact" className="hover:text-[#0E62A6]">
                            Contact <span className="transform rotate-45">↗</span>
                        </a>
                        <a href="#404" className="hover:text-[#0E62A6]">404</a>
                    </div>

                    {/* Social Links Column */}
                    <div className="hidden md:flex flex-col gap-2">
                        <a href="#linkedin" className="hover:text-[#0E62A6]">LinkedIn</a>
                        <a href="#twitter" className="hover:text-[#0E62A6]">Twitter</a>
                        <a href="#instagram" className="hover:text-[#0E62A6]">Instagram</a>
                        <a href="#dribbble" className="hover:text-[#0E62A6]">Dribbble</a>
                    </div>

                    {/* Credits Column */}
                    <div className="flex flex-col gap-2 border-t md:border-none pt-4 md:pt-0">
                        <p>Template by</p>
                        <p>Tibor Bregman</p>
                        <p>BlueStar Supply</p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-8">
                    <div className="opacity-50 w-1/3 max-w-[400px]">
                        <img src="/white logo-02.png" alt="Brand-logo" className="w-full" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
