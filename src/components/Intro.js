import React from "react";

function Intro() {
  return (
    <section className="intro">
      <div className="center-work">
        <div className="card bg-transparent">
          <img className="m-auto" src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/argon-white.png" />
          <p className="card-text mx-auto">
            A beautiful Design System for Bootstrap 4 and Angular 7.
          </p>
          <span className="tex">It's Free and Open Source.</span>
          <div className="buttons d-flex justify-content-center">
            <a className="btn1">
              <i class="fa-solid fa-cloud-arrow-down"></i>DOWNLOAD ANGULAR
            </a>
            <div className="blacktext">
              <span className="gitlogo">
                <i class="fa-brands fa-github"></i>
              </span>
              <span className="redtext">
                <span className="text-warning">STAR US</span>ON GITHUB
              </span>
            </div>
          </div>
        </div>
        <div className="small-text d-flex justify-content-center">
            <small>*proudly coded by</small>
            <img src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/creativetim-white-slim.png"/>
          </div>
      </div>
    </section>
  );
}

export default Intro;
