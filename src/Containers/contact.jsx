import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="header">Contact Me</h1>
            <div className="card-container">
                <div className="card">
                    <p><FaPhoneAlt className="icon" /> +94-758178490</p>
                </div>
                <div className="card">
                    <p><FaEnvelope className="icon" /> gihanianjalika08@gmail.com</p>
                </div>
                <div className="card">
                    <p><FaMapMarkerAlt className="icon" /> Dehiowita, Sri Lanka</p>
                </div>
                <div className="card">
                    <p>
                        <a href="https://github.com/AnjalikaTSG" target="_blank" rel="noopener noreferrer" className="link">
                            <FaGithub className="icon" />
                        </a>
                    </p>
                </div>
                <div className="card">
                    <p>
                        <a href="https://www.linkedin.com/in/gihani-anjalika-90a6882a6/" target="_blank" rel="noopener noreferrer" className="link">
                            <FaLinkedin className="icon" />
                        </a>
                    </p>
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

                .contact-container {
                    color: white;
                    font-family: 'Roboto', sans-serif;
                    padding: 20px;
                }

                .header {
                    text-align: center;
                    margin-bottom: 40px;
                    color: #EC4899;
                    font-size: 2.5rem;
                    animation: fadeIn 1s ease-in-out;
                }

                .card-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: center;
                    animation: fadeIn 1s ease-in-out;
                }

                .card {
                    width: 100%;
                    max-width: 500px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    color: #fff;
                    transition: transform 0.3s, box-shadow 0.3s;
                }

                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                }

                .icon {
                    margin-right: 10px;
                    color: #fff;
                    font-size: 1.5rem;
                }

                .link {
                    text-decoration: none;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    transition: color 0.3s;
                }

                .link:hover {
                    color: #fff;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
