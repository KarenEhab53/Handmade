import React, { useContext, useState } from "react";
import "./checkout.css";
import { CartContext } from "../../../Context/CartContext";
import img from '../../../assets/WhatsApp Image 2025-06-08 at 15.17.26_84cad4e1.jpg';

const Checkout = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can replace this with your API submission logic
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        <div className="cart-summary">
          <h3>Items in Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={img} alt={item.title} />
                  <div style={{ flex: 1 }}>
                    <h4>{item.title}</h4>
                    <p>Price: {item.price} EGP</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">❌</button>
                </li>
              ))}
              <h4 className="total-price">Total: {total.toFixed(2)} EGP</h4>
            </ul>
          )}
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Info</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="note"
            placeholder="Order Note (optional)"
            value={form.note}
            onChange={handleChange}
          />

          <div className="file-upload">
            <label htmlFor="attachment" className="file-label">
              {form.attachment ? (
                form.attachment.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(form.attachment)}
                    alt="Attachment Preview"
                    className="file-preview"
                  />
                ) : (
                  <p className="file-info">📎 {form.attachment.name}</p>
                )
              ) : (
                <span>📎 Click to attach a file</span>
              )}
              <input
                type="file"
                id="attachment"
                name="attachment"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                hidden
              />
            </label>

            {form.attachment && (
             <button onClick={() => removeFromCart(item.id)} className="remove-btn">❌</button>


            )}
          </div>

          <button type="submit" className="submit-btn">Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
