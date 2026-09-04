const messages = {
  pokemon: "Próximamente: Pokémon recomendados",
  balls: "Próximamente: comparativa de Balls",
  stats: "Próximamente: costos, ganancias y rentabilidad",
};

export default function GuidePlaceholder({ section }) {
  return (
    <section className="guide-panel placeholder-panel">
      <p>{messages[section]}</p>
    </section>
  );
}
