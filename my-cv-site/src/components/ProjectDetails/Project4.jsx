import React from 'react';
import montageFinal from './images/Gyrobot/schema_gyro.jpeg';
import archifonct from './images/Gyrobot/archit_fonct.jpeg';
import ET2bloc from './images/Gyrobot/ET2_bloc.jpeg';
import ET4bloc from './images/Gyrobot/ET4_bloc.jpeg';
import ET5bloc from './images/Gyrobot/ET5_bloc.jpeg';



import buzzerBlock from './images/Electrolift/electrolift_buzzer.jpeg';
import etagesMachine from './images/Electrolift/electrolift_etages_machine.jpeg';
import fs4Diagram from './images/Electrolift/electrolift_fs4.jpeg';
import fs5Diagram from './images/Electrolift/electrolift_fs5.jpeg';
import portesAnimation from './images/Electrolift/electrolift_portes_animation.jpeg';


const Project4 = () => {
  return (
    <div className="project-details">
      <h2>Gyrobot : Robot Auto-Équilibré à Deux Roues</h2>

      <p>
        <strong>Gyrobot</strong> est un projet de robotique embarquée visant à concevoir un robot à deux roues capable de s’auto-stabiliser verticalement et de se déplacer en ligne droite. Ce projet a été réalisé dans le cadre du module d’électronique de l’ECE, en utilisant une carte Arduino Nano, une centrale inertielle MPU6050 et des servomoteurs.
      </p>

      <h4>Objectif :</h4> 
      <p>Concevoir un robot gyropode capable de maintenir son équilibre, de se déplacer de manière stable et de réguler sa vitesse, tout en respectant des contraintes de précision et de réactivité.</p>

      <h4>Technologies utilisées :</h4>
      <ul>
        <li>Capteur MPU6050 (accéléromètre + gyroscope)</li>
        <li>Arduino Nano pour le contrôle embarqué</li>
        <li>Servomoteurs SG-90 pour l’actionnement</li>
        <li>Contrôleurs PID pour la stabilisation, la direction et la vitesse</li>
        <li>Logiciel Scilab pour la modélisation et la simulation</li>
      </ul>

      <img src={montageFinal} alt="Montage du Gyrobot" style={{ width: '50%', margin: '20px 0' }} />
      <br />

      <h4>Architecture fonctionnelle :</h4>
      <img src={archifonct} alt="Architecture fonctionnelle du Gyrobot" style={{ width: '100%', margin: '20px 0' }} />

      <p>Le système repose sur une boucle de rétroaction en temps réel :</p>
      <ol>
        <li>Lecture des données d’inclinaison via le MPU6050</li>
        <li>Calcul de l’angle de tangage avec la fonction atan2()</li>
        <li>Application de filtres passe-bas pour lisser les données</li>
        <li>Régulation de l’équilibre avec un PID principal</li>
        <li>Ajout d’un second PID pour le déplacement en ligne droite</li>
        <li>Ajout d’un troisième PID pour la régulation de la vitesse</li>
      </ol>


      {/* === ET1 === */}
      <h3>ET1 - Mesure de l'Angle de Tangage avec MPU6050</h3>
      <p><strong>Objectif:</strong> Mesurer l’<strong>angle de tangage</strong> du robot avec une <strong>précision inférieure à 2% d’erreur</strong>, en utilisant le capteur <strong>MPU6050</strong>.</p>

      <h4>Étapes principales:</h4>
      <ol>
        <li>
          <strong>Choix des bibliothèques Arduino</strong>
          <ul>
            <li><code>Adafruit_Sensor.h</code> : interface standard pour capteurs.</li>
            <li><code>Adafruit_MPU6050.h</code> : simplifie l’utilisation du MPU6050.</li>
            <li><code>Wire.h</code> : communication I2C avec le capteur.</li>
          </ul>
        </li>
        <li>
          <strong>Initialisation</strong>
          <ul>
            <li>Création d’un objet MPU6050.</li>
            <li>Configuration dans la fonction <code>setup()</code> : communication série, plages de mesure, filtre.</li>
          </ul>
        </li>
        <li>
          <strong>Lecture des données</strong>
          <ul>
            <li>Dans la boucle <code>loop()</code>, récupération des données d’accéléromètre, gyroscope et température.</li>
          </ul>
        </li>
        <li>
          <strong>Calcul de l’angle d’inclinaison</strong>
          <ul>
            <li>Utilisation de la fonction <code>atan2(y, z)</code> pour obtenir l’angle en radians.</li>
            <li>Conversion en degrés : <code>angle × 180/π</code>.</li>
          </ul>
        </li>
        <li>
          <strong>Ajustements</strong>
          <ul>
            <li>Réglage pour que 0° corresponde à la position verticale.</li>
            <li>Inversion de l’angle pour corriger l’orientation avant/arrière.</li>
            <li>Limitation de l’angle entre -90° et 90°.</li>
          </ul>
        </li>
        <li>
          <strong>Affichage et vérification</strong>
          <ul>
            <li>Affichage de l’angle sur le moniteur série.</li>
            <li>Comparaison avec des mesures manuelles (rapporteur) pour garantir une erreur &lt; 2%.</li>
          </ul>
        </li>
      </ol>

      <h4>Pourquoi <code>atan2()</code> ?</h4>
      <ul>
        <li>Fournit un angle précis, même selon le quadrant.</li>
        <li>Prend en compte la direction des accélérations.</li>
        <li>Essentiel pour la <strong>stabilisation</strong> et l’<strong>orientation</strong> du robot.</li>
      </ul>
      <br />


      {/* === ET2 === */}
      <h3>ET2 -Stabilisation d’un Gyropode avec PID</h3>

      <p><strong>Objectif: </strong>
        Stabiliser un gyropode à la verticale pendant au moins 10 secondes avec une amplitude d’oscillation maximale de ±15°.
      </p>

      <h4>Étapes de Conception</h4>
      <ul>
        <li>Réutilisation du code de l’ET1 pour le calcul de l’angle d’inclinaison.</li>
        <li>Ajout de la bibliothèque <code>Servo.h</code> pour contrôler les servomoteurs.</li>
        <li>Déclaration des objets pour le capteur, les servos, les paramètres PID (P, I, D), et les variables d’entrée, sortie, setpoint.</li>
        <li>Définition d’un filtre passe-bas et des broches des servomoteurs.</li>
      </ul>

      <h4>Réglage du PID</h4>
      <ul>
        <li>Utilisation de la méthode de Ziegler-Nichols pour obtenir des valeurs initiales.</li>
        <li>Ajustements manuels pour optimiser les coefficients PID.</li>
      </ul>

      <h4>Initialisation dans <code>setup()</code></h4>
      <ul>
        <li>Initialisation de la communication série pour le débogage.</li>
        <li>Attachement des servos aux broches.</li>
        <li>Initialisation du capteur MPU6050.</li>
        <li>Configuration du PID en mode automatique avec des limites de sortie adaptées aux servos.</li>
      </ul>

      <h4>Boucle Principale <code>loop()</code></h4>
      <ul>
        <li>Lecture des données d’accélération du MPU6050.</li>
        <li>Calcul de l’angle d’inclinaison avec <code>atan2()</code>.</li>
        <li>Application d’un filtre passe-bas pour lisser l’angle.</li>
        <li>Mise à jour de l’entrée du PID avec l’angle filtré.</li>
        <li>Réinitialisation du setpoint si le robot est trop incliné.</li>
        <li>Calcul de la sortie PID et conversion en commande pour les servos.</li>
        <li>Contraintes sur les vitesses pour rester dans les limites acceptables.</li>
        <li>Envoi des commandes aux servos et affichage des valeurs pour le débogage.</li>
        <li>Délai de 10 ms pour assurer une stabilisation en temps réel.</li>
      </ul>

      <h4>Comportement de Stabilisation</h4>
      <ul>
        <li>Inclinaison vers l’avant (&gt; 15°) → moteurs tournent en arrière.</li>
        <li>Inclinaison vers l’arrière (&lt; -15°) → moteurs tournent en avant.</li>
        <li>Inclinaison entre -15° et 15° → moteurs arrêtés.</li>
      </ul>

      <h4>Résultat</h4>
      <p>
        Le système assure une stabilisation efficace conforme aux spécifications de temps de réponse et d’erreur statique.
      </p>

      <h4>Schéma de Bloc</h4>
      <img src={ET2bloc} alt="Schéma de Bloc de ET2" style={{ width: '70%', margin: '20px 0' }} />
      <br />


      {/* === ET3 === */}
      <h3>ET3 - Réglage Fin et Validation des Paramètres PID</h3>
      <strong>Objectif: </strong>
      <p>
        Garantir que le gyropode reste à la verticale avec :
        <ul>
          <li>Temps de réponse à 5% (tr5%) &lt; 10 ms</li>
          <li>Erreur statique (ε*) &lt; 8%</li>
        </ul>
        Ces spécifications assurent une stabilisation rapide et précise, minimisant les oscillations.
      </p>

      <h4>Boucle Principale (loop)</h4>
      <ul>
        <li>Lecture des données d'accélération du capteur</li>
        <li>Calcul de l'angle d'inclinaison</li>
        <li>Calcul de l'erreur actuelle et précédente</li>
        <li>Commande des servomoteurs via la sortie du contrôleur PID</li>
        <li>Délai de 1 ms pour garantir une réponse en temps réel</li>
      </ul>

      <h4>Réglages et Simulations</h4>
      <ul>
        <li>Affinage de la plage du filtre</li>
        <li>Tests avec différents couples de coefficients <strong>Kp</strong> et <strong>Kd</strong></li>
        <li>Identification des paramètres optimaux pour répondre aux exigences techniques</li>
      </ul>
      <br />

      {/* === ET4 === */}
      <h3>ET4 – Contrôle Combiné : Équilibre et Mouvement</h3>
      <p>
        L’ajout d’un <strong>deuxième contrôleur PID</strong> permet de gérer simultanément
        <em>l’équilibrage</em> et le <em>mouvement vers l’avant</em> du robot gyropode.
      </p>

      <h4>PID 1 – Maintien de l’Équilibre</h4>
      <ul>
        <li>Contrôle l’<strong>angle d’inclinaison</strong> du robot.</li>
        <li>Calcule l’erreur entre l’angle mesuré et l’angle désiré (souvent 0°).</li>
        <li>Commande les <strong>vitesses des servomoteurs</strong> pour corriger l’inclinaison.</li>
      </ul>

      <h4>PID 2 – Contrôle de la Vitesse de Déplacement</h4>
      <ul>
        <li>Compare la <strong>vitesse actuelle</strong> du robot à la <strong>vitesse désirée</strong>.</li>
        <li>Produit une <strong>nouvelle consigne d’inclinaison</strong> (ex. : légère inclinaison vers l’avant).</li>
        <li>Cette consigne est transmise au PID 1 pour générer le mouvement.</li>
      </ul>

      <h4>Interaction entre les deux PID</h4>
      <p>
        Le PID 2 ajuste dynamiquement la consigne d’inclinaison en fonction de la vitesse souhaitée.
        Le PID 1 utilise cette consigne pour maintenir l’équilibre tout en permettant le déplacement.
      </p>

      <h4>Schéma de Bloc</h4>
      <p>
        Le système peut être représenté par un schéma de bloc où :
        <ul>
          <li>Le PID 2 agit sur la consigne d’inclinaison.</li>
          <li>Le PID 1 agit sur les moteurs pour atteindre cette consigne tout en stabilisant le robot.</li>
        </ul>
      </p>
      <img src={ET4bloc} alt="Schéma de Bloc de ET4" style={{ width: '100%', margin: '20px 0' }} />
      <br />


      {/* === ET5 === */}
      <h3>ET5 – Régulation de la Vitesse Constante</h3>
      <p>
        Dans cette phase du projet, l’objectif est de permettre au robot de se déplacer à une <strong>vitesse rectiligne constante</strong> pendant au moins 10 secondes, avec une <strong>fluctuation maximale de 10%</strong>.
      </p>

      <strong>Objectif</strong>
      <ul>
        <li>Maintenir une vitesse stable malgré les perturbations.</li>
        <li>Limiter les variations de vitesse à moins de 10%.</li>
      </ul>

      <h4>Architecture PID</h4>
      <p>Trois contrôleurs PID sont utilisés :</p>
      <ol>
        <li><strong>PID d’inclinaison</strong> : Maintient l’équilibre du robot en ajustant l’angle de tangage.</li>
        <li><strong>PID de cap</strong> : Stabilise la direction du robot.</li>
        <li><strong>PID de vitesse</strong> : Régule la vitesse de déplacement en fonction de l’erreur de vitesse.</li>
      </ol>

      <h4>Fonctionnement</h4>
      <ul>
        <li>La <strong>vitesse actuelle</strong> est calculée à l’aide de capteurs de position ou d’encodeurs.</li>
        <li>Le <strong>PID de vitesse</strong> compare cette vitesse à la consigne et ajuste la sortie pour corriger l’écart.</li>
        <li>Les trois PID travaillent en synergie sans interférer, chacun avec ses propres coefficients Kp, Ki, Kd.</li>
      </ul>

      <h4>Boucle de Contrôle</h4>
      <p>
        La boucle principale appelle régulièrement les PID pour ajuster les commandes des servomoteurs :
      </p>
      <ul>
        <li>PID d’inclinaison et de cap : Maintien de la stabilité.</li>
        <li>PID de vitesse : Maintien de la vitesse constante.</li>
      </ul>

      <h4>Tests et Ajustements</h4>
      <ul>
        <li>Filtrage des données de vitesse pour réduire le bruit des capteurs.</li>
        <li>Tests en conditions réelles pour valider la stabilité de la vitesse.</li>
        <li>Ajustement des coefficients PID et des paramètres de filtrage si nécessaire.</li>
      </ul>

      <p>Un schéma de bloc accompagne ce système pour illustrer les interactions entre les PID:</p>
      <img src={ET5bloc} alt="Schéma de Bloc de ET5" style={{ width: '100%', margin: '20px 0' }} />

      <br />
      <h4>Défis rencontrés :</h4> 
      <p>Calibration fine des PID, gestion de la stabilité en mouvement, intégration matérielle (soudure, montage), et limitations physiques du robot (poids, inertie).</p>

      <h3>Résultats :</h3>
      <p>Le robot a réussi à :</p>
      <ul>
        <li>Maintenir la verticale avec une erreur inférieure à 2%</li>
        <li>Tenir debout pendant 10 secondes avec une oscillation inférieure à ±15°</li>
        <li>Réagir en moins de 1 ms avec une erreur statique inférieure à 8%</li>
        <li>Parcourir 80 cm en ligne droite dans un couloir de 25 cm</li>
      </ul>

      <h4>Équipe :</h4>
      <p>Luna Rondineau et Éléonore Videment – une collaboration efficace alliant compétences en électronique, programmation Arduino, modélisation Scilab et gestion de projet.</p>
    </div>
  );
};

export default Project4;
