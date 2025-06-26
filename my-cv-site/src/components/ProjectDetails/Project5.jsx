import React from 'react';

const Project5 = () => {
  return (
    <div className="project-details">
      <h2>Le Synthé : Création d’un Synthétiseur Électronique avec Arduino</h2>

      <p>
        <strong>Le Synthé</strong> est un projet d’électronique réalisé dans le cadre du second semestre d’ingénierie. Il a pour objectif de concevoir un synthétiseur électronique fonctionnel à l’aide d’une carte Arduino Nano, de composants analogiques et d’une interface graphique. Ce projet allie électronique, programmation et design sonore.
      </p>

      <p><strong>Objectif :</strong> Créer un synthétiseur capable de générer des sons variés, contrôlables via un clavier, un métronome et une interface graphique, tout en respectant des contraintes techniques de fréquence, de stabilité et d’ergonomie.</p>

      <p><strong>Technologies utilisées :</strong></p>
      <ul>
        <li>Arduino Nano pour le contrôle central</li>
        <li>NE555 en mode astable pour la génération de signaux audio</li>
        <li>Buzzer pour la sortie sonore</li>
        <li>Écran OLED pour l’affichage du tempo</li>
        <li>Interface graphique développée avec Processing</li>
        <li>Bibliothèques : TimerOne, Adafruit_GFX, Minim, Wire</li>
      </ul>

      <p><strong>Architecture :</strong></p>
      <ol>
        <li><strong>Clavier :</strong> Génère des fréquences correspondant aux notes musicales (Do à Si) via des résistances et un condensateur.</li>
        <li><strong>Métronome :</strong> Réglage du tempo et de la tonalité via deux potentiomètres, avec affichage sur écran OLED.</li>
        <li><strong>Interface graphique :</strong> Affiche la fréquence jouée, le nom de la note et simule un clavier visuel interactif.</li>
        <li><strong>Activation du VCO :</strong> Système de commutation via bouton poussoir et multiplexeur pour activer/désactiver le filtre.</li>
      </ol>

      <p><strong>Défis rencontrés :</strong> Qualité sonore limitée par le buzzer, difficulté à implémenter la désactivation du VCO, gestion du temps et intégration de l’interface graphique.</p>

      <p><strong>Résultats :</strong></p>
      <ul>
        <li>Clavier fonctionnel avec génération de notes précises</li>
        <li>Métronome réglable de 0 à 200 BPM avec tonalité ajustable</li>
        <li>Interface graphique interactive et informative</li>
        <li>Projet finalisé dans les délais avec une bonne répartition des tâches</li>
      </ul>

      <p><strong>Équipe :</strong> Luna Rondineau, Ambrine Senoussi, Suzy Cassandra Ebobisse – une équipe complémentaire ayant travaillé efficacement sur la conception, le codage et la documentation du projet.</p>
    </div>
  );
};

export default Project5;
