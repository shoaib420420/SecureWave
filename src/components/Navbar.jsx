import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid d-flex justify-content-between align-items-center px-4 py-3">
                {/* Left: Menu & Logo */}
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-link text-white p-0" aria-label="Menu">
                        <BiMenu size={30} />
                    </button>
                    <a className="navbar-brand text-white fw-bold mb-0 h1" href="#">
                        CyberWebsite
                    </a>
                </div>

                {/* Right: Social Icons */}
                <div className="d-flex gap-3 social-icons">
                    <a href="#" className="text-white">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-white">
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
