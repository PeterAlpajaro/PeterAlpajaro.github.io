import React from 'react';

const HapticGlove: React.FC = () => {
  return (
    <div className="project-page">
        {/* Title */}
       
        {/* Image with overlay text */}
        <div className="image-container">
          <div className="overlay-content">
            <h1>Haptic Echolocator</h1>
          </div>
          <img
            src="/images/HapticGlovePrototype.jpg"
            alt="Haptic Echolocator"
            className="project-image-inner"
          />
          <div className="overlay-text">
            <p>
              <a className="link" href="https://github.com/PeterAlpajaro/Haptic_Feedback_Glove">Github</a><br/>
              <br/>
              Imagine if you didn't need to see to have vision. This is the idea behind the Haptic Echolocator Glove.<br/>
              Using a camera, this device concerts a live video stream into a depth map. Based on this map, the <br/>
              vibrotactile motors within the glove will vibrate with varying intensity to give the user a sense of their surroundings. <br/>
              <br/>
              A rough (but working) prototype is shown above, and PCB and CAD development is on its way. Please take <br/>
              a look at the Github repository to see some of the firmware, iOS development and more that went into this project.
              

            </p>
          </div>
        </div>
    </div>
  );
};

export default HapticGlove;