import React from 'react'
import "../styles/navbar1.css"
import { useNavigate } from 'react-router-dom'
import logo from "../Images/logo1.png"
import {CiLogin, CiSearch} from "react-icons/ci"
const Navbar1 = () => {
const navigate=useNavigate()
    const handleRouter=()=>{
        navigate("/mainlanding")
    }
  return (
    <div className='navbar-1'>
       <div className="top-navbar1">
          <p>{"<"}</p>
          <p>ANK</p>
          <p>43,851.05</p>
          <p>0.09%</p>
          <p>BAJFINANCE</p>
          <p>6,862.10</p>
          <p>0.88%</p>
          <p>BHARTIARTL</p>
          <p>856.25</p>
          <p>0.05%</p>
          <p>HDFCBANK</p>
          <p>1,590.75</p>
          <p>0.41%</p>
          <p>HINDUNILVR</p>
          <p>2,554.75</p>
          <p>0.45%</p>
          <p>INDIGO</p>
          <p>2,454.30</p>
          <p> 0.22%</p>
          <p>ITC</p>
          <p>441.65</p>
          <p>0.15%</p>
          <p>MARUTI</p>
          <p>9,456.05</p>
          <p>0.86%</p>
          <p>{">"}</p>
    </div>
    <div className="second-navbar">
        <div className='navb-logo'>
            <img src={logo} alt="" />
            <div><h2>Invest<span>Pe</span></h2>
            <p>INVEST TO PAY. INVEST TO SPEND</p></div>
        </div>
        <div className='input'><CiSearch/> <p>Search srocks,ETFs, indices</p></div>
        <button onClick={handleRouter}><CiLogin/> Login</button>
    </div>
    </div>
  )
}

export default Navbar1
