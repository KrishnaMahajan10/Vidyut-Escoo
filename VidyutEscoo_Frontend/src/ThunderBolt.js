import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './escoo.css'; // Import your CSS file
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer.js';
const ThunderBolt = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/image/tb1.png', '/image/tb2.png', '/image/tb3.png']; // Replace with your image paths

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage < images.length - 1 ? prevImage + 1 : 0));
  };

  return (
  <div>
    <Navbar></Navbar>
    <div className="product-container">
      <div className="product-image">
        <img src={images[currentImage]} alt="Product" />
        {images.length > 1 && (
          <div className="image-controls">
            <button onClick={handlePrevImage}>&lt;</button>
            <button onClick={handleNextImage}>&gt;</button>
          </div>
        )}
      </div>
      <div className="product-details">
        {/* Replace the text with an image */}
        <img src="/image/TBTitle.png" alt="Product Title" className="product-title-image" />

        {/* Rest of the product details */}
        <p>Introducing ThunderBolt, a symbol of powerful and efficient electric mobility.<br/> This dynamic electric scooter combines speed, agility, and eco-friendly technology,<br/>  ensuring a thrilling yet sustainable ride through urban landscapes. ThunderBolt sets the<br/>  stage for a new era in electrifying and responsible commuting. Unleash the future of mobility!</p>
        <p>Price: ₹106000</p>
        <Link to="/customers" className="buy-button">Buy Now</Link>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ThunderBolt;