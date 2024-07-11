import React from "react";
import { Link } from "react-router-dom";

export default function NavPills({ activeTab, setActiveTab }) {

    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="#"
                        className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`}
                        onClick={() => setActiveTab('wishlist')}
                    >
                        Wishlist
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="#"
                        className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="#"
                        className={`nav-link ${activeTab === 'mybookings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('mybookings')}
                    >
                        My Bookings
                    </Link>
                </li>
            </ul>
        </div>
    )
}