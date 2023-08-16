'use client'
import React from 'react';

type teampropsType = {
  teamdata: {
    heading:string; 
    description:string;
    uri:string;
  }
}

const OurTeam = ({teamdata}:teampropsType) => {
  return (
    <section className='team-section'>
    <div className='container_cust'>
        <div className='row'>
            <div className='col-sm-6'>
                <div className='team-img'>
                    <img src={teamdata.uri} alt='team-image'></img>
                </div>
            </div>
            <div className='col-sm-6'>
                <div className='team-content'>
                    {teamdata.heading && <h2>{teamdata.heading}</h2>}
                    {teamdata.description &&  <p>{teamdata.description}</p>}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurTeam;
