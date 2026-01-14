import React from 'react';
import './Clients.css'; // Reuse basic styling

const Wins = () => {
    return (
        <section className="wins-section py-5 bg-white text-black border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 mb-4 mb-md-0 border-end-black">
                        <h2 className="clients-heading">WINS</h2>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex justify-content-around flex-wrap align-items-center gap-4 fw-bold text-uppercase fs-4 text-muted">
                            <div>PRO AWARDS</div>
                            <div>TEMPEST</div>
                            <div>ADAGE</div>
                            <div>CLIO SPORTS</div>
                            <div>EX AWARDS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wins;
