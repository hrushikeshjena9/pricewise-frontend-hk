import Image from "next/image";
import React, { useState } from "react";
import ProfessionalLiabilitypopupForm1 from "./ProfessionalLiabilitypopupForm1";
import SunAnimation from "../../../../common/SunAnimation";
import SameHeightDiv from "../../../../common/SameHeightDiv";

const ProfessionalLiabilityForm = ({
  setShowStepper,
  showStepper,
  setCount,
}) => {
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const [showMeev, setShowMeev] = useState(false);
  const className = "health-insuran";
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  return (
    <div>
      <main>
        <div className="eventwrp">
          <SameHeightDiv />
          <SunAnimation className={className} />
          <div className="container">
            <div className="card border-0">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-6 eventbxleft">
                    <div className="titlecybersecurity">
                      <h2>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/education.png"
                          className="img-fluid"
                        />
                        Beroepsaansprakelijkheid
                      </h2>
                    </div>
                    <div></div>
                    <div className="row">
                      <div className="col-9">
                        <div className="row">
                          <div className="col-lg-4">
                            <input
                              type="text"
                              className="form-control "
                              id="input1"
                              placeholder="Postcode"
                            />
                          </div>
                          <div className="col-lg-4">
                            <input
                              type="text"
                              className="form-control "
                              id="input2"
                              placeholder="Huisnummer"
                            />
                          </div>
                          <div className="col-lg-4">
                            <input
                              type="text"
                              className="form-control "
                              id="input3"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <select className="form-select" aria-label="Select">
                              <option selected>Beroepsaanspraak</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </div>
                          <div className="col-lg-6 position-relative">
                            <select className="form-select" aria-label="Select">
                              <option selected>Verzekeraar</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 top-gender-table  text-nowrap">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td>
                                    <label>Geslacht</label>
                                  </td>
                                  <td>
                                    <div className="radio-icon c-top-man-business-interruption-insurance">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="man"
                                        name="geslacht"
                                      />
                                      <label htmlFor="man">
                                        Man{" "}
                                        <i className="fas fa-2x fa-mars icon" />
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="radio-icon c-top-vrouw-business-interruption-insurance">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="vrouw"
                                        name="geslacht"
                                      />
                                      <label htmlFor="vrouw">
                                        Vrouw{" "}
                                        <i className="fas fa-2x fa-venus icon" />
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 position-relative">
                            <input type="date" className="form-control" />
                            <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                            <div className="infcalcubx extra-pos">
                              <a href="javascript:void(0);" className="extra">
                                <i className="fas fa-2x fa-user-plus" />
                                <span>Extra?</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12 position-relative">
                            <select className="form-select" aria-label="Select">
                              <option disabled selected>
                                Branche
                              </option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col px-4 radiobx">
                            <div className="row">
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                <input type="radio" name="test" id="cb21" />
                                <label htmlFor="cb21" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="horeca"
                                    src="/images/horeca.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Horeca
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Horeca"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Horeca</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                <input type="radio" name="test" id="cb22" />
                                <label htmlFor="cb22" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="aa"
                                    src="/images/detailhandel.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Detailhandel
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Detailhandel"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Detailhandel</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                <input type="radio" name="test" id="cb23" />
                                <label htmlFor="cb23" className="tooltip-container" >
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="aa"
                                    src="/images/Industrie.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Industrie
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Industrie"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Industrie</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                <input type="radio" name="test" id="cb24" />
                                <label htmlFor="cb24" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="aa"
                                    src="/images/agrosector.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Agrosector
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Agrosector"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Agrosector</p>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 position-relative">
                                <label className="form-label labeltitle">
                                  Meeverzekeren?
                                </label>
                                <div className="infcalcubx info-pos">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    aria-label="Content Goes Here"
                                    data-bs-original-title="Content Goes Here"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </div>
                                <div className="frm-toevoe-position text-center">
                                  <input
                                    className="form-check-input mb-0"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    onChange={() => setShowMeev(!showMeev)}
                                    checked={showMeev}
                                  />
                                  <div className="form-check-label d-block fw-bold">
                                    <label
                                      htmlFor="flexCheckDefault"
                                      className="form-check-label text-dark d-block fw-bold"
                                    >
                                      Toevoegen
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {showMeev && (
                          <>
                            <div className="row">
                              <div className="col-12">
                                <table className="table bottom-gender-table table-borderless">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <label>Wie?</label>
                                      </td>
                                      <td>
                                        <div className="radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="Partner"
                                            name="geslacht"
                                          />

                                          <label htmlFor="Partner">
                                            Partner{" "}
                                            <i className="fal fa-handshake-alt icon" />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="Kind"
                                            name="geslacht"
                                          />
                                          <label htmlFor="Kind">
                                            Personeel{" "}
                                            <i className="fad fa-male icon" />
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <label>Geslacht</label>
                                      </td>
                                      <td>
                                        <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="man2"
                                            name="geslacht"
                                          />
                                          <label htmlFor="man2">
                                            Man{" "}
                                            <i className="fas fa-2x fa-mars icon" />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="vrouw2"
                                            name="geslacht"
                                          />
                                          <label htmlFor="vrouw2">
                                            Vrouw{" "}
                                            <i className="fas fa-2x fa-venus icon" />
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 position-relative">
                                <input type="date" className="form-control" />
                                <div className="infbx info-in-absolute">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Content Goes Here"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label className="form-control">
                                  Beroepsaanspraak
                                </label>
                              </div>
                              <div className="col-lg-6 position-relative">
                                <select
                                  className="form-select"
                                  aria-label="Select"
                                >
                                  <option selected>Verzekeraar</option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>
                                </select>
                                <div className="infbx info-in-absolute">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Content Goes Here"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="row mt-4">
                          <div className="col-6">
                            <select className="form-select" aria-label="Select">
                              <option disabled selected>
                                Bedrijfsgrootte
                              </option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </div>
                          <div className="col-6 position-relative">
                            <input type="number" className="form-control" />
                            <div className="infbx only-info-home-insurance-date">
                              <div className="list-unstyled list-style-flex">
                                <a href="javascript:void(0);" className="extra">
                                  <i className="fas fa-2x fa-user-plus" />
                                  <span className="fw-bold text-dark">
                                    Extra?
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#addresschange"
                      className="text-success text-center d-block"
                      data-bs-toggle="modal"
                    >
                      <Image
                        src="/images/add-location-point.png"
                        width={24}
                        height={84}
                        alt="location"
                      />
                      Meerdere Vestigingen toevoegen.{" "}
                      <sup className="green-cyan">
                        <i className="fas  fa-info-circle" />
                      </sup>
                    </a>
                    <ProfessionalLiabilitypopupForm1 />

                    {/* <a href="javascritp:void();" className="help-estimat">Huip nodig bij het schatten?</a> */}
                    {showExtendedForm == 0 && (
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <div className="rangebtn">
                            <button
                              className="seenowbtn"
                              onClick={handleSecondStep}
                            >
                              Start vergelijking
                            </button>
                            <a onClick={() => setShowExtendedForm(1)}>
                              Toch snel vergelijken?
                            </a>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="cyberprivacylink"
                          >
                            <i className="fas fa-2x fa-shield-alt" />
                            <span>Privacy</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* ------extended form------- */}
                  {showExtendedForm == 1 && (
                    <div className="col-lg-6 eventbxright">
                      <div className="row">
                        <div className="col-9">
                          <div className="row mt-3">
                            <div className="col-12 position-relative">
                              <select
                                className="form-select"
                                aria-label="Select"
                              >
                                <option disabled selected>
                                  Aanvullende dekking
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                              <div className="infcalcubx frm-toevoe-position text-center">
                              <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#moreviewmodel"
                                >
                                  <Image
                                    width={50}
                                    height={22}
                                    alt="aa"
                                    src="/images/viewpop.png"
                                  />
                                  <span>Overzicht?</span>
                                </a>
                              </div>
                              
                            </div>
                          </div>

                          {/* Modal Start */}

                          <div
                            className="modal model-view fade"
                            id="moreviewmodel"
                            tabIndex={-1}
                            aria-labelledby="moreviewmodelLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="moreviewmodelLabel"
                                  >
                                    Selecteer of vul in
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
                                      <div
                                        className="accordion"
                                        id="accordionleft"
                                      >
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading3"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse3"
                                              aria-expanded="false"
                                              aria-controls="collapse3"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/carbail.png"
                                              />
                                              <span className="d-block">
                                                Constructionallrisk
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading3"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Maak je gebruik van een
                                                chiropractor, accupunturist of
                                                andere alternatieve
                                                geneeswijzen?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nooit. ik maak hier geen
                                                  gebruik van.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Ik ga soms voor wat klachten
                                                  langs. Gemiddeld 1 tot 4 keer
                                                  per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Ik breng regelmatig een
                                                  bezoek. Gemiddeld 5 tot 8 keer
                                                  per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Ik heb last van een blessure
                                                  en/of chronische aandoening en
                                                  bezoek 9 tot 12 keer per jaar
                                                  een alternatieve geneeswijzen.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijke advies:
                                                      </b>
                                                      Verwacht je niet een
                                                      bezoek te brengen aan een
                                                      alternatieve geneeswijzen.
                                                      Neem dan, hiervoor geen
                                                      aanvullende verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading4"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse4"
                                              aria-expanded="false"
                                              aria-controls="collapse4"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/bav.png"
                                              />
                                              <span className="d-block">
                                                Beroepsaansprakelijkheid
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading4"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Wanneer heb je nieuwe medicijnen
                                                nodig?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nooit. ik heb geen medicijnen
                                                  nodig.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Af en toe heb ik nieuwe
                                                  medicijnen nodig gemiddeld 1
                                                  tot 5 keer per jaar
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Soms, heb ik een herhaal
                                                  recept nodig gemiddeld 6 tot
                                                  10 keer per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Vaak, heb ik meerdere herhaal
                                                  recepten nodig gemiddeld 11
                                                  tot 15 keer per jaar.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijk advies:
                                                      </b>
                                                      Verwacht je geen gebruik
                                                      te maken van medicatie.
                                                      Neem dan, hiervoor geen
                                                      aanvullende verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading5"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse5"
                                              aria-expanded="false"
                                              aria-controls="collapse5"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/constant.jpg"
                                              />
                                              <span className="d-block">
                                                Rechtsbijstand
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading5"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Heb je een bril of lenzen?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Geen van beide.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Alleen een bril
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Alleen lenzen
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Ik heb een bril en/of lenzen
                                                  en mijn sterkte is 6+ of 6-
                                                  en/of hoger.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Ik heb een bril en/of lenzen,
                                                  en mijn sterkte is lager dan
                                                  6+ of 6-.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijk advies:
                                                      </b>
                                                      Verwacht je geen gebruik
                                                      te maken van een Opticiën.
                                                      Neem dan, hiervoor geen
                                                      aanvullende verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
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
                                      <div className="col-12 text-center  ">
                                        <button className="btnps">
                                          Opslaan
                                        </button>
                                        <a href="#" className="reset">
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

                          {/* Modal End */}

                          <div className="row">
                            <div className="col-12 px-4 radiobx">
                              <div className="row justify-content-center mb-4">
                                <div
                                  className="col-lg-3  col-6  col-sm-6  p-0  col-md-3"
                                  data-bs-toggle="modal"
                                  data-bs-target="#carModalpopup"
                                >
                                  <input type="radio" name="test" id="cb21" />
                                  <label htmlFor="cb21">
                                    <Image
                                      width={128}
                                      height={128}
                                      alt="horeca"
                                      src="/images/carbail.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">CAR</span>
                                  </label>
                                </div>
                                <div
                                  className="col-lg-3  col-6  col-sm-6  p-0  col-md-3"
                                  data-bs-toggle="modal"
                                  data-bs-target="#bavModalpopup"
                                >
                                  <input type="radio" name="test" id="cb22" />
                                  <label htmlFor="cb22">
                                    <Image
                                      width={128}
                                      height={128}
                                      alt="aa"
                                      src="/images/corporateliability.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">AVB</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Popup or Modal */}
                          <div
                            className="modal fade"
                            id="carModalpopup"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Selecteer of vul in
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-10">
                                      <select className="form-select">
                                        <option>Wat is jouw branche?</option>
                                        <option></option>
                                        <option></option>
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <div className="infcalcubx">
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Content Goes Here"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                      <div className="row radiobx">
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cb2dfef1"
                                          />
                                          <label htmlFor="cb2dfef1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="househang"
                                              src="/images/househang.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Vastgoed
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbade2d1"
                                          />
                                          <label htmlFor="cbade2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/emicalculate.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Financieel
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbdd2d1"
                                          />
                                          <label htmlFor="cbdd2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/ordericon.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Juridisch
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbaa2d1"
                                          />
                                          <label htmlFor="cbaa2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/paymenticon.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Incasso
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cb2dss1"
                                          />
                                          <label htmlFor="cb2ssd1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/docitem.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Medisch
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cb2dss1"
                                          />
                                          <label htmlFor="cb2ssd1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/setticon.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Octrooi
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-10">
                                      <select className="form-select">
                                        <option>Wat is jouw beroep?</option>
                                        <option></option>
                                        <option></option>
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <div className="infcalcubx">
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Content Goes Here"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="row mt-2">
                                        <div className="col-6">
                                          <label className="form-label labeltitle">
                                            Verzekerd bedrag
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="number"
                                            className="form-control"
                                            id="numberInput1"
                                            min={1}
                                            defaultValue={1}
                                          />
                                        </div>
                                        <div className="col-2">
                                          <div className="infbx infcalcubx infbx2">
                                            <a
                                              href="javascript:void(0);"
                                              data-bs-toggle="tooltip"
                                              data-bs-html="true"
                                              aria-label="Content Goes Here"
                                              data-bs-original-title="Content Goes Here"
                                            >
                                              <i className="fas fa-2x fa-info-circle" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-10">
                                          <input
                                            type="range"
                                            className="form-range"
                                            id="customRange1"
                                            min={1}
                                            max={2}
                                            defaultValue={1}
                                          />
                                          <label
                                            htmlFor="customRange1"
                                            className="form-label"
                                          >
                                            € <span id="rangeValue1">0</span>{" "}
                                            €1.250.000
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="popupbtn mb-4">
                                  <p>
                                    Totaal verzekerd bedrag:{" "}
                                    <span>€ 250.000</span>
                                  </p>
                                  <div className="row">
                                    <div className="col-12 text-center  ">
                                      <button className="btnps">Opslaan</button>
                                      <a href="#" className="reset">
                                        <i className="fas fa-2x fa-sync-alt" />
                                        <span>Reset</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Popup or End */}

                          {/* BAV Popup or Modal */}
                          <div
                            className="modal fade"
                            id="bavModalpopup"
                            tabIndex={-1}
                            aria-labelledby="bavModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Selecteer of vul in
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-10">
                                      <select className="form-select">
                                        <option>Soort constructie</option>
                                        <option></option>
                                        <option></option>
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <div className="infcalcubx">
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Content Goes Here"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                      <div className="row radiobx">
                                        <div className="col-3">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cb2dfef1"
                                          />
                                          <label htmlFor="cb2dfef1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="househang"
                                              src="/images/garage-2.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Garage
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-3">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbade2d1"
                                          />
                                          <label htmlFor="cbade2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/veranda.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Veranda
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-3">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbdd2d1"
                                          />
                                          <label htmlFor="cbdd2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/parkings.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Schuur
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-3">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbaa2d1"
                                          />
                                          <label htmlFor="cbaa2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/traditional.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Etage
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-10">
                                      <select className="form-select">
                                        <option>Doorlopende CAR</option>
                                        <option></option>
                                        <option></option>
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <div className="infcalcubx">
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Content Goes Here"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="row mt-2">
                                        <div className="col-6">
                                          <label className="form-label labeltitle">
                                            Looptijd
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="number"
                                            className="form-control"
                                            id="numberInput1"
                                            min={1}
                                            defaultValue={1}
                                          />
                                        </div>
                                        <div className="col-2">
                                          <div className="infbx infcalcubx infbx2">
                                            <a
                                              href="javascript:void(0);"
                                              data-bs-toggle="tooltip"
                                              data-bs-html="true"
                                              aria-label="Content Goes Here"
                                              data-bs-original-title="Content Goes Here"
                                            >
                                              <i className="fas fa-2x fa-info-circle" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-10">
                                          <input
                                            type="range"
                                            className="form-range"
                                            id="customRange1"
                                            min={1}
                                            max={2}
                                            defaultValue={1}
                                          />
                                          <label
                                            htmlFor="customRange1"
                                            className="form-label"
                                          >
                                            <span id="rangeValue1">
                                              12 maanden
                                            </span>{" "}
                                            24 maanden
                                          </label>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-10">
                                      <select className="form-select">
                                        <option>Aanvullende dekking</option>
                                        <option></option>
                                        <option></option>
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <div className="infcalcubx">
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Content Goes Here"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                      <div className="row radiobx">
                                        <div className="col-4 p-0">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cb2dfef1"
                                          />
                                          <label htmlFor="cb2dfef1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="househang"
                                              src="/images/hammer.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Aansprakelijkheid
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbade2d1"
                                          />
                                          <label htmlFor="cbade2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/tools.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Hulpmateriaal
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbdd2d1"
                                          />
                                          <label htmlFor="cbdd2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/helmet.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Werk
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbaa2d1"
                                          />
                                          <label htmlFor="cbaa2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/real-estate.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Bestaande bezit
                                            </span>
                                          </label>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="radio"
                                            name="test"
                                            id="cbaa2d1"
                                          />
                                          <label htmlFor="cbaa2d1">
                                            <Image
                                              width={128}
                                              height={128}
                                              alt="horeca"
                                              src="/images/toolbox.png"
                                              className="img-fluid"
                                            />
                                            <span className="checkbox-label">
                                              Persoonlijk bezit
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="popupbtn mb-4">
                                  <p>
                                    Totaal verzekerd bedrag:{" "}
                                    <span>€ 9.245</span>
                                  </p>
                                  <div className="row">
                                    <div className="col-12 text-center  ">
                                      <button className="btnps">Opslaan</button>
                                      <a href="#" className="reset">
                                        <i className="fas fa-2x fa-sync-alt" />
                                        <span>Reset</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Popup or End */}

                          <div className="row">
                            <div className="col-12 position-relative">
                              <select className="form-select">
                                <option>Wat is jouw beroep?</option>
                              </select>
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-2">
                            <div className="col-8">
                              <label className="form-label labeltitle">
                                Bruto omzet
                              </label>
                            </div>
                            <div className="col-4 position-relative">
                              <input
                                type="number"
                                className="form-control"
                                id="numberInput1"
                                min={1}
                                defaultValue={1}
                              />
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                                min={1}
                                max={2}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€30.000</span>
                                  <span>€ 1.250.000</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-8">
                              <label className="form-label labeltitle">
                                Verzekerd bedrag
                              </label>
                            </div>
                            <div className="col-4 position-relative">
                              <input
                                type="number"
                                className="form-control"
                                id="numberInput1"
                                min={1}
                                defaultValue={1}
                              />
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                              <div className="infcalcubx frm-toevoe-position text-center">
                              <a
                                  data-bs-toggle="modal"
                                  href="#decorationModalToggle"
                                  role="button"
                                  className="calculatorwrp"
                                >
                                  <i className="fas fa-calculator"></i>
                                  <span>Hulp nodig?</span>
                                </a>
                              </div>
                            
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                                min={1}
                                max={2}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€30</span>
                                  <span>€50.000</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-12 position-relative">
                              <select
                                className="form-select"
                                aria-label="Select"
                              >
                                <option disabled selected>
                                  Aanbevolen verzekeringen
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                              <div className="infcalcubx frm-toevoe-position text-center">
                              <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#moreviewmodel"
                                >
                                  <Image
                                    width={50}
                                    height={22}
                                    alt="aa"
                                    src="/images/viewpop.png"
                                  />
                                  <span>Overzicht?</span>
                                </a>
                              </div>
                              
                            </div>
                          </div>
                          <div className="row ">
                        <div className="col-9 col-lg-12 px-4 radiobx">
                          <div className="row justify-content-lg-center">
                            <div className="col-lg-3  col-4  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb21" />
                              <label htmlFor="cb21" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="horeca"
                                  src="/images/companyassets.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  Bedrijfsmiddelen
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Bedrijfsmiddelen"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Bedrijfsmiddelen</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-3  col-4  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb22" />
                              <label htmlFor="cb22" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/voteicon.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  Glas
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Glas"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Glas</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-3  col-4  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb2d2" />
                              <label htmlFor="cb2d2" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/businessdamage.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  Bedrijfschade
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Bedrijfschade"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Bedrijfschade</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <div className="rangebtn">
                            <button
                              className="seenowbtn"
                              onClick={handleSecondStep}
                            >
                              Bekijk jouw voordeel
                            </button>
                            <a onClick={() => setShowExtendedForm(0)}>
                              Uitgebreid Vergelijken
                            </a>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="cyberprivacylink"
                          >
                            <i className="fas fa-2x fa-shield-alt" />
                            <span>Privacy</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalLiabilityForm;
