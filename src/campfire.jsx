import styles from "./Campfire.module.css";
import React, { useState } from "react";

const frames = [
  "Assets/Campfire/Campfire0.png",
  "Assets/Campfire/Campfire1.png",
  "Assets/Campfire/Campfire2.png",
  "Assets/Campfire/Campfire3.png",
  "Assets/Campfire/Campfire4.png",
  "Assets/Campfire/Campfire5.png",
  "Assets/Campfire/Campfire6.png",
];

export default function CampfireAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 125); // Cambia el frame cada 125ms

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
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
