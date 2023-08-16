'use client'
import React from 'react'
import PageBanner from '../InnerBanner/InnerBanner';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import ImagecardSection from './ImagecardSection';
import WhatsimportantSection from './WhatsimportantSection';
import OurPolici from './OurPolicie';
import MediaCover from './MediaCover';
import OurTeam from './TeamCard';

const pagebanner = {
    bg:"slider-image.jpg",
    heading:"About Us",
    subheading:"Four wheels fuel a billion dreams and for every dream there is a Marnix"
}

const policidata = {
  heading:"Our Policies",
  subheading:"At Marnix, we prioritize the safety and well-being of our employees by creating a safe and healthy work environment, while also providing complete transparency for our customers throughout their car-buying experience.",
  url:'/'
}

const teamdata = {
  heading:"Marnix Squad",
  description:"Our team is our beating heart. Each member of our squad intrinsically believes in what brand Marnix stands for and does. It's a case of mission meets vision meets highly motivated squad, each of whom understand that the needs and aspirations of every customer are unique.",
  uri:'slider-image.jpg'
}


const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <PageBanner pagebanner={pagebanner}/>
        <ImagecardSection/>
        <WhatsimportantSection/>
        <OurPolici policidata={policidata}/>
        <MediaCover/>
        <OurTeam teamdata={teamdata} />
        <Footer/>
    </div>
  )
}

export default AboutPage;
