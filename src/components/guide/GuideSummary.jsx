export default function GuideSummary() {
  return (
    <section className="guide-panel" aria-labelledby="summary-title">
      <h2 id="summary-title">Resumen del farmeo</h2>
      <p>
        Los dittos aparecen en la Gruta Desértica, ubicada dentro de una casa
        de la Ruta 114 de Hoenn. Es un farmeo simple y sencillo; la principal
        dificultad se encuentra en completar la región y tener acceso a ciertas
        Poké Balls especiales.
      </p>

      <dl className="summary-facts">
        <div>
          <dt>Dificultad</dt>
          <dd className="difficulty-medium">Media</dd>
        </div>
        <div>
          <dt>Tiempo estimado</dt>
          <dd>Variable</dd>
        </div>
      </dl>
    </section>
  );
}
