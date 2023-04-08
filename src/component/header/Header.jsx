import React from "react";
import "./header.css";
import logo from "/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="menu">
            <Link to="/">Shop</Link>
            <Link to="/orders">Order Review</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
