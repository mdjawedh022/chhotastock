import React from "react";
import Navbar from "../Components/Navbar";
import "../styles/mainLanding.css";
import { Link } from "react-router-dom";
import imgbanner from "../Images/banner-1.png";
import Features from "../Components/Features";
import hand1 from "../Images/hand1.png";
import Solution from "../Components/Solution";
import {IoIosArrowDropdownCircle} from "react-icons/io";

const MainLanding = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        {/* ---------------------------------- */}
        <div className="banner">
          {/* -----------------------text-in-banner-section------------- */}
          <div className="text-banner-section">
            <div className="investment-stock">
              {" "}
              <h1>INVESTMENT STOCK</h1>
              <h1>for India</h1>
              <p>
                Elevate Your Investment Strategy with Our{" "}
                <span>Comprehensive APIs</span>{" "}
              </p>
            </div>
            <div className="inestment-info">
              <p>
                Launch financial services in a matter of days. Take your pick
                from our flexible APIs, SDKs, or ready-to-use screens.
              </p>
              <div className="see-our-products"><Link>See our products</Link> <IoIosArrowDropdownCircle fontSize={"30px"} color="gray"/></div>
              <button>Contact Us</button>
            </div>
          </div>
          {/* -------------banner-img------------- */}
          <div className="img-banner">
            <img src={imgbanner} alt="" />
          </div>
        </div>
        {/* ---------------------feature----------------- */}
        <div className="features">
          <Features />
        </div>
        {/* -----------connect your platform finances now with InvestPe GateWay--------------------------- */}
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
              <img src={hand1} alt="" />
            </div>
          </div>
        </div>
        {/* ---------------solution-------------------- */}
        <div className="solution-section">
          <Solution/>
        </div>
      </div>
    </div>
  );
};

export default MainLanding;
