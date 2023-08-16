import React, { useEffect, useState } from "react";
import carImage from "../../src/assets/images/car.jpg";
import carImage2 from "../../src/assets/images/check-color.svg";
import floating from "../../src/assets/images/doot-1.svg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useRouter } from "next/navigation";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store/store";
import { CarDetails } from "@/interfaces";
import {APIEndPoints} from "../../APIEndPoints";

const FeatureCars = () => {
  const [key, setKey] = useState('newlyAdded');
  const [showNewlyAdded, setShowNewlyAdded] = useState(true);
  const [showBestBuy, setShowBestBuy] = useState(false);
  const allCars = useAppSelector((state: RootState) => state.carDetails.allCars);
  const router = useRouter();


  const handleSelect = (item: any) => {
    setKey(item)
    if (item == 'newlyAdded') {
      setShowNewlyAdded(true);
      setShowBestBuy(false);
    }
    else {
      setShowNewlyAdded(false);
      setShowBestBuy(true);
    }
  }

  const redirectToDetailPage = (id: number)=>{
    router.push(`/car-details?id=${id}`);
  }

  const Responsive = {
    319: {
      items: 1,
      stagePadding: 20,
      margin: 10,
    },
    401: {
      items: 1,
      stagePadding: 50,
      margin: 25,
    },
    481: {
      items: 1,
      stagePadding: 100,
      margin: 40,
    },
    641: {
      items: 2,
      stagePadding: 50,
      margin: 20,
    },
    768: {
      items: 2,
      stagePadding: 50,
      margin: 30,
    },
    992: {
      items: 3,
      stagePadding: 50,
      margin: 30,
    },
    1199: {
      stagePadding: 80,
      margin: 30,
    },
    1366: {
      stagePadding: 100,
      margin: 30,
    },
    1440: {
      stagePadding: 150,
      margin: 20,
    },
    1680: {
      stagePadding: 190,
    },
    1800: {
      stagePadding: 210,
    },
    1920: {
      stagePadding: 260,
      loop: true,
      margin: 0,
      nav: true,
      navText: ["<div className='nav-btn prev-slide'></div>", "<div className='nav-btn next-slide'></div>"]
    }

  }

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  })

  useEffect(() => {
    
  }, [allCars])
  return (
    
    <>
      <section className="lt-feature-car">
        <div className="container_cust">
          <div className="row">
            <div className="cmn_header_2  d-flex justify-content-between align-items-center">
              <div className="cmn_header_content">
                <h2 className="wow animated  fadeInUp">Latest Featured Cars</h2>
              </div>
              <div>
                <Tabs className="nav nav-tabs  d-prop wow animated  fadeIn" id="myTab"
                  role="tablist" activeKey={key}
                  onSelect={(k) => handleSelect(k)}>
                  <Tab title="Newly Added" eventKey="newlyAdded" id="home-tab">
                  </Tab>
                  <Tab title="Best buy for you" eventKey="Best buys for you">
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {
          showNewlyAdded ?
            <div className="tab-content " id="myTabContent">
              <div
                className="tab-pane fade show active "
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex={0}
              >
                <div className="carousel_container">
                  <OwlCarousel responsive={Responsive} className='owl-carousel owl-theme feature-car' loop nav>
                    {
                      allCars && allCars.length != 0 ? allCars.map((obj: CarDetails, index) => {
                        return (
                          <div className="item" key={index} onClick={()=>redirectToDetailPage(obj.id)}>
                            <div className="p-card">
                              <div
                                className="p-image"
                                style={{ backgroundImage: `url(${obj.images?.General ? `${APIEndPoints.BackendURL}/${obj.images.General?.find(url => String(url).includes("thumbnail"))}` : ""})` }}
                              ></div>
                              <div className="card-content">
                                <div className="body-content">
                                  <div className="h-content">
                                    <div className="title-content">
                                      <h4>
                                        {obj.brand.name} {obj.vehicle.modelName}
                                      </h4>
                                      <ul className="sub-content">
                                        <li>
                                          <p>{obj.distanceDriven} km</p>
                                        </li>
                                        <li>
                                          <p>{obj.fuelType}</p>
                                        </li>
                                        <li>
                                          <p>{obj.transmission}</p>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="icon-content">
                                      <i className="bi bi-heart"></i>
                                      <i
                                        className="bi bi-heart-fill"
                                        style={{ display: "none" }}
                                      ></i>
                                    </div>
                                  </div>
                                  <div className="f-content">
                                    <div className="c-price">
                                      <span>
                                        <Image src={carImage2} alt="icon" />
                                      </span>
                                      <h5>₹ {obj && obj.expectedPrice && obj.expectedPrice?.toString().length > 6 && obj.expectedPrice?.toString().length <= 8 ? `${obj.expectedPrice.toString().substring(0,2)}.${obj.expectedPrice.toString().substring(2,4)} Lakh` : obj && obj.expectedPrice && obj.expectedPrice?.toString().length > 8 ? `${obj.expectedPrice.toString().substring(0,1)}.${obj.expectedPrice.toString().substring(2,4)} Crore` : obj && obj.expectedPrice ? obj.expectedPrice: "---"}</h5>
                                    </div>
                                    {/* <div className="old-price">
                                      <p>From ₹24,518/m</p>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="loc-content">
                                  <span>
                                    <i className="bi bi-geo-alt"></i>
                                  </span>
                                  <p>Our Hub, South City Mall, Kolkata</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                        :
                        <div></div>
                    }
                  </OwlCarousel>
                  {/* <div className="feature-car">
              </div> */}
                </div>
              </div>
            </div>
            : <div className="tab-content " id="myTabContent">
              <div
                className="tab-pane fade show active "
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex={0}
              >
                <div className="carousel_container">
                  <OwlCarousel responsive={Responsive} className='owl-carousel owl-theme feature-car' loop nav>
                  {
                      allCars && allCars.length != 0 ? allCars.map((obj: CarDetails, index) => {
                        return (
                          <div className="item" key={index} onClick={()=>redirectToDetailPage(obj.id)}>
                            <div className="p-card">
                              <div
                                className="p-image"
                                style={{ backgroundImage: `url(${obj.images?.General ? `${APIEndPoints.BackendURL}/${obj.images.General?.find(url => String(url).includes("thumbnail"))}` : ""})` }}
                              ></div>
                              <div className="card-content">
                                <div className="body-content">
                                  <div className="h-content">
                                    <div className="title-content">
                                      <h4>
                                        {obj.brand.name} {obj.vehicle.modelName}
                                      </h4>
                                      <ul className="sub-content">
                                        <li>
                                          <p>6K km</p>
                                        </li>
                                        <li>
                                          <p>{obj.fuelType}</p>
                                        </li>
                                        <li>
                                          <p>{obj.transmission}</p>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="icon-content">
                                      <i className="bi bi-heart"></i>
                                      <i
                                        className="bi bi-heart-fill"
                                        style={{ display: "none" }}
                                      ></i>
                                    </div>
                                  </div>
                                  <div className="f-content">
                                    <div className="c-price">
                                      <span>
                                        <Image src={carImage2} alt="icon" />
                                      </span>
                                      <h5>₹ {obj && obj.pricePaid && obj.pricePaid?.toString().length >= 7 ? `${obj.pricePaid.toString().substring(0,2)}.${obj.pricePaid.toString().substring(2,4)}` : obj && obj.pricePaid ? `${obj.pricePaid.toString().substring(0,1)}.${obj.pricePaid.toString().substring(2,4)}`: ""} Lakh</h5>
                                    </div>
                                    <div className="old-price">
                                      <p>From ₹24,518/m</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="loc-content">
                                  <span>
                                    <i className="bi bi-geo-alt"></i>
                                  </span>
                                  <p>Our Hub, South City Mall, Kolkata</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                        :
                        <div></div>
                    }
                  </OwlCarousel>
                </div>
              </div>
            </div>
        }
        <div className="floating_doots">
          <Image src={floating} alt="doots" />
        </div>

      </section>
    </>
  );
};

export default FeatureCars;
