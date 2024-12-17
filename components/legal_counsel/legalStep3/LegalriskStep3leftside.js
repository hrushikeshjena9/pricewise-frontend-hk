import Image from "next/image";
import React from "react";

function LegalriskStep3leftside() {
  return (
    <>
      <h2>Stel jouw deal vandaag veilig</h2>
      <div className="secure-wrp">
        <Image
          width={200}
          height={200}
          alt="aa"
          src="/images/secure.png"
          className="img-fluid secureimg"
        />
      </div>
      <p>
        Vul de resterende gegevens in die de aanbieder nodig heeft, zodat wij
        alles vlekkenloos kunnen regelen en jij snel hier van kan profiteren.
      </p>
      <div className="card">
        <div className="card-header">
          <h4 className="mb-0">
            <Image
              src="/images/contact.png"
              width={52}
              height={52}
              alt="contact"
            />{" "}
            Contactgegevens
          </h4>
        </div>
        <div className="card-body">
          <form>
            {/* First Row */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Geslacht
              </label>
              <div className="col-sm-4 d-flex align-items-center">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="male"
                    defaultValue="Man"
                  />
                  <label className="form-check-label" htmlFor="male">
                    <i className="fas fa-mars" /> Man
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="female"
                    defaultValue="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    <i className="fas fa-venus" /> Vrouw
                  </label>
                </div>
              </div>
              <label htmlFor="initials" className="col-sm-3 col-form-label">
                Voorletters
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="initials"
                  name="initials"
                  placeholder="E"
                />
              </div>
            </div>
            {/* Second Row */}
            <div className="row mb-3">
              <label htmlFor="firstname" className="col-sm-3 col-form-label">
                Voornaam
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="Bijv. Energise"
                />
              </div>
              <label
                htmlFor="interjections"
                className="col-sm-3 col-form-label"
              >
                Tussenvoegsels
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="interjections"
                  name="interjections"
                  placeholder="Bijv. Van der"
                />
              </div>
            </div>
            {/* Third Row */}
            <div className="row mb-3">
              <label htmlFor="surname" className="col-sm-3 col-form-label">
                Achternaam
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  name="surname"
                  placeholder="Biv. Company"
                />
              </div>
              <label htmlFor="dob" className="col-sm-3 col-form-label">
                Geboortedatum
              </label>
              <div className="col-sm-3">
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                />
              </div>
            </div>
            {/* Fourth Row */}
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-3 col-form-label">
                E-mail
              </label>
              <div className="col-sm-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Bijv. Naam@mail.ni"
                />
              </div>
              <label
                htmlFor="accountNumber"
                className="col-sm-3 col-form-label"
              >
                Rekeningnummer
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="NL00BANK00000000"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Postcode
              </label>
              <div className="col-sm-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Bijv. 1200AA"
                />
              </div>
              <label
                htmlFor="accountNumber"
                className="col-sm-3 col-form-label"
              >
                Nummer &amp; toevoeging
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Bijv. 112A"
                />
              </div>
            </div>

            {/* Six Row */}
            <div className="row mb-3">
              <label htmlFor="text" className="col-sm-3 col-form-label">
                Mobiel
              </label>
              <div className="col-sm-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="06-12345678"
                />
              </div>
              <label
                htmlFor="accountNumber"
                className="col-sm-3 col-form-label"
              >
                Vaste telefoon
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Regio-0000000"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0">
            <Image
              src="/images/tracking.png"
              width={52}
              height={52}
              alt="contact"
            />{" "}
            Levering
          </h4>
        </div>
        <div className="card-body">
          <form>
            {/* First Row */}
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-medium">Wijkt jou postadres af?</label>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="yes"
                          defaultValue="yes"
                        />
                        <label className="form-check-label mt-1" htmlFor="yes">
                          Ja
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="no"
                          defaultValue="no"
                          defaultChecked
                        />
                        <label className="form-check-label mt-1" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <label htmlFor="houseNumber" className="col-form-label">
                  Voorkeur startdatum?*
                </label>
                <input
                  type="date"
                  className="form-control "
                  id="houseNumber"
                  name="houseNumber"
                />
              </div>
            </div>
            {/* Second Row for Additional Input Box */}
            <div
              className="row mb-3"
              id="additionalInputRow"
              style={{ display: "block" }}
            >
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="additionalInput"
                  name="additionalInput"
                  placeholder="Bijv 1200AA 112A"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <div className="additional-ques-box-title">
            <h4 className="mb-0">
              <Image
                width={200}
                height={200}
                alt="aa"
                src="/images/interview.png"
                className="img-fluid"
              />
              Aanvullende vragen <i className="fas fa-info-circle" />
            </h4>
          </div>
        </div>
        <div className="card-body">
          <div className="add-ques-bx">
            <div className="row">
              <div className="col-lg-6 position-relative">
                <div className="step-trd-infoform">
                  <a href="javascript:void(0);">
                    <i className="fas fa-info-circle text-success ms-2" />
                  </a>
                </div>
                <p>
                  Zijn er voorvallen geweest of aanwijzingen die de behoefte aan
                  rechtshulp vergroten of een beroep op rechtsbijstand
                  waarschijnlijk maken?
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex form-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="yes"
                          defaultValue="yes"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Ja
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="no"
                          defaultValue="no"
                        />
                        <label className="form-check-label" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                    <textarea
                      className="form-control mt-2"
                      placeholder="Omschrijving"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <p>
                  Ben jij de afgelopen 3 jaar verwikkeld geweest of nog
                  verwikkeld in juridische geschillen of rechtzaken?*
                </p>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="d-flex form-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="postalAddressDifferent"
                      id="yes"
                      defaultValue="yes"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Ja
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="postalAddressDifferent"
                      id="no"
                      defaultValue="no"
                    />
                    <label className="form-check-label" htmlFor="no">
                      Nee
                    </label>
                  </div>
                </div>
                <textarea
                  className="form-control mt-2"
                  placeholder="Omschrijving"
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="insurance-sec mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="insu-title">
                <h4>Verzekeringsverleden</h4>
                <p className="text-danger">
                  Let op! Deze vragen gelden voor jou, jouw gezinsleden of
                  andere personen die onder deze verzekering vallen.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="add-ques-bx">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="ad-ques-text">
                      <p>
                        Heb jij of een belanghebbende ooit te maken gehad met:*
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex form-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins1"
                          id="yes"
                          defaultValue="yes"
                          onclick="insu1();"
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Ja
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins1"
                          id="no"
                          defaultValue="no"
                          onclick="insu2();"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hd-text">
                    <ul>
                      <li>
                        <a href="#">Een schademelding</a>
                      </li>
                      <li>
                        <a href="#">
                          Weigering bij een aanvraag of opzegging van de
                          Verzekeraar
                        </a>
                      </li>
                      <li>
                        <a href="#">Veroordeling of strafbeschikking</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="add-ques-bx">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="ad-ques-text">
                      <p>Schade</p>
                      <span>
                        Zijn er in de afgelopen 5 jaar schaden veroorzaak of
                        geleden door gebeurtenissen die gedekt zijn op
                        verzekering(en) die jij aanvraagt?
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex form-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins2"
                          id="yes"
                          defaultValue="yes"
                          onclick="insu3();"
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Ja
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins2"
                          id="no"
                          defaultValue="no"
                          onclick="insu4();"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label>Verzekering</label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label className="fw-bold">Rechtsbijstandverzekering</label>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label>Schadebedrag per gebeurtenis*</label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <input
                      placeholder="€ 0,00"
                      type="text"
                      className="form-control mb-2"
                    />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label>Schade oorzaak*</label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <textarea
                      cols={30}
                      rows={4}
                      className="form-control"
                      placeholder="Oorzaak"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="add-ques-bx">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="ad-ques-text">
                      <p>Voorgaande verzekeringen*</p>
                      <span>
                        Zijn er in de afgelopen 5 jaar door een
                        verzekeringsmaatschappij enige vorm van verzekering
                        geweigerd of opgezegd, of zijn er beperkende voorwaarden
                        of verhoogde premies aangekondigd, dan wel verplicht
                        gesteld die specifiek en uitsluitend voor dat risico en
                        voor de verzekering golden?
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex form-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins3"
                          id="yes"
                          defaultValue="yes"
                          onclick="insu5();"
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Ja
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins3"
                          id="no"
                          defaultValue="no"
                          onclick="insu6();"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                    <div
                      className=" mb-3 mt-3"
                      id="insudiv3"
                      style={{ display: "block" }}
                    >
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Reden"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="add-ques-bx">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="ad-ques-text">
                      <p>Veroordeling of strafbeschikking*</p>
                      <span>
                        Is er in de afgelopen 8 jaar sprake geweest van een
                        veroordeling (ongeacht de opgelegde straf) of een
                        strafbeschikking of een transactie (beide voor een
                        taakstraf van meer dan 20 uur), of aanraking met
                        justitie ter uitvoering van een opgelegde
                        (straf)maatregel in verband met bovenstaande, of een een
                        uitgebrachte dagvaaring in een lopende procedure, alles
                        ter zake van een misdrijf?
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex form-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins4"
                          id="yes"
                          defaultValue="yes"
                          onclick="insu7();"
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Ja
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ins4"
                          id="no"
                          defaultValue="no"
                          onclick="insu8();"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                    <div
                      className=" mb-3 mt-3"
                      id="insudiv4"
                      style={{ display: "block" }}
                    >
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Reden"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fas fa-shield-check" /> Verificatie
          </h4>
        </div>
        <div className="cerfi-bx">
          <div className="certi-cont-bx">
            <h6>
              Verfieer hier jouw bank gegevens en voorkom samen fraude.
              <i className="fas fa-info-circle text-success" />
            </h6>
            <div className="mb-3">
            <div className="ac-num">
              <p>Ik bevestig mijn rekeningnummer</p>
              <Image
                width={200}
                height={200}
                alt="aa"
                src="/images/private.png"
              />
            </div>
            <Image
              className="ms-2"
              width={34}
              height={34}
              alt="aa"
              src="/images/time-left.png"
            />
            </div>

            <div className="mb-3">
              <div className="form-check p-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="voorwaardenCheckbox"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="voorwaardenCheckbox"
                >
                  Ik accepteer alle <a className="ac-con-bx" href="#">voorwaarden</a>.
                </label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check p-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="actiesCheckbox"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="actiesCheckbox"
                >
                  Ik wil graag op de hoogte blijven van alle acties van Energise
                  Company.
                </label>
              </div>
            </div>

            <div className="ac-con-textarea">
              <label htmlFor>Ik heb nog een opmerking:</label>
              <textarea
                name
                id
                cols={30}
                rows={4}
                className="form-control"
                placeholder="Type een bericht..."
                defaultValue={""}
              />
            </div>
            <div className="ac-con-btn">
              <a
                href="#"
                className="btn btn-light fw-bold px-3 py-2 rounded-5 border"
              >
                Controleer gegevens
              </a>
              <a href="#" className="btn-two">
                Aanvragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LegalriskStep3leftside;
