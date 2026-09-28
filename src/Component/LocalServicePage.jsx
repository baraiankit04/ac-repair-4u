import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const LocalServicePage = ({
  city,
  title,
  description,
  areas,
}) => {

  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, [title, description]);

  const services = [
    {
      icon: "🔧",
      title: "AC Repair",
      text: "Cooling, leakage, noise and other common AC problems.",
      service: "AC Repair",
    },
    {
      icon: "🧼",
      title: "AC Cleaning",
      text: "Cleaning service for better airflow and AC performance.",
      service: "AC Deep Cleaning",
    },
    {
      icon: "❄️",
      title: "AC Gas Refill",
      text: "Inspection and refrigerant service when required.",
      service: "AC Gas Refill",
    },
    {
      icon: "🛠️",
      title: "AC Installation",
      text: "Split and Window AC installation assistance.",
      service: "AC Installation",
    },
    {
      icon: "⚙️",
      title: "AC Maintenance",
      text: "Regular AC maintenance and service support.",
      service: "AC Maintenance",
    },
    {
      icon: "📦",
      title: "AC Uninstallation",
      text: "Safe AC removal for shifting or replacement.",
      service: "AC Uninstallation",
    },
  ];

  return (
    <>
      {/* HERO */}

      <section className="bg-primary text-white py-5">
        <div className="container py-lg-4">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                AC Repair 4U
              </span>

              <h1 className="display-5 fw-bold">
                AC Repair & Service in {city}
              </h1>

              <p
                className="lead text-white-50"
                style={{ maxWidth: "750px" }}
              >
                Book AC repair, cleaning, installation and maintenance
                services across {city} and nearby service areas.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-2 mt-4">

                <Link
                  to="/book-service"
                  className="btn btn-warning btn-lg fw-semibold px-4"
                >
                  Book AC Service
                </Link>

                <a
                  href="tel:+917317422100"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SERVICES */}

      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              OUR SERVICES
            </span>

            <h2 className="fw-bold mt-2">
              AC Services Available in {city}
            </h2>

            <p className="text-muted">
              Choose the service you need and send your booking request online.
            </p>

          </div>


          <div className="row g-4">

            {services.map((item, index) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={index}
              >

                <div className="card h-100 border-0 shadow-sm rounded-4">

                  <div className="card-body p-4">

                    <div className="fs-2 mb-3">
                      {item.icon}
                    </div>

                    <h3 className="h5 fw-bold">
                      {item.title}
                    </h3>

                    <p className="text-muted">
                      {item.text}
                    </p>

                    <Link
                      to={`/book-service?service=${encodeURIComponent(
                        item.service
                      )}`}
                      className="btn btn-outline-primary"
                    >
                      Book Service
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* AREAS */}

      <section className="py-5 bg-white">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-10">

              <div className="text-center mb-4">

                <span className="text-primary fw-bold">
                  SERVICE COVERAGE
                </span>

                <h2 className="fw-bold mt-2">
                  Areas We Serve in {city}
                </h2>

                <p className="text-muted">
                  Check some of our service locations across {city}.
                </p>

              </div>


              <div className="row g-3">

                {areas.map((area, index) => (

                  <div
                    className="col-6 col-md-4 col-lg-3"
                    key={index}
                  >

                    <div className="border rounded-3 p-3 h-100 bg-light">
                      <span className="me-2">📍</span>

                      <span className="fw-semibold">
                        {area}
                      </span>
                    </div>

                  </div>

                ))}

              </div>


              <div className="text-center mt-4">

                <Link
                  to="/areas"
                  className="btn btn-outline-primary px-4"
                >
                  View All Service Areas
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* WHY CHOOSE */}

      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-4">

            <h2 className="fw-bold">
              AC Service Made Simple
            </h2>

            <p className="text-muted">
              An easy way to request AC service in {city}.
            </p>

          </div>


          <div className="row g-4 text-center">

            <div className="col-12 col-md-4">

              <div className="card border-0 shadow-sm h-100 rounded-4">

                <div className="card-body p-4">

                  <div className="fs-2 mb-2">
                    📝
                  </div>

                  <h3 className="h5 fw-bold">
                    1. Book Online
                  </h3>

                  <p className="text-muted mb-0">
                    Enter your AC problem, address and preferred service time.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-12 col-md-4">

              <div className="card border-0 shadow-sm h-100 rounded-4">

                <div className="card-body p-4">

                  <div className="fs-2 mb-2">
                    📞
                  </div>

                  <h3 className="h5 fw-bold">
                    2. Get Connected
                  </h3>

                  <p className="text-muted mb-0">
                    Your service request can be reviewed and coordinated.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-12 col-md-4">

              <div className="card border-0 shadow-sm h-100 rounded-4">

                <div className="card-body p-4">

                  <div className="fs-2 mb-2">
                    🔧
                  </div>

                  <h3 className="h5 fw-bold">
                    3. AC Service
                  </h3>

                  <p className="text-muted mb-0">
                    Get assistance for your selected AC service.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FAQ */}

      <section className="py-5">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-9">

              <div className="text-center mb-4">

                <h2 className="fw-bold">
                  AC Service FAQs – {city}
                </h2>

              </div>


              <div
                className="accordion"
                id={`faq-${city.replace(/\s/g, "")}`}
              >

                <div className="accordion-item">

                  <h3 className="accordion-header">

                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#localFaq1"
                    >
                      Which AC services are available in {city}?
                    </button>

                  </h3>

                  <div
                    id="localFaq1"
                    className="accordion-collapse collapse show"
                  >

                    <div className="accordion-body">
                      AC repair, cleaning, installation, uninstallation,
                      maintenance and gas refill related services can be
                      requested through our website.
                    </div>

                  </div>

                </div>


                <div className="accordion-item">

                  <h3 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#localFaq2"
                    >
                      How can I book AC service in {city}?
                    </button>

                  </h3>

                  <div
                    id="localFaq2"
                    className="accordion-collapse collapse"
                  >

                    <div className="accordion-body">
                      Use the Book Service page and enter your contact
                      details, AC information, service address and preferred
                      date and time.
                    </div>

                  </div>

                </div>


                <div className="accordion-item">

                  <h3 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#localFaq3"
                    >
                      Do you service both Split and Window AC?
                    </button>

                  </h3>

                  <div
                    id="localFaq3"
                    className="accordion-collapse collapse"
                  >

                    <div className="accordion-body">
                      You can provide your AC type and problem while making
                      the booking request so the service requirement can be
                      understood properly.
                    </div>

                  </div>

                </div>

              </div>


              <div className="text-center mt-4">

                <Link
                  to="/faq"
                  className="btn btn-outline-primary"
                >
                  View More FAQs
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}

      <section className="py-5 bg-dark text-white">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8 text-center text-lg-start">

              <h2 className="fw-bold">
                Need AC Service in {city}?
              </h2>

              <p className="text-white-50 mb-lg-0">
                Send your AC service request online today.
              </p>

            </div>

            <div className="col-lg-4 text-center text-lg-end mt-3 mt-lg-0">

              <Link
                to="/book-service"
                className="btn btn-warning btn-lg fw-bold px-4"
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

export default LocalServicePage;