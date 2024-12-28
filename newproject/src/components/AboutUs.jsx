import React from 'react'
import About1 from '../assets/About1.jpg'

function AboutUs() {
  return (
    <>
    <div className="mainAbout" style={{
      margin:"0",
      padding:"0",
      background: "rgb(2, 36, 68)",
      color:"white",
      display:"flex",
      width:"100vw",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      position:"relative",
      gap:"30px"
      // border:"1px solid red"
    }}>
      <div className="row1" style={{
        // border:"1px solid red",  
        display:"flex",
        gap:"50px",
        // alignItems:"center",
        justifyContent:"center",
        textAlign:"Left"
      }}>
        <img style={{
          width:"50%"
        }} src={About1} />
        <div className="row1Img" style={{
          display:"flex",
          flexDirection:"column",
        }}>
          <p style={{
            fontFamily:"Anton",
            fontSize:"6rem",
            lineHeight:"90px",
          }}>WHO <br /> WE ARE</p>
          <p style={{
            fontFamily:"Poppins"
          }}>TEXT</p>
        </div>
      </div>
      
      <div className="row2" style={{
        // border:"1px solid red",
        display:"flex",
        gap:"50px",
        // alignItems:"center",
        justifyContent:"center",
        textAlign:"Left",
      }}>
        <div className="row1Img" style={{
          display:"flex",
          flexDirection:"column",
        }}>
          <p style={{
            fontFamily:"Anton",
            fontSize:"6rem",
            lineHeight:"90px",
          }}>WHO <br /> WE ARE</p>
          <p style={{
            fontFamily:"Poppins"
          }}>TEXT</p>
        </div>
          <img style={{
          width:"50%"
        }} src={About1} />
      </div>
      

      

    </div>
    </>
  )
}

export default AboutUs
