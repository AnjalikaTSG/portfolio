import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutFront = () => {
    return (
        <section className="about-section">
            <h2 className="bold">About Me</h2>
            <div className="about-container">
                <div className="contact-sidebar">
                    <a href="https://github.com/AnjalikaTSG" target="_blank" rel="noopener noreferrer" className="link">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/gihani-anjalika-90a6882a6/" target="_blank" rel="noopener noreferrer" className="link">
                        <FaLinkedin className="icon" />
                    </a>
                </div>

                <div className="content">
                    <div className="description">
                        <p>
                            An IT undergraduate student committed to enhancing technical knowledge and problem-solving skills. A proactive team player with
                            leadership abilities and a strong sense of teamwork. Through projects, I have improved my ability to adjust to new technologies. I am
                            seeking a software engineering internship to further develop my skills and gain industry experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className="education">
                <h2 className="bold">Education</h2>
                <div className="education-boxes">
                    <div className="education-box left">
                        <p>
                            University of Moratuwa<br />
                            Faculty of Information Technology<br />
                            Reading for B.Sc. (Hons) Degree in Information Technology & Management<br />
                            (Expected in 2026)<br />
                        </p>
                    </div>
                    <div className="education-box right">
                        <p>
                            R/Eheliyagoda Central College<br />
                            G.C.E. Advanced Level (2020)<br />
                            Z-score: 2.0341<br />
                            District rank: 46 (Rathnapura)<br />
                        </p>
                    </div>
                </div>
            </div>

            <div className="certification-experience">
                <div className="certification">
                    <h2 className="bold">Certification</h2>
                    <div className="education-box">
                        <p>React Native (from Meta)</p>
                        <p>React Basics (from Meta)</p>
                        <p>Version Control (from Meta)</p>
                        <p>Introduction to Java (from Sololearn)</p>
                        <p>Java Intermediate (from Sololearn)</p>
                        <p>Introduction to SQL (from Sololearn)</p>
                    </div>
                </div>

                <div className="experience">
                    <h2 className="bold">Work Experience</h2>
                    <div className="education-box">
                        <p>
                            Banking Trainee (Intern)<br />
                            Peoples Bank<br />
                            Feb 2022 - July 2022<br />
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-section {
                    color: white;
                    font-size: 15px;
                    margin: 30px 0;
                    font-family: sans-serif;
                    position: relative;
                    animation: showRight 1s ease forwards;
                    animation-delay: 1.6s;
                }

                .about-container {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 10px;
                }

                .contact-sidebar {
                    flex: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: left;
                    gap: 10px;
                    position: sticky;
                    top: 20px;
                }

                .content {
                    flex: 30;
                    display: flex;
                    flex-direction: column;
                    padding-left: 20px;
                }

                .description {
                    margin-bottom: 20px;
                }

                .education {
                    margin-top: 20px;
                }

                .education-boxes {
                    display: flex;
                    justify-content: space-between; /* Align boxes side by side */
                    gap: 20px;
                }

                .education-box {
                    flex: 1;
                    border: 2px solid #caf0f8; /* Added border */
                    padding: 15px;
                    border-radius: 10px; /* Rounded corners */
                }

                .certification-experience {
                    display: flex;
                    justify-content: space-between; /* Align certification and experience side by side */
                    gap: 20px;
                    margin-top: 20px;
                }

                .certification,
                .experience {
                    flex: 1;
                }

                .icon {
                    font-size: 3rem; /* Increased icon size */
                    color: white;
                    transition: color 0.3s;
                }

                .icon:hover {
                    color: #3498db; /* Icon hover color */
                }

                h2.bold {
                    margin-bottom: 15px; /* Added margin-bottom */
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    .about-container {
                        flex-direction: column;
                        align-items: center;
                    }

                    .contact-sidebar {
                        flex-direction: row;
                        justify-content: center;
                        gap: 10px;
                        position: static;
                        margin-bottom: 20px;
                    }

                    .content {
                        padding-left: 0;
                        text-align: center;
                    }

                    .icon {
                        font-size: 2rem; /* Adjusted for smaller screens */
                    }

                    .education-boxes,
                    .certification-experience {
                        flex-direction: column; /* Stack boxes on small screens */
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutFront;
