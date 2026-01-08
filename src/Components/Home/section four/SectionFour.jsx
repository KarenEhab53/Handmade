import React from "react";
import "./sectionfour.css";
import products from "../../../data";
import { useNavigate } from "react-router-dom";

const SectionFour = () => {
  const navigate = useNavigate();

  // Take first 4 products
  const latestProducts = products.slice(0, 4);

  return (
    <div className="products-container">
      <div className="text">
        <h1>JUST DROPPED</h1>
        <h2>See What’s Blooming in Our Latest Handmade Arrivals</h2>
        <p>
          Let us inspire you with unique, handcrafted pieces. This section is
          perfect for highlighting new arrivals or seasonal specials.
        </p>
      </div>

      <div className="cards">
        {latestProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/shop/${product.id}`)}
            style={{ cursor: "pointer" }}
            className="card"
          >
            <img src={product.image} alt={product.name} />
            <h2>{product.category}</h2>
            <h1>{product.title}</h1>
            <h3>Price: {product.price} EGP</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
