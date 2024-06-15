import 'animate.css';
import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = ({ children }) => {
  return (
    <div className="video-background-container">
      <video className="background-video" autoPlay loop muted>
        <source src="motion.mp4" type="video/mp4" />
      </video>
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;
