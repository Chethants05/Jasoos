import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ImageUploadAndDisplay from "../imageupload";

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

const LoginContainer = styled.div`
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

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

const UploadButton = styled(Button)``;

const UploadPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      await axios.post("http://localhost:5000/uploads", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Image uploaded successfully!");
      setSelectedFile(null);
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  if (!isLoggedIn) {
    return (
      <Container>
        <Header>Login</Header>
        <LoginContainer>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </LoginContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header>Upload Image</Header>
      <Form onSubmit={handleImageUpload}>
        <FileInput
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          accept="image/*"
        />
        <UploadButton type="submit">Upload</UploadButton>
      </Form>
      <ImageUploadAndDisplay />
    </Container>
  );
};

export default UploadPage;
