'use client'
import React from 'react'
import ImagecontentCard from '../ImagecontentCard/ImagecontentCard';

const mydata = [
    {
        uri:'happy_customer.webp',
        heading:'We are about making car ownership accessible, simple and delightful',
        description:'In a country where four wheels fuel dreams, less than two per cent of young Indians are satisfied with the used car experience. Our goal is for the country to trust our method, believe in and enjoy our cars. In this way we aim to propel a billion dreams.',
        link:'Marnix Assured'
    },
    {
        uri:'slider-image.jpg',
        heading:'We are about making car ownership accessible',
        description:'In a country where four wheels fuel dreams, less than two per cent of young Indians are satisfied with the used car experience. Our goal.',
        link:'Marnix Assured'
    },

];

const ImagecardSection = () => {
  return (
    <section className='img-card-section'>
        <div className='container_cust'>
            <div className='row'>
                {mydata.map((mydata, index) => 
                        <div className='col-sm-12 col-md-6' key={index}>
                            <ImagecontentCard key={index} mydata={mydata}/>
                        </div>

                    )
                }
            </div>
        </div>
    </section>
  )
}

export default ImagecardSection;
