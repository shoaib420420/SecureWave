import React from 'react';
import { FaBars, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section d-flex align-items-center justify-content-center text-center">
            {/* Header Overlay */}
            <div className="hero-header w-100 position-absolute top-0 start-0 p-4 d-flex justify-content-between align-items-center z-2">
                <div className="d-flex align-items-center gap-4">
                    <FaBars className="text-white pointer" size={24} />
                    <span className="h4 mb-0 text-white fw-bold font-oswald tracking-wide">CyberWebsite</span>
                </div>
                <div className="d-flex gap-3">
                    <FaInstagram className="text-white pointer" size={24} />
                    <FaLinkedinIn className="text-white pointer" size={24} />
                </div>
            </div>

            <div className="container position-relative z-1 mt-5">
                <h1 className="hero-title text-white mb-5">
                    THE EXPERIENTIAL AGENCY<br />
                    FOR BRAND BREAKTHROUGHS.
                </h1>
                <button className="btn btn-custom bg-yellow px-5 py-3 fw-bold fs-6">
                    LET'S CONNECT
                </button>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
};

export default Hero;
