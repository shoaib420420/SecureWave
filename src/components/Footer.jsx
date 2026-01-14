import React from 'react';
import './Footer.css';
// Using react-icons as seen in package.json
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center text-md-start" >
                        <span>&copy; {currentYear} CyberWebsite. All Rights Reserved.</span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center my-3 my-md-0">
                        <div className="footer-social-icons">
                            <a href="#instagram" aria-label="Instagram" className="text-black"><FaInstagram /></a>
                            <a href="#linkedin" aria-label="LinkedIn" className="text-black"><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-links">
                            <a href="#cookies">Cookies Policy</a>
                            <a href="#terms">Terms & Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
