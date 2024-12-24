// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://source.unsplash.com/random/1600x900') center/cover no-repeat;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <Title>Welcome to Our Image Gallery</Title>
    </HomeSection>
  );
};

export default Home;
