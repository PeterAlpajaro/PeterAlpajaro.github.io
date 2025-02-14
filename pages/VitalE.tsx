import React from 'react';

const VitalE: React.FC = () => {
  return (
    <div className="project-page">
        {/* Title */}
       
        {/* Image with overlay text */}
        <div className="image-container">
          <div className="overlay-content">
            <h1>Vital-E: Automated Health Monitoring</h1>
          </div>
          <img
            src="/images/VitalEInAction.jpg"
            alt="Haptic Echolocator"
            className="project-image-inner"
          />
          <div className="overlay-text">
            <p>
              <a className="link" href="https://github.com/Kurtis24/UtraHacks">Github</a><br/>
              <br/>
              Hospitals struggle with funding and adequate staffing around the world. What if we could reduce their burden? 
              Vital-E is an autonomous robot which navigates hospitals using color-based pathfinding and proximity sensors.
              It reads patient vitals using an IR heart-rate / oxygen monitor and updates it to a react-based web server
              using an ESP-32 microcontroller.<br/>
              <br/>
              This was built in 24 hours at the UTRA Hackathon.
              <br/><br/>
              Please take a look at the Github repository above.
              

            </p>
          </div>
        </div>
    </div>
  );
};

export default VitalE;