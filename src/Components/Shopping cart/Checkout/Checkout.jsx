import React, { useState } from "react";
import "./checkout.css";
import products from "../../../data"; // import your products

const Checkout = () => {
  // Local cart state (you can prefill with some products for testing)
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 },
  ]);

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
    attachment: null,
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, attachment: e.target.files[0] }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", form, cartItems);
    alert("Order submitted! Check console for details.");

    // Reset form and cart
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      note: "",
      attachment: null,
    });
    setCartItems([]);
  };

  // Cart operations
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        {/* Cart Summary */}
        <div className="cart-summary">
          <h3>Items in Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4>{item.title || item.name}</h4>
                    <p>Price: {item.price} EGP</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    ❌
                  </button>
                </li>
              ))}
              <h4 className="total-price">Total: {total.toFixed(2)} EGP</h4>
            </ul>
          )}
        </div>

        {/* Checkout Form */}
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

          {/* File Upload */}
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
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({ ...prev, attachment: null }))
                }
                className="remove-btn"
              >
                ❌
              </button>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
