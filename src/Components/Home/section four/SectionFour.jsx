import React, { useContext } from "react";
import './sectionfour.css';
import { ProductContext } from "../../../Context/Product";
import img from '../../../assets/logo3.jpg'
import { useNavigate } from "react-router-dom";

const SectionFour = () => {
  const { products, loading, error } = useContext(ProductContext);
const navigate= useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="products-container">
        <div className="text">
            <h1>JUST DROPPED</h1>
            <h2>See What’s Blooming in Our Latest Handmade Arrivals</h2>
<p>Let us inspire you with unique, handcrafted pieces. This section is perfect for highlighting new arrivals or seasonal specials.

</p>
        </div>
        <div className="cards">
      {products.slice(0, 4).map((product) => (
        <div onClick={()=>navigate(`/shop/${product.id}`)} style={{cursor:"pointer"}} className="card" key={product.id}>
          <img src={img} alt={product.name} />
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
