import React, { useContext, useState } from "react";
import './singleproduct.css'
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/Product";
import img1 from '../../assets/logo1.jpg'
import img2 from '../../assets/logo2.jpg'
import img3 from '../../assets/logo4.jpg'
import img4 from '../../assets/logo5.jpg'
import img from '../../assets/ШИК И БЛЕСК 🔥 Золотистая красавица в размере BIG SIZE из хрустальных бусин не оставит равнодушным никого 💎 В комплекте_ 💎Пыльник 💎Магнитная застёжка 💎 Металлическая цепь длиной 1 метр 💎Цепочка из бусин 1 .jpeg'
const SingleProduct = () => {
    const { id } = useParams()
    const { products } = useContext(ProductContext);
    const [qty, setQty] = useState(1);
    const [mainImage, setMainImage] = useState(img1);

    if (!products || products.length === 0) return <p>Loading products...</p>;
    const product = products.find((p) => String(p.id) === String(id));
    if (!product) return <p>Product not found</p>;

    return (<>
        <div className="single-product">
            <div className="images">

                {/* Small Thumbnails */}
                <div className="all">
                    {[img1, img2, img3, img4].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            onClick={() => setMainImage(img)}
                            className="thumbnail"
                        />
                    ))}
                </div>
                {/* Big Image */}
                <img src={mainImage} alt="Main" className="big-image" />
            </div>
            <div className="content">
                <p className="brief">Shop / {product.category} / {product.name}</p>
                <div className="info-section">
                    <h5>{product.category.toUpperCase()}</h5>
                    <h1>{product.name}</h1>
                    <span >Price: {product.price} EGP</span>
                    <h5>{product.description}</h5>
                </div>
                <div className="cart-options">
                    <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="line"></div>
                <div className="data">
                    <ul>
                        <li> Free shipping on orders over 500 EGP</li>
                        <li> Secure payment</li>
                        <li> No hassle refunds</li>
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
        </div>
        </>
    )
};

export default SingleProduct;
