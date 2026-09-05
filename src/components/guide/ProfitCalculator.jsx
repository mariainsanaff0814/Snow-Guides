import { useMemo, useState } from "react";
import CaptureCostCard from "./CaptureCostCard";
import {
  ballEconomyData,
  formatMoney,
  getCaptureCosts,
  marketData,
} from "./statisticsData";

const quantityOptions = [1, 10, 60, 100];

export default function ProfitCalculator() {
  const [quantityMode, setQuantityMode] = useState(60);
  const [customQuantity, setCustomQuantity] = useState("1");
  const [ballId, setBallId] = useState("dusk-ball");
  const [saleType, setSaleType] = useState("gtl");

  const quantity =
    quantityMode === "custom"
      ? Math.max(1, Number.parseInt(customQuantity, 10) || 1)
      : quantityMode;
  const ball = ballEconomyData.find((item) => item.id === ballId);
  const costs = getCaptureCosts(ball);

  const result = useMemo(() => {
    const completeBoxes = Math.floor(quantity / marketData.boxSize);
    const remainder = quantity % marketData.boxSize;
    const income =
      saleType === "gtl"
        ? quantity * marketData.netGTLPrice
        : completeBoxes * marketData.boxPrice;
    const totalCost =
      costs.costPerDitto === null ? null : costs.costPerDitto * quantity;
    const benefit = totalCost === null ? null : income - totalCost;
    const margin = income > 0 && benefit !== null ? (benefit / income) * 100 : 0;

    return { completeBoxes, remainder, income, totalCost, benefit, margin };
  }, [costs.costPerDitto, quantity, saleType]);

  const handleCustomQuantity = (event) => {
    const digits = event.target.value.replace(/\D/g, "");
    setCustomQuantity(digits === "0" ? "1" : digits);
  };

  return (
    <section className="stats-section guide-panel" aria-labelledby="calculator-title">
      <h2 id="calculator-title">Calculadora de rentabilidad</h2>
      <p>
        Calcula el costo de captura y la ganancia estimada según la cantidad de
        Dittos, la Poké Ball utilizada y la forma de venta.
      </p>

      <div className="calculator-layout">
        <div className="calculator-controls">
          <fieldset>
            <legend>Cantidad de Dittos</legend>
            <div className="quantity-options">
              {quantityOptions.map((option) => (
                <button
                  type="button"
                  className={quantityMode === option ? "active" : ""}
                  key={option}
                  onClick={() => setQuantityMode(option)}
                >
                  {option === 60 ? "60 (Caja)" : option}
                </button>
              ))}
              <button
                type="button"
                className={quantityMode === "custom" ? "active" : ""}
                onClick={() => setQuantityMode("custom")}
              >
                Personalizado
              </button>
            </div>
          </fieldset>

          {quantityMode === "custom" && (
            <label className="calculator-field">
              Cantidad personalizada
              <input
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                value={customQuantity}
                onChange={handleCustomQuantity}
              />
            </label>
          )}

          <div className="calculator-selects">
            <label className="calculator-field">
              Poké Ball utilizada
              <select value={ballId} onChange={(event) => setBallId(event.target.value)}>
                {ballEconomyData.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="calculator-field">
              Forma de venta
              <select value={saleType} onChange={(event) => setSaleType(event.target.value)}>
                <option value="gtl">GTL</option>
                <option value="box">Caja</option>
              </select>
            </label>
          </div>

          {saleType === "box" && (
            <p className="stats-note">
              La venta en caja se calcula en grupos completos de 60 Dittos.
              Actualmente se consideran {result.completeBoxes} caja(s) completa(s)
              y {result.remainder} Ditto(s) restante(s).
            </p>
          )}
        </div>

        <article className="calculator-result">
          <h3>Resultado estimado</h3>
          <dl>
            <div>
              <dt>Ingreso estimado</dt>
              <dd className="value-income">{formatMoney(result.income)}</dd>
            </div>
            <div>
              <dt>Costo de captura</dt>
              <dd className="value-cost">
                {result.totalCost === null
                  ? "Costo no calculado"
                  : formatMoney(result.totalCost)}
              </dd>
            </div>
            <div>
              <dt>Beneficio estimado</dt>
              <dd className="value-profit">
                {result.benefit === null
                  ? "No calculado"
                  : formatMoney(result.benefit)}
              </dd>
            </div>
            <div>
              <dt>Margen de ganancia</dt>
              <dd>
                {result.benefit === null ? "No calculado" : `${result.margin.toFixed(1)}%`}
              </dd>
            </div>
          </dl>
        </article>
      </div>

      <CaptureCostCard ball={ball} costs={costs} />
    </section>
  );
}
