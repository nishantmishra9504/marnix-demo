import Image from 'next/image';
import React from 'react';
import perfectCar from '../../src/assets/images/perfect-car-image.jpg';
import body from '../../src/assets/images/body.svg'
import brandIcon from '../../src/assets/images/brand-icon.svg'
import lifeStyle from '../../src/assets/images/lifestyle.svg';
import marnixIcon from '../../src/assets/images/marnix-icon.svg';
import doot from '../../src/assets/images/doot-1.svg';
import { BsArrowRight } from 'react-icons/bs';
import WOW from 'react-wow';


const PerfectCar = () => {
    return (
        <div></div>
        // <div>
        //     <section className="perfect-car">
        //         <div className="floating_doots top">
        //             <Image src={doot} alt="doots" />
        //         </div>
        //         <div className="container_cust">
        //             <div className="row align-items-center">
        //                 <div className="col-sm-12 col-md-6">
        //                     <WOW animation="fadeInDown">
        //                     <div className="cmn_section_heading wow animated fadeInDown">
        //                         <h2>Let's Find Your Perfect Car</h2>
        //                         <p>Browse the database of new luxury cars in India</p>
        //                     </div>
        //                     </WOW>
        //                     <div className="row align-items-center">
        //                         <div className="col-sm-6 col-md-6">
        //                             <WOW animation='fadeInUp' delay="0.15s" duration="1s">
        //                             <div className="perfect-icon-box wow animated fadeInUp">
        //                                 <span className="p-icon">
        //                                     <Image src={body} alt="icon" />
        //                                 </span>
        //                                 <h6>Explore by Body Type</h6>
        //                             </div>
        //                             </WOW>
        //                         </div>
        //                         <div className="col-sm-6 col-md-6">
        //                             <WOW animation='fadeInUp' delay="0.25s" duration="1s">
        //                             <div className="perfect-icon-box wow animated fadeInUp">
        //                                 <span className="p-icon">
        //                                     <Image src={brandIcon} alt="icon" />
        //                                 </span>
        //                                 <h6>Explore Popular Brands</h6>
        //                             </div>
        //                             </WOW>
        //                         </div>
        //                         <div className="col-sm-6 col-md-6">
        //                             <WOW animation='fadeInUp' delay="0.50s" duration="1s">
        //                             <div className="perfect-icon-box wow animated fadeInUp">
        //                                 <span className="p-icon">
        //                                     <Image src={lifeStyle} alt="icon" />
        //                                 </span>
        //                                 <h6>Explore by Lifestyle</h6>
        //                             </div>
        //                             </WOW>
        //                         </div>
        //                         <div className="col-sm-6 col-md-6">
        //                             <WOW animation='fadeInUp' delay="0.75s" duration="1s">
        //                             <div className="perfect-icon-box wow animated fadeInUp">
        //                                 <span className="p-icon">
        //                                     <Image src={marnixIcon} alt="icon" />
        //                                 </span>
        //                                 <h6>Explore more on Marnix</h6>
        //                             </div>
        //                             </WOW>
        //                         </div>
        //                     </div>
        //                     <WOW animation='fadeInUp'>
        //                     <a href="#" className="Explore-all-button wow animated fadeInUp">
        //                         Explore All Car <BsArrowRight size={25} />
        //                     </a>
        //                     </WOW>
        //                 </div>
        //                 <div className="col-sm-12 col-md-6">
        //                     <div className="perfect-car-image" style={{ backgroundImage: `url(${perfectCar.src})` }}></div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="floating_doots bottom">
        //             <Image src={doot} alt="doots" />
        //         </div>
        //     </section>
        // </div>
    )
}

export default PerfectCar
