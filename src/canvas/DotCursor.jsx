import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const DotCursor = () => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile state based on screen width
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      return; // Don't initialize cursor events on mobile
    }

    const cursorElement = cursorRef.current;

    const handleMouseMove = (event) => {
      gsap.to(cursorElement, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
        ease: "power4.in.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile && <div ref={cursorRef} className="cursor"></div>}
    </>
  );
};

export default DotCursor;
