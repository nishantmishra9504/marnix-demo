'use client'
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadcrumbLink = () => {
    return (
      <div>
        <Breadcrumb className='cust-breadcrumb'>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
  
  
      </div>
    )
  }
  
  export default BreadcrumbLink;