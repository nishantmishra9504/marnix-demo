import React, { Component, useEffect, useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import {APIEndPoints} from '../../APIEndPoints';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { CarDetails } from '@/interfaces';

function ProductCarosul() {
  const allCars = useAppSelector((state: RootState) => state.carDetails.allCars);
  const [cars, setCars] = useState<CarDetails>();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('id')) {
      if (allCars.length != 0) {
        allCars.map(obj => {
          if (obj["id"] == searchParams.get('id')) {
            setCars(obj);
          }
        })
      }
    }
    else {
      router.push('/')
    }
  }, [allCars, cars, searchParams])
  return (

    <>
      <Carousel axis='horizontal' showArrows={true} showStatus={false} showIndicators={false} showThumbs={true} className='p-slider'>
        <div className='c-item'>
          {
            cars && cars?.images && cars.images.General.length != 0 ?
              <Image src={`${APIEndPoints.BackendURL}/${cars.images.General?.find(url => String(url).includes("thumbnail"))}`} alt="No Image" width={200} height={500} />
              :
              <span>No Image</span>
          }
        </div>
        <div className='c-item'>
          {
            cars && cars?.images && cars.images.Others.length > 0 ?
              <Image src={`${APIEndPoints.BackendURL}/${cars.images.Others?.filter(url => String(url).includes(""))[0]}`} alt="No Image" width={200} height={500}/>
              :
              <span>No Image</span>
          }
        </div>
        {/* <div className='c-item'>
          {
            cars && cars?.images && cars.images.Others.length > 1 ?
              <Image src={`${APIEndPoints.BackendURL}/${cars.images.Others?.filter(url => String(url).includes(""))[1]}}`} alt="No Image" width={200} height={500}/>
              :
              <span>No Image</span>
          }
        </div>
        <div className='c-item'>
          {
            cars && cars?.images && cars.images.Others.length > 2 ?
              <Image src={`${APIEndPoints.BackendURL}/${cars.images.Others?.filter(url => String(url).includes(""))[2]}}`} alt="No Image" width={200} height={500}/>
              :
              <span>No Image</span>
          }
        </div> */}
      </Carousel>
    </>
  )
}

export default ProductCarosul