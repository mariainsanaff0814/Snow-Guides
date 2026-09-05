import pokeballImage from "../../assets/balls/Pokeball.png";
import duskBallImage from "../../assets/balls/OcasoBall.png";
import repeatBallImage from "../../assets/balls/AcopioBall.png";
import heavyBallImage from "../../assets/balls/PesoBall.png";
import dreamBallImage from "../../assets/balls/EnsueñoBall.png";

const captureConditions = {
  hpPercent: 1,
  pokemonCatchRate: 35,
  sleepMultiplier: 2,
};

const calculateCaptureRate = (ballMultiplier) => {
  const { hpPercent, pokemonCatchRate, sleepMultiplier } = captureConditions;
  const modifiedRate = Math.max(
    1,
    ((300 - 2 * hpPercent) * pokemonCatchRate * ballMultiplier *
      sleepMultiplier) /
      300,
  );
  const shakeThreshold =
    1048560 / Math.sqrt(Math.sqrt(16711680 / modifiedRate));
  const probability = Math.min((shakeThreshold / 65536) ** 4, 1);

  return Number((probability * 100).toFixed(1));
};

const standardRate = calculateCaptureRate(1);
const boostedRate = calculateCaptureRate(2.5);
const maximumRate = calculateCaptureRate(4);

export const balls = [
  {
    id: "pokeball",
    name: "Poké Ball",
    image: pokeballImage,
    tag: "Económica",
    variant: "economical",
    description:
      "La Poké Ball normal, aunque no es la opción más eficiente en tiempo ni en ratio de captura, suele ser económica. En ocasiones puede capturar al Ditto al primer intento, lo que puede generar un mayor margen de ganancia. Sin embargo, no es la opción recomendada si se busca mayor consistencia.",
    captureRate: standardRate,
    captureRateLabel: `${standardRate}%`,
    price: "$200",
  },
  {
    id: "dusk-ball",
    name: "Ocaso Ball",
    image: duskBallImage,
    tag: "Recomendada",
    variant: "recommended",
    description:
      "La Ocaso Ball es una de las opciones recomendadas debido a que los Dittos se encuentran dentro de una cueva, permitiendo aprovechar su mayor eficacia de captura en estas condiciones.",
    captureRate: boostedRate,
    captureRateLabel: `${boostedRate}%`,
    captureCondition: "En cueva",
    price: "$1,350",
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
    captureRate: boostedRate,
    captureRateLabel: `${boostedRate}%`,
    captureCondition: "Con 15+ capturas",
    price: "$1,250",
  },
  {
    id: "heavy-ball",
    name: "Peso Ball",
    image: heavyBallImage,
    tag: "Situacional",
    variant: "situational",
    description:
      "La Peso Ball basa su eficacia en el peso del Pokémon objetivo. En este método se utiliza un Snorlax para que Ditto se transforme en él antes de lanzar la Ball, por lo que el cálculo toma como referencia un peso de 460.0 kg.",
    note: "Peso utilizado: Snorlax — 460.0 kg",
    captureRate: maximumRate,
    captureRateLabel: `${maximumRate}%`,
    captureCondition: "Ditto transformado en Snorlax",
    metricLabel: "Obtención",
    price: "Requiere Bonguri",
  },
  {
    id: "dream-ball",
    name: "Ensueño Ball",
    image: dreamBallImage,
    tag: "Bonita",
    variant: "pretty",
    description: "La Ensueño Ball está bonita.",
    captureRate: maximumRate,
    captureRateLabel: `${standardRate}% – ${maximumRate}%`,
    captureCondition: "Según turnos dormido",
    price: "$1,200",
  },
];
