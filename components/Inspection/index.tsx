'use client'
import React from 'react'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import ProcessHeader from './ProcessHeader';
import ProcessContent from './ProcessContent';
import ProcesscontentRight from './ProcesscontentRight';

const contactheader = {
    heading:"The Marnix Inspection",
    subheading:"Everybody hates long lists. But you're going to love the Marnix Inspection list because we make sure every car on Marnix passes all 200 points on the list before we offer it to you. Any car can get certified. It takes perfection to be Marnix Certified."
}


const ProcessPage = () => {
  return (
    <div>
        <Navbar/>
        <ProcessHeader contactheader={contactheader}  />
        <ProcessContent/>
        <ProcesscontentRight/>
        <ProcessContent/>
        <Footer/>
    </div>
  )
}

export default ProcessPage;
