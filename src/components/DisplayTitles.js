import React from "react";


function DisplayTitles () {
    return(
    <section>
        <div className="container">
         <div className="row">

             <div className="display-h3"> 
            <h3>Display titles</h3>
             </div>

             <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
              Display 1
            </small>
          </div>
          <div className="col-sm-9">
            <h1 className="lanqidi-1 lanq text-muted">Argon Design System</h1>
          </div>
        </div>
        
        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
            Display 2
            </small>
          </div>
          <div className="col-sm-9">
            <h2 className="lanqidi-2 lanq text-muted">Argon Design System</h2>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
            Display 3
            </small>
          </div>
          <div className="col-sm-9">
            <h3 className="text-muted lanqidi-3 lanq">Argon Design System</h3>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-sm-3">
            <small className="text-uppercase text-muted  font-weight-bold">
            Display 4
            </small>
          </div>
          <div className="col-sm-9">
            <h4 className="text-muted lanqidi-4 lanq">Argon Design System</h4>
          </div>
        </div>

         </div>
        </div>
    </section>
    )
}





export default DisplayTitles;