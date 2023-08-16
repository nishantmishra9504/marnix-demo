import Link from 'next/link';
import React from 'react';

const ContactinfoCard = () => {
  return (
    <ul className='contactinfo d-flex flex-column justify-content-start align-items-start'>
        <li className='d-flex flex-column justify-content-start align-items-start'>
            <h6><i className="bi bi-buildings"></i>Corporate Office</h6>
            <p>Plot No. 134, Sector 37, Pace City 1, Gurgaon Haryana, 122001, India</p>
            <Link href="/">View on Google Map <i className="bi bi-arrow-right"></i></Link>
        </li>
        <li className='d-flex flex-column justify-content-start align-items-start'>
            <h6><i className="bi bi-phone"></i> Contact Us</h6>
            <Link href="/">
                (+91) 9999 9999 83
            </Link>
        </li>
        <li className='d-flex flex-column justify-content-start align-items-start'>
            <h6><i className="bi bi-envelope"></i> Mail Us</h6>
            <Link href="/">
                sales@bigboytoyz.com
            </Link>
        </li>
    </ul>
  )
}

export default ContactinfoCard;
