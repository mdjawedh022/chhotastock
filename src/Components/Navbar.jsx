import React from "react";
import "../styles/navbar.css";
import logo from "../Images/logo1.png";
import { Link } from "react-router-dom";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {BiSolidDownArrow,BiSolidUpArrow} from "react-icons/bi"
import DropDown from "./DropDown";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* <--------------top navbar-------------------> */}
        <div className="top-navbar">
          <p>0.88%</p>
          <p>BHARTIARTL</p>
          <p>856.25</p>
          <p><BiSolidDownArrow/> 0.05%</p>
          <p>HDFCBANK</p>
          <p>1,590.75</p>
          <p><BiSolidDownArrow/> 0.41%</p>
          <p>HINDUNILVR</p>
          <p>2,554.75</p>
          <p><BiSolidUpArrow/> 0.45%</p>
          <p>INDIGO</p>
          <p>2,454.30</p>
          <p><BiSolidDownArrow/> 0.22%</p>
        </div>
        {/* <-----------main navbar--------------------> */}
        <div className="main-navbar">
          <div className="website-logo-section">
            <div>
              <img src={logo} alt="" />
              <h2>
                Invest<span>Pe</span>
              </h2>
            </div>
            <div>
              <h3>Gateway</h3>
              <div></div>
            </div>
          </div>

          {/* ---------------------pages link section----------------- */}
          <div className="link-section">
            <div className="dropdown">
              <Link className="drop">Products <MdOutlineKeyboardArrowDown/></Link>
              {/* --------------------dropdown-------------------- */}
              <div class="dropdown-content">
               <DropDown/>
              </div>
            </div>
            <Link>AboutUs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
