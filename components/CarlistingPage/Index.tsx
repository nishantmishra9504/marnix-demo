import React, { useEffect } from 'react';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import BreadcrumbLink from './BreadCrumb';
import InnerBanner from './InnerBanner';
import CarFilter from './CarFilter';
import CarList from './CarList';
import FAQ from '../Homapage/FAQ';
import Filter from '../Filter/Filter';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';

const CarlistingPage = () => {
    return (
        <>
            <Filter/>
            <Navbar/>
            <InnerBanner/>
            <div className="container_cust">
                <div className="row">
                    <BreadcrumbLink/>
                    <CarFilter/>
                    <CarList/>
                </div>
            </div>
            <div className='faq-footer'>
                <FAQ/>
                <Footer/>
            </div>
        </>
    )
  }
  
  export default CarlistingPage;