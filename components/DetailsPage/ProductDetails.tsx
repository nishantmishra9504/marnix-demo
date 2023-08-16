'use client'
import React, { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Check from '../../src/assets/images/check-color.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { useSearchParams } from 'next/navigation';
import { CarDetails } from '@/interfaces';
import { useRouter } from 'next/navigation';


function ProductDetails() {
  const searchParams = useSearchParams();
  const allCars = useAppSelector((state: RootState)=> state.carDetails.allCars);
  const [car, setCar] = useState<CarDetails>();
  const router = useRouter();
  function LocationActive() {
    $("._location").addClass("active");
    $("._hub").removeClass("active");
    $(".s-location").addClass("show");
    $(".l-details").addClass("hide");
    $(".s-location").removeClass("hide");
    $(".l-details").removeClass("show");
    
  } 
  function HubLocation() {
    $("._hub").addClass("active");
    $("._location").removeClass("active");
    $(".s-location").removeClass("show");
    $(".l-details").removeClass("hide");
    $(".s-location").addClass("hide");
    $(".l-details").addClass("show");
  } 

  const redirectPage = () =>{
    router.push('/');
  }
  useEffect(()=>{
    if(allCars.length != 0){
      allCars.map(obj=>{
        if(obj["id"] == searchParams.get('id')){
          setCar(obj);
        }
      })
    }
  },[allCars, car, searchParams])

  return (
    <div>
      <Tabs
      defaultActiveKey="book-Now"
      id="uncontrolled-tab-example"
      className="details-tab"
      >
        <Tab eventKey="book-Now" title="BOOK NOW" >
          <ul className='book-now-content'>
            <li>
              <div className='_heading'>
                <h3>{car?.brand?.name} {car?.vehicle?.modelName}</h3>
                <ul className='car-info-tag'>
                  <li>{car?.distanceDriven} km </li>
                  <li>. {car?.fuelType} </li>
                  <li>. {car?.transmission}</li>
                </ul>
              </div>
              <button  className="icon-content">
                <i className="bi bi-heart"></i>
                <i
                  className="bi bi-heart-fill"
                  style={{ display: "none" }}
                ></i>
              </button >
            </li>

            <li>
            <i className="bi bi-geo-alt"></i><span>Our Hub, South City Mall, Kolkata</span>
            </li>

            <li>
              <div className='d-flex flex-column w-100 justify-content-start'>
                <div className='price-info d-flex flex-row w-100 justify-content-between align-items-center'>
                  <h2>
                    <i>
                      <Image src={Check} alt='icon'/>
                    </i> 
                    ₹ {car && car?.pricePaid && car?.pricePaid?.toString().length >= 7 ? `${car?.pricePaid?.toString().substring(0,2)}.${car?.pricePaid?.toString().substring(2,4)}` : car && car?.pricePaid ? `${car?.pricePaid?.toString().substring(0,1)}.${car?.pricePaid?.toString().substring(2,4)}`: ""} Lakh
                  </h2>
                  {/* <span className='per-month'>From ₹24,518/m</span> */}
                </div>
                <Link href='/' className='d-flex flex-row justify-content-start align-items-center benefit-button'>View benefits <i className="bi bi-arrow-right"></i></Link>
              </div>
            </li>
            <li>
            <div className='f-price d-flex flex-row w-100 justify-content-between align-items-center'>
                <p>
                  Fixed on road price
                </p>
                <Link href='/' className='d-flex flex-row justify-content-start align-items-center check-saving-button'>Check your savings <i className="bi bi-arrow-right"></i></Link>
            </div>
            </li>
            <li>
              <div className='d-flex flex-row w-100 justify-content-between align-items-center'>
                <p>
                  <b>Guaranteed Buyback:</b> Return this car to us within a tenure of 6, 12 or 18 months at guaranteed prices.
                </p>
                <i className="bi bi-arrow-right color-main"></i>
              </div>
            </li>
            <li>
              <button className='book-now-btn' onClick={redirectPage}>
                <span>
                 <b>CONTACT US</b>
                </span>
                <i className="bi bi-arrow-right-circle"></i>
              </button>
            </li>
          </ul>
        </Tab>
        <Tab eventKey="profile" title="FREE TEST DRIVE" disabled={true}>
          <ul className='schedile-content'>
              <li>
                  <h4>Schedule Free Test Drive</h4>
                  <h3>{car?.brand.name} {car?.vehicle.modelName} </h3> 
              </li>
              <li>
                  <span>Select location</span>
                  <div className='d-flex flex-row w-100 justify-content-start gap-2'>
                    <button className='_hub cmn-button active' onClick={HubLocation}>Marnix Hub</button>
                    <button className='_location cmn-button' onClick={LocationActive}>My Location</button>
                  </div>
              </li>
              <li>
                <span>Spinny hub location</span>
                <div className='l-details'>
                  <p>F.P-98,102 Spinny Park, Swarnim Stone, Near Fun Blast, Chharodi, Gota to Vaishnodevi Road, Ahmedabad-382481</p>
                </div>
                <button className='s-location'>
                  Add Address <i className="bi bi-plus-circle-dotted"></i>
                </button>
              </li>
              <li>
                <span>Select date</span>
                <div className='s_date'>
                  <Link href='/'>
                    <span className='c_date'>10 Jul</span>
                    <small>Tomorrow</small>
                  </Link>
                  <Link href='/'>
                    <span className='c_date'>10 Jul</span>
                    <small>Tomorrow</small>
                  </Link>
                  <Link href='/'>
                    <span className='c_date'>10 Jul</span>
                    <small>Tomorrow</small>
                  </Link>
                  <Link href='/'>
                    <span className='c_date'>10 Jul</span>
                    <small>Tomorrow</small>
                  </Link>
                  <Link href='/'>
                    <span className='c_date'>10 Jul</span>
                    <small>Tomorrow</small>
                  </Link>
                  <Link href='/'>
                    <span className='c_date'>10 Jul</span>
                    <small>Tomorrow</small>
                  </Link>
                  <Link href='/'>
                    <span className='c_date'>10 Jul</span>
                    <small>Tomorrow</small>
                  </Link>
                  <Link href='/'>
                    See All Date
                  </Link>
                </div>
              </li>
              <li>
                <span>Select time slot</span>
                <div className='s_date'>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                  <Link href='/'>
                    10am- 11am
                  </Link>
                </div>
              </li>
              <li>
                <button className='book-now-btn'>
                  <span>
                    <b>Schedule Test Drive</b>
                    Your Location on Mon 10 Jul  
                  </span>
                  <i className="bi bi-arrow-right-circle"></i>
                </button>
              </li>
            </ul>
        </Tab>
      </Tabs>
    </div>
  )
}

export default ProductDetails