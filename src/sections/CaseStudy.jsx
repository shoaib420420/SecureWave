import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import './CaseStudy.css';

const CaseStudy = () => {
    return (
        <section className="case-study-section position-relative d-flex align-items-center">
            <div className="container position-relative z-1 text-white">
                <p className="case-study-label small fw-bold mb-2">C A S E  &nbsp; S T U D Y</p>
                <h2 className="case-study-title display-3 fw-bold text-uppercase mb-3">
                    MERCEDES-BENZ X THE MASTERS
                </h2>
                <p className="lead mb-4 fw-light">
                    Delivering Once-in-a-Lifetime Experiences From the Road to the Green
                </p>
                <button className="btn btn-custom bg-yellow">
                    VIEW CASE STUDY
                </button>
            </div>

            {/* Navigation Arrows */}
            <div className="case-nav-container d-flex">
                <div className="case-nav-btn text-black bg-yellow d-flex align-items-center justify-content-center">
                    <FaAngleDoubleLeft size={20} />
                </div>
                <div className="case-nav-btn text-black bg-yellow d-flex align-items-center justify-content-center">
                    <FaAngleDoubleRight size={20} />
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
