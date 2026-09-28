import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Area = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "AC Service Areas | AC Repair Near You";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content =
      "Check AC repair and service availability across Mumbai, Navi Mumbai and Thane. Find your area and book AC service online.";
  }, []);

  // ==============================
  // SERVICE AREAS
  // ==============================

  const serviceAreas = {
    "Navi Mumbai": [
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
    ],

    Mumbai: [
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
    ],

    Thane: [
      "Thane West",
      "Thane East",
      "Majiwada",
      "Wagle Estate",
      "Hiranandani Estate",
      "Kopri",
      "Kalwa",
      "Mumbra",
    ],
  };

  // Convert object into one list
  const allAreas = Object.entries(serviceAreas).flatMap(
    ([city, areas]) =>
      areas.map((area) => ({
        name: area,
        city: city,
      }))
  );

  // Search area OR city
  const filteredAreas = allAreas.filter((area) => {
    const searchText = search.toLowerCase();

    return (
      area.name.toLowerCase().includes(searchText) ||
      area.city.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      {/* ==============================
          HERO
      ============================== */}

      <section className="bg-primary text-white py-5">
        <div className="container text-center">

          <span className="badge bg-warning text-dark mb-3 px-3 py-2">
            Service Areas
          </span>

          <h1 className="fw-bold display-6">
            AC Repair & Service Near You
          </h1>

          <p
            className="lead mx-auto mb-0"
            style={{ maxWidth: "750px" }}
          >
            AC repair, cleaning, installation and maintenance
            services across Mumbai, Navi Mumbai and Thane.
          </p>

        </div>
      </section>


      {/* ==============================
          SEARCH
      ============================== */}

      <section className="py-5 bg-light">
        <div className="container">

          <div className="row justify-content-center mb-5">

            <div className="col-12 col-md-8 col-lg-6">

              <div className="card border-0 shadow-sm rounded-4">

                <div className="card-body p-3 p-md-4">

                  <label className="form-label fw-bold">
                    📍 Search Your Area
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Example: Vashi, Andheri, Thane..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />

                  <small className="text-muted d-block mt-2">
                    Enter your area or city to check service availability.
                  </small>

                </div>

              </div>

            </div>

          </div>


          {/* HEADING */}

          <div className="text-center mb-4">

            <span className="text-primary fw-bold">
              OUR COVERAGE
            </span>

            <h2 className="fw-bold mt-2">
              Areas We Currently Serve
            </h2>

            <p className="text-muted">
              Mumbai • Navi Mumbai • Thane
            </p>

          </div>


<div className="row g-3 mb-5">

  <div className="col-12 col-md-4">
    <Link
      to="/ac-service-mumbai"
      className="btn btn-outline-primary w-100 py-3 fw-bold"
    >
      AC Service Mumbai →
    </Link>
  </div>

  <div className="col-12 col-md-4">
    <Link
      to="/ac-service-navi-mumbai"
      className="btn btn-outline-primary w-100 py-3 fw-bold"
    >
      AC Service Navi Mumbai →
    </Link>
  </div>

  <div className="col-12 col-md-4">
    <Link
      to="/ac-service-thane"
      className="btn btn-outline-primary w-100 py-3 fw-bold"
    >
      AC Service Thane →
    </Link>
  </div>

</div>
          {/* ==============================
              AREA CARDS
          ============================== */}

          <div className="row g-3">

            {filteredAreas.length > 0 ? (

              filteredAreas.map((area, index) => (

                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  key={`${area.city}-${area.name}-${index}`}
                >

                  <div className="card h-100 border-0 shadow-sm rounded-4">

                    <div className="card-body">

                      <div className="d-flex align-items-start gap-3">

                        <div
                          className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            minWidth: "45px",
                          }}
                        >
                          📍
                        </div>


                        <div className="flex-grow-1">

                          <h5 className="fw-bold mb-1">
                            {area.name}
                          </h5>

                          <p className="text-muted small mb-2">
                            {area.city}
                          </p>

                          <span className="badge bg-success">
                            Service Available
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              /* AREA NOT FOUND */

              <div className="col-12">

                <div className="card border-0 shadow-sm rounded-4">

                  <div className="card-body text-center p-4 p-md-5">

                    <div className="fs-1 mb-3">
                      🔍
                    </div>

                    <h4 className="fw-bold">
                      Area Not Found
                    </h4>

                    <p className="text-muted">
                      We couldn't find "{search}" in our listed service
                      areas. Contact us to check service availability.
                    </p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">

                      <Link
                        to="/contact"
                        className="btn btn-primary px-4"
                      >
                        Contact Us
                      </Link>

                      <Link
                        to="/book-service"
                        className="btn btn-warning px-4"
                      >
                        Book Service
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>
      </section>


      {/* ==============================
          CTA
      ============================== */}

      <section className="py-5 bg-dark text-white">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8 text-center text-lg-start">

              <h2 className="fw-bold">
                Need AC Service in Your Area?
              </h2>

              <p className="text-white-50 mb-lg-0">
                Book AC repair, cleaning, installation or maintenance
                service online.
              </p>

            </div>

            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">

              <Link
                to="/book-service"
                className="btn btn-warning btn-lg px-4 fw-semibold"
              >
                Book Service
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Area;