import Image from "next/image";
import React from "react";

const CommercialStats = () => {
  return (
    <>
      <section className="surprise-sec ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center surprise-text">
                <h4>
                  We are Surprise, Lets Energise
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="surprise-item">
                <div className="sub-bxicon sub-bxicon-green">
                  <i className="fas fa-money-bill"></i>
                </div>
                <h4>
                  € <span className="count">{"411,94"}</span>
                </h4>
                <p>Gemiddelde besparing</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="surprise-item">
                <div className="sub-bxicon sub-bxicon-yellow">
                  <i className="far fa-thumbs-up"></i>
                </div>
                <h4 className="count">9.7</h4>
                <p>Aanbevelingen</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="surprise-item">
                <div className="sub-bxicon sub-bxicon-green">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h4 className="stat-number">104.119</h4>
                <p>Klanten vergeleken afgelopen week</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="surprise-item">
                <div className="sub-bxicon sub-bxicon-green">
                  <i className="far fa-handshake"></i>
                </div>
                <h4>★ ★ ★ ★ ★</h4>
                <p>100% independent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommercialStats;
