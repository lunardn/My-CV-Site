import React from 'react';

const Project2 = () => {
  return (
    <div className="project-details">
      <h2>ECE CUP — Robot autonome & Vision par Ordinateur</h2>

      <p><strong>Description :</strong> Conception et programmation d’un robot mobile intelligent dans le cadre d’un projet académique à l’ECE. Le robot est capable de suivre une ligne, détecter des formes et couleurs, et réagir en temps réel à son environnement.</p>

      <p><strong>Technologies utilisées :</strong> Python, OpenCV, Raspberry Pi, capteurs (ultrason, infrarouge), caméra 2D, moteurs DC, servomoteurs.</p>

      <p><strong>Objectifs :</strong> 
        <ul>
          <li>Suivre une trajectoire définie par une ligne noire sur un tapis.</li>
          <li>Détecter des panneaux visuels (triangle, étoile, rectangle rouge) via traitement d’image.</li>
          <li>Réagir dynamiquement : arrêt, rotation de la tête, allumage de LEDs, etc.</li>
        </ul>
      </p>

      <p><strong>Défis rencontrés :</strong> 
        <ul>
          <li>Traitement d’image en temps réel avec OpenCV.</li>
          <li>Calibration des capteurs et de la caméra pour une détection fiable.</li>
          <li>Intégration hardware/software sur Raspberry Pi.</li>
        </ul>
      </p>

      <p><strong>Résultat :</strong> Le robot a exécuté l’ensemble du scénario avec succès, incluant la détection de formes et la navigation autonome. Le projet a été présenté lors d’une soutenance avec démonstration en direct.</p>

      <p><strong>Compétences développées :</strong> Vision par ordinateur, programmation embarquée, traitement d’image, travail en équipe, gestion de projet agile.</p>
    </div>
  );
};

export default Project2;
