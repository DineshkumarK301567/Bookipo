import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Navbar from "../Navbar";
import FooterSection from "../FooterSection";
import ScrollButton from "../ScrollTTop";

export default function TicketSupport() {

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowAlert(true);
    }

    return (
        <div>
            <Navbar />
            <div className="ticket">
                <div class="container tics">
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <h4 className="con">Way to contact us</h4>
                            <div class="input-group input-group-icon">
                                <input type="text" placeholder="Full Name" />
                                <div class="input-icon">
                                    <CiUser className="i" />
                                </div>
                            </div>
                            <div class="input-group input-group-icon">
                                <input type="email" placeholder="Email Address" />
                                <div class="input-icon">
                                    <CiMail className="i" />
                                </div>
                            </div>
                            <div class="input-group input-group-icon">
                                <input type="text" placeholder="Mobile number" />
                                <div class="input-icon">
                                    <IoCallOutline className="i" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h5>Your Query related to:</h5>
                                <div className="input-group fields mb-3">
                                    <div className="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Choose</label>
                                    </div>
                                    <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>Payment</option>
                                        <option value="1">Service </option>
                                        <option value="2">Technical</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6 state">
                                <div class="input-group fields mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">State</label>
                                    </div>
                                    <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>TamilNadu</option>
                                        <option value="1">Andhra Pradesh </option>
                                        <option value="1">Arunachal Pradesh </option>
                                        <option value="2">Assam</option>
                                        <option value="3">Bihar</option>
                                        <option value="3">Chhattisgarh</option>
                                        <option value="3">Goa</option>
                                        <option value="3">Gujarat</option>
                                        <option value="3">Haryana</option>
                                        <option value="3">Himachal Pradesr</option>
                                        <option value="3">Jharkhand</option>
                                        <option value="3">Karnataka</option>
                                        <option value="3">Kerala</option>
                                        <option value="3">Madhya Pradesh</option>
                                        <option value="3">Maharashtra</option>
                                        <option value="3">Manipur</option>
                                        <option value="3">Meghalaya</option>
                                        <option value="3">Mizoram</option>
                                        <option value="3">Nagaland</option>
                                        <option value="3">Odisha</option>
                                        <option value="3">Punjab</option>
                                        <option value="3">Rajasthan</option>
                                        <option value="3">Tamil Nadu</option>
                                        <option value="3">Telangana</option>
                                        <option value="3">Tripura</option>
                                        <option value="3">Uttar Pradesh</option>
                                        <option value="3">Uttarakhand</option>
                                        <option value="3">West Bengal</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="input-group fields mb-3">
                                    <div className="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">City</label>
                                    </div>
                                    <select class="custom-select" id="gh">
                                        <option selected>Chennai</option>
                                        <option value="1">Avadi </option>
                                        <option value="2">Kodambakam</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="input-group fields mb-3">
                                    <div className="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">pincode</label>
                                    </div>
                                    <select class="custom-select" id="ph">
                                        <option selected></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        

                        <div class="row">
                            <h5>Subject</h5>
                            <div class="input-group ">
                                <input type="text" placeholder="Subject of your query" />
                            </div>
                            <h5>Your Query</h5>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea1" style={{ height: "100px" }}></textarea>
                                <label className="" for="floatingTextarea1"></label>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02" />
                                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                        </div>
                        <div class="row py-3">
                            <button type="submit" class="btn btn-primary">submit</button>
                        </div>
                    </form>
                    {showAlert && (
                        <div className="alert alert-success" role="alert">
                            Your query has been raised successfully!
                        </div>
                    )}
                </div>
                <div class="section-5 pre-foot mt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300">
                                <div class="call-to-action-content">
                                    <h3>Transform your <strong>Business</strong> and  <strong>Expand your Reach</strong> with Bookipo</h3>
                                    <p class="mb-0">Create <strong>Success</strong> With Our Services</p>
                                </div>
                            </div>
                            {/*  <div class="col-md-3" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300">
                                    <div class="call-to-action-btn">
                                        <button class="btn btn-primary">Partner Enrollment</button>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </div>


            </div>
            <FooterSection />
            <ScrollButton />
        </div>
    )
}