import React from 'react';

const Experience = () => (
  <section id="experience" className="section">
    <h2>Expériences professionnelles</h2>

    {/* Développeur Full Stack */}
    <div className="timeline">

        <div className="timeline-item">
            <h3>Développeur Full Stack — Hoffmann IA</h3>
            <h4>2024 – 2025</h4>
            <p>➣ Développement d'un site web en ReactJS</p>
            <p>➣ Développement d'une API en NodeJS</p>
            <p>➣ Optimisation des performances du site web</p>
        </div>

        {/* Eric Kayser & Lululemon */}
        <div className="timeline-item">
            <h3>Conseillère de vente / Educator — Eric Kayser & Lululemon</h3>
            <h4>2023 – 2025</h4>
            <p>➣ Service client</p> 
            <p>➣ Réassort</p>
            <p>➣ Procédure d'encaissement</p>
            <p>➣ Accueil et conseil en boutique</p>
        </div>

        {/* Cop1 */}
        <div className="timeline-item">
            <h3>Bénévolat — Association Cop1</h3>
            <h4>2023</h4>
            <p>➣ Organisation d’événements et recherche de partenaires pour aider les étudiants en difficulté</p>
        </div>

        {/* Caroll & Promod */}
        <div className="timeline-item">
            <h3>Conseillère de vente — Caroll / Promod</h3>
            <h4>2019 – 2021</h4>
            <p>➣ Accueil et conseil clientèles (Personnel shopper: conseil de morphologie)</p> 
            <p>➣ Gestion de commandes et stock</p>
            <p>➣ Procédure d'encaissement</p>
        </div>
                
        {/* Soutien scolaire */}
        <div className="timeline-item">
            <h3> Soutien scolaire - Élèves Français et Américains</h3>
            <h4>2017 – 2019</h4>
            <p>➣ Cours de Maths - Physique - Anglais - SVT - Français</p>
        </div>

        {/* BHS Ambassador */}
        <div className="timeline-item">
            <h3>Ambassadrice IB / Accueil ECE</h3>
            <h4>2017 – 2019</h4>
            <p>➣ Accueil des nouveaux étudiants</p>
            <p>➣ Organisation de portes ouvertes</p> 
            <p>➣ Présentation des formations</p>
        </div>

    </div>
  </section>
);

export default Experience;
