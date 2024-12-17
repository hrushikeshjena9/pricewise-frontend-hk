import Image from 'next/image';
import React from 'react'
const VehicleInsuranceStep2Header = () => {
  return (
    <>

    <div className="row">
                <div className="col-lg-4 text-center">
                    <a className="btneng1">Energise beste advies (…)</a>
                </div>
                <div className="col-lg-4 text-center">
                    <a className="btneng2">Energise goedkoopste deals (…)</a>
                </div>
                <div className="col-lg-4 text-center">
                    <a className="btneng2">Alle gecontracteerde (…)</a>
                </div>
            </div>
            <div className="steptitle">
                <div className="row">
                    <div className="col-lg-3">
                        <a className="saleicon">
                            <Image alt='asd' width={70} height={52} src="/images/salelcon.png" className="img-fluid" />
                        </a>
                    </div>
                    <div className="col-lg-9">
                        <h2>Vergelijk, Bespaar &amp; Aanvragen maar</h2>
                    </div>
                </div>
       </div>
    </>
  )
}

export default VehicleInsuranceStep2Header;