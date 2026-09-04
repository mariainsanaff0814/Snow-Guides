export default function MoveList({ moves }) {
  return (
    <section className="build-block move-list">
      <h3>Movimientos</h3>
      <div className="move-items">
        {moves.map((move) => (
          <div className="move-item" key={move.name}>
            <img src={move.typeIcon} alt={`Tipo ${move.type}`} />
            <span>{move.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
