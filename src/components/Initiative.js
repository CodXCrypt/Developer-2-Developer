import React from 'react'
import pic from "../Images/D2d 1.png";
import Tleft from "../Images/Initiative_Top_left.png";
import Tright from "../Images/Initiative_Top_right.png";
import Bleft from "../Images/Initiative_Bottom_left.png";
import Bright from "../Images/Initiative_Bottom_right.png";
import "../styles/initiative.css";

const Initiative = () => {
  return (
    <div className="initiative">
        <img className="Tleft" src={Tleft} alt="" />
        <img className="Tright" src={Tright} alt="" />
        <h1 className="ini-heading">Our <span style={{color : "red"}}>Initiative</span></h1>
        <div className="ini-content">
            <p className="ini-text"><span style={{color : "#00ABB3", fontWeight : "bold"}}>D2D Community</span> is established with the main aim to provide students with Coding Project-Designs to freshers & assist them to ace their interviews. It also provides relevant insights about the different fields of emerging technologies in the industry. With a team of highly trained young professionals & college students, we try our level best to work together & make big impacts.
            </p>
            <img src={pic} alt="pic" className="ini-img" />
        </div>
        <img className="Bleft" src={Bleft} alt="" />
        <img className="Bright" src={Bright} alt="" />
    </div>
  )
}

export default Initiative