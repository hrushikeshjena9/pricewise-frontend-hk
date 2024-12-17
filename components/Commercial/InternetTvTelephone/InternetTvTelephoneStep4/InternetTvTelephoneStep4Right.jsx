import Image from 'next/image';
import React, { useState } from 'react'

const InternetTvTelephoneStep4Right = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className="col-lg-4">
        <div className="stepright3">
          <div className="actionbx">
          <Image src='/images/stopwatch.png' alt='stopwatch' className='stopwatch actionicon' width={128} height={128} />
            <h3>Actie:</h3>
            <h6>Geldig tot dd-mm-jj</h6>
            <div className="actionbody">
              <div className="row">
                <div className="col-lg-6">
                  <div className="spe-img">
                  <Image src='/images/sunbg.png' alt='stopwatch' className='img-fluid' width={1920} height={1358} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <h5>Pakket</h5>
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <i className="fas fa-info" />
                    <h5>Kosten:</h5>
                    <h4>€....</h4>
                    <span>/p.m</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <i className="fas fa-info" />
                    <h5>Bespaar:</h5>
                    <h4>€....</h4>
                    <span>/p.j</span>
                  </div>
                </div>
              </div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Energise korting:</td>
                    <td>€...</td>
                  </tr>
                  <tr>
                    <td>
                      Totaal pakket kosten:
                      {show && <hr />}
                      {show && (
                        <div style={{ position: "relative" }}>
                          <p>aaaa</p>
                          <p>aaaa</p>
                          <p>aaaa</p>
                        </div>
                      )}
                    </td>
                    <td>
                      €...
                      {show ? (
                        <i
                          className="fas fa-chevron-up"
                          onClick={() => setShow(!show)}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-chevron-down"
                          onClick={() => setShow(!show)}
                        ></i>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="actionfooter">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                    <Image src='/images/sale.png' alt='sale' className='actionicon' width={128} height={128} />
                      Energise korting:
                    </td>
                    <td>
                      <span>€...</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                    <Image src='/images/hot-sale.png' alt='sale' className='actionicon' width={128} height={128} />
                      Totaal korting:
                    </td>
                    <td>
                      <span>€...</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Veel gestelde vragen
                  </h4>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit voluptatibus natus quod ab necessitatibus.
                        Accusantium, ut alias.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="px-4">
                <b>Tip:</b> Mocht je toch jouw deal willen wijzigen, geen
                probleem daar heb je 14 dagen de tijd voor.
              </p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Stappenplan
                  </h4>
                </div>
                <div className="accordion" id="accordionover">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover1"
                        aria-expanded="false"
                        aria-controls="collapseover1"
                      >
                        Stap 1
                      </button>
                    </h2>
                    <div
                      id="collapseover1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit voluptatibus natus quod ab necessitatibus.
                        Accusantium, ut alias.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover2"
                        aria-expanded="false"
                        aria-controls="collapseover2"
                      >
                        Stap 2
                      </button>
                    </h2>
                    <div
                      id="collapseover2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover3"
                        aria-expanded="false"
                        aria-controls="collapseover3"
                      >
                        Stap 3
                      </button>
                    </h2>
                    <div
                      id="collapseover3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover4"
                        aria-expanded="false"
                        aria-controls="collapseover4"
                      >
                        Stap 4
                      </button>
                    </h2>
                    <div
                      id="collapseover4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover5"
                        aria-expanded="false"
                        aria-controls="collapseover5"
                      >
                        Stap 5
                      </button>
                    </h2>
                    <div
                      id="collapseover5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="px-4">
                <b>Tip:</b> Mits niet verhuist, zeggen wij jouw provider of
                leverancier op en kan jij beginnen met deze op maat germaakte
                deal!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InternetTvTelephoneStep4Right