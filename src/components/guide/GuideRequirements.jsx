import requiredIcon from "../../assets/required.svg?raw";
import optionalIcon from "../../assets/optional.svg?raw";
import recommendedIcon from "../../assets/recommended.svg?raw";

const states = {
  required: { label: "Obligatorio", icon: requiredIcon },
  optional: { label: "Opcional", icon: optionalIcon },
  recommended: { label: "Recomendado", icon: recommendedIcon },
};

const requirements = [
  {
    region: "Pasar Hoenn",
    description:
      "Es necesario tener la región completa para poder acceder a la Gruta Desértica, donde buscaremos a los dittos.",
    state: "required",
  },
  {
    region: "Llegar al puerto de Sinnoh",
    description:
      "En la tienda de Ciudad Pradera puedes encontrar Ocaso Ball, Acopio Ball y Ensueño Ball.",
    state: "optional",
  },
  {
    region: "Pasar Johto",
    description:
      "En Johto se pueden conseguir ciertas Poké Balls especiales, como Peso Ball. Próximamente más detalles.",
    state: "optional",
  },
  {
    region: "Tener acceso hasta Ciudad Caolín de Teselia",
    description:
      "En la Ruta 9, antes de llegar a Ciudad Caolín, se encuentra el centro comercial. Subiendo las escaleras del lado izquierdo podemos encontrar Ocaso Ball, Acopio Ball y Ensueño Ball.",
    state: "recommended",
  },
];

function StatusIcon({ icon }) {
  return (
    <span
      className="requirement-icon"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
}

export default function GuideRequirements() {
  return (
    <section className="guide-panel" aria-labelledby="requirements-title">
      <h2 id="requirements-title">Requisitos</h2>

      <div className="status-legend" aria-label="Leyenda de estados">
        {Object.entries(states).map(([key, state]) => (
          <span key={key} className={`status-key status-${key}`}>
            <span aria-hidden="true" />
            {state.label}
          </span>
        ))}
      </div>

      <div className="requirements-list">
        {requirements.map(({ region, description, state }) => (
          <article
            key={region}
            className={`requirement-row status-${state}`}
          >
            <div>
              <span className="status-badge">{states[state].label}</span>
              <h3>{region}</h3>
              <p>{description}</p>
            </div>
            <StatusIcon icon={states[state].icon} />
          </article>
        ))}
      </div>
    </section>
  );
}
