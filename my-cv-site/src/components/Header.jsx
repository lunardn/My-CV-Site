import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaUser, FaBriefcase, FaGraduationCap, FaTools, FaProjectDiagram, FaPhone } from 'react-icons/fa';
import HamburgerMenu from './HamburgerMenu';
import '../App.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <h1>Luna Rondineau</h1>
          <div className="social-links">
            <a href="https://linkedin.com/in/lunarondineau" target="_blank" rel="noreferrer">
             <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:luna.rondineau@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        {/* Menu desktop */}
        <nav className="desktop-menu">
          <ul>
            <li><a href="#about"><FaUser /> À propos</a></li>
            <li><a href="#experience"><FaBriefcase /> Expériences</a></li>
            <li><a href="#education"><FaGraduationCap /> Formation</a></li>
            <li><a href="#skills"><FaTools /> Compétences</a></li>
            <li><a href="#projects"><FaProjectDiagram /> Projets</a></li>
            <li><a href="#contact"><FaPhone /> Contact</a></li>
          </ul>
        </nav>

        {/* Menu mobile */}
        <div className="mobile-menu">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
