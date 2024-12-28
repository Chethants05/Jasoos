import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div style={{
      marginTop:"-80px",
      padding:"0",
      display:"flex",
      width:"100vw",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      // justifyContent:"center",
      textAlign:"center",
    }}>
      <div className="heroText" style={{
        fontFamily:"Anton",
        fontSize:"4rem",
        lineHeight:"90px",
        marginTop:"150px",
        color:"white",
        letterSpacing:"2px"
      }}>
        IMAGES
      </div>
    <div
      id="images"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        padding: "20px",
      }}
    >
      {images.map((image) => (
        <div
          key={image._id}
          style={{
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={image.imageUrl}
            alt={image.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {image.description && (
            <p style={{ padding: "10px", fontSize: "14px", color: "#555" }}>
              {image.description}
            </p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Images;
