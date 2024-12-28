import React, { useEffect, useState, useRef } from 'react';
import About1 from '../assets/About1.jpg';
import UserImg from '../assets/user.jpg';
import Clients from './Clients';

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
            textAlign: "Left",
            transform: isVisible ? "translateX(0)" : "translateX(-100px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          <img
            style={{
              width: "50%",
            }}
            src={About1}
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

        <div
          className="row2"
          style={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            textAlign: "Left",
            transform: isVisible ? "translateX(0)" : "translateX(100px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
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
          <img
            style={{
              width: "50%",
            }}
            src={About1}
            alt="About"
          />
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
          <div
            className="imgcards"
            style={{
              display: "flex",
              gap: "35px",
            }}
          >
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
                src={UserImg}
                alt="Founder"
                style={{
                  width: "200px",
                  height: "220px",
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
              <p>FOUNDER & <br /> CEO</p>
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
                src={UserImg}
                alt="Co-Founder"
                style={{
                  width: "200px",
                  height: "220px",
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
              <p>CO-FOUNDER & <br /> COO</p>
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
                src={UserImg}
                alt="Project Lead"
                style={{
                  width: "200px",
                  height: "220px",
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
          </div>
        </div>
        <Clients />
      </div>
    </>
  );
}

export default AboutUs;
