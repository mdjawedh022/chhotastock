import React from "react";
import { Link } from "react-router-dom";
import "../styles/features.css";
import pro from "../Images/protection.png";
import tr from "../Images/tracking.png";
import fe from "../Images/fexibilty.png";
import ea from "../Images/easiness.png";
const Features = () => {
  return (
    <div className="features-section">
      {/* --------------------------------------- */}
      <div className="feature-get-started">
        <p>FEATURES</p>
        <h1>Launch the most Engaging Invest-Tech Solutions</h1>
        <p className="features-text">
          We offer a suite of B2B Invest-tech solutions, that are cost-effective
          way to offer an engaging investment experince to your customers, with
          a faster time to market
        </p>

        <div className="get-learn">
          <button>Get Started</button> <Link>Learn More</Link>{" "}
        </div>
      </div>
      {/* -------------------------------------- */}
      <div className="features-more-info">
        <div className="protection">
          <h2>Protection</h2>
          <img src={pro} alt="" />
          <p>Data protection guarentees</p>
        </div>
        <div className="tracking">
          <h2>Tracking</h2>
          <img src={tr} alt="" />
          <p>Tracking all your user' financial transactions</p>
        </div>
        <div className="fexibilty">
          <h2>Fexibility</h2>
          <img src={fe} alt="" />
          <p>Custom made for your requirements</p>
        </div>
        <div className="easiness">
          <h2>Easiness</h2>
          <img src={ea} alt="" />
          <p>Go-to market in less than 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
