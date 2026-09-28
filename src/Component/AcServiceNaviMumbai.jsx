import React from "react";
import LocalServicePage from "./LocalServicePage";

const AcServiceNaviMumbai = () => {
  return (
    <LocalServicePage
      city="Navi Mumbai"
      title="AC Repair & Service in Navi Mumbai | AC Repair 4U"
      description="Book AC repair, cleaning, installation and maintenance services across Navi Mumbai including Vashi, Nerul, Kharghar, Airoli and nearby areas."
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
      ]}
    />
  );
};

export default AcServiceNaviMumbai;