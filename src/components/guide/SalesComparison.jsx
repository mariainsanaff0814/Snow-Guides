import { formatMoney, marketData } from "./statisticsData";

const grossGTL = marketData.boxSize * marketData.grossGTLPrice;
const totalTax = marketData.boxSize * marketData.gtlTax;
const netGTL = marketData.boxSize * marketData.netGTLPrice;
const difference = marketData.boxPrice - netGTL;

export default function SalesComparison() {
  return (
    <section className="stats-section guide-panel" aria-labelledby="sales-title">
      <h2 id="sales-title">Comparativa de venta</h2>
      <p>Una caja de 60 Dittos</p>
      <div className="sales-grid">
        <article className="sales-card">
          <h3>GTL</h3>
          <dl>
            <div>
              <dt>60 × {formatMoney(marketData.grossGTLPrice)}</dt>
              <dd>{formatMoney(grossGTL)} bruto</dd>
            </div>
            <div>
              <dt>Impuestos</dt>
              <dd>60 × {formatMoney(marketData.gtlTax)} = {formatMoney(totalTax)}</dd>
            </div>
            <div>
              <dt>Ingreso neto</dt>
              <dd>{formatMoney(netGTL)}</dd>
            </div>
          </dl>
        </article>

        <article className="sales-card sales-card-box">
          <h3>Caja</h3>
          <dl>
            <div>
              <dt>Precio caja</dt>
              <dd>{formatMoney(marketData.boxPrice)}</dd>
            </div>
            <div>
              <dt>Ingreso neto</dt>
              <dd>{formatMoney(marketData.boxPrice)}</dd>
            </div>
          </dl>
        </article>
      </div>
      <p className="sales-difference">
        Diferencia a favor de la caja: <strong>{formatMoney(difference)}</strong>
      </p>
    </section>
  );
}
