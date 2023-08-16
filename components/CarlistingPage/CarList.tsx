import React, { useEffect, useState } from 'react';
import carImage from "../../src/assets/images/car.jpg";
import carImage2 from "../../src/assets/images/check-color.svg";
import Image from "next/image";
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { CarDetails } from '@/interfaces';
import {APIEndPoints} from '../../APIEndPoints';
import { useRouter } from 'next/navigation';
const CarList = () => {
  const allCars = useAppSelector((state: RootState)=> state.carDetails.allCars);
  const [cars, setCars] = useState([]);
  const router = useRouter();

  const redirectToCarDetailsPage = (id: number)=>{
    router.push(`/car-details?id=${id}`);
  }

  useEffect(()=>{
    if(allCars.length != 0){
      setCars(allCars);
    }
  },[allCars, cars])
    return (
      <div className='row car-list'>
        {
          cars && cars.length != 0 ?
          cars.map((obj: CarDetails, index)=>{
            return (
              <div className='col-sm-12 col-md-6 col-lg-4' onClick={()=>redirectToCarDetailsPage(obj.id)} key={index}>
              <div className="p-card">
                <div className="p-image"  style={{ backgroundImage: `url(${obj.images?.General ? `${APIEndPoints.BackendURL}/${obj.images.General?.find(url => String(url).includes("thumbnail"))}` : ""})` }}>
                </div>
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
          <div>No Result</div>
        }
        <Link href="/" className='load-more'>
          <span className='_l_arrow'><i className="bi bi-arrow-right"></i></span> Load more Collection
        </Link>
      </div>
    )
  }
  
  export default CarList ;