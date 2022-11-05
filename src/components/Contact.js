import React from 'react'
import "../styles/contact.css";
import pic from "../Images/Contact.png";
import mail from "../Images/gmail.png";

const Contact = () => {
  return (
    <div className="contact-us">
        <div className="contact-mail">
            <img src={pic} alt="pic" className="contact-img" />
            <p className="contact-text">Contact us through our mail <span><img src={mail} alt="" className="mail-img" /></span></p> 
        </div>
        <div className="contact-news">
            <h1 className="contact-news-heading">Join Our Newsletter</h1>
            <p className="contact-news-text">for latest updates at your fingerprints</p>
            <div className="contact-news-input">
              <input type="mail" className="mail-input" placeholder="Enter your mail" />
              <button type="btn" className="mail-btn">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Contact