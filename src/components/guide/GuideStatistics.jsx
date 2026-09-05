import MarketSummary from "./MarketSummary";
import PriceHistoryChart from "./PriceHistoryChart";
import ProfitCalculator from "./ProfitCalculator";
import ProfitabilityChart from "./ProfitabilityChart";
import SalesComparison from "./SalesComparison";
import "./GuideStatistics.css";

export default function GuideStatistics() {
  return (
    <section className="statistics-guide" aria-labelledby="statistics-title">
      <header className="stats-section guide-panel stats-intro">
        <h2 id="statistics-title">Estadísticas</h2>
        <p>
          Analiza la rentabilidad del farmeo de Dittos, los costos de captura y la
          evolución del mercado.
        </p>
      </header>

      <MarketSummary />
      <ProfitCalculator />
      <ProfitabilityChart />
      <PriceHistoryChart />
      <SalesComparison />

      <footer className="stats-section guide-panel statistics-disclaimer">
        <p>
          Estos cálculos utilizan precios promedio y costos estimados. El mercado
          puede cambiar con el tiempo y los resultados reales pueden variar.
        </p>
        <p>
          No se consideran naturalezas, IVs ni características especiales de los
          Dittos.
        </p>
      </footer>
    </section>
  );
}
