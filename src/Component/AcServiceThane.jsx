
import React from "react";
import LocalServicePage from "./LocalServicePage";

const AcServiceThane = () => {
  return (
    <LocalServicePage
      city="Thane"
      title="AC Repair & Servicing in Thane | AC Repair 4U"
      description="Need AC repair near you in Thane? Request AC servicing, gas filling, installation, cleaning and maintenance in Thane West, Majiwada, Wagle Estate and nearby areas."
      intro="AC Repair 4U accepts AC service enquiries across Thane. Whether your AC is not cooling, needs regular servicing or requires installation, you can submit a booking request and confirm service availability with our team."
      areas={[
        "Thane West",
        "Thane East",
        "Majiwada",
        "Wagle Estate",
        "Hiranandani Estate",
        "Kopri",
        "Kalwa",
        "Mumbra",
        "Ghodbunder Road",
        "Manpada",
        "Balkum",
        "Kasarvadavali",
        "Vartak Nagar",
        "Naupada",
        "Panchpakhadi",
        "Kolshet Road",
      ]}
    />
  );
};

export default AcServiceThane;
