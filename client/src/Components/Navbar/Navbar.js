import React from "react";
import "./Navbar.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="NavbarHero">
        {/* Navbar */}
    <div className="NavbarHome">
      <div className="NavbarMain">
        <div className="NavbarLeftSide">
          <div className="navFlex">
            <CiMail className="navicon" />
            <p>info@example.com</p>
          </div>
          <div  className="navFlex">
            <BiPhoneCall className="navicon"  />
            <p> +91 987-654-3210</p>
          </div>
        </div>
        <div className="NavbarRightSide">
          <div className="facebook-icon">
            <FaFacebookF className="icon" />
          </div>
          <div className="facebook-icon">
            <FaInstagram className="icon" />
          </div>
          <div className="facebook-icon">
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>

    {/* Hero Section */}

    <div>
        <div className="HeroLeft">
        <div className="Navbar_Secandory">
            <img src="logo-white.png" alt="logo" className="logo"/>
            <div className="Navbar_Secandory_Right">
        <ul className="Navbar_Secandory_List">
                <li><b>Home</b></li>
                <li><b>Pages <FaAngleDown className="chaverionIcon"/></b></li>
                <li><b>Services <FaAngleDown/></b></li>
                <li><b>Blogs <FaAngleDown/></b></li>
                <li><b>Contact Us</b></li>
            </ul>
        </div>
        <p style={{color:"white", marginTop:"15px", border:"1px solid white", padding:"10px", borderRadius:"25px"}}><b>Get A Quote</b></p>
        </div>
        
    </div>
   
    </div>
    {/*Navbar Hero Right image */}

    <div className="dz-media">
        <img src="pic1.jpg" alt="HeroImage" />
        
    </div>
    </div>
  );
};

export default Navbar;
