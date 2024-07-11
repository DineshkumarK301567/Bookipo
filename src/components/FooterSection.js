import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return (
        <footer id="footer" className="footer-section">
            <div class="container">
                <div class="row">
                    <div class="footer-ribbon">
                        <span>Get in Touch</span>
                    </div>
                    <div class="col-lg-3">
                        <div class="newsletter">
                            <h4>Service In</h4>
                            <ul>
                                <li>Chennai</li>
                                <li>Trichy</li>
                                <li>Coimbatore</li>
                                <li>Madurai</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3" >
                        <h4>Quick Access</h4>
                        <ul>
                            <li>  <a href="#">Home</a> </li>
                            <li>  <Link to="/About"> About</Link> </li>
                            <li> <Link to="/TicketSupport"> Customer Support</Link> </li>
                            <li> <Link to="/Mybooking">My Booking</Link> </li>


                        </ul>
                    </div>
                    <div class="col-lg-4" >
                        <div class="contact-details">
                            <h4>Contact Us</h4>
                            <ul class="contact">
                                <li><p><FaLocationDot className="contact-icon" /> <strong>Address:</strong> 1st Floor, No.3 Second West Street, Kodambakkam, Chennai - 600041</p></li>
                                <li><p><FaPhoneAlt className="contact-icon" /><strong>Phone:</strong> (+91) 999 000 1111</p></li>
                                <li><p><FaPaperPlane className="contact-icon" />  <strong>Email:</strong> <a href="mailto:mail@example.com">info@bookippo.com</a></p></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2" >
                        <h4>Follow Us</h4>
                        <ul class="social-icons">
                            <li class="social-icons-instagram"><a href="http://www.instagram.com/" target="_blank" title="Instagram"><FaInstagram className="custom-icon" /><span>Instagram</span></a></li>
                            <li class="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"> <FaTwitter className="custom-icon" /><span>Twitter</span></a></li>
                            <li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><FaLinkedin className="custom-icon" /><span>Linkedin</span></a></li>
                            <li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><FaFacebook className="custom-icon" /><span>Facebook</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-1">
                            <a class="logo">
                                <img src='./images/offcial-final-logo/logo-white.png' width={85} alt="" />
                            </a>
                        </div>
                        <div class="col-lg-7">
                            <p>© Copyright Vishnu Ads & Ventures Pvt.Ltd.</p>
                        </div>
                        <div class="col-lg-4">
                            <nav id="sub-menu">
                                <ul>
                                    <li>
                                        <img src='./images/google-removebg-preview.png' style={{width: "50px", height: "80px"}} alt='google' />
                                    </li>
                                    <li>
                                        <img src='./images/io-removebg-preview.png' style={{width: "50px", height: "40px"}} alt='ios' />
                                    </li>
                                    <li><a href="javascript:void(0)">FAQ's</a></li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                    <li><a href="javascript:void(0)">Cancellation policy</a></li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection; 