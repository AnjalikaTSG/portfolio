"use client";
import React from "react";
import CVImage from "../Images/CV.png";
import { TypeAnimation } from "react-type-animation";
import AboutFront from "./aboutFront";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 30px;
  font-family: sans-serif;
  position: relative;
  animation: showRight 1s ease forwards;
  animation-delay: 1.6s;

  @keyframes showRight {
    from {
      opacity: 0;
      transform: translateX(-50px); /* Starting from the left */
    }
    to {
      opacity: 1;
      transform: translateX(0); /* Ending at the original position */
    }
  }
`;


const PageCon = styled.div`
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextSection = styled.div`
  flex: 1;
  color: #FFFFFF;
  margin-right: 30px;
  max-width: 800px;
  min-height: 250px;

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100%;
  }
`;

const HiSection = styled.h1`
  margin-bottom: 30px;
  text-align: left;
  font-size: 36px;
  line-height: 1.2;

  .gradientText {
    background: linear-gradient(to right, #C6FAD2, #DD9BCF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const HiSectionParagraph = styled.p`
  color: #F2FDEF;
  font-size: 18px;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 20px;

   span {
    color: #00BFFF; /* Set the color for specific text */
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  text-align: left;
  margin-top: 20px;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: right;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    img {
      max-width: 300px;
    }
  }
`;

const CVImageStyled = styled.img`
  max-width: 100%;
  height: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Button = styled.a`
  position: relative;
  background: transparent;
  color: #00BFFF; /* Initial text color */
  border: 2px solid #00BFFF; /* Border with the same color as the text */
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.4s ease; /* Smooth transition for background, border, and text color */
  cursor: pointer;
  width: 200px;
  text-align: center;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background-color: #00BFFF; /* The background color to fill on hover */
    color: #FFFFFF; /* Text color changes to white when background is filled */
    border-color: transparent; /* Hide the border when background is filled */
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    width: 250px;
    padding: 14px 28px;
    font-size: 18px;
  }
`;


const Home = () => {
  return (
    <PageContainer>
      <PageCon id="home">
        <Container>
          <TextSection>
            <HiSection>
              <span className="gradientText">Hi, I'm </span>
              <TypeAnimation
                sequence={[
                  "Gihani",
                  1000,
                  "Mobile Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </HiSection>
            <HiSectionParagraph>
              <span>Undergraduate</span><br />
              Reading for B.Sc. (Hons) Degree in Information Technology & Management (Expected in 2026)<br />
              University of Moratuwa
            </HiSectionParagraph>
            <ButtonContainer>
              <Button href="mailto:gihanianjalika08@gmail.com">Hire Me</Button>
              <Button href="/SE Intern CV.pdf" download>Download CV</Button>
            </ButtonContainer>
          </TextSection>
          <ImageSection>
            <CVImageStyled src={CVImage} alt="CV" />
          </ImageSection>
        </Container>
      </PageCon>
      <div id="about">
        <AboutFront />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </PageContainer>
  );
};

export default Home;
