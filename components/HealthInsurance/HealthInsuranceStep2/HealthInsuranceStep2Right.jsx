import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import HealthInsuranceTabingPart from './HealthInsuranceTabingPart';
import { useDispatch } from 'react-redux';
import { singleHealthProdData } from '../../../store/slices/healthInsuranceSlice';
import { useRouter } from 'next/router';
import Pagination from '../../DoubleMeter/EnergyStep2/Pagination';
const HealthInsuranceStep2Right = ({ setShowMoreInfo, showMoreInfo, apiData, setCount,
  setPostsPerPage, setPageNo, pageNo, postsPerPage
}) => {
  console.log(apiData);
  const dispatch = useDispatch()
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0)
  const [activeTab, setActiveTab] = useState(-1);
  const [compareIdArray1, setCompareIdArray] = useState([])
  const [ids, setIds] = useState([])
  const toggleTab = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };
  const handleSingleData = (itemData) => {
    dispatch(singleHealthProdData(itemData))
    setCount(2)
  }

  const handleCheckboxCompare = (item) => {
    setOpen(!open);
    if (!compareIdArray1.some(obj => obj.id === item.id)) {
      setCompareIdArray([...compareIdArray1, item]);
    } else {
      setCompareIdArray(compareIdArray1.filter(obj => obj.id !== item.id));
    }
  };
  useEffect(() => {
    localStorage.setItem('CompareIds', JSON.stringify(compareIdArray1))
  }, [compareIdArray1])
  const handleCompareRoute = () => {
    router.push('/compare-first/health-insurance')
  }
  return (
    <>
      {apiData && apiData.length > 0 ?
        <>
          {apiData?.map((item, i) => (
            <>
              <div className="login-deals-box" key={i}>
                <div className="spe-action">
                  <div className="spe-cont">
                    <Image width={200} height={200} alt="aa" src="/images/temporary-offer.png" />
                    <h5>Actie:</h5>
                    <p>Geldig {item?.valid_till}</p>
                  </div>
                  <div className="spe-cont">
                    <Image width={200} height={200} alt="aa" src="/images/sale.png" />
                    <p>Energise korting:</p>
                    <h4>€...</h4><i className="fas fa-info" />
                  </div>
                  <div className="spe-cont">
                    <Image width={200} height={200} alt="aa" src="/images/hot-sale.png" />
                    <p>Totaal korting:</p>
                    <h4>€...</h4><i className="fas fa-info" />
                  </div>
                </div>
                <div className="spe-action-data">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-3">
                      <div className="spe-img">
                        <Image width={200} height={200} alt="aa"
                          src={item?.image} />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3">
                      <div className="spe-cn">
                        <h5>Pakket</h5>
                        {item?.features?.slice(0, 4).map((item, i) => (
                          <>
                            <p key={i} style={{ fontSize: '16px' }}><i className="fas fa-check text-success me-2" ></i>
                              {item?.feature_details?.name}</p>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-3">
                      <div className="spe-cn">
                        <i className="fas fa-info" />
                        <h5>Kosten:</h5>
                        <h4>€{item?.price}</h4>
                        <span>/p.m</span>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-3">
                      <div className="spe-cn">
                        <i className="fas fa-info" />
                        <h5>Bespaar:</h5>
                        <h4>€...</h4>
                        <span>/p.j</span>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-12">
                      <div className="spe-cn-star">
                        <i className="fas fa-info" />
                        <h3>Klantenscore: 4/5</h3>
                        <ul className="mb-3">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="far fa-star" /></li>
                        </ul>
                        <a href="#" className="price-btn" onClick={() => handleSingleData(item)}>Aanvragen</a>
                      </div>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-3">
                    <input className="form-check-input" type="checkbox" name="acceptConditions"
                      id={item}
                      value={item}
                      onChange={() => handleCheckboxCompare(item)}
                      checked={compareIdArray1.includes(item)}
                    />
                    <label className="form-check-label" htmlFor="acceptConditions">Vergelijk</label>

                  </div>
                  <a data-target="listhiddenDiv1" className="btn-act listtoggleDiv nav nav-pills"
                    id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    Meer informatie


                    <i className={`${activeTab === i ? 'active fas fa-minus' : 'fal fa-plus'}`}
                      onClick={() => toggleTab(i)}
                      id={`v-pills-home-tab${i}`} data-bs-toggle="pill" data-bs-target={`#v-pills-home${i}`} type="button"
                      role="tab" aria-controls={`v-pills-home${i}`}
                      aria-selected={activeTab === i ? 'true' : 'false'} />

                  </a>
                </div>
              </div>
              <div className={`tab-content-energy`} id={`v-pills-tabContent${i}`}>
                <div className={`tab-pane fade energy-multi-tab ${activeTab === i ? 'active show' : ''}`}
                  id={`v-pills-home${i}`} role="tabpanel" aria-labelledby={`v-pills-home-tab${i}`}>
                  <HealthInsuranceTabingPart
                    uniqueId={i}
                    item={item} />
                </div>
              </div>
            </>
          ))}
          <Pagination
            apiRes={apiData}
            postsPerPage={postsPerPage}
            pageNo={pageNo}
            setPageNo={setPageNo}
            setPostsPerPage={setPostsPerPage}
          />
        </>
        :
        <>
          <div style={{ textAlign: 'center', backgroundColor: '#dff0ff', padding: '35px' }}>
            <h3>Geen data gevonden</h3>
          </div>
        </>
      }


      {/* -----modal--------- */}
      {compareIdArray1 && compareIdArray1.length > 0 &&
        <div className="compare-container" style={{ display: 'block' }}>
          <div className="row px-2">
            {compareIdArray1?.map((item, i) => (
              <div className="compare-item col-lg-3" id="compare-item1" style={{ display: 'block' }} key={i}>
                <div className="row">
                  <div className="col-12">
                    <Image width={200} height={200} alt="aa" src="/images/gaenergy.png" className="img-fluid" />
                    <p>{item?.title}</p>
                    <Rating
                      initialValue={3.5}
                      size={20}
                      readonly
                      allowFraction
                      fillColor="gold"
                      emptyColor="gray"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="ms-4 col-lg-2">
              <div className="btn-compair-wrp">
                <button className="btn btn-warning compare-button" onClick={handleCompareRoute}>Compare</button>
              </div>
            </div>
          </div>
          {/* Compare button */}
        </div>
      }
      {/* --------modal ends------------------ */}

    </>
  )
}

export default HealthInsuranceStep2Right;