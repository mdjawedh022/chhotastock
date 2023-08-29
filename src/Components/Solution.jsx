import React from "react";
import "../styles/solution.css";
import ip from "../Images/pe.png";
import investF from "../Images/investF.png";
import FD from "../Images/FD.png";
import fdBook from "../Images/fdBook.png";
import right from "../Images/right.png";
const Solution = () => {
  return (
    <div className="solution">
      <p>SOLUTION</p>
      <h2>
        Stay ahead with our <br /> Weath-tech as a service
      </h2>
      {/* <h2>Weath-tech as a service</h2> */}
      <div className="solution-div-container">
        <div className="solution-div-child">
          {/* ---------------------- */}
          <div className="solution-div-grandchild">
            <div className="img-pe">
              <img src={ip} alt="" />
              <p>INVESTPE</p>
              <h2>Why does it make sense to start with us?</h2>
            </div>
            {/* ----------------------------------- */}
            <div className="solution-div-grandchild-second">
              <div>
                <h2>We value your precious time.</h2>
                <p>
                  No regulatory licenses required as we have everything for you
                  to get started.
                </p>
              </div>

              <img src={investF} alt="" />
            </div>
          </div>
          <div className="solution-div-grandchild1">
            <div className="MUTUAL-FUNDS">
                <p className="DEPOSITS">MUTUAL FUNDS</p>
                <h2>Get the complete MF Infra <br /> & focus on customers engagment</h2>
                <div className="logo-text"> <img src={right} alt="" /> <p>SEBI compliant KYC process</p></div>
                <div className="logo-text"> <img src={right} alt="" /> <p>Muilt-AMC empanelments</p></div>
                <div className="logo-text"> <img src={right} alt="" /> <p>Transact & Track orders</p></div>
                <div className="logo-text"> <img src={right} alt="" /> <p>Advanced reporting</p></div>
            </div>
            <div className="MUTUAL-FUNDS">
                <p className="DEPOSITS">INDIAN EQUITY</p>
                <h2>One gatewayfor all top securities</h2>
                <div className="logo-text"> <img src={right} alt="" /> <p>Enable stocks,ETFs & expert <br />curated stock baskets in your app</p></div>
                <div className="logo-text"> <img src={right} alt="" /> <p>Integrates with all major brokers</p></div>
                <div className="logo-text"> <img src={right} alt="" /> <p>Offer expect curated & monitored <br />stock basket solutions</p></div>
                
            </div>
          </div>
        </div>
        {/* -------------------- */}
        <div className="solution-div-child1">
          <img src={FD} alt="" />
          <p className="DEPOSITS">FIXED DEPOSITS</p>
          <h2>Fully digital FDs for your users</h2>
          <p className="offer-fixed">
            Offer fixed deposits on your app <br /> or website, from multiple
            banks,
            <br />
            Embed a pre-built SDK and go <br />
            live in weeks.
          </p>
          <img className="fdBook" src={fdBook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
