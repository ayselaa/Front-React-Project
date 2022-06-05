import React from "react";

function Tabs() {
  return (
    <section>
      <div className="container">
        <div class="row  d-flex justify-content-center" >
        <h3 className="h3classs">Tabs</h3>
          <div class="col-sm-6">
            <div className="words">
              <small>With Text</small>
            </div>
            <div class="card">
              <div class="card-body d-flex">
                <div className="col-sm-4">
                  <button type="button" class="btn btn-primary btn-lg">
                    Home
                  </button>
                </div>

                <div className="col-sm-4">
                  <button type="button" class="btn btn-primary btn-lg">
                    Profile
                  </button>
                </div>

                <div className="col-sm-4">
                  <button type="button" class="btn btn-primary btn-lg">
                    Messages
                  </button>
                </div>
              </div>
            </div>

            <div className="lorems">
              Raw denim you probably haven't heard of them jean shorts Austin.
              Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              Mustache cliche tempor, williamsburg carles vegan helvetica.
              Reprehenderit butcher retro keffiyeh dreamcatcher synth. Raw denim
              you probably haven't heard of them jean shorts Austin. Nesciunt
              tofu stumptown aliqua, retro synth master cleanse.
            </div>
          </div>

          <div class="col-sm-6">
            <div className="words">
              <small>With Text</small>
            </div>
            <div class="card">
              <div class="card-body d-flex">
                <div className="col-sm-4">
                  <button type="button" class="btn btn-primary btn-lg">
                    Home
                  </button>
                </div>

                <div className="col-sm-4">
                  <button type="button" class="btn btn-primary btn-lg">
                    Profile
                  </button>
                </div>

                <div className="col-sm-4">
                  <button type="button" class="btn btn-primary btn-lg">
                    Messages
                  </button>
                </div>
              </div>
              <div className="lorems">
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Raw
                denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
