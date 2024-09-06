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
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsWebDevOpen(!isWebDevOpen)}
          >
            <FontAwesomeIcon icon={faDesktop} style={styles.icon} />
            Web & Mobile Development
            <FontAwesomeIcon
              icon={isWebDevOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }}
            />
          </button>
          <div style={{ ...styles.dropdownContent, maxHeight: isWebDevOpen ? '200px' : '0px' }}>
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>React</li>
              <li style={styles.listItem}>React Native</li>
              <li style={styles.listItem}>Node.js</li>
              <li style={styles.listItem}>JavaScript</li>
              <li style={styles.listItem}>HTML</li>
              <li style={styles.listItem}>CSS</li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsDatabaseOpen(!isDatabaseOpen)}
          >
            <FontAwesomeIcon icon={faDatabase} style={styles.icon} />
            Database
            <FontAwesomeIcon
              icon={isDatabaseOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }}
            />
          </button>
          <div style={{ ...styles.dropdownContent, maxHeight: isDatabaseOpen ? '150px' : '0px' }}>
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>MYSQL</li>
              <li style={styles.listItem}>MSSQL</li>
              <li style={styles.listItem}>MongoDB</li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsVersionControlOpen(!isVersionControlOpen)}
          >
            <FontAwesomeIcon icon={faCodeBranch} style={styles.icon} />
            Version Control
            <FontAwesomeIcon
              icon={isVersionControlOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }}
            />
          </button>
          <div style={{ ...styles.dropdownContent, maxHeight: isVersionControlOpen ? '50px' : '0px' }}>
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>GIT</li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <button
            style={styles.dropdownButton}
            onClick={() => setIsOtherOpen(!isOtherOpen)}
          >
            <FontAwesomeIcon icon={faTools} style={styles.icon} />
            Other
            <FontAwesomeIcon
              icon={isOtherOpen ? faCaretUp : faCaretDown}
              style={{ ...styles.icon, marginLeft: 'auto' }}
            />
          </button>
          <div style={{ ...styles.dropdownContent, maxHeight: isOtherOpen ? '200px' : '0px' }}>
            <ul style={styles.dropdownList}>
              <li style={styles.listItem}>Figma</li>
              <li style={styles.listItem}>GIMP</li>
              <li style={styles.listItem}>Blender</li>
              <li style={styles.listItem}>Postman</li>
            </ul>
          </div>
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
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    flex: '1 1 calc(50% - 20px)',
    boxSizing: 'border-box',
    marginBottom: '20px',
    border: '3px solid #DD9BCF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    background: '#484848',
    textAlign: 'center',
    padding: '16px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
  },
  dropdownButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#484848',
    border: '3px solid #DD9BCF',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
  },
  dropdownContent: {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
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
