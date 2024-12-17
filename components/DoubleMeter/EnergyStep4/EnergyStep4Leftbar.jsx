import Image from "next/image";
import React from "react";

const EnergyStep4Leftbar = ({ formData }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="lsttitle">
          <h2>
            <span>Jij weet,</span> wat jij wilt!
          </h2>
          <div className="secure-wrp">
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/secure.png"
              className="img-fluid secureimg"
            />
          </div>
          <h4>Bekijk jouw uitzonderlijk deal &amp; vergelijk nog meer</h4>
        </div>
        <div className="col-lg-12 lstleftbox">
          <div className="card">
            <div className="card-body">
              <h4>Veel plezier!</h4>
              <p>
                Bedankt voor jouw bestelling <b>(naam)</b>. Jij kan er voorlopig
                weer tegen aan!
                <br />
                <br />
                Wij hebben jouw gegevens verwerkt met een unieke
                bestellingsnummer (............). Jouw op maat gemaakte deal is
                verzonden naar <b>(email)</b>. Het kan soms voorkomen, dat jouw
                deal toch nog in de spam terecht is gekomen.
                <br />
                <br />
                Mocht jij nog vragen hebben? Neem gerust <a href="#">
                  contact
                </a>{" "}
                met ons op of bekijk de <a href="#">veel gestelde vragen.</a>{" "}
                Wij wensen jou namens onze team heel veel plezier.
                <br />
                <br />
                Tip: Wist je dat Energise Company{" "}
                <a
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#vergelijkMeerModal"
                >
                  vergelijk meer
                </a>{" "}
                korting geeft? Maak snel een <a href="#">account</a> aan en
                ontvang stapelgekken korting!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="vergelijkMeerModal"
        tabIndex={-1}
        aria-labelledby="vergelijkMeerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="vergelijkMeerModalLabel">
                Stap voor stap meer vergelijken
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body addmorepopup">
              <ul className="list-unstyled checkbox-wrapper-16">
                <li>
                  <div className="row">
                    <div className="col-3">
                      <Image
                        width={80}
                        height={80}
                        alt="internettv"
                        src="/images/internettv.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 text-center">
                      <span>Internet & TV</span>
                    </div>
                    <div className="col-3 text-end">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-tile">
                          <span className="checkbox-icon">
                            <Image
                              width={128}
                              height={128}
                              alt="Add"
                              src="/images/compairadd.png"
                              className="img-fluid"
                            />
                          </span>
                          <span className="checkbox-label" />
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-3">
                      <Image
                        width={90}
                        height={90}
                        alt="aa"
                        src="/images/smartphone.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 text-center">
                      <span>Smartphone</span>
                    </div>
                    <div className="col-3 text-end">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-tile">
                          <span className="checkbox-icon">
                            <Image
                              width={128}
                              height={128}
                              alt="Add"
                              src="/images/compairadd.png"
                              className="img-fluid"
                            />
                          </span>
                          <span className="checkbox-label" />
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-3">
                      <Image
                        width={80}
                        height={80}
                        alt="aa"
                        src="/images/cyber-security-3.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 text-center">
                      <span>Cyberbeveiliging</span>
                    </div>
                    <div className="col-3 text-end">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-tile">
                          <span className="checkbox-icon">
                            <Image
                              width={128}
                              height={128}
                              alt="Add"
                              src="/images/compairadd.png"
                              className="img-fluid"
                            />
                          </span>
                          <span className="checkbox-label" />
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="addmorelist">
                    <span>Toevoegen</span>
                    <a href="javascript:void(0);">
                      <i className="fas fa-2x fa-plus-circle" />
                    </a>
                  </div>
                </li>
              </ul>
              <div className="popupbtn">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="col-4">
                      <a href="#">
                        <Image
                          width={128}
                          height={128}
                          alt="Risico Scan"
                          src="/images/monitor.png"
                          className="img-fluid"
                        />
                        <span>Risico Scan</span>
                      </a>
                    </div>
                    <div className="col-4">
                      <button className="btnps">Opslaan</button>
                    </div>
                    <div className="col-3">
                      <a href="#" >
                        <i className="fas fa-2x fa-sync-alt" />
                        <span>Reset</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyStep4Leftbar;
