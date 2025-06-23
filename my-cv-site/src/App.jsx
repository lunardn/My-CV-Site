import React, { useState } from 'react';
import './App.css';
import photo from './assets/luna.jpeg';
import { useIntl, FormattedMessage } from 'react-intl';
import emailjs from '@emailjs/browser';



/* === Préface (fiche contact) === */
function Preface() {
  return (
    <section className="preface">
      <div className="preface-overlay">
        <div className="preface-content">
          <img src={photo} alt="Luna Rondineau" className="preface-photo" />
          <div className="preface-text">
            <h1>Luna Rondineau</h1>
            <h2>Étudiante en ingénierie – Santé & Technologies</h2>
            <div className="preface-info">
              <p><strong>Téléphone :</strong> +33 6 52 13 05 55</p>
              <p><strong>Email :</strong> luna.rondineau@gmail.com</p>
              <p><strong>Adresse :</strong> Le Raincy, Île-de-France, France</p>
              <p><strong>Date de naissance :</strong> 09 Mai 2003</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* === En tête === */
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <h1>Luna Rondineau</h1>
          <div className="social-links">
            <a href="https://linkedin.com/in/lunarondineau" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:luna.rondineau@gmail.com">Email</a>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#experience">Expériences</a></li>
            <li><a href="#education">Formation</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* === Section === */
function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}


/* === Bouton de contact flottant === */
function ContactInfoButton() {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="contact-info-button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
      aria-label="Afficher mes coordonnées"
    >
      <button>📞 Mes coordonnées</button>

      {hover && (
        <div className="tooltip" style={{
          position: 'absolute',
          bottom: '125%',
          left: '50%',
          transform: 'translateX(-70%)',
          padding: '8px 12px',
          borderRadius: '6px',
          backgroundColor: '#333',
          color: '#fff',
          whiteSpace: 'nowrap',
          boxShadow: '0 0 8px rgba(0,0,0,0.3)',
          zIndex: 10,
          fontSize: '0.9rem',
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          <div><strong>Email:</strong> luna.rondineau@gmail.com</div>
          <div><strong>Téléphone:</strong> +33 6 52 13 05 55</div>
        </div>
      )}
    </div>
  );
}


/* === Contact form === */
function ContactForm() {
  const intl = useIntl();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4w06v5m',
      'template_45rp3ii',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'mbpJJpiAELqPn3Oii'
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={intl.formatMessage({ id: 'form.name' })}
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={intl.formatMessage({ id: 'form.email' })}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        rows="5"
        placeholder={intl.formatMessage({ id: 'form.message' })}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">
        <FormattedMessage id="form.submit" />
      </button>

      {status === 'success' && <p className="success">{intl.formatMessage({ id: 'form.success' })}</p>}
      {status === 'error' && <p className="error">{intl.formatMessage({ id: 'form.error' })}</p>}
    </form>
  );
}


/* === Timeline === */
function TimelineItem({ year, title, company, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{year}</div>
      <div className="timeline-box">
        <h3>{title}</h3>
        <p><strong>{company}</strong></p>
        <p>{description}</p>
      </div>
    </div>
  );
}


/* === App === */
export default function App() {
  return (
    <>
      {/* En tête */}
      <Header />
      <Preface />
      <main className="main-content">
        {/* À propos */}
        <Section id="about" title="À propos">
          <p>
            Étudiante déterminée, organisée et curieuse, je me spécialise dans le domaine Santé & Technologies à l’ECE.
            Mon parcours international m’a permis de développer des qualités humaines telles que l’ouverture d’esprit, la communication interculturelle et l’autonomie.
            Je suis motivée à m’impliquer dans des projets innovants et concrets en équipe.
          </p>
          <a href="/mon-cv.pdf" download className="download-button">
          Télécharger mon CV
          </a>
        </Section>

        {/* Expériences professionnelles */}
        <Section id="experience" title="Expériences professionnelles">
          <div className="timeline">
            {/* Développeur Full Stack */}
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
        </Section>


        {/* Formation */}
        <Section id="education" title="Formation">
          <div className="education-item">
            <h3>ECE Paris – École d’ingénieur généraliste</h3>
            <h4>2022 – 2025</h4>
            <p>➢ Majeure Santé & Technologies</p>
            <p>➢ Mineure Entrepreneuriat</p>
            <p>➢ Échange universitaire à CSU Long Beach (Los Angeles) en 2024</p>
          </div>

          <div className="education-item">
            <h3>Lycée Albert Schweitzer – Le Raincy</h3>
            <h4>2019 – 2021</h4>
            <p>➢ Bac Scientifique – Mention Bien</p>
            <p>➢ Spécialités Mathématiques, Physique</p>
            <p>➢ Section Européenne Anglaise</p>
            <p>➢ Maths Expertes en Terminale</p>
          </div>

          <div className="education-item">
            <h3>Boerum Hill School for International Studies – Brooklyn (USA)</h3>
            <h4>2015 – 2019</h4>
            <p>➢ Préparation au Diplôme International Baccalaureate (IB)</p>
          </div>

        </Section>

        {/* Compétences */}
        <Section id="skills" title="Compétences clés">
          <ul>
            <li>Langages : C, C++, Java, HTML, CSS</li>
            <li>Base de données, Java MySQL, Symfony</li>
            <li>Outils : Microsoft, Git, Figma</li>
            <li>Gestion de projet, leadership, travail en équipe</li>
            <li>Certificats : TOEIC / TOEFL, Projet Voltaire, Management & Outils Web</li>
            <li>Langues : Français (natif), Anglais (bilingue, 4 ans aux USA), Espagnol (intermédiaire B1)</li>
          </ul> 
        </Section>

        {/* Projets */}
        <Section id="projects" title="Projets réalisés">
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
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>

      </main>

      {/* Bouton flottant */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', textAlign: 'center', zIndex: 1000 }}>
        <ContactInfoButton />
        <br />
      </div>
    </>
  );
}

