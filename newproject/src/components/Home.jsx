import React from 'react';
import MainImg from '../assets/mainImg.png';

function Home() {
  return (
    <div
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
          lineHeight: "90px",
          marginTop: "150px",
          color: "white",
          letterSpacing: "2px",
        }}
      >
        WEBSITE NAME <br />
        ESPORTS
      </div>
      <img
        src={MainImg}
        alt="Main"
        style={{
          width: "80%",
          marginTop: "-130px",
        }}
      />
    </div>
  );
}

export default Home;
