import { Avatar } from '@material-ui/core'
import React from 'react'
import './Profile.css'
function Profile({title,date,image,user,location}) {
    return (
        <div className="profile">

        <div className="profile__body">
        <p className="titles">{title}</p>
        <p className="titles1">{date}</p>
        <img src={image} alt="villa"/>
        </div>

        <div className="profile__body1">
        <Avatar />
        <h4>
        {user}
        <p>{location}</p>
        </h4>
        </div>
        <button>Details</button>
        </div>
    )
}

export default Profile
