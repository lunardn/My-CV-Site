// Import des fichiers CSS
import './App.css';

// Import des composants
import Header from './components/Header';
import Preface from './components/Preface';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



// Bouton flottant
import ContactInfoButton from './components/ContactInfoButton';

export default function App() {
  return (
  <>
  <Header />\
  <Preface />
  <main className="main-content">
    <About />
    <Experience />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    </main>

    {/* Bouton flottant */}
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', textAlign: 'center', zIndex: 1000 }}>
      <ContactInfoButton />
      <br />
      </div>
      <Footer />
      </>
      );
}
