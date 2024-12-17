import Image from 'next/image'
import React, { useState } from 'react'

const FormPopup = () => {
    const [showMeev, setShowMeev] = useState(false)
    return (
        <>
            <div className="modal fade" id="addresschange" tabIndex={-1} aria-labelledby="addresschangeLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row w-100 justify-content-center align-items-center">
                                <div className="col text-center">
                                    <h5 className="modal-title" id="exampleModalLabel">Meerdere Vestigingen</h5>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p className='text-center d-block'>Wijken de gegevens af ten opzichten van de andere vestigingen?</p>
                            <div className='text-center'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="wijken" id="wijkenJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="wijkenJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="wijken" id="wijkenNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="wijkenNee">Nee</label>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="col-lg-6 eventbxleft">
                                        <div className='row'>
                                            <div className='col-9'>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control " id="input1" placeholder="Postcode" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control " id="input2" placeholder="Huisnummer" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control " id="input3" placeholder="Address" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <select className="form-select" aria-label="Select">
                                                            <option selected>Cybersecurity</option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6 position-relative">
                                                        <select className="form-select" aria-label="Select">
                                                            <option selected>Verzekeraar </option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                        </select>
                                                        <div className="infbx frm-info-absolute">
                                                            <a href="javascript:void(0);"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-html="true"
                                                                title="Content Goes Here">
                                                                <i className="fas fa-2x fa-info-circle" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-3 col-md-3">
                                                        <label>Geslacht</label>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 radio-icon">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="man"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="man">
                                                            Man <i className="fas fa-2x fa-mars icon" />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-5 col-md-5 radio-icon">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="vrouw"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="vrouw">
                                                            Vrouw <i className="fas fa-2x fa-venus icon" />
                                                        </label>
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
                                                        <div className='infcalcubx extra-pos'>
                                                            <a href="javascript:void(0);" className="extra">
                                                                <i className="fas fa-2x fa-user-plus" />
                                                                <span>Extra?</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-12 position-relative">
                                                        <label className="form-label labeltitle">Meeverzekeren?</label>
                                                        <div className="infcalcubx frm-info-absolute">
                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                                                <i className="fas fa-2x fa-info-circle" />
                                                            </a>
                                                        </div>
                                                        <div className="frm-toevoe-position text-center">
                                                            <input className="form-check-input mb-0" type="checkbox" id="flexCheckDefault" 
                                                            onChange={() => setShowMeev(!showMeev)}  checked={showMeev} />
                                                            <div className="form-check-label d-block fw-bold">
                                                                <label htmlFor="flexCheckDefault" className="form-check-label d-block fw-bold green-cyan">
                                                                    Toevoegen
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {showMeev && 
                                                      <>
                                                <div className="row mt-3">
                                                    <div className="col-lg-3 col-md-3 text-start">
                                                        <label>Wie?</label>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 radio-icon d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="man"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="man">
                                                            Partner{" "}
                                                            <i className="fal fa-handshake-alt icon" />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="vrouw"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="vrouw">
                                                            Personeel <i className="fad fa-male icon" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 text-start">
                                                        <label>Geslacht</label>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 radio-icon d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="man"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="man">
                                                            Man <i className="fas fa-2x fa-mars icon" />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
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
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 position-relative">
                                                        <input type="date" className="form-control" />
                                                        <div className="infbx frm-info-absolute">
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
                                                    <div className="col-lg-4">
                                                        <label className='form-lable fw-medium'>Cybersecurity</label>

                                                    </div>
                                                    <div className="col-lg-8 position-relative">
                                                        <select className="form-select" aria-label="Select">
                                                            <option selected>Verzekeraar</option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                        </select>
                                                        <div className="infbx frm-info-absolute">
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
                                                <div className="row mt-4">
                                                    <div className="col-lg-4">
                                                        <label className='form-lable fw-medium'>Bedrijfsgrootte</label>
                                                    </div>
                                                    <div className="col-lg-8 position-relative">
                                                        <input type='number' className='form-control' />
                                                        <div className="infcalcubx only-extra-absolute-business-equipment-insurance">
                                                            <a href="javascript:void(0);" className="extra">
                                                                <i className="fas fa-2x fa-user-plus" />
                                                                <span>Extra?</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                </>
                                                }
                                            </div>
                                        </div>
          
                                    </div>
                                  
                                        <div className="col-lg-6 eventbxright pt-0">
                                            <div className='row'>
                                                    <div className='col-lg-9 position-relative'>
                                                       <input type='text' placeholder='Aanvullende dekking' className='form-control'/>
                                                    <div className="infcalcubx info-pos">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-9 px-4 radiobx">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6  col-sm-6 pe-0   col-md-4">
                                                                <input type="radio" name="test" id="cb21" />
                                                                <label htmlFor="cb21" className="tooltip-container">
                                                                    <Image
                                                                        width={128}
                                                                        height={128}
                                                                        alt="horeca"
                                                                        src="/images/film2.png"
                                                                        className="img-fluid"
                                                                    />
                                                                    <span className="checkbox-label">Media</span>
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-html="true"
                                                                        title="Media"
                                                                        className="info-in-risk hide-info-desktop">
                                                                        <i className="fas fa-2x fa-info-circle" />
                                                                    </a>
                                                                    <div className="d-flex justify-content-center">
                                                                        <p className="tooltip-text">Media</p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-6  col-sm-6 ps-0   col-md-4">
                                                                <input type="radio" name="test" id="cb22" />
                                                                <label htmlFor="cb22" className="tooltip-container">
                                                                    <Image
                                                                        width={128}
                                                                        height={128}
                                                                        alt="aa"
                                                                        src="/images/browser.png"
                                                                        className="img-fluid"
                                                                    />
                                                                    <span className="checkbox-label">PCI-DSS</span>
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-html="true"
                                                                        title="PCI-DSS"
                                                                        className="info-in-risk hide-info-desktop">
                                                                        <i className="fas fa-2x fa-info-circle" />
                                                                    </a>
                                                                    <div className="d-flex justify-content-center">
                                                                        <p className="tooltip-text">PCI-DSS</p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-2">
                                                
                                                <div className="col-4">
                                                    <label className="form-label labeltitle">Bruto omzet</label>
                                                </div>
                                                <div className="col-5 position-relative">
                                                    <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                
                                                    <div className="infcalcubx info-pos">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                                    <label htmlFor="customRange1" className="form-label">
                                                       <div className="cus-num">
                                                        <span id="rangeValue5">€30.000</span>
                                                        <span>€1.250.000</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-5">
                                                    <label className="form-label labeltitle">Verzekerd bedrag</label>
                                                </div>
                                                <div className="col-4 position-relative">
                                                    <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                            
                                                    <div className="infcalcubx info-pos">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                                    <label htmlFor="customRange1" className="form-label">
                                                        <div className="cus-num">
                                                            <span id="rangeValue5">€1</span>
                                                            <span>€ 50.000</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <div className="row mt-3">
                                                <div className="col-9">
                                                    <select className="form-select" aria-label="Select">
                                                        <option disabled selected>Aanbevolen verzekeringen</option>
                                                        <option value="option1">Option 1</option>
                                                        <option value="option2">Option 2</option>
                                                        <option value="option3">Option 3</option>
                                                    </select>
                                                </div>
                                                <div className="col-2">
                                                    <div className="infbx infcalcubx infbx2">
                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                    <i className="fas fa-2x fa-info-circle" />
                                                </a>
                                                <a href="javascript:void(0);" >
                                                    <Image width={50} height={82} alt="aa" src="/images/viewpop.png" />
                                                    <span>Overzicht?</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-9  radiobx">
                                            <div className="row justify-content-center">
                                                <div className="col-12  col-sm-4  pe-sm-0">
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
                                                <div className="col-12  col-sm-4  p-sm-0">
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
                                                <div className="col-12  col-sm-4  ps-sm-0">
                                                    <input type="radio" name="test" id="cb2d2" />
                                                    <label htmlFor="cb2d2" className="tooltip-container">
                                                        <Image
                                                            width={128}
                                                            height={128}
                                                            alt="aa"
                                                            src="/images/corporateliability.png"
                                                            className="img-fluid"
                                                        />
                                                        <span className="checkbox-label equal-height">
                                                            Aansprakelijkheid
                                                        </span>
                                                        <a
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-html="true"
                                                            title="Aansprakelijkheid"
                                                            className="info-in-risk hide-info-desktop">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                        <div className="d-flex justify-content-center">
                                                            <p className="tooltip-text">Aansprakelijkheid</p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn price-btn" data-bs-dismiss="modal">Toevoegen</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormPopup