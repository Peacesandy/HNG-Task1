import React from 'react'
import profilePic from "../image/IMG-20211218-WA0023.jpg"


const Profile = () => {
    return (
        <div className="profile">
            <img src={profilePic} alt="" />
            <h3>Benedict Ughulu</h3>
        </div>
    )
}

export default Profile