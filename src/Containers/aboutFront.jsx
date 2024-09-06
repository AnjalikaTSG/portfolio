"use client";
import React, { useTransition, useState } from 'react';
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
                                className="tab-title" // Applying class for sans-serif font
                            >
                                {tabData.title}
                            </TabButton>
                        ))}
                    </div>
                    <br />
                    {tab && <div className='data'>{TAB_DATA.find(t => t.id === tab).content}</div>}
                    {isPending && <p>Loading...</p>}
                </div>
            </div>
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
