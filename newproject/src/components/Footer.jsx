import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='Footerr' style={{
        backgroundColor:"rgb(41, 39, 39)",
        height:"50px",
        display:"flex",
        alignItems:"center",
        // justifyContent:"center"
    }}>
      <div>
        <a  className="Logoo" href="/upload"><p>LOGO</p></a>
      </div>
      <div className="elements">
        <a className='elem' href="/">Discord</a>
        <a className='elem' href="/">Discord</a>
        <a className='elem' href="/">Discord</a>
        <a className='elem' href="/">Discord</a>
      </div>
    </div>
  )
}

export default Footer
