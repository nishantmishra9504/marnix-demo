import React from "react";
import Image1 from "../../src/assets/images/b-s-image1.jpg";
import Image2 from "../../src/assets/images/b-s-image2.jpg";
import Image3 from "../../src/assets/images/b-s-image3.jpg";
import Image4 from "../../src/assets/images/b-s-image4.jpg";

import CheckedIcon1 from "../../src/assets/images/checked-icon.svg";
import Warranty from "../../src/assets/images/warranty.svg";
import mback from "../../src/assets/images/m-back.svg";
import assurence from "../../src/assets/images/f-assurance.svg";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import DotImage from "../../src/assets/images/doot-1.svg";
// import "../../../src/scss/global.scss";
import WOW from 'react-wow';

/* let $ = require('jquery');
if (window && window["jQuery" as keyof object]) {
  window["$" as keyof object] = window["jQuery" as keyof object] = require('jquery');
} */

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const PlanningToSell = () => {
  const Responsive = {
    319:{
      items:1,
      stagePadding:20,
      margin:15,
      loop:true,
      nav:true,
    },
    401:{
        items:1,
        stagePadding:50,
        margin:30,
        loop:true,
        nav:true,
    },
    481:{
        items:1,
        stagePadding:80,
        margin:30,
        loop:true,
    },
    641:{
        items:2,
        stagePadding:50,
        margin:20,
        loop:true,
    },
    768:{
        items:2,
        stagePadding:50,
        margin:20,
        loop:true,
    },
    992:{
        items:3,
        stagePadding:50,
        margin:20,
        loop:true,
    },
    1199:{
        stagePadding:0,
        margin:30,
    },
    1366:{
        stagePadding:0,
        margin:30,
    },
    1440:{
        stagePadding:0,
        margin:20,
    },
    1680:{
        stagePadding:0,
    },
    1800:{
        stagePadding:0,
    },
    1920:{
      stagePadding:0,
      loop:false,
      margin:30,
      nav:false,
      items:4,
    }
  };

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  return (
    <>
      {/* <section className="p-sell-buy">
        <div className="container_cust">
          <div className="row">
            <div className="cmn-header">
              <WOW animation="fadeInUp" delay="0.15s"
                duration="1s">
                <small
                  className="wow animated fadeInUp"
                >
                  Planning To Sell Or Buy?
                </small>
              </WOW>
              <WOW animation="fadeInUp" delay="0.50s"
                duration="1s">
                <h2
                  className="wow animated fadeInUp"
                >
                  Sell Us Your Car In 29 Minutes.
                </h2>
              </WOW>
            </div>
            <div className="tab-body">
              <ul
                className="nav nav-tabs d-lg-flex grup-buttn"
                id="myTab2"
                role="tablist"
              >
                <WOW animation="fadeIn" delay="0.50s"
                  duration="2s">
                  <li
                    className="nav-item wow animated fadeIn"
                    role="presentation"
                  >
                    <button
                      className="nav-link active tab-button"
                      id="buy-tab-sec"
                      data-bs-toggle="tab"
                      data-bs-target="#buy-tab"
                      type="button"
                      role="tab"
                      aria-controls="buy-tab"
                      aria-selected="true"
                    >
                      Buy Your Car <BsArrowRight size={25} />
                    </button>
                  </li>
                </WOW>
                <WOW animation="fadeIn" delay="1s"
                  duration="2s">
                  <li
                    className="nav-item wow animated fadeIn"
                    role="presentation"
                  >
                    <button
                      className="nav-link tab-button"
                      id="sell-tab-sec"
                      data-bs-toggle="tab"
                      data-bs-target="#sell-tab"
                      type="button"
                      role="tab"
                      aria-controls="sell-tab"
                      aria-selected="false"
                    >
                      Sell Your Car <BsArrowRight size={25} />
                    </button>
                  </li>
                </WOW>
              </ul>
              <div className="tab-content" id="myTabContent2">
                <div
                  className="tab-pane fade show active "
                  id="buy-tab"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <OwlCarousel responsive={Responsive} className="owl-carousel owl-theme p-sell-buy" loop nav>
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.15s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image1.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={CheckedIcon1} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>200-Points Inspection</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    Every car is carefully handpicked after a
                                    thorough quality inspection.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.25s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image2.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={Warranty} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>1 Year Warranty</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    Our way of being there for you through your
                                    car ownership journey.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.50s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image3.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={mback} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>5-Day Money Back Guarantee</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    Getting a fair, fixed price up front saves you
                                    from the unnecessary loop of negotiations and
                                    haggling.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.75s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image3.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={assurence} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>Fixed Price Assurance</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    Getting a fair, fixed price up front saves you
                                    from the unnecessary loop of negotiations and
                                    haggling.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="sell-tab"
                  role="tabpanel"
                  aria-labelledby="Build-a-box-tab-pane"
                >
                  <div className="row">
                    <OwlCarousel
                      className="owl-carousel owl-theme p-sell-buy"
                      nav
                    >
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.15s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image3.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={CheckedIcon1} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>200-Points Inspection</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    Every car is carefully handpicked after a
                                    thorough quality inspection.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.25s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image4.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={CheckedIcon1} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>1 Year Warranty</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    {" "}
                                    Our way of being there for you through your
                                    car ownership journey.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.50s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image1.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={mback} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>5-Day Money Back Guarantee</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    Getting a fair, fixed price up front saves you
                                    from the unnecessary loop of negotiations and
                                    haggling.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                      <div className="item">
                        <WOW animation="fadeInUp" delay="0.75s"
                          duration="1s">
                          <div
                            className="p-card wow animated fadeInUp"
                          >
                            <div
                              className="p-image"
                              style={{ backgroundImage: `url(${Image1.src})` }}
                            ></div>
                            <div className="card-content">
                              <div className="body-content">
                                <div className="h-content">
                                  <div className="icon-content">
                                    <i className="custom-icon">
                                      <Image src={assurence} alt="icon" />
                                    </i>
                                  </div>
                                  <div className="title-content">
                                    <small>Assured Benefits</small>
                                    <h4>Fixed Price Assurance</h4>
                                  </div>
                                </div>
                                <div className="f-content">
                                  <p>
                                    Getting a fair, fixed price up front saves you
                                    from the unnecessary loop of negotiations and
                                    haggling.
                                  </p>
                                </div>
                              </div>
                              <div className="loc-content">
                                <a href="#" className="readmore">
                                  Learn more
                                </a>
                              </div>
                            </div>
                          </div>
                        </WOW>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>

            <WOW animation="fadeInUp" delay="0.1.15s"
              duration="2s">
              <a
                href="#"
                className="tab-button wow animated fadeInUp"
              >
                Browse Car
                <BsArrowRight
                  style={{ color: "#fff", fontWeight: "900", marginLeft: "10px" }}
                />
              </a>
            </WOW>
            <div className="floating_doots">
              <Image src={DotImage} alt="doots" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default PlanningToSell;
