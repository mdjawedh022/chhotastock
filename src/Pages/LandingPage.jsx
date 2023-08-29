import React from 'react'
import Navbar1 from '../Components/Navbar1'
import "../styles/landingPage.css"
import phone from "../Images/mobile-stock.png";
import Features from '../Components/Features';
import trade from "../Images/trade.png";
const LandingPage = () => {
  return (
    <div>
      <div>
        <Navbar1/>
      </div>

      {/* ------------------------------------- */}
      <div className="landing-banner">
        <h1>Knowledge Based<br />Investing & Trading</h1>
        <p>Ready-made solution + Deep Research + Disciplined Investing + Advanced Trading Tools</p>
        <img src={phone} alt="" />
      </div>
      {/* ---------------------------- */}
      <div>
        <Features/>
      </div>
      {/* --------------------------------------- */}
      <div className="invest-now-section">
          <div className="invest-now-child">
            <div>
              <h1>Connect your platform finances now with InvestPe GateWay</h1>
              <p>
                We help brokers, wealth managers, fund managers & other
                businesses / startups server thrir customers better eith our
                suite of modern digital investment stock
              </p>
              <button>Try Investpe Now</button>
            </div>
            <div  className="img-div">
              <img src={trade} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage
