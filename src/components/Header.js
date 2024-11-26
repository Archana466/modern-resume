import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = () => (
  <header>
    <h2>Archana BC</h2>
    <h6>Software Developer</h6>
    <div className="links">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
      <a href="mailto:archanabc23@gmail.com">
        <FaEnvelope /> Email
      </a>
      <a href="tel:+91 6360448048">
        <FaPhone /> Phone
      </a>
    </div>
  </header>
);

export default Header;
