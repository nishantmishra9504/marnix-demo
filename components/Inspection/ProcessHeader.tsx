'use client'
import React from 'react';

type processheaderType = {
  contactheader: {
    heading:string; 
    subheading:string;
  }
}

const ProcessHeader = ({contactheader}:processheaderType) => {
  return (
    <section className='p-header'>
        <div className='container_cust'>
            <div className='row'>
            {contactheader.heading && <h2>{contactheader.heading}</h2>}
                {contactheader.subheading &&  <p>{contactheader.subheading}</p>}
            </div>
        </div>
    </section>
  )
}

export default  ProcessHeader;
