'use client'
import { useEffect } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Homepage from '../../components/Homapage';
import { useGetRequestQuery } from '@/redux/services/RequestHandler';
import {APIEndPoints} from '../../APIEndPoints';
import { useAppDispatch } from '@/redux/hooks';
import { setAllCarDetails } from '@/redux/slices/CarSlice';
import { useRouter } from 'next/navigation';
import bg from '../../public/bg.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import whitelogo from '../../src/assets/images/logo-white.svg';
import Image from 'next/image';
import Iframe from 'react-iframe';
import FeatureCars from '../../components/Homapage/FeatureCars';
import Footer from '../../components/Layout/Footer';

import ContactPage from '../../components/ContactForm/ContactForm';

export default function Home() {
  const { data, isSuccess, isError, error } = useGetRequestQuery({ url: APIEndPoints.view_owned_vehicles });
  const { data: socialData, isSuccess: socialIsSuccess, isError: socialIsError, error: socialError } = useGetRequestQuery({ url: APIEndPoints.view_marketings, featured: true, status: true });
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (isSuccess) {
      dispatch(setAllCarDetails(data.data.vehicles));
    }
    else if (isError) {
      console.log(error);
    }

    if(socialIsSuccess){
      
    }
    else if(socialIsError){
      console.log(socialData)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, socialIsError, socialIsSuccess, socialData])

  return (
    <>
      <div className='comingsoon-page'>
        <div className="content">
          <div className='cont-body'>
            <div className='logo'>
              <Image src={whitelogo} alt='logo' />
            </div>
            <h1> Our Website is <span>Coming Soon</span></h1>
            <p>We’re working hard to finish the development of this site. Sign up below
              to receive updates and to be notified when we launch!</p>
            <div className='video-fream'>
              <Iframe
                url={socialData && socialData.data.marketings.length != 0 ? `${socialData.data.marketings[0].link}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=1&controls=1&autoplay=1` : ""}
                width="100%"
                height="200px"
                display="block"
                position="relative"
                loading="lazy"
                title="YouTube video player"
                referrerpolicy="no-referrer-when-downgrade"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                
              />
            </div>
          </div>
          
        </div>
        <div className='bg' style={{ backgroundImage: `url(${bg.src})` }}></div>
      </div>
      <FeatureCars />
      <section className='comingsoon-form'>
        <div className='container'>
          <div className='row'>
            <div className='f-wrapper'>
              <div className='c_header'>
                <small>Mail Us</small>
                <h2>Contact Us</h2>
              </div>
              <ContactPage/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Homepage /> */}
    </>
  )
}
