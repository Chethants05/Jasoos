import React from 'react'
import styled from 'styled-components'
const Cont=styled.div`
    display: flex;
    flex-direction:row;
    gap: 20px;
    font-family:Poppins;
    line-height:20px;
    align-items:center;
    text-align
    justify-content:center;
    @media(max-width:800px){
    flex-direction:column}
    @media(max-width:1000px){
    }
`;
function Services() {
  return (
    <div id='services' style={{
        margin: "0",
        paddingBottom: "40px",
        display: "flex",
        width: "100vw",
        height: "100%",
        flexDirection: "column",
        textAlign: "center",
        background: "rgb(2, 36, 68)",
        alignItems:"center",
        // justifyContent:"center"
    }}>
    <div className="mainCont">
        <p style={{
            fontFamily:"Anton",
            fontSize:"4rem",
            color:"white",
            marginBottom:"30px",
            marginTop:"30px"
        }}>OUR SERVICES</p>
        <Cont>
            <div className="miniCont" style={{
                // border:"2px solid white",
                height:"180px",
                width:"150px",
                color:"white",
                padding:"20px 15px 15px 15px",
                borderRadius:"15px",
                backgroundColor:"rgb(1, 29, 64)"
                
            }}>
                <p style={{
                    fontWeight:"500",
                    marginBottom:"8px"
                }}>Tournament Management</p>
                <p style={{
                    fontSize:"12px"
                }}>Efficiently organizing esports tournaments with seamless scheduling and results tracking.</p>
            </div>


            <div className="miniCont" style={{
                // border:"2px solid white",
                height:"180px",
                width:"150px",
                color:"white",
                padding:"20px 15px 15px 15px",
                borderRadius:"15px",
                backgroundColor:"rgb(1, 29, 64)"
            }}>
                <p style={{
                    fontWeight:"500",
                    marginBottom:"8px"
                }}>eSports Production</p>
                <p style={{
                    fontSize:"12px"
                }}>Providing professional broadcasting and streaming for immersive esports experiences.</p>
            </div>


            <div className="miniCont" style={{
                // border:"2px solid white",
                height:"180px",
                width:"150px",
                color:"white",
                padding:"20px 15px 15px 15px",
                borderRadius:"15px",
                backgroundColor:"rgb(1, 29, 64)"
            }}>
                <p style={{
                    fontWeight:"500",
                    marginBottom:"8px"
                }}>GFX (Graphics)</p>
                <p style={{
                    fontSize:"12px"
                }}>Designing eye-catching visuals for events, branding, and promotions.</p>
            </div>


            <div className="miniCont" style={{
                // border:"2px solid white",
                height:"180px",
                width:"150px",
                color:"white",
                padding:"20px 15px 15px 15px",
                borderRadius:"15px",
                backgroundColor:"rgb(1, 29, 64)"
            }}>
                <p style={{
                    fontWeight:"500",
                    marginBottom:"8px"
                }}>Offline Event</p>
                <p style={{
                    fontSize:"12px"
                }}>Hosting engaging in-person esports events with live competitions and audience interaction.</p>
            </div>


            <div className="miniCont" style={{
                // border:"2px solid white",
                height:"180px",
                width:"150px",
                color:"white",
                padding:"20px 15px 15px 15px",
                borderRadius:"15px",
                backgroundColor:"rgb(1, 29, 64)"
            }}>
                <p style={{
                    fontWeight:"500",
                    marginBottom:"8px"
                }}>Brand Integration</p>
                <p style={{
                    fontSize:"12px"
                }}>Integrating brands and sponsors to maximize visibility and audience connection.</p>
            </div>

        </Cont>

        
    </div>
    </div>
  )
}

export default Services
