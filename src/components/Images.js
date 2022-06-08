import React from "react";

function Images() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h3 className="typ-text kkn ">Images</h3>

          <div className="col-sm-3">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Image
            </small>
            <img
              src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-1-800x800.jpg"
              className="rounded-3 jj"
              alt="Avatar"
            />
          </div>

          <div className="col-sm-3">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              CIRCLE IMAGE
            </small>
            <img
              src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-2-800x800.jpg"
              className="rounded-circle jj"
              alt="Avatar"
            />
          </div>

          <div className="col-sm-3">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              RAISED
            </small>
            <img
              src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-3-800x800.jpg"
              className="rounded-3 jj"
              alt="Avatar"
            />
          </div>

          <div className="col-sm-3">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              CIRCLE RAISED
            </small>
            <img
              src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-4-800x800.jpg"
              className="rounded-circle jj"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Images;
