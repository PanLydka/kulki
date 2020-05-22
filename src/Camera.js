import React, { useState, useEffect } from "react";
import "./styles.scss";


const Camera = () => {

  var constraints = { audio: false, video: { width: 1920, height: 1080, facingMode: "environment" } };

  


  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      var video = document.querySelector("video");
      video.srcObject = mediaStream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    }); // always check for errors at the end.

  
  return (
    <>

      <video />

    </>
  );
};

export default Camera;
