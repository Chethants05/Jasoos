// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px;
  text-align: center;
  background-color: #f3f4f6;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const AboutUs = () => {
  return (
    <AboutSection id="about">
      <Title>About Us</Title>
      <Description>
        We are dedicated to showcasing beautiful images and providing a platform for sharing creativity.
      </Description>
    </AboutSection>
  );
};

export default AboutUs;
