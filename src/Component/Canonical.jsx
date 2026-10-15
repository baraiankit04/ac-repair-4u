import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://acrepair4u.vercel.app";

const Canonical = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath =
      pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${SITE_URL}${cleanPath}`;
  }, [pathname]);

  return null;
};

export default Canonical;