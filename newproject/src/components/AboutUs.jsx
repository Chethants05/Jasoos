import React, { useRef } from "react";
import About1 from "../assets/About1.jpg";
import jagga from "../assets/jagga.png";
import arnab from "../assets/arnab.png";
import balram from "../assets/balram.png";
import Clients from "./Clients";
import Services from "./Services";
import styled from "styled-components";
import JasoosImg from '../assets/Jasoos.png'

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
    border: 5px solid rgb(105, 0, 109);
  }

  p {
    margin: 10px 0;
    font-size: 1.5rem;
  }
`;

function AboutUs() {
  const sectionRef = useRef(null);

  return (
    <div
      className="mainAbout"
      id="AboutUs"
      ref={sectionRef}
      style={{
        margin: "0",
        paddingTop: "90px",
        background: "rgb(2, 36, 68)",
        color: "white",
        display: "flex",
        width: "100vw",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        gap: "30px",
      }}
    >
      <Row style={{
        alignItems:"center"
      }}>
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
              lineHeight: "90px",
            }}
          >
            WHO <br /> WE ARE
          </p>
          <p
            style={{
              fontFamily: "Poppins",
            }}
          >
            TEXT
          </p>
        </div>
      </Row>

      

      <div
        className="Team"
        style={{
          paddingBottom: "30px",
        }}
      >
        <p
          style={{
            fontFamily: "Anton",
            fontSize: "5rem",
            margin: "30px",
          }}
        >
          OUR TEAM
        </p>
        <Imgcards>
          <Card>
            <img src={jagga} alt="Founder" />
            <p>JAGGA</p>
            <p style={{
              fontSize:"15px",
            }}>FOUNDER & CEO</p>
          </Card>

          <Card>
            <img src={balram} alt="Co-Founder" />
            <p>BALRAM</p>
            <p style={{
              fontSize:"15px",
            }}>CO-FOUNDER & COO</p>
          </Card>

          <Card>
            <img src={arnab} alt="Project Lead" />
            <p>ARNAB</p>
            <p style={{
              fontSize:"15px",
            }}>
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
