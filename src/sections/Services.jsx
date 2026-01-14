import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services-section py-5 d-flex align-items-center">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 d-flex align-items-center">
                        <h5 className="section-subtitle me-3">OUR SERVICES</h5>
                        <div className="subtitle-line"></div>
                    </div>
                </div>

                <div className="row text-center text-md-start">
                    <div className="col-md-4 mb-4 mb-md-0 border-end-md">
                        <h3 className="service-title">BRANDED CONTENT</h3>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 border-end-md">
                        <h3 className="service-title">CONSUMER ENGAGEMENT<br />STRATEGY + IDEATION</h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="service-title">BRAND EXPERIENCE<br />DESIGN + PRODUCTION</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
