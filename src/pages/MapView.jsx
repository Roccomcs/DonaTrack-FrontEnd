import { useNavigate } from 'react-router-dom'
import { TopNav } from '../components/TopNav.jsx'
import { InteractiveMap } from '../components/map/InteractiveMap.jsx'
import { MapStatsBar } from '../components/map/MapStatsBar.jsx'
import { donations } from '../data/donations.js'

export function MapView() {
  const navigate = useNavigate()
  const mapViewport = {
    lat: -34.6037,
    lng: -58.3816,
    zoom: 12,
  }

  const beneficiariesCount = donations.reduce((total, donation) => total + donation.beneficiaries_count, 0)
  const itemsCount = donations.reduce((total, donation) => total + donation.total_units, 0)

  return (
    <div className="map-page">
      <TopNav />
      <MapStatsBar
        donationsCount={donations.length}
        beneficiariesCount={beneficiariesCount}
        itemsCount={itemsCount}
      />

      <main className="map-page__content">
        <InteractiveMap
          donations={donations}
          viewport={mapViewport}
          onSelectDonation={(donationId) => navigate(`/explorar-donaciones/${donationId}`)}
        />
      </main>
    </div>
  )
}