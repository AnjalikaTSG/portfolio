import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Updated import statement

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        if(!name || !email || !message){
            setErrorMessage("please fill all the fields");
            return;
        }
        const templatePrams ={
            from_name: name,
            to_name: "Gihani Anjalika",
            message: message,
            reply_to: email,
        };

        setLoading(true);
        emailjs
            .send(
                "service_3gedtuh",
                "template_qdxhbbj",
                templatePrams,
                "jwk9vhF-fqRN6iJil"
            )
            .then(
                function(response){
                    setSuccessMessage("Message sent successfully !!");
                    setLoading(false);
                    setEmail("");
                    setName("");
                    setMessage("");
                    
                    setTimeout(() => {
                        setSuccessMessage("");
                    }, 5000)
                },
                function(error){
                    setErrorMessage("Error occured !!");
                    setLoading(false);

                    setTimeout(() => {
                        setErrorMessage("");
                    }, 5000)
                }
                
            );
    };
    


    return (
        <div className="contact-container">
            <h1 className="header">Contact Me</h1>
            <div className="info-form-container">
                <div className="info-container">
                    <div className="card">
                        <p><FaPhoneAlt className="icon" /> +94-758178490</p>
                    </div>
                    <div className="card">
                        <p><FaEnvelope className="icon" /> gihanianjalika08@gmail.com</p>
                    </div>
                    <div className="card">
                        <p><FaMapMarkerAlt className="icon" /> Dehiowita, Sri Lanka</p>
                    </div>
                </div>
                <div className="form-container">
                    <h2>Get in Touch</h2>
                    <form onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

                .contact-container {
                    color: white;
                    font-family: 'Roboto', sans-serif;
                    padding: 20px;
                    animation: slideIn 1s ease-out;
                }

                .header {
                    text-align: left;
                    margin-bottom: 40px;
                    color: #ffffff;
                    font-size: 2.5rem;
                    animation: fadeIn 1s ease-in-out;
                }

                .info-form-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .info-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .form-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    width: 100%; /* Full width */
                    max-width: 700px; /* Set a larger max width */
                }

                .card {
                    width: 100%;
                    max-width: 500px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: left;
                    color: #fff;
                    transition: transform 0.3s, box-shadow 0.3s;
                }

                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                }

                .icon {
                    margin-right: 10px;
                    color: #fff;
                    font-size: 1.5rem;
                }

                .form-container form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .form-container input,
                .form-container textarea {
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #333;
                }

                .form-container button {
                    padding: 10px;
                    background-color: #00BFFF;
                    border: none;
                    border-radius: 4px;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .form-container button:hover {
                    background-color: #0077b6;
                }

                .success-message {
                    color: #28a745; /* Green color for success */
                    margin-top: 10px;
                }

                .error-message {
                    color: #dc3545; /* Red color for error */
                    margin-top: 10px;
                }

                @media (min-width: 768px) {
                    .info-form-container {
                        flex-direction: row;
                        align-items: flex-start;
                    }

                    .info-container,
                    .form-container {
                        flex: 1;
                    }

                    .info-container {
                        margin-right: 10px; /* Adjust this value to reduce space */
                    }

                    .form-container {
                        max-width: 1000px; /* Increased max-width for larger screens */
                        margin-left: 0; /* Ensure there's no extra space on the left side */
                    }
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

                @keyframes slideIn {
                    from {
                        transform: translateX(100px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
