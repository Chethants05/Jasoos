import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding-bottom: 40px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  text-align: center;

 background: "linear-gradient(to right, rgb(0, 11, 76), rgb(0, 19, 78))";
  align-items: center;
  justify-content: center;

  height: 100vh; /* Default for desktop mode */

  @media (max-width: 768px) {
    height: 100%; /* Adjusted for mobile view */
  }
`;

const Title = styled.p`
  font-family: Anton;
  font-size: 4rem;
  color: white;
  margin: 30px 0;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-family: Poppins;
  line-height: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MiniContainer = styled.div`
  height: 180px;
  width: 150px;
  color: white;
  padding: 20px 15px 15px 15px;
  border-radius: 15px;
  background-color: #001437;
`;

const MiniTitle = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;

const MiniText = styled.p`
  font-size: 12px;
`;

function Services() {
  return (
    <Container id="services">
      <div className="mainCont">
        <Title>OUR SERVICES</Title>
        <Cont>
          <MiniContainer>
            <MiniTitle>Tournament Management</MiniTitle>
            <MiniText>
              Efficiently organizing esports tournaments with seamless scheduling
              and results tracking.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <MiniTitle>eSports Production</MiniTitle>
            <MiniText>
              Providing professional broadcasting and streaming for immersive esports
              experiences.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <MiniTitle>GFX</MiniTitle>
            <MiniText>
              Designing eye-catching visuals for events, branding, and promotions.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <MiniTitle>Offline Event</MiniTitle>
            <MiniText>
              Hosting engaging in-person esports events with live competitions and
              audience interaction.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <MiniTitle>Brand Integration</MiniTitle>
            <MiniText>
              Integrating brands and sponsors to maximize visibility and audience
              connection.
            </MiniText>
          </MiniContainer>
        </Cont>
      </div>
    </Container>
  );
}

export default Services;
