import React from "react";
import "../Header/Header.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import basket from "../../assets/basket.png";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <img className="img_h" src={logo} alt="logo" />
        <div className="p_h">
          <p>HOME</p>
          <p>MENU </p>
          <p>SHOP</p>
          <p>PAGES</p>
          <p>BLOCK</p>
          <p>CONTACT</p>
          <div className="details">
            <img className="phone" src={phone} alt="phone" />
          </div>
          <div className="p_phone">
          <p>123-456-789</p>
          <div className="basket">
            <img src={basket} alt="" />
            <p>0- $0.00</p>
          </div>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
