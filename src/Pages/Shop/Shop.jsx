import React, { useContext, useState } from "react";
import './shop.css';
import { ProductContext } from "../../Context/Product";
import { useNavigate, useLocation } from "react-router-dom";
import img from '../../assets/WhatsApp Image 2025-06-08 at 15.17.27_8cec4d03.jpg';

const Shop = () => {
  const { products, loading, error } = useContext(ProductContext);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts = category === "All"
    ? products
    : products.filter((p) => p.category === category);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

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
              setCurrentPage(1); // Reset to first page on filter
              navigate(`/shop?category=${encodeURIComponent(item)}`);
            }}
            className={category === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="cards">
        {paginatedProducts.map((product) => (
          <div
            onClick={() => navigate(`/shop/${product.id}`)}
            style={{ cursor: "pointer" }}
            className="card"
            key={product.id}
          >
            <img src={img} alt={product.name} />
            <h2>{product.category}</h2>
            <h1>{product.title}</h1>
            <h3>Price: {product.price} EGP</h3>
          </div>
        ))}
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
