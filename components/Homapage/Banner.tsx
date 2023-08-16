import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../src/assets/images/slider-image.jpg';
import sliderImage from '../../src/assets/images/slider-image.jpg';
import car from '../../src/assets/images/car.svg';
import indiaGate from '../../src/assets/images/india-gate.svg';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { LuSliders } from 'react-icons/lu';
import Carousel from 'react-bootstrap/Carousel';

import WOW from 'react-wow';

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import ReactOwlCarousel from 'react-owl-carousel';


const Banner = () => {
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [showSearchSuggetion, setShowSearchSuggetion] = useState(false);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    const Responsive = {
        0: {
            item: 1,
            margin: 0
        },
        768: {
            item: 1,
            margin: 0
        },
        1024: {
            item: 1,
            margin: 0
        }
    }

    return (
        <div>
            <section id="carouselExampleCaptions" className="carousel slide home-banner">
                <button className="filter-button">
                    <span className="filter-icon">
                        <LuSliders size={25} />
                    </span>
                    <small>EXPLORE BY</small>
                </button>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={sliderImage}
                            alt="First slide"
                        />
                        <Carousel.Caption className='c-caption'>
                            <div className="caro-caption d-flex align-items-center justify-content-between h-100">
                                <div className="left-caption">
                                    <WOW animation='bounceInLeft' delay="0.15s" duration="1s"><h1 className="wow animated bounceInLeft">Sell your car <span> for the best price</span></h1></WOW>
                                    <WOW animation='bounceInLeft' delay="0.50s" duration="1.5s"><p className="wow animated bounceInLeft">India's finest luxury cars, hand-picked</p></WOW>
                                    <WOW animation='bounceInLeft' delay="0.1s" duration="1.8s"><a href="#" className="cmn-button wow animated bounceInLeft text-decoration-none">Browse Collection</a></WOW>
                                </div>
                                <div className="right-caption">
                                    <div className="cap-body">
                                        <WOW animation='fadeInUp' delay='0.15s' duration='1s'>
                                            <h4 className="wow animated  fadeInUp">We are the best when it comes to Sell Or Buy Cars.</h4>
                                        </WOW>
                                        <ul>
                                            <WOW animation='fadeInUp' delay="0.15s" duration="1s">
                                                <li className="wow animated  fadeInUp">Outright <strong>Sale</strong></li>
                                            </WOW>
                                            <WOW animation='fadeInUp' delay="0.50s" duration="1s">
                                                <li className="wow animated  fadeInUp">Best Offer <strong>in 29 Minutes</strong></li>
                                            </WOW>
                                            <WOW animation='fadeInUp' delay="0.80s" duration="1s">
                                                <li className="wow animated  fadeInUp">Hassle Free <strong>Processing</strong></li>
                                            </WOW>
                                        </ul>
                                    </div>
                                    <WOW animation='bounceInLeft' delay="1s" duration="1s"><div className="float_car wow animated bounceInLeft " style={{ backgroundImage: `url(${car.src})` }}></div></WOW>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={sliderImage}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='c-caption'>
                            {/* <div className="caro-caption d-flex align-items-center justify-content-between h-100">
                                <div className="left-caption">
                                    <WOW animation='bounceInLeft' delay="0.15s" duration="1s"><h1 className="wow animated bounceInLeft">Sell your car <span> for the best price</span></h1></WOW>
                                    <WOW animation='bounceInLeft' delay="0.50s" duration="1.5s"><p className="wow animated bounceInLeft">India's finest luxury cars, hand-picked</p></WOW>
                                    <WOW animation='bounceInLeft' delay="0.1s" duration="1.8s"><a href="#" className="cmn-button wow animated bounceInLeft text-decoration-none">Browse Collection</a></WOW>
                                </div>
                                <div className="right-caption">
                                    <div className="cap-body">
                                        <WOW animation='fadeInUp' delay='0.15s' duration='1s'>
                                            <h4 className="wow animated  fadeInUp">We are the best when it comes to Sell Or Buy Cars.</h4>
                                        </WOW>
                                        <ul>
                                            <WOW animation='fadeInUp' delay="0.15s" duration="1s">
                                                <li className="wow animated  fadeInUp">Outright <strong>Sale</strong></li>
                                            </WOW>
                                            <WOW animation='fadeInUp' delay="0.50s" duration="1s">
                                                <li className="wow animated  fadeInUp">Best Offer <strong>in 29 Minutes</strong></li>
                                            </WOW>
                                            <WOW animation='fadeInUp' delay="0.80s" duration="1s">
                                                <li className="wow animated  fadeInUp">Hassle Free <strong>Processing</strong></li>
                                            </WOW>
                                        </ul>
                                    </div>
                                    <WOW animation='bounceInLeft' delay="1s" duration="1s"><div className="float_car wow animated bounceInLeft " style={{ backgroundImage: `url(${car.src})` }}></div></WOW>
                                </div>
                            </div> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={sliderImage}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='c-caption'>
                            {/* <div className="caro-caption d-flex align-items-center justify-content-between h-100">
                                <div className="left-caption">
                                    <WOW animation='bounceInLeft' delay="0.15s" duration="1s"><h1 className="wow animated bounceInLeft">Sell your car <span> for the best price</span></h1></WOW>
                                    <WOW animation='bounceInLeft' delay="0.50s" duration="1.5s"><p className="wow animated bounceInLeft">India's finest luxury cars, hand-picked</p></WOW>
                                    <WOW animation='bounceInLeft' delay="0.1s" duration="1.8s"><a href="#" className="cmn-button wow animated bounceInLeft text-decoration-none">Browse Collection</a></WOW>
                                </div>
                                <div className="right-caption">
                                    <div className="cap-body">
                                        <WOW animation='fadeInUp' delay='0.15s' duration='1s'>
                                            <h4 className="wow animated  fadeInUp">We are the best when it comes to Sell Or Buy Cars.</h4>
                                        </WOW>
                                        <ul>
                                            <WOW animation='fadeInUp' delay="0.15s" duration="1s">
                                                <li className="wow animated  fadeInUp">Outright <strong>Sale</strong></li>
                                            </WOW>
                                            <WOW animation='fadeInUp' delay="0.50s" duration="1s">
                                                <li className="wow animated  fadeInUp">Best Offer <strong>in 29 Minutes</strong></li>
                                            </WOW>
                                            <WOW animation='fadeInUp' delay="0.80s" duration="1s">
                                                <li className="wow animated  fadeInUp">Hassle Free <strong>Processing</strong></li>
                                            </WOW>
                                        </ul>
                                    </div>
                                    <WOW animation='bounceInLeft' delay="1s" duration="1s"><div className="float_car wow animated bounceInLeft " style={{ backgroundImage: `url(${car.src})` }}></div></WOW>
                                </div>
                            </div> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <div className="search_filter">
                <div className="container_cust">
                    <div className="row">
                        <div className="d-flex flex-row justify-content-center align-items-center gap-15">
                            <div className="_location_filter">
                                <button className="loc-popup _location_filter_button" onClick={() => setShowLocationPopup(true)}>
                                    <span className="_search-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </span>
                                    <span className="_option">Kolkata</span>
                                    <span className="drop-icon">
                                        <i className="bi bi-chevron-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="_auto_search_filter">
                                <form>
                                    <div className="search_option">
                                        <div className="form-control">
                                            <input type="search" placeholder="Search by Make, Model, Type etc." className="_search_box" onClick={() => setShowSearchSuggetion(!showSearchSuggetion)} />
                                            <span className="search-icon">
                                                <i className="bi bi-search"></i>
                                            </span>
                                        </div>
                                        <div className={showSearchSuggetion ? "search-section show" : "search-section"}>
                                            <h4>Popular Searches</h4>
                                            <a href="#">
                                                <span className="search-content">i20</span>
                                                <span className="link-icon">
                                                    <BsBoxArrowUpRight />
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span className="search-content">i20</span>
                                                <span className="link-icon">
                                                    <BsBoxArrowUpRight />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={showLocationPopup ? "custom-model-main model-open" : "custom-model-main"}>
                <div className="custom-model-inner">
                    <div className="close-btn" style={{ marginTop: '-10px' }} onClick={() => setShowLocationPopup(false)}>×</div>
                    <div className="custom-model-wrap">
                        <div className="pop-up-content-wrap">
                            <div className="p-location">
                                <h6>POPULAR CITIES</h6>
                                <ul>
                                    <li>
                                        <a href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p className='text-decoration-none'>Delhi NCR</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="p-citi">
                                            <i>
                                                <Image src={indiaGate} alt="icon" />
                                            </i>
                                            <p>Delhi NCR</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-overlay"></div>
            </div>
        </div>
    )
}

export default Banner
