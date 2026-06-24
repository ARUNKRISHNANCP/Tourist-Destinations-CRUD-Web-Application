import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // start fade-out
    }, 2000);

    const timer2 = setTimeout(() => {
      onFinish(); // completely hide after fade
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="splash-logo">🌍 World Tours</h1>
      <p className="splash-text">Discover the world with us...</p>
    </div>
  );
};

export default SplashScreen;
