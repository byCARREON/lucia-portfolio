import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LineAnimation from '../Animations/lineAnimation';
function Navbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
      anime({
        targets: link,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: 1500 + 100 * index, // Ajusta el valor de retraso según tus necesidades
      });
    });
  }, []);

  return (
    <div>
      <nav className="container flex items-center justify-between py-4 px-8">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl nav-link">✺</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="nav-link link">Projects</Link>
          <Link to="/about" className="nav-link link">About Me</Link>
        </div>
      </nav>
      <LineAnimation />
    </div>
  );
}

export default Navbar;