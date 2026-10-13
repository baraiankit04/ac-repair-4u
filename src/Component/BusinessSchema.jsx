
import { useEffect } from "react";

const BusinessSchema = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.id = "acrepair-business-schema";
    script.type = "application/ld+json";

    const schema = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "@id": "https://acrepair4u.vercel.app/#business",
      name: "AC Repair 4U",
      url: "https://acrepair4u.vercel.app/",
      description:
        "AC repair, servicing, gas filling, installation, cleaning and maintenance services across Mumbai, Navi Mumbai and Thane.",
      areaServed: [
        {
          "@type": "City",
          name: "Mumbai"
        },
        {
          "@type": "City",
          name: "Navi Mumbai"
        },
        {
          "@type": "City",
          name: "Thane"
        }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AC Repair and Maintenance Services",
        itemListElement: [
          "AC Repair",
          "AC Servicing",
          "AC Gas Filling",
          "AC Installation",
          "AC Deep Cleaning",
          "AC Maintenance"
        ].map((service) => ({
          "@type": "OfferCatalog",
          name: service
        }))
      }
    };

    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(
        "acrepair-business-schema"
      )?.remove();
    };
  }, []);

  return null;
};

export default BusinessSchema;
