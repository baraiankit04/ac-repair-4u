
import React from "react";
import LocalServicePage from "./LocalServicePage";

const AcServiceNaviMumbai = () => {
  return (
    <LocalServicePage
      city="Navi Mumbai"
      title="AC Repair & Servicing in Navi Mumbai | AC Repair 4U"
      description="Book AC repair, servicing, gas filling, cleaning and installation in Navi Mumbai. AC service enquiries for Vashi, Sanpada, Nerul, Kharghar, Airoli and nearby areas."
      intro="Looking for AC repair near you in Navi Mumbai? AC Repair 4U provides a simple way to request AC servicing, installation, gas filling, cleaning and maintenance. Contact our team to confirm technician availability in your locality."
      areas={[
        "Vashi",
        "Sanpada",
        "Nerul",
        "Seawoods",
        "CBD Belapur",
        "Kharghar",
        "Kopar Khairane",
        "Ghansoli",
        "Airoli",
        "Turbhe",
        "Juinagar",
        "Ulwe",
        "Rabale",
        "Mahape",
        "Kamothe",
        "Kalamboli",
        "New Panvel",
        "Panvel",
      ]}
    />
  );
};

export default AcServiceNaviMumbai;
