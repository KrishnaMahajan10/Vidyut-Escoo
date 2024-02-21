import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './escoo.css'; // Import your CSS file
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer.js';
const UGo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/image/ug1.png', '/image/ug2.png', '/image/ug3.png']; // Replace with your image paths

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
        <img src="/image/UGTitle.png" alt="Product Title" className="product-title-image" />

        {/* Rest of the product details */}
        <p>Vidyut U-Go, a swift and agile electric scooter, redefines urban mobility with its<br/> high-speed performance. Seamlessly integrating speed and portability, it offers a thrilling <br/> yet efficient ride. Engineered for the fast-paced urban lifestyle, Vidyut U-Go is the epitome of <br/>convenience, providing a dynamic and eco-friendly solution for city commuting.</p>
        <p>Price: ₹96000</p>
        <Link to="/customers" className="buy-button">Buy Now</Link>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default UGo;