import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
function Escoo() {

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
      <p><h3 class="mo">Our Available ESCOO</h3></p>
 
        <div class="container">
             <div class="card">
                    <div class="imgBx">
                        <a href="#">
                            <img src="image/c1.png" width="100%" />
                        </a>
                        
                        <p className='info'>

                            Introducing ThunderBolt, a symbol of powerful and efficient electric mobility. This dynamic electric scooter combines speed, agility, and eco-friendly technology, ensuring a thrilling yet sustainable ride through urban landscapes. ThunderBolt sets the stage for a new era in electrifying and responsible commuting. Unleash the future of mobility!                        
                        </p>
                        <Link to="/thunderbolt"> <input type="button" value="Explore ->"/></Link>
        
                    </div>
                </div>
                
                    <div class="card">
                        <div class="imgBx">
                            <a href="#">
                                <img src="image/c2.png" width="100%" />
                            </a>
                            
                            <p className='info'>  
                                Vidyut Zeneth, an avant-garde electric scooter, redefines urban commuting with its sleek design and eco-friendly technology. Seamlessly merging style and efficiency, it offers a silent and smooth ride, powered by cutting-edge electric propulsion. Vidyut Zeneth represents the pinnacle of sustainable transportation, embodying innovation and elegance for modern riders.
                            </p>
                         <Link to="/zenith">  <input type="button" value="Explore ->"/></Link>
            
                        </div>
                    </div>
                    
                        <div class="card">
                            <div class="imgBx">
                                <a href="#">
                                    <img src="image/c3.png" width="100%" />
                                </a>
                                
                                <p className='info'>
                                Vidyut U-Go, a swift and agile electric scooter, redefines urban mobility with its high-speed performance. Seamlessly integrating speed and portability, it offers a thrilling yet efficient ride. Engineered for the fast-paced urban lifestyle, Vidyut U-Go is the epitome of convenience, providing a dynamic and eco-friendly solution for city commuting.                                
                                </p>
                                <Link to="/ugo"> <input type="button" value="Explore ->"/></Link>
                
                            </div>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                <a href="#">
                                    <img src="image/c4.png" width="100%" />
                                </a>
                                
                                <p className='info'>
                                Vidyut Lambretta, a revolutionary electric scooter, defines the future of urban mobility. With cutting-edge design and advanced electric propulsion, it seamlessly combines style and sustainability. Offering a remarkable range and swift acceleration, Vidyut Lambretta sets a new standard for eco-friendly commuting, promising a thrilling and efficient ride for urban adventurers.                                
                                </p>
                                <Link to="/lambretta"> <input type="button" value="Explore ->"/> </Link>
                
                            </div>
                        </div>
        </div>

   

        
    
    <Footer></Footer>
    </div>
  )
}

export default Escoo
