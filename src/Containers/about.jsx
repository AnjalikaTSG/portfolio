"use client";
import React, { useTransition, useState } from 'react';
import CVImage from "../Images/CV.png";
import TabButton from './TabButton';

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
                    Reading for B.SC. (Hons) Degree in Information Technology & Management<br />
                    (Expected in 2026)<br />
                </p>
                <p>
                    R/ Eheliyagoda Central College<br />
                    G.C.E. Advanced Level (2020)<br />
                    Z-score: 2.0341<br />
                    District rank: 46(Rathnapura)<br />
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

const About = () => {
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
                <div className="imageSection">
                    <img src={CVImage} alt="CV" className="cvImage" />
                </div>
                <div className="description">
                    <h2 className="bold">About Me</h2>
                    <p>
                        An IT undergraduate student committed to enhancing technical
                        knowledge and problem-solving skills. A proactive team player with
                        leadership abilities and a strong sense of teamwork. Through
                        projects, I have improved my ability to adjust to new
                        technologies. I am seeking a software engineering internship to
                        further develop my skills and gain industry experience.
                    </p>
                    <div className='subsection'>
                        {TAB_DATA.map(tabData => (
                            <TabButton
                                key={tabData.id}
                                selectTab={() => handleTabChange(tabData.id)}
                                active={tab === tabData.id}
                            >
                                {tabData.title}
                            </TabButton>
                        ))}
                    </div>
                    <br />
                    <div className={`data ${tab ? "fade-in" : "fade-out"}`}>
                        {tab && TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                    {isPending && <p>Loading...</p>}
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Didot:wght@400;700&display=swap');

                :root {
                    --background-color-light: #f0f0f0;
                    --text-color-light: #000;
                    --background-color-dark: #03011a;
                    --text-color-dark: #fff;
                }

                [data-theme="light"] {
                    --background-color: var(--background-color-light);
                    --text-color: var(--text-color-light);
                }

                [data-theme="dark"] {
                    --background-color: var(--background-color-dark);
                    --text-color: var(--text-color-dark);
                }

                .about-section {
                    color: var(--text-color);
                    font-size: 15px;
                    margin: 30px;
                    font-family: sans-serif;
                    background-color: var(--background-color);
                }

                .content {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                }

                .imageSection {
                    flex: 1;
                    max-width: 50%;
                    display: flex;
                    justify-content: center;
                }

                .description {
                    flex: 1;
                    max-width: 50%;
                    padding-left: 20px;
                }

                .description h2.bold {
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .cvImage {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }

                .subsection {
                    margin-top: 40px;
                    color: #C6FAD2;
                    display: flex;
                    gap: 10px;
                }

                .category {
                    margin-bottom: 20px;
                    transition: transform 0.3s ease-in-out;
                }

                .category:hover {
                    transform: scale(1.1); /* Slightly larger zoom */
                }

                .no-bullets {
                    list-style-type: none;
                    padding-left: 0;
                }

                .no-bullets li {
                    margin-bottom: 5px;
                }

                .tab-button {
                    background: transparent;
                    border: 1px solid var(--text-color);
                    color: var(--text-color);
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s;
                }

                .tab-button.active {
                    background-color: var(--text-color);
                    color: var(--background-color);
                }

                .fade-in {
                    animation: fadeIn 0.5s ease-in forwards;
                }

                .fade-out {
                    opacity: 0;
                    animation: fadeOut 0.5s ease-out forwards;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }

                @media (min-width: 1200px) {
                    .cvImage {
                        max-width: 350px;
                        max-height: 400px;
                    }
                    .content {
                        gap: 30px;
                    }
                    .subsection {
                        gap: 20px;
                    }
                }
                
                @media (min-width: 768px) and (max-width: 1199px) {
                    .cvImage {
                        max-width: 300px;
                        max-height: 350px;
                    }
                    .content {
                        gap: 25px;
                    }
                    .subsection {
                        gap: 15px;
                    }
                }
                
                @media (max-width: 767px) {
                    .cvImage {
                        max-width: 250px;
                        max-height: 300px;
                    }
                    .content {
                        gap: 15px;
                    }
                    .subsection {
                        gap: 10px;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
