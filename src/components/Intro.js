import React from "react";

function Intro() {
  return (
    <section className="intro">
      <div className="center-work">
        <div className="card bg-transparent">
          <img
            className="m-auto"
            src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/argon-white.png"
            alt="Avatar"
          />
          <p className="card-text mx-auto">
            A beautiful Design System for Bootstrap 4 and Angular 7.
          </p>
          <span className="tex">It's Free and Open Source.</span>
          <div className="buttons d-flex justify-content-center">
            <a className="btn1" href>
              <i className="fa-solid fa-cloud-arrow-down"></i>DOWNLOAD ANGULAR
            </a>
            <div className="blacktext">
              <span className="gitlogo">
                <i className="fa-brands fa-github"></i>
              </span>
              <span className="redtext">
                <span className="text-warning">STAR US</span>ON GITHUB
              </span>
            </div>
          </div>
        </div>
        <div className="small-text d-flex justify-content-center">
          <small>*proudly coded by</small>
          <img src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/creativetim-white-slim.png" alt="Avatar" />
        </div>
      </div>

      <div _ngcontent-c3="" className="shape shape-style-1 shape-primary">
        <span className="span-150"></span>
        <span className="span-150"></span>
        <span className="span-150"></span>
        <span className="span-150"></span>
        <span className="span-150"></span>
        <span className="span-150"></span>
        <span className="span-150"></span>
        <span className="span-50"></span>
        <span className="span-50"></span>
        <span className="span-75"></span>
        <span className="span-100"></span>
        <span className="span-75"></span>
        <span className="span-50"></span>
        <span className="span-100"></span>
      </div>

      <span  className="span-50">
        <span className="span-150"></span>
      </span>
      <div className="separator separator-bottom seperator-skew zindex-100 ">
        <svg
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="10"
        >
          <polygon
            className="fill-white"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}

export default Intro;
