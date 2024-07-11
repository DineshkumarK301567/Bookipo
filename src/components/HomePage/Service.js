import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLocationDot, faPhone, faPaperPlane, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt, FaPaperPlane, FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../Navbar";
import ScrollButton from "../ScrollTTop";
import FooterSection from "../FooterSection";
import { Link } from 'react-router-dom';
import ScrollOnClick from "../ScrollOnClick";
import Carousel from "./Carousel";
import CarouselSection from "./Carousel";



export default function Service() {
  const [count, setCount] = useState(0);
  const targetNumber = 200;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < targetNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50); /* millisecond */
    return () => {
      clearInterval(intervalId);
    };
  }, [count, targetNumber]);

  return (

    /* --------------header----------------- */
    <section>
      <Navbar />
      <div className="banner-section">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-6">
              <div className="banner-content">
                <h2 data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">Discover and Book Services Easily with BookIpo</h2>
                <p data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">Lorem Ipsum is simply dummy text of the lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text </p>
                <button type="button" class="btn btn-primary" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">Sign up Free now!</button>
              </div>
            </div>
            <div className="col-md-6 text-right pt-5">
              <img src="/images/top-banner2-min.png" style={{ width: "840px" }} alt="..." data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300" />
            </div>
          </div>
        </div>
      </div>
      <div class="banner-bottom" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
        <ul>
          <li>
            <div className="container-fluid">
              <div className="row align-item">
                <div class="col-md-2 icon text-center"></div>
                <div class="col-md-8"><h5>Special Offers</h5>
                  <p>Lorem Ipsum is simply dummy text of the</p></div>
                <div class="col-md-2 text-center"><span className="arrow">&#x279C;</span></div>
              </div>
            </div>
          </li>
          <li>
            <div className="container-fluid">
              <div className="row align-item">
                <div class="col-md-2 icon text-center"></div>
                <div class="col-md-8"><h5>Special Offers</h5>
                  <p>Lorem Ipsum is simply dummy text of the</p></div>
                <div class="col-md-2 text-center"><span className="arrow">&#x279C;</span></div>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="row align-item">
                <div class="col-md-2 icon text-center"></div>
                <div class="col-md-8"><h5>Special Offers</h5>
                  <p>Lorem Ipsum is simply dummy text of the</p></div>
                <div class="col-md-2 text-center"><span className="arrow">&#x279C;</span></div>
              </div>
            </div>
          </li>
        </ul>

      </div>

      {/* -----section1----- */}
      <div className="section-1 our-service">
        <div className="container">
          <div className="section-title">
            <h4> Our <span>Popular Booking Services</span></h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
          </div>
          <div className="row">
            <div className="col-md-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
              <div className="category-box flip-card">
                <div className="flip-card-inner">
                  <div class="flip-card-front">
                    <span><img src="/images/services/playground.png" class="" alt="..." /></span>
                    <h4>Turf & sports</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                  </div>
                  <div class="flip-card-back">
                    <h4>Turf & sports</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                    <ScrollOnClick to="/Turf" className="btn btn-primary">See Turf</ScrollOnClick>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150">
              <div className="category-box flip-card">
                <div className="flip-card-inner">
                  <div class="flip-card-front">
                    <span><img src="/images/services/doctor.png" class="" alt="..." /></span>
                    <h4>Doctors</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                  </div>
                  <div class="flip-card-back">
                    <h4>Doctors</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                    <ScrollOnClick to="/doctors" className="btn btn-primary">See doctors</ScrollOnClick>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="150">
              <div className="category-box flip-card">
                <div className="flip-card-inner">
                  <div class="flip-card-front">
                    <span><img src="/images/services/lawer.png" class="" alt="..." /></span>
                    <h4>Gym</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                  </div>
                  <div class="flip-card-back">
                    <h4>Gym</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                    <button type="button" className="btn btn-primary">Read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150">
              <div className="category-box flip-card">
                <div className="flip-card-inner">
                  <div class="flip-card-front">
                    <span><img src="/images/services/car-service.png" class="" alt="..." /></span>
                    <h4>Vehicle services</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                  </div>
                  <div class="flip-card-back">
                    <h4>vehicle services</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                    <button type="button" className="btn btn-primary">Read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
              <div className="category-box flip-card">
                <div className="flip-card-inner">
                  <div class="flip-card-front">
                    <span><img src="/images/services/hostel.png" class="" alt="..." /></span>
                    <h4>PG & Hostel</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                  </div>
                  <div class="flip-card-back">
                    <h4>PG & Hostel</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                    <button type="button" className="btn btn-primary">Read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
              <div className="category-box flip-card">
                <div className="flip-card-inner">
                  <div class="flip-card-front">
                    <span><img src="/images/services/coming-soon.png" class="" alt="..." /></span>
                    <h4>Coming Soon</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                  </div>
                  <div class="flip-card-back">
                    <h4>Coming Soon</h4>
                    <p>Lorem Ipsum is simply dummy text of the lorem Ipsum Lorem Ipsum is simply dummy text of the lorem Ipsum</p>
                    <button type="button" className="btn btn-primary">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* promotion space */}
    {/*   <div className="promo-banner">
        <div className="container">
          
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="/images/promo-banner1.jpeg" className="d-block" alt=".." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="/images/promo-banner2.jpeg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/promo-banner3.jpeg" className="d-block" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div> */}
       <div className='carosel-section py-4'>
            <CarouselSection/>
          </div>
     
      {/* -----------section2----------- */}
      <div className="section-2 sub-cat">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-4" data-aos="slide-right" data-aos-duration="1200" data-aos-delay="300">
              <div className="left">
                <h4>Discover a New You!</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                <button type="button" className="btn btn-primary">Read More</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="middle"><img src="/images/our_services.png" alt="..." /></div>
            </div>
            <div className="col-md-4">
              <div className="right cat-1" data-aos="slide-left" data-aos-duration="300" data-aos-delay="100">
                <img src="/images/sub-cat1.png" class="" alt="..." />
                <div className="">
                  <h5>Naturopathy doctors</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
              <div className="right cat-2" data-aos="slide-left" data-aos-duration="600" data-aos-delay="200">
                <img src="/images/sub-cat2.png" class="" alt="..." />
                <div className="">
                  <h5>Exercise bike</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
              <div className="right cat-3" data-aos="slide-left" data-aos-duration="900" data-aos-delay="300">
                <img src="/images/car-ser-removebg-preview.png" class="" alt="..." />
                <div className="">
                  <h5>Car wash</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
              <div className="right cat-4" data-aos="slide-left" data-aos-duration="1200" data-aos-delay="400">
                <img src="/images/court.png" class="" alt="..." />
                <div className="">
                  <h5>volley ball court</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* -----------couter---------- */}
      <div className="counter-up section-4">
        <div className="section-title">
          <h4>Our <span>Customers Journey</span></h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 cust" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="300">
              <span>
                <img src="/images/fact1.png" class="" alt="..." />
              </span>
              <h3 className="">{count}</h3>
              <p className="">
                Skilled professionals
              </p>
            </div>
            <div className="col-md-3 cust" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="300">
              <span>
                <img src="/images/fact2.png" class="" alt="..." />
              </span>
              <h3 className="" data-target="150">
                {count}
              </h3>
              <p className="">Total Services</p>
            </div>
            <div className="col-md-3 cust" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="300">
              <span>
                <img src="/images/fact4.png" class="" alt="..." />
              </span>
              <h3 className="" data-target="60">
                {count}
              </h3>
              <p className="">Per day Booking</p>
            </div>
            <div className="col-md-3 cust" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="300">
              <span>
                <img src="/images/fact4.png" class="" alt="..." />
              </span>
              <h3 className="" data-target="60">
                {count}
              </h3>
              <p className="">Per day Booking</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------offer banner-------- */}
      <div className="offer-banner section-3">
        <div data-aos="slide-up" data-aos-duration="1200" data-aos-delay="300">
          <h2 >Our Specialist Are High-Level Professionals</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting printing and typesetting</p>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <button type="button" className="btn btn-primary">Our Specialist</button>
        </div>
      </div>

      <div className="section-4 vendors">
        <div className="section-title">
          <h4>We're not the only ones <span>excited happy</span> about Bookippo...</h4>
          <p>200+ customers in more than 30 cities use Bookippo website. </p>
        </div>
        <div class="container">
          <div className="slick marquee">
            <div className="slick-slide">
              <div className="inner">
                <marquee className="marquee" >
                  <img class="img-fluid" src="/images/logos/logo-1.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-3.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-5.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-6.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-1.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-3.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-5.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-6.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-1.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-3.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-5.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-6.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-1.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-3.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-5.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-6.png" alt="" style={{ width: "176px", height: "78px" }} />
                  <img class="img-fluid" src="/images/logos/logo-4.png" alt="" style={{ width: "176px", height: "78px" }} />
                </marquee>
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
                <h3>Transform your <strong>Business</strong> and  <strong>Expand your Reach</strong> with Bookipo</h3>
                <p class="mb-0">Create <strong>Success</strong> With Our Services</p>
              </div>
            </div>
            <div class="col-md-3" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300">
              <div class="call-to-action-btn">
                <button class="btn btn-primary">Partner Enrollment</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------footer-------------------- */}
      <FooterSection />
      <ScrollButton />
    </section>

  );
}
