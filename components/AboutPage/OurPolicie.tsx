'use client'
import React from 'react';

type ourpoliciType = {
  policidata: {
    heading:string; 
    subheading:string;
    url:string;
  }
}

const OurPolici = ({policidata}:ourpoliciType) => {
  return (
    <section className='polici-header'>
    <div className='container_cust'>
        <div className='row'>
            <div className='col-sm-9'>
                {policidata.heading && <h2>{policidata.heading}</h2>}
                {policidata.subheading &&  <p>{policidata.subheading}</p>}
            </div>
            <div className='col-sm-3'>
                <div className='btn-grup'>
                    <a href={policidata.url} className='cmn-button'>Anti Bribery <i className="bi bi-download"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurPolici;
