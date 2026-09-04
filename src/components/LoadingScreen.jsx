import { useEffect, useState } from "react";
import snowflake from "../assets/snowflake.svg";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="loading-screen">
      <div className="snowflake-wrapper">
        <img
          src={snowflake}
          alt="Copo de nieve"
          className={`snowflake ${progress === 100 ? "complete" : ""}`}
        />
      </div>

      <p className="loading-text">
        {progress < 100 ? "Preparando guía..." : "Guía lista"}
      </p>

      <span className="progress">{progress}%</span>

      {progress === 100 && (
        <button className="enter-button" onClick={onComplete}>
          Entrar
        </button>
      )}

      <div className="clan">
        <strong>[SNOW]</strong>
        <span>Eternal Winter</span>
      </div>
    </main>
  );
}