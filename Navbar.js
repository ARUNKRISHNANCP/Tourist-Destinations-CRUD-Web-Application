import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🌍 World Tours</h1>
      <ul>
        <li>Home</li>
        <li>Tours</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
