import { useState } from "react";
import dittoImage from "../assets/ditto-3d.png";
import GuideTabs from "../components/guide/GuideTabs";
import GuideSummary from "../components/guide/GuideSummary";
import GuideRequirements from "../components/guide/GuideRequirements";
import GuideLocation from "../components/guide/GuideLocation";
import GuidePokemon from "../components/guide/GuidePokemon";
import GuideBalls from "../components/guide/GuideBalls";
import GuideStatistics from "../components/guide/GuideStatistics";
import "./DittoGuidePage.css";

const tabContent = {
  summary: <GuideSummary />,
  requirements: <GuideRequirements />,
  location: <GuideLocation />,
  pokemon: <GuidePokemon />,
  balls: <GuideBalls />,
  stats: <GuideStatistics />,
};

export default function DittoGuidePage({ theme, onBack }) {
  const [activeTab, setActiveTab] = useState("summary");

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    onBack();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className={`ditto-guide-page theme-${theme}`}>
      <div className="guide-container">
        <button type="button" className="back-button" onClick={handleBack}>
          <span aria-hidden="true">←</span>
          Volver
        </button>

        <header className="guide-hero">
          <div className="guide-hero-copy">
            <span className="guide-eyebrow">Farmeo de Dittos</span>
            <h1>Ditto</h1>
            <strong>Hoenn</strong>
            <p>
              Farmeo de dittos en la región de Hoenn. Aquí encontrarás la
              ubicación, los requisitos y las formas de captura, junto con su
              estrategia y rentabilidad.
            </p>
          </div>

          <div className="guide-hero-image">
            <img src={dittoImage} alt="Ditto" />
          </div>
        </header>

        <GuideTabs activeTab={activeTab} onChange={handleTabChange} />

        <div className="guide-content" key={activeTab}>
          {tabContent[activeTab]}
        </div>
      </div>
    </main>
  );
}
