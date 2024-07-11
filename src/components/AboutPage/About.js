import React from "react";
import Navbar from "../Navbar";

import ScrollButton from "../ScrollTTop";
import FooterSection from "../FooterSection";
export default function About() {


    return (
        <div className="about">
            <Navbar />
            <div className=" about-banner-section">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-md-6">
                            <div className="about-banner-content">
                                <h2>Discover the easiest way to booking and grow your business</h2>

                                <p className="sm-text">Book Your Next Service with Ease: Fast, Reliable, and Hassle-Free!</p>
                            </div>
                        </div>
                        <div data-aos="slide-left" data-aos-duration="1200" data-aos-delay="200" className="col-md-6 text-right pt-5">
                            <img src="/images/about-banner.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section-1">
                <img src="/images/offcial-final-logo/FINAL LOGO BOOKIPO.png" alt="..."></img>
            </div>
            <div className="rotator">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="Sentence ">
                                Book your next service with
                                <span className="slidingVertical">
                                    <span> Ease.</span>
                                    <span> Fast.</span>
                                    <span> Reliable.</span>
                                    <span> Hassle-Free.</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section-2">
                <div className="container">
                    {/* <div className="section-title">
                        <h4> Our <span>Story</span></h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div> */}
                    <div class="row mt-3 mb-5">
                        <div class="col-md-4 p-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                            <h3 class="font-weight-bold text-4 mb-4">What Bookipo does </h3>
                            <p>At Bookipo, we've transformed appointment scheduling across diverse services. Join us as we simplify booking for everyone, making it easier, faster, and more efficient.</p>
                        </div>
                        <div class="col-md-4 p-4 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="600">
                            <h3 class="font-weight-bold text-4 mb-4">Our Vision</h3>
                            <p>Our vision at Bookipo is to simplify appointment booking for individuals and businesses, creating a future where scheduling is smooth and enjoyable, not a hassle.</p>
                        </div>
                        <div class="col-md-4 p-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="800">
                            <h3 class="font-weight-bold text-4 mb-4">Why Us</h3>
                            <p>Bookeasy connects users with trusted vendors, offering a secure booking experience. Browse, book, and manage appointments effortlessly with us.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section-3">
                <div class="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="directors">
                                <h2>Meet our directors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="box">
                                <div class="imgBox">
                                    <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt="" />
                                </div>
                                <div class="content">
                                    <h2>Karan Singh
                                        <span>founder</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="box">
                                <div class="imgBox">
                                    <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                                </div>
                                <div class="content">
                                    <h2>Dolly Seth
                                        <span>co-founder</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="box">
                                <div class="imgBox">
                                    <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                                </div>
                                <div class="content">
                                    <h2>Aakash Agrawal
                                        <span>co-founder</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-5 pre-foot">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300">
                            <div class="call-to-action-content">
                                <h3>Bookipo is <strong>everything</strong> you need to create an <strong>awesome</strong> website!</h3>
                                <p class="mb-0">Create <strong>Success</strong> With Our Services</p>
                            </div>
                        </div>
                        <div class="col-md-3" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300">
                            <div class="call-to-action-btn">
                                <button class="btn btn-primary">Get Started Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
            <ScrollButton />
        </div>
    )
}
