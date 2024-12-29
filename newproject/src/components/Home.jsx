import React, { useEffect, useState } from 'react';
import MainImg from '../assets/mainImg.png';


function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Add delay for animation
  }, []);

  return (
    <div
      id="home"
      style={{
        margin: "0",
        padding: "0",
        display: "flex",
        width: "100vw",
        height: "110vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        className="heroText"
        style={{
          fontFamily: "Anton",
          fontSize: "6rem",
          lineHeight: "100px",
          marginTop: "150px",
          color: "white",
          letterSpacing: "2px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        JASOOS <br />
        ESPORTS
      </div>
      <div className="imgg">
      <img
        src={MainImg}
        alt="Main"
        style={{
          width: "80%",
          marginTop: "-130px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 1s ease, transform 1s ease',
          position:"relative",
        }}
      />
      <img src="" alt="" />
      </div>
    </div>
  );
}

export default Home;
