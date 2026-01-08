import React, { useState } from "react";
import "./singleproduct.css";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../data"; // import your JS data file

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);
  const [mainImage, setMainImage] = useState(""); // will set after product found

  if (!products || products.length === 0) return <p>Loading products...</p>;

  const product = products.find((p) => String(p.id) === String(id));
  if (!product) return <p>Product not found</p>;

  // Set main image dynamically (use first available image or placeholder)
  const images = [
    product.image, // main product image
    // You can add more images if available
  ];
  if (!mainImage) setMainImage(images[0]);

  // Add to cart
  const addToCart = (product, qty) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
    alert(`${qty} x ${product.name} added to cart`);
  };

  return (
    <>
      <div className="single-product">
        <div className="images">
          <div className="all">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(img)}
                className="thumbnail"
              />
            ))}
          </div>
          <img src={mainImage} alt="Main" className="big-image" />
        </div>

        <div className="content">
          <p className="brief">
            Shop / {product.category} / {product.name}
          </p>
          <div className="info-section">
            <h5>{product.category.toUpperCase()}</h5>
            <h1>{product.name}</h1>
            <span>Price: {product.price} EGP</span>
            <h5>{product.description}</h5>
          </div>

          <div className="cart-options">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
            <span className="qty-display">{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>

            <button
              className="add-to-cart"
              onClick={() => addToCart(product, qty)}
            >
              Add to Cart
            </button>
          </div>

          <div className="line"></div>

          <div className="data">
            <ul>
              <li>Free shipping on orders over 500 EGP</li>
              <li>Secure payment</li>
              <li>No hassle refunds</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relted">
        <div className="related-container">
          <div className="text">
            <h1>Related products</h1>
          </div>
          <div className="cards">
            {products
              .filter((p) => p.id !== product.id) // exclude current product
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  onClick={() => navigate(`/shop/${relatedProduct.id}`)}
                  style={{ cursor: "pointer" }}
                  className="card"
                  key={relatedProduct.id}
                >
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                  <h2>{relatedProduct.category}</h2>
                  <h1>{relatedProduct.name}</h1>
                  <h3>Price: {relatedProduct.price} EGP</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
