import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo_circular.png";
import { Link, NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Cart from "../Shopping cart/Cart";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Local cart state
  const [cartItems, setCartItems] = useState([]);

  // Calculate total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCartOpen &&
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen]);

  // Add item to cart (for demonstration, you can pass product from other components)
  const addToCart = (product, qty = 1) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: qty }]);
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Caramella Logo" />
            <h1>Caramella Handmade</h1>
          </div>
        </Link>

        <div className={`links ${isMobileMenuOpen ? "show" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMobileMenuOpen(false)}
          >
            <button>Home</button>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMobileMenuOpen(false)}
          >
            <button>Shop</button>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMobileMenuOpen(false)}
          >
            <button>About</button>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMobileMenuOpen(false)}
          >
            <button>Contact Us</button>
          </NavLink>

          <div className="cart-mobile" onClick={() => setCartOpen(true)}>
            View Cart <RiShoppingCartLine />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
        </div>

        {/* Desktop login button */}
        <div className="login-button">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>

        <div className="cart desktop" onClick={() => setCartOpen(true)}>
          <RiShoppingCartLine />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>

        <div
          className="menu-icon"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {isCartOpen && (
        <div className="cart-backdrop">
          <div ref={cartRef}>
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              isOpen={true}
              onClose={() => setCartOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
