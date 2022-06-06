import React from "react";

function Tabs() {
  return (
    <section>
      <div className="container">
        <div className="row  d-flex justify-content-center">
          <h3 className="h3class mb-3">Tabs</h3>

          <div className="col-lg-6">
            <small className="minnos-text">With icons</small>
            <ul className="nav nav-pills mt-" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active shadov-g"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link shadov-g"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link shadov-g"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active mt-4"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Raw
                denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                cardigan american apparel, butcher voluptate nisi qui.
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </div>
            </div>
          </div>



          <div className="col-lg-6">
          <small className="minnos-text">With text</small>

        
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active shadov-g"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home1"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link shadov-g"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile1"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link shadov-g"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact1"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active mt-4"
                id="pills-home1"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Raw
                denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile1"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                cardigan american apparel, butcher voluptate nisi qui.
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact1"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                cardigan american apparel, butcher voluptate nisi qui.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
