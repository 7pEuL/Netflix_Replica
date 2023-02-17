import React, { useState, useEffect } from "react";

import "./Nav.css";
import images from "../Data/Images";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`netflixNav container-fluid fixed-top ${show && "bgNav"}`}>
      <div className="NetflixLogo">
        <a href="/">
          <img src={images.NetflixLogo} alt="logo-icon" />
        </a>
        <div className="homeNav mt-3">
          <ul>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
      </div>

      <div className="searchNav mt-3">
        <ul>
          <li className="icon">
            <i className="bi bi-search search"></i>
          </li>
          <li className="dvd">DVD</li>
          <li>
            <button
              type="button"
              className="badgeButton badge rounded-pill bg-dark position-relative"
            >
              <i className="bi bi-bell icon bell"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {Math.floor((Math.random() + 1) * 10)}
                <span className="visually-hidden"></span>
              </span>
            </button>
          </li>
          <li>
            <div className="NetflixIcon">
              <div className="dropdown">
                <button
                  className="btn rounded-pil btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={images.NetflixIcon} alt="" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
