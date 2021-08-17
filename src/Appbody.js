import React from 'react'
import './Appbody.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import EventIcon from '@material-ui/icons/Event';
import Profile from './Profile';
import { Avatar } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';

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
                <h1 className="title">Hotel stay</h1>
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

                <div className="appbody__footer">
                <div className="appbody__footerleft">
                <div className="footertitle">
                <h4>PROPERTY INSIGHTS</h4>
                
                    <img src="https://resources.useready.com/wp-content/uploads/2020/08/Display-Top-Total-Donut-Chart-Tableau-1.png"
                    alt="" />
                </div>
                    
                    <div className="propertyfooter">
                    <div className="icon">
                    <input placeholder="Total"/>
                    <ExpandMoreIcon />
                    </div>
                    <div className="appbody__footerleft1">
                    <RadioButtonUncheckedIcon className="btn1"/>
                    <h3>
                    Property 1
                    <small>120Bookings</small>
                    </h3>
                    </div>

                    <div className="appbody__footerleft1">
                    <RadioButtonUncheckedIcon className="btn2"/>
                    <h3>
                    Property 2
                    <small>98Bookings</small>
                    </h3>
                    </div>

                    <div className="appbody__footerleft1">
                    <RadioButtonUncheckedIcon className="btn3"/>
                    <h3>
                    Property 3
                    <small>90Bookings</small>
                    </h3>
                    </div>

                    <div className="appbody__footerleft1">
                    <RadioButtonUncheckedIcon className="btn4"/>
                    <h3>
                    Property 4
                    <small>88Bookings</small>
                    </h3>
                    </div>

                    </div>

                    </div>

                    <div className="appbody__footerright">
                        <div className="dashboardfinal">
                        <h3>PAYMENTS</h3>
                        <p>See All(10)</p>
                        </div>
                    <div className="overall">
                    <div className="dates">
                        <p>
                        08.02.2021
                        </p>
                        <small>10:30AM</small>
                    </div>

                    <div className="payment">
                    <h4>Payment Received</h4>
                    <p>New BookingId 'Propert1'</p>
                    </div>

                    <div className="amount">
                    <p>1000.00</p>
                    <CallReceivedIcon />
                    </div>

                    </div>

                    <div className="overall">
                    <div className="dates">
                        <p>
                        08.02.2021
                        </p>
                        <small>10:30AM</small>
                    </div>

                    <div className="payment">
                    <h4>Payment Received</h4>
                    <p>New BookingId 'Propert1'</p>
                    </div>

                    <div className="amount">
                    <p>1000.00</p>
                    <CallReceivedIcon />
                    </div>

                    </div>

                    <div className="overall">
                    <div className="dates">
                        <p>
                        08.02.2021
                        </p>
                        <small>10:30AM</small>
                    </div>

                    <div className="payment">
                    <h4>Amount Refund</h4>
                    <p>New BookingId 'Propert1'</p>
                    </div>

                    <div className="amount">
                    <p>1000.00</p>
                    <CallMadeIcon color="red" className="redarrow"/>
                    </div>

                    </div>


                    </div>
                </div>
           </div>



           </div>
    )
}

export default Appbody
