import React from 'react';
import { useSwipeable } from 'react-swipeable';

// Import images
import hardware1 from '../Images/Hardware1.jpg';
import hardware2 from '../Images/Hardware2.jpg';
import hardware3 from '../Images/Hardware3.jpg';
import hardware4 from '../Images/Hardware4.jpg';

import job from '../videos/job.mp4';
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
    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
    marginBottom: '40px',
    border: '2px solid #caf0f8',
    borderRadius: '8px',
    flex: '1 1 calc(50% - 20px)',
    position: 'relative',
  },
  projectCardHover: {
    transform: 'scale(1.05)', // Slight zoom-in effect on hover
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Elevates the card with a stronger shadow
  },
  projectContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '40px',
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
    display: 'inline-flex',
    alignItems: 'center',
    color: '#fff',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '8px',
    marginTop: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  arrowIcon: {
    marginLeft: '8px',
    width: '16px',
    height: '16px',
    fill: '#fff',
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
  technologyItem: {
    padding: '4px 8px',
    margin: '4px',
    display: 'inline-block',
    border: '2px solid #caf0f8',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '14px',
  },
  header: {
    color: '#ffffff',
    textAlign: 'left',
    marginBottom: '20px',
    animation: 'fadeIn 1s ease-out',
  },

  // Media query for small screens
  '@media (max-width: 768px)': {
    projectCard: {
      flex: '1 1 100%',
      maxWidth: '100%',
    },
    projectContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    imageContainer: {
      width: '100%',
      height: '400px',
    },
    videoContainer: {
      width: '100%',
      height: '300px',
    },
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
  const [isHovered, setIsHovered] = React.useState(false);

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
    <div
      style={{
        ...styles.projectCard,
        ...(isHovered ? styles.projectCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...swipeHandlers}
    >
      {project.video ? (
        <div style={styles.videoContainer}>
          <video controls src={project.video} style={styles.video}>
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
        <h3 style={styles.description}>{project.description.intro}</h3>
        <div style={styles.listContainer}>
          <ul style={styles.list}>
            {project.description.technologies.map((tech, index) => (
              <li key={index} style={styles.technologyItem}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.projectLink, justifyContent: 'space-between' }}
        >
          View Repository
          <svg style={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2L15.59 5.59 11.17 10H22v2H11.17l4.42 4.41L12 22l-10-10z"/>
          </svg>
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
        intro:
          'This platform is developed for part-time job seekers and job posters. It includes a mobile application and a web application. In this project, I have implemented the functionalities of the job poster. Technologies used:',
        technologies: ['React Native', 'React', 'Node.js', 'MySQL'],
      },
      video: job,
      repoLink: 'https://github.com/AnjalikaTSG/Porthfolio/tree/master',
    },
    {
      title: 'COFFEE SHOP WEB SITE (ONGOING)',
      description: {
        intro:
          'Developed a responsive and interactive website for a coffee shop. The project included designing and implementing multiple sections. It includes a smooth scrolling navigation system and interactive product elements.',
        technologies: ['NextJS'],
      },
      video: coffeeShopVideo,
      repoLink: 'https://chai-chamlet-cafe.vercel.app/',
    },
    {
      title: 'PERSONAL PORTFOLIO WEB SITE',
      description: {
        intro:
          'eveloped a fully responsive portfolio website to showcase my projects, skills, and experience. The website features smooth navigation and a dark/light theme toggle. It includes various sections like About, Skills, Projects, and Contact, along with custom animations for a modern and engaging user experience.',
        technologies: ['React'],
      },
      photos: [hardware1, hardware2, hardware3, hardware4],
      repoLink: 'https://github.com/AnjalikaTSG/Porthfolio/tree/master',
    },
    {
      title: 'PORTABLE SECURITY BOX (LEVEL 1 HARDWARE PROJECT)',
      description: {
        intro:
          'This project was created to showcase a portable security box that includes an alarm system triggered by unauthorized access. It was designed for educational purposes and implemented using basic electronic components.',
        technologies: ['Arduino', 'C++'],
      },
      photos: [hardware1, hardware2, hardware3, hardware4],
      repoLink: 'https://github.com/AnjalikaTSG/Portable-Security-Box',
    },
  ];

  return (
    <div style={styles.projectContainer}>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
