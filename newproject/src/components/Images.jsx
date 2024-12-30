import React, { useState, useEffect } from "react";
import axios from "axios";

const Images = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Change this endpoint to the correct one for your backend
        const response = await axios.get("http://localhost:5000/api/images"); // Ensure the endpoint matches your API
        setImages(response.data); // Assuming response.data is an array of image objects
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
            zIndex: 1, // Ensure it is above the images
          }}
        >
          &#8592;
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
            <div
              key={image._id}
              style={{
                position: "relative",
                flex: "0 0 100%",
                borderRadius: "10px",
                overflow: "hidden",
                textAlign: "center",
                transform: index === currentIndex ? "scale(1.1)" : "scale(0.9)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={image.imageUrl} // Ensure this matches your data structure
                alt={image.name} // Ensure the image object contains a name
                style={{ width: "30vw" }}
              />
              {image.description && (
                <p style={{ padding: "10px", fontSize: "14px", color: "#555" }}>
                  {image.description}
                </p>
              )}
            </div>
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
            zIndex: 1, // Ensure it is above the images
          }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Images;
