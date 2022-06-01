import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
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
          <img src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/argon-white.png" alt="Logo" />
         
          <div className="top-element">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Components
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Examples
            </a>
          </li>
        </ul>
          </div>
      <div className="social-media">
         <ul>
             <li><i className="fa-brands fa-facebook-square"></i></li>
             <li><i className="fa-brands fa-instagram"></i></li>
             <li><i className="fa-brands fa-twitter-square"></i></li>
             <li><i className="fa-brands fa-github"></i></li>
         </ul>
      </div>
      <div>
      <button className="btn"><i className="btnaw fa-solid fa-cloud-arrow-down"></i>DOWNLOAD</button>
      </div>
      </div>

    </nav>
  );
}

export default Navbar;
