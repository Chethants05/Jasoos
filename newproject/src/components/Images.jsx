import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  flex: 0 0 100%;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(0.9)")};
  transition: transform 0.3s ease;
  margin-top:55px;
  @media(max-width:500px){
    margin-top:25px;
  }
    @media(min-width:500px) and (max-width:800px){
    margin-top:0px;
  }  
  
`;

const Photo=styled.img`
  
    padding-top: 20px;
    width: 100%;
    max-width: 35vw;
    object-fit: cover;
    position:relative;
    @media(max-width:500px){
    max-width:75vw;
  }
    @media(min-width:500px) and (max-width:800px){
    max-width:55vw;
    margin-top:40px;
  }             
`;

const DescriptionOverlay = styled.div`
  position: absolute;
  bottom: 4px;
  left: 50%; /* Start from the center */
  transform: translateX(-50%); /* Center horizontally */
  width: 35vw; /* Match the parent's (image's) width */
  height: 35vw; /* Match the image's height */
  background-color: rgba(0, 0, 0, 0.77);
  color: white;
  display: ${(props) => (props.isVisible ? "flex" : "none")}; /* Only show when visible */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-family: "Poppins";
  padding: 10px;
  white-space: pre-wrap;
  overflow-y: auto; /* Enable scrolling for long text */
  box-sizing: border-box;
  z-index: 2; /* Ensure it's above the image */
  @media(max-width:500px){
    width:75vw;
    height: 75vw;
    padding:195px 15px 15px 15px;
    font-size:7px;
  }
    @media(min-width:500px) and (max-width:800px){
    width:60vw;
    height: 60vw;
    padding:55px 15px 15px 15px;
    font-size:9px;
  }
  
`;




const Images = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/images-with-descriptions"
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleDescription = (index) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  if (images.length === 0) {
    return <p style={{ color: "white", fontSize: "20px" }}>Loading images...</p>;
  }

  return (
    <div
      id="images"
      style={{
        marginTop: "-80px",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        width: "100vw",
        height: "120vh",
        overflow: "hidden",
      }}
    >
      <div
        className="heroText"
        style={{
          fontFamily: "Anton",
          fontSize: "4rem",
          lineHeight: "90px",
          marginTop: "150px",
          color: "white",
          letterSpacing: "2px",
        }}
      >
        TOURNAMENTS
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "80%",
          height: "60%",
        }}
      >
        {/* Prev Button */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "white",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          &#10094;
        </button>

        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: "100%",
          }}
        >

          {images.map((image, index) => (
            <ImageContainer
              key={image._id}
              isActive={index === currentIndex}
              onClick={() => toggleDescription(index)}
            >

              <Photo
                src={`data:${image.image.contentType};base64,${btoa(
                  new Uint8Array(image.image.data.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                  )
                )}`}
                alt={image.name}
                
                
              />
              
              {image.description && (
                <DescriptionOverlay
                  isVisible={visibleDescriptionIndex === index}
                >
                  {image.description}
                </DescriptionOverlay>
              )}
              
            </ImageContainer>
            
          ))}
        
        </div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "white",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          &#10095;
        </button>
      </div>
      <p style={{
        fontFamily:"Poppins",
        fontSize:"10px",
        color:"white"
      }}>Click Image For More Info</p>
    </div>
  );
};

export default Images;
