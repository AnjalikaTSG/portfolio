"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <>
                <div className="category">
                    <h3>Web & Mobile Development:</h3>
                    <ul className="no-bullets">
                        <li>React</li>
                        <li>React Native</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="category">
                    <h3>Database:</h3>
                    <ul className="no-bullets">
                        <li>MYSQL</li>
                        <li>MSSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="category">
                    <h3>Version Control:</h3>
                    <ul className="no-bullets">
                        <li>GIT</li>
                    </ul>
                </div>
                <div className="category">
                    <h3>Other:</h3>
                    <ul className="no-bullets">
                        <li>Figma</li>
                        <li>GIMP</li>
                        <li>Blender</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <>
                <p>
                    University of Moratuwa<br />
                    Faculty of Information Technology<br />
                    Reading for B.Sc. (Hons) Degree in Information Technology & Management<br />
                    (Expected in 2026)<br />
                </p>
                <p>
                    R/Eheliyagoda Central College<br />
                    G.C.E. Advanced Level (2020)<br />
                    Z-score: 2.0341<br />
                    District rank: 46 (Rathnapura)<br />
                </p>
            </>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <p>
                Banking Trainee (Intern)<br />
                Peoples Bank<br />
                Feb 2022 - July 2022<br />
            </p>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="no-bullets">
                <li>React Native (from Meta)</li>
                <li>React Basics (from Meta)</li>
                <li>Version Control (from Meta)</li>
                <li>Introduction to Java (from Sololearn)</li>
                <li>Java Intermediate (from Sololearn)</li>
                <li>Introduction to SQL (from Sololearn)</li>
            </ul>
        )
    }
];

const AboutFront = () => {
    const [tab, setTab] = useState(""); // Initially, no content is displayed
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(prevTab => prevTab === id ? "" : id); // Toggle content visibility
        });
    };

    return (
        <section className="about-section">
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
                    <h2 className="bold">About Me</h2>
                    <p>
                        An IT undergraduate student committed to enhancing technical knowledge and problem-solving skills. A proactive team player with
                        leadership abilities and a strong sense of teamwork. Through projects, I have improved my ability to adjust to new technologies. I am
                        seeking a software engineering internship to further develop my skills and gain industry experience.
                    </p>
                </div>
            </div>

            <div className='subsection'>
                {TAB_DATA.map(tabData => (
                    <TabButton
                        key={tabData.id}
                        selectTab={() => handleTabChange(tabData.id)}
                        active={tab === tabData.id}
                        className="tab-title"
                    >
                        {tabData.title}
                    </TabButton>
                ))}
            </div>

            <br />
            {tab && <div className='data'>{TAB_DATA.find(t => t.id === tab).content}</div>}
            {isPending && <p>Loading...</p>}

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

                @keyframes showRight {
                    from {
                        opacity: 0;
                        transform: translateX(-100px); /* Starting from the left */
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0); /* Ending at the original position */
                    }
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 55px; /* Adjusted padding to replace margin-left */
                }

                .description {
                    flex: 2;
                }

                .contact-sidebar {
                    position: fixed;
                    top: 50%;
                    left: 20px;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    z-index: 50; /* Ensure it stays above other content */
                }

                .icon {
                    font-size: 2rem;
                    color: white;
                    transition: color 0.3s;
                }

                .icon:hover {
                    color: #3498db; /* Icon hover color */
                }

                .subsection {
                    margin-top: 40px;
                    display: flex;
                    gap: 10px;
                }

                .tab-title {
                    margin: 0 10px; /* Margin around each tab button */
                    padding: 10px 20px; /* Padding for better spacing */
                    border-radius: 5px; /* Optional: rounded corners for tabs */
                    background-color: #2c3e50; /* Background color for tabs */
                    color: white;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s;
                }

                .tab-title.active {
                    background-color: #3498db; /* Background color for active tab */
                    color: white; /* Text color for active tab */
                }

                .data {
                    padding: 20px;
                    background-color: #1e1e1e;
                    border-radius: 8px;
                }

                /* Media Queries for Responsiveness */
                @media (max-width: 768px) {
                    .content {
                        padding: 20px;
                    }

                    .description {
                        text-align: center;
                    }

                    .contact-sidebar {
                        position: static; /* Change position for small screens */
                        flex-direction: row;
                        justify-content: center;
                        gap: 10px;
                        margin-bottom: 20px;
                    }

                    .icon {
                        font-size: 1.5rem;
                    }

                    .tab-title {
                        margin: 0 5px; /* Reduced margin for smaller screens */
                        padding: 8px 15px; /* Reduced padding for smaller screens */
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutFront;
