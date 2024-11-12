// src/LandingSection.js
import React from 'react';
import './LandingSection.css';
import profileImage from '../../assets/profile.jpg'; // You need to replace this with your image path

function LandingSection() {
  return (
    <section className="landing-section">
      <div className="text-section">
        <h1>Hi 👋, <br /> I'm Rocky, <br /> Front-end Developer</h1>
        <p>I design and develop experiences that make people’s lives simpler through Web and Mobile apps. I work with Figma, HTML5, CSS3, JavaScript, React, React Native, and Flutter.</p>
        <div className="buttons">
          <button className="btn hire-btn">Hire Me</button>
          <button className="btn projects-btn">See My Projects</button>
        </div>
      </div>
      <div className="image-section">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default LandingSection;
