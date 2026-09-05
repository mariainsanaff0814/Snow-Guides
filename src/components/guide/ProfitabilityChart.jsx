import {
  ballEconomyData,
  formatMoney,
  getCaptureCosts,
  marketData,
} from "./statisticsData";

const quantity = 60;
const income = quantity * marketData.netGTLPrice;
const chartData = ballEconomyData
  .filter((ball) => ball.price !== null)
  .map((ball) => ({
    ...ball,
    profit: income - getCaptureCosts(ball).costPerDitto * quantity,
  }));
const maximumProfit = Math.max(...chartData.map((item) => item.profit), 1);

export default function ProfitabilityChart() {
  return (
    <section className="stats-section guide-panel" aria-labelledby="profit-chart-title">
      <h2 id="profit-chart-title">Comparativa de rentabilidad</h2>
      <p>
        Beneficio estimado al capturar y vender Dittos utilizando distintas Poké
        Balls.
      </p>
      <span className="chart-context">60 Dittos · venta GTL</span>
      <div className="profit-chart" role="img" aria-label="Comparativa de beneficio estimado por Poké Ball">
        {chartData.map((item) => (
          <div className="profit-row" key={item.id}>
            <div className="profit-label">
              <span>{item.name}</span>
              <strong>{formatMoney(item.profit)}</strong>
            </div>
            <div className="profit-track">
              <span style={{ width: `${Math.max(0, (item.profit / maximumProfit) * 100)}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="stats-note">Peso Ball: sin costo económico definido.</p>
    </section>
  );
}
