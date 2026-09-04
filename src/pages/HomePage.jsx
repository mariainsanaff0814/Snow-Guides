import { useState } from "react";
import dittoImage from "../assets/ditto-3d.png";
import snowflake from "../assets/snowflake.svg";
import farmingIcon from "../assets/farming.svg?raw";
import guideIcon from "../assets/guide.svg?raw";
import mariaIcon from "../assets/maria.svg?raw";
import DittoGuidePage from "./DittoGuidePage";
import "./HomePage.css";

const navItems = [
  { label: "Farmeo", icon: farmingIcon, active: true },
  { label: "Guía", icon: guideIcon },
  { label: "María la más insana", icon: mariaIcon },
];

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [showThemes, setShowThemes] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setShowThemes(false);
  };

  if (currentPage === "ditto-guide") {
    return (
      <DittoGuidePage
        theme={theme}
        onBack={() => setCurrentPage("home")}
      />
    );
  }

  return (
    <main className={`home-page theme-${theme}`}>
      <div className="content-container">
        <header className="home-header">
          <button className="menu-button" aria-label="Menú">
            ☰
          </button>

          <div className="brand">
            <img src={snowflake} alt="" className="brand-snowflake" />
            <h1>[SNOW]</h1>
            <span>Eternal Winter</span>
          </div>

          <button
            className="theme-button"
            onClick={() => setShowThemes(true)}
            aria-label="Cambiar tema"
          >
            <img src={snowflake} alt="" />
          </button>
        </header>

        <section className="guide-section">
          <article className="ditto-card">
            <button
              type="button"
              className="card-action"
              aria-label="Abrir guía de Ditto"
              onClick={() => setCurrentPage("ditto-guide")}
            />

            <div className="card-top">
              <span className="available-badge">DISPONIBLE</span>

              <span className="arrow-button" aria-hidden="true">
                →
              </span>
            </div>

            <div className="ditto-image-wrapper">
              <img src={dittoImage} alt="Ditto" className="ditto-image" />
            </div>

            <div className="card-content">
              <h2>Ditto</h2>
              <h3>Hoenn</h3>

              <p>
                Guía completa de farmeo de Ditto en la región de Hoenn.
                Rutas, probabilidades, costos, estrategias y rentabilidad.
              </p>
            </div>
          </article>
        </section>
      </div>

      <nav className="bottom-nav" aria-label="Navegación principal">
        {navItems.map(({ label, icon, active }) => (
          <button key={label} className={`nav-item${active ? " active" : ""}`}>
            <span
              className="nav-icon"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {showThemes && (
        <div
          className="theme-overlay"
          onClick={() => setShowThemes(false)}
        >
          <div
            className="theme-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="theme-modal-header">
              <h2>Selecciona un tema</h2>

              <button
                className="close-button"
                onClick={() => setShowThemes(false)}
              >
                ×
              </button>
            </div>

            <p className="theme-subtitle">
              Elige el estilo que más te guste.
            </p>

            <button
              className={`theme-option ${
                theme === "dark" ? "selected" : ""
              }`}
              onClick={() => changeTheme("dark")}
            >
              <span className="theme-symbol">☾</span>

              <div>
                <strong>Tema oscuro</strong>
                <span>Noche eterna</span>
              </div>
            </button>

            <button
              className={`theme-option light-option ${
                theme === "light" ? "selected" : ""
              }`}
              onClick={() => changeTheme("light")}
            >
              <span className="theme-symbol">☀</span>

              <div>
                <strong>Tema claro</strong>
                <span>Nieve pura</span>
              </div>
            </button>

            <button
              className={`theme-option blue-option ${
                theme === "blue" ? "selected" : ""
              }`}
              onClick={() => changeTheme("blue")}
            >
              <span className="theme-symbol">❄</span>

              <div>
                <strong>Tema azul</strong>
                <span>Hielo natural</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
