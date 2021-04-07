import '../styles/Details.css'
import React from 'react'
import sec1 from '../assets/images/details-img/details1.svg';
import sec2 from '../assets/images/details-img/details2.svg';

const Details = () => {
    return (
        <>
            <div className="container details-flex-row1">
                <div className="section1">
                    <h2>Making the most of the ever-growing
                              <br/> <span className="diff">Information Technology</span> </h2>
                    <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <button>Read More</button>
                </div>
                <div className="section2">
                    <img src={sec1} alt="" />
                </div>
            </div>
            <div className="container details-flex-row2 stripe">
                <div className="section3">
                    <img src={sec2} alt="" />
                </div>
                <div className="section4">
                    <h2>Welcome<span className="diff"> to Dwidasa Samsara<br/> Indonesia (DSI)</span></h2>
                    <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className="diff">DSI</span>’s distinct front-end based application concept.<br/><br/>

Managed by a team of professional experts with extensive experience and impressive track records,<span className="diff">DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                </div>
            </div>
        </>
    )
}

export default Details
