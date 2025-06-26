import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projets réalisés</h2>
    <div className="card-container">
      
      <div className="card">
        <h3>Site Web — Projet Java / MySQL</h3>
        <p>Création d’un site web complet en Java avec base de données, back-end/front-end.</p>
        <Link to="/project1">Voir plus</Link>
      </div>

      <div className="card">
        <h3>ECE Cup — Robot autonome</h3>
        <p>Développement et programmation d’un robot pour une compétition interne d’ingénierie.</p>
        <Link to="/project2">Voir plus</Link>
      </div>

      <div className="card">
        <h3>Reconnaissance vocale avec IA</h3>
        <p>Projet scolaire utilisant l’intelligence artificielle pour interpréter des commandes vocales.</p>
        <Link to="/project3">Voir plus</Link>
      </div>

      <div className="card">
        <h3>Gyrobot</h3>
        <p>Travail sur des systèmes embarqués et numériques en électronique et automatisation.</p>
        <Link to="/project4">Voir plus</Link>
      </div>

      <div className="card">
        <h3>Synthé</h3>
        <p>Travail sur des systèmes embarqués et numériques en électronique et automatisation.</p>
        <Link to="/project5">Voir plus</Link>
      </div>

      <div className="card">
        <h3>Ascenseur (FPGA)</h3>
        <p>Travail sur des systèmes embarqués et numériques en électronique et automatisation.</p>
        <Link to="/project6">Voir plus</Link>
      </div>
    </div>
  </section>
);

export default Projects;
