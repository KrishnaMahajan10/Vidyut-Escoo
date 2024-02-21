import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './escoo.css'; // Import your CSS file
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer.js';
const Zenith = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/image/ze2.png', '/image/ze3.png', '/image/ze4.png', '/image/ze1.png']; // Replace with your image paths

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
        <img src="/image/ZETitle.png" alt="Product Title" className="product-title-image" />

        {/* Rest of the product details */}
        <p>Vidyut Zeneth, an avant-garde electric scooter, redefines urban commuting with its <br/>sleek design and eco-friendly technology. Seamlessly merging style and efficiency,<br/> it offers a silent and smooth ride, powered by cutting-edge electric propulsion. <br/> Vidyut Zeneth represents the pinnacle of sustainable transportation, embodying <br/> innovation and elegance for modern riders.

</p>
        <p>Price: ₹120000</p>
        <Link to="/customers" className="buy-button">Buy Now</Link>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Zenith;