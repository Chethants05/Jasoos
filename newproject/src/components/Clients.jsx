import React from 'react'
import Lysto from '../assets/lysto.webp'

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
                mixBlendMode:"screen"
            }} src={Lysto} alt="" />
            </div>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                mixBlendMode:"screen"
            }} src={Lysto} alt="" />
            </div>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                mixBlendMode:"screen"
            }} src={Lysto} alt="" />
            </div>
            <div className="card">
                <img  style={{
                height:"200px",
                width:"200px",
                mixBlendMode:"screen"
            }} src={Lysto} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Clients
