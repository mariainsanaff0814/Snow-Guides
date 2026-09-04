import { useState } from "react";
import hoennLocation from "../../assets/maps/hoenn-ditto-location.png";
import caveMap from "../../assets/maps/desert-underpass-map.png";
import dittoSprite from "../../assets/pokemon/ditto.png";
import loudredSprite from "../../assets/pokemon/loudred.png";
import exploudSprite from "../../assets/pokemon/Exploud.png";
import EncounterCard from "./EncounterCard";

const normalEncounters = [
  {
    image: dittoSprite,
    name: "Ditto",
    encounter: "Cueva",
    level: "50 - 52",
    appearance: "Aparición: 50%",
  },
  {
    image: loudredSprite,
    name: "Loudred",
    encounter: "Cueva",
    level: "50 - 52",
    appearance: "Aparición: 45%",
  },
];

const hordeEncounters = [
  {
    image: dittoSprite,
    name: "Ditto",
    encounter: "Horda",
    level: "46 - 48",
    appearance: "Aparición en horda: 2.5%",
  },
  {
    image: loudredSprite,
    name: "Loudred",
    encounter: "Horda",
    level: "46 - 48",
    appearance: "Aparición en horda: 2.5%",
  },
];

const lureEncounters = [
  {
    image: exploudSprite,
    name: "Exploud",
    encounter: "Señuelo",
    level: "55",
    appearance: "Método: Señuelo",
  },
];

export default function GuideLocation() {
  const [showSpecialEncounters, setShowSpecialEncounters] = useState(false);

  return (
    <section className="location-section" aria-labelledby="location-title">
      <div className="guide-panel section-intro">
        <h2 id="location-title">Ubicación</h2>
        <p>
          El farmeo se realiza en la zona donde aparecen Ditto y Loudred en
          Hoenn.
        </p>
      </div>

      <article className="map-card">
        <h3>Ubicación en Hoenn</h3>
        <img src={hoennLocation} alt="Ubicación de Ditto en Hoenn" />
      </article>

      <article className="map-card">
        <h3>Mapa de la cueva</h3>
        <img src={caveMap} alt="Mapa de la cueva Desert Underpass" />
      </article>

      <section className="encounters-section" aria-labelledby="encounters-title">
        <h2 id="encounters-title">Pokémon en la zona</h2>
        <div className="encounter-grid">
          {normalEncounters.map((encounter) => (
            <EncounterCard key={encounter.name} {...encounter} />
          ))}
        </div>

        <div
          className={`lure-section${showSpecialEncounters ? " open" : ""}`}
        >
          <button
            type="button"
            className="lure-toggle"
            aria-expanded={showSpecialEncounters}
            aria-controls="special-encounters"
            onClick={() => setShowSpecialEncounters((current) => !current)}
          >
            <span>Señuelo y Hordas</span>
            <span className="lure-chevron" aria-hidden="true">⌄</span>
          </button>

          {showSpecialEncounters && (
            <div id="special-encounters" className="special-encounters">
              <section className="encounter-group" aria-labelledby="hordes-title">
                <h3 id="hordes-title">Hordas</h3>
                <div className="encounter-grid special-grid">
                  {hordeEncounters.map((encounter) => (
                    <EncounterCard key={encounter.name} {...encounter} />
                  ))}
                </div>
              </section>

              <section
                className="encounter-group lure-group"
                aria-labelledby="lure-title"
              >
                <h3 id="lure-title">Señuelo</h3>
                <div className="encounter-grid special-grid">
                  {lureEncounters.map((encounter) => (
                    <EncounterCard key={encounter.name} {...encounter} />
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
