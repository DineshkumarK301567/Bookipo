import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar";
import FooterSection from "../FooterSection";
import { FaEdit } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPenSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { LiaCitySolid } from "react-icons/lia";
import { CiMap } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { TbMapPinCode } from "react-icons/tb";





export default function MyBooking() {

    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);


    /* profile form start */
    const [isEditable, setIsEditable] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        contact: '',
        state: '',
        city: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const [passwordVisible, setPasswordVisible] = useState({
        oldPassword: false,
        newPassword: false,
        confirmNewPassword: false
    });

    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisible(prevState => ({ ...prevState, [field]: !prevState[field] }));
    };

    const handleUpdateClick = () => {
        setIsEditable(true);
    };

    const handleCancelClick = () => {
        setIsEditable(false);
        setFormValues({
            name: '',
            contact: '',
            state: '',
            city: '',
            pin: '',
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        });
        setErrorMessage('');
    };

    const handleSaveClick = (e) => {
        e.preventDefault();
        if (formValues.newPassword !== formValues.confirmNewPassword) {
            setErrorMessage("Passwords don't match");
        } else {
            setErrorMessage('');
            // Handle form submission logic here
            console.log('Form submitted:', formValues);
            setIsEditable(false);
        }
    }


    /* end */

    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Seven Eleven's Turf",
            imgSrc: "./images/Turf-1.jpg",
            rating: 4.5,
            sports: "Cricket, Volley ball, Football, Tennis etc",
            location: "Velachery Main Road, Landmark: Opposite Ceebros Orchid & Near J7 Police Station, Chennai",
            timing: "Mon - sun 06AM - 10PM"
        }
    ]);

    // Function to handle removing an item from the wishlist
    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState({
        username: '',
        mobilenumber: '',
        pincode: '',
        addresstext: '',
        isDefault: false
    });

    const handleModalOpen = (title, content) => {
        setModalTitle(title);
        setModalContent(content)
    };


    const [showBookings, setShowBookings] = useState(false);
    const [showUpcomingBooking, setShowUpcomingBooking] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const toggleBookings = () => {
        setShowBookings(!showBookings);
        setShowUpcomingBooking(false); // Hide upcoming bookings when clicking "My Bookings"
    };

    const toggleUpcomingBooking = () => {
        setShowUpcomingBooking(!showUpcomingBooking);
        setShowBookings(false); // Hide "My Bookings" when clicking "Upcoming Booking"  
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        setShowAlert(true);
    }


    return (
        <div className="mybook">
            <div className="wrapper mb-5">
                <Navbar />

                <div className="mybookings">
                    {/* Side */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pb-2 pl-0">
                                <h5>Profile Information</h5>
                            </div>
                        </div>
                        <div className="row border info-list">
                            <div className="col-md-3 pl-0">
                                <ul className="nav nav-pills nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profile</button>
                                    </li>
                                    <li className="nav-item" role="presentation" >
                                        <a className="nav-link position-relative sub-nav" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">My Bookings
                                            <span><FaAngleDown size={18} /></span>
                                        </a>
                                        <div className="collapse sub-nav-item" id="collapseExample">
                                            <ul>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link position-relative"
                                                        id="pills-upcoming-tab"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-upcoming"
                                                        type="button" role="tab"
                                                        aria-controls="pills-upcoming"
                                                        onClick={toggleUpcomingBooking}>
                                                        <span><FaCaretDown size={16} /></span> Upcoming Booking
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link position-relative"
                                                        id="pills-previous-tab"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-previous"
                                                        type="button" role="tab"
                                                        aria-controls="pills-previous">
                                                        <span><FaCaretDown size={16} /></span> Completed Booking
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link position-relative"
                                                        id="pills-cancelled-tab"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-cancelled"
                                                        type="button" role="tab"
                                                        aria-controls="pills-cancelled">
                                                        <span><FaCaretDown size={16} /></span> Cancelled Booking
                                                    </button>
                                                </li>
                                            </ul>

                                        </div>
                                    </li>
                                    <li className="nav-item" id="wishlist" role="presentation">
                                        <button className="nav-link position-relative" id="pills-wishlist-tab" data-bs-toggle="pill" data-bs-target="#pills-wishlist" type="button" role="tab" aria-controls="pills-wishlist" aria-selected="true">Wish List</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link position-relative" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="true">Reviews</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link position-relative" id="pills-address-tab" data-bs-toggle="pill" data-bs-target="#pills-address" type="button" role="tab" aria-controls="pills-address" aria-selected="true">Address</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link position-relative" id="pills-wallet-tab" data-bs-toggle="pill" data-bs-target="#pills-wallet" type="button" role="tab" aria-controls="pills-wallet" aria-selected="true">Wallet</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link position-relative" id="pills-logout-tab" data-bs-toggle="pill" data-bs-target="#pills-logout" type="button" role="tab" aria-controls="pills-logout" aria-selected="true" style={{ color: "red" }}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-9 pt-3 auto-ht">
                                {/* Main */}
                                <div className="tab-content " id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="tab-header">
                                            <h5>Profile details</h5>
                                        </div>
                                        <div className="tab-item-content">
                                            <form onSubmit={handleSaveClick}>
                                                <div className="ticket tic-up">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input className="input-text js-input" type="text" id="name" placeholder="Full Name" required disabled={!isEditable} value={formValues.name} onChange={handleInputChange} />
                                                                    <div className="input-icon">
                                                                        <CiUser className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input
                                                                        id="contact"
                                                                        className="input-text js-input"
                                                                        placeholder="Email or Mobile number"
                                                                        type="text"
                                                                        required
                                                                        disabled={!isEditable}
                                                                        value={formValues.contact}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                    <div className="input-icon">
                                                                        <MdOutlineContacts className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input id="state" className="input-text js-input" placeholder="State" type="text" required disabled={!isEditable} value={formValues.state} onChange={handleInputChange} />
                                                                    <div className="input-icon">
                                                                        <CiMap className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input id="city" className="input-text js-input" placeholder="City" type="text" required disabled={!isEditable} value={formValues.city} onChange={handleInputChange} />
                                                                    <div className="input-icon">
                                                                        <LiaCitySolid className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input id="pin" className="input-text js-input" placeholder="Pincode" type="text" required disabled={!isEditable} value={formValues.pin} onChange={handleInputChange} />
                                                                    <div className="input-icon">
                                                                        <TbMapPinCode className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input id="oldPassword" className="input-text js-input eye-icon-input" placeholder="Old Password" type={passwordVisible.oldPassword ? 'text' : 'password'} required disabled={!isEditable} value={formValues.oldPassword} onChange={handleInputChange} />
                                                                    <FontAwesomeIcon className="profile-eye-icon" icon={passwordVisible.oldPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('oldPassword')} />
                                                                    <div className="input-icon">
                                                                        <MdOutlinePassword className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input id="newPassword" className="input-text js-input eye-icon-input" placeholder="New Password" type={passwordVisible.newPassword ? 'text' : 'password'} required disabled={!isEditable} value={formValues.newPassword} onChange={handleInputChange} />
                                                                    <FontAwesomeIcon className="profile-eye-icon" icon={passwordVisible.newPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('newPassword')} />
                                                                    <div className="input-icon">
                                                                        <MdOutlinePassword className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="input-group input-group-icon">
                                                                    <input id="confirmNewPassword" className="input-text js-input eye-icon-input" placeholder="Confirm newpassword" type={passwordVisible.confirmNewPassword ? 'text' : 'password'} required disabled={!isEditable} value={formValues.confirmNewPassword} onChange={handleInputChange} />
                                                                    <FontAwesomeIcon className="profile-eye-icon" icon={passwordVisible.confirmNewPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('confirmNewPassword')} />
                                                                    <div className="input-icon">
                                                                        <MdOutlinePassword className="i" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                                                        <div className="dynamic-button">
                                                            {!isEditable && <button className="submit-btn" type="button" value="update profile" onClick={handleUpdateClick}>update profile</button>}
                                                            {isEditable && (
                                                                <>
                                                                    <button className="submit-btn save" type="submit" value="save update">save update</button>
                                                                    <button className="submit-btn cancel" type="button" value="cancel" onClick={handleCancelClick}>cancel</button>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>

                                    </div>
                                    {/*  <ProfileContent /> */}
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
                                    {/*  <UpcomingBooking /> */}
                                    {/* wishlist */}
                                    <div className="tab-pane fade" id="pills-wishlist" role="tabpanel" aria-labelledby="pills-wishlist-tab">
                                        <div className="tab-header">
                                            <h5>Wish List</h5>
                                            {/*       <div className="badges">
                                                <span><FaHeart size={25} style={{ color: "#258db9" }} /></span>

                                            </div> */}
                                        </div>

                                        <div className="tab-item-content">
                                            <div className="booking-list">
                                                {wishlistItems.map(item => (
                                                    <div className="card dr-card" key={item.id}>
                                                        <div className="card-body">
                                                            <button type="button" className="remove-icon" onClick={() => removeFromWishlist(item.id)}>
                                                                <FaTrash />
                                                            </button>
                                                            <div className="image-box">
                                                                <img src={item.imgSrc} alt={item.name} />
                                                            </div>

                                                            <div>
                                                                <Link to="/TurfBio" className="link-cards">
                                                                    <div className="dr-info">
                                                                        <div className="dr-name">
                                                                            <h5>{item.name}</h5>
                                                                        </div>
                                                                        <div className="price text-right">
                                                                            <p><span><FaStar /></span> {item.rating} Ratings</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>

                                                                <div className="dr-flex">
                                                                    <span><MdSportsCricket /></span> <small>{item.sports}</small>
                                                                </div>
                                                                <div className="dr-flex">
                                                                    <span><FaLocationDot /></span> <small>{item.location}</small>
                                                                </div>
                                                                <div className="dr-flex">
                                                                    <span><IoTimeSharp /></span> <small>{item.timing}</small>
                                                                </div>

                                                                <button type="button" className="btn btn-primary dr-btn">Book now</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                                        <div className="tab-header">
                                            <h5>Reviews</h5>
                                        </div>
                                        <div className="tab-item-content">
                                            <p>Your added reviews comes here</p>
                                        </div>

                                    </div>

                                    <div className="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
                                        <div className="tab-header">
                                            <h5>Address</h5>
                                        </div>
                                        <div className="tab-item-content">
                                            <div className="booking-list">
                                                <div className="card card-1">

                                                    <div className="card-body py-4">
                                                        <div className="row py-2">
                                                            <div className="col-6">
                                                                <div className="address-name mb-2">
                                                                    Bookipo User,
                                                                </div>
                                                                <div className="address-actual mb-2">
                                                                    10/24 Easvari PG Hostel 5th Main Road,<br /> Vijaya Nagar, Velachery,<br /> Chennai 42, Chennai - 600042,<br /> Tamil Nadu
                                                                </div>
                                                                <div className="add-ph-num mb-2">
                                                                    994355789
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="add-new-add">
                                                                    <FaPenSquare size={20} color="#258db9" />
                                                                    <span className="addnewadd" data-bs-toggle="modal" data-bs-target="#addressModal"
                                                                        onClick={() => handleModalOpen('Add New Address', {
                                                                            username: '',
                                                                            mobilenumber: '',
                                                                            pincode: '',
                                                                            addresstext: '',
                                                                            isDefault: false
                                                                        })}>
                                                                        Add new Address
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="adress row mt-2">
                                                                <div className="col-6">
                                                                    <div className="address-icon">
                                                                        <FaEdit size={20} />
                                                                        <span className="" data-bs-toggle="modal" data-bs-target="#addressModal"
                                                                            onClick={() => handleModalOpen('Edit Address', {
                                                                                username: 'Bookipo User',
                                                                                mobilenumber: '994355789',
                                                                                pincode: '600042',
                                                                                addresstext: '10/24 Easvari PG Hostel 5th Main Road, Vijaya Nagar, Velachery, Chennai 42, Chennai - 600042, Tamil Nadu',
                                                                                isDefault: true
                                                                            })}>
                                                                            Edit
                                                                        </span>
                                                                    </div>
                                                                    <div className="address-icon">
                                                                        <MdDelete size={20} /> <span> Delete</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Modal */}
                                        <div className="modal fade" id="addressModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addressModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="addressModalLabel">{modalTitle}</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="add-edit-form">
                                                            <form className="form-edit">
                                                                <div className="form-input-material mb-3">
                                                                    <label htmlFor="username">Username</label>
                                                                    <input type="text" name="username" id="username" className="form-control-material" value={modalContent.username} onChange={(e) => setModalContent({ ...modalContent, username: e.target.value })} />
                                                                </div>
                                                                <div className="form-input-material mb-3">
                                                                    <label htmlFor="mobilenumber">Mobile Number</label>
                                                                    <input type="text" name="mobilenumber" id="mobilenumber" className="form-control-material" value={modalContent.mobilenumber} onChange={(e) => setModalContent({ ...modalContent, mobilenumber: e.target.value })} />
                                                                </div>
                                                                <div className="form-input-material mb-3">
                                                                    <label htmlFor="pincode">Pincode</label>
                                                                    <input type="text" name="pincode" id="pincode" className="form-control-material" value={modalContent.pincode} onChange={(e) => setModalContent({ ...modalContent, pincode: e.target.value })} />
                                                                </div>
                                                                <div className="form-input-material mb-3">
                                                                    <label htmlFor="addresstext">Update Address</label>
                                                                    <textarea name="addresstext" id="addresstext" className="form-control-material" value={modalContent.addresstext} onChange={(e) => setModalContent({ ...modalContent, addresstext: e.target.value })}></textarea>
                                                                </div>
                                                                <div className="form-input-material mb-3">
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={modalContent.isDefault} onChange={(e) => setModalContent({ ...modalContent, isDefault: e.target.checked })} />
                                                                        <label htmlFor="flexCheckChecked">Use this as my default address</label>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button className="btn btn-primary mt-3 mb-3">{modalTitle.includes('Edit') ? 'Update Address' : 'Add Address'}</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-wallet" role="tabpanel" aria-labelledby="pills-wallet-tab">
                                        <div className="tab-header">
                                            <h5>Wallet</h5>
                                        </div>
                                        <div className="tab-item-content">
                                            <p>Wallet details</p>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="pills-logout" role="tabpanel" aria-labelledby="pills-logout-tab">
                                        <div className="tab-header">
                                            <h5 className="logg">Logout</h5>
                                        </div>
                                        <div className="tab-item-content">
                                            <p>logout</p>
                                        </div>

                                    </div>
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
        </div>
    );
}