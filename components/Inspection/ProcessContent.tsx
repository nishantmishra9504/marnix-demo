'use client'
import React from 'react';
import Checklist from './ChecklistLeft';
import Image from 'next/image';
import exterior from '../../src/assets/images/exterior.webp';
const ProcessContent = () => {
  return (
    <section className='p-content'>
        <div className='container_cust'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <Checklist></Checklist>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <Image src={exterior} alt='exterior-image'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default  ProcessContent;
