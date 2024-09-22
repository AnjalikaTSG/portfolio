import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
    return (
        <>
            <style>
                {`
                    .link {
                        display: block; /* Block display for full-width clickable area */
                        padding: 8px 16px; /* Padding around the link */
                        font-size: 1rem; /* Font size for the text */
                        color: #ffffff; /* White text color */
                        text-decoration: none; /* Remove underline from link */
                        border-radius: 4px; /* Rounded corners */
                        transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for hover effects */
                    }

                    .link:hover {
                        background-color: #caf0f8; /* Yellow background on hover */
                        color: #2d2d2d; /* Dark gray text color on hover */
                    }
                `}
            </style>
            <Link to={href} className="link">
                {title}
            </Link>
        </>
    );
};

export default NavLink;
