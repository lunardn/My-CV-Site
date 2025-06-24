import React from 'react';
import photo from '../assets/luna.jpeg';

const Preface = () => (
  <section className="preface">
    <div className="preface-overlay">
      <div className="preface-content">
        <img src={photo} alt="Luna Rondineau" className="preface-photo" />
        <div className="preface-text">
          <h1>Luna Rondineau</h1>
          <h2>Étudiante en ingénierie – Santé & Technologies</h2>
          <div className="preface-info">
            <p><strong>Email :</strong> luna.rondineau@gmail.com</p>
            <p><strong>Adresse :</strong> Île-de-France, France</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Preface;
