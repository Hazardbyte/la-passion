import styles from "./campfire.module.css";
import React, { useState, useEffect } from "react";

const frames = [
  `${process.env.PUBLIC_URL}/assets/Campfire/Campfire0.png`,
  `${process.env.PUBLIC_URL}/assets/Campfire/Campfire1.png`,
  `${process.env.PUBLIC_URL}/assets/Campfire/Campfire2.png`,
  `${process.env.PUBLIC_URL}/assets/Campfire/Campfire3.png`,
  `${process.env.PUBLIC_URL}/assets/Campfire/Campfire4.png`,
  `${process.env.PUBLIC_URL}/assets/Campfire/Campfire5.png`,
  `${process.env.PUBLIC_URL}/assets/Campfire/Campfire6.png`,
];

export default function CampfireAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 125); // Cambia el frame cada 1000ms

    return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div>
      {frames.map((frame, index) => (
        <img
          className={`${styles["campfire-frame"]} ${
            currentFrame === index ? styles.active : ""
          }`}
          src={frame}
          alt={"campfire frame"}
          key={index}
        />
      ))}
    </div>
  );
}
