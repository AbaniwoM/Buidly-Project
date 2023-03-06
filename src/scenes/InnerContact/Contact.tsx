import React from 'react';
import "./Contact.scss";
import ContactCard from './ContactCard';

const Contact = () => {
  const win: Window = window;
  return (
    <div className="conCont">
        <div className="left">
        {/* <div className="contact-form">
            <h2>Contact Form</h2>
            <div className="name">
                <div className="first-name">
                    <input placeholder="First Name" type="name" />
                </div>
                <div className="last-name">
                    <input placeholder="Last Name" type="name" />
                </div>
            </div>
            <div className="email">
                <input placeholder="Email" type="email" />
            </div>
            <div className="subject">
                <input placeholder="Subject" type="text" />
            </div>
            <div className="message">
                <input placeholder="Write your notes or questions here..." type="msg" />
            </div>
            <button>SEND MESSAGE</button>
        </div> */}
        <div className="contact-card">
        <ContactCard />
        </div>
        </div>
        <div className="right">
        <div className="contact-detail">
            <div className="address">
                <h3>Address</h3>
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="phone">
                <h3>Phone</h3>
                <p onClick={() => (win.location = "tel:+1 XXX 6788 XXX")}>+1 232 3235 324</p>
            </div>
            <div className="mail">
                <h3>Email Address</h3>
                <p onClick={() => (win.location = "youremail@domain.com")}>youremail@domain.com</p>
            </div>
        </div>
        <div className="contact-info">
            <h3>More Info</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
            <button>LEARN MORE</button>
        </div>
        </div>
    </div>
  )
}

export default Contact;