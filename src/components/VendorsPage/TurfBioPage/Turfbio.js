import React, { useEffect, useState } from "react";
import { FaRestroom } from "react-icons/fa";
import { MdOutlineLocalParking } from "react-icons/md";
import { GiWaterGallon } from "react-icons/gi";
import { PiLockersFill } from "react-icons/pi";
import { GiFirstAidKit } from "react-icons/gi";
import { GrLounge } from "react-icons/gr";
import { MdSportsCricket } from "react-icons/md";
import { TbPlayVolleyball } from "react-icons/tb";
import { TbPlayFootball } from "react-icons/tb";
import { GiTennisRacket } from "react-icons/gi";
import FooterSection from "../../FooterSection";
import ScrollButton from "../../ScrollTTop";
import Navbar from "../../Navbar";
/* import DependencyBook from "../../BookingPage/DependencyBook"; */
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdOutlineShare } from "react-icons/md";
import BookingSlot from "../../BookingPage/BookingSlot";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import NewBookingSlot from "../../BookingPage/NewBookingSlot";

export default function Turfbio() {

    const [isFilled, setIsFilled] = useState(false);

    useEffect(() =>{
        const savedState = localStorage.getItem('isFilled');
        if (savedState === 'true') {
            setIsFilled(true)
        }
     }, []);

     const toggleHeart = () => {
        setIsFilled((prev) => {
            const newState =!prev;
            localStorage.setItem('isFilled', newState);
            return newState;
        });
     };

    const AvailSport = () => {
        const [activeTab, setActiveTab] = useState(null)

        const handleTabHover = (targetId) => {
            setActiveTab(targetId);
        }
    }
    const sportsLists = [
        { id: 1, text: "Cricket", icon: <MdSportsCricket size={25} className="sport-icon" /> },
        { id: 2, text: "Volleyball", icon: <TbPlayVolleyball size={25} className="sport-icon" /> },
        { id: 3, text: "Football", icon: <TbPlayFootball size={25} className="sport-icon" /> },
        { id: 4, text: "Tennis", icon: <GiTennisRacket size={25} className="sport-icon" /> }
    ];
    const [activeId, setActiveId] = useState();
    const [showBlueBox, setShowBlueBox] = useState(true);
    return (
        <div className='turf-section'>
            <Navbar />
            <div className="turf-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pr-4">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="./images/box-cricket1.jpg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./images/box-cricket2.jpeg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./images/swimming1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item active">
                                        <img src="./images/volleycourt_1.jpeg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item active">
                                        <img src="./images/volleycourt_2.jpeg" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active thumbnail" aria-current="true" aria-label="Slide 0">
                                        <img src="./images/box-cricket1.jpg" class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="thumbnail" aria-label="Slide 1">
                                        <img src="./images/box-cricket2.jpeg" class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="thumbnail" aria-label="Slide 2">
                                        <img src="./images/swimming1.png" class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="thumbnail" aria-label="Slide 3">
                                        <img src="./images/volleycourt_1.jpeg" class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="thumbnail" aria-label="Slide 4">
                                        <img src="./images/volleycourt_2.jpeg" class="d-block w-100" alt="..." />
                                    </button>
                                </div>
                            </div>
                            <div className="get-dir mt-4">
                                <h5>Get Direction</h5>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.43547240392!2d80.1972787871582!3d12.996850300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676433e2b6e1%3A0x47b119667bc00896!2sTurf%20137!5e0!3m2!1sen!2sin!4v1711653293389!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bio-title border-bottom mb-4">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2>Seven Eleven's Turf</h2>
                                        <p>Velachery, Chennai - 600042</p>
                                    </div>
                                    <div className="col-md-4 text-right">
                                        <p><img src="https://playo-website.gumlet.io/playo-website-v2/logos-icons/ico+_+24+_+actions+_+star.svg" alt="..." />
                                            4.7 (24 ratings )
                                            <span className="bio-like" onClick={toggleHeart}>
                                                {isFilled ? <FaHeart size={25} color="#258db9" /> : <FaRegHeart size={25} color="#258db9" />}
                                            </span>
                                        </p>
                                        <p>

                                            <MdOutlineShare className="share" size={25} />
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="bio-sub-title mb-4">
                                <h3>Timing</h3>
                                <span className="bio-sub-tle-para-day">Monday - Sunday</span>
                                <p className="bio-sub-tle-para"><span>6:00 AM to 10 PM</span></p>
                            </div>
                            <div className="avail-sport mb-4">
                                <div className="bio-sub-title">
                                    <h3>Available Sports - <span>Choose your favorite sport</span></h3>
                                </div>
                                {/* <span class="btn btn-primary" data-bs-target="#exampleModalToggle"  data-bs-toggle="modal" >Cricket</span>
                                    <span className="tab">Volleyball</span>
                                    <span className="tab">Football</span>
                                    <span className="tab">Badminton</span> */}
                                <ul className="sports-list">
                                    {sportsLists.map((sports) => (
                                        <li onClick={() => setActiveId(sports.id)} className={activeId === sports.id ? "active" : "inactive"}>
                                            {sports.icon}{sports.text}
                                        </li>
                                    ))}

                                </ul>
                                {activeId ? <div className="show-additional">
                                    <div className="ad-cnt">
                                        <h5>Court 1</h5>
                                        <div>
                                            <label>Dimension</label>
                                            <p>600 X 300 Sq.feet</p>
                                        </div>
                                        <div>
                                            <label>Members</label>
                                            <p>Max 8 members</p>
                                        </div>

                                        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Select Slot</button>
                                    </div>

                                    <div className="ad-cnt">
                                        <h5>Court 2</h5>
                                        <div>
                                            <label>Dimension</label>
                                            <p>400 X 200 Sq.feet</p>
                                        </div>
                                        <div>
                                            <label>Members</label>
                                            <p>Max 12 members</p>
                                        </div>

                                        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Select Slot</button>
                                    </div>

                                </div> : null}
                                <div >
                                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                        <div class="modal-dialog modal-lg modal-dialog-centered" /* style={{height: "30% !important"}} */ >
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h3 class="modal-title fs-5" id="exampleModalToggleLabel">Select your slot</h3>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body justify-content-center">
                                                    {/*  <DependencyBook />*/}
                                                    <BookingSlot />
                                                 {/* <NewBookingSlot /> */}   
                                                </div>
                                                {/*  <div class="modal-footer">
                                                    <button class="btn btn-primary">Book Now</button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="bio-sub-title mb-4">
                                <div className="bio-sub-title">
                                    <h3>Amenities</h3>
                                </div>
                                <div className="amenity">
                                    <div className="amenity-card">
                                        <FaRestroom color="#36454F" />
                                        <p className="amenity-title">Rest room</p>
                                    </div>
                                    <div className="amenity-card">
                                        <MdOutlineLocalParking color="#36454F" />
                                        <p className="amenity-title">Parking</p>
                                    </div>
                                    <div className="amenity-card">
                                        <PiLockersFill color="#36454F" />
                                        <p className="amenity-title">Locker</p>
                                    </div>
                                    <div className="amenity-card">
                                        <GiWaterGallon color="#36454F" />
                                        <p className="amenity-title">Water</p>
                                    </div>
                                    <div className="amenity-card">
                                        <GiFirstAidKit color="#36454F" />
                                        <p className="amenity-title">First Aid Kit</p>
                                    </div>
                                    <div className="amenity-card">
                                        <GrLounge color="#36454F" />
                                        <p className="amenity-title">Lounge space</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="bio-sub-title">
                                    <h3>Location</h3>
                                    <p className="bio-sub-tle-para">B&C Mills, SPR City, Stephenson Rd, Velachery, Chennai, Tamil Nadu 600042</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="bio-sub-title">
                                    <h3>Turf contact details</h3>
                                    <p className="bio-sub-tle-para" style={{ fontSize: "15px", color: "rgb(54, 69, 79)", fontStyle: "oblique" }}> <BsFillTelephoneFill /> 789456123</p>
                                    <p className="bio-sub-tle-para" style={{ fontSize: "15px", color: "rgb(54, 69, 79)", fontStyle: "oblique" }}><IoMdMail /> Mailid123@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                {/* subcription plan */}
                            </div>
                            <div className="mb-4">
                                <div className="bio-sub-title">
                                    <h3>About Venue</h3>
                                </div>
                                <div className="about-venue">
                                    <p className="bio-sub-tle-para">Sports Clubs in Semmancheri, Volleyball Courts in Semmancheri, Box-cricket Clubs in Semmancheri, Skates Clubs in Semmancheri, Paddle-tennis Clubs in Semmancheri, Football Grounds in Semmancheri, Cricket-nets Clubs in Semmancheri, Badminton Courts in Semmancheri, Volleyball Courts in Chennai, Box-cricket Clubs in Chennai, Skates Clubs in Chennai, Paddle-tennis Clubs in Chennai, Football Grounds in Chennai, Cricket-nets Clubs in Chennai, Badminton Courts in Chennai, Sports Clubs in Chennai</p>
                                    <div className="mt-4">
                                        <h6>Rules</h6>
                                        <ul className="rules">
                                            <li>KheloMore provides slots given by the venue and bears no responsibility for usage of the facility that extends past the Government guidelines.
                                            </li>
                                            <li>KheloMore is not responsible for any direct or indirect, for any loss, damage or injury to property or person in connection to the provided services by the facility
                                            </li>
                                            <li>Wear appropriate sports attire and shoes while playing.
                                            </li>
                                            <li>Be present at the venue 10 mins prior to the booked slot.
                                            </li>
                                            <li>Management is not responsible for loss of personal belongings or any injuries caused during the match.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="mb-4">
                                <div className="bio-sub-title">
                                    <h3>Cancellation Policy</h3>
                                </div>
                                <div>
                                    <ul>
                                        <li>100% Refundable if cancellation is made 2 days before the slot start time.
                                        </li>
                                        <li>Non Refundable if cancellation is made less than 24 hours from the slot start time.
                                        </li>
                                        <li>50% Refundable if cancellation is made 24 hours before the slot start time.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bio-btn mb-5">
                                <button type="button" className="btn btn-primary">Booknow</button>
                            </div> */}
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