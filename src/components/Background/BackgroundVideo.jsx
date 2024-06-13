import 'animate.css';
import React from "react";
import "./BackgroundVideo.css";
import Login from"../Background/Login";

const BackgroundVideo = () => {
  return (
    <div className="video-background-container">

      <video className="background-video" autoPlay loop muted>
        <source src="motion.mp4" type="video/mp4" />
      </video>


      <div className="content-overlay">
        <Login/>
      </div>

    </div>
  );
};

export default BackgroundVideo;
