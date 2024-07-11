//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './components/HomePage/Service';
import About from "./components/AboutPage/About";
import FooterSection from "./components/FooterSection";
import Doctors from "./components/VendorsPage/Doctors";
import DynamicNavbar from "./components/DynamicNavbar";
import Turf from "./components/VendorsPage/Turf";
import Turfbio from "./components/VendorsPage/TurfBioPage/Turfbio";
import BookingSlotCalendar from "./components/BookingPage/BookingSlotcalender";
import DependencyBook from "./components/BookingPage/DependencyBook";

import TicketSupport from "./components/Supportticket/TicketSupport";
import Mybooking from "./components/MyBookings/Mybooking";
import Form from "./components/AnimationForm/Form";
import BookingSlot from "./components/BookingPage/BookingSlot";
import ProfileContent from "./components/MyBookings/ProfileContent";
import Carousel from "./components/HomePage/Carousel";
import CarouselSection from "./components/HomePage/Carousel";
import ExtraForm from "./components/AnimationForm/ExtraForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/FooterSection" element={<FooterSection />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/DynamicNavbar" element={<DynamicNavbar />} />
        <Route path="/Turf" element={<Turf />} />
        <Route path="/TurfBio" element={<Turfbio />} />
        <Route path="/BookingSlotCalender" element={<BookingSlotCalendar />} />
        <Route path="/DependencyBook" element={<DependencyBook />} />
        <Route path="/TicketSupport" element={<TicketSupport />} />
        <Route path="/Mybooking" element={<Mybooking />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/BookingSlot" element={<BookingSlot />} />
        <Route path="/ProfileContent" element={<ProfileContent />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/CarouselSection" element={<CarouselSection />} />
        <Route path="/ExtraForm" element={<ExtraForm/>} />


      </Routes>
    </Router>

  )
}

export default App;
