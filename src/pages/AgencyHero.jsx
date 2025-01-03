import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AgencyHero = () => {
  useEffect(() => {
    if (window.innerWidth > 480) {
      const agencyText = document.querySelector('.agencyText');
      const text = new SplitType(agencyText, { types: 'chars' });

      gsap.fromTo(
        text.chars,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          delay: 0.1,
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: agencyText,
            start: 'top 60%',
            end: 'top 30%',
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <div id='about' className= "agencyText bg-[#01111f] h-full flex items-center justify-start py-20 px-8 overflow-hidden">
      <div className="w-full text-start">
        <div className="mt-4">
          <h1 className="text-[1.5rem] font-normal text-white leading-tight mb-4 md:text-[3.5rem]">
            We&apos;re a <span className="text-[#0E62A6] font-semibold">full-service</span> AI Consulting & <br />
            Developer Partner
            <span className="text-[1.5rem] sm:text-[3rem] w-14 sm:w-20 h-12 rounded-[20px] inline-block text-center">👋</span>
            <span>We turn businesses into AI-</span>
            <br />
            <span className="text-[#0E62A6] font-semibold">driven</span>
            <span className="text-[1.5rem] sm:text-[3rem] w-14 sm:w-20 h-12 rounded-[20px] inline-block text-center">✨</span>
            <span>industry leaders.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AgencyHero;
