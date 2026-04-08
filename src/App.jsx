import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage.jsx'
import { DonationDetailPage } from './pages/DonationDetailPage.jsx'
import { MapView } from './pages/MapView.jsx'
import { RegisterPage } from './pages/RegisterPage.jsx'
import { RegisterDonorHumanPage } from './pages/RegisterDonorHumanPage.jsx'
import { RegisterDonorOrganizationPage } from './pages/RegisterDonorOrganizationPage.jsx'
import { RegisterBeneficiaryPage } from './pages/RegisterBeneficiaryPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explorar-donaciones" element={<MapView />} />
      <Route path="/explorar-donaciones/:donationId" element={<DonationDetailPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/registro/donante-humano" element={<RegisterDonorHumanPage />} />
      <Route path="/registro/donante-organizacion" element={<RegisterDonorOrganizationPage />} />
      <Route path="/registro/entidad-beneficiaria" element={<RegisterBeneficiaryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
