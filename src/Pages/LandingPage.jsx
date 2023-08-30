import React from "react";
import Navbar1 from "../Components/Navbar1";
import "../styles/landingPage.css";
import phone from "../Images/mobile-stock.png";
import Features from "../Components/Features";
import trade from "../Images/trade.png";
import vd from "../Images/vd.png";
import bulb from "../Images/bulb.png";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <div>
        <Navbar1 />
      </div>

      {/* ------------------------------------- */}
      <div className="landing-banner">
        <h1>
          Knowledge Based
          <br />
          Investing & Trading
        </h1>
        <p>
          Ready-made solution + Deep Research + Disciplined Investing + Advanced
          Trading Tools
        </p>
        <img src={phone} alt="" />
      </div>
      {/* ---------------------------- */}
      <div>
        <Features />
      </div>
      {/* --------------------------------------- */}
      <div className="invest-now-section1">
        <div className="invest-now-child1">
          <div>
            <h1>
              Essential Features for the Super Trader in You - All in{" "}
              <span>One Platform</span>{" "}
            </h1>
            <p>
              Save hours of research by using our readymade screens to find your
              next investment
            </p>
            <h3> <img src={bulb} alt="" /> 30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES + STOCK PICKS & MUCH MORE</h3>
           <div className="get-started-now">
           <button>Get started now</button> <Link to="/">See all features</Link>
           </div>
          </div>
          <div className="img-div1">
            <img src={trade} alt="" />

            <img src={trade} alt="" />
          </div>
        </div>
      </div>

      {/* ---------------------------stock investing section info----------------- */}
      <div className="stock-investing">
        <h2>StOCK INVESTING, SIMPLIFIED</h2>
        <p>
          Online trading and investing in the <br /> does not have to be boring.
        </p>

        <p>
          While we adapt a technology-led apparoach in <br /> buliding our
          product, we are keeping our users-investors <br />
          and traders even before that{" "}
        </p>
        <div className="value-ev-and-more-section">
          <div className="value-deals">
            <div>
              <img src={vd} alt="" />
              <h3>Value Deals</h3>
            </div>
            <p>
              For the people who would love to risk huge to get rewarded. People
              who would love to risk huge to get rewarded
            </p>
            <div>
              <p>
                CAGR <br /> <span>17.80%</span>{" "}
              </p>
              <p>
                Min Amount <br /> <span>120</span>
              </p>
            </div>
          </div>
          {/* ------------------ */}
          <div className="value-deals">
            <div>
              <img src={vd} alt="" />
              <h3>Value Deals</h3>
            </div>
            <p>
              For the people who would love to risk huge to get rewarded. People
              who would love to risk huge to get rewarded
            </p>
            <div>
              <p>
                CAGR <br /> <span>17.80%</span>{" "}
              </p>
              <p>
                Min Amount <br /> <span>120</span>
              </p>
            </div>
          </div>
          {/* ----------------------------- */}

          <div className="value-deals">
            <div>
              <img src={vd} alt="" />
              <h3>Value Deals</h3>
            </div>
            <p>
              For the people who would love to risk huge to get rewarded. People
              who would love to risk huge to get rewarded
            </p>
            <div>
              <p>
                CAGR <br /> <span>17.80%</span>{" "}
              </p>
              <p>
                Min Amount <br /> <span>120</span>
              </p>
            </div>
          </div>
          {/* --------------- */}
          <div className="value-deals">
            <div>
              <img src={vd} alt="" />
              <h3>Value Deals</h3>
            </div>
            <p>
              For the people who would love to risk huge to get rewarded. People
              who would love to risk huge to get rewarded
            </p>
            <div>
              <p>
                CAGR <br /> <span>17.80%</span>{" "}
              </p>
              <p>
                Min Amount <br /> <span>120</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
