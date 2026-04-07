import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CalendarDays, MapPin, Package, Users, ArrowLeft } from 'lucide-react'
import { TopNav } from '../components/TopNav.jsx'
import { donations } from '../data/donations.js'

function DetailRow({ icon, label, value }) {
  return (
    <div className="donation-detail-row">
      <span className="donation-detail-row__icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  )
}

export function DonationDetailPage() {
  const navigate = useNavigate()
  const { donationId } = useParams()

  const donation = useMemo(
    () => donations.find((item) => item.id === donationId) ?? null,
    [donationId],
  )

  if (!donation) {
    return (
      <div className="map-page">
        <TopNav />
        <main className="detail-page">
          <section className="detail-card detail-card--empty">
            <h1>Donación no encontrada</h1>
            <p>La donación que intentas ver no existe o fue eliminada.</p>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/explorar-donaciones')}>
              Volver al mapa
            </button>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="map-page">
      <TopNav />
      <main className="detail-page">
        <section className="detail-card">
          <div className="detail-card__topbar">
            <button type="button" className="btn btn-outline detail-back-button" onClick={() => navigate('/explorar-donaciones')}>
              <ArrowLeft size={16} />
              Volver al mapa
            </button>
            <span className="status-badge">Entregada</span>
          </div>

          <header className="donation-modal__header detail-card__header">
            <div>
              <p className="donation-modal__eyebrow">Detalle de donación</p>
              <h1 id="donation-detail-title">{donation.title}</h1>
            </div>
          </header>

          <div className="donation-modal__body detail-card__body">
            <div className="donation-modal__cover">
              <img src={donation.image_url} alt={donation.title} />
            </div>

            <div className="donation-modal__details">
              <DetailRow icon={<Users size={18} />} label="Entidad beneficiaria" value={donation.entity_name} />
              <DetailRow icon={<MapPin size={18} />} label="Ubicación" value={donation.location.address} />
              <DetailRow icon={<CalendarDays size={18} />} label="Fecha de entrega" value={donation.delivery_date} />
              <DetailRow icon={<Package size={18} />} label="Resumen de artículos" value={`Total: ${donation.total_units} unidades`} />

              <div className="donation-detail-list">
                <p>Artículos donados</p>
                <ul>
                  {donation.items.map((item) => (
                    <li key={`${donation.id}-${item.name}`}>{item.name} ({item.quantity})</li>
                  ))}
                </ul>
              </div>

              <div className="donation-detail-summary">
                <p><strong>{donation.beneficiaries_count} personas beneficiadas</strong></p>
                <p>{donation.description}</p>
              </div>
            </div>
          </div>

          <footer className="donation-modal__footer detail-card__footer">
            <button type="button" className="btn btn-primary donation-modal__close" onClick={() => navigate('/explorar-donaciones')}>
              Cerrar
            </button>
          </footer>
        </section>
      </main>
    </div>
  )
}