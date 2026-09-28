import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "nav-link active fw-bold text-warning"
      : "nav-link text-white";

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        {/* =========================
            TOP ROW
        ========================== */}
        <div className="d-flex align-items-center justify-content-between w-100">

          {/* LOGO */}
          <Link
            className="navbar-brand d-flex align-items-center gap-2 fw-bold m-0"
            to="/"
          >
            <img
              src="/logo.png"
              alt="AC Repair 4U Logo"
              width="42"
              height="42"
              className="rounded"
              style={{ objectFit: "cover" }}
            />

            <div className="d-flex align-items-center">
              <span className="text-white">AC Service</span>
              <span className="text-warning ms-1">4U</span>
            </div>
          </Link>

          {/* MOBILE BOOK BUTTON */}
          <Link
            to="/book-service"
            className="btn btn-warning fw-bold btn-sm px-3 d-lg-none"
          >
            Book Service
          </Link>


          {/* DESKTOP NAVBAR */}
          <div className="d-none d-lg-flex align-items-center ms-auto">

            <ul className="navbar-nav flex-row align-items-center gap-2">

              <li className="nav-item">
                <NavLink to="/" className={navClass}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services" className={navClass}>
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={navClass}>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={navClass}>
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/faq" className={navClass}>
                  FAQ
                </NavLink>
              </li>

            </ul>

            <Link
              to="/book-service"
              className="btn btn-warning fw-bold ms-3 px-4"
            >
              Book Service
            </Link>

          </div>

        </div>


        {/* =========================
            MOBILE NAVIGATION
        ========================== */}
        <div className="d-lg-none w-100 mt-2 border-top border-secondary">

          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}
          >

            <NavLink
              to="/"
              className={navClass}
              style={{ fontSize: "13px" }}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={navClass}
              style={{ fontSize: "13px" }}
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
              style={{ fontSize: "13px" }}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
              style={{ fontSize: "13px" }}
            >
              Contact
            </NavLink>

            <NavLink
              to="/faq"
              className={navClass}
              style={{ fontSize: "13px" }}
            >
              FAQ
            </NavLink>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;