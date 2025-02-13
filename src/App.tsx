import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Your Name</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm [Your Name], a [Your Profession or Role]. I specialize in [Your Skills/Expertise].
          Welcome to my personal website!
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A brief description of your project.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>A brief description of your project.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <p>Contact me at: your.email@example.com</p>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;