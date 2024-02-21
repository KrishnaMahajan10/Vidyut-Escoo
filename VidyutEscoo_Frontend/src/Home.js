import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
function Home() {
  useEffect(() => {
    // Dynamically import main.js after the component has mounted
    import('./main.js').then((module) => {
      // The module contains the logic from main.js
      // You can access any exported functions or variables here if needed
    });
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div id="slider">
        <figure>
          <img src="/image/V1.png" alt="Slide 1" />
          <img src="/image/V2.png" alt="Slide 2" />
          <img src="/image/V3.png" alt="Slide 3" />
          <img src="/image/V4.png" alt="Slide 4" />
          <img src="/image/V1.png" alt="Slide 5" />
        </figure>
      </div>

      <div className="containerlog">
        <img className="image" id="image" src="/image/image.png" alt="Your Image" />
        <button className="button">
         <Link to={"/escoo"} ><h2 className='explore'>EXPLORE</h2></Link>
        </button>
      </div>

      <video className="vid" controls autoPlay>
        <source src="/image/TestRideiPraise+2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Footer></Footer>
    </div>
    
  );
}

export default Home;
