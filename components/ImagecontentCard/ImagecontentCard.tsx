'use client'
import React from 'react'
import Link from 'next/link';

type imgcardcontentType ={
    mydata:{
        uri:string,
        heading:string,
        description:string,
        link:string,
    }
}

const ImagecontentCard = ({mydata}:imgcardcontentType) => {
  return (
    <div className='imagecontent-card'>
        <div className='card-img'>
            <img src={mydata.uri} alt='img'/>
        </div>
        <div className='card-content'>
            <h3>{mydata.heading} </h3>
            <p>{mydata.description} </p>
            <Link href="/">{mydata.link}  <i className="bi bi-arrow-right"></i></Link>
        </div>
    </div>
  )
}

export default ImagecontentCard;
