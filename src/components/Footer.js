import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
          <address className="footer-address">
            227 Gopalnagar <br />
            Hyderabad, Telangana<br />
            500001
          </address>
          <Link to="/" className="footer-contact text-white">
            +91-9929900011
          </Link>
          <Link to="/" className="footer-contact text-white">
            Example@gmail.com
          </Link>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Information</h4>
          <Link to="/refund-policy" className="footer-link text-white">
            Refund
          </Link>
          <Link to="/shipping-policy" className="footer-link text-white">
            Shipping
          </Link>
          <Link to="/termsandconditions" className="footer-link  text-white">
            Terms & Conditions
          </Link>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Connect With Us</h4>
          <Link to="/" className="footer-social text-white">
            Twitter
          </Link>
          <Link to="/" className="footer-social text-white">
            Instagram
          </Link>
          <Link to="/" className="footer-social text-white">
            Facebook
          </Link>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <Link to="/" className="footer-link text-white">
            Laptops
          </Link>
          <Link to="/" className="footer-link text-white">
            Headphones
          </Link>
          <Link to="/" className="footer-link text-white">
            Tablets
          </Link>
          <Link to="/" className="footer-link text-white">
            Watch
          </Link>
        </div>
      </div>
      <div className="footer-bottom ">
        <div className="social-icons">
          <a
            className="social-icon text-white"
            href="https://github.com/karn6600"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="social-icon text-white"
            href="https://www.linkedin.com/in/karan-kumar-487a8a260/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="social-icon text-white"
            href="https://twitter.com/karn_kumr_"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </div> 
        <div>
        <p className="footer-text ">&copy; {new Date().getFullYear()} Made By Karan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
