import React from 'react';
import { useSwipeable } from 'react-swipeable';

// Import images
import software1 from '../Images/software1.jpg';
import software2 from '../Images/software2.jpg';
import software3 from '../Images/software3.jpg';
import software4 from '../Images/software4.jpg';
import software5 from '../Images/software5.jpg';
import software6 from '../Images/software6.jpg';
import software7 from '../Images/software7.jpg';
import software8 from '../Images/software8.jpg';
import software9 from '../Images/software9.jpg';
import software10 from '../Images/software10.jpg';
import software11 from '../Images/software11.jpg';
import software12 from '../Images/software12.jpg';
import software13 from '../Images/software13.jpg';
import software14 from '../Images/software14.jpg';
import software15 from '../Images/Software15.jpg';
import software16 from '../Images/software16.jpg';
import hardware1 from '../Images/Hardware1.jpg';
import hardware2 from '../Images/Hardware2.jpg';
import hardware3 from '../Images/Hardware3.jpg';
import hardware4 from '../Images/Hardware4.jpg';

import coffeeShopVideo from '../videos/coffee.mp4'; 

// Inline styles
const styles = {
  projectCard: {
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    maxWidth: '850px',
    margin: '0 auto',
    padding: '16px',
    animation: 'slideIn 1s ease-out',
    transition: 'transform 0.5s ease-in-out',
    marginBottom: '40px',
    border: '2px solid #caf0f8', // Add border to the project card
    borderRadius: '8px', // Optional: Add rounded corners
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '300px',
    height: '600px',
    margin: '0 auto',
  },
  imageCarousel: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  imageItem: {
    width: '300px',
    height: '600px',
    objectFit: 'cover',
    flexShrink: 0,
    animation: 'fadeIn 1s ease-out',
  },
  videoContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '700px',
    height: '400px',
    margin: '0 auto',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  projectDetails: {
    marginTop: '20px',
    animation: 'fadeIn 1s ease-out',
  },
  projectTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#fff',
    transition: 'color 0.3s',
  },
  description: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '16px',
    color: '#fff',
  },
  projectLink: {
    display: 'inline-block',
    background: '#383838',
    color: '#fff',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '8px',
    marginTop: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  listContainer: {
    textAlign: 'center',
    marginBottom: '18px',
  },
  list: {
    listStyleType: 'disc',
    display: 'inline-block',
    textAlign: 'left',
    paddingLeft: '20px',
    color: '#fff',
  },
  header: {
    color: '#ffffff',
    textAlign: 'left',
    marginBottom: '20px',
    animation: 'fadeIn 1s ease-out',
  },
};

// Keyframe animations
const animationStyles = `
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
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Insert animation styles into the document
const insertAnimationStyles = () => {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = animationStyles;
  document.head.appendChild(styleTag);
};

insertAnimationStyles();

// Project component
const Project = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : project.photos.length - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < project.photos.length - 1 ? prevIndex + 1 : 0
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  return (
    <div style={styles.projectCard} {...swipeHandlers}>
      {project.video ? (
        <div style={styles.videoContainer}>
          <video
            controls
            src={project.video}
            style={styles.video}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div style={styles.imageContainer}>
          <div
            style={{
              ...styles.imageCarousel,
              transform: `translateX(-${currentImageIndex * 300}px)`,
            }}
          >
            {project.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={project.title}
                style={styles.imageItem}
              />
            ))}
          </div>
        </div>
      )}
      <div style={styles.projectDetails}>
        <h2 style={styles.projectTitle}>{project.title}</h2>
        <h3 style={styles.description}>
          {project.description.intro}
        </h3>
        <div style={styles.listContainer}>
          <ul style={styles.list}>
            {project.description.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.projectLink}
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

// Projects component
const Projects = () => {
  const projects = [
    {
      title: 'PART TIME JOB OFFERING PLATFORM (LEVEL 2 SOFTWARE PROJECT)',
      description: {
        intro: 'This platform is developed for part-time job seekers and job posters. It includes a mobile application and a web application. In this project, I have implemented the functionalities of the job poster. Technologies used:',
        technologies: ['React Native', 'React', 'Node.js', 'MySQL']
      },
      photos: [software1, software2, software3, software4, software5, software6, software7, software8, software9, software10, software11, software12, software13, software14, software15, software16],
      repoLink: 'https://github.com/AnjalikaTSG/Porthfolio/tree/master',
    },
    {
      title: 'COFFEE SHOP WEB SITE (ONGOING)',
      description: {
        intro: 'Developed a responsive and interactive website for a coffee shop. The project included designing and implementing multiple sections. It includes a smooth scrolling navigation system and interactive product elements.',
        technologies: ['NextJS']
      },
      video: coffeeShopVideo,
      repoLink: 'https://chai-chamlet-cafe.vercel.app/',
    },
    {
      title: 'PERSONAL PORTFOLIO WEB SITE',
      description: {
        intro: 'Developed a fully responsive portfolio website to showcase my projects, skills, and experience. The website features smooth navigation and a dark/light theme toggle. It includes various sections like About, Skills, Projects, and Contact, along with custom animations for a modern and engaging user experience.',
        technologies: ['React']
      },
      photos: [hardware1, hardware2, hardware3, hardware4],
      repoLink: 'https://gihani.vercel.app/',
    },
    {
      title: 'PORTABLE SECURITY BOX (LEVEL 1 HARDWARE PROJECT)',
      description: {
        intro: 'This project was created to develop a secure, portable storage solution for valuable items. The system includes object detection, fingerprint verification, PIN authentication, location tracking, motion detection, and an alarm system. In this project, I was responsible for the fingerprint authentication process.',
        technologies: ['Object Detection', 'Fingerprint Verification', 'PIN Authentication', 'Location Tracking']
      },
      photos: [hardware1, hardware2, hardware3, hardware4],
      repoLink: 'https://github.com/user/project2',
    },
  ];

  return (
    <div>
      <h1 style={styles.header}>Projects</h1>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
