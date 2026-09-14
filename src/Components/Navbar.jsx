import React from 'react';

export default function Navbar() {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <div className="logo-mark">A</div>
          ATIFF SHAHWAIZ
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        <a 
          href="/Atiff shahwaiz Dv.pdf" 
          download="Atiff_Shahwaiz_Dv.pdf" 
          className="btn nav-cta"
        >
          Download Resume
        </a>
        <div className="hamburger" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}