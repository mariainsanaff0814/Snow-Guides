import smeargleImage from "../../assets/pokemon/smeargle.png";
import safetyGogglesImage from "../../assets/items/safety-goggles.png";
import normalTypeIcon from "../../assets/icons/normal.svg";
import grassTypeIcon from "../../assets/icons/grass.svg";
import CaptureMethodCard from "./CaptureMethodCard";
import "./GuidePokemon.css";

const sharedDetails = [
  { label: "Rol", value: "Cazador" },
  { label: "Habilidad", value: "Opcional" },
  { label: "Naturaleza", value: "Opcional" },
  { label: "Nivel recomendado", value: "80+" },
  { label: "IV importantes", value: "Ataque 31 / Velocidad 31" },
  { label: "EV", value: "252 Ataque / 252 Velocidad / 6 PS" },
];

const captureMethods = [
  {
    id: "safety-goggles",
    label: "Método 1",
    title: "Smeargle con Gafas Protectoras",
    badge: "Recomendado",
    badgeStyle: "recommended",
    defaultOpen: true,
    pokemon: { name: "Smeargle", image: smeargleImage },
    details: [
      ...sharedDetails,
      {
        label: "Objeto",
        value: "Gafas Protectoras",
        image: safetyGogglesImage,
      },
    ],
    moves: [
      { name: "Falso Tortazo", type: "Normal", typeIcon: normalTypeIcon },
      { name: "Espora", type: "Planta", typeIcon: grassTypeIcon },
    ],
    strategy:
      "Al tener este Smeargle con Gafas Protectoras evitas que el Ditto enemigo pueda usar Espora sobre ti y dormirte. Al encontrar un Ditto, usa primero Falso Tortazo y después Espora. Cuando el Ditto esté dormido, utiliza una Ocaso Ball. Repite este proceso durante las primeras 15 capturas y, a partir del Ditto número 16, comienza a utilizar Acopio Ball.",
    flow: ["Falso Tortazo", "Espora", "Ocaso Ball / Acopio Ball"],
  },
  {
    id: "assist",
    label: "Método 2",
    title: "Smeargle con Ayuda",
    badge: "Económico",
    badgeStyle: "economic",
    defaultOpen: false,
    pokemon: { name: "Smeargle", image: smeargleImage },
    details: [...sharedDetails, { label: "Objeto", value: "Opcional" }],
    moves: [
      { name: "Falso Tortazo", type: "Normal", typeIcon: normalTypeIcon },
      { name: "Ayuda", type: "Normal", typeIcon: normalTypeIcon },
    ],
    auxiliary: [
      "Debes llevar en el equipo un Pokémon preparado para que Espora sea el único movimiento que pueda ser seleccionado por Ayuda.",
      "De esta forma, al utilizar Ayuda, Smeargle podrá ejecutar Espora para dormir al Ditto.",
    ],
    strategy:
      "Al encontrar un Ditto, utiliza Falso Tortazo y después Ayuda. Con el equipo preparado correctamente, Ayuda utilizará Espora para dormir al Ditto. Una vez dormido, utiliza una Ocaso Ball. Repite el proceso durante las primeras 15 capturas y, a partir del Ditto número 16, comienza a utilizar Acopio Ball.",
    note:
      "Los Ditto capturados en el equipo no interfieren con esta estrategia, ya que Transformar no puede ser seleccionado mediante Ayuda.",
    flow: ["Falso Tortazo", "Ayuda → Espora", "Ocaso Ball / Acopio Ball"],
  },
];

export default function GuidePokemon() {
  return (
    <section className="pokemon-methods" aria-labelledby="pokemon-guide-title">
      <div className="guide-panel pokemon-section-intro">
        <h2 id="pokemon-guide-title">Pokémon recomendados</h2>
        <p>
          Aquí encontrarás diferentes métodos y configuraciones de Pokémon para
          capturar dittos de forma eficiente. Cada método tiene sus ventajas y
          se adapta a distintos estilos de farmeo.
        </p>
      </div>

      <div className="capture-methods-list">
        {captureMethods.map((method) => (
          <CaptureMethodCard key={method.id} method={method} />
        ))}
      </div>
    </section>
  );
}
