import React from 'react';

const CampusManhunt: React.FC = () => {
  return (
    <div className="project-page">
        {/* Title */}
       
        {/* Image with overlay text */}
        <div className="image-container">
          <div className="overlay-content">
            <h1>Campus Wide Manhunt</h1>
          </div>
          <img
            src="/images/SocraticaManhunt.PNG"
            alt="Haptic Echolocator"
            className="project-image-inner"
          />
          <div className="overlay-text">
            <p>
              <a className="link" href="https://github.com/PeterAlpajaro/SocraticaManhuntApp">Github</a><br/>
              <br/>
              Have you ever wanted to play a massive, and I mean massive game of manhunt? Campus-wide manhunt<br/>
              lets you do just that. With a node.js backend webserver, this app allows players to connect to a game.<br/>
              The goal? To avoid the hunters, with a catch! Your phone pings your location to the hunters every 5 minutes<br/>
              Stop moving, and you're out. <br/>
              <br/>
              This app is enabled through Swift (a Kotlin version will come eventually) and a node.js server that handles<br/>
              HTTPS authentication and location pinging through websocket. Please have a look at the github for this<br/>
              project.

            </p>
          </div>
        </div>
    </div>
  );
};

export default CampusManhunt;