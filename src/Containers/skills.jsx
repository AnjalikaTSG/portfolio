import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faDesktop, faDatabase, faCodeBranch, faTools } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [isWebDevOpen, setIsWebDevOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [isVersionControlOpen, setIsVersionControlOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);

  return (
    <div style={styles.skillsContainer}>
      <h1 className="bold" style={styles.title}>Skills</h1>
      <div style={styles.gridContainer}>
        <div style={styles.skillCategory}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsWebDevOpen(!isWebDevOpen)}
          >
            <FontAwesomeIcon icon={faDesktop} style={styles.icon} />
            Web & Mobile Development
            <FontAwesomeIcon
              icon={isWebDevOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }} // Added marginLeft: 'auto' to push icon to the right
            />
          </button>
          {isWebDevOpen && (
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>React</li>
              <li style={styles.listItem}>React Native</li>
              <li style={styles.listItem}>Node.js</li>
              <li style={styles.listItem}>JavaScript</li>
              <li style={styles.listItem}>HTML</li>
              <li style={styles.listItem}>CSS</li>
            </ul>
          )}
        </div>

        <div style={styles.skillCategory}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsDatabaseOpen(!isDatabaseOpen)}
          >
            <FontAwesomeIcon icon={faDatabase} style={styles.icon} />
            Database
            <FontAwesomeIcon
              icon={isDatabaseOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }} // Added marginLeft: 'auto' to push icon to the right
            />
          </button>
          {isDatabaseOpen && (
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>MYSQL</li>
              <li style={styles.listItem}>MSSQL</li>
              <li style={styles.listItem}>MongoDB</li>
            </ul>
          )}
        </div>

        <div style={styles.skillCategory}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsVersionControlOpen(!isVersionControlOpen)}
          >
            <FontAwesomeIcon icon={faCodeBranch} style={styles.icon} />
            Version Control
            <FontAwesomeIcon
              icon={isVersionControlOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }} // Added marginLeft: 'auto' to push icon to the right
            />
          </button>
          {isVersionControlOpen && (
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>GIT</li>
            </ul>
          )}
        </div>

        <div style={styles.skillCategory}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsOtherOpen(!isOtherOpen)}
          >
            <FontAwesomeIcon icon={faTools} style={styles.icon} />
            Other
            <FontAwesomeIcon
              icon={isOtherOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }} // Added marginLeft: 'auto' to push icon to the right
            />
          </button>
          {isOtherOpen && (
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>Figma</li>
              <li style={styles.listItem}>GIMP</li>
              <li style={styles.listItem}>Blender</li>
              <li style={styles.listItem}>Postman</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  skillsContainer: {
    padding: '20px',
  },
  title: {
    color: 'white',
    marginBottom: '30px', // Space between h2 and gridContainer
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  skillCategory: {
    marginBottom: '10px',
  },
  dropdownButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#C6FAD2',
    border: '3px solid #DD9BCF', // Thick border with the specified color
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
  },
  dropdownList: {
    margin: '10px 0',
    padding: '0',
    listStyle: 'none',
    border: 'none',
  },
  listItem: {
    padding: '8px 10px',
    fontSize: '16px',
    color: '#DD9BCF',
  },
  icon: {
    marginRight: '10px',
    color: '#EC4899',
  },
};

export default Skills;
