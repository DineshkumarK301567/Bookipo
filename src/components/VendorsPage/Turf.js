import React from "react";
import Navbar from "../Navbar";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import UseOnlineStatus from "./UseOnlineStatus";
import ScrollButton from "../ScrollTTop";
import FooterSection from "../FooterSection"
import { Link } from "react-router-dom";
import ScrollOnClick from "../ScrollOnClick";


export default function Turf() {


    return (
        <div className="turf-page">
            <Navbar />
            <div className="lists">
                <div className="filter pt-4 pb-4 mb-4">
                    <div className="container">
                        <div className="card-search-form">
                            <div className="card-body p-0">
                                <form className="search-form">
                                    <div className="row">
                                        <div className="col-md-4 p-0">
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>Location</option>
                                                <option>Coimbature</option>
                                                <option>Villupuram</option>
                                                <option>Chengalpattu</option>
                                            </select>
                                        </div>
                                        <div className="col-md-8 p-0 filter-input">
                                            <input type="text" placeholder="Search for service..." class="form-control" id="search" name="search" />
                                            <span className="lens"> <FaSearch /></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <Link to="/TurfBio" className="card-body link-cards">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                    {/* <div className="view-profile">
                                        <ScrollOnClick to="/Turfbio">View profile</ScrollOnClick>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>

                                    {/* <div className="dr-flex">
                                        <span><GiThrowingBall /></span> <small> Dr. John clinic</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaBriefcase /></span> <small>4 years of experience</small>
                                    </div> */}
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Cricket, Volley ball, Football, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>
                                        <span className="status"><UseOnlineStatus /></span>
                                    </div>
                                    <button type="button" class="btn btn-primary dr-btn">Select Service</button>
                                    {/*   <Link className="dr-btn" to="/Turfbio">Book Now</Link> */}
                                </div>

                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <div className="card-body">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Box cricket, Volley ball, Swimming pool, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>

                                    </div>
                                    <Link to="/Turfbio" class="btn btn-primary dr-btn">Book Now</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <div className="card-body">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                    {/* <div className="view-profile">
                                        <Link to="/Turfbio">View profile</Link>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>

                                    {/* <div className="dr-flex">
                                        <span><GiThrowingBall /></span> <small> Dr. John clinic</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaBriefcase /></span> <small>4 years of experience</small>
                                    </div> */}
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Box cricket, Volley ball, Swimming pool, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>

                                    </div>
                                    <button type="button" class="btn btn-primary dr-btn">Book Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <div className="card-body">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                    {/* <div className="view-profile">
                                        <Link to="/Turfbio">View profile</Link>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>

                                    {/* <div className="dr-flex">
                                        <span><GiThrowingBall /></span> <small> Dr. John clinic</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaBriefcase /></span> <small>4 years of experience</small>
                                    </div> */}
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Box cricket, Volley ball, Swimming pool, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>

                                    </div>
                                    <button type="button" class="btn btn-primary dr-btn">Book Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <div className="card-body">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                    {/* <div className="view-profile">
                                        <Link to="/Turfbio">View profile</Link>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>

                                    {/* <div className="dr-flex">
                                        <span><GiThrowingBall /></span> <small> Dr. John clinic</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaBriefcase /></span> <small>4 years of experience</small>
                                    </div> */}
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Box cricket, Volley ball, Swimming pool, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>

                                    </div>
                                    <button type="button" class="btn btn-primary dr-btn">Book Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <div className="card-body">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                    {/*  <div className="view-profile">
                                        <Link to="/Turfbio">View profile</Link>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>

                                    {/* <div className="dr-flex">
                                        <span><GiThrowingBall /></span> <small> Dr. John clinic</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaBriefcase /></span> <small>4 years of experience</small>
                                    </div> */}
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Box cricket, Volley ball, Swimming pool, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>

                                    </div>
                                    {/*  <button type="button" class="btn btn-primary dr-btn">Book Now</button> */}
                                    <Link to="/Turfbio" className="dr-btn">Book Now</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <div className="card-body">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                    {/* <div className="view-profile">
                                        <Link to="/Turfbio">View profile</Link>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>

                                    {/* <div className="dr-flex">
                                        <span><GiThrowingBall /></span> <small> Dr. John clinic</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaBriefcase /></span> <small>4 years of experience</small>
                                    </div> */}
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Box cricket, Volley ball, Swimming pool, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>

                                    </div>
                                    <button type="button" class="btn btn-primary dr-btn">Book Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card dr-card">
                            <div className="card-body">
                                <div className="image-box">
                                    <img src="./images/Turf-1.jpg" alt="..." />
                                    {/* <div className="view-profile">
                                        <Link to="/Turfbio">View profile</Link>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="dr-info">
                                        <div className="dr-name">
                                            <h5>Seven Eleven's Turf</h5>
                                        </div>
                                        <div className="price text-right">
                                            <p><span><FaStar /></span> 4.5 Ratings</p>
                                        </div>
                                    </div>

                                    {/* <div className="dr-flex">
                                        <span><GiThrowingBall /></span> <small> Dr. John clinic</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaBriefcase /></span> <small>4 years of experience</small>
                                    </div> */}
                                    <div className="dr-flex">
                                        <span><MdSportsCricket /></span> <small>Box cricket, Volley ball, Swimming pool, Tennis etc</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><IoTimeSharp /></span> <small>Mon - sun &nbsp;  06AM - 10PM</small>
                                    </div>
                                    <div className="dr-flex">
                                        <span><MdOutlineEventAvailable /></span><small>Availablity</small>

                                    </div>
                                    <button type="button" class="btn btn-primary dr-btn">Book Now</button>
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
            <FooterSection />
            <ScrollButton />

        </div>
    )
}