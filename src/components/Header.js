import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
