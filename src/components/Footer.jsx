import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF5', '#F5FF33', '#A833FF', '#FF8333'];
  const text = "Created By Maptuhul Ihsan & AI";
  const [colorIndices, setColorIndices] = useState([]);
  
  useEffect(() => {
    // Initialize with random color indices
    const indices = Array(text.length).fill().map(() => Math.floor(Math.random() * colors.length));
    setColorIndices(indices);
    
    // Change colors periodically for animation effect
    const interval = setInterval(() => {
      setColorIndices(prev => 
        prev.map((_, i) => (i % 3 === 0) ? 
          Math.floor(Math.random() * colors.length) : prev[i]
        )
      );
    }, 1500);
    
    return () => clearInterval(interval);
  }, [colors.length]);
  
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <p className="font-bold flex flex-wrap justify-center items-center">
          {text.split('').map((char, index) => (
            <span 
              key={index} 
              className="transition-colors duration-500"
              style={{ color: colorIndices[index] !== undefined ? colors[colorIndices[index]] : 'inherit' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          <FaHeart className="inline text-red-500 mx-1 animate-pulse" />
        </p>
        <p>Copyright © {currentYear} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;