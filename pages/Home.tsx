import React from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css'

const Home: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>

        {/* Headshot Image */}
        <div className="headshot-container">
          <img
            src="/images/Headshot.jpg"
            alt="Your Headshot"
            className="headshot"
          />
        </div>

        {/* About Me Description */}
        <p>Biomedical Engineering Student passionate about Brain-Computer Interfaces, Software Development, PCB Design, Signal Processing, Machine Learning and More.</p>
      </section>

    {/* Projects Section */}
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Project 1 */}
        <Link to="/project1" className="project-card">
        <img
          src="/images/HapticPrototype1.png"
          alt="Haptic Echolocator"
          className="project-image"
        />
        <h3>Haptic Echolocator</h3>
        <p>Translating Vision into Haptics</p>
        </Link>

        {/* Project 2 */}
        <Link to="/project2" className="project-card">
        <img
          src="/images/VitalE.jpg"
          alt="Vital-E"
          className="project-image"
        />
        <h3>Vital-E</h3>
        <p>Automated health monitoring</p>
        </Link>

        {/* Project 3 */}
        <Link to="/project3" className="project-card">
        <img
          src="/images/DietMapLogo.png"
          alt="Vital-E"
          className="project-image"
        />
        <h3>MyDiet</h3>
        <p>Making Dietary Restrictions Less Restrictive</p>
        </Link>


        {/* Add more projects as needed */}
      </div>
      <div className="project-list">
        {/* Project 4 */}
        <Link to="/project4" className="project-card">
        <img
          src="/images/SocraticaManhunt.PNG"
          alt="Socratica Manhunt"
          className="project-image"
        />
        <h3>Campus-Wide Manhunt</h3>
        <p>Supporting Massive Manhunt Games</p>
        </Link>


        {/* Add more projects as needed */}
      </div>
    </section>
    </>
  );
};

export default Home;
