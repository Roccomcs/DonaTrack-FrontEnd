import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage.jsx'
import { DonationDetailPage } from './pages/DonationDetailPage.jsx'
import { MapView } from './pages/MapView.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explorar-donaciones" element={<MapView />} />
      <Route path="/explorar-donaciones/:donationId" element={<DonationDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
