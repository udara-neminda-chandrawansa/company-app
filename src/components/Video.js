import React from "react";
import aboutVideo from "../videos/about_video.mp4";

function VideoPlayer() {
  return (
    <div>
      <video
        className="w-full"
        autoPlay
        loop
      >
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
