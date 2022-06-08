import React from "react";

function Corusel() {
  return (
    <section className="this-section">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <h1 className="cor-h1">Bootstrap carousel</h1>

            <p className="cor-p">
              Argon Design System comes with four pre-built pages to help you
              get started faster. You can change the text and images and you're
              good to go.
            </p>

            <button type="button" class="cor-btnn">
              SEE ALL COMPONENTS
            </button>
          </div>

          <div className="col-lg-6 mb-lg-auto">
            <div className="rounded shadow-lg owerflow-hidden transform-perspective-right">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/img-1-1200x1000.jpg"
                      className="d-block w-100"
                      alt="Avatar"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/img-2-1200x1000.jpg"
                      className="d-block w-100"
                      alt="Avatar"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Corusel;
