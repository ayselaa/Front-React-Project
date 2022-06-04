import React from "react";

function Menu() {
  return (
    <section className="p">
       <div className="container ml">
        <h3 className="h3">Menu</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="with-text mb-3">
              <small className="text-uppercase font-weight-bold">
                With text
              </small>
            </div>
            <nav className=" navbar navbar-expand-lg navbar-light bg-primary p-4 d-flex">
              <a className="navbar-brand text-white" href="#">
                Menu
              </a>
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
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link text-white" href="#">
                      Discover <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Setting
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled text-white" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            
          </div>
         
          <div className="col-lg-6">
            <div className="with-icons mb-3">
              <small className="text-uppercase font-weight-bold mb-5">
                With icons
              </small>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success p-4 d-flex justify-content-center">
              <a className="navbar-brand text-white" href="#">
                Menu
              </a>
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
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link text-white" href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </li>
                  <li classMame="nav-item">
                    <a className="nav-link text-white" href="#">
                      <i className="fa-solid fa-bullhorn"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      <i className="fa-solid fa-gear"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
