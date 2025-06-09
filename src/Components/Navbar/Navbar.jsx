import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo_circular.png';
import { NavLink } from "react-router-dom"; // <-- use NavLink here
import { RiShoppingCartLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Caramella Logo" />
        <h1>Caramella Handmade</h1>
      </div>

      <div className={`links ${isMobileMenuOpen ? 'show' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
          <button>Home</button>
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
          <button>Shop</button>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
          <button>About</button>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
          <button>Contact Us</button>
        </NavLink>
        <div className="cart-mobile">
          View Cart <RiShoppingCartLine />
        </div>
      </div>

      <div className="cart desktop">
        <RiShoppingCartLine />
      </div>

      <div className="menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>
    </div>
  );
};

export default Navbar;
