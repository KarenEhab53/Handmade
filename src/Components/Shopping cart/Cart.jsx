import React, { useContext, useEffect, useRef } from "react";
import "./cart.css";
import { CartContext } from "../../Context/CartContext";
import { AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import img from '../../assets/WhatsApp Image 2025-06-08 at 15.17.27_a681c660.jpg';

const Cart = ({ isOpen, onClose }) => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart
  } = useContext(CartContext);
  const navigate = useNavigate();
  const cartRef = useRef();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cart-backdrop">
      <div className={`cart-sidebar open`} ref={cartRef}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <AiOutlineClose className="close-icon" onClick={onClose} />
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <img src={img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>Price: {item.price} EGP</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button className="remove-single" onClick={() => removeFromCart(item.id)}>
                  <MdDelete />
                </button>
              </div>
            ))}

            <div className="cart-footer">
              <h3>Total: {totalPrice.toFixed(2)} EGP</h3>
              <div className="cart-actions">
                <button className="checkout-button" onClick={() => {
                  onClose();
                  navigate("/checkout");
                }}>
                  Proceed to Checkout
                </button>
                <button className="clear-cart-button" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
