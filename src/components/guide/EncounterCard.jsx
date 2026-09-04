export default function EncounterCard({
  image,
  name,
  encounter,
  level,
  appearance,
}) {
  return (
    <article className={`encounter-card${image ? "" : " text-only"}`}>
      {image && <img src={image} alt={name} />}
      <div className="encounter-info">
        <h3>{name}</h3>
        <span>{encounter}</span>
        <span>Nv. {level}</span>
        <strong>{appearance}</strong>
      </div>
    </article>
  );
}
