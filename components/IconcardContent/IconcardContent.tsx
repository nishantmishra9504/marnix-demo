'use client'
import React from 'react'

type IconcardContentType ={
    mydata2:{
        uri:string,
        heading:string,
        description:string,
    }
}


const IconcardContent = ({mydata2 }:IconcardContentType) => {
  return (
    <div className='card-content'>
        <span className='icon-img'>
            <img src={mydata2.uri} alt='img'/>
        </span>
        <h3>{mydata2.heading} </h3>
        <p>{mydata2.description} </p>
    </div>
  )
}

export default IconcardContent;
