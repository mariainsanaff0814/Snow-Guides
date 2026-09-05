import BallCard from "./BallCard";
import { balls } from "./ballData";
import "./GuideBalls.css";

export default function GuideBalls() {
  return (
    <section className="balls-guide" aria-labelledby="balls-title">
      <header className="guide-panel balls-intro">
        <h2 id="balls-title">Poké Balls utilizables</h2>
        <p>
          Cada quien es libre de utilizar las Poké Balls que prefiera. Aquí solo
          proporcionamos información sobre algunas de las opciones más eficientes
          o útiles para este farmeo.
        </p>
        <div className="capture-context">
          Las probabilidades de captura se calculan suponiendo que el Ditto está
          a 1 PS y dormido.
        </div>
      </header>

      <div className="balls-grid">
        {balls.map((ball) => (
          <BallCard key={ball.id} ball={ball} />
        ))}
      </div>
    </section>
  );
}
