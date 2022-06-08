import React from "react";

function Colornav() {
  return (
    <section>
      <div className="container">
        <h2 className="myh2">Navbars</h2>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3 mb-4">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-light" href>
            DEFAULT COLOR
          </a>

          <div id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
              <li className="nav-item active">
                <a className="nav-link" href>
                  <i className="fa-solid fa-heart text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                  <i class="fa-solid fa-microphone-lines-slash text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href>
                  <i class="fa-solid fa-gears text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    

      <nav className="navbar navbar-expand-lg navbar-light bg-primary p-3 mb-4">
        <div className="container">
          <a className="navbar-brand text-light" href>
          PRIMARY COLOR
          </a>

          <div id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
              <li className="nav-item active">
                <a className="nav-link text-white" href>
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href>
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" href>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>






      <nav className="navbar navbar-expand-lg navbar-light bg-success p-3 mb-4">
        <div className="container">
          <a className="navbar-brand text-light" href>
            SUCCESS COLOR
          </a>
          <div id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
              <li className="nav-item active">
                <a className="nav-link" href>
                  <i className="fa-solid fa-heart text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                <i class="fa-solid fa-plane-up text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href>
                <i class="fa-solid fa-gear text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>





      <nav className="navbar navbar-expand-lg navbar-light bg-danger p-3 mb-4">
        <div className="container">
         
          <a className="navbar-brand text-light" href>
            DANGER COLOR
          </a>

          <div id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
              <li className="nav-item active">
                <a className="nav-link" href>
                <i class="fa-brands fa-facebook-square text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                <i class="fa-brands fa-twitter text-white"></i>
              </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href>
                <i class="fa-brands fa-google-plus-g text-white"></i>         
               </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href>
                <i class="fa-brands fa-instagram text-white"></i>
               </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>




      <nav className="navbar navbar-expand-lg navbar-light bg-warning p-3 mb-4">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-light" href>
            WARNING COLOR
          </a>

          <div id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
              <li className="nav-item active">
                <a className="nav-link" href>
                <i class="fa-brands fa-facebook-square text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                <i class="fa-brands fa-twitter text-white"></i>                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href>
                <i class="fa-brands fa-pinterest-p text-white"></i>                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <nav className="navbar navbar-expand-lg navbar-light bg-info p-4">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-light" href>
            INFO COLOR
          </a>

          <div id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
              <li className="nav-item active">
                <a className="nav-link" href>
                <i class="fa-brands fa-facebook-square text-white"> Facebook</i>                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                <i class="fa-brands fa-twitter text-white">Twitter</i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href>
                <i class="fa-brands fa-instagram text-white">Instagram</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>





    </section>
  );
}
export default Colornav;
