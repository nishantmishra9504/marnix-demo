import React from 'react'
import Image from 'next/image';
import marnixLogo from '../../src/assets/images/marnix-logo.svg';
import smartPhone from '../../src/assets/images/smartphone.svg';
import wishList from '../../src/assets/images/wishlist.svg';
import account from '../../src/assets/images/account.svg';
import Link from 'next/link';

const Navbar = () => {
    function openClick() {
        $(".open-menu").addClass("open");
        $(".menu-overlay").addClass("overlay_in");
    } 
    function closeClick() {
        $(".open-menu").removeClass("open");
        $(".menu-overlay").removeClass("overlay_in");
    } 
    return (
        <div>
            <header id="js-header">
                {/* Logo-navigatopn */}
                <nav className="navbar navbar-inverse">
                    <div className="container_cust">
                        <div className=" d-flex justify-content-between align-items-center">
                            <div className="navbar-header">
                                <Link className="navbar-brand" href="/"><Image className="img-responsive" src={marnixLogo} alt="logo" width={200} /></Link>
                            </div>
                            <div className="open-menu">
                                <button onClick={closeClick} className='_back'><i className="bi bi-x-circle"></i></button>
                                <ul className="d-flex justify-content-center flex-row  align-items-center">
                                    <li>
                                        <Link className='text-decoration-none' href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className='text-decoration-none' href="/">About</Link>
                                    </li>
                                    <li>
                                        <Link className='text-decoration-none' href="/">How it works</Link>
                                    </li>
                                    <li>
                                        <Link className='text-decoration-none' href="/">Buy car</Link>
                                    </li>
                                    <li>
                                        <Link className='text-decoration-none' href="/">Sell Car</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-info">
                                <Link href="#" className="contact-info text-decoration-none">
                                    <i className="mobile-icon">
                                        <Image src={smartPhone} alt="smartphone-icon" />
                                    </i>
                                    Call Us:<strong>+91 99036 29191</strong>
                                </Link>
                            </div>
                            <div className="wish-profie">
                                <ul className="d-flex justify-content-center flex-row  align-items-center">
                                    <li>
                                        <Link href="#" className="wish-list">
                                            <i className="mobile-icon">
                                                <Image src={wishList} alt="wishlist-icon" />
                                            </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login" className="wish-list">
                                            <i className="mobile-icon">
                                                <Image src={account} alt="account-icon" />
                                            </i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* .navbar-collapse */}
                            <div className="navbar-collapse right-nav" id="slide-navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><Link href="index.html" className="active">Home</Link></li>
                                    <li><Link href="#" className="">About</Link></li>
                                    <li><Link href="#" className="">Contact</Link></li>
                                    {/* <li className='dropdown'>
                            <a className="dropdown-toggle" data-toggle="dropdown" href='#'>More</Link>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="#">asds</a></li>
                                <li><a href="#">asds</a></li>
                                <li><a href="#">asds</a></li>
                                <li><a href="#">asds</a></li>
                            </ul>
                            </li>  */}
                                </ul>
                            </div>
                            <button onClick={openClick} type="button" className="navbar-toggle collapsed" data-toggle="slide-collapse" data-target="#slide-navbar-collapse" aria-expanded="false">
                                <i className="bi bi-list"></i>
                            </button>
                        </div>
                        <div className="menu-overlay"></div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
