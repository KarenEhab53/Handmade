import React from "react";
import './footer.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="data">
<div className="firstsection">
        <h2>Caramella Handmade</h2>
<p>
Bringing joy through every handcrafted detail — from satin flowers to crochet bags. 
We blend tradition with modern elegance to make every piece meaningful.
</p>

      </div>
      <div className="secondsection">
        <h2>Quick Links</h2>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/shop">Shop</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>

      </div>
<div className="sectionthree">
    <h2>Contact Us</h2>
<ul>
  <li>Address: Cairo, Egypt</li>
  <li>Email: caramella.handmade@gmail.com</li>
  <li>Phone: +20 122 458 8735</li>
  <li>Instagram: @caramella.handmade</li>
</ul>

</div>
      </div>
      <div className="copyright">
        <p>Copyright © 2025 Caramella Handmade — All rights reserved.</p>
 <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=61572552689548&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/caramella_handmade_?igsh=MWxnMDJiY25qa3Fpag==" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://wa.me/201223588735" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
     
    </div>
      </div>
          </div>
  )
};

export default Footer;
