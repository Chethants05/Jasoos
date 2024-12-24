// src/components/Images.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/models/images.js");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <Gallery id="images">
      {images.map((image) => (
        <ImageWrapper key={image._id}>
          <Image src={image.imageUrl} alt={image.name} />
        </ImageWrapper>
      ))}
    </Gallery>
  );
};

export default Images;
