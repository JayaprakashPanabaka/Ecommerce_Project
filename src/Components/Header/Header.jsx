import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h3 className="logo">LOGO</h3>
      </div>
      <div className="items-container">
        <a href="/" className="item">
          Home
        </a>
        <a href="/cart" className="item">
          Cart
        </a>
      </div>
    </div>
  );
};

export default Header;
