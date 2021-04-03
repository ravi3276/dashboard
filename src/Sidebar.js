import React from 'react'
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__profile">
        <Avatar className="logo" src="" alt=""/>
            <h3>Property Owner</h3>
            <p>EDIT PROFILE</p>
            <button type="button">LOGOUT</button>
            </div>

        <div className="sidebar__body">
            <div className="sidebar__bodylogo">
            <DashboardIcon />
                <small>DASHBOARD</small>
            </div>

            <div className="sidebar__bodylogo">
            <EventNoteIcon />
            <small>RESERVATION</small>

            </div>

            <div className="sidebar__bodylogo">
            <PaymentIcon />
            <small>PAYMENTS</small>

            </div>

            <div className="sidebar__bodylogo">
            <HomeIcon />
            <small>MY PROPERTIES</small>

            </div>
            <div className="sidebar__bodylogo">
            <LocalOfferIcon />
            <small>OFFERS AND PROMOTIONS</small>

            </div>
            <div className="sidebar__bodylogo">
            <NotificationsIcon />
            <small>NOTIFICATION</small>

            </div>
            <div className="sidebar__bodylogo">
            <PersonIcon />
            <small>MY PROFILE</small>

            </div>
            <div className="sidebar__bodylogo">
            <CallIcon />
            <small>CONTACT US</small>

            </div>

            </div>
          
        </div>
    )
    // <div className="sidebar__bodycolor">
    // </div>
}

export default Sidebar
