import React from 'react';

const MyDiet: React.FC = () => {
  return (
    <div className="project-page">
        {/* Title */}
       
        {/* Image with overlay text */}
        <div className="image-container">
          <div className="overlay-content">
            <h1>My Diet Map</h1>
          </div>
          <img
            src="/images/DietMap.png"
            alt="A map that shows pins of dietary friendly restaurants"
            className="project-image-inner"
          />
          <div className="overlay-text">
            <p>
              <a className="link" href="https://github.com/PeterAlpajaro/Dietary_mAPP">Github</a><br/>
              <br/>
              Growing up with a nut allergy isn't easy, but the issue is even more apparent when it's so difficult to find<br/>
              places to eat. MyDiet attempts to solve this issue by creating a community driven React-Native based app<br/>
              that allows users to rate restaurants and their menu items based on their friendliness to certain dietary<br/>
              restrictions. We used the Yelp Fusion API to gather global restaurant data, MySQL to store them in a database<br/>
              And a node.js server to handle the requests. <br/>
            <br/>
            This is intended to be a solution for those with any dietary restriction. The best part? All you have to do is<br/>
            put in your restriction, and tell us what you ate that day. It's that simple. <br/>
            <br/>
            This was built in 24 hours at Deltahacks.

              <br/>

            </p>
          </div>
        </div>
    </div>
  );
};

export default MyDiet;