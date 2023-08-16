'use client'
import React from 'react'
import IconcardContent from '../IconcardContent/IconcardContent';
import ProcessHeader from '../Inspection/ProcessHeader';

const contactheader = {
    heading:"What's important to us",
    subheading:"",
}

const mydata2 = [
    {
        uri:'warranty.svg',
        heading:'Quality',
        description:'Our cars are the reason we are in business and will be why we continue to exist and attract customers. Quality at every touchpoint for our customers, is just as important to us for we are a service-first brand.',
    },
    {
        uri:'warranty.svg',
        heading:'Transparency & Accountability',
        description:'It brings trust. Laying bare every available fact about our car at our hubs, after our stringent vetting process, reassures customers. A range of industry-first offerings including Spinny Assured ® mean that we are not just in the pre-owned car business, but in the business of growing and building relationships with our customers.',
    },
    {
        uri:'warranty.svg',
        heading:'Personalized Experience',
        description:'Every customer is unique; each demands different things from a set of four wheels. That’s why our inventory is varied and the people you meet in your interactions with Spinny are trained to listen first and at length, then make recommendations.',
    },

];

const WhatsimportantSection = () => {
  return (
    <section className='icon-card-section'>
        <div className='container_cust'>
            <div className='row'>
                <ProcessHeader contactheader={contactheader}/>
                {mydata2.map((mydata2, index) => 
                        <div className='col-sm-12 col-md-4' key={index}>
                            <IconcardContent key={index}  mydata2={mydata2}/>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default WhatsimportantSection;
