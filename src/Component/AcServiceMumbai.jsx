import React from "react";
import LocalServicePage from "./LocalServicePage";

const AcServiceMumbai = () => {
  return (
    <LocalServicePage
      city="Mumbai"
      title="AC Repair & Service in Mumbai | AC Repair 4U"
      description="Book AC repair, cleaning, installation and maintenance services across Mumbai. Check service areas and send your AC service request online."
      areas={[
        "Andheri",
        "Bandra",
        "Borivali",
        "Dadar",
        "Goregaon",
        "Malad",
        "Powai",
        "Kurla",
        "Ghatkopar",
        "Chembur",
        "Mulund",
        "Bhandup",
      ]}
    />
  );
};

export default AcServiceMumbai;