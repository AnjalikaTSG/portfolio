// Home.jsx
"use client";
import React from "react";
import CVImage from "../Images/CV.png";
import { TypeAnimation } from "react-type-animation";
import AboutFront from "./aboutFront";

const Home = () => {
  return (
    <div className="pageContainer">
      <div className="pageCon">
        <style>
          {`
            .pageContainer {
              margin: 30px;
              font-family: 'Didot', serif;
              position: relative;
            }

            .pageCon {
              margin-bottom: 50px;
            }

            .container {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              margin-top: 20px;
            }

            .textSection {
              flex: 1;
              color: #FFFFFF;
              margin-right: 30px;
              max-width: 800px;
              min-height: 250px;
            }

            .hiSection {
              margin-bottom: 30px;
              text-align: left;
              font-size: 36px;
              line-height: 1.2;
            }

            .hiSection .gradientText {
              background: linear-gradient(to right, #C6FAD2, #DD9BCF);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .hiSection .plainText {
              color: #FFFFFF;
            }

            .hiSectionParagraph {
              color: #F2FDEF;
              font-size: 18px;
              line-height: 1.6;
              text-align: left;
              margin-bottom: 20px;
            }

            .imageSection {
              flex: 1;
              text-align: left;
              margin-top: 20px;
              max-width: 500px;
            }

            .cvImage {
              max-width: 100%;
              height: auto;
            }

            .buttonContainer {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }

            .hireBut,
            .downloadBut {
              background: linear-gradient(to right, #C6FAD2, #DD9BCF);
              color: #000000;
              border: 1px solid transparent;
              padding: 12px 24px;
              font-size: 16px;
              border-radius: 5px;
              transition: all 0.3s ease;
              cursor: pointer;
              width: 200px;
              text-align: center;
              text-decoration: none;
            }

            .hireBut:hover,
            .downloadBut:hover {
              color: #FFFFFF;
              border-color: transparent;
            }

            @media (max-width: 768px) {
              .container {
                flex-direction: column;
                align-items: flex-start;
              }

              .textSection {
                margin-right: 0;
                max-width: 100%;
              }

              .hiSection {
                text-align: left;
              }

              .hiSectionParagraph {
                font-size: 16px;
                max-width: 100%;
              }

              .imageSection {
                max-width: 100%;
                text-align: right;
                margin-left: 0;
              }

              .cvImage {
                max-width: 100%;
              }

              .buttonContainer {
                flex-direction: column;
              }

              .hireBut,
              .downloadBut {
                width: 100%;
                padding: 10px 20px;
                font-size: 14px;
              }
            }

            @media (max-width: 480px) {
              .hiSection {
                font-size: 24px;
              }

              .hiSectionParagraph {
                font-size: 14px;
                max-width: 100%;
              }

              .cvImage {
                max-width: 300px;
                align-item: center;
              }
            }

            @media (min-width: 1200px) {
              .container {
                flex-direction: row;
                align-items: center;
              }

              .textSection {
                margin-right: 30px;
                text-align: left;
              }

              .imageSection {
                margin-left: 30px;
                margin-right: 0;
              } 

              .hireBut,
              .downloadBut {
                width: 250px;
                padding: 14px 28px;
                font-size: 18px;
              }
            }
          `}
        </style>
        <div className="container">
          <div className="textSection">
            <h1 className="hiSection">
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
            </h1>
            <p className="hiSectionParagraph">
              Undergraduate<br/>
              Reading for B.SC. (Hons) Degree in Information Technology & Management (Expected in 2026)<br/>
              University of Moratuwa
            </p>
            <div className="buttonContainer">
              <a href="mailto:gihanianjalika08@gmail.com" className="hireBut">Hire Me</a>
              <a href="/SE Intern CV.pdf" download className="downloadBut">Download CV</a>
            </div>
          </div>
          <div className="imageSection">
            <img src={CVImage} alt="CV" className="cvImage" />
          </div>
        </div>
      </div>
      <AboutFront/>
    </div>
  );
};

export default Home;
