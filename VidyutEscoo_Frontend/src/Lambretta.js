import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './escoo.css'; // Import your CSS file
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer.js';
const Lambretta = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/image/lb1.png', '/image/lb2.png', '/image/lb3.png']; // Replace with your image paths

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
        <img src="/image/LBTitle.png" alt="Product Title" className="product-title-image" />

        {/* Rest of the product details */}
        <p>Vidyut Lambretta, a revolutionary electric scooter, defines the future of urban mobility.<br/> With cutting-edge design and advanced electric propulsion, it seamlessly combines style and sustainability.<br/> Offering a remarkable range and swift acceleration, Vidyut Lambretta sets a new standard for eco-friendly commuting,<br/> promising a thrilling and efficient ride for urban adventurers.</p>
        <p>Price: ₹475000</p>
        <Link to="/customers" className="buy-button">Notify when available</Link>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Lambretta;