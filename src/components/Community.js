import React from "react";
import ellipse from "../Images/Ellipse 4.png";
import "../styles/community.css";

function Community() {
    return(
        <div className="community">
            <div className="content1">
                <h1 className="comm-head">Join our <span className="sub-head">Community</span> to </h1>
                <h1 className="comm-head-sub">connect with great minds</h1>
                <div className="category">
                    <img className="ellipse" src={ellipse} alt="ellipse" />
                        <div className="hackathon">
                            <h3 className="hack">Hackathons</h3>
                            <p className="learn1">Learn, <span className="part">participate</span> </p>
                            <p className="win">& win</p>
                            <p className="know1">Know More</p>
                        </div>
                    <img className="ellipse" src={ellipse} alt="ellipse" />
                        <div className="bootcamp">
                            <h3 className="boot">Bootcamps</h3>
                            <p className="learn2">Learn and <span className="build">Build</span> </p>
                            <p className="together">together</p>
                            <p className="know2">Know More</p>
                        </div>
                    <img className="ellipse" src={ellipse} alt="ellipse" />
                        <div className="internship">
                            <h3 className="intern">Internships</h3>
                            <p className="learn3">Learn > Build ></p>
                            <p className="work">work with us</p>
                            <p className="know3">Know More</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Community;