import React from 'react'
import profilePic from "../image/IMG-20211218-WA0023.jpg"
import arrow from "../image/arrow.png";
import mobile from "../image/mobile.png";

const Profile = () => {
    return (
        <div className="profile">
            <img src={profilePic} alt="" id="profile__img" />
            <h3 id='twitter'>Benedict Ughulu</h3>
            {/* slack user name */}
            <h3 style={{ display: "none" }} id="slack">Benedict </h3>
            <div className="icon desktop"><img src={arrow} alt="" /></div>
            <div className="icon mobile"><img src={mobile} alt="" /></div>

        </div>
    )
}

export default Profile
