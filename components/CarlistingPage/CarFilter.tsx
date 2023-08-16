'use client'
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const CarFilter = () => {
    const allCars = useAppSelector((state: RootState)=> state.carDetails.allCars);
    function handleClick() {
        $("._filter_panel").toggleClass("open");
        $(".close_panel").removeClass("open");
        $(".overlay").toggleClass("open");
    }

    return (
      <section className='car-filter-section'>
            <div className="row d-flex align-items-center">
                <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                    <div className='filter-button-sec d-flex align-items-center justify-content-start'>
                        <p>EXPLORE BY</p>
                        <button onClick={handleClick}><i className="bi bi-sliders"></i></button>
                    </div>
                    <div className='filter-result d-flex align-items-center justify-content-start'>
                        <span className='_result'>TOTAL {allCars ?  allCars.length : 0} </span>
                        <p>RESULTS FOUND</p>
                    </div>
                </div>
                <div className='col-sm-6 d-flex align-items-center justify-content-end'>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='_short_by'>
                            SHORT BY: <span>Price</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='_short_option'>
                            <Dropdown.Item href="#/action-1" className='active'>Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
      </section>
    )
  }
  
  export default CarFilter;