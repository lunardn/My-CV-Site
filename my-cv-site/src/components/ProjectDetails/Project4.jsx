import React from 'react';

const Project4 = () => {
  return (
    <div className="project-details">
      <h2>Gyrobot : Robot Auto-Équilibré à Deux Roues</h2>

      <p>
        <strong>Gyrobot</strong> est un projet de robotique embarquée visant à concevoir un robot à deux roues capable de s’auto-stabiliser verticalement et de se déplacer en ligne droite. Ce projet a été réalisé dans le cadre du module d’électronique de l’ECE, en utilisant une carte Arduino Nano, une centrale inertielle MPU6050 et des servomoteurs.
      </p>

      <p><strong>Objectif :</strong> Concevoir un robot gyropode capable de maintenir son équilibre, de se déplacer de manière stable et de réguler sa vitesse, tout en respectant des contraintes de précision et de réactivité.</p>

      <p><strong>Technologies utilisées :</strong></p>
      <ul>
        <li>Capteur MPU6050 (accéléromètre + gyroscope)</li>
        <li>Arduino Nano pour le contrôle embarqué</li>
        <li>Servomoteurs SG-90 pour l’actionnement</li>
        <li>Contrôleurs PID pour la stabilisation, la direction et la vitesse</li>
        <li>Logiciel Scilab pour la modélisation et la simulation</li>
      </ul>

      <p><strong>Architecture :</strong> Le système repose sur une boucle de rétroaction en temps réel :</p>
      <ol>
        <li>Lecture des données d’inclinaison via le MPU6050</li>
        <li>Calcul de l’angle de tangage avec la fonction atan2()</li>
        <li>Application de filtres passe-bas pour lisser les données</li>
        <li>Régulation de l’équilibre avec un PID principal</li>
        <li>Ajout d’un second PID pour le déplacement en ligne droite</li>
        <li>Ajout d’un troisième PID pour la régulation de la vitesse</li>
      </ol>

      <p><strong>Défis rencontrés :</strong> Calibration fine des PID, gestion de la stabilité en mouvement, intégration matérielle (soudure, montage), et limitations physiques du robot (poids, inertie).</p>

      <p><strong>Résultats :</strong> Le robot a réussi à :</p>
      <ul>
        <li>Maintenir la verticale avec une erreur inférieure à 2%</li>
        <li>Tenir debout pendant 10 secondes avec une oscillation inférieure à ±15°</li>
        <li>Réagir en moins de 1 ms avec une erreur statique inférieure à 8%</li>
        <li>Parcourir 80 cm en ligne droite dans un couloir de 25 cm</li>
      </ul>

      <p><strong>Équipe :</strong> Luna Rondineau et Éléonore Videment – une collaboration efficace alliant compétences en électronique, programmation Arduino, modélisation Scilab et gestion de projet.</p>
    </div>
  );
};

export default Project4;
