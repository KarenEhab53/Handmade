import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import logo1 from '../../../assets/logo1.jpg'
import logo2 from '../../../assets/pexels-milan-3053700-4639529 (1).jpg'
import logo3 from '../../../assets/logobag5.jpg'
import './sectionone.css'
const SectionOne = () => {
  return  <div className="hero-slider">

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 7000 }}
        loop={true}
        className="mySwiper" 
      >
        <SwiperSlide>
  <div className="slide-content">
    <img src={logo1} alt="Yarn Bouquet" />
    <div className="overlay"></div>
    <div className="slide-text">
    <h2>From Thread to Treasure <br /> Beautiful Yarn Creations</h2>
<p>Explore handmade designs crafted from colorful yarn <br /> perfect for gifts, decor, and more.</p>
<div className="buttons">

<button className="hero-btn">Shop Yarn</button>
<button className="hero-btn"> View All Products </button>
</div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="slide-content">
    <img src={logo2} alt="Satin Flowers" />
    <div className="overlay"></div>
    <div className="slide-text">
     <h2>Delicate Satin Blooms <br /> Wrapped with Love</h2>
<p>Discover our elegant satin flower bouquets <br /> a perfect handmade touch for any occasion.</p>
<div className="buttons">

<button className="hero-btn">Order Bouquets</button>
<button className="hero-btn">View Collections</button>
</div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="slide-content">
    <img src={logo3} alt="Handmade Bag" />
    <div className="overlay"></div>
    <div className="slide-text">
  <h2>Chic & Fun <br /> Loly Handmade Bags</h2>
<p>Add color to your day with our playful, handcrafted loly bags <br /> made with passion and yarn.</p>
<div className="buttons">
<button className="hero-btn">Shop Bags</button>
<button className="hero-btn"> Custom Orders </button>

</div>
    </div>
  </div>
</SwiperSlide>

      </Swiper>
    </div>
  
};

export default SectionOne;
