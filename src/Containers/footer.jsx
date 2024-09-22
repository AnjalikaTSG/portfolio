import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 50px; /* Ensure space above the footer */
  
`;

const FooterText = styled.p`
  margin: 10px 0 0; /* Add margin above the text, remove default margin */
  font-size: 14px;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 3px solid #555; /* Adjust color and thickness of the line */
  margin: 0 0 10px; /* Add margin below the line */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <HorizontalLine />
      <FooterText>© 2024 Gihani Anjalika. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
