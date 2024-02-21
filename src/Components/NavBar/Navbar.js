import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <header>
        <img src="/image/log1.png" className="center" id="logot" height="120px" alt="Logo" />
      </header>
      <nav>
        <p>
          <Link to={"/"}>Home</Link>
          <Link to={"/escoo"}>New Release</Link>
          <Link to={"/login"}>Service your scooter</Link>
          {/* <a href="#">Login/SignUp</a> */}
        </p>
      </nav>
    </div>
  )
}

export default Navbar
