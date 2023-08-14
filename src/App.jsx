import React from 'react';
import { Link, Element } from 'react-scroll';
import HomePage from './components/HomePage';
import ExperiencePage from './components/ExperiencePage';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Element name="home" className="element">
        <HomePage />
      </Element>
      <Element name="experience" className="element">
        <ExperiencePage />
      </Element>
      <Element name="projects" className="element">
        <ProjectPage />
      </Element>
      <Footer />
    </div>
  );
};

export default App;



