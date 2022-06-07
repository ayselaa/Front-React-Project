import React from "react";

function ProfileIntro() {
  return (
    <section className="intro">
      <div _ngcontent-c3="" className="shape shape-style-1 shape-primary">
        <span className="span-50"></span>
        <span className="span-50"></span>
        <span className="span-75"></span>
        <span className="span-100"></span>
        <span className="span-75"></span>
        <span className="span-50"></span>
        <span className="span-150"></span>
        <span className="span-100"></span>
      </div>

      <span _ngcontent-c3="" className="span-50">
        <span _ngcontent-c3="" className="span-150"></span>
      </span>
      <div className="separator separator-bottom seperator-skew zindex-100 ">
        <svg
          _ngcontent-c3=""
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="10"
        >
          <polygon
            _ngcontent-c3=""
            className="fill-white"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container">
        <div className="card px-4">
          <div className="row d-flex">
            <div className="col-sm-4 order-lg-1 d-flex justify-content-center">
              <div className=" d-flex">
                <div className="prof-1 p-2 mr-4">
                  <p className="heading"> 22</p>
                  <span className="description text-muted">Friends</span>
                </div>

                <div className="prof-2 p-2">
                  <p className="heading">10</p>
                  <span className="description text-muted">Photos</span>
                </div>

                <div className="prof-3 p-2">
                  <p className="heading"> 89</p>
                  <span className="description text-muted">Comments</span>
                </div>
              </div>

              <div className="col-sm-3">
                <img
                  src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-4-800x800.jpg"
                  class="rounded-circle jj"
                />
              </div>

              <div className="card-profile-actions py-4  mt-lg-0">
              <a  class="btn btn-sm btn-info mr-4" href="javascript:void(0)">Connect</a>
              <a  class="btn btn-sm btn-default float-right" href="javascript:void(0)">Message</a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileIntro;
