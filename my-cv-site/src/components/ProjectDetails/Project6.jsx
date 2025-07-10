import React from 'react';
import montageFinal from './images/Electrolift/electrolift_montage.jpeg';
import fs1Diagram from './images/Electrolift/electrolift_fs1.jpeg';
import fs2Diagram from './images/Electrolift/electrolift_fs2.jpeg';
import codePresidentiel from './images/Electrolift/electrolift_code_presidentiel.jpeg';
import distanceDetector from './images/Electrolift/electrolift_distance_detector.jpeg';
import buzzerBlock from './images/Electrolift/electrolift_buzzer.jpeg';
import etagesMachine from './images/Electrolift/electrolift_etages_machine.jpeg';
import fs4Diagram from './images/Electrolift/electrolift_fs4.jpeg';
import fs5Diagram from './images/Electrolift/electrolift_fs5.jpeg';
import portesAnimation from './images/Electrolift/electrolift_portes_animation.jpeg';

const Project6 = () => {
  return (
    <div className="project-details">
      <h2>Electro-Lift : Système de Levage Électronique avec FPGA</h2>

      <p>
        <strong>Electro-Lift</strong> est un projet d’électronique embarquée visant à concevoir un ascenseur intelligent et sécurisé à l’aide d’une carte FPGA et du logiciel Quartus. Ce projet a été réalisé dans le cadre d’un module d’électronique avancée, combinant programmation VHDL, conception matérielle et intégration de composants.
      </p>

      <h4>Objectif :</h4> 
      <p>Concevoir un système de levage électronique innovant, efficace et sûr, capable de répondre aux besoins d’accessibilité dans un monde de plus en plus technologique.</p>

      <h4>Technologies utilisées :</h4>
      <ul>
        <li>Carte FPGA DE10-Lite</li>
        <li>Logiciel Quartus Prime et ModelSim</li>
        <li>Langage VHDL pour la programmation</li>
        <li>Capteur ultrason, buzzer, LEDs, afficheurs 7 segments</li>
        <li>Registre à décalage 74HC595</li>
      </ul>

      <img src={montageFinal} alt="Montage final de l'Electro-Lift" style={{ width: '100%', margin: '20px 0' }} />

      <h4>Architecture fonctionnelle :</h4>
      <ol>
        <li><strong>FS1 :</strong> Activation du mode maintenance avec clignotement des LEDs et réglage de la vitesse via potentiomètre</li>
        <li><strong>FS2 :</strong> Traitement des commandes utilisateurs, y compris un code secret pour accéder à l’étage présidentiel</li>
        <li><strong>FS3 :</strong> Sécurité des passagers avec détection d’obstacles et appel d’urgence via buzzer</li>
        <li><strong>FS4 :</strong> Déplacement séquentiel entre les étages avec retour automatique au RDC</li>
        <li><strong>FS5 :</strong> Affichage dynamique des étages, animation des portes et visualisation des appels via LEDs</li>
      </ol>

      <br />
      {/* === FS1 === */}
      <h3>FS1 - Fonctionnement du Mode Maintenance</h3>
      <p>
        Cette première partie se centre autour du <strong>mode maintenance</strong>. En effet, ce mode est activable à
        n’importe quel moment en appuyant simultanément et à deux reprises sur les deux boutons de la carte DE-10.
        Pour cela, une <strong>machine d’état simple</strong> est créée pour vérifier que les deux boutons aient été
        appuyés simultanément deux fois de suite. En sortie, ce bloc retourne une valeur <strong>1</strong> si le mode
        maintenance est activé, sinon <strong>0</strong>.
      </p>

      <p>
        Ensuite, l’objectif est de faire <strong>clignoter les LEDs</strong> et de permettre, à l’aide d’un
        <strong> potentiomètre</strong>, d’augmenter ou de réduire la vitesse d’ascension de l’ascenseur. Pour cela,
        deux blocs sont créés :
        <ul>
          <li><strong>ChangeClock</strong> : permet de faire varier la vitesse</li>
          <li><strong>FS1</strong> : envoie cette nouvelle vitesse aux LEDs</li>
        </ul>
      </p>

      <p>
        Dans le bloc <strong>ChangeClock</strong>, on retrouve :
        <ul>
          <li>Un <strong>ADC 12 bits</strong> qui convertit les données du potentiomètre en binaire</li>
          <li>Un bloc contenant différentes <strong>horloges</strong> correspondant à des vitesses (1Hz, 2Hz, etc.)</li>
          <li>Des <strong>diviseurs d’horloge</strong>, des <strong>bascules D</strong> et des <strong>portes logiques</strong> pour créer les clocks</li>
        </ul>
      </p>

      <p>
        Une autre <strong>machine à états</strong> est utilisée pour sélectionner la clock en fonction de la position du
        potentiomètre. Un <strong>multiplexeur</strong> permet ensuite de choisir la clock active en sortie. Même si le
        mode maintenance est désactivé, la vitesse sélectionnée est conservée en mémoire.
      </p>

      <p>
        Enfin, cette nouvelle vitesse est injectée dans le bloc <strong>FS1</strong>. Si le mode maintenance est activé,
        les LEDs clignotent à la vitesse sélectionnée.
      </p>

      <img src={fs1Diagram} alt="RTL Viewer de la FS1" style={{ width: '100%', margin: '20px 0' }} />
      <br />

      {/* === FS2 === */}
      <h3>FS2 – Gestion des demandes depuis la cabine</h3>

      <p>
        La fonction <strong>FS2</strong> concerne la prise en charge des demandes des usagers depuis la cabine de
        l’ascenseur. Elle repose sur quatre contraintes d’implémentation :
      </p>

      <ul>
        <li>Les usagers doivent effectuer les demandes à l’aide de <strong>boutons poussoirs</strong>.</li>
        <li>L‘<strong>étage actuel</strong> de l’ascenseur doit être affiché sur la breadboard.</li>
        <li>Il n’y a que <strong>7 boutons</strong> dans l’ascenseur pour aller de l’étage 0 à 6.</li>
        <li>Un <strong>code d’accès</strong> permet d’accéder au 7ᵉ étage, la suite présidentielle.</li>
      </ul>

      <p>
        Les 7 boutons poussoirs sont initialisés en <strong>pull-down</strong>, puis un <strong>antirebond</strong> est
        ajouté pour obtenir un signal plus clair. Les demandes d’étages sont ensuite envoyées à une
        <strong> machine à états</strong> qui affiche l’étage actuel et déplace l’ascenseur selon les demandes (fonction FS4).
      </p>

      <p>
        Cette machine à états joue donc un double rôle : <strong>afficher l’étage actuel</strong> et <strong>gérer les déplacements</strong>.
      </p>

      <p>
        Une autre machine à états est dédiée à la création du <strong>code secret</strong> pour accéder à l’étage présidentiel.
        Le code est : <code>KEY0 → KEY0 → KEY1 → KEY0 → KEY0</code>. Il est implémenté en <strong>8 états</strong> :
        un pour chaque appui, un pour chaque pause entre deux KEY0 consécutifs (pour éviter les appuis prolongés),
        et un dernier état pour valider la demande. La sortie de cette machine est <strong>1</strong> si le code est correct.
      </p>

      <p>
        Enfin, pour les appels depuis les étages, ce sont les <strong>switchs de la breadboard</strong> qui sont utilisés.
        Une simple <strong>porte logique OR</strong> permet de combiner les demandes venant des boutons de la cabine
        et des switchs pour un même étage.
      </p>

      <img src={fs2Diagram} alt="Diagramme FS2" style={{ width: '70%', margin: '20px 0' }} />
      <img src={codePresidentiel} alt="Montage du code présidentiel" style={{ width: '70%', margin: '20px 0' }} />
      <br />

      {/* === FS3 === */}
      <h3>FS3 – Assurer la sécurité des passagers</h3>

      <h4>ET3.1 – Détection d’obstacles avec capteur à ultrasons</h4>
      <p>
        Cette partie met en œuvre un <strong>module de détection de distance</strong> pour l’Electrolift, à l’aide d’un
        <strong> capteur à ultrasons</strong>. L’objectif est de maintenir les portes de l’ascenseur ouvertes tant qu’un
        obstacle est détecté. Cette fonctionnalité est implémentée en <strong>VHDL</strong>.
      </p>

      <p>
        Le code commence par déclarer les <strong>bibliothèques IEEE</strong> et les ports nécessaires : une entrée pour
        l’horloge du système, une entrée pour l’état du capteur, et une sortie indiquant si les portes doivent rester
        ouvertes.
      </p>

      <p>
        L’architecture <code>DistanceDetectionLogic</code> gère la logique de détection. Elle utilise des signaux pour
        suivre l’état actuel et précédent du capteur, ainsi qu’un <strong>compteur</strong> pour mesurer le nombre de
        cycles d’horloge où un obstacle est détecté.
      </p>

      <p>
        Le processus est déclenché à chaque <strong>front montant de l’horloge</strong>. Si un obstacle est détecté, le
        compteur s’incrémente. Si l’état précédent indiquait déjà un obstacle, le compteur est réinitialisé.
        <br />
        La sortie est mise à <code>'1'</code> si le compteur dépasse <strong>50 cycles</strong> ou est égal à 0, ce qui
        signifie que les portes doivent rester ouvertes. Sinon, la sortie est <code>'0'</code> pour les fermer.
      </p>

      <h4>ET3.2 – Activation du buzzer en cas d’urgence</h4>
      <p>
        Cette partie contrôle un <strong>buzzer</strong> qui s’active lorsqu’un appel d’urgence est déclenché par un
        appui simultané sur les boutons <code>KEY0</code> et <code>KEY1</code> pendant une seconde. Cette logique est
        également codée en <strong>VHDL</strong>.
      </p>

      <p>
        Le code déclare les bibliothèques <code>IEEE</code> et les ports de l’entité <code>Buzzer</code> : entrée
        horloge, état de la machine à états, détection d’urgence, et sortie pour activer le buzzer.
      </p>

      <p>
        L’architecture <code>BuzzerLogic</code> gère la logique de contrôle. Elle utilise plusieurs signaux pour :
        <ul>
          <li>Suivre le temps</li>
          <li>Mémoriser l’état précédent</li>
          <li>Contrôler l’état du buzzer</li>
          <li>Gérer l’état d’urgence</li>
          <li>Stocker l’état courant</li>
        </ul>
      </p>

      <p>
        Le processus est déclenché à chaque front montant de l’horloge. Il gère le temps d’appui et génère le signal de
        sortie du buzzer. Le signal <code>BuzzerEnable</code> est contrôlé par <code>BuzzerState</code> et alterne entre
        les états logiques pour produire un son.
      </p>

      <p>
        Lorsque l’utilisateur appuie sur <code>KEY0</code> et <code>KEY1</code> pendant une seconde, le buzzer est
        activé, la machine à états est bloquée, et le son continue jusqu’à ce que les boutons soient relâchés.
      </p>


      <img src={distanceDetector} alt="Block de détection de distance" style={{ width: '40%', margin: '20px 0' }} />
      <img src={buzzerBlock} alt="Block du buzzer" style={{ width: '40%', margin: '20px 0' }} />
      <br />

      {/* === FS4 === */}
      <h3>FS4 – Déplacement des passagers</h3>

      <p>
        La fonction <strong>FS4</strong> concerne le <strong>déplacement des passagers</strong> dans l’ascenseur. Elle doit respecter plusieurs contraintes :
      </p>

      <ul>
        <li>Les étages sont parcourus de manière <strong>séquentielle</strong> : aucun saut d’étage n’est autorisé.</li>
        <li>Si aucun appel n’est détecté, l’ascenseur doit <strong>redescendre automatiquement au RDC</strong>.</li>
        <li>L’ascenseur est <strong>bloqué</strong> tant que le switch de l’étage en question est activé.</li>
        <li>La <strong>fermeture des portes</strong> commence dès que le switch d’appel est désactivé.</li>
      </ul>

      <p>
        Pour garantir le déplacement séquentiel, une <strong>machine à états</strong> a été conçue, reliant chaque étage au suivant.
        Cela impose à l’ascenseur de suivre un ordre strict sans possibilité de sauter un étage.
      </p>

      <p>
        Une capture d’écran de cette machine à états montre clairement le fonctionnement empêchant tout saut d’étage.
      </p>
      <img src={etagesMachine} alt="Machine à états pour les étages" style={{ width: '65%', margin: '20px 0' }} />

      <p>
        Pour gérer la redescente automatique au RDC, une condition a été ajoutée : si <strong>aucun switch ni bouton</strong> n’est activé,
        alors l’ascenseur retourne au rez-de-chaussée.
      </p>

      <p>
        Enfin, le déplacement entre les étages n’est possible que si le <strong>switch est désactivé</strong>. Si un switch est à l’état logique 1,
        l’ascenseur reste bloqué à l’étage correspondant jusqu’à ce que l’appel soit levé.
      </p>
      <img src={fs4Diagram} alt="RTL Viewer de la FS4" style={{ width: '70%', margin: '20px 0' }} />
      <br />

      {/* === FS5 === */}
      <h3>FS5 – Affichage pour les usagers</h3>
      <p>
        La fonction <strong>FS5</strong> concerne tous les éléments d’<strong>affichage</strong> destinés aux usagers de l’ascenseur. Elle comprend :
      </p>

      <ul>
        <li>Un <strong>affichage 7 segments</strong> pour indiquer l’étage en chiffre.</li>
        <li>Une <strong>animation des portes</strong> de l’ascenseur.</li>
        <li>L’utilisation d’un <strong>registre à décalage</strong> pour afficher les demandes d’étages sur des LEDs de breadboard.</li>
      </ul>

      <p>
        Le <strong>registre à décalage</strong> fonctionne avec deux horloges : une horloge de <strong>stockage</strong> et une horloge de <strong>décalage</strong>.
        Comme il y a 8 étages à parcourir, l’horloge de stockage est <strong>8 fois plus rapide</strong> que celle de décalage, qui est la clock de référence du projet.
      </p>

      <p>
        La clock de stockage envoie 8 informations successivement dans l’entrée unique du registre à décalage via un <strong>multiplexeur</strong>.
        Ce multiplexeur sélectionne l’entrée à utiliser grâce à un <strong>compteur modulo 8</strong>.
      </p>

      <p>
        Une fois les 8 données envoyées, la clock de référence déclenche le décalage de toutes les données vers les 8 sorties,
        permettant ainsi d’<strong>afficher les demandes d’étages</strong> sur les 8 LEDs.
      </p>

      <p>
        Enfin, la <strong>machine à états de la FS4</strong> fournit les informations nécessaires pour l’animation des portes
        et l’affichage de l’étage sur le <strong>7 segments</strong>.
      </p>
      <img src={fs5Diagram} alt="RTL Viewer de la FS5" style={{ width: '70%', margin: '20px 0' }} />
      <br />


      <h3>Résultats :</h3>
      <ul>
        <li>Fonctionnement complet de l’ascenseur avec toutes les fonctionnalités prévues</li>
        <li>Affichage clair des étages et des appels utilisateurs</li>
        <li>Système de sécurité opérationnel avec détection d’obstacles et alerte sonore</li>
        <li>Interface utilisateur intuitive et réactive</li>
      </ul>

      <img src={portesAnimation} alt="Animation des portes sur FPGA" style={{ width: '100%', margin: '20px 0' }} />
      <br />

      <h4>Équipe :</h4> 
      <p>Luna Rondineau, Eléonore Videment, Romain Barrière, Halima Ghazi – une équipe pluridisciplinaire ayant mené à bien un projet complexe de conception électronique embarquée.</p>
    </div>
  );
};

export default Project6;
