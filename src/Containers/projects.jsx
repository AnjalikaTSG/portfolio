import React, { useState } from 'react';
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


// Inline styles
const styles = {
  projectCard: {
    border: '3px solid #DD9BCF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    background: '#C6FAD2',
    textAlign: 'center',
    maxWidth: '850px',
    margin: '0 auto',
    padding: '16px',
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
  },
  navigationButton: {
    background: '#DD9BCF',
    border: 'none',
    color: '#fff',
    padding: '12px',
    fontSize: '24px',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  prevButton: {
    left: '5px',
  },
  nextButton: {
    right: '5px',
  },
  projectDetails: {
    marginTop: '20px',
  },
  projectTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  description: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '16px',
  },
  projectLink: {
    display: 'inline-block',
    background: '#EC4899',
    color: '#92C69A',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '8px',
    marginTop: '16px',
  },
  listContainer: {
    textAlign: 'center',  // Center the list container
    marginBottom: '18px',
  },
  list: {
    listStyleType: 'disc',
    display: 'inline-block',  // Center the list itself
    textAlign: 'left',  // Align text within the list to the left
    paddingLeft: '20px',
  },
  header:{
    color:'white',
},
};

const Project = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div>
      <h1 className="bold" style={styles.header}>Projects</h1>
    <div style={styles.projectCard}>
      <div style={styles.imageContainer} {...swipeHandlers}>
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
        {project.photos.length > 1 && (
          <>
            <button onClick={handlePrevious} style={{ ...styles.navigationButton, ...styles.prevButton }}>
              &#9664;
            </button>
            <button onClick={handleNext} style={{ ...styles.navigationButton, ...styles.nextButton }}>
              &#9654;
            </button>
          </>
        )}
      </div>
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
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
          View Repository
        </a>
      </div>
    </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'PART TIME JOB OFFERING PLATFORM (LEVEL 2 SOFTWARE PROJECT)',
      description: {
        intro: 'This platform is developed to the part-time job seekers and job posters. It includes mobile application and web application. In this project, I have done the functionalities of the job poster. Technologies used:',
        technologies: ['React Native', 'React', 'Node.js', 'MySQL']
      },
      photos: [software1, software2, software3, software4, software5, software6, software7, software8, software9, software10, software11, software12, software13, software14, software15, software16],
      repoLink: 'https://github.com/AnjalikaTSG/Porthfolio/tree/master',
    },
    {
      title: 'PORTABLE SECURITY BOX (LEVEL 1 HARDWARE PROJECT)',
      description: {
        intro: 'This project was specifically to create a secure, portable storage solution for valuable things. This system consisted of object detection, fingerprint verification, PIN authentication, location tracking, detect motion, and activate buzzer. In this project, I was responsible for creating the fingerprint authentication process.',
        technologies: ['Object Detection', 'Fingerprint Verification', 'PIN Authentication', 'Location Tracking']
      },
      photos: [hardware1, hardware2, hardware3, hardware4],
      repoLink: 'https://github.com/user/project2',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div>
      <button onClick={handlePrevious} style={{ ...styles.navigationButton, ...styles.prevButton }}>
        &#9664;
      </button>
      <Project project={projects[currentIndex]} />
      <button onClick={handleNext} style={{ ...styles.navigationButton, ...styles.nextButton }}>
        &#9654;
      </button>
    </div>
  );
};

export default Projects;
