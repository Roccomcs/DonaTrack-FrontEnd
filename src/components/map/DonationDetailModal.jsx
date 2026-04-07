import { CalendarDays, MapPin, Package, Users, X } from 'lucide-react'

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

export function DonationDetailModal({ donation, onClose }) {
  if (!donation) {
    return null
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <section
        className="donation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="donation-modal__header">
          <div>
            <p className="donation-modal__eyebrow">Detalle de donación</p>
            <h2 id="donation-modal-title">{donation.title}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar modal">
            <X size={18} />
          </button>
        </header>

        <div className="donation-modal__body">
          <div className="donation-modal__cover">
            <img src={donation.image_url} alt={donation.title} />
            <span className="status-badge">Entregada</span>
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

        <footer className="donation-modal__footer">
          <button type="button" className="btn btn-primary donation-modal__close" onClick={onClose}>
            Cerrar
          </button>
        </footer>
      </section>
    </div>
  )
}