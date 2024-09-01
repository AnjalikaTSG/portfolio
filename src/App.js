import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './global.css';
import Home from './Containers/home'; 
import NavBar from './Components/navBar';
import About from './Containers/about';
import Contact from './Containers/contact';
import Projects from './Containers/projects';
import Skills from './Containers/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
