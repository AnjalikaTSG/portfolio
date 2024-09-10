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
            <div className="content">
                <div className="description">
                    <h2 className="bold">About Me</h2>
                    <p>
                        I am an enthusiastic IT undergraduate currently pursuing a degree in Information Technology & Management at the University of Moratuwa. With a deep-seated passion for technology and a commitment to continuous learning, I am dedicated to expanding my technical knowledge and sharpening my problem-solving skills. My journey through academia and various projects has equipped me with a robust understanding of software development, system analysis, and the latest technological advancements.
                        As a proactive team player, I excel in collaborative settings and am known for my leadership abilities. I thrive in environments where creativity and innovation are encouraged, and I take pride in motivating and guiding my peers to achieve collective goals. My hands-on experience with diverse projects has not only honed my technical skills but also enhanced my adaptability to rapidly changing technologies and industry trends.
                    </p>
                </div>
                <div className="contact-icons">
                    <a href="https://github.com/AnjalikaTSG" target="_blank" rel="noopener noreferrer" className="link">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/gihani-anjalika-90a6882a6/" target="_blank" rel="noopener noreferrer" className="link">
                        <FaLinkedin className="icon" />
                    </a>
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
                @import url('https://fonts.googleapis.com/css2?family=Didot:wght@400;700&display=swap');

                .about-section {
                    color: white;
                    font-size: 15px;
                    margin: 30px 0;
                    font-family: sans-serif;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .description {
                    max-width: 100%;
                    padding: 0 20px;
                }

                .description h2.bold {
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .contact-icons {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .contact-icons .link {
                    text-decoration: none;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    transition: color 0.3s;
                }

                .contact-icons .link:hover {
                    color: #EC4899;
                }

                .icon {
                    font-size: 2rem;
                    margin-right: 10px;
                }

                .subsection {
                    margin-top: 40px;
                    color: #C6FAD2;
                    display: flex;
                    gap: 10px;
                }

                .category {
                    margin-bottom: 20px;
                }

                .category h3 {
                    font-family: sans-serif;
                }

                .no-bullets {
                    list-style-type: none;
                    padding-left: 0;
                }

                .no-bullets li {
                    margin-bottom: 5px;
                }

                .tab-title {
                    font-family: sans-serif; /* Apply sans-serif to tab titles */
                    font-weight: bold;
                }

                @media (min-width: 1200px) {
                    .content {
                        flex-direction: row;
                        gap: 30px;
                    }
                }
                
                @media (max-width: 1199px) and (min-width: 768px) {
                    .content {
                        gap: 25px;
                    }
                }
                
                @media (max-width: 767px) {
                    .content {
                        gap: 15px;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutFront;
