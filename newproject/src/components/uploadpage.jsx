import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ImageUploadAndDisplay from "../imageupload";
import AdminLogin from "./AdminLogin";
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
`;

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  white-space: pre-wrap;
`;

const FileInput = styled(Input)`
  border: 2px dashed #cbd5e0;
  background: #edf2f7;
`;

const Button = styled.button`
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

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile || !description) {
      alert("Please provide both an image and a description.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:5000/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Image uploaded successfully!");
      setSelectedFile(null);
      setDescription("");
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Error uploading image. Please try again.");
    }
  };
  // if (!isAdmin) {
  //   return <AdminLogin onLogin={setIsAdmin} />;
  // }

  return (
    <Container>
      <Header>Upload Image</Header>
      <Form onSubmit={handleImageUpload}>
        <FileInput
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          accept="image/*"
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Upload</Button>
      </Form>
      <ImageUploadAndDisplay />
    </Container>
  );
};

export default UploadPage;
