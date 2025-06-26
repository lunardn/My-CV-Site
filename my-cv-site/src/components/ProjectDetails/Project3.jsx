import React from 'react';

const Project3 = () => {
  return (
    <div className="project-details">
      <h2>NeuralSpeech : Reconnaissance Vocale Embarquée avec IA</h2>

      <p>
        <strong>NeuralSpeech</strong> est un projet de reconnaissance vocale en temps réel développé dans le cadre du module de calcul embarqué de l’ECE.
        Il vise à transformer un signal vocal capté par un microphone en commande numérique, le tout sur une plateforme à ressources limitées : la carte Arduino Due.
      </p>

      <p><strong>Objectif :</strong> Créer un système autonome, léger et réactif capable de reconnaître des mots-clés vocaux grâce à l’intelligence artificielle, sans dépendre d’un serveur externe.</p>

      <p><strong>Technologies utilisées :</strong></p>
      <ul>
        <li>Traitement du signal audio : échantillonnage à 32 kHz, filtrage passe-bas, réduction de bruit</li>
        <li>Extraction de caractéristiques : coefficients MFCC (Mel Frequency Cepstral Coefficients)</li>
        <li>Apprentissage automatique : réseau de neurones convolutionnel (CNN) entraîné sur des données vocales</li>
        <li>Implémentation embarquée : conversion du modèle IA en format optimisé (.kesas) pour exécution sur Arduino</li>
        <li>Langages et outils : Python, TensorFlow, Keras, Audacity, Arduino IDE</li>
      </ul>

      <p><strong>Architecture :</strong> Le système suit une chaîne de traitement en 6 étapes :</p>
      <ol>
        <li>Numérisation du signal audio</li>
        <li>Filtrage et réduction de la fréquence d’échantillonnage</li>
        <li>Validation des enregistrements</li>
        <li>Extraction des MFCC</li>
        <li>Entraînement du modèle IA</li>
        <li>Classification en temps réel sur Arduino</li>
      </ol>

      <p><strong>Défis rencontrés :</strong> Optimisation du traitement en temps réel sur microcontrôleur, gestion mémoire, qualité des enregistrements, conversion du modèle IA pour l’embarqué.</p>

      <p><strong>Résultats :</strong> Le système a atteint une précision de 100 % sur les jeux de validation, avec une erreur quadratique moyenne (MSE) inférieure à 0,05. Le modèle est capable de reconnaître les mots « bleu » et « rouge » en temps réel, avec retour visuel via LEDs et écran OLED.</p>

      <p><strong>Équipe :</strong> Luna Rondineau, Noam Aich, Romain Ligneres et Augustin Lipka – chacun ayant contribué avec des compétences spécifiques en traitement du signal, IA, électronique embarquée et intégration système.</p>
    </div>
  );
};

export default Project3;
