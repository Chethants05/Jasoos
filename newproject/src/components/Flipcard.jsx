import React, { useState } from "react";

const FlipCard = ({ image, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleHover = () => {
    setFlipped(!flipped);
  };

  const flipCardStyle = {
    backgroundColor: "transparent",
    width: "190px",
    height: "254px",
    perspective: "1000px",
    fontFamily: "sans-serif",
    cursor: "pointer", // Adding cursor to indicate hoverability
  };

  const flipCardInnerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const flipCardSideStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "1rem",
    boxShadow: "0 8px 14px 0 rgba(0,0,0,0.2)",
  };

  const flipCardFrontStyle = {
    ...flipCardSideStyle,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "transparent", // Hide text on front
  };

  const flipCardBackStyle = {
    ...flipCardSideStyle,
    background: "linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%)",
    color: "white",
    transform: "rotateY(180deg)",
  };

  return (
    <div
      style={flipCardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div style={flipCardInnerStyle}>
        <div style={flipCardFrontStyle}></div> {/* Front with image */}
        <div style={flipCardBackStyle}>
          <p>{description}</p> {/* Back with description */}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
