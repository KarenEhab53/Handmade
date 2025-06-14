import React from "react";
import './sectionfive.css'
import { FaStar } from 'react-icons/fa';
import user1 from '../../../assets/user-1.jpg';
import user2 from '../../../assets/user-2.jpg';
import user3 from '../../../assets/user-3.jpg';
const SectionFive = () => {
  return(
 <section className="testimonial-section">
      <p className="subtitle">Testimonial</p>
      <h2 className="title">Hear From Our Happy Customers</h2>
      <p className="description">
        Every handcrafted piece brings joy and elegance. Here's what our lovely customers are saying.
      </p>
      <div className="cards">
        <div className="card">
          <div className="stars">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
          <p className="feedback">
            I ordered crochet bags and satin flowers for a bridal shower — everything was stunning! Handmade with love.
          </p>
          <div className="user">
            <img src={user1} alt="Customer" />
            <div>
              <h4>Layla Ahmed</h4>
              <span>Event Organizer</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stars">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
          <p className="feedback">
            Caramella made my custom gift dreams come true. The craftsmanship and color palette were perfect!
          </p>
          <div className="user">
            <img src={user2} alt="Customer" />
            <div>
              <h4>Mona Saeed</h4>
              <span>Graphic Designer</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stars">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
          <p className="feedback">
            I keep coming back to Caramella for their lovely handwork. Every piece is unique and full of heart.
          </p>
          <div className="user">
            <img src={user3} alt="Customer" />
            <div>
              <h4>Hana Khaled</h4>
              <span>Business Owner</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
};

export default SectionFive;
