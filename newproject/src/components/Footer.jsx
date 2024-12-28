import React from 'react'

function Footer() {
  return (
    <footer
    style={{
      backgroundColor: "#1a1a1a",
      color: "white",
      padding: "40px 20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }}
  >
    {/* About Us Section */}
    <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
      <h3 style={{ fontFamily: "Poppins", marginBottom: "15px" }}>
        About Us
      </h3>
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "14px",
          lineHeight: "1.8",
          marginBottom: "20px",
        }}
      >
        Your content goes here. Edit or remove this text inline or in the
        module Content settings. Style this content as needed in the Design
        module.
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <a
          href="#"
          style={{
            color: "white",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-facebook"></i> {/* Facebook */}
        </a>
        <a
          href="#"
          style={{
            color: "white",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-twitter"></i> {/* Twitter */}
        </a>
        <a
          href="#"
          style={{
            color: "white",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-linkedin"></i> {/* LinkedIn */}
        </a>
        <a
          href="#"
          style={{
            color: "white",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-instagram"></i> {/* Instagram */}
        </a>
      </div>
    </div>


    {/* Contact Form Section */}
    <div style={{ flex: "1", minWidth: "300px" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backgroundColor: "#262626",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Name"
            style={{
              flex: "1",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#333333",
              color: "white",
              fontFamily: "Poppins",
            }}
          />
          <input
            type="text"
            placeholder="Phone"
            style={{
              flex: "1",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#333333",
              color: "white",
              fontFamily: "Poppins",
            }}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#333333",
            color: "white",
            fontFamily: "Poppins",
          }}
        />
        <input
          type="text"
          placeholder="Service"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#333333",
            color: "white",
            fontFamily: "Poppins",
          }}
        />
        <textarea
          placeholder="Message"
          rows="3"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#333333",
            color: "white",
            fontFamily: "Poppins",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#E63946",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#C5303C")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#E63946")}
        >
          Submit Now
        </button>
      </form>
    </div>
  </footer>
  )
}

export default Footer
