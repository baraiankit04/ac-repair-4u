
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://acrepair4u.vercel.app";
const SITE_NAME = "AC Repair 4U";

const setMeta = (attribute, key, content) => {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

export default function SEO({
  title,
  description,
  keywords = [],
  image = "/images/heroac.jpg",
  noindex = false,
  schema = null,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonical = `${SITE_URL}${path}`;

    const fullTitle = title
      ? title.includes(SITE_NAME)
        ? title
        : `${title} | ${SITE_NAME}`
      : SITE_NAME;

    const finalDescription =
      description ||
      "AC repair, servicing, gas filling, installation and maintenance across Mumbai, Navi Mumbai and Thane.";

    document.title = fullTitle;

    setMeta("name", "description", finalDescription);
    setMeta("name", "robots", noindex ? "noindex,follow" : "index,follow");

    if (keywords.length) {
      setMeta("name", "keywords", keywords.join(", "));
    }

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", finalDescription);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", `${SITE_URL}${image}`);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", finalDescription);
    setMeta("name", "twitter:image", `${SITE_URL}${image}`);

    let link = document.head.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }

    link.href = canonical;

    const oldSchema = document.getElementById("page-jsonld");
    if (oldSchema) oldSchema.remove();

    if (schema) {
      const script = document.createElement("script");
      script.id = "page-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById("page-jsonld")?.remove();
    };
  }, [pathname, title, description, image, noindex, schema, keywords.join("|")]);

  return null;
}
