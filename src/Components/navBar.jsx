import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import theme icons

const navLink = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Contact', path: '#contact' },
    { title: 'Projects', path: '#projects' },
    { title: 'Skills', path: '#skills' }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'; // Persist theme preference
    });

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState);
    };

    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDarkMode]);

    const handleScrollToSection = (path) => {
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close the menu after clicking
    };

    return (
        <nav>
            <style>
                {`
                    :root {
                        --background-color-light: #f0f0f0;
                        --text-color-light: #000;
                        --background-color-dark: #0a0826;
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

                    body {
                        background-color: var(--background-color);
                        color: var(--text-color);
                    }

                    nav {
                        background-color: var(--background-color);
                        color: var(--text-color);
                        padding: 16px;
                        position: relative;
                    }

                    .container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 1200px;
                        margin: 0 auto;
                    }

                    .logo {
                        font-size: 2rem;
                        font-weight: bold;
                        color: var(--text-color);
                        text-decoration: none;
                    }

                    .logo:hover {
                        color: #DD9BCF;
                    }

                    .menu {
                        display: ${isMenuOpen ? 'block' : 'flex'};
                        gap: 20px;
                    }

                    .menu ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: ${isMenuOpen ? 'block' : 'flex'};
                        gap: 20px;
                    }

                    .menuItem {
                        display: block;
                        padding: 8px 16px;
                        font-size: 1.5rem;
                        color: var(--text-color);
                        text-decoration: none;
                        border-radius: 4px;
                        transition: background-color 0.3s, color 0.3s;
                        cursor: pointer;
                    }

                    .menuItem:hover {
                        background-color: #DD9BCF;
                        color: #000;
                    }

                    .menuIcon, .closeIcon {
                        font-size: 2rem;
                        color: var(--text-color);
                        cursor: pointer;
                        display: none;
                    }

                    .themeIcon {
                        font-size: 1.5rem;
                        cursor: pointer;
                    }

                    @media (max-width: 768px) {
                        .menu {
                            display: ${isMenuOpen ? 'block' : 'none'};
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-color: var(--background-color);
                            height: 100vh;
                            width: 250px;
                            padding-top: 60px;
                            padding-right: 16px;
                            z-index: 10;
                            box-sizing: border-box;
                        }

                        .menu ul {
                            display: block;
                        }

                        .menuIcon {
                            display: block;
                        }

                        .closeIcon {
                            display: ${isMenuOpen ? 'block' : 'none'};
                        }
                    }
                `}
            </style>
            <div className="container">
                <div className="logo">
                    Gihani Anjalika
                </div>
                <div className="menuIcon" onClick={toggleMenu}>
                    <HiMenu />
                </div>
                <div className="menu">
                    <div className="closeIcon" onClick={toggleMenu}>
                        <HiX />
                    </div>
                    <ul>
                        {navLink.map((link, index) => (
                            <li key={index} onClick={() => handleScrollToSection(link.path)}>
                                <span className="menuItem">{link.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="themeIcon" onClick={toggleTheme}>
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
