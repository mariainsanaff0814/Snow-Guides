import { useState } from "react";
import strategyIcon from "../../assets/icons/strategy.svg?raw";
import teamIcon from "../../assets/icons/team.svg?raw";
import PokemonBuild from "./PokemonBuild";

function SectionIcon({ type }) {
  const icon = type === "team" ? teamIcon : strategyIcon;

  return (
    <span
      className="method-section-icon"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
}

export default function CaptureMethodCard({ method }) {
  const [isOpen, setIsOpen] = useState(method.defaultOpen);
  const contentId = `${method.id}-content`;

  return (
    <article className="capture-method-card">
      <header className="method-header">
        <h2 className="method-title">
          <button
            type="button"
            className="method-toggle"
            aria-expanded={isOpen}
            aria-controls={contentId}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="method-title-copy">
              <span className="method-number">{method.label}</span>
              <span className="method-name">{method.title}</span>
            </span>
            <span className="method-toggle-meta">
              <span className={`method-badge ${method.badgeStyle}`}>
                {method.badge}
              </span>
              <span
                className={`method-chevron${isOpen ? " open" : ""}`}
                aria-hidden="true"
              >
                ˅
              </span>
            </span>
          </button>
        </h2>
      </header>

      <div
        id={contentId}
        className={`method-content${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="method-content-inner">
          <PokemonBuild
            pokemon={method.pokemon}
            details={method.details}
            moves={method.moves}
          />

          {method.auxiliary && (
            <section className="method-info-block auxiliary-block">
              <div className="method-block-heading">
                <SectionIcon type="team" />
                <h3>Pokémon auxiliar</h3>
              </div>
              {method.auxiliary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          )}

          <section className="method-info-block strategy-block">
            <div className="method-block-heading">
              <SectionIcon type="strategy" />
              <h3>Estrategia</h3>
            </div>
            <p>{method.strategy}</p>

            {method.note && <aside className="method-note">{method.note}</aside>}

            <div className="strategy-flow" aria-label="Flujo de la estrategia">
              {method.flow.map((step, index) => (
                <div className="flow-part" key={step}>
                  <span className="flow-step">{step}</span>
                  {index < method.flow.length - 1 && (
                    <span className="flow-arrow" aria-hidden="true">↓</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
