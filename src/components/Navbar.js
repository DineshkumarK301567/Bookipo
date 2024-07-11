import React, { useState, useEffect, useNavigate } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosSearch } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import ScrollOnClick from './ScrollOnClick';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import { TiUser } from "react-icons/ti";
import { BiDownload } from "react-icons/bi";
import MyBooking from './MyBookings/Mybooking';



export default function Navbar() {

 
  const [stickyClass, setStickyClass] = useState('');

  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  const openDropdown = () => {
    setIsOpen(true); // Open the dropdown
  };

  const closeDropdown = () => {
    setIsOpen(false); // Close the dropdown
  };

  const handleLinkClick = () => {
    closeDropdown();
  }

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
   
  };

  return <div className={`navbar-header ${stickyClass}`}>
    {/* <div className="topbar">
      <div className='container'>
        <div className='topbar-text'>
          <div className='d-md-block mr-2 text-nowrap'>
            <Link to="#" className='topbar-link'><span><TiUser size={19} /></span> Partner Enrollment</Link>
            <Link to="#" className='topbar-link'><span><BiDownload size={19}  /></span> Get App</Link>
          </div>
        </div>
      </div>

    </div> */}

    <nav class="navbar navbar-light navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret">
      <div class="container-fluid nav-normal">
        {/* toggle button */}
        <button class="navbar-toggler px-0" type="button" data-mdb-toggle="collapse"
          data-target="#navbarMegaMenu" aria-controls="navbarMegaMenu" aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <ScrollOnClick to="/" className="navbar-brand colored">
          <img src='./images/offcial-final-logo/logo-colored.png' alt='...' style={{ width: "130px" }}></img>
        </ScrollOnClick>
        <ScrollOnClick to="/" className="navbar-brand white">
          <img src='./images/offcial-final-logo/logo-white.png' alt='...' style={{ width: "130px" }}></img>
        </ScrollOnClick>
        <div>
          <button
            class="navbar-toggler px-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMegaMenu"
            aria-controls="#navbarMegaMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-white"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarMegaMenu">
            <ul class="navbar-nav ml-auto">
              <li>
                {/*  <div className="search-box">
                  <button class="btn-search"><IoIosSearch /></button>
                  <input type="text" className="input-search" placeholder="Type to Search..." />
                </div> */}
                <div class="wrap">
                  <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search for service..." />
                    <button type="submit" class="searchButton">
                      <IoIosSearch />
                    </button>
                  </div>
                </div>
              </li>
              <li class="nav-item notify">
                <Space size='middle'>
                  <Badge size='small' count={5}>
                    <ScrollOnClick to="/Mybooking"><FaHeart className='navbar-icon' size={26} color='#ff6719' /> </ScrollOnClick>
                  </Badge>
                </Space>

              </li>
              <li class="nav-item notice notify">
                <Space size='middle'>
                  <Badge size='small' count={5}>
                    <IoIosNotifications className='navbar-icon' size={28} color='#ff6719' />
                  </Badge>
                  <div className='dropdown_content'>
                    <li>Notification 1</li>
                    <li>Notification 2</li>
                    <li>Notification 3</li>
                  </div>
                </Space>
              </li>
              <li class="nav-item dropdown user-log" >
                <button type="button" className="btn " data-bs-toggle="dropdown" aria-expanded="false">
                  <FaCircleUser style={{ cursor: 'pointer' }} size={28} color='#ff6719' />
                </button>
                <ul className="dropdown-menu show bsb-fadeIn">
                  <li><ScrollOnClick to="/Mybooking" className="dropdown-item" onClick={handleLinkClick}>My bookings</ScrollOnClick></li>
                  <li><ScrollOnClick to="/Mybooking" className="dropdown-item" onClick={handleLinkClick}>Profile</ScrollOnClick></li>
                  <li><ScrollOnClick to="/TicketSupport" className="dropdown-item" onClick={handleLinkClick}>Get help</ScrollOnClick></li>
                  <li><ScrollOnClick to="/" className="dropdown-item" onClick={handleLinkClick} style={{ color: '#e20b0b' }}>Log Out</ScrollOnClick></li>
                </ul>
              </li>
              {/* login/register , location search input */}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid sub-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <ScrollOnClick className='nav-link' to="/Turf">Turf & Sports<span className='sr-only'></span></ScrollOnClick>
          </li>
          <li className="nav-item">
            <ScrollOnClick className='nav-link' to="/Doctors">Doctors<span className='sr-only'></span></ScrollOnClick>
          </li>
          <li className="nav-item">
            <ScrollOnClick className='nav-link' to="/">Vehicle services<span className='sr-only'></span></ScrollOnClick>
          </li>
          <li class="nav-item dropdown mega-menu">
            <a class="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gym</a>
            <div className='mega-menu-items dropdown-menu show bsb-fadeIn'>
              <div className='mega-menu-list container-fluid'>
                <div className='row'>
                  <div className='col-md-3 column'>
                    <h5 className='mega-header-1'>Doctors</h5>
                    <ul class="list" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> General Doctors</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Pediatrician</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Neurologist</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Orthologist</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Gynaecologist</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-2'>Gym</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Women's Only Gym</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Personal Training</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Aerobics classes</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Functional Training</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Zumba Aerobics</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-3'>Vehicle services</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Assembly and Testing</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Maintenance and Repair</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> washing</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Engine replacement and repair</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Acting driver</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-4'>Turf and Sports</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Badmiton court</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Football court</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Box cricket</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> volley ball</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> khabadi</a></li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3 column'>
                    <h5 className='mega-header-5'>doctor</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-6'>doctor</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-7'>doctor</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-8'>doctor</h5>
                    <ul aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to="/">Pg & hostel<span className='sr-only'></span></Link>
          </li>
          <li class="nav-item dropdown mega-menu">
            <a class="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Option 6</a>
            <div className='mega-menu-items dropdown-menu show bsb-fadeIn'>
              <div className='mega-menu-list container-fluid'>
                <div className='row'>
                  <div className='col-md-3 column'>
                    <h5 className='mega-header-1'>Doctors</h5>
                    <ul class="list" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> General Doctors</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Pediatrician</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Neurologist</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Orthologist</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Gynaecologist</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-2'>Gym</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Women's Only Gym</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Personal Training</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Aerobics classes</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Functional Training</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Zumba Aerobics</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-3'>Vehicle services</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Assembly and Testing</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Maintenance and Repair</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> washing</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Engine replacement and repair</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Acting driver</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-4'>Turf and Sports</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Badmiton court</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Football court</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Box cricket</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> volley ball</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> khabadi</a></li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3 column'>
                    <h5 className='mega-header-5'>doctor</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-6'>doctor</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-7'>doctor</h5>
                    <ul class="" aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                  <div className='col-md-3  column'>
                    <h5 className='mega-header-8'>doctor</h5>
                    <ul aria-labelledby="accountDropdown">
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Log in</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Lost Password?</a></li>
                      <li><a class="dropdown-item" href="#!"><FaAngleRight className='angle-right' /> Sign up</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <ScrollOnClick className='nav-link' to="/">Pet care<span className='sr-only'></span></ScrollOnClick>
          </li>
          <li className="nav-item">
            <ScrollOnClick className='nav-link' to="/">Car parking<span className='sr-only'></span></ScrollOnClick>
          </li>
          <li className="nav-item">
            <ScrollOnClick className='nav-link' to="/">Acting Drivers<span className='sr-only'></span></ScrollOnClick>
          </li>
          <li className="nav-item">
            <ScrollOnClick className='nav-link' to="/">Option 10<span className='sr-only'></span></ScrollOnClick>
          </li>

        </ul>
      </div>
    </nav>
  </div>;
}
