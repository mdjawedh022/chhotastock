import React from 'react'
import Navbar from '../Components/Navbar'
import "../styles/mainLanding.css"
import { Link } from 'react-router-dom'
import imgbanner from "../Images/banner-1.png"

const MainLanding = () => {
  return (
    <div>
      <Navbar/>
      <div className="main-container">
        <div className="banner">
          {/* -----------------------text-in-banner-section------------- */}
             <div className="text-banner-section">
            <div className='investment-stock'> <h1>INVESTMENT STOCK</h1>
              <h1>for India</h1>

              <p>Elevate Your Investment Strategy with Our <span>Comprehensive APIs</span> </p></div>
             <div className='inestment-info'>
                <p>Launch financial services in a matter of days. Take your pick from our flexible APIs, SDKs, or ready-to-use screens.</p>
                <Link>See our products</Link>
                <button>Contact Us</button>
             </div>
             </div>
             {/* -------------banner-img------------- */}
           <div className='img-banner'>
           <img src={imgbanner} alt="" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default MainLanding
