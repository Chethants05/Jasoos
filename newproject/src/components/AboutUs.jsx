import React, { useEffect, useState, useRef } from 'react';
import About1 from '../assets/About1.jpg';
import UserImg from '../assets/user.jpg';
import Clients from './Clients';
import jagga from '../assets/jagga.png'
import arnab from '../assets/arnab.png'
import balram from '../assets/balram.png'
import Services from './Services'
<<<<<<< HEAD
import styled from 'styled-components'
const Imgcards = styled.div`
    display: flex;
    flex-direction:row;
    gap: 35px;
    @media(max-width:800px){
    flex-direction:column}
    `;
=======
import JasoosImg from '../assets/Jasoos.png'

>>>>>>> 4699bef44355d929f406453e923af45e002beb27
function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
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
        <div
          className="row1"
          style={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            alignItems:"center",
            textAlign: "Left",
            transform: isVisible ? "translateX(0)" : "translateX(-100px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          <img
            style={{
              width: "30%",
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
        </div>

        <div>
          <p>FOLLOW US!</p>
          <div className="socialIcons">
            
          </div>
        </div>

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
            {/* Team Card */}
            <div
              className="card"
              style={{
                fontFamily: "Poppins",
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease",
              }}
            >
              <img
                src={jagga}
                alt="Founder"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "20px",
                  border: "5px solid rgb(105, 0, 109)",
                }}
              />
              <p
                style={{
                  fontSize: "1.5rem",
                }}
              >
                JAGGA
              </p>
              <p>FOUNDER & CEO</p>
            </div>

            <div
              className="card"
              style={{
                fontFamily: "Poppins",
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease 0.2s", // Slight delay for staggered effect
              }}
            >
              <img
                src={balram}
                alt="Co-Founder"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "20px",
                  border: "5px solid rgb(105, 0, 109)",
                }}
              />
              <p
                style={{
                  fontSize: "1.5rem",
                }}
              >
                BALRAM
              </p>
              <p>CO-FOUNDER &  COO</p>
            </div>

            <div
              className="card"
              style={{
                fontFamily: "Poppins",
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease 0.4s", // Further delay for staggered effect
              }}
            >
              <img
                src={arnab}
                alt="Project Lead"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "20px",
                  border: "5px solid rgb(105, 0, 109)",
                }}
              />
              <p
                style={{
                  fontSize: "1.5rem",
                }}
              >
                ARNAB
              </p>
              <p>CO-FOUNDER & <br /> PROJECT LEAD</p>
            </div>
          </Imgcards>
        </div>
        <Services />
        <Clients />
      </div>
    </>
  );
}

export default AboutUs;
