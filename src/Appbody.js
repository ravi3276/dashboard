import React from 'react'
import './Appbody.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import EventIcon from '@material-ui/icons/Event';
import Profile from './Profile';
import { Avatar } from '@material-ui/core';

function Appbody() {
    return (
        <div className="appbody">

           <div className="appbody__header">
                <div className="appbody__headerfirst">
                    <CalendarTodayIcon />
                    <h4>February 2021</h4>
                </div>
                <div className="appbody__headersecond">
                <p>Total</p>
                <p>This Month</p>
                <p>This Week</p>
                </div>
                <h1 className="title">Korea stay</h1>
           </div>
             
           <div className="appbody__body">
                <div className="appbody__bodyheader">
                    <div className="appbody__bodyheaderleft">
                    <div className="appbody__bodyheaderleft1">
                    <p>TOTAL EARNINGS</p>
                        <h2>
                        <EuroSymbolIcon />
                        50,000</h2>
                    </div>

                    <div className="appbody__bodyheaderleft2">
                    
                    <p>TOTAL RESERVATIONS</p>
                    <h2>
                    <EventIcon />
                    4212</h2>
                    </div>
                    </div>

                    <div className="appbody__bodyheaderright">
                    <NotificationsIcon />
                    <MenuIcon />
                    </div>

                </div>


                <div className="appbody__bodymain">
                <div className="appbody__bodytitle">
                <h4>UPCOMING BOOKINGS</h4>

                <p>See All (10)</p>
                </div>

                <div className="appbody__bodyprofile">
                <Profile 
                title="Property 1"
                date="08.02.21-11.02.21"
                image="https://i.pinimg.com/originals/67/53/d0/6753d02e48284c5aef4e3a31080d256f.jpg"
                user="User 1"
                location="Dubai"
                />


                <Profile 
                title="Property 2"
                date="12.02.21-13.02.21"
                image="https://www.planetware.com/wpimages/2019/11/indonesia-bali-best-beach-resorts-four-seasons-resort-bali-jimbaran-bay.jpg"
                user="User 2"
                location="India"
                />

                <Profile 
                title="Property 1"
                date="12.02.21-14.02.21"
                image="http://cdn.home-designing.com/wp-content/uploads/2014/06/1-bambu-indah-bali-resort.jpg"
                user="User 3"
                location="Sri Lanka"
                />

                <div className="appbody__bodyprofileright">
                <h4 className="messages">MESSAGES</h4>
                <div className="profile__bodyright">
                <Avatar />
                <h4>
                Doris Fisher
                <p className="jobrole">freelancer</p>
                </h4>
                </div>

                <div className="profile__bodyright">
                <Avatar />
                <h4>
                Elizabeth Ellis
                <p className="jobrole">Abu Dhabi</p>
                </h4>
                </div>

                <div className="profile__bodyright">
                <Avatar />
                <h4>
                Carolyn Powell
                <p className="jobrole">Dubai</p>
                </h4>
                </div>

                <div className="profile__bodyright">
                <Avatar />
                <h4>
                Louis Hayes
                <p className="jobrole">Abu Dhabi</p>
                </h4>
                </div>

                <h5>See All (10)</h5>
                </div>
                </div>
                </div>

           </div>


           </div>
    )
}

export default Appbody
