import React from "react";

function Alerts() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h3 className="myalerts">Alerts</h3>
          <div className="alert alert-primary text-white mysuccess-bg" role="alert">
          <i class="like fa-solid fa-thumbs-up text-white"></i>Success! This is a success alert—check it out!
          </div>
          <div className="alert alert-secondary text-white mysecondary-bg" role="alert">
          <i class="fa-solid fa-bell bell text-white"></i>Info! This is an info alert—check it out!
          </div>
          <div className="alert alert-success text-white mydanger-bg" role="alert">
          <i class="fa-solid fa-bell bell-2 text-white"></i>Warning! This is a warning alert—check it out!
          </div>
          <div className="alert alert-danger text-white mypink-bg" role="alert">
          <i class="fa-solid fa-circle-radiation my-danger text-white"></i>Danger! This is a danger alert—check it out!
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alerts;
