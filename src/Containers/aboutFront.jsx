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
                    justify-content: space-between;
                    gap: 20px;
                }

                .education-box {
                    flex: 1;
                    border: 2px solid #caf0f8;
                    padding: 15px;
                    border-radius: 10px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Added transition */
                }

                .education-box:hover {
                    transform: scale(1.05); /* Scale on hover */
                    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
                }

                .certification-experience {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    margin-top: 20px;
                }

                .certification,
                .experience {
                    flex: 1;
                }

                .certification .education-box,
                .experience .education-box {
                    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Added transition */
                }

                .certification .education-box:hover,
                .experience .education-box:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
                }

                .icon {
                    font-size: 3rem;
                    color: white;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s;
                }

                .icon:hover {
                    transform: scale(1.5); /* Scale the icon on hover */
                    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Add shadow to the icon on hover */
                    color: #3498db; /* Change color on hover */
                }

                h2.bold {
                    margin-bottom: 15px;
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
                        font-size: 2rem;
                    }

                    .education-boxes,
                    .certification-experience {
                        flex-direction: column;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutFront;
