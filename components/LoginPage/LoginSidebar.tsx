import React from 'react'
import marnixLogo from '../../src/assets/images/marnix-logo.svg';
import marnixpatern from '../../src/assets/images/bg-pattern.svg';
import Image from 'next/image';
import Link from 'next/link';


function LoginSidebar() {
  return (
    <div className='side-panel d-flex flex-column align-items-center justify-content-center ' style={{ backgroundImage: `url(${marnixpatern.src})` }}>

        <Link className="brand-logo" href="#wrapper">
            <Image className="img-responsive" src={marnixLogo} alt="logo" width={200} />
        </Link>
        <div className='side-panel-heading'>
            <small>Nice to see you again</small>
            <h2>Welcome Back</h2>
        </div>

    </div>
  )
}

export default LoginSidebar;