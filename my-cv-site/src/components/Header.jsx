import React from 'react';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-left">
        <h1>Luna Rondineau</h1>
        <div className="social-links">
          <a href="https://linkedin.com/in/lunarondineau" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:luna.rondineau@gmail.com">Email</a>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#experience">Expériences</a></li>
          <li><a href="#education">Formation</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
