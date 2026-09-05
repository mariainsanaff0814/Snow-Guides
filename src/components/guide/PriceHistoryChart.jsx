import { boxPriceHistory, formatMoney } from "./statisticsData";

const chartWidth = 600;
const chartHeight = 190;
const paddingX = 34;
const paddingY = 24;
const prices = boxPriceHistory.map((item) => item.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
const priceRange = maxPrice - minPrice || 1;
const points = boxPriceHistory.map((item, index) => ({
  ...item,
  x:
    paddingX +
    (index / Math.max(boxPriceHistory.length - 1, 1)) *
      (chartWidth - paddingX * 2),
  y:
    paddingY +
    ((maxPrice - item.price) / priceRange) * (chartHeight - paddingY * 2),
}));

export default function PriceHistoryChart() {
  return (
    <section className="stats-section guide-panel" aria-labelledby="history-title">
      <h2 id="history-title">Evolución del precio</h2>
      <p>Caja de 60 Dittos</p>
      <div className="history-chart">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          role="img"
          aria-label="Precio de una caja de 60 Dittos de julio a septiembre"
        >
          {[0, 0.5, 1].map((position) => (
            <line
              key={position}
              x1={paddingX}
              y1={paddingY + position * (chartHeight - paddingY * 2)}
              x2={chartWidth - paddingX}
              y2={paddingY + position * (chartHeight - paddingY * 2)}
              className="history-grid-line"
            />
          ))}
          <polyline
            points={points.map(({ x, y }) => `${x},${y}`).join(" ")}
            className="history-line"
          />
          {points.map(({ month, price, x, y }) => (
            <circle className="history-point" cx={x} cy={y} r="7" key={month}>
              <title>{`${month}: ${formatMoney(price)}`}</title>
            </circle>
          ))}
        </svg>
        <div className="history-values">
          {boxPriceHistory.map((item) => (
            <div key={item.month}>
              <span>{item.month}</span>
              <strong>{formatMoney(item.price)}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
