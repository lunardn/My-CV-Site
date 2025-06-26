// Import des fichiers CSS
import './App.css';

// Import React Router
import { Routes, Route } from 'react-router-dom';

// Import des composants principaux
import Header from './components/Header';
import Preface from './components/Preface';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactInfoButton from './components/ContactInfoButton';

// Import des pages projets
import Project1 from './components/ProjectDetails/Project1';
import Project2 from './components/ProjectDetails/Project2';
import Project3 from './components/ProjectDetails/Project3';
import Project4 from './components/ProjectDetails/Project4';
import Project5 from './components/ProjectDetails/Project5';
import Project6 from './components/ProjectDetails/Project6';  

// Composant de page d'accueil
const Home = () => (
  <>
    <Header />
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
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <ContactInfoButton />
    </div>

    <Footer />
  </>
);

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
      </Routes>
    </div>
  );
}
