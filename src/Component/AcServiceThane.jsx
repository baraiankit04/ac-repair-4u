import React from "react";
import LocalServicePage from "./LocalServicePage";

const AcServiceThane = () => {
  return (
    <LocalServicePage
      city="Thane"
      title="AC Repair & Service in Thane | AC Repair 4U"
      description="Book AC repair, cleaning, installation and maintenance services across Thane. Check available service areas and book AC service online."
      areas={[
        "Thane West",
        "Thane East",
        "Majiwada",
        "Wagle Estate",
        "Hiranandani Estate",
        "Kopri",
        "Kalwa",
        "Mumbra",
      ]}
    />
  );
};

export default AcServiceThane;