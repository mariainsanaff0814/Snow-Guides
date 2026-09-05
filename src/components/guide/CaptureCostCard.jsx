import { formatMoney } from "./statisticsData";

export default function CaptureCostCard({ ball, costs }) {
  return (
    <section className="capture-cost-card" aria-labelledby="capture-cost-title">
      <h3 id="capture-cost-title">Costo esperado de captura</h3>
      <dl className="capture-cost-grid">
        <div>
          <dt>Ratio de captura</dt>
          <dd>{ball.captureRateLabel}</dd>
          {ball.captureCondition && <small>{ball.captureCondition}</small>}
        </div>
        <div>
          <dt>Balls promedio por Ditto</dt>
          <dd>{costs.averageBalls.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Precio por Ball</dt>
          <dd>{ball.price === null ? ball.acquisition : formatMoney(ball.price)}</dd>
        </div>
        <div>
          <dt>Costo esperado por Ditto</dt>
          <dd>
            {costs.costPerDitto === null
              ? "Costo no calculado"
              : formatMoney(costs.costPerDitto)}
          </dd>
        </div>
      </dl>
      {ball.price === null && (
        <p className="stats-note">
          La Peso Ball requiere Bonguri, por lo que su costo depende de los
          recursos utilizados para fabricarla.
        </p>
      )}
    </section>
  );
}
