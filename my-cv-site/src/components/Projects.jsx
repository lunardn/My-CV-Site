import React from 'react';

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projets réalisés</h2>
    <div className="card-container">
        <div className="card">
            <h3>Site Web — Projet Java / MySQL</h3>
            <p>Création d’un site web complet en Java avec base de données, back-end/front-end.</p>
        </div>
        
        <div className="card">
            <h3>ECE Cup — Robot autonome</h3>
            <p>Développement et programmation d’un robot pour une compétition interne d’ingénierie.</p>
        </div>

        <div className="card">
            <h3>Reconnaissance vocale avec IA</h3>
            <p>Projet scolaire utilisant l’intelligence artificielle pour interpréter des commandes vocales.</p>
        </div>

        <div className="card">
            <h3>Gyrobot / Synthé / Ascenseur (FPGA)</h3>
            <p>Travail sur des systèmes embarqués et numériques en électronique et automatisation.</p>
        </div>
    </div>
  </section>
);

export default Projects;
