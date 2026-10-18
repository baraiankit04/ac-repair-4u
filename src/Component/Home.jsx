
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import "./Home.css";

const words = [
  "AC Repair",
  "AC Servicing",
  "AC Gas Filling",
  "AC Installation",
  "AC Deep Cleaning",
  "AC Maintenance",
];

const services = [
  {
    title: "AC Repair",
    description:
      "AC not cooling, water leakage, unusual noise or other problems? Request professional AC repair.",
    image: "/images/acrepair.jpg",
  },
  {
    title: "AC Installation",
    description:
      "Split AC and window AC installation, fitting and relocation support.",
    image: "/images/acinstallation.jpg",
  },
  {
    title: "AC Cleaning & Servicing",
    description:
      "AC filter cleaning, indoor unit cleaning, deep cleaning and regular servicing.",
    image: "/images/acdeepcleaning.jpeg",
  },
  {
    title: "AC Maintenance",
    description:
      "Routine AC maintenance, inspection and performance checks for homes and offices.",
    image: "/images/ACMaintenance.png",
  },
];

const brands = [
  "Daikin", "LG", "Samsung", "Voltas",
  "Blue Star", "Hitachi", "Carrier",
  "Panasonic", "Lloyd", "Godrej",
  "Haier", "O General",
];

const locations = {
  Mumbai: [
    "Andheri", "Bandra", "Borivali",
    "Dadar", "Goregaon", "Malad",
    "Powai", "Kurla", "Ghatkopar",
    "Chembur", "Mulund", "Bhandup",
    "Kandivali", "Jogeshwari", "Sion",
    "Vikhroli", "Santacruz", "Worli",
  ],
  "Navi Mumbai": [
    "Vashi", "Sanpada", "Nerul",
    "Seawoods", "CBD Belapur", "Kharghar",
    "Airoli", "Ghansoli", "Kopar Khairane",
    "Turbhe", "Juinagar", "Ulwe",
  ],
  Thane: [
    "Thane West", "Thane East",
    "Majiwada", "Wagle Estate",
    "Kopri", "Kalwa", "Mumbra",
  ],
};

const cityLinks = [
  {
    name: "Mumbai",
    path: "/ac-service-mumbai",
    icon: "🏙️",
  },
  {
    name: "Navi Mumbai",
    path: "/ac-service-navi-mumbai",
    icon: "📍",
  },
  {
    name: "Thane",
    path: "/ac-service-thane",
    icon: "🏢",
  },
];

const faqs = [
  {
    question: "How can I book AC repair near me?",
    answer:
      "Open our Book Service page, enter your AC problem, contact information and location. Our team will contact you regarding availability.",
  },
  {
    question: "Do you provide AC servicing across Mumbai?",
    answer:
      "We accept service enquiries from Mumbai, Navi Mumbai and Thane. Technician availability and appointment timing depend on your exact location.",
  },
  {
    question: "Does every AC require gas filling?",
    answer:
      "No. AC gas filling is needed only when an inspection identifies a refrigerant-related issue. Low cooling can have several other causes.",
  },
  {
    question: "Do you repair split and window AC units?",
    answer:
      "You can request repair and servicing for split and window AC units. Share your AC brand, model and problem while booking.",
  },
  {
    question: "How often should an AC be serviced?",
    answer:
      "Servicing frequency depends on AC usage, dust conditions and manufacturer recommendations. Regular filter cleaning and periodic inspection can help maintain performance.",
  },
];

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [areaSearch, setAreaSearch] = useState("");

  useEffect(() => {
    const current = words[wordIndex];

    if (typedText.length < current.length) {
      const timer = setTimeout(() => {
        setTypedText(current.slice(0, typedText.length + 1));
      }, 85);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setTypedText("");
      setWordIndex((previous) => (previous + 1) % words.length);
    }, 1800);

    return () => clearTimeout(timer);
  }, [typedText, wordIndex]);

  const allAreas = Object.entries(locations).flatMap(
    ([city, areas]) =>
      areas.map((name) => ({ name, city }))
  );

  const filteredAreas = allAreas.filter(({ name, city }) =>
    `${name} ${city}`
      .toLowerCase()
      .includes(areaSearch.trim().toLowerCase())
  );

  return (
    <>
      <SEO
        title="AC Repair & Servicing in Mumbai, Navi Mumbai & Thane"
        description="Looking for AC repair near you? AC Repair 4U provides AC servicing, repair, gas filling, installation, cleaning and maintenance across Mumbai, Navi Mumbai and Thane."
      />

      {/* HERO SECTION */}
      <section className="homeHero">
        <div className="container">
          <div className="row align-items-center homeHeroRow g-4">

            <div className="col-12 col-lg-6">
              <div className="homeHeroContent" data-aos="fade-up" data-aos-duration="750">

                <span className="homeHeroBadge">
                  ❄️ AC Repair 4U | Mumbai
                </span>

                <h1 className="homeHeroTitle">
                  AC Repair &amp; Servicing
                  <span> Across Mumbai</span>
                </h1>

                <p className="homeHeroDescription">
                  Looking for reliable AC repair near you?
                  Book AC servicing, gas filling, installation,
                  cleaning and maintenance across Mumbai,
                  Navi Mumbai and Thane.
                </p>

                <div className="homeTypingBox">
                  <span>Our Services:</span>
                  <strong className="homeTypedText">
                    {typedText}
                    <span className="homeTypingCursor">|</span>
                  </strong>
                </div>

                <div className="homeHeroButtons">
                  <Link
                    to="/book-service"
                    className="btn btn-warning btn-lg fw-bold"
                  >
                    Book AC Service →
                  </Link>

                  <Link
                    to="/ai-ac-assistant"
                    className="btn btn-outline-light btn-lg"
                  >
                    Check AC with AI
                  </Link>
                </div>

                <div className="homeHeroBenefits">
                  <div>✓ Easy Booking</div>
                  <div>✓ Technician Support</div>
                  <div>✓ Multiple AC Brands</div>
                </div>

              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="homeHeroImageBox" data-aos="zoom-in" data-aos-duration="950" data-aos-delay="100">
                <img
                  src="/images/heroac.jpg"
                  alt="AC repair and servicing technician in Mumbai"
                  className="homeHeroImage"
                  fetchPriority="high"
                />

                <div className="homeHeroFloatingCard">
                  <span className="homeFloatingIcon">❄️</span>
                  <div>
                    <strong>Need AC Service?</strong>
                    <small>
                      Book a technician online
                    </small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="homeSection">
        <div className="container">

          <div className="homeSectionHeading" data-aos="fade-up">
            <span className="homeEyebrow">
              OUR SERVICES
            </span>
            <h2>
              Complete AC Repair &amp; Servicing
            </h2>
            <p>
              AC repair, installation, gas filling,
              cleaning and maintenance for residential
              and commercial air conditioners.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 70, 210)}
              >
                <article className="homeServiceCard">
                  <img
                    src={service.image}
                    alt={`${service.title} service in Mumbai`}
                    loading="lazy"
                  />

                  <div className="homeServiceBody">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link
                      to="/book-service"
                      className="btn btn-outline-primary mt-auto"
                    >
                      Book Now →
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              to="/services"
              className="btn btn-primary px-4 py-2"
            >
              Explore All AC Services
            </Link>
          </div>

        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="homeSection bg-light">
        <div className="container">

          <div className="homeSectionHeading" data-aos="fade-up">
            <span className="homeEyebrow">
              AC SERVICE SOLUTIONS
            </span>
            <h2>
              AC Gas Filling, Installation &amp; Repair
            </h2>
            <p>
              Find the right service for your AC problem.
            </p>
          </div>

          <div className="row g-3">
            {[
              {
                icon: "🔧",
                title: "AC Repair Near Me",
                text: "Cooling issues, water leakage, noise and general AC faults.",
              },
              {
                icon: "❄️",
                title: "AC Servicing Near Me",
                text: "Regular AC servicing, filter cleaning and maintenance.",
              },
              {
                icon: "💨",
                title: "AC Gas Filling",
                text: "Refrigerant inspection, leak checks and gas filling when required.",
              },
              {
                icon: "🛠️",
                title: "AC Installation",
                text: "Installation and relocation support for split and window AC units.",
              },
            ].map((item, index) => (
              <div
                className="col-12 col-md-6"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 70, 180)}
              >
                <div className="homeSolutionCard">
                  <div className="homeSolutionIcon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link to="/book-service">
                      Request Service →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BRANDS */}
      <section className="homeSection">
        <div className="container">

          <div className="homeSectionHeading" data-aos="fade-up">
            <span className="homeEyebrow">
              AC BRANDS
            </span>
            <h2>
              AC Service for Major Brands
            </h2>
            <p>
              Request service for split AC, window AC
              and inverter AC models from popular brands.
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {brands.map((brand, index) => (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2"
                key={brand}
                data-aos="zoom-in"
                data-aos-delay={(index % 6) * 35}
              >
                <div className="homeBrandCard">
                  <span>❄️</span>
                  <h3>{brand}</h3>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted mt-4 mb-0">
            AC Repair 4U is an independent service provider.
            Brand names are used for identification only.
          </p>

        </div>
      </section>

      {/* AI ASSISTANT */}
      <section className="homeAISection">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-12 col-lg-6">
              <span className="badge bg-warning text-dark mb-3">
                AI AC ASSISTANT
              </span>

              <h2>
                Understand Your AC Problem Before Booking
              </h2>

              <p>
                Enter your AC brand, model, purchase date
                and problem to receive possible causes,
                safe checks and maintenance guidance.
              </p>

              <div className="row g-3 homeAIFeatures">
                {[
                  "✓ Check AC Age",
                  "✓ Possible Problems",
                  "✓ Safe Checks",
                  "✓ Service Priority",
                  "✓ Maintenance Tips",
                  "✓ Book Technician",
                ].map((item, index) => (
                  <div
                    className="col-12 col-sm-6"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/ai-ac-assistant"
                className="btn btn-warning btn-lg mt-4"
              >
                Check My AC →
              </Link>
            </div>

            <div className="col-12 col-lg-6">
              <div className="homeAIDemo" data-aos="fade-up">
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <div>
                    <small className="text-muted">
                      AC HEALTH REPORT
                    </small>
                    <h3>Split AC</h3>
                  </div>

                  <span className="badge bg-success">
                    Demo Report
                  </span>
                </div>

                <hr />

                <p className="mb-2">
                  <strong>AC Brand:</strong> Daikin
                </p>

                <p className="mb-3">
                  <strong>Problem:</strong> Low Cooling
                </p>

                <div className="alert alert-warning">
                  Possible causes include dirty filters,
                  blocked airflow or a refrigerant-related issue.
                  A technician may be needed for diagnosis.
                </div>

                <Link
                  to="/ai-ac-assistant"
                  className="btn btn-primary w-100"
                >
                  Start AC Check
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="homeSection bg-light">
        <div className="container">

          <div className="homeSectionHeading" data-aos="fade-up">
            <span className="homeEyebrow">
              WHY CHOOSE US
            </span>
            <h2>
              Easy AC Service Booking
            </h2>
            <p>
              Request AC service with a simple booking process.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "⚡",
                title: "Easy Booking",
                text: "Submit your AC service request online in a few steps.",
              },
              {
                icon: "👨‍🔧",
                title: "Technician Support",
                text: "Share your AC issue and location to request technician assistance.",
              },
              {
                icon: "💬",
                title: "Easy Communication",
                text: "Contact the team regarding appointments and service enquiries.",
              },
            ].map((item, index) => (
              <div
                className="col-12 col-md-4"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 70, 180)}
              >
                <div className="homeFeatureCard">
                  <span>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CITY PAGES */}
      <section className="homeSection">
        <div className="container">

          <div className="homeSectionHeading" data-aos="fade-up">
            <span className="homeEyebrow">
              OUR SERVICE LOCATIONS
            </span>
            <h2>
              AC Repair Across Mumbai, Navi Mumbai &amp; Thane
            </h2>
            <p>
              Explore our city service pages and check
              availability in your locality.
            </p>
          </div>

          <div className="row g-4">
            {cityLinks.map((city, index) => (
              <div
                className="col-12 col-md-4"
                key={city.name}
                data-aos="fade-up"
                data-aos-delay={index * 90}
              >
                <Link
                  to={city.path}
                  className="homeCityCard"
                >
                  <span>{city.icon}</span>
                  <h3>AC Service {city.name}</h3>
                  <p>
                    Repair, servicing, cleaning,
                    gas filling and installation.
                  </p>
                  <strong>Explore Services →</strong>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEARCH SERVICE AREAS */}
      <section className="homeSection bg-light">
        <div className="container">

          <div className="homeSectionHeading" data-aos="fade-up">
            <span className="homeEyebrow">
              FIND YOUR AREA
            </span>
            <h2>
              AC Service Near You
            </h2>
            <p>
              Search localities across Mumbai,
              Navi Mumbai and Thane.
            </p>
          </div>

          <div className="homeAreaSearch mx-auto" data-aos="fade-up">
            <label
              htmlFor="homeAreaInput"
              className="form-label fw-bold"
            >
              📍 Search Your Location
            </label>

            <input
              id="homeAreaInput"
              type="search"
              className="form-control form-control-lg"
              placeholder="Vashi, Andheri, Bandra, Thane..."
              value={areaSearch}
              onChange={(event) =>
                setAreaSearch(event.target.value)
              }
            />
          </div>

          <div className="row g-3 mt-3">
            {filteredAreas.length ? (
              filteredAreas.map((area) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={`${area.city}-${area.name}`}
                  data-aos="fade-up"
                >
                  <div className="homeAreaCard">
                    <span>📍</span>
                    <div>
                      <h3>{area.name}</h3>
                      <small>{area.city}</small>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <div className="homeNoArea">
                  <h3>Area Not Listed?</h3>
                  <p>
                    Contact us to confirm technician
                    availability at your location.
                  </p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-4">
            <Link
              to="/areas"
              className="btn btn-outline-primary px-4"
            >
              View All Service Areas →
            </Link>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="homeSection">
        <div className="container">

          <div className="homeSectionHeading" data-aos="fade-up">
            <span className="homeEyebrow">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2>
              AC Repair &amp; Servicing FAQs
            </h2>
          </div>

          <div className="homeFAQWrapper" data-aos="fade-up">
            <div
              className="accordion"
              id="homeFaqAccordion"
            >
              {faqs.map((faq, index) => (
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
                      data-bs-target={`#homeFaq${index}`}
                      aria-expanded={index === 0}
                      aria-controls={`homeFaq${index}`}
                    >
                      {faq.question}
                    </button>
                  </h3>

                  <div
                    id={`homeFaq${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#homeFaqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <Link
              to="/faq"
              className="btn btn-outline-primary px-4"
            >
              View All FAQs
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="homeFinalCTA" data-aos="fade-up">
        <div className="container text-center">
          <h2>
            Need AC Repair or Servicing in Mumbai?
          </h2>

          <p>
            Request AC repair, gas filling,
            cleaning or installation at your location.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link
              to="/book-service"
              className="btn btn-warning btn-lg fw-bold"
            >
              Book AC Service
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline-light btn-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
