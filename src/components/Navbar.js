import React from 'react';
import "./Navbar.css";
const Navbar = () => {
  return(
    <div className="navbar">
  <a href="/" className="active">Home</a>
  <a href="/Liquid">Liquid State</a>
  <a href="/Solid">Solid State</a>
  <a href="/Gaseous">Gaseous State</a>
</div>
  )

}
export default Navbar

