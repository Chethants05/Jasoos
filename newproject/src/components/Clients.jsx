import React from 'react'
import logo1 from '../assets/lysto.webp'
import logo2 from '../assets/burnghost_logo.jpeg'
import logo3 from '../assets/ignite.png'
import logo4 from '../assets/rummy.png'
import logo5 from '../assets/sandbox_logo.webp'

function Clients() {
  return (
    <div style={{
        width:"100vw",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        fontFamily:"Anton",
        color:"white",
        marginBottom:"50px"
    }}>
        <div className="ClientText" style={{
            fontSize:"4rem",
            marginBottom:"30px"
        }}>
            OUR CLIENTS
        </div>

        <div className="ClientCards" style={{
            display:"flex",
            gap:"20px", 
        }}>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                // mixBlendMode:"screen"
            }} src={logo1} alt="" />
            </div>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                // mixBlendMode:"screen"
            }} src={logo2} alt="" />
            </div>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                // mixBlendMode:"screen"
            }} src={logo3} alt="" />
            </div>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                // mixBlendMode:"screen"
            }} src={logo4} alt="" />
            </div>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                // mixBlendMode:"screen"
            }} src={logo5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Clients
