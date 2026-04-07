import { CheckCircle2, Package, Users } from 'lucide-react'

function StatItem({ icon, label, value, iconClassName }) {
  return (
    <div className="map-stat-item">
      <span className={`map-stat-icon ${iconClassName}`} aria-hidden="true">
        {icon}
      </span>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  )
}

export function MapStatsBar({ donationsCount, beneficiariesCount, itemsCount }) {
  return (
    <section className="map-stats-bar" aria-label="Resumen de donaciones">
      <div className="container map-stats-grid">
        <StatItem
          icon={<CheckCircle2 size={18} />}
          label="Donaciones"
          value={donationsCount}
          iconClassName="map-stat-icon-green"
        />
        <StatItem
          icon={<Users size={18} />}
          label="Beneficiarios"
          value={beneficiariesCount}
          iconClassName="map-stat-icon-blue"
        />
        <StatItem
          icon={<Package size={18} />}
          label="Artículos"
          value={itemsCount}
          iconClassName="map-stat-icon-purple"
        />
      </div>
    </section>
  )
}