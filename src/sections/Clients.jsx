import React from 'react';
import './Clients.css';
import { FaCar, FaGolfBall, FaBeer, FaPlane } from 'react-icons/fa'; // Placeholders
import { GiSailboat } from 'react-icons/gi';

const Clients = () => {
    // Using icons + text as placeholders for logos
    const clients = [
        { name: 'Mercedes-Benz', icon: <FaCar size={40} /> },
        { name: 'PGA TOUR', icon: <FaGolfBall size={40} /> },
        { name: 'ABInBev', icon: <FaBeer size={40} /> },
        { name: 'Captain Morgan', icon: <GiSailboat size={40} /> },
        { name: 'DELTA', icon: <FaPlane size={40} /> },
    ];

    return (
        <section className="clients-section py-5 bg-white text-black">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 mb-4 mb-md-0 border-end-black">
                        <h2 className="clients-heading">CLIENTS</h2>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex justify-content-around flex-wrap align-items-center gap-4">
                            {clients.map((client, index) => (
                                <div key={index} className="client-logo text-center opacity-75">
                                    {client.icon}
                                    <span className="d-block mt-2 fw-bold small text-uppercase">{client.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
