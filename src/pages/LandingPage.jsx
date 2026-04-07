import {
  ArrowRight,
  Camera,
  CheckCircle,
  Heart,
  Mail,
  MapPin,
  Phone,
  Users,
} from 'lucide-react'
import { createElement } from 'react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx'

const featuredDonations = [
  {
    id: 1,
    donorName: 'Maria Gonzalez',
    item: 'Ropa de invierno',
    date: '15 de marzo, 2026',
    beneficiary: 'Centro Comunitario Norte',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    donorName: 'Carlos Ramirez',
    item: 'Juguetes educativos',
    date: '20 de marzo, 2026',
    beneficiary: 'Escuela Primaria La Esperanza',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    donorName: 'Ana Lopez',
    item: 'Alimentos no perecederos',
    date: '28 de marzo, 2026',
    beneficiary: 'Comedor Social San Jose',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop',
  },
]

const recentDeliveries = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop',
    title: 'Entrega de utiles escolares',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=300&fit=crop',
    title: 'Distribucion de alimentos',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop',
    title: 'Donacion de ropa',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=300&fit=crop',
    title: 'Juguetes para ninos',
  },
]

const features = [
  {
    title: 'Transparencia total',
    description: 'Seguimiento en tiempo real de cada donacion con evidencia fotografica.',
    icon: CheckCircle,
  },
  {
    title: 'Conexion directa',
    description: 'Donantes y beneficiarios conectan sin intermediarios innecesarios.',
    icon: Users,
  },
  {
    title: 'Verificacion fotografica',
    description: 'Cada entrega queda documentada en una galeria publica y trazable.',
    icon: Camera,
  },
]

export function LandingPage() {
  return (
    <>
      <header className="dt-header">
        <div className="container dt-header-row">
          <a className="brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true">
              <Heart size={20} />
            </span>
            DonaTrack
          </a>
          <nav className="dt-nav" aria-label="Navegacion principal">
            <a href="#about">Acerca de</a>
            <a href="#donations">Donaciones</a>
            <a href="#gallery">Galeria</a>
            <a href="#contact">Contacto</a>
          </nav>
          <div className="auth-actions">
            <button type="button" className="btn btn-outline">Iniciar sesion</button>
            <button type="button" className="btn btn-primary">Registrarse</button>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="kicker">Donaciones transparentes y verificables</span>
              <h1>Cada ayuda cuenta, y cada entrega se puede comprobar.</h1>
              <p>
                DonaTrack conecta personas que donan con quienes necesitan apoyo,
                mostrando evidencia real de cada donacion mediante fotos publicas.
              </p>
              <div className="hero-actions">
                <button type="button" className="btn btn-primary">
                  Empezar a donar
                </button>
                <button type="button" className="btn btn-outline">
                  Ver como funciona <ArrowRight size={16} />
                </button>
              </div>
              <div className="stats" aria-label="Estadisticas destacadas">
                <div className="stat">
                  <strong>2,847</strong>
                  <span>donaciones verificadas</span>
                </div>
                <div className="stat">
                  <strong>1,234</strong>
                  <span>familias impactadas</span>
                </div>
                <div className="stat">
                  <strong>98%</strong>
                  <span>satisfaccion reportada</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&h=700&fit=crop"
                alt="Voluntarios preparando donaciones"
              />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2>Nuestro proposito</h2>
            <p className="section-copy">
              Hacemos que la solidaridad sea medible y visible para fortalecer la confianza.
            </p>
            <div className="feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <div className="feature-icon" aria-hidden="true">
                    {createElement(feature.icon, { size: 20 })}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="donations">
          <div className="container">
            <h2>Donaciones destacadas del mes</h2>
            <p className="section-copy">Ejemplos de entregas recientes con su trazabilidad.</p>
            <div className="donation-grid">
              {featuredDonations.map((donation) => (
                <article key={donation.id} className="donation-card">
                  <ImageWithFallback src={donation.image} alt={donation.item} />
                  <h3>{donation.item}</h3>
                  <p>
                    <strong>Donante:</strong> {donation.donorName}
                  </p>
                  <p className="meta">{donation.date}</p>
                  <p className="meta">Beneficiario: {donation.beneficiary}</p>
                  <button type="button" className="btn btn-outline">
                    Ver detalles
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <h2>Galeria de donaciones</h2>
            <p className="section-copy">Consulta entregas reales sin necesidad de iniciar sesion.</p>
            <div className="gallery-grid">
              {recentDeliveries.map((item) => (
                <figure key={item.id} className="gallery-item">
                  <ImageWithFallback src={item.image} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="cta-box">
              <h2>Sumate a una red de ayuda con evidencia real</h2>
              <p>
                Registra tus donaciones o solicita apoyo en una plataforma clara,
                colaborativa y centrada en el impacto social.
              </p>
              <div className="cta-actions">
                <button type="button" className="btn btn-outline">
                  Registrarme como donante
                </button>
                <button type="button" className="btn btn-outline">
                  Registrarme como beneficiario
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand">
                <span className="brand-mark" aria-hidden="true">
                  <Heart size={20} />
                </span>
                DonaTrack
              </div>
              <p>Transparencia para transformar la confianza en ayuda concreta.</p>
            </div>

            <div>
              <h4>Enlaces rapidos</h4>
              <ul>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#donations">Donaciones</a></li>
                <li><a href="#gallery">Galeria</a></li>
              </ul>
            </div>

            <div>
              <h4>Acceso</h4>
              <ul>
                <li><a href="#">Iniciar sesion</a></li>
                <li><a href="#">Registro donantes</a></li>
                <li><a href="#">Registro beneficiarios</a></li>
              </ul>
            </div>

            <div>
              <h4>Contacto</h4>
              <ul>
                <li><Mail size={14} /> info@donatrack.org</li>
                <li><Phone size={14} /> +52 55 1234 5678</li>
                <li><MapPin size={14} /> Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>

          <div className="legal">
            <a href="#">Terminos de servicio</a>
            <a href="#">Politica de privacidad</a>
            <a href="#">Aviso legal</a>
          </div>
        </div>
      </footer>
    </>
  )
}
