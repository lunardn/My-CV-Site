import React from 'react';

const Project1 = () => {
  return (
    <div className="project-details">
      <h2>Site Web CV — React & Vite</h2>

      <p><strong>Description :</strong> Création d’un site web personnel moderne et responsive pour présenter mon parcours, mes compétences, mes projets et faciliter le contact avec les recruteurs.</p>

      <p><strong>Technologies utilisées :</strong> React.js, Vite, CSS personnalisé, React Router, EmailJS, APIs externes (GitHub, Weather, Hacker News), Vercel.</p>

      <p><strong>Objectifs :</strong> 
         Développer un site CV interactif avec :
        <ul>
          <li>Navigation fluide et responsive</li>
          <li>Formulaire de contact fonctionnel</li>
          <li>Affichage dynamique de données via API</li>
          <li>Multilingue (FR/EN) avec react-intl</li>
          <li>Téléchargement du CV en PDF</li>
        </ul>
      </p>

      <p><strong>Défis rencontrés :</strong> 
        <ul>
          <li>Problèmes de build avec Vite sur Vercel</li>
          <li>Configuration du plugin React et du vite.config.js</li>
          <li>Optimisation du responsive design et des performances</li>
        </ul>
      </p>

      <p><strong>Résultat :</strong> Le site est en ligne et accessible ici : 
        <h3><a href="https://lunarondineaucv.vercel.app/" target="_blank" rel="noopener noreferrer">https://cv-react-vite.vercel.app/</a></h3>
        <p>Vous êtes sur le site !</p>
      </p>
    </div>
  );
};

export default Project1;
