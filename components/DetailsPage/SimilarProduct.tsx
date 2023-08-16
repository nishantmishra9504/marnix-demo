import React, { useEffect, useState } from "react";
import carImage from "../../src/assets/images/car.jpg";
import carImage2 from "../../src/assets/images/check-color.svg";
import floating from "../../src/assets/images/doot-1.svg";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { CarDetails } from "@/interfaces";
import { RootState } from "@/redux/store/store";
import {APIEndPoints} from "../../APIEndPoints";

import Image from "next/image";

function SimilarProduct() {
  const searchParams = useSearchParams();
  const allCars = useAppSelector((state: RootState) => state.carDetails.allCars);
  const [cars, setCars] = useState([]);
  const router = useRouter();

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

  const redirectToDetails = (id: number) => {
    router.push(`/car-details?id=${id}`);
  }


  useEffect(() => {
    if (allCars.length != 0) {
      setCars(allCars)
    }
  }, [allCars, cars])
  return (

    <div className="_similer-product-sec">
      <div className="floating_doots">
        <Image src={floating} alt="icon" />
      </div>
      <div className="container_cust _header_sec">
        <div className="row">
          <div className="h_title">
            <h2>Similar Cars</h2>
          </div>
        </div>
      </div>
      <OwlCarousel responsive={Responsive} className='owl-carousel owl-theme feature-car' loop={true} nav={true} dots={false}>
        {
          cars && cars.length != 0 ?
            cars.map((obj: CarDetails, index) => {
              return (
                <div className="item" key={index} onClick={()=>redirectToDetails(obj.id)}>
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

  )
}

export default SimilarProduct