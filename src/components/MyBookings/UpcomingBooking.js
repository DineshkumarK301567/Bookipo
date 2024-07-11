import React from "react";
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function UpcomingBooking() {

    return (
        <div>
            <div className="tab-pane fade" id="pills-upcoming" role="tabpanel" aria-labelledby="pills-upcoming-tab">
                <div className="tab-header">
                    <h5>Upcoming Bookings</h5>
                </div>
                <div className="tab-item-content">
                    <div class="booking-list">
                        <Link to="/TurfBio" className="link-cards">
                            <div class="card card-1">
                                <div class="card-header">
                                    <div className="">
                                        <h6 className="ser-name">Turf</h6>
                                        <div><small><span className="txt-label">Booking ID :</span> <span className="txt-value">1KAU9-84UIL</span></small> </div>
                                    </div>
                                    <div className="badges">
                                        <span className="txt-label pr-1">Booking Status</span>
                                        <span className="badge-upcoming">Upcoming</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div className="col-md-2">
                                            <div class="ser-img"> <img className="img-fluid" src="./images/Turf-1.jpg" alt="." /> </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="booking-info">
                                                <div>
                                                    <h6 class="ser-name"> Seven Eleven's Turf</h6>
                                                    <div className="pb-1"> <small><span className="txt-label">Date : </span> <span className="txt-value">April 16 2024</span> </small></div>
                                                    <div className="pb-1"> <small><span className="txt-label">Time : </span> <span className="txt-value">07.00 AM</span> </small></div>
                                                    <div className="pb-1"> <small><span className="txt-label">Ratings : </span> <span className="txt-value"><FaStar /> <FaStar /><FaStar /><FaStar /></span> </small></div>
                                                    <div className="total"> <small><span className="txt-label">Total : </span> <span className="txt-value">Rs.3,600.00</span> </small></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-2">
                                            <div className="action-items text-right">
                                                <button type="button" class="btn btn-outline-primary"><FaEdit className="edit" size={16} /> Reschedule</button>
                                                <div className="mt-2"><button type="button" class="btn btn-outline-danger">Cancel </button></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link to="/TurfBio" className="link-cards">
                            <div class="card card-1">
                                <div class="card-header">
                                    <div className="">
                                        <h6 className="ser-name">Gym</h6>
                                        <div><small><span className="txt-label">Booking ID :</span> <span className="txt-value">1KAU9-84UIL</span></small> </div>
                                    </div>
                                    <div className="badges">
                                        <span className="txt-label pr-1">Booking Status</span>
                                        <span className="badge-upcoming">Upcoming</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div className="col-md-2">
                                            <div class="ser-img"> <img className="img-fluid" src="./images/Turf-1.jpg" /> </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="booking-info">
                                                <div>
                                                    <h6 class="ser-name"> Seven Eleven's Turf</h6>
                                                    <div className="pb-1"> <small><span className="txt-label">Date : </span> <span className="txt-value">April 16 2024</span> </small></div>
                                                    <div className="pb-1"> <small><span className="txt-label">Time : </span> <span className="txt-value">07.00 AM</span> </small></div>
                                                    <div className="pb-1"> <small><span className="txt-label">Ratings : </span> <span className="txt-value"><FaStar /> <FaStar /><FaStar /><FaStar /></span> </small></div>
                                                    <div className="total"> <small><span className="txt-label">Total : </span> <span className="txt-value">Rs.3,600.00</span> </small></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-2">
                                            <div className="action-items text-right">
                                                <button type="button" class="btn btn-outline-primary"><FaEdit className="edit" size={16} /> Reschedule</button>
                                                <div className="mt-2"><button type="button" class="btn btn-outline-danger">Cancel </button></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="tab-pane fade" id="pills-previous" role="tabpanel" aria-labelledby="pills-previous-tab">
                                        <div className="tab-header">
                                            <h5>Completed Bookings</h5>
                                        </div>
                                        <div className="tab-item-content">
                                            <div class="booking-list">
                                                <Link to="/TurfBio" className="link-cards">
                                                    <div class="card card-1">
                                                        <div class="card-header">
                                                            <div className="">
                                                                <h6 className="ser-name">Vehicle</h6>
                                                                <div><small><span className="txt-label">Booking ID :</span> <span className="txt-value">1KAU9-84UIL</span></small> </div>
                                                            </div>
                                                            <div className="badges">
                                                                <span className="txt-label pr-1">Booking Status</span>
                                                                <span className="badge-completed">Completed</span>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div className="col-md-2">
                                                                    <div class="ser-img"> <img className="img-fluid" src="./images/Turf-1.jpg" /> </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div class="booking-info">
                                                                        <div>
                                                                            <h6 class="ser-name"> Seven Eleven's Turf</h6>
                                                                            <div className="pb-1"> <small><span className="txt-label">Date : </span> <span className="txt-value">April 16 2024</span> </small></div>
                                                                            <div className="pb-1"> <small><span className="txt-label">Time : </span> <span className="txt-value">07.00 AM</span> </small></div>
                                                                            <div className="pb-1"> <small><span className="txt-label">Ratings : </span> <span className="txt-value"><FaStar /> <FaStar /><FaStar /><FaStar /></span> </small></div>
                                                                            <div className="total"> <small><span className="txt-label">Total : </span> <span className="txt-value">Rs.3,600.00</span> </small></div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="action-items text-right">
                                                                        <button type="button" class="btn btn-outline-primary">Book Again</button>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="pills-cancelled" role="tabpanel" aria-labelledby="pills-cancelled-tab">
                                        <div className="tab-header">
                                            <h5>Cancelled Bookings</h5>
                                        </div>
                                        <div className="tab-item-content">
                                            <div class="booking-list">
                                                <div class="card card-1">
                                                    <div class="card-header">
                                                        <div className="">
                                                            <h6 className="ser-name">Gym</h6>
                                                            <div><small><span className="txt-label">Booking ID :</span> <span className="txt-value">1KAU9-84UIL</span></small> </div>
                                                        </div>
                                                        <div className="badges">
                                                            <span className="txt-label pr-1">Booking Status</span>
                                                            <span className="badge-cancelled">Cancelled</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div className="col-md-2">
                                                                <div class="ser-img"> <img className="img-fluid" src="./images/Turf-1.jpg" /> </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div class="booking-info">
                                                                    <div>
                                                                        <h6 class="ser-name"> Seven Eleven's Turf</h6>
                                                                        <div className="pb-1"> <small><span className="txt-label">Date : </span> <span className="txt-value">April 16 2024</span> </small></div>
                                                                        <div className="pb-1"> <small><span className="txt-label">Time : </span> <span className="txt-value">07.00 AM</span> </small></div>
                                                                        <div className="pb-1"> <small><span className="txt-label">Ratings : </span> <span className="txt-value"><FaStar /> <FaStar /><FaStar /><FaStar /></span> </small></div>
                                                                        <div className="total"> <small><span className="txt-label">Total : </span> <span className="txt-value">Rs.3,600.00</span> </small></div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-2">
                                                                <div className="action-items text-right">
                                                                    <Link to="/TurfBio" type="button" class="badge-cancelled">Contact Us</Link>
                                                                </div>
                                                            </div>  

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
        </div>
    )
}