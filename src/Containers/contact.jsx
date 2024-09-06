import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="header">Contact Me</h1>
            <div className="card-container">
                <div className="card">
                    <h2 className="title">Contact Me</h2>
                    <p><FaPhoneAlt className="icon" /> +94-758178490</p>
                </div>
                <div className="card">
                    <h2 className="title">Email</h2>
                    <p><FaEnvelope className="icon" /> gihanianjalika08@gmail.com</p>
                </div>
                <div className="card">
                    <h2 className="title">Location</h2>
                    <p><FaMapMarkerAlt className="icon" /> Dehiowita, Sri Lanka</p>
                </div>
                <div className="card">
                    <h2 className="title">GitHub</h2>
                    <p>
                        <a href="https://github.com/AnjalikaTSG" target="_blank" rel="noopener noreferrer" className="link">
                            <FaGithub className="icon" /> GitHub Profile
                        </a>
                    </p>
                </div>
                <div className="card">
                    <h2 className="title">LinkedIn</h2>
                    <p>
                        <a href="https://www.linkedin.com/in/gihani-anjalika-90a6882a6/" target="_blank" rel="noopener noreferrer" className="link">
                            <FaLinkedin className="icon" /> LinkedIn Profile
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
                    background-color: #1a1a1a;
                }

                .header {
                    text-align: center;
                    margin-bottom: 40px;
                    color: #EC4899;
                    font-size: 2.5rem;
                    animation: fadeIn 1s ease-in-out;
                }

                .card-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    justify-content: center;
                    animation: fadeIn 1s ease-in-out;
                }

                .card {
                    border: 3px solid #DD9BCF;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    background-color: #484848;
                    color: #fff;
                    transition: transform 0.3s, box-shadow 0.3s;
                }

                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                }

                .title {
                    margin-bottom: 10px;
                    color: #EC4899;
                    font-size: 2rem;
                }

                .icon {
                    margin-right: 10px;
                    color: #EC4899;
                    font-size: 1.5rem;
                }

                .link {
                    text-decoration: none;
                    color: #EC4899;
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
