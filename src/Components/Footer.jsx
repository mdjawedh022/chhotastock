import React from "react";
import "../styles/footer.css";
import logo1 from "../Images/logo1.png";
import playStore from "../Images/google-play-store.png" 
import fb from "../Images/fb.png";
import yt from "../Images/youtube.png";
import  insta from "../Images/insta.png";
import twit from "../Images/twitter.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-child-sction">
            {/* <------------------------footer-logosection----------------------> */}
          <div className="footer-logosection">
            <img src={logo1} alt="logo" />
               <h2 className="website-name">
              Invest<span>Pe</span>
            </h2>
          </div>

          {/* <-------------------contact-info-section-------------------------> */}
          <div className="contact-info-section">
            <div className="contact">
                <h2>Contact Us</h2>
                <p>8089225625</p>
                <p>contack@chhotastock</p>
            </div>
            <div className="company">
                <h2>Company</h2>
                <p>About Us</p>
                <p>Privacy policy</p>
                <p>Terms and conditions</p>
            </div>
            <div className="quick-links">
                <h2>Quick Links</h2>
                <p>Home</p>
                <p>Gateway</p>
                <p>Blog</p>
            </div>
            <div className="download-app">
                <h2>Download the App Now!</h2>
                <img src={playStore} alt="" />
            </div>

          </div>
          {/* ------------------find us on ------------------ */}
          <div className="social-media">
            <h2>Find Us On</h2>
            <div className="social-media-logo">
                <img className="fb" src={fb} alt="" />
                <img className="yt" src={yt} alt="" />
                <img className="insta" src={insta} alt="" />
                <img className="twit" src={twit} alt="" />
            </div>
          </div>
          <div className="description">
            <p>© 2022 Chhotastock Technologies Private Limited. All right reserved.CIN-U74999WB2012PRC184187 Chhotastock Technologies Private Limited.</p>
            <br />

            <p>Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.</p>
            <p>Investing in Stock/ETFs(Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing</p>
            <br />
            <p>Registeres Office:L151,3rd Floor,CK Pearl,5th Main Road,HSR Layout Sector 6, Bengaluru,Karnataka-560102, India</p>
           <br /> <p>For any query / feedback / clarifications, email at contact@chhotastock.com</p>
            <br /><p>All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only faciliates investments</p>
            <p>in such baskets,portfolios.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
