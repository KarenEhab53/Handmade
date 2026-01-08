import React, { useState } from "react";
import "./shop.css";
import { useNavigate, useLocation } from "react-router-dom";
import products from "../../data";

const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "All";

  const [category, setCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const itemsPerPage = 12;

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getCartQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

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

  return (
    <div className="shop">
      <p>Our Categories</p>
      <div className="line"></div>
      <div className="categories">
        {uniqueCategories.map((item) => (
          <button
            key={item}
            onClick={() => {
              setCategory(item);
              setCurrentPage(1);
              navigate(`/shop?category=${encodeURIComponent(item)}`);
            }}
            className={category === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="cards">
        {paginatedProducts.map((product) => {
          const quantity = getCartQuantity(product.id);

          return (
            <div className="card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/shop/${product.id}`)}
                style={{ cursor: "pointer" }}
              />
              <h2>{product.category}</h2>
              <h1>{product.title}</h1>
              <h3>Price: {product.price} EGP</h3>

              {quantity > 0 ? (
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(product.id)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => increaseQty(product.id)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
