import React, { useState, useEffect } from "react";
import CompareCardSkeleton from "../LoadingSkeletons/CompareCardSeleton";

const CompareFilterRight = ({
  obtainComparedData,
  formData,
  isLoading,
  setIds,
  ids,
  setReFetch,
  reFetch,
  setCount,
  a,
  item,
  setA,
  navigateUrl,
  activeTab,
  setActiveTab,
  meter,
}) => {
  const [isLandscapeSmallScreen, setIsLandscapeSmallScreen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);

  const handleSingleProduct = (itemData) => {
    localStorage.setItem("SingleItem", JSON.stringify(itemData));
    setCount(2);
    setA(false);
  };
  const handleToggle = () => {
    setShowAll(!showAll);
    setVisibleCount(showAll ? 5 : item.pFaqs.length); // Toggle between 5 and the full list
  };

  const [maxVisibleItems, setMaxVisibleItems] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
    setMaxVisibleItems(isExpanded ? 5 : item.switching_plan.length);
  };

  const deleteProduct = (itemId) => {
    if (ids.includes(itemId)) {
      setIds(ids.filter((id) => id !== itemId));
    }
    setReFetch(!reFetch);
  };
 

  return (
    <div className="col-lg-9 rotatation">
      <div className="comparelist-title text-center">
        <h2>Vergelijk &amp; Bespaar</h2>
      </div>
      {!isLoading ? (
        <div className="d-flex justify-content-around gap-1">
          {obtainComparedData && obtainComparedData.length > 0 ? (
            obtainComparedData.map((item, i) => (
              <div className="compare-card-bx1" key={i}>
                <div className="compare-card-bx">
                  <div className="compare-card-cont">
                    <a
                      className="cros-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteProduct(item.id)}
                    >
                      <i className="fal fa-times"></i>
                    </a>
                    <h3>Price: €{item?.total.toFixed(2)}</h3>
                    <h5>Geldig tot {item?.valid_till}</h5>
                    <div className="shape-img">
                      <img
                        src="/images/temporary-offer.png"
                        alt="Temporary Offer"
                      />
                    </div>
                  </div>
                  <div className="compare-card-img-bx">
                    <span className="count-number">{i + 1}</span>
                    <div className="cm-img">
                      <img
                        src={item?.image || "/images/placeholder.png"}
                        alt="Product"
                      />
                      <a href="#">
                        <i className="fal fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="compare-card-cont-text">
                    <ul>
                      <li>
                        <div className="cm-text-field  Pakket-h">
                          <h5>Pakket:</h5>
                          <div className="paket-cls">
                            <p className="text-start">
                              <i className="fas fa-check text-success me-2"></i>
                              {item?.power_origin
                                ? JSON.parse(item.power_origin).join(", ")
                                : ""}
                              {item?.type_of_gas
                                ? JSON.parse(item.type_of_gas).map(
                                    (gas, index) => (
                                      <div key={index}>
                                        <i className="fas fa-check text-success me-2"></i>
                                        {/* <span>{gas}</span> */}
                                        <span>
                                          {gas === "co2" && "Co2"}
                                          {gas === "partly_green_gas" &&
                                            "Partly Green"}
                                          {gas === "100_green_gas" &&
                                            "100% Green"}
                                          {gas === "gas_free" && "Gas Free"}
                                          {![
                                            "co2",
                                            "partly_green_gas",
                                            "100_green_gas",
                                            "gas_free",
                                          ].includes(gas) && gas}
                                        </span>
                                      </div>
                                    )
                                  )
                                : ""}
                            </p>
                          </div>
                        </div>
                      </li>
                      {activeTab === null && (
                        <>
                          <li>
                            <h5>Kosten:</h5>
                            <p>€{item?.total.toFixed(2)} / p.m</p>
                          </li>
                          <li>
                            <h5>Bespaar:</h5>
                            <p>
                              €
                              {(
                                Number(formData?.monthly_energy_produce) *
                                  Number(item?.power_cost_per_unit) +
                                Number(item?.discount) +
                                Number(item?.tax_reduction)
                              ).toFixed(2)}
                            </p>
                          </li>
                          <li>
                            <h5>Totaal korting:</h5>
                            <p>
                              €
                              {(
                                Number(item?.discount) +
                                Number(item?.tax_reduction)
                              ).toFixed(2)}
                            </p>
                          </li>
                          <li>
                            <h5>Energise korting:</h5>
                            <p>€{item?.tax_reduction.toFixed(2)}</p>
                          </li>
                        </>
                      )}

                      {activeTab === "kosten" && (
                        <div className="">
                          <div className="col-lg-12">
                            <div className="tabbxleft new-width mt-3 mb-3 color-new">
                              <div className="table-responsive  table-scroll">
                                <h3 style={{ textAlign: "center" }}>
                                  Energie kosten
                                </h3>
                                <h4>Pakket:...</h4>
                                <div>
                                  <table className="table table-striped table-responsive table-bordered">
                                    <tbody>
                                      <tr>
                                        <td className="fw-bold">
                                          Normaal leveringsprijs:
                                        </td>
                                        <td>
                                          €{item?.power_cost_per_unit}
                                          <small> Per kWh</small>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="fw-bold">
                                          Dal leveringsprijs:
                                        </td>
                                        <td>
                                          {" "}
                                          €{item?.power_cost_per_unit}{" "}
                                          <small>Per kWh </small>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="fw-bold">
                                          Gas leveringsprijs:
                                        </td>
                                        <td>
                                          {item?.gas_cost_per_unit}
                                          <small>
                                            Per m <sup>3</sup>
                                          </small>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="fw-bold">
                                          Overige kosten:
                                        </td>
                                        <td>{item?.network_cost_gas}</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="d-flex  justify-content-between new-h5">
                                    <h4 className="new-h5">Totaal:</h4>
                                    <h4>€ {item.total.toFixed(2)}p.m.</h4>
                                  </div>
                                  <table className="table table-responsive table-striped  table-bordered">
                                    <tbody>
                                      <tr>
                                        <td className="fw-bold new-width ">
                                          Looptijd:
                                        </td>
                                        <td>
                                          {item.contract_length * 12} Maanden
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="fw-bold new-width">
                                          Bespaar p.j:
                                        </td>
                                        <td>
                                          {" "}
                                          €
                                          {(
                                            Number(
                                              formData?.monthly_energy_produce
                                            ) *
                                              Number(
                                                item?.power_cost_per_unit
                                              ) +
                                            Number(item?.discount) +
                                            Number(item?.tax_reduction)
                                          ).toFixed(2)}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <p style={{ fontSize: "11px" }}>
                                    Total prijs is loc. 21% BTW &
                                    overheidsheffingen
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {item.pFaqs.length > 0 && (
                            <div className="col-lg-12">
                              <div className="tabbxright color-new">
                                <h4 style={{ textAlign: "center" }}>
                                  Veel Gestelde Vragen
                                </h4>
                                <div className="accordion" id="faqAccordion">
                                  {item.pFaqs
                                    .slice(0, visibleCount)
                                    .map((p, i) => (
                                      <div key={i} className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id={`heading${p.id}`}
                                        >
                                          <button
                                            className="accordion-button acc-btn accordion-btn collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${p.id}`} // Corrected dynamic ID for collapse
                                            aria-expanded="false" // Initially collapsed
                                            aria-controls={`collapse${p.id}`} // Corrected dynamic ID for aria-controls
                                          >
                                            {p.title}
                                          </button>
                                        </h2>
                                        <div
                                          id={`collapse${p.id}`} // Corrected dynamic ID for collapse content
                                          className="accordion-collapse collapse"
                                          aria-labelledby={`heading${p.id}`} // Corrected dynamic ID for aria-labelledby
                                          data-bs-parent="#faqAccordion"
                                        >
                                          <div className="accordion-body">
                                            {p.description}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                              {item.pFaqs.length > 5 && (
                                <div className="text-center mt-3">
                                  <a
                                    href="javascript:void(0);"
                                    className="viwmr"
                                    onClick={handleToggle}
                                  >
                                    {showAll
                                      ? "Minder vragen?"
                                      : "Meer vragen?"}
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {activeTab === "Details" && (
                        <div className=" mt-3">
                          <div className="col-lg-12 new-width">
                            <div className="tabbxleft">
                              <div className="tabinsidebx  table-responsive table-scroll">
                                <div className="d-flex">
                                  <table className="table  table-bordered">
                                    <tbody>
                                      <tr>
                                        <th>Kenmerken</th>
                                        <th className="w-3">Inbegrepen</th>
                                      </tr>
                                      <tr>
                                        <td>Looptijd</td>
                                        <td>{item.contract_length} Jaren</td>
                                      </tr>
                                      <tr>
                                        <td scope="row">Type meter</td>
                                        <td>
                                          {meter == 0
                                            ? "Enkele Meter"
                                            : "Dubbele meter"}
                                        </td>
                                      </tr>

                                      <tr>
                                        <td scope="row">Duurzaamheid</td>
                                        <td>
                                          {item.pFeatures.type_of_gas.map(
                                            (tg) => {
                                              if (tg == "co2") return "Co2,";
                                              if (tg == "partly_green_gas")
                                                return "Partly green,";
                                              if (tg == "100_green_gas")
                                                return "100% Green,";
                                              if (tg == "gas_free")
                                                return "Gas free,";
                                              else return tg;
                                            }
                                          )}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td scope="row">Opzegvergoeding</td>
                                        <td>€ 0</td>
                                      </tr>
                                      <tr>
                                        <td scope="row">Opzegtermijn</td>
                                        <td>1 maand</td>
                                      </tr>

                                      <tr>
                                        <td scope="row">Korting</td>
                                        <td>€{item.discount_amount}</td>
                                      </tr>
                                      <tr>
                                        <td scope="row">Herkomst Energie</td>
                                        <td>
                                          {item.pFeatures.type_of_current.join(
                                            ","
                                          )}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="w-4">
                                    <p className="entr-sc-title-over">
                                      Informatie
                                    </p>
                                    <div className="entr-sc-title-over1">
                                      <div
                                        className="accordion-container"
                                        id="stepAccordion"
                                      >
                                        {item.switching_plan.map((sp, i) => (
                                          <div
                                            key={i}
                                            className="accordion-item-custom"
                                          >
                                            <h2
                                              className="accordion-header-custom"
                                              id={`stap${i}`}
                                            >
                                              <button
                                                className="accordion-button-custom collapsed entr-sc-title-over2"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#stapc${sp.id}`}
                                                aria-expanded="false"
                                                aria-controls={`stapc${sp.id}`}
                                              >
                                                {sp.question}
                                              </button>
                                            </h2>
                                            <div
                                              id={`stapc${sp.id}`}
                                              className="accordion-collapse-custom entr-sc-title-over3 collapse"
                                              aria-labelledby={`stap${i}`}
                                              data-bs-parent="#stepAccordion"
                                            >
                                              <div className="accordion-body-custom">
                                                <p> {sp.answer} </p>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <p className="">Voorwaarden</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "Leverancier" && (
                        // <div className="tabinsidebx">
                        <div className="">
                          <div className="col-lg-12 new-width mt-3b mb-3">
                            <table className="table table-responsive table-bordered">
                              <tbody>
                                <tr>
                                  <th>Werkwijze:</th>
                                  {/* <th>{item?.provider_details?.adjust_installments}</th> */}
                                  <th>Handeling:</th>
                                </tr>
                                <tr>
                                  <td>Bereikbaarheid</td>
                                  <td>
                                    {/* {item?.provider_details?.meter_readings} */}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Contract</td>
                                  <td>
                                    {/* {item?.provider_details?.payment_options} */}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Details</td>
                                  <td>
                                    {/* {item?.provider_details?.rose_scheme} */}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        // </div>
                      )}
                      {activeTab === "Aanvraag" && (
                        <div className="">
                          <div className="col-lg-12 new-width mt-3 mb-3">
                            <div className="tabbxleft color-new1">
                              <div className="tabinsidebx  table-responsive table-scroll">
                                <table className="table table-striped table-bordered">
                                  <tbody>
                                    <tr>
                                      <th>Energise</th>

                                      <th>Leverancier</th>
                                    </tr>
                                    <tr>
                                      <td>Vergelijken</td>
                                      <td>X</td>
                                    </tr>
                                    <tr>
                                      <td>Afhandeling contract</td>
                                      <td>X</td>
                                    </tr>
                                    <tr>
                                      <td>X</td>
                                      <td>Nazorg</td>
                                    </tr>
                                    <tr>
                                      <td>X</td>
                                      <td>Opzegvergoeding</td>
                                    </tr>
                                    <tr>
                                      <td>X</td>
                                      <td>Incasseren</td>
                                    </tr>
                                    <tr>
                                      <td>Overstappenplan</td>
                                      <td>X</td>
                                    </tr>
                                    <tr>
                                      <td>Energise exclusives</td>
                                      <td>X</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 new-width">
                            <div className="tabbxright">
                              <table>
                                <td className="text-center">
                                  <th>Overstappenplan</th>
                                </td>
                              </table>

                              <div className="accordion" id="stepAccordion">
                                {item.switching_plan.map((sp, i) => (
                                  <div key={i} className="accordion-item">
                                    <h2 className="accordion-header" id="stap1">
                                      <button
                                        className="accordion-button acc-btn collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#stapc${sp.id}`}
                                        aria-expanded="true"
                                        aria-controls="stapc1"
                                      >
                                        {sp.question}
                                      </button>
                                    </h2>
                                    <div
                                      id={`stapc${sp.id}`}
                                      className="accordion-collapse collapse"
                                      aria-labelledby="headingOne"
                                      data-bs-parent="#stepAccordion"
                                    >
                                      <div className="accordion-body">
                                        {" "}
                                        {sp.answer}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </ul>
                  </div>
                  <div className="cm-button">
                    <button
                      className="btn-one"
                      onClick={() => handleSingleProduct(item)}
                    >
                      Aanvragen
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "45px" }}>
              <h4>No data found</h4>
            </div>
          )}
        </div>
      ) : (
        <div className="row">
          {[...Array(4)].map((_, i) => (
            <div className="col-lg-3" key={i}>
              <CompareCardSkeleton />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompareFilterRight;
