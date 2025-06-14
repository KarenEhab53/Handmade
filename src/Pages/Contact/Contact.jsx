import React, { useState } from "react";
import "./contact.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import img from "../../assets/contact.jpg";
import axiosInstance from "../../api";

const Contact = () => {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      const res = await axiosInstance.post("/contact", data);
      if (res.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", file: null });
        setFileName("");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to send message.");
    }
  };

  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className="image-wrapper">
          <img src={img} alt="" />
          <div className="overlay"></div>
        </div>

        <div className='text'>
          <p>Contact Us</p>
          <h1>Get in Touch with Our Experts Team</h1>
          <p>
            Share some details here. This is a flexible section where you can
            share anything you want. It could be details or some information.
          </p>
        </div>
      </div>

      <div className='form'>
        <div className='data'>
          <h1>Get In Touch With Us</h1>
          <p>
            Share some details here. This is a flexible section where you can
            share anything you want.
          </p>
          <div>
            <label>Address</label>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>

          <div className='line'></div>

          <div className='contact-info'>
            <label>Phone</label>
            <label>Email</label>
          </div>
          <div className='contact-info'>
            <p>+201224588735</p>
            <p>karenehab53@gmail.com</p>
          </div>

          <div>
            <label>Social Media</label>
            <div className="social-links">
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

        <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      placeholder="Joe Malik"
      value={formData.name}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      placeholder="example@gmail.com"
      value={formData.email}
      onChange={handleChange}
    />
  </div>

  <div className="upload-wrapper">
    <label htmlFor="file-upload" className="upload-btn">
      📎 Attach File
    </label>
    <input
      type="file"
      id="file-upload"
      style={{ display: "none" }}
      onChange={handleFileChange}
    />
    {fileName && <p className="file-name">📄 {fileName}</p>}
  </div>

  <div>
    <label htmlFor="message">Comment Or Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
    />
  </div>

  <input type="submit" value="Send Message" />
</form>

      </div>
    </div>
  );
};

export default Contact;
