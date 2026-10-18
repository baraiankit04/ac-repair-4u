import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollAnimation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 65,
      delay: 0,
      mirror: false,
      disableMutationObserver: false,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
};

export default ScrollAnimation;