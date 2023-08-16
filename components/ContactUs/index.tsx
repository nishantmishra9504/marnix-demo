'use client'
import React from 'react'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import PageBanner from '../InnerBanner/InnerBanner';
import ContactinfoCard from './InformationCard';
import ContactForm from '../ContactForm/ContactForm';
import Iframe from 'react-iframe';

const pagebanner = {
    bg:"slider-image.jpg",
    heading:"Contact Us",
    subheading:"Multiple Options to Choose, Service Anytime Anywhere!"
}

function ContactPage() {
  return (
    <div>
        <Navbar/>
        <PageBanner pagebanner={pagebanner}/>
        <section className='contact-sec'>
            <div className='container_cust'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-7 contact-details'>
                        <small>Reach Us</small>
                        <h2>Get in Touch </h2>
                        <ContactinfoCard/>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-5 contact-form'>
                        <small>Mail Us</small>
                        <h2>How can we help you?</h2>
                        <p></p>
                        <div className='c-form'>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='map'>
            <div className='container_cust'>
                <div className='row'>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.4210268083684!2d77.00689167621226!3d28.43672199294439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17e8bfffffff%3A0xdb108da17afb495b!2sBig%20Boy%20Toyz%20Ltd!5e0!3m2!1sen!2sin!4v1689869311298!5m2!1sen!2sin"
                    width="100%"
                    height="350px"
                    display="block"
                    position="relative"
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
        <div className='bot-content'>
            <div className='container_cust'>
                <div className='row'>
                    <h6>Why buy a used car from Marnix?</h6>
                    <p>
                    Marnix takes the uncertainty and risk out of buying a used car, offering peace of mind at every step with zero compromises. Our selection process ensures that only the highest quality certified second hand cars in your city. A Marnix Assured car is only certified once it passes a thorough 200-point evaluation that checks the condition of every part of the car. Any used car can get certified. It takes perfection to be Marnix Assured. Experience a simple & fully transparent way of buying used cars with Marnix. Find your perfect match from our wide range of fully inspected & certified used cars at the best prices. All Marnix Assured cars come with hassle-free paperwork, free RC transfer, and used car finance options with low-interest rates starting from only 12.99%. With Marnix, pre-owned is better than new. Get the savings of a pre-owned with the quality of a new car. All this through a transparent, convenient and trustworthy process, to make sure you buy a car you'll love, guaranteed.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactPage;