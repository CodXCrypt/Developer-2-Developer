import React from "react";
import "../styles/events.css";
import eventL from "../Images/Events_left.png";
import event1 from "../Images/D2D img 1.png";
import event2 from "../Images/D2D img 2.png";
import event3 from "../Images/D2D img 3.png";
import calendar from "../Images/calendar.png";
import clock from "../Images/clock.png";



function Event() {
    return(
        <div className="event">
            <div className="e-head">
                <h1 className="event-head">Our Upcoming <span className="event-sub">Events</span></h1>
            </div>
            <div className="list">
                <div className="pic">
                    <img className="event-left" src={eventL} alt="event-left" />
                </div>
                
                <div className="event1">
                    <img className="event-1" src={event1} alt="event1" />
                        <div className="e-content">
                            <h4 className="e1-head">D2D Meetup Delhi</h4>
                            <p className="date1">Sunday Oct 22, 2022</p>
                            <p className="time1">15:00 - 17:00</p>
                        </div>
                        <div className="btn">
                            <button className="register1">Register Now</button>
                        </div>
                </div>

                <div className="event2">
                    <img className="event-1" src={event2} alt="event1" />
                        <div className="e-content">
                            <h4 className="e1-head">D2D Meetup Goa</h4>
                            <p className="date1">Wednesday Oct 26, 2022</p>
                            <p className="time1">15:00 - 17:00</p>
                        </div>
                        <div className="btn">
                            <button className="register1">Register Now</button>
                        </div>
                </div>
                    
                <div className="event3">
                    <img className="event-1" src={event3} alt="event1" />
                        <div className="e-content">
                            <h4 className="e1-head">D2D Meetup CU</h4>
                            <p className="date1">Saturday Nov 1, 2022</p>
                            <p className="time1">15:00 - 17:00</p>
                        </div>
                        <div className="btn">
                            <button className="register1">Register Now</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Event;