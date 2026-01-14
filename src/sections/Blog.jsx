import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog-integration">
            <div className="blog-yellow-bg">
                <div className="container">
                    <div className="blog-header">
                        <span className="blog-title">BLOG</span>
                        <div className="blog-separator"></div>
                        <a href="#view-all" className="blog-view-all">
                            View all
                            <span style={{ fontSize: '1em' }}>&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container blog-content-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="blog-featured-card">
                            <div className="blog-featured-image">
                                {/* Placeholder for the text-based image in screenshot */}
                                <div className="blog-overlay-text">
                                    <div style={{ color: '#FBC91E', textAlign: 'right', fontSize: '1.5rem', marginBottom: '1rem' }}>ES</div>
                                    <h3>URGENCY VS</h3>
                                    <div className="sub-text">EMERGENCY</div>
                                    <div className="blog-overlay-footer">
                                        A Message From Our CEO, <span style={{ color: '#fff' }}>Christopher Handy</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-post-details mt-4">
                                <div className="text-warning fw-bold small mb-2">THE LATEST</div>
                                <h3 className="fw-bold">From Our CEO: Urgency vs. Emergency</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
