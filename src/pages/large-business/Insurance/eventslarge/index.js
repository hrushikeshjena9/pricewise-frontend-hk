import React from "react";
import { useEffect, useState } from "react";
import EventLargeDeails from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep1/EventLargeDeails";
import EventLargeFaq from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep1/EventLargeFaq";
import EventLargeStepFrom from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep1/EventLargeStepFrom";
import EventLargeAction from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep2/EventLargeAction";
import EventLargeTabing from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep2/EventLargeTabing";
import EventLargeStep2left from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep2/EventLargeStep2left";
import EventsLargeStep2top from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep2/EventsLargeStep2top";
import EventLargestep3Right from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep3/EventLargestep3Right";
import EventLargeStep3left from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep3/EventLargeStep3left";
import EventLargeStep4left from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep4/EventLargeStep4left";
import EventLargeStep4Right from "../../../../../components/LargeBusiness/Insurance/EventsLarge/EventsLargeStep4/EventLargeStep4Right";
import BusinessTripStep2Left from "../../../../../components/LargeBusiness/Insurance/EventsLarge/BusinessTrip/BusinessTripStep2/BusinessTripStep2Left";
import BusinessTripStep3Left from "../../../../../components/LargeBusiness/Insurance/EventsLarge/BusinessTrip/BusinessTripStep3/BusinessTripStep3Left";
import Image from "next/image";
import EventsTabingPart from "../../../../../components/Events/EventsStep2/EventsTabingPart";
const Index = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [show, setShow] = useState(1);
  const [showStepper, setShowStepper] = useState(false);
  const [showCompactContent, setShowCompactContent] = useState(false);
  const [secondFormPart, setSecondFormPart] = useState(false);
  useEffect(() => {
    if (count == 0) {
      setWidth("40%");
      setShowStepper(false);
    } else if (count == 1) {
      setWidth("50%");
    } else if (count == 2) {
      setWidth("75%");
    } else if (count == 3) {
      setWidth("100%");
    } else {
      setWidth(null);
    }
  }, [count]);
  return (
    <>
      {count == 0 && (
        <>
          <main>
            <EventLargeStepFrom
              setShowStepper={setShowStepper}
              showStepper={showStepper}
              setCount={setCount}
              showCompactContent={showCompactContent}
              setShowCompactContent={setShowCompactContent}
              secondFormPart={secondFormPart}
              setSecondFormPart={setSecondFormPart}
            />
            <EventLargeDeails />
            <EventLargeFaq />
          </main>
        </>
      )}
      <>
        {showStepper && (
          <>
            <section>
              <div className="progressbar-bx">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <ul className="list-unstyled">
                        <li
                          onClick={() => setCount(0)}
                          className={count == 0 ? "active" : ""}
                        >
                          Stap 1: Vul de gegevens in{" "}
                          <i className="fas fa-chevron-right" />
                        </li>
                        <li
                          className={count == 1 ? "active" : ""}
                          onClick={() => setCount(1)}
                        >
                          Stap 2: Vergelijk{" "}
                          <i className="fas fa-chevron-right" />
                        </li>
                        <li
                          onClick={() => setCount(2)}
                          className={count == 2 ? "active" : ""}
                        >
                          Stap 3: Aanvraag{" "}
                          <i className="fas fa-chevron-right" />
                        </li>
                        <li
                          onClick={() => setCount(3)}
                          className={count == 3 ? "active" : ""}
                        >
                          Stap 4: Voltooid <i className="fas fa-flag" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: width }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <p className="mb-0">
                        {" "}
                        Je bent een stap dichterbij jouw beste keuze...
                        <Image
                          src="/images/hourglass.png"
                          alt="flags"
                          width={24}
                          height={24}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {count == 1 && (
              <>
                <main>
                  <section>
                    <div className="container">
                      {secondFormPart == false && (
                        <div className="comparestep">
                          <EventsLargeStep2top />
                          <div className="row">
                            <EventLargeStep2left />
                            <div className="col-lg-8">
                              <div className="listofcompanybx">
                                <>
                                  <EventLargeAction
                                    showMoreInfo={showMoreInfo}
                                    setShowMoreInfo={setShowMoreInfo}
                                  />
                                  {showMoreInfo && <EventsTabingPart />}
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {secondFormPart == true && (
                        <div className="container my-3">
                          <div className="row">
                            <BusinessTripStep2Left />
                            <div className="col-lg-8">
                              <div className="listofcompanybx">
                                <>
                                  <EventLargeAction
                                    showMoreInfo={showMoreInfo}
                                    setShowMoreInfo={setShowMoreInfo}
                                  />
                                  {showMoreInfo && <EventLargeTabing />}
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                </main>
              </>
            )}
            {count == 2 && (
              <>
                {secondFormPart == false && (
                  <div className="container">
                    <div className="row">
                      <EventLargeStep3left setShow={setShow} show={show} />
                      <EventLargestep3Right setShow={setShow} />
                    </div>
                  </div>
                )}
                {secondFormPart == true && (
                  <>
                    <div className="container my-4">
                      <div className="row">
                        <BusinessTripStep3Left />
                        <EventLargestep3Right setShow={setShow} />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            {count == 3 && (
              <>
                <div className="container">
                  <div className="comparestep3">
                    <div className="row">
                      <EventLargeStep4left />
                      <EventLargeStep4Right />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default Index;
