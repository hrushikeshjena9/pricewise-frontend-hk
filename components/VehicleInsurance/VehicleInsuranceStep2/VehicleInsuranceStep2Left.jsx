import Image from "next/image";
import React, { useState } from "react";
import MailModal from "../../CommonModals/MailModal";

const VehicleInsuranceStep2Left = () => {
    const [rangeValue, setRangeValue] = useState(1);
    const [rangeValue2, setRangeValue2] = useState(10);
    const [rangeValue3, setRangeValue3] = useState(1);
    // ----------range slider logic starts------------------
    const handleRangeChange = (e) => {
        setRangeValue(parseInt(e.target.value));
    };
    const handleRangeChange2 = (e) => {
        setRangeValue2(parseInt(e.target.value));
    };
    const handleRangeChange3 = (e) => {
        setRangeValue3(parseInt(e.target.value));
    };
    const handleInputChange = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue(value);
    };
    const handleInputChange2 = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue3(value);
    };
    const handleInputChange3 = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue3(value);
    };
    // ----------range slider logic ends--------------------


    return (
        <>
            <div className="col-lg-4">
                <div className="yourdetailsbox">
                    <h5>Jouw gegevens:</h5>
                    <ul className="infodetails">
                        <li>
                            Postcode:
                            <span></span>
                        </li>
                        <li>
                            Huisnummer:
                            <span></span>
                        </li>
                    </ul>
                    <div className="yourdetailedit">
                        <div className="row">
                            <div className="col-lg-6">
                                <a href="javascript:void(0);">
                                    <i className="fas fa-cog" /> Wijzig
                                </a>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <i className="fas fa-user"></i>
                                        <span>1/1</span>
                                    </li>
                                    <li>
                                        <Image
                                            alt="asd"
                                            width={35}
                                            height={32}
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

                <div className="health-insuranceleft">
                    <div className='row'>
                        <div className='col-7'>
                            <div className="row">
                                <div className="col-12 mb-2 position-relative">
                                    <select className="form-select" aria-label="Select">
                                        <option selected>Soort dekking</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                    <div className="infcalcubx info-in-absolute">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                            <i className="fas fa-2x fa-info-circle"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input me-2"
                                        type="radio"
                                        defaultValue
                                        id="klantenscore"
                                    />
                                    <label className="form-check-label" htmlFor="klantenscore">
                                        WA
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input  me-2"
                                        type="radio"
                                        defaultValue
                                        id="Windows"
                                    />
                                    <label className="form-check-label" htmlFor="Windows">
                                        WA+
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input  me-2"
                                        type="radio"
                                        defaultValue
                                        id="Windows"
                                    />
                                    <label className="form-check-label" htmlFor="Windows">
                                      ALL RISK
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row d-none">
                            <div className="col radiobx">
                                <div className="row">
                                        <div className="col-lg-4 col-7 pe-lg-0 col-md-4">
                                            <input type="radio" name="test" id="cb121" />
                                            <label htmlFor="cb121">
                                                <Image alt='aa' width={60} height={63} src="/images/wa.png" className="img-fluid" />
                                                <span className="checkbox-label">WA</span>
                                            </label>
                                        </div>
                                        <div className="col-lg-4 col-7 p-lg-0 col-md-4">
                                            <input type="radio" name="test" id="cb522" />
                                            <label htmlFor="cb522">
                                                <Image alt='aa' width={60} height={63} src="/images/waplus.png" className="img-fluid" />
                                                <span className="checkbox-label">WA+</span>
                                            </label>
                                        </div>
                                        <div className="col-lg-4 col-7 ps-lg-0 col-md-4">
                                            <input type="radio" name="test" id="cb552" />
                                            <label htmlFor="cb552">
                                                <Image alt='aa' width={60} height={63} src="/images/allriskauto.png" className="img-fluid" />
                                                <span className="checkbox-label">ALL RISK</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="yourdetailedit mb-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="javascript:void(0);"><i className="fas fa-cog" /> Wijzig</a>
                                    </div>
                                    <div className="col-lg-6 text-end">
                                        <ul>
                                            <li className='lh-1'><a href='javascript:void(0);' className='text-warning' data-bs-toggle="modal" data-bs-target="#VerschillenWeten">Verschillen weten?</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                            {/* modal start */}
                            <div className="modal fade Vdifferences" id="VerschillenWeten" tabIndex={-1} aria-labelledby="VerschillenWetenLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className='row'>
                                                <div className='col-lg-4'>
                                                <div className="risk-mod-bx">
                                                    <div className='info-insurance'>
                                                        <Image alt='aa' width={60} height={63} src="/images/wa.png" className="img-fluid" />
                                                        <p>WA</p>
                                                    </div>
                                                    <ul className='list-unstyled h-box'>
                                                        <li><i class="fas fa-asterisk"></i> <span>Schade bij een anderen voertuig</span></li>
                                                    </ul>
                                                    <p>
                                                        <b>Ons advies:</b> Heb je een voertuig vanaf 10 jaar of ouder.
                                                        En/of heb je weinig tot geen waardevolle accesoires.
                                                        Neem dan alleen een verplichte WA verzekering.
                                                        Hiermee voorkom je namelijke een onnodige hoge premie.
                                                    </p>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                  <div className="risk-mod-bx">
                                                    <div className='info-insurance'>
                                                        <Image alt='aa' width={60} height={63} src="/images/waplus.png" className="img-fluid" />
                                                        <p>WA+</p>
                                                    </div>
                                                    <ul className='list-unstyled h-box'>
                                                        <li><i class="fas fa-asterisk"></i><span> Schade bij een andere voertuig</span></li>
                                                        <li><i class="fas fa-asterisk"></i><span> Vandalisme</span></li>
                                                        <li><i class="fas fa-asterisk"></i><span> Diefstal</span></li>
                                                        <li><i class="fas fa-asterisk"></i><span> Ruitschade</span></li>
                                                        <li><i class="fas fa-asterisk"></i><span> Storm, Bliksem brand & explosie</span></li>
                                                    </ul>
                                                    <p>
                                                        <b>Ons advies: </b>
                                                        Heb je een voertuig jonger dan,
                                                        10 jaar en/of weinig tot veel waardevolle accesoires. Kies dan voor een Wa+ (beperkt Casco)
                                                    </p>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                   <div className="risk-mod-bx">
                                                    <div className='info-insurance'>
                                                        <Image alt='aa' width={60} height={63} src="/images/allriskauto.png" className="img-fluid" />
                                                        <p>ALL RISK</p>
                                                    </div>
                                                    <ul className='list-unstyled h-box'>
                                                        <li><i class="fas fa-asterisk"></i> <span>Schade bij een andere voertuig</span></li>
                                                        <li><i class="fas fa-asterisk"></i> <span>Vandalisme</span></li>
                                                        <li><i class="fas fa-asterisk"></i> <span>Diefstal</span></li>
                                                        <li><i class="fas fa-asterisk"></i> <span>Ruitschade</span></li>
                                                        <li><i class="fas fa-asterisk"></i> <span>Storm, Bliksem brand & explosie</span></li>
                                                        <li><i class="fas fa-asterisk"></i> <span>Eigen schuld bijv. botsingen & Waterschade</span></li>
                                                    </ul>
                                                    <p>
                                                        <b>Ons advies: </b>
                                                        Heb je een voertuig jonger dan, 5 jaar en/of weinig tot veel waardevolle accesoires.
                                                        Kies dan voor een ALL RISK Verzekering en voorkom onnodige hoge reparatie kosten.
                                                    </p>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                        </div>
                                        <div className="text-center pb-4">
                                            <button type="button" className="btn price-btn" data-bs-dismiss="modal">Duidelijk</button>
                                            {/* Additional buttons or actions can be added here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Modal End */}
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label labeltitle">Schadevrije jaren</label>
                                </div>
                                <div className="col-12 position-relative">
                                    <input type="number" className="form-control mb-0" id="numberInput5" min={1} max={500}
                                        value={rangeValue}
                                        onChange={handleInputChange} />
                                    <div className="infcalcubx hulpNinfo-in-position">
                                        <ul className="list-unstyled list-flex">
                                            <li>
                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                    <i className="fas fa-2x fa-info-circle" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" role="button" className="calculatorwrp hulp-in-relative">
                                                    <i className="fas fa-calculator" />
                                                    <span>Hulp nodig?</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <input type="range" className="form-range mb-0" id="customRange5" min={1} max={500} value={rangeValue}
                                        onChange={handleRangeChange} />
                                    <label htmlFor="customRange5" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue5">€ 1</span>
                                            <span>€500</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <label className="form-label labeltitle">Eigen risico</label>
                                </div>
                                <div className="col-lg-12 col-12 position-relative">
                                    <input type="number" className="form-control mb-0" id="numberInput5" min={1} max={300}
                                        value={rangeValue2}
                                        onChange={handleInputChange2} />
                                    <div className="infcalcubx info-in-absolute">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                    <i className="fas fa-2x fa-info-circle" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <input type="range" className="form-range mb-0" id="customRange5" min={1} max={300} value={rangeValue2}
                                        onChange={handleRangeChange2} />
                                    <label htmlFor="customRange5" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue5">€ 1</span>
                                            <span>€300</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5>Geen filters</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="" />
                        <label className="form-check-label" htmlFor="">
                            Dagelijks opzegbaar (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="klantenscore" defaultValue="true" />
                        <label className="form-check-label" htmlFor="klantenscore">Klantenscore: (..)
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="" />
                        <label className="form-check-label" htmlFor="">
                            No claim korting (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="" />
                        <label className="form-check-label" htmlFor="">
                            ANWB lid (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="" />
                        <label className="form-check-label" htmlFor="">
                            Premie per jaar (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="" />
                        <label className="form-check-label" htmlFor="">
                            Vrije garage keuze (..)
                        </label>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5>Energise Regelt</h5>
                </div>
                <div className="support">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Aanbod op maat
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Aanbod op maat
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Stappenplan
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Aanvraag
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Unieke deals
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Unieke deals
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Duidelijkheid
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Duidelijkheid
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Service
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Service
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <MailModal />
            </div>
        </>
    )
}

export default VehicleInsuranceStep2Left;
