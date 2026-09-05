import { formatMoney, marketData } from "./statisticsData";

const marketCards = [
  {
    title: "Precio promedio GTL",
    value: marketData.grossGTLPrice,
    secondary: "por Ditto",
  },
  {
    title: "Ganancia neta GTL",
    value: marketData.netGTLPrice,
    secondary: "después del impuesto",
    note: `Impuesto estimado: ${formatMoney(marketData.gtlTax)} por Ditto`,
  },
  {
    title: "Caja de 60 Dittos",
    value: marketData.boxPrice,
    secondary: "precio promedio actual",
  },
];

export default function MarketSummary() {
  return (
    <section className="stats-section guide-panel" aria-labelledby="market-title">
      <h2 id="market-title">Resumen del mercado</h2>
      <div className="market-summary-grid">
        {marketCards.map((card) => (
          <article className="market-card" key={card.title}>
            <h3>{card.title}</h3>
            <strong>{formatMoney(card.value)}</strong>
            <span>{card.secondary}</span>
            {card.note && <small>{card.note}</small>}
          </article>
        ))}
      </div>
      <p className="stats-note">
        Los precios son aproximados y pueden variar según la oferta y demanda del
        mercado.
      </p>
    </section>
  );
}
