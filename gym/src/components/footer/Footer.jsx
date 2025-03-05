import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div id="luka">  &copy; LUKA FITNESS CLUB
        {new Date().getFullYear()}</div>
       
        <p className="fphn">+91 9745479222</p>
         <p className="fmail">luka12@gmail.com</p>

       
       
    </div>
  )
}

export default Footer
