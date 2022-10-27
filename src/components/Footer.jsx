import React from 'react'
import vector from "../image/Vector.png";
import I4G from "../image/I4G.png";

const Footer = () => {
    return (
        <div className='container footer'>
            <img src={vector} alt="" />
            <h5>HNG Intership 9 frontend task</h5>
            <img src={I4G} alt="" />
        </div>
    )
}

export default Footer
