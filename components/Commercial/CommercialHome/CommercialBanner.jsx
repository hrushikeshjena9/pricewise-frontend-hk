import React from 'react'
import dynamic from "next/dynamic";
import CommercialDealbox from './CommercialDealbox';
import SunAnimation from '../../common/SunAnimation';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function CommercialBanner() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    loop: true,
    navText:["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <section>
        <div
          className="banner-item"
          style={{ backgroundImage: "url(/images/commercialbanner.jpg)" }}
        >
       <SunAnimation />
       <OwlCarousel className="owl-theme" {...options}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="banner-item-cont">
                  <h4>Grootzakelijk Energie Vergelijken?</h4>
                  <h5>Bekijk de beste prijzen</h5>
                  <a href="#" className="btn-two">
                    <i className="fal fa-arrow-right" /> Vergelijken
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
              <CommercialDealbox />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="banner-item-cont">
                  <h4>Zakelijk Energie Vergelijken?</h4>
                  <h5>Bekijk de beste prijzen</h5>
                  <a href="#" className="btn-two">
                    <i className="fal fa-arrow-right" /> Vergelijken
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
              <CommercialDealbox />
              </div>
            </div>
          </div>
        </OwlCarousel>
        </div>
    </section>
  )
}

export default CommercialBanner

