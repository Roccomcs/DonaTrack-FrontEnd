import L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
import { MapPin } from 'lucide-react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

function createMarkerIcon() {
  return L.divIcon({
    className: 'donation-map-marker',
    html: renderToStaticMarkup(<MapPin size={30} color="#2563EB" strokeWidth={2.2} />),
    iconSize: [30, 42],
    iconAnchor: [15, 40],
    popupAnchor: [0, -36],
  })
}

const markerIcon = createMarkerIcon()

export function InteractiveMap({ donations, viewport, onSelectDonation }) {
  return (
    <div className="map-canvas">
      <MapContainer center={[viewport.lat, viewport.lng]} zoom={viewport.zoom} className="map-leaflet">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {donations.map((donation) => (
          <Marker
            key={donation.id}
            position={[donation.location.lat, donation.location.lng]}
            icon={markerIcon}
            eventHandlers={{
              click: () => onSelectDonation(donation.id),
            }}
          />
        ))}
      </MapContainer>
    </div>
  )
}