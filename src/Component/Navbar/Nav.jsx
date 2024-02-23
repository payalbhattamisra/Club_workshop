import React from "react";
 import './Nav.css';

 function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src="PhotoGallery/clubexcellogo.webp" alt="" />
        <p>Club Excel</p>
      </div>
      <ul>
        <li><a href ="#">HOME</a></li>
        <li><a href ="#">REGISTER</a></li>
        <li><a href ="#">EVENTS</a></li>
      </ul>
      <div className='contant'>
        <button>CONTACT US</button>
      </div>
    </div>
      <hr />
    </>
  )
}

export default Navbar