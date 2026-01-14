import React from 'react';
import './Methodology.css';

const Methodology = () => {
    return (
        <section className="methodology-section py-5 d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h2 className="display-3 text-white mb-4 section-title">OUR METHODOLOGY</h2>
                        <p className="text-white lead mb-4 fw-light" style={{ opacity: 0.9 }}>
                            We do not use "Breakthrough" as a throwaway line. Our work places your brand and your brand goals at the center of solutions consumers want, creating breakthrough impressions and results.
                        </p>
                        <button className="btn btn-custom bg-yellow">LEARN MORE</button>
                    </div>

                    {/* Right Content: Venn Diagram */}
                    <div className="col-lg-7 position-relative d-flex justify-content-center">
                        <div className="venn-container">
                            <div className="venn-circle circle-top">
                                <span>YOUR BRAND'S<br />PURPOSE</span>
                            </div>
                            <div className="venn-circle circle-left">
                                <span>THE CHANGE<br />YOUR BRAND NEEDS</span>
                            </div>
                            <div className="venn-circle circle-right">
                                <span>THE CHANGE<br />THE WORLD NEEDS</span>
                            </div>
                            <div className="venn-center">
                                <span>BREAKTHROUGH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
