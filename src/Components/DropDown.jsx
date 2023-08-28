import React from "react";
import "../styles/dropDown.css";
import mf from "../Images/mutual-funds.png"
import ie from "../Images/indian-equit.png"
import dg from "../Images/digital-gold.png"
import fd from "../Images/fixed-deposits.png"
import mr from "../Images/market-research.png"
import hp from "../Images/historical-performance.png"


const DropDown = () => {
  return (
    <div>
      <div className="dropdown-section">
        <div className="investment-section">
          <h1 className="invest-data">INVESTMENTS</h1>
          {/* -------------------------------mutual-funds--------- */}
          <div className="mutual-funds">
            <img src={mf} alt="" />
            <div>
              <h2>Mutual Funds</h2>
              <p>E2E infrastructure for mutual fund investing</p>
            </div>
          </div>
          {/* ---------------------------indian-equity--------------- */}
          <div className="indian-equity">
            <img src={ie} alt="" />
            <div>
              <h2>Indian Equity</h2>
              <p>Ready-made stock baskets with major broker integrations</p>
            </div>
          </div>
          {/* ------------------------------digital-gold------------------- */}
          <div className="digital-gold">
            <img src={dg} alt="" />
            <div>
              <h2>Digital Gold</h2>
              <p>Allow your users to buy & sell digital gold</p>
            </div>
          </div>
          {/* -------------------------------fixed-deposits------------------------------- */}
          <div className="fixed-deposits">
            <img src={fd} alt="" />
            <div>
              <h2>Fixed Deposits</h2>
              <p>Book FDs in one-click without opening a bank account</p>
            </div>
          </div>
        </div>
        <div className="data-section">
            <h1 className="invest-data">DATA</h1>
         {/* ---------------------------market-research---------------------------------- */} 
       <div className="market-research">
        <img src={mr} alt="" />
        <div>
            <h2>Market Research</h2>
            <p>Deep-tech stock research & analysis</p>
        </div>
       </div>

        {/* -----------------------historical-performance--------------------------- */}
        <div className="historical-performance">
            <img src={hp} alt="" />
            <div>
                <h2>Historical Performance</h2>
                <p>Multi timeframe historical data for stocks, mutual funds & digits gold</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
