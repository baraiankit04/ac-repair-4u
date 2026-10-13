
import React from "react";
import LocalServicePage from "./LocalServicePage";

const AcServiceMumbai = () => {
  return (
    <LocalServicePage
      city="Mumbai"
      title="AC Repair & Servicing in Mumbai | AC Repair 4U"
      description="Looking for AC repair near you in Mumbai? Book AC servicing, gas filling, installation, cleaning and maintenance in Andheri, Bandra, Dadar, Powai and other Mumbai areas."
      intro="Need AC repair or servicing in Mumbai? AC Repair 4U accepts service requests for split AC, window AC, cooling problems, AC cleaning, gas filling, installation and maintenance across Mumbai. Find your area and request a technician."
      areas={[
        "Andheri East",
        "Andheri West",
        "Bandra East",
        "Bandra West",
        "Borivali East",
        "Borivali West",
        "Dadar East",
        "Dadar West",
        "Goregaon East",
        "Goregaon West",
        "Malad East",
        "Malad West",
        "Kandivali East",
        "Kandivali West",
        "Powai",
        "Kurla",
        "Ghatkopar",
        "Chembur",
        "Mulund",
        "Bhandup",
        "Vikhroli",
        "Jogeshwari",
        "Santacruz",
        "Sion",
        "Worli",
        "Lower Parel",
        "Colaba",
        "Wadala",
      ]}
    />
  );
};

export default AcServiceMumbai;
