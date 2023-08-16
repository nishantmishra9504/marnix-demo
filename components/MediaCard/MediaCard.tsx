'use client'
import React from 'react'

type mediacardType ={
    mydata3:{
        uri:string,
        heading:string,
        url:string,
        catagori:string,
    }
}

const MediaCard = ({mydata3 }:mediacardType) => {
  return (
    <div className='media-card'>
        <div className='media-image'>
            <span>{mydata3.catagori}</span>
            <img src={mydata3.uri} alt='img'/>
        </div>
        <div className='card-content'>
          <h4>{mydata3.heading}</h4>
          <a href={mydata3.url} className='_link_button'>View full article <i className="bi bi-chevron-right"></i></a>
        </div>
    </div>
  )
}

export default MediaCard;
