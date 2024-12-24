import "@fontsource/roboto";

const HeroContent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 w-full p-5 font-roboto">
      <h1 className="text-5xl mb-6 leading-[1.1] break-words px-2 md:text-7xl sm:text-2xl ">
        Driving growth with AI.
      </h1>
      <p className="text-3xl font-normal mb-5 px-2 leading-relaxed md:text-xl md:font-light sm:text-sm hidden sm:block">
        We craft workflow automation and bespoke AI solutions for
        forward-thinking companies.
      </p>
      <div className="sm:ml-[36%] sm:w-[20%] flex flex-col flex-wrap gap-4">
        <button className="px-6 py-3 mx-20 text-lg font-medium rounded border border-white/50 bg-transparent text-white hover:bg-white/20 hover:border-white/80 transform hover:-translate-y-1 transition-all duration-300 sm:px-4 sm:py-2 sm:w-4/5">
          Our Services
        </button>
        <button className="px-6 py-3 mx-20 text-lg font-medium rounded border border-white/50 bg-transparent text-white hover:bg-white/20 hover:border-white/80 transform hover:-translate-y-1 transition-all duration-300 sm:px-4 sm:py-2 sm:w-4/5">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
