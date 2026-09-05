export default function BallCard({ ball }) {
  return (
    <article className={`ball-card ball-card-${ball.variant}`}>
      <div className="ball-image-shell">
        <img src={ball.image} alt={ball.name} />
      </div>

      <div className="ball-card-heading">
        <h3>{ball.name}</h3>
        <span className={`ball-tag ball-tag-${ball.variant}`}>{ball.tag}</span>
      </div>

      <p className="ball-description">{ball.description}</p>

      {ball.note && (
        <aside className={`ball-note ball-note-${ball.noteVariant ?? "soft"}`}>
          {ball.note}
        </aside>
      )}

      <dl className="ball-metrics">
        <div>
          <dt>Ratio de captura</dt>
          <dd>{ball.captureRateLabel}</dd>
          {ball.captureCondition && <small>{ball.captureCondition}</small>}
        </div>
        <div>
          <dt>{ball.metricLabel ?? "Precio"}</dt>
          <dd>{ball.price}</dd>
        </div>
      </dl>
    </article>
  );
}
