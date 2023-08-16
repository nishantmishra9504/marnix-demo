import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import Lowrunning from "../../src/assets/images/hands.svg";
import battery from "../../src/assets/images/battery.svg";

import CheckedIcon1 from "../../src/assets/images/checked-icon.svg";
import Warranty from "../../src/assets/images/warranty.svg";
import mback from "../../src/assets/images/m-back.svg";
import assurence from "../../src/assets/images/f-assurance.svg";

import Image from "next/image";
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { useSearchParams } from 'next/navigation';
import { CarDetails } from '@/interfaces';

function ProductInfo() {
  const searchParams = useSearchParams();
  const allCars = useAppSelector((state: RootState)=> state.carDetails.allCars);
  const [car, setCar] = useState<CarDetails>()

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
    <section className='product-info-sec'>
      <div className='container_cust '>
        <div className='row'>
            <Tabs
          defaultActiveKey="overview"
          id="uncontrolled-tab-example"
          className="mb-3"
          >
            <Tab eventKey="overview" title="Overview" >
              <ul className='overview-content'>
                <li>
                  <div className='cmn-heading'>
                    <h4>Highlights</h4>
                  </div>
                  <div className='cmn-content'>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <div className='icon-card'>
                          <i>
                            <Image src={Lowrunning} alt="icon" />
                          </i>
                          <div className='icon-content'>
                            <h5>Low running</h5>
                            <p>Driven less than 5,000km per year</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='icon-card'>
                          <i>
                            <Image src={battery} alt="icon" />
                          </i>
                          <div className='icon-content'>
                            <h5>New battery</h5>
                            <p>New battery for a reduced ownership cost</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className='cmn-heading'>
                    <h4>Car Overview</h4>
                  </div>
                  <div className='cmn-content'>
                      <ul>
                        <li>
                          <h6>Registration Year</h6>
                          <p>{car?.yearOfRegistration}</p>
                        </li>
                        <li>
                          <h6>Color</h6>
                          <p>{car?.color}</p>
                        </li>
                        <li>
                          <h6>KM Driven</h6>
                          <p>{car?.distanceDriven}km</p>
                        </li>
                        <li>
                          <h6>No. of owners</h6>
                          <p>{car?.ownerNumber}</p>
                        </li>
                        <li>
                          <h6>Fuel Type</h6>
                          <p>{car?.fuelType}</p>
                        </li>
                        <li>
                          <h6>Transmission</h6>
                          <p>{car?.transmission}</p>
                        </li>
                        <li>
                          <h6>RTO Location</h6>
                          <p>{car?.RTOLocation}</p>
                        </li>
                        <li>
                          <h6>Vehicle Type</h6>
                          <p>{car?.vehicle.bodyType}</p>
                        </li>
                        <li>
                          <h6>Make Year</h6>
                          <p>--</p>
                        </li>
                        <li>
                          <h6>Insurance Validity</h6>
                          <p>--</p>
                        </li>
                      </ul>
                  </div>
                </li>

                <li>
                  <div className='cmn-heading'>
                    <h4>Car Overview</h4>
                  </div>
                  <div className='cmn-content usp-sec'>
                      <ul>
                        <li>
                        <div className="p-card wow animated fadeInUp">  
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
                          </div>
                        </div>
                        </li>
                        <li>
                        <div className="p-card wow animated fadeInUp">  
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
                              </div>
                        </div>
                        </li>
                        <li>
                          <div className="p-card wow animated fadeInUp">  
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
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="p-card wow animated fadeInUp">  
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
                            </div>
                          </div>
                        </li>
                      </ul>
                  </div>
                </li>
              </ul>
            </Tab>
            <Tab eventKey="report" title="Report" disabled >
              Report
            </Tab>
            <Tab eventKey="feature" title="Feature & Specs" disabled >
              Feature & Specs
            </Tab>
            <Tab eventKey="finance" title="Finance" disabled >
              Finance
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo