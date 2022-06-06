import React from "react";

function Typography() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="typ-text">Typography</h2>
        <div className="headings">
          <h3>Headings</h3>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
              Heading 1
            </small>
          </div>
          <div className="col-sm-9">
            <h1 className="text-muted">Argon Design System</h1>
          </div>
        </div>


        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
              Heading 1
            </small>
          </div>
          <div className="col-sm-9">
            <h2 className="text-muted">Argon Design System</h2>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
              Heading 1
            </small>
          </div>
          <div className="col-sm-9">
            <h3 className="h3-col9 text-muted">Argon Design System</h3>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
              Heading 1
            </small>
          </div>
          <div className="col-sm-9">
            <h4 className="text-muted">Argon Design System</h4>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight ">
              Heading 1
            </small>
          </div>
          <div className="col-sm-9">
            <h5 className="text-muted">Argon Design System</h5>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight">
              Heading 1
            </small>
          </div>
          <div className="col-sm-9">
            <h6 className="text-muted">Argon Design System</h6>
          </div>
        </div>

        
        </div>
      </div>
    </section>
  );
}

export default Typography;
