import React from 'react';
import styled from 'styled-components';

// Import images
import reactImage from '../../src/Images/React.webp';
import reactNativeImage from '../../src/Images/reactnative.png';
import nextImage from '../../src/Images/next.png';
import nodeImage from '../../src/Images/node.png';
import jsImage from '../../src/Images/js.png';
import htmlImage from '../../src/Images/html.png';
import cssImage from '../../src/Images/css.png';
import mysqlImage from '../../src/Images/mysql.png';
import mssqlImage from '../../src/Images/mssql.png';
import mongoImage from '../../src/Images/mongo.png';
import gitImage from '../../src/Images/git.png';
import figmaImage from '../../src/Images/figma.webp';
import postmanImage from '../../src/Images/postman.png';
import blenderImage from '../../src/Images/blender.png';
import gimpImage from '../../src/Images/gimp.png';

const SkillsContainer = styled.div`
  padding: 20px;
  animation: showRight 1s ease forwards;
  animation-delay: 1.6s;
  
  @keyframes showRight {
    from {
      opacity: 0;
      transform: translateX(-100px); /* Starting from the left */
    }
    to {
      opacity: 1;
      transform: translateX(0); /* Ending at the original position */
    }
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: left;
`;

const SectionContainer = styled.div`
  margin-bottom: 40px; /* Space between sections */
`;

const TechnologyRow = styled.div`
  display: flex;
  gap: 20px; /* Space between items */
  flex-wrap: wrap; /* Allow items to wrap to the next line if necessary */
`;

const TechImage = styled.img`
  width: 50px; /* Adjust size of image */
  height: 50px; /* Adjust size of image */
  display: block; /* Ensure images are block-level elements */
`;

const TechnologyName = styled.p`
  color: white; /* Change text color to black */
  font-size: 14px; /* Adjusted font size */
  margin: 5px 0 0 0; /* Margin to position text below the image */
  text-align: center; /* Center the text under the image */
`;

const skillsSections = [
  {
    title: 'Web & Mobile Development',
    technologies: [
      { name: 'React', image: reactImage },
      { name: 'React Native', image: reactNativeImage },
      { name: 'Next.js', image: nextImage },
      { name: 'Node.js', image: nodeImage },
      { name: 'JavaScript', image: jsImage },
      { name: 'HTML', image: htmlImage },
      { name: 'CSS', image: cssImage },
    ],
  },
  {
    title: 'Database',
    technologies: [
      { name: 'MySQL', image: mysqlImage },
      { name: 'MSSQL', image: mssqlImage },
      { name: 'MongoDB', image: mongoImage },
    ],
  },
  {
    title: 'Version Control',
    technologies: [
      { name: 'GIT', image: gitImage },
    ],
  },
  {
    title: 'Other',
    technologies: [
      { name: 'Figma', image: figmaImage },
      { name: 'Postman', image: postmanImage },
      { name: 'Blender', image: blenderImage },
      { name: 'GIMP', image: gimpImage },
    ],
  },
];

const Skills = () => {
  return (
    <SkillsContainer>
      <Title className="bold">Skills</Title>
      {skillsSections.map((section, index) => (
        <SectionContainer key={index}>
          <SectionTitle>{section.title}</SectionTitle>
          <TechnologyRow>
            {section.technologies.map((tech, techIndex) => (
              <div key={techIndex}>
                <TechImage src={tech.image} alt={`${tech.name} logo`} />
                <TechnologyName>{tech.name}</TechnologyName>
              </div>
            ))}
          </TechnologyRow>
        </SectionContainer>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
