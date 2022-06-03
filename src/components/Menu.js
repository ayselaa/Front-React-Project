import React from "react";

function Menu() {
  return (
    <section className="p-0">
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
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link text-white" href="#">
                      Discover <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Setting
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled text-white" href="#">
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
            <nav class="navbar navbar-expand-lg navbar-light bg-success p-4 d-flex justify-content-center">
              <a class="navbar-brand text-white" href="#">
                Menu
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link text-white" href="#">
                      <i class="fa-solid fa-heart"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      <i class="fa-solid fa-bullhorn"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      <i class="fa-solid fa-gear"></i>
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
