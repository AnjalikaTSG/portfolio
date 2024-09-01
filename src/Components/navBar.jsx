import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../Components/navBar/navLink';
import { HiMenu, HiX } from 'react-icons/hi';

const navLink = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Projects', path: '/projects' },
    { title: 'Skills', path: '/skills' }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav>
            <style>
                {`
                    nav {
                        background-color: #050321; /* Dark background */
                        padding: 16px; /* Padding around nav */
                        position: relative; /* Position for internal elements */
                    }

                    .container {
                        display: flex;
                        justify-content: space-between; /* Space between logo and menu icon */
                        align-items: center; /* Center items vertically */
                        max-width: 1200px; /* Maximum width of the container */
                        margin: 0 auto; /* Center container horizontally */
                    }

                    .logo {
                        font-size: 2rem; /* Font size for logo */
                        font-weight: bold; /* Bold text */
                        color: #fff; /* White text color */
                        text-decoration: none; /* Remove underline */
                    }

                    .logo:hover {
                        color: #DD9BCF; /* Color on hover */
                    }

                    .menu {
                        display: ${isMenuOpen ? 'block' : 'flex'}; /* Toggle menu display */
                        gap: 20px; /* Space between menu items */
                    }

                    .menu ul {
                        list-style: none; /* Remove bullet points */
                        padding: 0; /* Remove padding */
                        margin: 0; /* Remove margin */
                        display: ${isMenuOpen ? 'block' : 'flex'}; /* Horizontal layout on desktop, block on mobile */
                        gap: 20px; /* Space between list items */
                    }

                    .menuItem {
                        display: block; /* Block display for menu items */
                        padding: 8px 16px; /* Padding for menu items */
                        font-size: 1.5rem; /* Font size for menu items */
                        color: #fff; /* White text color */
                        text-decoration: none; /* Remove underline */
                        border-radius: 4px; /* Rounded corners */
                        transition: background-color 0.3s; /* Smooth transition */
                    }

                    .menuItem:hover {
                        background-color: #DD9BCF; /* Background color on hover */
                        color: #000; /* Dark text color on hover */
                    }

                    .menuIcon {
                        display: none; /* Hide menu icon by default */
                        font-size: 2rem; /* Size of menu icon */
                        color: #fff; /* Color of menu icon */
                        cursor: pointer; /* Pointer cursor */
                    }

                    .closeIcon {
                        display: none; /* Hide close icon by default */
                        font-size: 2rem; /* Size of close icon */
                        color: #fff; /* Color of close icon */
                        cursor: pointer; /* Pointer cursor */
                        position: absolute; /* Positioning within menu */
                        top: 16px; /* Distance from top */
                        right: 16px; /* Distance from right */
                    }

                    /* Responsive Design */
                    @media (max-width: 768px) {
                        .menu {
                            display: ${isMenuOpen ? 'block' : 'none'}; /* Toggle menu display */
                            position: absolute; /* Absolute positioning */
                            top: 0; /* Align to top */
                            left: 0; /* Align to left */
                            background-color: #000; /* Background color */
                            height: 100vh; /* Full viewport height */
                            width: 250px; /* Width of mobile menu */
                            padding-top: 60px; /* Padding for menu items */
                            padding-right: 16px; /* Padding for close icon */
                            z-index: 10; /* Ensure menu appears on top */
                            box-sizing: border-box; /* Include padding in width */
                        }

                        .menu ul {
                            display: block; /* Block display for mobile menu */
                        }

                        .menuIcon {
                            display: block; /* Show menu icon on mobile */
                        }

                        .closeIcon {
                            display: ${isMenuOpen ? 'block' : 'none'}; /* Toggle close icon */
                        }
                    }
                `}
            </style>
            <div className="container">
                <Link to="/" className="logo" aria-label="Home">
                    Gihani Anjalika
                </Link>
                <div className="menuIcon" onClick={toggleMenu} aria-label="Open menu">
                    <HiMenu />
                </div>
                <div className="menu">
                    <div className="closeIcon" onClick={toggleMenu} aria-label="Close menu">
                        <HiX />
                    </div>
                    <ul>
                        {navLink.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
