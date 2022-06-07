import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos == 0) {
        document.getElementById("navbar").style.backgroundColor = "transparent";
      } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "#172b4d";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <nav id="navbar" className="nav-bar navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <Link to={'/'}>
        <img
          src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/argon-white.png"
          alt="Logo"
        />
        </Link>

        <div className="top-el ement">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Components
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Examples
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link className="dropdown-item" to="/landing">Landing</Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/profile">Profile</Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/login">Login</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="register">Register</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <i className="fa-brands fa-facebook-square"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter-square"></i>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn">
            <i className="btnaw fa-solid fa-cloud-arrow-down"></i>DOWNLOAD
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
