import React, { useEffect, useState } from 'react'  
import BuildingInsuranceStep1Form from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep1/BuildingInsuranceStep1Form'
import BuildingInsuranceStep1Faq from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep1/BuildingInsuranceStep1Faq'
import BuildingInsuranceStep1Deal from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep1/BuildingInsuranceStep1Deal'
import BuildingInsuranceStep2Top from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep2/BuildingInsuranceStep2Top'
import BuildingInsuranceTabing from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep2/BuildingInsuranceTabing'
import BuildingInsuranceStep2Filter from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep2/BuildingInsuranceStep2Filter'
import BuildingInsuranceStep2Deal from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep2/BuildingInsuranceStep2Deal'
import BuildingInsuranceStep3left from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep3/BuildingInsuranceStep3left'
import BuildingInsuranceStep3Right from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep3/BuildingInsuranceStep3Right'
import BuildingInsuranceStep4Left from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep4/BuildingInsuranceStep4Left'
import BuildingInsuranceStep4Right from '../../../../../components/LargeBusiness/Insurance/BuildingInsurance/BuildingInsuranceStep4/BuildingInsuranceStep4Right'
const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [show, setShow] = useState(1)
    const [showStepper, setShowStepper] = useState(false)
    useEffect(() => {
        if (count == 0) {
            setWidth('25%')
            setShowStepper(false)
        } else if (count == 1) {
            setWidth('50%')
        } else if (count == 2) {
            setWidth('75%')
        } else if (count == 3) {
            setWidth('100%')
        } else {
            setWidth(null)
        }
    }, [count])
    return (
        <>

            {count == 0 &&
                <>
                    <main>
                        <BuildingInsuranceStep1Form setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <BuildingInsuranceStep1Deal />
                        <BuildingInsuranceStep1Faq />

                    </main>
                </>
            }
            <>
                {showStepper &&
                    <>
                        <section>
                            <div className="progressbar-bx">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <ul className="list-unstyled">
                                                <li onClick={() => setCount(0)}
                                                    className={count == 0 ? "active" : ""}>Stap 1: Vul de gegevens in <i className="fas fa-chevron-right" />
                                                </li>
                                                <li className={count == 1 ? "active" : ""} onClick={() => setCount(1)}>Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                                                </li>
                                                <li onClick={() => setCount(2)}
                                                    className={count == 2 ? "active" : ""}>Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                                                </li>
                                                <li onClick={() => setCount(3)}
                                                    className={count == 3 ? "active" : ""}
                                                >Stap 4: Voltooid <i className="fas fa-flag" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: width }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                              Nog even jouw deal veiligstellen en de rest regelen wij verder...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {count == 1 &&
                            <>
                                <main>
                                    <section>
                                        <div className="container">
                                            <div className="comparestep">
                                                <BuildingInsuranceStep2Top />
                                                <div className="row">
                                                    <BuildingInsuranceStep2Filter />
                                                    <div className="col-lg-8 col-md-7">
                                                        <div className="listofcompanybx">
                                                            <BuildingInsuranceStep2Deal showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <BuildingInsuranceTabing />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </main>
                            </>
                        }
                        {count == 2 &&
                            <>
                                <div className='container'>
                                <div className='comparestep3'>
                                    <div className='row'>
                                                <BuildingInsuranceStep3left setShow={setShow} show={show} />
                                                <BuildingInsuranceStep3Right setShow={setShow} />
                                    </div>
                                </div>
                            </div>
                            </>
                        }
                        {count == 3 &&
                            <>
                                <div className='container'>
                                    <div className='comparestep3'>
                                        <div className='row'>
                                            <BuildingInsuranceStep4Left />
                                            <BuildingInsuranceStep4Right/>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                }
            </>
        </>
    )
}

export default Index