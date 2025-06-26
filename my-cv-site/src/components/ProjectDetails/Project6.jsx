import React from 'react';
import montageFinal from './images/electrolift_montage.jpeg';
import fs1Diagram from './images/electrolift_fs1.jpeg';
import fs2Diagram from './images/electrolift_fs2.jpeg';
import codePresidentiel from './images/electrolift_code_presidentiel.jpeg';
import distanceDetector from './images/electrolift_distance_detector.jpeg';
import buzzerBlock from './images/electrolift_buzzer.jpeg';
import etagesMachine from './images/electrolift_etages_machine.jpeg';
import fs4Diagram from './images/electrolift_fs4.jpeg';
import fs5Diagram from './images/electrolift_fs5.jpeg';
import portesAnimation from './images/electrolift_portes_animation.jpeg';

const ProjectElectroLift = () => {
  return (
    <div className="project-details">
      <h2>Electro-Lift : Système de Levage Électronique avec FPGA</h2>

      <p>
        <strong>Electro-Lift</strong> est un projet d’électronique embarquée visant à concevoir un ascenseur intelligent et sécurisé à l’aide d’une carte FPGA et du logiciel Quartus. Ce projet a été réalisé dans le cadre d’un module d’électronique avancée, combinant programmation VHDL, conception matérielle et intégration de composants.
      </p>

      <img src={montageFinal} alt="Montage final de l'Electro-Lift" style={{ width: '100%', margin: '20px 0' }} />

      <p><strong>Objectif :</strong> Concevoir un système de levage électronique innovant, efficace et sûr, capable de répondre aux besoins d’accessibilité dans un monde de plus en plus technologique.</p>

      <p><strong>Technologies utilisées :</strong></p>
      <ul>
        <li>Carte FPGA DE10-Lite</li>
        <li>Logiciel Quartus Prime et ModelSim</li>
        <li>Langage VHDL pour la programmation</li>
        <li>Capteur ultrason, buzzer, LEDs, afficheurs 7 segments</li>
        <li>Registre à décalage 74HC595</li>
      </ul>

      <p><strong>Architecture fonctionnelle :</strong></p>
      <ol>
        <li><strong>FS1 :</strong> Activation du mode maintenance avec clignotement des LEDs et réglage de la vitesse via potentiomètre</li>
        <li><strong>FS2 :</strong> Traitement des commandes utilisateurs, y compris un code secret pour accéder à l’étage présidentiel</li>
        <li><strong>FS3 :</strong> Sécurité des passagers avec détection d’obstacles et appel d’urgence via buzzer</li>
        <li><strong>FS4 :</strong> Déplacement séquentiel entre les étages avec retour automatique au RDC</li>
        <li><strong>FS5 :</strong> Affichage dynamique des étages, animation des portes et visualisation des appels via LEDs</li>
      </ol>

      <img src={fs1Diagram} alt="RTL Viewer de la FS1" style={{ width: '100%', margin: '20px 0' }} />  
      <img src={fs2Diagram} alt="Diagramme FS2" style={{ width: '100%', margin: '20px 0' }} />
      <img src={codePresidentiel} alt="Montage du code présidentiel" style={{ width: '100%', margin: '20px 0' }} />
      <img src={distanceDetector} alt="Block de détection de distance" style={{ width: '100%', margin: '20px 0' }} />
      <img src={buzzerBlock} alt="Block du buzzer" style={{ width: '100%', margin: '20px 0' }} />
      <img src={etagesMachine} alt="Machine à états pour les étages" style={{ width: '100%', margin: '20px 0' }} />
      <img src={fs4Diagram} alt="RTL Viewer de la FS4" style={{ width: '100%', margin: '20px 0' }} />
      <img src={fs5Diagram} alt="RTL Viewer de la FS5" style={{ width: '100%', margin: '20px 0' }} />
      <img src={portesAnimation} alt="Animation des portes sur FPGA" style={{ width: '100%', margin: '20px 0' }} />

      <p><strong>Résultats :</strong></p>
      <ul>
        <li>Fonctionnement complet de l’ascenseur avec toutes les fonctionnalités prévues</li>
        <li>Affichage clair des étages et des appels utilisateurs</li>
        <li>Système de sécurité opérationnel avec détection d’obstacles et alerte sonore</li>
        <li>Interface utilisateur intuitive et réactive</li>
      </ul>

      <p><strong>Équipe :</strong> Luna Rondineau, Eléonore Videment, Romain Barrière, Halima Ghazi – une équipe pluridisciplinaire ayant mené à bien un projet complexe de conception électronique embarquée.</p>
    </div>
  );
};

export default ProjectElectroLift;
