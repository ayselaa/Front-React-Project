import React from "react";

function Form() {
  return (
    <div className="myinputs">
      <div className="sentences">
        <h3>Inputs</h3>
        <small>Form Controls</small>
      </div>
      <section className="container">
        <form className="row">
          <div className="col-lg-4">
            <div className="input-group mb-4">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Regular"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control "
                placeholder="Regular"
                aria-label="Server"
              />
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </span>
              <input
                type="text"
                className="form-control "
                placeholder="Birthday"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control text-success border-success"
                id="basic-url"
                placeholder=" Success"
                aria-describedby="basic-addon3"
              />
              <span className="input-group-text">
                <i className="fa-solid fa-circle-check text-success"></i>
              </span>
            </div>

            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control text-warning border-danger"
                id="basic-url"
                placeholder="Error Input"
                aria-describedby="basic-addon3"
              />
              <span className="input-group-text">
                <i className="fa-solid fa-futbol text-danger"></i>{" "}
              </span>
            </div>
          </div>
        </form>
      </section>

      <div className="second-form">
        <div className="sentences">
          <small>FORM CONTROLS (ALTERNATIVE)</small>
        </div>
        <section className="container">
          <form className="row">
            <div className="col-lg-4">
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Regular"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Regular"
                  aria-label="Server"
                />
              </div>

              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </span>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Birthday"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control text-success border-success"
                  id="basic-url"
                  placeholder=" Success"
                  aria-describedby="basic-addon3"
                />
                <span className="input-group-text">
                  <i className="fa-solid fa-circle-check text-success"></i>
                </span>
              </div>

              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control text-warning border-danger"
                  id="basic-url"
                  placeholder="Error Input"
                  aria-describedby="basic-addon3"
                />
                <span className="input-group-text">
                  <i className="fa-solid fa-futbol text-danger"></i>{" "}
                </span>
              </div>
            </div>
          </form>
        </section>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <small className="cb text-uppercase font-weight-bold mb-4">
                Checkboxes
              </small>
              <div className="form-check mb-4 mt-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Unchecked
                </label>
              </div>
              <div className="form-check mb-4 mt">
                <input
                  className="form-check-input mb-4"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Checked
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Disabled Unchecked
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Disabled Checked
                </label>
              </div>
            </div>

            <div className="col-lg-3">
              <small className="cb text-uppercase font-weight-bold mb-4">
                Radios
              </small>
              <div className="form-check mb-4 mt-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>

            <div className="col-lg-3">
              <small className="cb text-uppercase font-weight-bold mb-4">
                Toggle Buttons
              </small>
              <div className="form-check form-switch mb-4 mt-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div className="form-check form-switch mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  defaultChecked
                />
              </div>
            </div>

            <div className="col-lg-3">
              <small className="cb text-uppercase font-weight-bold mb-4">
                Sliders
              </small>
              <input type="range" className="form-range mt-5" id="customRange1" />
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
