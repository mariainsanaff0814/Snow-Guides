import pokeballImage from "../../assets/balls/Pokeball.png";
import duskBallImage from "../../assets/balls/OcasoBall.png";
import repeatBallImage from "../../assets/balls/AcopioBall.png";
import heavyBallImage from "../../assets/balls/PesoBall.png";
import dreamBallImage from "../../assets/balls/EnsueñoBall.png";
import BallCard from "./BallCard";
import "./GuideBalls.css";

const balls = [
  {
    id: "pokeball",
    name: "Poké Ball",
    image: pokeballImage,
    tag: "Económica",
    variant: "economical",
    description:
      "La Poké Ball normal, aunque no es la opción más eficiente en tiempo ni en ratio de captura, suele ser económica. En ocasiones puede capturar al Ditto al primer intento, lo que puede generar un mayor margen de ganancia. Sin embargo, no es la opción recomendada si se busca mayor consistencia.",
  },
  {
    id: "dusk-ball",
    name: "Ocaso Ball",
    image: duskBallImage,
    tag: "Recomendada",
    variant: "recommended",
    description:
      "La Ocaso Ball es una de las opciones recomendadas debido a que los Dittos se encuentran dentro de una cueva, permitiendo aprovechar su mayor eficacia de captura en estas condiciones.",
  },
  {
    id: "repeat-ball",
    name: "Acopio Ball",
    image: repeatBallImage,
    tag: "Eficiente",
    variant: "efficient",
    description:
      "La Acopio Ball aumenta su eficacia al capturar repetidamente la misma especie. Después de haber capturado 15 Dittos, alcanza una eficacia comparable a la Ocaso Ball y puede resultar más económica.",
    note:
      "Su progreso puede perderse si capturas otra especie de Pokémon o transcurre demasiado tiempo sin continuar las capturas.",
  },
  {
    id: "heavy-ball",
    name: "Peso Ball",
    image: heavyBallImage,
    tag: "Situacional",
    variant: "situational",
    description:
      "La Peso Ball basa su eficacia en el peso del Pokémon objetivo: cuanto más pesado sea, mayor puede ser su eficacia de captura.",
    note:
      "Puede utilizarse en estrategias específicas donde se aproveche esta mecánica.",
    noteVariant: "plain",
  },
  {
    id: "dream-ball",
    name: "Ensueño Ball",
    image: dreamBallImage,
    tag: "Bonita",
    variant: "pretty",
    description: "La Ensueño Ball está bonita.",
  },
];

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
      </header>

      <div className="balls-grid">
        {balls.map((ball) => (
          <BallCard key={ball.id} ball={ball} />
        ))}
      </div>
    </section>
  );
}
