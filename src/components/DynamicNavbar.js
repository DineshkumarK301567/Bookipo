import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function DynamicNavbar() {

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        BookIpo         
                        <small>Make it easy</small>
                    </a>
                   <div className="container">
                     <div className="row">
                        <div className="col-lg-12 card-margin">
                            <div className="card-search-form">
                                <div className="card-body p-0">
                                    <form className="search-form">
                                        <div className="col-12">
                                            <div className="row no-gutters">
                                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>Location</option>
                                                        <option>Coimbature</option>
                                                        <option>Villupuram</option>
                                                        <option>Chengalpattu</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                                                <input type="text" placeholder="Search for service..." class="form-control" id="search" name="search" /> 
                                                </div>
                                                <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                                                    <button type="submit" className="btn-btn-base"><FaSearch /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                     </div>
                   </div>

                </div>

            </nav>
        </div>
    )
}