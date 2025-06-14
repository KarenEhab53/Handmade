import React from "react";
import "./about.css"; // Create this file for styling
import img from '../../assets/about us.jpg'
import video from '../../assets/3943125-uhd_4096_2160_25fps.mp4'
const About = () => {
  return (
    <div className="about-container">
  <div className="about-section">
        <img src={img} alt="What We Do" className="about-image" />
    <div className="about-text">
      <h2>Who We Are</h2>
      <p>
        At Caramella Handmade, we're passionate artisans bringing joy through every handmade stitch and bloom.
        What started as a small hobby has blossomed into a brand known for heartfelt creations.
      </p>
        <h2>What We Do</h2>
      <p>
        We create unique satin flowers, crochet bags, beaded purses, and yarn bouquets—each piece tells a story.
        Perfect for gifts, events, or personal treats, we craft with elegance and love.
      </p>

    </div>

  </div>
        <div className="mission-video-section">
  <video autoPlay muted loop className="background-video">
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="video-overlay">
    <h2>Our Mission</h2>
    <p>
We believe in the beauty of handmade art. In a world of mass production, we offer something personal — gifts that carry emotion, decor that tells a story, and bags that blend tradition with trend.    </p>
  </div>
</div>

        <section className="text-section">
       
          <h2>Why Choose Us?</h2>
          <div className="cards">
            <div className="card">100% Handmade with care</div>
            <div className="card">Perfect for gifts, or daily use</div>
            <div className="card">Custom orders available</div>
            <div className="card">Crafted with love in Cairo, Egypt</div>
          </div>
        </section>

      
      </div>
  );
};

export default About;
