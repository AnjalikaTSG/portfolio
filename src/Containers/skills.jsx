import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faDesktop, faDatabase, faCodeBranch, faTools } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes, css } from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  flex: 1 1 calc(50% - 20px);
  box-sizing: border-box;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #484848;
  border: 3px solid #383838;
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333333;
  }
`;

const DropdownContent = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: ${props => (props.isOpen ? '200px' : '0px')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
`;

const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const DropdownList = styled.ul`
  margin: 10px 0;
  padding: 0;
  list-style: none;
  border: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')};
`;

const ListItem = styled.li`
  padding: 8px 10px;
  font-size: 16px;
  color: #484848;
  animation: ${props => props.isOpen && css`${fadeInSlideUp} 0.3s ease forwards, ${pulse} 1s ease infinite`};
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #EC4899;
`;

const Skills = () => {
  const [isWebDevOpen, setIsWebDevOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [isVersionControlOpen, setIsVersionControlOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);

  return (
    <SkillsContainer>
      <Title className="bold">Skills</Title>
      <CardContainer>
        <Card>
          <DropdownButton onClick={() => setIsWebDevOpen(!isWebDevOpen)}>
            <Icon icon={faDesktop} />
            Web & Mobile Development
            <Icon icon={isWebDevOpen ? faCaretUp : faCaretDown} style={{ marginLeft: 'auto' }} />
          </DropdownButton>
          <DropdownContent isOpen={isWebDevOpen}>
            <DropdownList isOpen={isWebDevOpen}>
              <ListItem isOpen={isWebDevOpen}>React</ListItem>
              <ListItem isOpen={isWebDevOpen}>React Native</ListItem>
              <ListItem isOpen={isWebDevOpen}>Node.js</ListItem>
              <ListItem isOpen={isWebDevOpen}>JavaScript</ListItem>
              <ListItem isOpen={isWebDevOpen}>HTML</ListItem>
              <ListItem isOpen={isWebDevOpen}>CSS</ListItem>
            </DropdownList>
          </DropdownContent>
        </Card>

        <Card>
          <DropdownButton onClick={() => setIsDatabaseOpen(!isDatabaseOpen)}>
            <Icon icon={faDatabase} />
            Database
            <Icon icon={isDatabaseOpen ? faCaretUp : faCaretDown} style={{ marginLeft: 'auto' }} />
          </DropdownButton>
          <DropdownContent isOpen={isDatabaseOpen}>
            <DropdownList isOpen={isDatabaseOpen}>
              <ListItem isOpen={isDatabaseOpen}>MYSQL</ListItem>
              <ListItem isOpen={isDatabaseOpen}>MSSQL</ListItem>
              <ListItem isOpen={isDatabaseOpen}>MongoDB</ListItem>
            </DropdownList>
          </DropdownContent>
        </Card>

        <Card>
          <DropdownButton onClick={() => setIsVersionControlOpen(!isVersionControlOpen)}>
            <Icon icon={faCodeBranch} />
            Version Control
            <Icon icon={isVersionControlOpen ? faCaretUp : faCaretDown} style={{ marginLeft: 'auto' }} />
          </DropdownButton>
          <DropdownContent isOpen={isVersionControlOpen}>
            <DropdownList isOpen={isVersionControlOpen}>
              <ListItem isOpen={isVersionControlOpen}>GIT</ListItem>
            </DropdownList>
          </DropdownContent>
        </Card>

        <Card>
          <DropdownButton onClick={() => setIsOtherOpen(!isOtherOpen)}>
            <Icon icon={faTools} />
            Other
            <Icon icon={isOtherOpen ? faCaretUp : faCaretDown} style={{ marginLeft: 'auto' }} />
          </DropdownButton>
          <DropdownContent isOpen={isOtherOpen}>
            <DropdownList isOpen={isOtherOpen}>
              <ListItem isOpen={isOtherOpen}>Figma</ListItem>
              <ListItem isOpen={isOtherOpen}>GIMP</ListItem>
              <ListItem isOpen={isOtherOpen}>Blender</ListItem>
              <ListItem isOpen={isOtherOpen}>Postman</ListItem>
            </DropdownList>
          </DropdownContent>
        </Card>
      </CardContainer>
    </SkillsContainer>
  );
};

export default Skills;
