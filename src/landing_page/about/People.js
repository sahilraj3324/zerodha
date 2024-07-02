import React from "react";

function People() {
  return (
    <div className="container ">
      <div className="row mt- p-5">
        <h1 className="text-center">People</h1>

        <div className="row mt-5  p-5">
          <div className="col-6 p- text-muted fs- text-center">
            <img
              src="media/images/sahil.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
              className=""
            />
            <p className="mt-5 fs-4">SAHIL RAJ GUPTA</p>
            <p className=" ">Founder , CEO</p>
          </div>
          <div className="col-6 p-5 text-muted">
            <p>
              {" "}
              SAHIL bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.{" "}
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
