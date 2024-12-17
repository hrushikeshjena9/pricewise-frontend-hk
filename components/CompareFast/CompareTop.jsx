import React from "react";
// import { useRouter } from "next/router";

const CompareTop = ({ a, setA, setActiveTab, activeTab, uniqueId, }) => {
  // const router = useRouter();
  const handleBackClick = () => {
    setA(!a);
  };
  // console.log("setCount in CompareTop:", setCount);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // Trigger smooth scrolling
    window.scrollBy({ top: 900, behavior: "smooth" }); 
  };

  return (
    <>
      <div className="col-12">
        <ul className="d-flex justify-content-between">
          <li>
            <a href="#" className="back-button" onClick={handleBackClick}>
              <i className="fas fa-chevron-left"></i> Terug
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" className="text-dark">
              Veel gestelde vragen?
            </a>
          </li>
        </ul>
        <div id="listhiddenDiv1" className="tabwrp">
        <ul className="tabtop-icons tab-section-top-d nav nav-tabs" id="myTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a href="javascript:void(0)" onClick={() => handleTabClick("kosten")}>
            <button
              className="nav-link button-clr"
              id={`tab1-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab1${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab1${uniqueId}`}
              aria-selected="true"
            >
              <i className="fas fa-calculator" />
              Kosten
            </button>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="javascript:void(0)"
              onClick={() => handleTabClick("Details")}
            >
               <button
              className="nav-link button-clr"
              id={`tab2-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab2${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab2${uniqueId}`}
              aria-selected="false"
            >
              <i className="fas fa-ellipsis-h" />
              Details
            </button>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="javascript:void(0)"
              onClick={() => handleTabClick("Leverancier")}
            >
              <button
              className="nav-link button-clr"
              id={`tab3-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab3${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab3${uniqueId}`}
              aria-selected="false"
            >
              <i className="fas fa-user-shield" />
              Leveranciers
            </button>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
            className=""
              href="javascript:void(0)"
              onClick={() => handleTabClick("Aanvraag")}
            >
             <button
              className="nav-link button-clr"
              id={`tab4-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab4${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab4${uniqueId}`}
              aria-selected="false"
            >
              <i className="fas fa-spinner" />
              Aanvraag
            </button>
            </a>
          </li>
        </ul>
</div>
      </div>
    </>
  );
};

export default CompareTop;