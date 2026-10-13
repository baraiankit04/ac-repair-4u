
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const services = [
  {
    icon: "🔧",
    title: "AC Repair",
    text: "AC not cooling, water leakage, unusual noise and general repair enquiries.",
  },
  {
    icon: "❄️",
    title: "AC Servicing",
    text: "Regular AC servicing, filter cleaning and routine maintenance.",
  },
  {
    icon: "💨",
    title: "AC Gas Filling",
    text: "Refrigerant checks, leak inspection and gas filling when required.",
  },
  {
    icon: "🛠️",
    title: "AC Installation",
    text: "Split AC and window AC installation and relocation enquiries.",
  },
  {
    icon: "🧼",
    title: "AC Deep Cleaning",
    text: "AC cleaning services for indoor units, filters and accessible components.",
  },
  {
    icon: "🏢",
    title: "AC Maintenance",
    text: "Routine AC maintenance enquiries for homes, offices and workplaces.",
  },
];

const LocalServicePage = ({
  city,
  title,
  description,
  intro,
  areas = [],
}) => {
  const [search, setSearch] = useState("");

  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(search.trim().toLowerCase())
  );

  const faqItems = [
    {
      question: `How can I book AC repair in ${city}?`,
      answer: `You can submit a service request through our booking page. Enter your AC problem, contact details and location in ${city}.`,
    },
    {
      question: `Do you provide AC servicing near me in ${city}?`,
      answer: `You can check our listed service areas and contact AC Repair 4U to confirm technician availability in ${city}.`,
    },
    {
      question: "Does an AC need gas filling every year?",
      answer:
        "No. AC refrigerant does not normally need annual refilling. A technician should check for leaks or other faults before recommending gas filling.",
    },
    {
      question: "Can I book split AC or window AC repair?",
      answer:
        "Yes, you can submit a request for split or window AC repair. Please provide the AC brand, model and issue so the team can confirm support.",
    },
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
      />

      {/* HERO */}
      <section className="bg-primary text-white py-5">
        <div className="container py-3 py-md-4">
          <div className="row align-items-center g-4">

            <div className="col-12 col-lg-8">
              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                AC REPAIR 4U • {city}
              </span>

              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "clamp(29px, 4vw, 48px)",
                  lineHeight: 1.2,
                }}
              >
                AC Repair &amp; Servicing
                <span className="d-block text-warning">
                  in {city}
                </span>
              </h1>

              <p
                className="lead text-white mb-4"
                style={{ maxWidth: "780px" }}
              >
                {intro ||
                  `Book AC repair, servicing, gas filling,
                  installation and maintenance in ${city}.`}
              </p>

              <div className="d-grid d-sm-flex gap-3">
                <Link
                  to="/book-service"
                  className="btn btn-warning btn-lg fw-bold px-4"
                >
                  Book AC Service →
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4 text-dark">
                  <div className="fs-1 mb-2">❄️</div>

                  <h2 className="h4 fw-bold">
                    Need AC Service?
                  </h2>

                  <p className="text-secondary small">
                    Request AC repair, cleaning,
                    installation or maintenance
                    in {city}.
                  </p>

                  <Link
                    to="/book-service"
                    className="btn btn-primary w-100"
                  >
                    Request Technician
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <div className="container py-md-3">

          <div className="text-center mb-5">
            <span className="text-primary fw-bold">
              OUR SERVICES
            </span>

            <h2 className="fw-bold mt-2">
              AC Repair &amp; Maintenance Services
              in {city}
            </h2>

            <p className="text-secondary mx-auto"
              style={{ maxWidth: "700px" }}>
              Explore our AC repair, servicing,
              gas filling, cleaning and installation
              services.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={service.title}
              >
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body p-4 d-flex flex-column">

                    <div className="fs-1 mb-3">
                      {service.icon}
                    </div>

                    <h3 className="h5 fw-bold">
                      {service.title} in {city}
                    </h3>

                    <p className="text-secondary small flex-grow-1">
                      {service.text}
                    </p>

                    <Link
                      to="/book-service"
                      className="btn btn-outline-primary mt-2"
                    >
                      Book Service →
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEARCH AREAS */}
      <section className="py-5 bg-light">
        <div className="container py-md-3">

          <div className="text-center mb-4">
            <span className="text-primary fw-bold">
              SERVICE LOCATIONS
            </span>

            <h2 className="fw-bold mt-2">
              AC Service Areas in {city}
            </h2>

            <p className="text-secondary">
              Search your locality and contact us
              to confirm technician availability.
            </p>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-8 col-lg-6">
              <label
                htmlFor="cityAreaSearch"
                className="form-label fw-semibold"
              >
                Search Your Area
              </label>

              <input
                id="cityAreaSearch"
                type="search"
                className="form-control form-control-lg"
                placeholder={`Search area in ${city}...`}
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>
          </div>

          <div className="row g-3">
            {filteredAreas.length > 0 ? (
              filteredAreas.map((area) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={area}
                >
                  <div className="card h-100 border-0 shadow-sm rounded-3">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-start gap-2">
                        <span>📍</span>

                        <div>
                          <h3 className="h6 fw-bold mb-1">
                            {area}
                          </h3>

                          <small className="text-secondary">
                            {city}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-info text-center">
                  Area not listed. Contact us to check
                  service availability.
                </div>
              </div>
            )}
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
      </section>

      {/* BOOKING PROCESS */}
      <section className="py-5">
        <div className="container py-md-3">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              How to Book AC Service in {city}
            </h2>

            <p className="text-secondary">
              Follow three simple steps to request
              an AC service appointment.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                number: "01",
                title: "Select Service",
                text: "Choose the AC service you need.",
              },
              {
                number: "02",
                title: "Enter Details",
                text: "Share your location, contact and AC problem.",
              },
              {
                number: "03",
                title: "Get Confirmation",
                text: "Our team will contact you regarding service availability.",
              },
            ].map((step) => (
              <div
                className="col-12 col-md-4"
                key={step.number}
              >
                <div className="card h-100 border-0 bg-light rounded-4">
                  <div className="card-body text-center p-4">
                    <span className="fs-1 fw-bold text-primary">
                      {step.number}
                    </span>

                    <h3 className="h5 fw-bold mt-3">
                      {step.title}
                    </h3>

                    <p className="text-secondary small mb-0">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-light">
        <div className="container py-md-3">

          <div className="text-center mb-4">
            <h2 className="fw-bold">
              Frequently Asked Questions
            </h2>

            <p className="text-secondary">
              Common questions about AC service in {city}.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">

              <div className="accordion" id="cityServiceFaq">
                {faqItems.map((faq, index) => (
                  <div
                    className="accordion-item"
                    key={faq.question}
                  >
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          index === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#cityFaq${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`cityFaq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>

                    <div
                      id={`cityFaq${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#cityServiceFaq"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center py-md-3">

          <h2 className="fw-bold mb-3">
            Book AC Repair &amp; Servicing in {city}
          </h2>

          <p className="text-white-50 mb-4 mx-auto"
            style={{ maxWidth: "650px" }}>
            Need AC repair, gas filling, installation
            or maintenance? Submit your service request
            and confirm technician availability.
          </p>

          <div className="d-grid d-sm-flex justify-content-center gap-3">
            <Link
              to="/book-service"
              className="btn btn-warning btn-lg fw-bold px-4"
            >
              Book AC Service
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline-light btn-lg px-4"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default LocalServicePage;
