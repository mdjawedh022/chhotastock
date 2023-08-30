import React from 'react'
import Navbar1 from '../Components/Navbar1'
import "../styles/landingPage.css"
import phone from "../Images/mobile-stock.png";
import Features from '../Components/Features';
import trade from "../Images/trade.png";
import vd from "../Images/vd.png";
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

        {/* ---------------------------stock investing section info----------------- */}
        <div className="stock-investing">
        <h2>StOCK INVESTING, SIMPLIFIED</h2>
        <p>Online trading and investing in the <br /> does not have to be boring.</p>

        <p>While we adapt a technology-led apparoach in <br /> buliding our product, we are keeping our users-investors <br />and traders even before that </p>
        <div className="value-ev-and-more-section">
            <div className='value-deals'>
            <div>
                <img src={vd} alt="" />
                <h3>Value Deals</h3>
               
            </div>
            <p>For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded</p>
            <div>
                <p>CAGR <br /> <span>17.80%</span> </p>
                <p>Min Amount <br/> <span>120</span></p>
            </div>
            </div>
            {/* ------------------ */}
            <div className='value-deals'>
            <div>
                <img src={vd} alt="" />
                <h3>Value Deals</h3>
               
            </div>
            <p>For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded</p>
            <div>
                <p>CAGR <br /> <span>17.80%</span> </p>
                <p>Min Amount <br/> <span>120</span></p>
            </div>
            </div>
            {/* ----------------------------- */}

            <div className='value-deals'>
            <div>
                <img src={vd} alt="" />
                <h3>Value Deals</h3>
               
            </div>
            <p>For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded</p>
            <div>
                <p>CAGR <br /> <span>17.80%</span> </p>
                <p>Min Amount <br/> <span>120</span></p>
            </div>
            </div>
            {/* --------------- */}
            <div className='value-deals'>
            <div>
                <img src={vd} alt="" />
                <h3>Value Deals</h3>
               
            </div>
            <p>For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded</p>
            <div>
                <p>CAGR <br /> <span>17.80%</span> </p>
                <p>Min Amount <br/> <span>120</span></p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage
