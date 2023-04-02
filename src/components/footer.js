import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="container">
      <h1 className="title">Our Team Members</h1>
      <div className="members">
        <div className="member">
          <img
            className="image"
            src="https://via.placeholder.com/300x300.png?text=Member+1"
            alt="Member 1"
          />
          <div className="details">
            <h2 className="name">John Doe</h2>
            <p className="id">Member ID: 001</p>
          </div>
        </div>
        <div className="member">
          <img
            className="image"
            src="https://via.placeholder.com/300x300.png?text=Member+2"
            alt="Member 2"
          />
          <div className="details">
            <h2 className="name">Jane Doe</h2>
            <p className="id">Member ID: 002</p>
          </div>
        </div>
        <div className="member">
          <img
            className="image"
            src="https://via.placeholder.com/300x300.png?text=Member+3"
            alt="Member 3"
          />
          <div className="details">
            <h2 className="name">James Smith</h2>
            <p className="id">Member ID: 003</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <form>
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2023 Our Team Members. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
