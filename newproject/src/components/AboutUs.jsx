import React, { useRef, useState } from "react";
import About1 from "../assets/About1.jpg";
import jagga from "../assets/jagga.png";
import arnab from "../assets/arnab.png";
import balram from "../assets/balram.png";
import Clients from "./Clients";
import Services from "./Services";
import styled from "styled-components";
import JasoosImg from "../assets/Jasoos.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Imgcards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Card = styled.div`
  font-family: Poppins;
  text-align: center;
  width: 200px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    border: 3px solid rgb(255, 255, 255);
  }

  p {
    margin: 10px 0;
    font-size: 1.5rem;
  }
`;

const CounterDiv = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 30px 0;

  div {
    background: #001437;
    color: white;
    padding: 20px;
    width:250px;
    border-radius: 10px;
    text-align: center;
    font-family: Poppins;
    font-size: 1rem;
  }

  .count {
    font-size: 2rem;
    font-weight: bold;
    color: #00ffcc;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

function AboutUs() {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true, // Run only once when in view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
<div
  className="mainAbout"
  id="AboutUs"
  ref={sectionRef}
  style={{
    margin: "0",
    paddingTop: "90px",
    background: "linear-gradient(to right, rgb(0, 11, 76), rgb(0, 19, 78))", // Fixed the syntax
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}
>

      <Row
        style={{
          alignItems: "center",
          height: "100%",
          paddingBottom:"30px"
        }}
      >
        <img
          style={{
            width: "20rem",
          }}
          src={JasoosImg}
          alt="About"
        />
        <div
          className="row1Img"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontFamily: "Anton",
              fontSize: "6rem",
              lineHeight: "100px",
            }}
          >
            WHO <br /> WE ARE
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              width: "300px",
              paddingTop: "10px",
            }}
          >
            Jasoos Esports organizes thrilling tournaments offering competitive
            opportunities with enticing prize pools.
          </p>
        </div>
      </Row>

      <CounterDiv ref={ref}>
        <div>
          <p>YouTube Subscribers</p>
          <p className="count">
            {inView && <CountUp start={0} end={8500} duration={2} separator="," />}+
          </p>
        </div>
        <div>
          <p>Instagram Followers</p>
          <p className="count">
            {inView && <CountUp start={0} end={1000} duration={2} separator="," />}+
          </p>
        </div>
        <div>
          <p>Discord Followers</p>
          <p className="count">
            {inView && <CountUp start={0} end={14000} duration={2} separator="," />}+
          </p>
        </div>
      </CounterDiv>

      <div
        className="Team"
        style={{
          paddingBottom: "30px",
          height: "100%",
          background: "linear-gradient(to right, #210044 0%, #001437 100%)",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Anton",
            fontSize: "4rem",
            margin: "30px",
          }}
        >
          OUR TEAM
        </p>
        <Imgcards>
          <Card>
            <img src={jagga} alt="Founder" />
            <p>JAGGA</p>
            <p
              style={{
                fontSize: "15px",
              }}
            >
              FOUNDER & CEO
            </p>
          </Card>

          <Card>
            <img src={balram} alt="Co-Founder" />
            <p>BALRAM</p>
            <p
              style={{
                fontSize: "15px",
              }}
            >
              CO-FOUNDER & COO
            </p>
          </Card>

          <Card>
            <img src={arnab} alt="Project Lead" />
            <p>ARNAB</p>
            <p
              style={{
                fontSize: "15px",
              }}
            >
              CO-FOUNDER & <br /> PROJECT LEAD
            </p>
          </Card>
        </Imgcards>
      </div>
      <Services />
    </div>
  );
}

export default AboutUs;
