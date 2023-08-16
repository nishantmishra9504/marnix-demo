import React from 'react';


type pagebannerdataType = {
    pagebanner: {
      heading:string; 
      subheading:string;
      bg:string;
    }
  }

const PageBanner = ({pagebanner}:pagebannerdataType) => {
  return (
    <section className='inner-banner' style={{ backgroundImage: `url(${pagebanner.bg})` }}>
        <div className='container_cust'>
            <div className='row'>
                <div className='inn-banner-content'>
                    <h2>{pagebanner.heading}</h2>
                    <p>{pagebanner.subheading}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageBanner;
