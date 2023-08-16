import React from 'react';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from 'next/link';

import innerBanner from'../../src/assets/images/listing-banner.jpg';
import Image from "next/image";

const InnerBanner = () => {
    const Responsive = {
        0: {
          items: 1,
          margin: 32,
          stagePadding:50,
        },
        768: {
          items: 1,
          margin: 32,
          stagePadding:50,
        },
        1024: {
          items: 1,
          margin: 32,
          stagePadding:50,
        }
      }
    
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
    })
    return(
        <div className="carousel_container listing-owl-banner">
            <OwlCarousel 
                responsiveClass={true} className='owl-carousel owl-theme'  loop={true} nav={true} items={1} stagePadding={500} margin={32} dots={false}
                
            >
            <div className="item">
                <div className='inner-banner-body'>
                    <div className="inner-banner-content">
                        <h2>India’s most trusted believe in Marnix</h2>
                        <p>India's finest luxury cars, hand-picked</p>
                        <Link href='/' className='cmn-button'> Know More</Link>
                    </div>
                    <Image src={innerBanner} alt="banner" />
                </div>
            </div>
            <div className="item">
                <div className='inner-banner-body'>
                    <div className="inner-banner-content">
                        <h2>India’s most trusted believe in Marnix</h2>
                        <p>India's finest luxury cars, hand-picked</p>
                        <Link href='/' className='cmn-button'> Know More</Link>
                    </div>
                    <Image src={innerBanner} alt="banner" />
                </div>
            </div>
            <div className="item">
                <div className='inner-banner-body'>
                    <div className="inner-banner-content">
                        <h2>India’s most trusted believe in Marnix</h2>
                        <p>India's finest luxury cars, hand-picked</p>
                        <Link href='/' className='cmn-button'> Know More</Link>
                    </div>
                    <Image src={innerBanner} alt="banner" />
                </div>
            </div>
            <div className="item">
                <div className='inner-banner-body'>
                    <div className="inner-banner-content">
                        <h2>India’s most trusted believe in Marnix</h2>
                        <p>India's finest luxury cars, hand-picked</p>
                        <Link href='/' className='cmn-button'> Know More</Link>
                    </div>
                    <Image src={innerBanner} alt="banner" />
                </div>
            </div>
            <div className="item">
                <div className='inner-banner-body'>
                    <div className="inner-banner-content">
                        <h2>India’s most trusted believe in Marnix</h2>
                        <p>India's finest luxury cars, hand-picked</p>
                        <Link href='/' className='cmn-button'> Know More</Link>
                    </div>
                    <Image src={innerBanner} alt="banner" />
                </div>
            </div>
            <div className="item">
                <div className='inner-banner-body'>
                    <div className="inner-banner-content">
                        <h2>India’s most trusted believe in Marnix</h2>
                        <p>India's finest luxury cars, hand-picked</p>
                        <Link href='/' className='cmn-button'> Know More</Link>
                    </div>
                    <Image src={innerBanner} alt="banner" />
                </div>
            </div>
            </OwlCarousel>
        </div>
    )

};

export default InnerBanner;