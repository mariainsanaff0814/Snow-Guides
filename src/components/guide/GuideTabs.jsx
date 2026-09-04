const tabs = [
  { id: "summary", label: "Resumen", icon: "summary" },
  { id: "requirements", label: "Requisitos", icon: "check" },
  { id: "location", label: "Ubicación", icon: "pin" },
  { id: "pokemon", label: "Pokémon", icon: "pokemon" },
  { id: "balls", label: "Balls", icon: "ball" },
  { id: "stats", label: "Estadísticas", icon: "stats" },
];

function TabIcon({ name }) {
  const paths = {
    summary: <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />,
    check: <path d="M20 11a8 8 0 1 1-3-6.2M8.5 11.5l2.2 2.2L20 4.5" />,
    pin: <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0ZM9.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />,
    pokemon: <path d="M4.9 4.9a10 10 0 1 0 14.2 14.2M3 12h6m6 0h6m-6 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
    ball: <path d="M12 3a9 9 0 1 0 9 9h-6m-6 0H3m12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
    stats: <path d="M5 20v-7h4v7M10 20V4h4v16M15 20v-11h4v11M3 20h18" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function GuideTabs({ activeTab, onChange }) {
  return (
    <nav className="guide-tabs" aria-label="Secciones de la guía">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          className={`guide-tab${activeTab === tab.id ? " active" : ""}`}
          aria-current={activeTab === tab.id ? "page" : undefined}
          onClick={() => onChange(tab.id)}
        >
          <TabIcon name={tab.icon} />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
