import React, { useEffect, useRef } from "react";

const VideoCall = () => {
  const myVideo = useRef();
  const userVideo = useRef();
  const streamRef = useRef();
  
  
  useEffect(() => {

    let isMounted  = true;
    // Dummy local camera stream
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
      .then((stream) => {
        if (isMounted){
        myVideo.current.srcObject = stream;
        streamRef.current = stream;
        };
      });

    return () => {
      isMounted = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
            const settings = track.getSettings();
            if (settings.torch) {
                try {
                    track.applyConstraints({ advanced: [{ torch: false }] });
                } catch (error) {
                    console.warn("Torch off failed constraint", error);
                }
            }
            track.stop();
        });
        streamRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex justify-center gap-4 p-2">
      <video ref={myVideo} autoPlay playsInline muted className="w-48 h-36 bg-black rounded-lg" />
      <video ref={userVideo} autoPlay playsInline className="w-48 h-36 bg-black rounded-lg" />
    </div>
  );
};

export default VideoCall;
