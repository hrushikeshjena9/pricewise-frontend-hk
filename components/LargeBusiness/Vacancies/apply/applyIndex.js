import React, { useState } from "react";
import ApplyContact from "./ApplyContact";
import ApplyFunction from "./ApplyFunction";
import ApplyAvailabilty from "./ApplyAvailabilty";

const ApplyIndex = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <section className="login-top-title-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="log-title">
                <h3>
                Fantastisch dat <span>jij voor ons kiest</span>
                </h3>
                <p>
                  Jouw succes begint bij <span>ons</span>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-table-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="vac-left-box">
              <div className="vac-table">
                <div className="row px-2">
                  <div className="col-6  col-sm-3 p-0">
                    <div className="vac-box">
                      <span className="num-text">1</span>
                      <ul>
                        <li>Salaris </li>
                        <li>Tot .... </li>
                        <li>per uur </li>
                      </ul>
                      <i className="fal fa-euro-sign"></i>
                    </div>
                  </div>
                  <div className="col-6  col-sm-3 p-0">
                    <div className="vac-box">
                      <ul>
                        <li>Functie </li>
                        <li>.... </li>
                        <li>Manager </li>
                      </ul>
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="col-6  col-sm-3 p-0">
                    <div className="vac-box">
                      <ul>
                        <li>Locatie </li>
                        <li>.... </li>
                      </ul>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="col-6  col-sm-3 p-0">
                    <div className="vac-box">
                      <ul>
                        <li>Dienstverband </li>
                        <li>.... </li>
                      </ul>
                      <i className="fal fa-clock"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <section className="apply-form-sec">
        <div className="container">
            <div className="row">
              {count == 0 &&
                <ApplyContact  setCount={setCount} count={count} />
              }
               {count == 1 &&
                <ApplyFunction setCount={setCount} count={count} />
              }
              {count == 2 &&
                <ApplyAvailabilty setCount={setCount} count={count}/>
              }
            </div>
            {/* <div className="mt-3 text-center">
                <a href="#" className="btn-one">Verzenden</a>
            </div> */}
        </div>
      </section>
    </>
  );
};

export default ApplyIndex;
