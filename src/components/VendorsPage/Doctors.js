import React from "react";
import Navbar from "../Navbar";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import ScrollButton from "../ScrollTTop";
import FooterSection from "../FooterSection";

export default function Doctors() {


    return (
        <div className="doctors-page">
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="card dr-card">
                                <div className="card-body">
                                    <div className="image-box">
                                        <img src="./images/doctor3.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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
                                        <img src="./images/ven-doc1.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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
                                        <img src="./images/doctor3.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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
                                        <img src="./images/ven-doc1.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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
                                        <img src="./images/doctor3.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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
                                        <img src="./images/ven-doc1.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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
                                        <img src="./images/doctor3.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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
                                        <img src="./images/ven-doc1.jpg" alt="..." />
                                    </div>
                                    <div>
                                        <div className="dr-info">
                                            <div className="dr-name">
                                                <h5>Dr. John</h5>
                                                <small>General Doctor</small>
                                            </div>
                                            <div className="price text-right">
                                                <h6>Rs.700</h6>
                                                <p><span><FaStar /></span> 4.5 Ratings</p>
                                            </div>
                                        </div>

                                        <div className="dr-flex">
                                            <span><FaRegHospital /></span> <small> Dr. John clinic</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaBriefcase /></span> <small>4 years of experience</small>
                                        </div>
                                        <div className="dr-flex">
                                            <span><FaLocationDot /></span> <small>Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai</small>
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

            </div>
            <FooterSection />
            <ScrollButton />
        </div>
    )

}