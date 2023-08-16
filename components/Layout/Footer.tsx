import React from 'react';
import footerLogo from '../../src/assets/images/footer-logo.svg';
import Image from 'next/image';
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <section className="footer_section">
                <div className="f-top">
                    <div className="container_cust">
                        <div className="row align-items-center">
                            <div className="col-sm-6 small-last">
                                <div className="social d-flex justify-content-start align-items-center">
                                    <span>Follow Us</span>
                                    <ul className="d-flex justify-content-start align-items-center flex-row ">
                                        <li>
                                            <a href="#">
                                                <BsFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <BsTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <BsLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <BsYoutube />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-end ">
                                <form action="action_page.php" className="subscription-form d-flex justify-content-end align-items-center w-100">
                                    <input type="text" placeholder="Email address" className="form-control email_box" name="mail" required />
                                    <input type="submit" value="Subscribe" className="submit-button" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-mid">
                    <div className="container_cust">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-12 border-b">
                                        <a href="#" className="footer-logo">
                                            <Image src={footerLogo} alt="logo" />
                                        </a>
                                        <p>
                                            Marnix is the most trusted way of buying and selling used cars. Choose from over 5000 fully inspected second-hand car models. Select online and book a test drive at your home or at a Marnix Car Hub near you. Get a no-questions-asked 5-day money back guarantee and a free one-year comprehensive service warranty with Assured Resale Value on every MarnixAssured® car.
                                        </p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 border-b-small">
                                        <div className="c-info">
                                            <h4>Headquaters</h4>
                                            <p>Tower, Plot No 2D, Austin
                                                12, Street Number 692
                                                Action Area II, Newtown
                                                Kolkata, West Bengal 700161
                                                India</p>
                                                {/* <span className="f-mail">
                                                    <i className="bi bi-envelope"></i>
                                                    <a href="mailto:sales@bigboytoyz.com">sales@marnix.com</a>
                                                </span> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-start align-items-start flex-sm-row flex-md-row flex-lg-column border-b-small ">
                                        <div className="f-cont-info">
                                            <h4>Contact Us</h4>
                                            <span className="f-mobil d-flex justify-content-start align-items-center flex-row ">
                                                <i className="bi bi-phone"></i>
                                                <a href="tel:+919999999983">(+91) 99036 29191</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-2 d-flex justify-content-start align-items-start flex-column border-b-small">
                                <div className="about_link">
                                    <h4 className="small-drop">About</h4>
                                    <ul className="d-flex justify-content-start align-items-start flex-column about-link-point">
                                        <li>
                                            <a href="#">Assured</a>
                                        </li>
                                        <li>
                                            <a href="#">Who we are</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog - Yellow Drive</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ's</a>
                                        </li>
                                        <li>
                                            <a href="#">How It Works</a>
                                        </li>
                                        <li>
                                            <a href="#">Inspection</a>
                                        </li>
                                        <li>
                                            <a href="/process">Process</a>
                                        </li>
                                        <li>
                                            <a href="#">Customer Reviews</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Car Loan</a>
                                        </li>
                                        <li>
                                            <a href="/contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-5 d-flex justify-content-start align-items-start flex-column">
                                <div className="about_link brand">
                                    <h4>Brands</h4>
                                    <ul className="d-flex justify-content-start align-items-start flex-row  flex-wrap about-link-point2">
                                        <li>
                                            <a href="#">Used Audi</a>
                                        </li>
                                        <li>
                                            <a href="#"> Used BMW</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Chevrolet</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Ducati  </a>
                                        </li>
                                        <li>
                                            <a href="#">Used Fiat   </a>
                                        </li>
                                        <li>
                                            <a href="#"> Used Ford</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Honda</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Hummer</a>
                                        </li>

                                        <li>
                                            <a href="#">Used Jaguar</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Jeep </a>
                                        </li>
                                        <li>
                                            <a href="#"> Used Kawasaki</a>
                                        </li>
                                        <li>
                                            <a href="#"> Used Land Rover</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Audi</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Mercedes-Benz  </a>
                                        </li>
                                        <li>
                                            <a href="#"> Used Mini</a>
                                        </li>
                                        <li>
                                            <a href="#">Used MV Agusta</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Nissan</a>
                                        </li>
                                        <li>
                                            <a href="#">Used Skoda </a>
                                        </li>
                                        <li>
                                            <a href="#">Used Toyota </a>
                                        </li>
                                        <li>
                                            <a href="#"> Used Volvo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-bottom">
                    <div className="container_cust">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-6 last">
                                <p>Copyright © 2023<a href="#">marnix</a></p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 ">
                                <ul className="d-flex align-items-center justify-content-end flex-row">
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Cancellation & Refund</a>
                                    </li>
                                    <li>
                                        <a href="#"> Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="#"> Site Map</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
