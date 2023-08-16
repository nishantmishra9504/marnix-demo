import React from 'react';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

import MediaCard from '../MediaCard/MediaCard';

const mydata3 = [
    {
        uri:'happy_customer.webp',
        heading:'Women continue to drive the demand for used cars',
        url:'/',
        catagori:'Times of India'
    },
    {
        uri:'happy_customer.webp',
        heading:'Women continue ',
        url:'/',
        catagori:'Economic Times'
    },
    {
        uri:'happy_customer.webp',
        heading:'Women continue to drive',
        url:'/',
        catagori:'Times of India'
    },
    {
        uri:'happy_customer.webp',
        heading:'Women continue to drive the demand ',
        url:'/',
        catagori:'Economic Times'
    },
    {
        uri:'happy_customer.webp',
        heading:'Women continue to drive the demand for used cars',
        url:'/',
        catagori:'Economic Times'
    },
    {
        uri:'happy_customer.webp',
        heading:'Women continue to',
        url:'/',
        catagori:'Times of India'
    },

];

const MediaCover = () => {
    const Responsive = {
        0: {
          items: 1,
          margin: 32,
          stagePadding:0,
        },
        768: {
          items: 2,
          margin: 32,
          stagePadding:0,
        },
        1024: {
          items: 3,
          margin: 32,
          stagePadding:0,
        },
        1920: {
            items: 3,
            margin: 32,
            nav:true,
            stagePadding:0,
            navText:["<div className='nav-btn prev-slide'></div>","<div className='nav-btn next-slide'></div>"]
          }
      }
    
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
    })
    return(
        <section className='media-section'>
            <div className="container_cust">
                <div className='row'>
                    <div className='col-sm-12'>
                        <h4>Media Coverage</h4>
                    </div>
                    <div className="carousel_container listing-owl-banner">
                        <OwlCarousel responsiveClass={true} className='owl-carousel owl-theme'  loop={true} nav items={3} stagePadding={0} margin={32} dots={false}>
                            {mydata3.map((mydata3, index) => 
                                    <div className="item">
                                        <MediaCard  key={index}  mydata3={mydata3}/>
                                    </div>
                                )
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
        
    )

};

export default MediaCover;