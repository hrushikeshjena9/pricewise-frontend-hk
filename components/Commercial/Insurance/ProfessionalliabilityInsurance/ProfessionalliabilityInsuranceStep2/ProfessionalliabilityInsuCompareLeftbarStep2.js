import React from "react";
import MailModal from "../../../../CommonModals/MailModal";
import Image from "next/image";

const ProfessionalliabilityInsuCompareLeftbarStep2 = () => {
  return (
    <>
      <div className="yourdetailsbox">
        <h5>Jouw gegevens:</h5>
        <ul className="infodetails">
          <li>Vergelijking</li>
          <li>Postcode:</li>
          <li>Huisnummer:</li>
          <li>Geboortedatum</li>
          <li>Bedrijfsgrootte</li>
          <li>Branche</li>
        </ul>
        <div className="yourdetailedit">
          <div className="row">
            <div className="col-lg-6">
              <a href="javascript:void(0);">
                <i className="fas fa-cog" /> Wijzig
              </a>
            </div>
            <div className="col-lg-6 wiz-bz">
              <ul>
                <li>
                  <i className="fas  fa-user" />
                  <span>1/1</span>
                </li>
                <li>
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/viewpop.png"
                    className="img-fluid"
                  />
                  <span>1/1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cyberbxright steprangeleft coverage-left-bar professional-liability-insurance">
        <div className="cov-sp2">
          <div className="row">
            <div className="col">
              <h6 className="type-cov">Aanvullende dekking</h6>
              <div className="infbx infbx2">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  aria-label="Content Goes Here"
                  data-bs-original-title="Content Goes Here"
                >
                  <i className="fas fa-2x fa-info-circle" />
                </a>
                <a href="javascript:void(0);" className="extra">
                  <Image src="/images/folder-3.png" width={32} height={32} alt="folder"/>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col radiobx">
              <div className="row">
                <div className="col-lg-6">
                  <input type="radio" name="test" id="rs1" />
                  <label htmlFor="rs1">
                    <a
                      className="info-icon"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas green-cyan  fa-2x fa-info-circle" />
                    </a>
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src="/images/carbail.png"
                      className="img-fluid"
                    />
                    <span className="checkbox-label">CAR</span>
                  </label>
                </div>
                <div className="col-lg-6">
                  <input type="radio" name="test" id="rs2" />
                  <label htmlFor="rs2">
                    <a
                      className="info-icon"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas green-cyan  fa-2x fa-info-circle" />
                    </a>
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src="/images/employee-2.png"
                      className="img-fluid"
                    />
                    <span className="checkbox-label">AVB</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-1">
            <div className="col">
              <select className="form-select">
                <option>Wat is jouw beroep?</option>
                <option></option>
                <option></option>
              </select>
              <div className="infbx">
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
        </div>

        <div className="cov-sp2">
        <div className="row">
            <div className="col-sm-8 col-12 col">
              <label className="form-label labeltitle">Bruto omzet</label>
            </div>
            <div className="col-sm-4 col-12 col">
              <input
                type="number"
                className="form-control "
                id="numberInput2"
                min={1}
                defaultValue={10}
              />
              <div className="infbx">
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
                id="customRange2"
                min={1}
                max={100}
                defaultValue={10}
              />
              <label htmlFor="customRange2" className="form-label">
                <div className="cus-num">
                    <span>10GB</span>
                    <span>100GB</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-12 col">
              <label className="form-label labeltitle">Verzekerd bedrag</label>
            </div>
            <div className="col-sm-4  col-12 col">
              <input
                type="number"
                className="form-control "
                id="numberInput1"
                min={1}
                defaultValue={1}
              />
              <div className="infbx infbx2">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  aria-label="Content Goes Here"
                  data-bs-original-title="Content Goes Here"
                >
                  <i className="fas fa-2x fa-info-circle" />
                </a>
                <a href="javascript:void(0);" className="extra">
                  <i className="fal fa-2x fa-calculator" />
                  {/* <span>Hulp nodig?</span> */}
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
              <label htmlFor="customRange1" className="form-label">
                <div className="cus-num">
                  <span>€35.000</span>
                  <span>€250.000</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="support">
        <h5>Extra filters</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="klantenscore"
          />
          <label className="form-check-label" htmlFor="klantenscore">
            Klantenscore (..)
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </label>
        </div>
        
      </div>
      <div className="enter-prise-acc protectionbx" style={{ borderRadius: 0 }}>
        <div className="entr-sc-title">
          <h4>Veel gestelde vragen</h4>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Vraag 1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptatibus natus quod ab necessitatibus. Accusantium, ut
                alias.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Vraag 2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Vraag 3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Vraag 4
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                Vraag 5
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailModal />
    </>
  );
};

export default ProfessionalliabilityInsuCompareLeftbarStep2;
