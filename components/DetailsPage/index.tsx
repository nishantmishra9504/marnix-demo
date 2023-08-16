'use client'
import React from 'react'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import ProductCarosul from './ProductCarosul';
import ProductDetails from './ProductDetails';
import ProductInfo from './ProductInfo';
import SimilarProduct from './SimilarProduct';
import FAQ from '../Homapage/FAQ';
import BreadcrumbLink from '../CarlistingPage/BreadCrumb';

function DetailsPage() {
  return (
    <>
        <Navbar/>
        <section className='slider-details-sec'>
            <div className='container_cust'>
                <div className='row'>
                    <BreadcrumbLink/>
                    <div className='col-sm-12 col-md-12 col-lg-7 _p-details-carosul'>
                        <ProductCarosul/>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-5 _p-details-body'>
                        <ProductDetails/>
                    </div>
                </div>
            </div>
        </section>
        <ProductInfo/>
        <SimilarProduct/>
        <div className='faq-bg'>
            <FAQ/> 
        </div>
        <Footer/>

    </>
  )
}

export default DetailsPage;