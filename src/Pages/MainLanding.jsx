import React from 'react'
import Navbar from '../Components/Navbar'
import "../styles/mainLanding.css"

const MainLanding = () => {
  return (
    <div>
      <Navbar/>
      <div className="main-container">
        <div className="banner">
             <div className="text-banner-section">
              <h1>INVESTMENT STACK</h1>
              <h1>for India</h1>

              <h3>Elevate Your Investment Strategy with Our <span>Comprehensive APIs</span> </h3>
             </div>
        </div>
      </div>
    </div>
  )
}

export default MainLanding
