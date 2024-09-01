import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
        <h1 className="bold" style={styles.header}>Contact me</h1>
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Contact Me</h2>
                <p><FaPhoneAlt style={styles.icon} /> +94-758178490</p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.title}>Email</h2>
                <p><FaEnvelope style={styles.icon} /> gihanianjalika08@gmail.com</p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.title}>Location</h2>
                <p><FaMapMarkerAlt style={styles.icon} /> Dehiowita, Sri Lanka</p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.title}>GitHub</h2>
                <p>
                    <a href="https://github.com/AnjalikaTSG" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        <FaGithub style={styles.icon} /> GitHub Profile
                    </a>
                </p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.title}>LinkedIn</h2>
                <p>
                    <a href="https://www.linkedin.com/in/gihani-anjalika-90a6882a6/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        <FaLinkedin style={styles.icon} /> LinkedIn Profile
                    </a>
                </p>
            </div>
        </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        padding: '20px',
        justifyContent: 'center',
    },
    card: {
        border: '3px solid #DD9BCF',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        backgroundColor: '#C6FAD2',
        color: '#000',
    },
    title: {
        marginBottom: '10px',
        color: '#000',
        fontSize: '2rem', // Increased title size
    },
    icon: {
        marginRight: '10px',
        color: '#EC4899',
        fontSize: '1.5rem', // Increased icon size
    },
    link: {
        textDecoration: 'none',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem', // Increased link text size
    },
    header:{
        color:'white',
    },
};

export default Contact;
