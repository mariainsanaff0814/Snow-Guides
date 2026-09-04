import MoveList from "./MoveList";

export default function PokemonBuild({ pokemon, details, moves }) {
  return (
    <div className="pokemon-build">
      <figure className="pokemon-profile">
        <img src={pokemon.image} alt={pokemon.name} />
        <figcaption>{pokemon.name}</figcaption>
      </figure>

      <section className="build-block build-details">
        <h3>Datos del Pokémon</h3>
        <dl>
          {details.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>
                {detail.image && <img src={detail.image} alt="" />}
                <span>{detail.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <MoveList moves={moves} />
    </div>
  );
}
