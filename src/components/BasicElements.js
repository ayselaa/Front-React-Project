import React from "react";

function BasicElements() {
  return (
    <section className="container">
      <h2 className="basic">Basic Elements</h2>
      <h3 className="h3-class">Buttons</h3>
      <div className="buttons"></div>
      <button type="button" className="btns btn-primary btn-lg">
        BUTTON
      </button>
      <span>
        {" "}
        <button type="button" className="btnss btn-primary btn-lg">
          <i className="fa-solid fa-calendar-check"></i>WITH ICON
        </button>
      </span>
      <button type="button" className="btns btn-primary btn-lg">
        <i className="fa-solid fa-calendar-check"></i>
      </button>
      <div className="small">
        <small>PICK YOUR SIZE</small>
      </div>
      <div className="buttonss"></div>
      <button type="button" className="small-btn btn-primary btn-lg">
        SMALL
      </button>
      <span>
        {" "}
        <button type="button" className="regular-btn btn-primary btn-lg">
          REGULAR
        </button>
      </span>
      <button type="button" className="large-btn btn-primary btn-lg">
        LARGE BUTTON
      </button>
      <div className="pick">
        <small>PICK YOUR COLOR</small>
      </div>
      <div className="color-button">
        <button type="button" className="large-btn btn-primary ">
          PRİMARY
        </button>
        <button type="button" className="large-btn bg-info btn-primary btn-lg">
          İNFO
        </button>
        <button
          type="button"
          className="large-btn bg-success btn-primary btn-lg"
        >
          SUCCESS
        </button>
        <button
          type="button"
          className="large-btn bg-warning btn-primary btn-lg"
        >
          WARNING
        </button>
        <button
          type="button"
          className="large-btn bg-danger btn-primary btn-lg"
        >
          DANGER
        </button>
        <button
          type="button"
          className="large-btn bg-light btn-primary text-primary btn-lg"
        >
          NEUTRAL
        </button>
      </div>
      <div className="outline">
        <small>OUTLINE</small>
      </div>
      <div className="outlinee-button">
        <button type="button" className="btnk btn-1 btn-outline-primary ">
          OUTLINE-PRIMARY
        </button>
        <button type="button" className="btnk btn-1 btn-outline-info">
          OUTLINE-INFO
        </button>
        <button type="button" className="btnk btn-1 btn-outline-success">
          OUTLINE-SUCCESS
        </button>
        <button type="button" className="btnk btn-1 btn-outline-warning">
          OUTLINE-WARNING
        </button>
        <button type="button" className="btnk btn-1 btn-outline-danger">
          OUTLINE-DANGER
        </button>
      </div>
      <div className="link-button">
        <small>LINKS</small>
      </div>
      <div className="link-buttons">
        <a type="button" className="btn btn-link text-default">
          DEFAULT
        </a>
        <a type="button" className="btn btn-link text-primary">
          PRIMARY
        </a>
        <a type="button" className="btn btn-link text-info">
          INFO
        </a>
        <a type="button" className="btn btn-link text-success">
          SUCCESS
        </a>
        <a type="button" className="btn btn-link text-warning">
          WARNING
        </a>
        <a type="button" className="btn btn-link text-danger">
          DANGER
        </a>
      </div>
   
    </section>
  );
}

export default BasicElements;
