import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";


// Keyframe for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Container = styled.div`
  font-family: "Arial, sans-serif";
  padding: 30px;
  text-align: center;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2d3748;
  animation: ${fadeIn} 1s ease-out;
`;

const Form = styled.form`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const FileInput = styled.input`
  padding: 10px;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  background: #edf2f7;
  font-size: 1rem;
  color: #4a5568;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #4a5568;
  }
`;

const UploadButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #357abd;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.p`
  font-size: 1rem;
  color: #718096;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 1rem;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const ImageUploadAndDisplay = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/models/images.js");
      setImages(response.data);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("http://localhost:5000/uploads", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImages((prevImages) => [...prevImages, response.data]);
      setSelectedFile(null);
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const handleImageDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/models/images/${id}`);
      setImages((prevImages) => prevImages.filter((image) => image._id !== id));
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  };

  return (
    <Container>
      <Header>Image Upload and Gallery</Header>

      <Form onSubmit={handleImageUpload}>
        <FileInput
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          accept="image/*"
        />
        <UploadButton type="submit">Upload</UploadButton>
      </Form>

      {images.length > 0 ? (
        <Gallery>
          {images.map((image) => (
            <ImageWrapper key={image._id}>
              <Image src={image.imageUrl} alt={image.name} />
              <DeleteButton onClick={() => handleImageDelete(image._id)}>×</DeleteButton>
            </ImageWrapper>
          ))}
        </Gallery>
      ) : (
        <Placeholder>No images uploaded yet. Start by uploading some!</Placeholder>
      )}
    </Container>
  );
};

export default ImageUploadAndDisplay;