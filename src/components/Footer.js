import React from "react";
import "../styles/footer.css";
import pic1 from "../Images/facebook 1.png";
import pic2 from "../Images/facebook 2.png";
import pic3 from "../Images/facebook 3.png";
import pic4 from "../Images/facebook 4.png";

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-sec-1">
          <div className="footer-sec-1-prt-1">
            <div className="footer-title">D2D</div>
            <div className="footer-about">
              <div className="footer-about-ln">For any queries, feel free to reach out using given details.</div>
              <div className="footer-about-ln">Email: d2d@gmail.com</div>
              <div className="footer-about-ln">Phone Number: 8077XXXXXX</div>
            </div>
          </div>
            
          <div className="footer-sec-1-prt-2">
            <div className="footer-hd">
              Follow Us
            </div>
            <div className="footer-img">
              <img src={pic1} className="footer-imgg" alt="" />
              <img src={pic2} className="footer-imgg" alt="" />
              <img src={pic3} className="footer-imgg" alt="" />
              <img src={pic4} className="footer-imgg" alt="" />
            </div>
          </div>
        </div>

        <div className="footer-sec-2">
          2022 copyright@ D2D
        </div>
      </div>

    );
};

export default Footer;